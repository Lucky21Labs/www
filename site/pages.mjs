import { company } from "./config.mjs";

const supportMailto = `mailto:${company.supportEmail}`;

export const pages = [
  {
    outputPath: "index.html",
    title: "Lucky21Labs | Web and Mobile Development",
    description:
      "Lucky21Labs builds practical web and mobile applications, including togu and an upcoming AI companion experience.",
    navKey: "home",
    heroClass: "hero-home",
    content: `
      <section class="hero-shell">
        <h1>Focused software for everyday work.</h1>
        <p class="hero-copy">
          Lucky21 Labs builds web and mobile products that solve common tasks with less friction.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="./togu/index.html">View products</a>
          <a class="button button-secondary" href="./support/index.html">Contact support</a>
        </div>
        <div class="hero-metrics">
          <article>
            <span class="metric-label">Focus</span>
            <strong>Web and mobile product development</strong>
          </article>
          <article>
            <span class="metric-label">Live product</span>
            <strong>togu | Image Resizer</strong>
          </article>
          <article>
            <span class="metric-label">In progress</span>
            <strong>AI companion experience</strong>
          </article>
        </div>
      </section>

      <section class="section-grid">
        <article class="panel panel-feature">
          <h2>About Lucky21 Labs</h2>
          <p>
            We are a small product studio focused on practical software, clean interfaces, and stable releases.
          </p>
        </article>
        <article class="panel panel-feature">
          <h2>How we work</h2>
          <p>
            We keep scope tight, prioritize usability, and ship features that improve the product immediately.
          </p>
        </article>
      </section>

      <section class="section-stack">
        <div class="section-heading">
          <h2>Products</h2>
        </div>
        <div class="product-grid">
          <article class="product-card">
            <span class="pill">Available now</span>
            <h3>togu suite</h3>
            <p>Focused image tools for fast, routine editing tasks.</p>
            <a class="text-link" href="./togu/index.html">See product details</a>
          </article>
          <article class="product-card">
            <span class="pill pill-muted">Coming soon</span>
            <h3>AI companion experience</h3>
            <p>A conversational product in active development.</p>
            <a class="text-link" href="./companion/index.html">Preview what’s coming</a>
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
        <h1>togu is a focused image tool suite.</h1>
        <p class="hero-copy">
          Each app solves one common image task without the overhead of a large editor.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="./image-resizer/index.html">View Image Resizer</a>
          <a class="button button-secondary" href="../support/index.html">Get support</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <h2>Why togu</h2>
          <p>
            togu is built for routine image work where speed and clarity matter.
          </p>
        </article>
        <article class="panel">
          <h2>Principles</h2>
          <ul class="feature-list">
            <li>Focused workflows instead of a crowded all-in-one interface</li>
            <li>Tools designed for common tasks like resizing and preparing assets</li>
            <li>No ads, no tracking, no servers, and no subscriptions</li>
            <li>Clean interfaces that stay fast and easy to use</li>
          </ul>
        </article>
      </section>

      <section class="section-stack">
        <div class="section-heading">
          <h2>Current and planned apps</h2>
        </div>
        <div class="product-grid">
          <article class="product-card">
            <span class="pill">Available now</span>
            <h3>togu | Image Resizer</h3>
            <p>Resize images quickly for uploads, listings, forms, and sharing.</p>
            <a class="text-link" href="./image-resizer/index.html">Open the product page</a>
          </article>
          <article class="product-card">
            <span class="pill pill-muted">Suite approach</span>
            <h3>Designed for everyday utility</h3>
            <p>Each app is built to solve one task clearly and quickly.</p>
          </article>
          <article class="product-card">
            <span class="pill pill-muted">Growing suite</span>
            <h3>Room for more focused tools</h3>
            <p>New tools can be added over time without losing simplicity.</p>
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
        <h1>togu | Image Resizer</h1>
        <p class="hero-copy">
          Resize images quickly for the web, forms, listings, and daily sharing.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="../../support/index.html">Get support</a>
          <a class="button button-secondary" href="../index.html">Back to the togu suite</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <h2>Why it exists</h2>
          <p>
            Image Resizer covers the essentials: set dimensions, tune quality, and export.
          </p>
        </article>
        <article class="panel">
          <h2>Best for</h2>
          <ul class="feature-list">
            <li>Preparing images for forms, uploads, and app submissions</li>
            <li>Creating web-friendly versions of larger originals</li>
            <li>Handling recurring resize tasks with less friction</li>
          </ul>
        </article>
      </section>

      <section class="section-stack">
        <div class="section-heading">
          <h2>Product approach</h2>
        </div>
        <div class="product-grid">
          <article class="product-card">
            <h3>Focused workflow</h3>
            <p>Built around a fast resize-and-export flow.</p>
          </article>
          <article class="product-card">
            <h3>Clean experience</h3>
            <p>A simple interface keeps each step clear.</p>
          </article>
          <article class="product-card">
            <h3>Privacy-first model</h3>
            <p>No ads, no tracking, no servers, and no subscriptions.</p>
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
        <h1>AI companion, coming soon.</h1>
        <p class="hero-copy">
          We are building a conversational product focused on practical help and a calm, consistent experience.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="../support/index.html">Ask about the roadmap</a>
          <a class="button button-secondary" href="../index.html">See current products</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <h2>What we are building</h2>
          <p>
            The goal is simple: useful responses, steady context, and low-friction interaction.
          </p>
        </article>
        <article class="panel">
          <h2>Status</h2>
          <p>
            Early-stage product in active development. Name, launch timing, and details are still in progress.
          </p>
        </article>
      </section>

      <section class="panel panel-callout">
        <h2>Stay in touch</h2>
        <p>
          Questions, partnership inquiries, and early interest can be sent to
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
        <h1>Simple, direct support.</h1>
        <p class="hero-copy">
          For product questions or general inquiries, email us and we will respond as quickly as possible.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="${supportMailto}">Email support</a>
          <a class="button button-secondary" href="../index.html">Return home</a>
        </div>
      </section>

      <section class="detail-grid">
        <article class="panel">
          <h2>Support email</h2>
          <p><a href="${supportMailto}">${company.supportEmail}</a></p>
          <p class="small-text">Use this address for support across current and upcoming Lucky21 Labs products.</p>
        </article>
        <article class="panel">
          <h2>Lucky21Labs</h2>
          <p>${company.location}</p>
        </article>
      </section>

      <section class="panel">
        <h2>Include a few details</h2>
        <ul class="feature-list">
          <li>The product name and a short description of the issue</li>
          <li>Your device or platform, if relevant</li>
          <li>Any screenshots, steps, or context that might help us reproduce the problem</li>
        </ul>
      </section>

      <section class="panel">
        <h2>Legal documents</h2>
        <p class="small-text">
          These pages are available as permanent public routes for product compliance and support use.
        </p>
        <ul class="feature-list">
          <li><a href="../legal/privacy/index.html">Privacy Policy</a></li>
          <li><a href="../legal/terms/index.html">Terms &amp; Conditions</a></li>
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
          <a class="button button-secondary" href="../../support/index.html">Back to support</a>
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
          <a class="button button-secondary" href="../../support/index.html">Back to support</a>
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
