import { company } from "./config.mjs";

const supportMailto = `mailto:${company.supportEmail}`;

export const pages = [
  {
    outputPath: "index.html",
    title: "Lucky21Labs | Web and Mobile Product Studio",
    description:
      "Lucky21Labs builds practical web and mobile applications, including togu and an upcoming AI companion experience.",
    navKey: "home",
    heroClass: "hero-home",
    content: `
      <section class="hero-shell">
        <p class="eyebrow">Web and mobile products, built with care</p>
        <h1>Lucky21Labs creates focused software that feels useful on day one.</h1>
        <p class="hero-copy">
          We design and ship modern applications for everyday workflows, creative utility, and AI-assisted experiences.
          Our work is centered on clear interfaces, dependable performance, and products that earn a place in your routine.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="./togu/">Explore togu</a>
          <a class="button button-secondary" href="./support/">Contact Support</a>
        </div>
        <div class="hero-metrics">
          <article>
            <span class="metric-label">What we build</span>
            <strong>Web apps, mobile apps, and product experiences</strong>
          </article>
          <article>
            <span class="metric-label">Current release</span>
            <strong>togu | Image Resizer</strong>
          </article>
          <article>
            <span class="metric-label">In development</span>
            <strong>AI companion product coming soon</strong>
          </article>
        </div>
      </section>

      <section class="section-grid">
        <article class="panel panel-feature">
          <p class="eyebrow">About the company</p>
          <h2>Small team mindset. Product-level attention.</h2>
          <p>
            Lucky21Labs is built around a simple idea: software should be approachable, fast, and obviously helpful.
            We care about the details that make a product feel trustworthy, from first-run clarity to long-term maintainability.
          </p>
        </article>
        <article class="panel panel-feature">
          <p class="eyebrow">How we work</p>
          <h2>Practical features over unnecessary complexity.</h2>
          <p>
            We focus on sharp scope, thoughtful UX, and stable releases. That means solving real user problems with clean,
            modern interfaces instead of shipping noise for its own sake.
          </p>
        </article>
      </section>

      <section class="section-stack">
        <div class="section-heading">
          <p class="eyebrow">Products</p>
          <h2>What Lucky21Labs is building right now</h2>
        </div>
        <div class="product-grid">
          <article class="product-card">
            <span class="pill">Available now</span>
            <h3>togu suite</h3>
            <p>
              A growing suite of focused image manipulation apps built to keep common editing tasks fast, simple, and approachable. No
            </p>
            <a class="text-link" href="./togu/">See product details</a>
          </article>
          <article class="product-card">
            <span class="pill pill-muted">Coming soon</span>
            <h3>AI companion experience</h3>
            <p>
              An upcoming conversational product designed to make AI interaction feel more personal, grounded, and genuinely useful.
            </p>
            <a class="text-link" href="./companion/">Preview what’s coming</a>
          </article>
        </div>
      </section>
    `
  },
  {
    outputPath: "togu/index.html",
    title: "togu | Lucky21Labs",
    description:
      "Learn about togu, the Lucky21Labs suite of focused image manipulation apps.",
    navKey: "togu",
    heroClass: "hero-product",
    content: `
      <section class="hero-shell">
        <p class="eyebrow">Lucky21Labs suite</p>
        <h1>togu is a focused suite of image manipulation apps.</h1>
        <p class="hero-copy">
          togu brings together practical image tools designed for quick, repeatable tasks. Instead of one oversized editor,
          the suite is built as a set of purpose-driven apps that help people get in, make the change they need, and move on.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="./image-resizer/">View Image Resizer</a>
          <a class="button button-secondary" href="../support/">Get support</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <p class="eyebrow">Why the suite exists</p>
          <h2>Purpose-built tools for common image tasks.</h2>
          <p>
            togu is for the moments when a full creative application feels like too much. The suite focuses on the kinds of
            image adjustments people make all the time, with products shaped around clarity, speed, and minimal friction. 
            The togu suite of apps are built to have no tracking, no need for servers, no subscriptions, no ads, and no BS.
          </p>
        </article>
        <article class="panel">
          <p class="eyebrow">Suite direction</p>
          <h2>Small, useful apps that are easy to return to.</h2>
          <ul class="feature-list">
            <li>Focused workflows instead of a crowded all-in-one interface</li>
            <li>Everyday image tasks like resizing, preparing, and exporting</li>
            <li>Tools designed to feel lightweight without feeling disposable</li>
            <li>Lightweight apps that don't sacrifice your privacy or security</li>
            <li>No ads, no tracking, no servers, and no subscriptions</li>
          </ul>
        </article>
      </section>

      <section class="section-stack">
        <div class="section-heading">
          <p class="eyebrow">Products in the suite</p>
          <h2>Current and future togu apps.</h2>
        </div>
        <div class="product-grid">
          <article class="product-card">
            <span class="pill">Available now</span>
            <h3>togu | Image Resizer</h3>
            <p>A streamlined resizing app for preparing images for upload, sharing, listings, forms, and mobile-friendly use.</p>
            <a class="text-link" href="./image-resizer/">Open the product page</a>
          </article>
          <article class="product-card">
            <span class="pill pill-muted">Suite approach</span>
            <h3>Designed for everyday utility</h3>
            <p>Each togu app is meant to solve a specific image problem with less overhead, less confusion, and faster completion.</p>
          </article>
          <article class="product-card">
            <span class="pill pill-muted">Growing suite</span>
            <h3>Room for more focused tools</h3>
            <p>The suite structure gives Lucky21Labs a clean place to add future image manipulation products as they are released.</p>
          </article>
        </div>
      </section>
    `
  },
  {
    outputPath: "togu/image-resizer/index.html",
    title: "togu | Image Resizer | Lucky21Labs",
    description:
      "Learn about togu | Image Resizer, a focused image resizing app in the togu suite from Lucky21Labs.",
    navKey: "togu",
    heroClass: "hero-product",
    content: `
      <section class="hero-shell">
        <p class="eyebrow">togu product</p>
        <h1>togu | Image Resizer: No ads, no tracking, no servers, no subscriptions. Just you and your images.</h1>
        <p class="hero-copy">
          Image Resizer is the first app in the togu suite. It is built for people who need a dependable way to prepare
          images for upload, sharing, submissions, listings, and day-to-day web or mobile workflows.

        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="../../support/">Get support</a>
          <a class="button button-secondary" href="../">Back to the togu suite</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <p class="eyebrow">Why it exists</p>
          <h2>Resize without opening a full creative suite.</h2>
          <p>
            Image Resizer is for the moments when you just need the image to be the right size, look correct, and be ready to send.
            It removes the overhead of heavyweight editing tools for simple, repeatable tasks. The togu suite of apps are built to have
            no tracking, no need for servers, no subscriptions, no ads, and no BS.
          </p>
        </article>
        <article class="panel">
          <p class="eyebrow">Best for</p>
          <h2>Fast preparation for real-world workflows.</h2>
          <ul class="feature-list">
            <li>Preparing images for forms, uploads, and app submissions</li>
            <li>Creating web-friendly versions of larger originals</li>
            <li>Reducing friction in routine image handling tasks</li>
          </ul>
        </article>
      </section>

      <section class="section-stack">
        <div class="section-heading">
          <p class="eyebrow">Product approach</p>
          <h2>Built to feel lightweight, not limited.</h2>
        </div>
        <div class="product-grid">
          <article class="product-card">
            <h3>Focused workflow</h3>
            <p>Image Resizer concentrates on the resize-and-export path so common tasks stay quick and understandable.</p>
          </article>
          <article class="product-card">
            <h3>Clean experience</h3>
            <p>The product is designed to reduce guesswork and keep the path from input to output straightforward.</p>
          </article>
          <article class="product-card">
            <h3>Ready for iteration</h3>
            <p>This page gives you a clear public-facing product presence now, while leaving room to refine feature copy later.</p>
          </article>
        </div>
      </section>
    `
  },
  {
    outputPath: "companion/index.html",
    title: "AI Companion | Coming Soon | Lucky21Labs",
    description:
      "Preview the upcoming AI companion product from Lucky21Labs.",
    navKey: "companion",
    heroClass: "hero-companion",
    content: `
      <section class="hero-shell">
        <p class="eyebrow">Coming soon from Lucky21Labs</p>
        <h1>An AI companion product is on the way.</h1>
        <p class="hero-copy">
          We’re developing a new conversational experience built around presence, usefulness, and a more human-feeling interaction model.
          The product name and launch details are still in progress, but the direction is clear: thoughtful AI that feels easier to return to.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="../support/">Ask about the roadmap</a>
          <a class="button button-secondary" href="../">See current products</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <p class="eyebrow">What we’re exploring</p>
          <h2>A calmer, more supportive way to interact with AI.</h2>
          <p>
            The upcoming experience is being shaped around continuity, trust, and utility. We want it to feel capable without becoming cold,
            and personal without becoming distracting.
          </p>
        </article>
        <article class="panel">
          <p class="eyebrow">Status</p>
          <h2>Early-stage product, active development.</h2>
          <p>
            Branding, launch messaging, and feature details are still taking shape. This page is here to establish a public product presence
            while we continue refining the experience.
          </p>
        </article>
      </section>

      <section class="panel panel-callout">
        <p class="eyebrow">Stay in touch</p>
        <h2>If you’re curious about the product, we’d love to hear from you.</h2>
        <p>
          Questions, partnership conversations, and early interest can be sent to
          <a href="${supportMailto}">${company.supportEmail}</a>.
        </p>
      </section>
    `
  },
  {
    outputPath: "support/index.html",
    title: "Support | Lucky21Labs",
    description:
      "Contact Lucky21Labs support for product help and general inquiries.",
    navKey: "support",
    heroClass: "hero-support",
    content: `
      <section class="hero-shell">
        <p class="eyebrow">Support</p>
        <h1>We keep support simple and direct.</h1>
        <p class="hero-copy">
          For product questions, account issues, app-store related contact details, or general support inquiries,
          reach out and we’ll respond as quickly as we can.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="${supportMailto}">Email support</a>
          <a class="button button-secondary" href="../">Return home</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <p class="eyebrow">Contact</p>
          <h2>Support email</h2>
          <p><a href="${supportMailto}">${company.supportEmail}</a></p>
          <p class="small-text">Use this address for support across current and upcoming Lucky21Labs products.</p>
        </article>
        <article class="panel">
          <p class="eyebrow">Company</p>
          <h2>Lucky21Labs</h2>
          <p>${company.location}</p>
          <p class="small-text">This page is suitable for product listings that require a company website and contact destination.</p>
        </article>
      </section>

      <section class="panel">
        <p class="eyebrow">Need help with a product?</p>
        <h2>Include a few details so we can help faster.</h2>
        <ul class="feature-list">
          <li>The product name and a short description of the issue</li>
          <li>Your device or platform, if relevant</li>
          <li>Any screenshots, steps, or context that might help us reproduce the problem</li>
        </ul>
      </section>

      <section class="panel">
        <p class="eyebrow">Legal documents</p>
        <h2>Public links for app store listings and in-app menus.</h2>
        <p class="small-text">
          These pages are available as permanent public routes for product compliance and support use.
        </p>
        <ul class="feature-list">
          <li><a href="../legal/privacy/">Privacy Policy</a></li>
          <li><a href="../legal/terms/">Terms &amp; Conditions</a></li>
        </ul>
      </section>
    `
  },
  {
    outputPath: "legal/privacy/index.html",
    title: "Privacy Policy | Lucky21Labs",
    description:
      "Privacy Policy for applications from Lucky21Labs.",
    navKey: "support",
    heroClass: "hero-support legal-page",
    content: `
      <section class="hero-shell legal-hero">
        <p class="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p class="hero-copy">
          This privacy policy applies to the applications created by Lucky21Labs, LLC as a commercial service.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="mailto:${company.supportEmail}">Contact support</a>
          <a class="button button-secondary" href="../../support/">Back to support</a>
        </div>
      </section>

      <section class="panel legal-panel">
        <div class="legal-copy">
          <h2>What information does the Application obtain and how is it used?</h2>
          <p>The Application does not obtain any information when you download and use it. Registration is not required to use the Application.</p>

          <h2>Does the Application collect precise real time location information of the device?</h2>
          <p>This Application does not collect precise information about the location of your mobile device.</p>

          <h2>Do third parties see and/or have access to information obtained by the Application?</h2>
          <p>Since the Application does not collect any information, no data is shared with third parties.</p>

          <h2>What are my opt-out rights?</h2>
          <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes available as part of your mobile device or via the mobile application marketplace or network.</p>

          <h2>Children</h2>
          <p>The Application is not used to knowingly solicit data from or market to children under the age of 13.</p>
          <p>The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourages parents and legal guardians to monitor their children's Internet usage and help enforce this Policy by instructing their children never to provide personally identifiable information without permission. If you have reason to believe that a child has provided personally identifiable information through the Application and/or Services, please contact the Service Provider at <a href="mailto:${company.supportEmail}">${company.supportEmail}</a> so the necessary actions can be taken. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country, or have that consent provided by a parent or guardian where applicable.</p>

          <h2>Security</h2>
          <p>The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.</p>

          <h2>Changes</h2>
          <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes by updating this page. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
          <p>This Privacy Policy is effective as of March 30, 2026.</p>

          <h2>Your Consent</h2>
          <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions regarding privacy while using the Application, or questions about the practices, please contact the Service Provider via email at <a href="mailto:${company.supportEmail}">${company.supportEmail}</a>.</p>

          <p class="legal-note">Source basis: App Privacy Policy Generator template provided in your attached resource files.</p>
        </div>
      </section>
    `
  },
  {
    outputPath: "legal/terms/index.html",
    title: "Terms & Conditions | Lucky21Labs",
    description:
      "Terms and Conditions applications from Lucky21Labs.",
    navKey: "support",
    heroClass: "hero-support legal-page",
    content: `
      <section class="hero-shell legal-hero">
        <p class="eyebrow">Legal</p>
        <h1>Terms &amp; Conditions</h1>
        <p class="hero-copy">
          These terms and conditions apply to the applications created by Lucky21Labs, LLC as a commercial service.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="mailto:${company.supportEmail}">Contact support</a>
          <a class="button button-secondary" href="../../support/">Back to support</a>
        </div>
      </section>

      <section class="panel legal-panel">
        <div class="legal-copy">
          <p>Upon downloading or using the Application, you are automatically agreeing to these terms. Please read them carefully before using the Application.</p>

          <p>Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.</p>

          <p>The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.</p>

          <p>The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advises against jailbreaking or rooting your phone, which could expose your device to malware, viruses, malicious programs, compromise security features, and cause the Application to malfunction.</p>

          <p>Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity because of lack of access to Wi-Fi or because you have exhausted your data allowance.</p>

          <p>If you are using the Application outside of a Wi-Fi area, your mobile network provider's agreement terms still apply. You may incur charges from your mobile provider for data usage during your connection to the Application or other third-party charges. By using the Application, you accept responsibility for any such charges, including roaming data charges if you use the Application outside of your home territory without disabling data roaming. If you are not the bill payer for the device, it is assumed that you have obtained permission from the bill payer.</p>

          <p>Similarly, the Service Provider cannot always assume responsibility for your usage of the Application. For example, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.</p>

          <p>While the Service Provider strives to ensure that the Application is updated and accurate at all times, they rely on third parties to provide certain information. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the Application.</p>

          <p>The Service Provider may update the Application at some point. The Application is currently available according to the requirements of the operating system, and those requirements may change. You may need to download updates if you want to continue using the Application. The Service Provider does not guarantee that it will always update the Application to remain relevant to you or compatible with the operating system version installed on your device. The Service Provider may also stop providing the Application and may terminate its use at any time without prior notice. Unless otherwise stated, upon termination, the rights and licenses granted to you in these terms will end and you must stop using the Application and, if necessary, delete it from your device.</p>

          <h2>Changes to These Terms and Conditions</h2>
          <p>The Service Provider may periodically update these Terms and Conditions. You are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.</p>
          <p>These Terms and Conditions are effective as of March 30, 2026.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions or suggestions about these Terms and Conditions, please contact the Service Provider at <a href="mailto:${company.supportEmail}">${company.supportEmail}</a>.</p>

          <p class="legal-note">Source basis: App Privacy Policy Generator template provided in your attached resource files.</p>
        </div>
      </section>
    `
  }
];
