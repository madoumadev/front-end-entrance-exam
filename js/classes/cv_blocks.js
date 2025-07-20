import {Block} from "./blocks.js";

class HeroSectionBlock extends Block {
    constructor(value) {
        super();
    }

    toHTML() {
        return `
        <section id="hero" class="flex-row">
          <img src="me.png" alt="Profile picture of Karthik SR" class="profile-img">
          <div class="profile-intro card">
            <p data-key="greeting" contenteditable="true" class="greeting editable">Hello 👋🏻 I’m</p>
            <div class="identity">
              <h1 data-key="name" contenteditable="true" class="name editable">Karthik SR</h1>
              <p data-key="role" contenteditable="true" class="role editable">UX/UI Designer</p>
            </div>
          </div>
          <div class="languages card">
            <h2 class="card-title editable" contenteditable="true" data-key="languages-title">Languages</h2>
            <div class="language-list">
              <div class="language-item">
                <span class="language-name editable" contenteditable="true" data-key="language-1">English</span>
                <div class="progress-bar-container">
                  <div class="progress-bar" style="width: 100%;"></div>
                </div>
              </div>
              <div class="language-item">
                <span class="language-name editable" contenteditable="true" data-key="language-2">Malayalam</span>
                <div class="progress-bar-container">
                  <div class="progress-bar" style="width: 100%;"></div>
                </div>
              </div>
              <div class="language-item">
                <span class="language-name editable" contenteditable="true" data-key="language-3">Hindi</span>
                <div class="progress-bar-container">
                  <div class="progress-bar" style="width: 76%;"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        `;
    }
}

class ExperienceSectionBlock extends Block {
    constructor(value) {
        super();
    }
    toHTML() {
        return `
        <section id="experience" class="card">
          <h2 class="card-title editable" contenteditable="true" data-key="experience-title">Experience</h2>
          <div class="job-list">
            <article class="job-card job-card-highlight">
              <div class="job-header">
                <span class="job-date editable" contenteditable="true" data-key="job-1-date">Jun. 2023 - Present</span>
                <span class="job-tag editable" contenteditable="true" data-key="job-1-tag">most recent</span>
              </div>
              <div class="job-body">
                <div class="job-info">
                  <h3 class="job-title editable" contenteditable="true" data-key="job-1-title">Marketing Manager</h3>
                  <p class="job-meta editable" contenteditable="true" data-key="job-1-meta">Pankayam | Full-time</p>
                </div>
                <ul class="job-duties">
                  <li class="editable" contenteditable="true" data-key="job-1-duty-1">Strategy development and planning of campaigns that promote the business and generate genuine traffic</li>
                  <li class="editable" contenteditable="true" data-key="job-1-duty-2">SEO Content Creation for Blogs, Website, Social media</li>
                </ul>
              </div>
            </article>
            <article class="job-card job-card-white">
              <div class="job-header">
                <span class="job-date dark-text editable" contenteditable="true" data-key="job-2-date">2017 - Present</span>
              </div>
              <div class="job-body">
                <div class="job-info">
                  <h3 class="job-title dark-text editable" contenteditable="true" data-key="job-2-title">Graphic / Web designer</h3>
                  <p class="job-meta dark-text editable" contenteditable="true" data-key="job-2-meta">Freelance</p>
                </div>
                <ul class="job-duties dark-text">
                  <li class="editable" contenteditable="true" data-key="job-2-duty-1">Development of internal projects from scratch, product design of brands</li>
                  <li class="editable" contenteditable="true" data-key="job-2-duty-2">Landing page, webapps and hybrid apps</li>
                  <li class="editable" contenteditable="true" data-key="job-2-duty-3">Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.</li>
                </ul>
              </div>
            </article>
            <article class="job-card job-card-white">
              <div class="job-header">
                <span class="job-date dark-text editable" contenteditable="true" data-key="job-3-date">Sep. 2021 - Jun. 2023</span>
              </div>
              <div class="job-body">
                <div class="job-info">
                  <h3 class="job-title dark-text editable" contenteditable="true" data-key="job-3-title">Legal Assistant</h3>
                  <p class="job-meta dark-text editable" contenteditable="true" data-key="job-3-meta">Law Firm | Intern</p>
                </div>
                <ul class="job-duties dark-text">
                  <li class="editable" contenteditable="true" data-key="job-3-duty-1">Provide administrative support to lawyer and enhance office effectiveness</li>
                  <li class="editable" contenteditable="true" data-key="job-3-duty-2">Handle communication with clients, witnesses etc.</li>
                  <li class="editable" contenteditable="true" data-key="job-3-duty-3">Prepare case briefs and summarize depositions, interrogatories and testimony</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        `;
    }
}

class EducationSectionBlock extends Block {
    constructor(value) {
        super();
    }
    toHTML() {
        return `
        <section id="education" class="card">
          <h2 class="card-title editable" contenteditable="true" data-key="education-title">Education</h2>
          <div class="education-grid">
            <article class="edu-card edu-card-highlight">
              <div class="edu-header">
                <h4 class="edu-year editable" contenteditable="true" data-key="edu-1-year">2023</h4>
                <img src="5_129.svg" alt="Favorite icon">
              </div>
              <h3 class="edu-title editable" contenteditable="true" data-key="edu-1-title">UI/UX</h3>
              <div class="edu-tags">
                <span class="editable" contenteditable="true" data-key="edu-1-tag-1">#UX</span> <span class="editable" contenteditable="true" data-key="edu-1-tag-2">#UI</span> <span class="editable" contenteditable="true" data-key="edu-1-tag-3">#research</span> <span class="editable" contenteditable="true" data-key="edu-1-tag-4">#DesignSystem</span> <span class="editable" contenteditable="true" data-key="edu-1-tag-5">#Ui</span> <span class="editable" contenteditable="true" data-key="edu-1-tag-6">#wireframing</span> <span class="editable" contenteditable="true" data-key="edu-1-tag-7">#figma</span> <span class="editable" contenteditable="true" data-key="edu-1-tag-8">#Ux</span>
              </div>
              <p class="edu-school editable" contenteditable="true" data-key="edu-1-school">Coursera</p>
            </article>
            <article class="edu-card edu-card-white">
              <div class="edu-header">
                <h4 class="edu-year dark-text editable" contenteditable="true" data-key="edu-2-year">2017 - 2022</h4>
              </div>
              <h3 class="edu-title dark-text editable" contenteditable="true" data-key="edu-2-title">Law</h3>
              <div class="edu-tags green-tags">
                <span class="editable" contenteditable="true" data-key="edu-2-tag-1">#law</span> <span class="editable" contenteditable="true" data-key="edu-2-tag-2">#legalStudies</span> <span class="editable" contenteditable="true" data-key="edu-2-tag-3">#contracts</span> <span class="editable" contenteditable="true" data-key="edu-2-tag-4">#internationalLaws</span>
              </div>
              <p class="edu-school dark-text editable" contenteditable="true" data-key="edu-2-school">University of Kerala</p>
            </article>
            <article class="edu-card edu-card-white">
              <div class="edu-header">
                <h4 class="edu-year dark-text editable" contenteditable="true" data-key="edu-3-year">2017</h4>
              </div>
              <h3 class="edu-title dark-text editable" contenteditable="true" data-key="edu-3-title">Graphic design</h3>
              <div class="edu-tags green-tags">
                <span class="editable" contenteditable="true" data-key="edu-3-tag-1">#branding</span> <span class="editable" contenteditable="true" data-key="edu-3-tag-2">#web</span> <span class="editable" contenteditable="true" data-key="edu-3-tag-3">#illustration</span> <span class="editable" contenteditable="true" data-key="edu-3-tag-4">#adobe</span>
              </div>
              <p class="edu-school dark-text editable" contenteditable="true" data-key="edu-3-school">Coursrea</p>
            </article>
          </div>
        </section>
        `;
    }
}

class ToolsSectionBlock extends Block {
    constructor(value) {
        super();
    }
    toHTML() {
        return `
        <section id="tools" class="card">
          <h2 class="card-title editable" contenteditable="true" data-key="tools-title">Tools</h2>
          <div class="tool-groups-container">
            <div class="tool-group">
              <div class="tool-tag-wrapper"><span class="tool-tag">design</span></div>
              <div class="tool-icons">
                <img src="5_65.png" alt="Figma logo">
                <img src="5_73.svg" alt="Adobe Photoshop icon part" >
                <img src="5_78.svg" alt="Adobe Illustrator icon part" >
                <img src="5_83.svg" alt="Adobe Premiere icon part" >
                <img src="5_86.svg" alt="Notion logo">
                <img src="5_88.svg" alt="Google Meet logo">
              </div>
            </div>
            <div class="tool-group">
              <div class="tool-tag-wrapper"><span class="tool-tag" >no-code</span></div>
              <div class="tool-icons">
                <div><img src="5_100.svg" alt="Zapier logo"></div>
                <div><img src="5_103.svg" alt="Webflow logo"></div>
                <div><img src="5_104.svg" alt="Framer logo"></div>
                <div><img src="5_108.svg" alt="Wordpress logo"></div>
              </div>
            </div>
            <div class="tool-group">
              <div class="tool-tag-wrapper"><span class="tool-tag editable" contenteditable="true" data-key="tool-group-3-tag">artoficial intelligence</span></div>
              <div class="tool-icons">
                <img src="chatgpt.png" alt="ChatGPT logo">
                <img src="copilot.png" alt="Copilot logo">
                <img src="Midjourney.png" alt="Midjourney logo">
              </div>
            </div>
          </div>
        </section>
        `;
    }
}

class InterestsSectionBlock extends Block {
    constructor(value) {
        super();
        this.interests = [
            'branding',
            'design', 
            'photography',
            'artificial intelligence',
            'illustration',
            'typography',
            'social networks',
            'research',
            'dron pilot',
            'games'
        ];
    }
    
    toHTML() {
        const interestTags = this.interests.map((interest, index) => 
            `<span class="interest-tag editable" contenteditable="true" data-key="interest-${index + 1}">${interest}</span>`
        ).join('');
        
        return `
        <section id="interests" class="card">
          <h2 class="card-title editable" contenteditable="true" data-key="interests-title">Interests</h2>
          <div class="interest-tags">
            ${interestTags}
          </div>
        </section>
        `;
    }
}

class ContactSectionBlock extends Block {
    constructor(value) {
        super();
    }
    toHTML() {
        return `
        <footer id="contact" class="contact-card">
          <h2 class="contact-title editable" contenteditable="true" data-key="contact-title">Let´s chat! I´m ready to work on excinting projects</h2>
          <a href="mailto:srkarthik.designscape@gmail.com" class="contact-email editable" contenteditable="true" data-key="contact-email">srkarthik.designscape@gmail.com</a>
        </footer>
        `;
    }
}

export class CvBuilder extends Block {
    constructor() {
        super();
    }

    toHTML() {
        const hero = new HeroSectionBlock().toHTML();
        const experience = new ExperienceSectionBlock().toHTML();
        const education = new EducationSectionBlock().toHTML();
        const tools = new ToolsSectionBlock().toHTML();
        const interests = new InterestsSectionBlock().toHTML();
        const contact = new ContactSectionBlock().toHTML();
        return `
            <div id="resume" class="cv-container">
                ${hero}
                <main id="main-content" class="flex-row">
                  <div class="main-column">
                    ${experience}
                  </div>
                  <div class="sidebar-column">
                    ${tools} 
                  </div>
                </main>
                <main id="main-content" class="flex-row">
                  <div class="main-column">
                    ${education}
                  </div>
                  <div class="sidebar-column">
                    ${interests} 
                    ${contact}
                  </div>
                </main>
            </div>
        `;
    }
}