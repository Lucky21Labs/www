import http from "node:http";
import { watch } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "generated");
const args = process.argv.slice(2);

function getArgValue(flag, fallback) {
  const index = args.indexOf(flag);
  if (index === -1 || index + 1 >= args.length) return fallback;
  const parsed = Number(args[index + 1]);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".ico": "image/x-icon"
  };
  return map[ext] ?? "application/octet-stream";
}

function safeJoin(base, requestPath) {
  const normalized = path.posix.normalize(requestPath).replace(/^(\.\.(\/|\\|$))+/, "");
  return path.join(base, normalized);
}

async function runBuild() {
  await new Promise((resolve, reject) => {
    const build = spawn("node", [path.join(rootDir, "scripts", "build.mjs")], {
      stdio: "inherit"
    });

    build.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build failed with exit code ${code}`));
      }
    });

    build.on("error", reject);
  });
}

const port = getArgValue("--port", 4173);
const watchEnabled = !args.includes("--no-watch");
let buildInProgress = false;
let rebuildQueued = false;
let rebuildTimer = null;

async function queueBuild(reason = "change") {
  if (buildInProgress) {
    rebuildQueued = true;
    return;
  }

  buildInProgress = true;
  console.log(`[dev] Rebuilding (${reason})...`);
  try {
    await runBuild();
    console.log("[dev] Build complete.");
  } catch (error) {
    console.error(`[dev] Build failed: ${error.message}`);
  } finally {
    buildInProgress = false;
    if (rebuildQueued) {
      rebuildQueued = false;
      await queueBuild("queued change");
    }
  }
}

await runBuild();

function startWatchers() {
  const watchPaths = [
    path.join(rootDir, "site"),
    path.join(rootDir, "styles"),
    path.join(rootDir, "images"),
    path.join(rootDir, "scripts", "build.mjs")
  ];

  const watchers = watchPaths.map((watchPath) =>
    watch(watchPath, { recursive: true }, () => {
      if (rebuildTimer) clearTimeout(rebuildTimer);
      rebuildTimer = setTimeout(() => {
        queueBuild("source update");
      }, 120);
    })
  );

  process.on("SIGINT", () => {
    watchers.forEach((watcher) => watcher.close());
    process.exit(0);
  });

  process.on("SIGTERM", () => {
    watchers.forEach((watcher) => watcher.close());
    process.exit(0);
  });
}

if (watchEnabled) {
  startWatchers();
}

const server = http.createServer(async (req, res) => {
  try {
    const host = req.headers.host ? `http://${req.headers.host}` : `http://localhost:${port}`;
    const url = new URL(req.url ?? "/", host);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname.endsWith("/")) {
      pathname = `${pathname}index.html`;
    }

    let filePath = safeJoin(outputDir, pathname);

    try {
      const fileStat = await stat(filePath);
      if (fileStat.isDirectory()) {
        filePath = path.join(filePath, "index.html");
      }
    } catch {
      filePath = path.join(outputDir, "404.html");
    }

    const file = await readFile(filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", getContentType(filePath));
    res.end(file);
  } catch {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
  if (watchEnabled) {
    console.log("[dev] Watching for file changes...");
  }
  console.log("Press Ctrl+C to stop.");
});
