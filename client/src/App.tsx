import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Package,
  Phone,
  Server,
  Workflow
} from "lucide-react";
import { fallbackProfile } from "./data/profile";

const skillIcons = [Code2, Server, Database, Workflow, Layers3];

export function App() {
  const profile = fallbackProfile;
  const skillGroups = Object.entries(profile.skills);
  const featuredProjects = profile.projects;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label={`${profile.name} — home`}>
            <span className="brand-mark" aria-hidden="true">OD</span>
            <span className="brand-name">om<span className="brand-dot">.</span>dev</span>
          </a>
          <nav className="primary-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            <span>Let’s connect</span><ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> BACKEND &amp; PLATFORM</p>
            <h1 id="hero-title">I build dependable backend systems <span className="headline-accent">that scale with the product.</span></h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={17} aria-hidden="true" /></a>
              <a className="button button-quiet" href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" /> Email me</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} aria-hidden="true" /> {profile.location}</span>
              <span className="meta-separator" aria-hidden="true">·</span>
              <span>{profile.education.degree} · Class of 2027</span>
            </div>
          </div>

          <aside className="systems-card" aria-label="Engineering focus">
            <div className="systems-card-top">
              <div className="systems-avatar"><img src="/profile.webp" alt="Illustrated portrait of Om Dandagvhal" width="72" height="72" fetchPriority="high" /></div>
              <div><p className="card-overline">ENGINEERING FOCUS</p><h2>Build for the real world.</h2></div>
            </div>
            <div className="systems-list">
              <div className="systems-row"><span className="systems-icon"><Braces size={17} aria-hidden="true" /></span><div><strong>Service design</strong><span>Clear contracts · resilient APIs</span></div></div>
              <div className="systems-row"><span className="systems-icon"><Database size={17} aria-hidden="true" /></span><div><strong>Data systems</strong><span>Redis · MongoDB · SQL</span></div></div>
              <div className="systems-row"><span className="systems-icon"><Workflow size={17} aria-hidden="true" /></span><div><strong>Distributed systems</strong><span>Queues · rate limits · replication</span></div></div>
            </div>
            <div className="systems-card-foot"><span className="availability-mark" /> TypeScript-first · Test-minded · Product-aware</div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Technical strengths">
          <div className="section-wrap proof-grid">
            <div><span className="proof-number">01</span><div><strong>Backend engineering</strong><p>API design, auth, gateways and service boundaries</p></div></div>
            <div><span className="proof-number">02</span><div><strong>Reliability patterns</strong><p>Retries, rate limits, queues and failure handling</p></div></div>
            <div><span className="proof-number">03</span><div><strong>Systems thinking</strong><p>Trade-offs made explicit and code kept testable</p></div></div>
          </div>
        </section>

        <section className="section-wrap work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED ENGINEERING WORK</p><h2 id="work-title">Projects built around <span>real backend problems.</span></h2></div>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">All repositories <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article className={`project-card${project.highlight ? " project-card-highlight" : ""}`} key={project.name}>
                <div className="project-card-top"><span className="project-index">0{index + 1}</span><span className="project-category">{project.category}</span></div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-value">{project.impact}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel ?? "View project on GitHub"}<ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-wrap">
            <div className="section-heading section-heading-light">
              <div><p className="eyebrow">TECHNICAL TOOLKIT</p><h2 id="skills-title">A strong foundation.<br /><span>Practical range.</span></h2></div>
              <p className="section-intro">Focused on backend and platform engineering, with enough full-stack range to take a feature from API contract to usable interface.</p>
            </div>
            <div className="skill-grid">
              {skillGroups.map(([group, skills], index) => {
                const Icon = skillIcons[index] ?? Code2;
                return <article className="skill-card" key={group}>
                  <div className="skill-heading"><span className="skill-icon"><Icon size={18} aria-hidden="true" /></span><h3>{group}</h3></div>
                  <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="section-wrap credentials-section" id="education" aria-labelledby="education-title">
          <div className="credentials-main">
            <p className="eyebrow">EDUCATION &amp; CREDENTIALS</p>
            <h2 id="education-title">Learning the fundamentals.<br /><span>Building beyond them.</span></h2>
            <article className="education-card">
              <span className="education-icon"><GraduationCap size={21} aria-hidden="true" /></span>
              <div><h3>{profile.education.degree}</h3><p>{profile.education.school}</p><p className="education-university">{profile.education.university} <span>·</span> Expected 2027</p></div>
            </article>
          </div>
          <div className="credentials-side">
            <h3>Selected certifications</h3>
            <ul className="cert-list">{profile.certifications.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul>
            <h3 className="spoken-heading">Languages</h3>
            <p className="spoken-languages">English <span>Fluent</span> · Hindi <span>Native</span> · Marathi <span>Native</span></p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow">CONTACT</p><h2 id="contact-title">Let’s build something <span>reliable.</span></h2><p className="contact-copy">For software engineering roles, technical conversations, or collaboration on backend systems.</p></div>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" />GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true" />LinkedIn</a>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone size={16} aria-hidden="true" />Phone</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="footer-brand" href="#top">Om Dandagvhal <span>·</span> Software Engineer</a>
          <a className="footer-portfolio" href={profile.portfolio} target="_blank" rel="noopener noreferrer"><Package size={15} aria-hidden="true" /> Portfolio · portfolioomii.netlify.app</a>
          <span className="footer-location">Nashik, India</span>
        </div>
      </footer>
    </>
  );
}
