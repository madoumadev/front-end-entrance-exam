
class Block {
    constructor(value, options) {
        this.value = value
    }

    toHTML() {
        throw new Error('You should implement toHTML method')
    }
}


export class ImageBlock extends Block {
    constructor(value) {
        super(value);
    }

    toHTML() {
        return `<div class="profile-img">
                    <img alt="madoumadev profile" src="${this.value}"/>
                </div>`
    }
}

export class ExperienceBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return `
<div class="cv-container">
<section id="hero" class="flex-row">
  <img src="../../assets/me.png" alt="Profile picture of Karthik SR" class="profile-img">
  <div class="profile-intro card">
    <p class="greeting">Hello 👋🏻 I’m</p>
    <div class="identity">
      <h1 class="name">Karthik SR</h1>
      <p class="role">UX/UI Designer</p>
    </div>
  </div>
  <div class="languages card">
    <h2 class="card-title">Languages</h2>
    <div class="language-list">
      <div class="language-item">
        <span class="language-name">English</span>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: 100%;"></div>
        </div>
      </div>
      <div class="language-item">
        <span class="language-name">Malayalam</span>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: 100%;"></div>
        </div>
      </div>
      <div class="language-item">
        <span class="language-name">Hindi</span>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: 76%;"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<main id="main-content" class="flex-row">
  <div class="main-column">
    <section id="experience" class="card">
      <h2 class="card-title">Experience</h2>
      <div class="job-list">
        <article class="job-card job-card-highlight">
          <div class="job-header">
            <span class="job-date">Jun. 2023 - Present</span>
            <span class="job-tag">most recent</span>
          </div>
          <div class="job-body">
            <div class="job-info">
              <h3 class="job-title">Marketing Manager</h3>
              <p class="job-meta">Pankayam | Full-time</p>
            </div>
            <ul class="job-duties">
              <li>Strategy development and planning of campaigns that promote the business and generate genuine traffic</li>
              <li>SEO Content Creation for Blogs, Website, Social media</li>
            </ul>
          </div>
        </article>
        <article class="job-card job-card-white">
          <div class="job-header">
            <span class="job-date dark-text">2017 - Present</span>
          </div>
          <div class="job-body">
            <div class="job-info">
              <h3 class="job-title dark-text">Graphic / Web designer</h3>
              <p class="job-meta dark-text">Freelance</p>
            </div>
            <ul class="job-duties dark-text">
              <li>Development of internal projects from scratch, product design of brands</li>
              <li>Landing page, webapps and hybrid apps</li>
              <li>Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.</li>
            </ul>
          </div>
        </article>
        <article class="job-card job-card-white">
          <div class="job-header">
            <span class="job-date dark-text">Sep. 2021 - Jun. 2023</span>
          </div>
          <div class="job-body">
            <div class="job-info">
              <h3 class="job-title dark-text">Legal Assistant</h3>
              <p class="job-meta dark-text">Law Firm | Intern</p>
            </div>
            <ul class="job-duties dark-text">
              <li>Provide administrative support to lawyer and enhance office effectiveness</li>
              <li>Handle communication with clients, witnesses etc.</li>
              <li>Prepare case briefs and summarize depositions, interrogatories and testimony</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
    <section id="education" class="card">
      <h2 class="card-title">Education</h2>
      <div class="education-grid">
        <article class="edu-card edu-card-highlight">
          <div class="edu-header">
            <h4 class="edu-year">2023</h4>
            <img src="../../assets/5_129.svg" alt="Favorite icon">
          </div>
          <h3 class="edu-title">UI/UX</h3>
          <div class="edu-tags">
            <span>#UX</span> <span>#UI</span> <span>#research</span> <span>#DesignSystem</span> <span>#Ui</span> <span>#wireframing</span> <span>#figma</span> <span>#Ux</span>
          </div>
          <p class="edu-school">Coursera</p>
        </article>
        <article class="edu-card edu-card-white">
          <div class="edu-header">
            <h4 class="edu-year dark-text">2017 - 2022</h4>
          </div>
          <h3 class="edu-title dark-text">Law</h3>
          <div class="edu-tags green-tags">
            <span>#law</span> <span>#legalStudies</span> <span>#contracts</span> <span>#internationalLaws</span>
          </div>
          <p class="edu-school dark-text">University of Kerala</p>
        </article>
        <article class="edu-card edu-card-white">
          <div class="edu-header">
            <h4 class="edu-year dark-text">2017</h4>
          </div>
          <h3 class="edu-title dark-text">Graphic design</h3>
          <div class="edu-tags green-tags">
            <span>#branding</span> <span>#web</span> <span>#illustration</span> <span>#adobe</span>
          </div>
          <p class="edu-school dark-text">Coursrea</p>
        </article>
      </div>
    </section>
  </div>
  <div class="sidebar-column">
    <section id="tools" class="card">
      <h2 class="card-title">Tools</h2>
      <div class="tool-groups-container">
        <div class="tool-group">
          <div class="tool-tag-wrapper"><span class="tool-tag">design</span></div>
          <div class="tool-icons">
            <img src="../../assets/5_65.png" alt="Figma logo">
            <div class="icon-stack">
            <img src="../../assets/5_72.svg" alt="Adobe Photoshop icon part" style="position:absolute; top:0; left:0;">
            <img src="../../assets/5_73.svg" alt="Adobe Photoshop icon part" style="position:absolute; top:0; left:0;">
            </div>
            <div class="icon-stack">
            <img src="../../assets/5_77.svg" alt="Adobe Illustrator icon part" style="position:absolute; top:0; left:0;">
            <img src="../../assets/5_78.svg" alt="Adobe Illustrator icon part" style="position:absolute; top:0; left:0;">
            </div>
            <div class="icon-stack">
            <img src="../../assets/5_82.svg" alt="Adobe Premiere icon part" style="position:absolute; top:0; left:0;">
            <img src="../../assets/5_83.svg" alt="Adobe Premiere icon part" style="position:absolute; top:0; left:0;">
            </div>
            <img src="../../assets/5_86.svg" alt="Notion logo">
            <img src="../../assets/5_88.svg" alt="Google Meet logo">
          </div>
        </div>
        <div class="tool-group">
          <div class="tool-tag-wrapper"><span class="tool-tag">no-code</span></div>
          <div class="tool-icons">
            <img src="../../assets/5_100.svg" alt="Zapier logo">
            <img src="../../assets/5_103.svg" alt="Webflow logo">
            <img src="../../assets/5_104.svg" alt="Framer logo">
            <img src="../../assets/5_108.svg" alt="Wordpress logo">
          </div>
        </div>
        <div class="tool-group">
          <div class="tool-tag-wrapper"><span class="tool-tag">artoficial intelligence</span></div>
          <div class="tool-icons">
            <img src="../../assets/ce9b97e8c8cbb27ecfb755b3373a2c47023f9a0d.png" alt="ChatGPT logo">
            <img src="../../assets/b881f4710e292532edae0dd76f01956a196b1b49.png" alt="Copilot logo">
            <img src="../../assets/e4ac43c4df3fb9e9315141a9fa837e14bb6c8dbb.png" alt="Midjourney logo">
            <img src="../../assets/e4ac43c4df3fb9e9315141a9fa837e14bb6c8dbb.png" alt="Midjourney logo">
          </div>
        </div>
      </div>
    </section>
    <section id="interests" class="card">
      <h2 class="card-title">Interests</h2>
      <div class="interest-tags">
        <span class="interest-tag">branding</span>
        <span class="interest-tag">design</span>
        <span class="interest-tag">photography</span>
        <span class="interest-tag">artificial intelligence</span>
        <span class="interest-tag">illustration</span>
        <span class="interest-tag">typography</span>
        <span class="interest-tag">social networks</span>
        <span class="interest-tag">research</span>
        <span class="interest-tag">dron pilot</span>
        <span class="interest-tag">games</span>
      </div>
    </section>
  </div>
</main>
<footer id="contact" class="contact-card">
  <h2 class="contact-title">Let´s chat! I´m ready to work on excinting projects</h2>
  <a href="mailto:srkarthik.designscape@gmail.com" class="contact-email">srkarthik.designscape@gmail.com</a>
</footer>
</div>
    
  `
    }
}