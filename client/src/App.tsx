import {
  ArrowRight,
  ExternalLink,
  FileCode2,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Mic2,
  Package,
  Phone,
  Sparkles,
  TerminalSquare
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fallbackProfile, type Profile } from "./data/profile";

type TabId = "about" | "projects" | "skills" | "certs";

const editorTabs: { id: TabId; label: string; icon: typeof FileCode2 }[] = [
  { id: "about", label: "about.ts", icon: FileCode2 },
  { id: "projects", label: "projects.md", icon: FileText },
  { id: "skills", label: "skills.md", icon: FileCode2 },
  { id: "certs", label: "certs.md", icon: Mic2 }
];

export function App() {
  const [profile, setProfile] = useState<Profile>(fallbackProfile);
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/profile", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Profile API unavailable");
        }
        return response.json() as Promise<Partial<Profile>>;
      })
      .then((data) => {
        if (data) {
          setProfile(prev => ({
            ...prev,
            ...data,
            skills: {
              ...prev.skills,
              ...(data.skills ?? {})
            },
            education: {
              ...prev.education,
              ...(data.education ?? {})
            },
            projects: Array.isArray(data.projects) ? data.projects : prev.projects,
            certifications: Array.isArray(data.certifications) ? data.certifications : prev.certifications,
            focus: Array.isArray(data.focus) ? data.focus : prev.focus,
            metrics: Array.isArray(data.metrics) ? data.metrics : prev.metrics,
            keywords: Array.isArray(data.keywords) ? data.keywords : prev.keywords
          }));
        }
      })
      .catch(() => setProfile(fallbackProfile));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!cursorRef.current || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let rafId = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if (!revealEls.length) return;

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const githubRoot = (profile.github ?? fallbackProfile.github).replace(/\/+$/, "");

  return (
    <>
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />
      <main className="page-shell terminal-layout">
        <header className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Om Dandagvhal home">
            <TerminalSquare size={20} aria-hidden="true" />
            <span>om.dev</span>
          </a>
          <div className="topbar-tabs" role="tablist" aria-label="Top level section">
            {editorTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`topbar-tab${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={13} aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </header>

        <section id="top" className="ide-shell reveal">
          <aside className="ide-profile" aria-label="Profile summary">
            <div className="ide-profile-header">
              <div className="ide-avatar">
                <img
                  src="/profile.png"
                  alt={`Illustrated profile avatar of ${profile.name}`}
                  loading="eager"
                />
              </div>
              <div>
                <h1>{profile.name}</h1>
                <p className="ide-role">{profile.role}</p>
                <p className="ide-location">
                  <MapPin size={14} aria-hidden="true" />
                  {profile.location}
                </p>
              </div>
            </div>

            <p className="ide-bio">{profile.summary}</p>

            <div
              className="ide-terminal"
              role="group"
              aria-label="Terminal widget"
            >
              <div className="ide-terminal-header">
                <span />
                <span />
                <span />
              </div>
              <div className="ide-terminal-body" aria-live="polite">
                <p className="ide-terminal-line command">
                  <span className="term-prompt">$</span> npx omdandagvhal
                </p>
                <p className="ide-terminal-line muted">Initializing...</p>
                <p className="ide-terminal-line muted">
                  Connected to <span className="term-accent">om.dev</span>
                </p>
                <p className="ide-terminal-line muted">
                  Links loaded. <span className="term-accent">Standing by</span>
                  ...
                </p>
              </div>
            </div>

            <div className="ide-contact" aria-label="Contact details">
              <a href={`tel:${(profile.phone ?? fallbackProfile.phone).replace(/\s/g, "")}`} title="Call">
                <Phone size={16} aria-hidden="true" />
                <span>{profile.phone ?? fallbackProfile.phone}</span>
              </a>
              <a href={`mailto:${profile.email ?? fallbackProfile.email}`} title="Email">
                <Mail size={16} aria-hidden="true" />
                <span>{profile.email ?? fallbackProfile.email}</span>
              </a>
            </div>

            <div className="ide-socials" aria-label="Social profiles">
              <a
                className="ide-social github"
                href={profile.github ?? fallbackProfile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github size={18} aria-hidden="true" />
              </a>
              <a
                className="ide-social linkedin"
                href={profile.linkedin ?? fallbackProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                className="ide-social npm"
                href={profile.npm ?? fallbackProfile.npm}
                target="_blank"
                rel="noreferrer"
                aria-label="npm package"
                title="npm"
              >
                <Package size={18} aria-hidden="true" />
              </a>
              <a
                className="ide-social mail"
                href={`mailto:${profile.email ?? fallbackProfile.email}`}
                aria-label="Email"
                title="Email"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </aside>

          <section className="ide-editor" aria-label="Resume terminal">
            <div className="ide-tabs" role="tablist" aria-label="Resume tabs">
              {editorTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`ide-tab${isActive ? " is-active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
              <div className="ide-window-controls" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="ide-content" role="tabpanel">
              {activeTab === "about" && (
                <AboutContent profile={profile} />
              )}
              {activeTab === "projects" && (
                <ProjectsContent profile={profile} githubRoot={githubRoot} />
              )}
              {activeTab === "skills" && <SkillsContent profile={profile} />}
              {activeTab === "certs" && (
                <CertsContent profile={profile} />
              )}
            </div>
          </section>
        </section>

        <footer>
          <span>Built with MERN + TypeScript · Crafted with care</span>
          <a href={profile.github ?? fallbackProfile.github} target="_blank" rel="noreferrer">
            {(profile.github ?? fallbackProfile.github).replace(/^https?:\/\/(www\.)?github\.com\//, "")}
          </a>
        </footer>
      </main>
    </>
  );
}

/* ---------------- Terminal-style tab content components ---------------- */

type Tok = { t: string; c?: string };

function tokStr(tokens: Tok[]): string {
  return tokens.reduce((acc, tk) => acc + tk.t, "");
}

const _Q = (s: string | undefined | null) => {
  const safe = s == null ? "" : String(s);
  return `'${safe.replace(/'/g, "\\'")}'`;
};

const _KW = (t: string): Tok => ({ t, c: "tok-kw" });
const _TY = (t: string): Tok => ({ t, c: "tok-ty" });
const _ST = (t: string): Tok => ({ t: _Q(t), c: "tok-st" });
const _PR = (t: string): Tok => ({ t, c: "tok-pr" });
const _ID = (t: string): Tok => ({ t, c: "tok-id" });
const _CO = (t: string): Tok => ({ t, c: "tok-co" });
const _TX = (t: string): Tok => ({ t });

function _ARR(items: string[]): Tok[] {
  const out: Tok[] = [_TX("[")];
  items.forEach((it, i) => {
    if (i > 0) out.push(_TX(", "));
    out.push(_ST(it));
  });
  out.push(_TX("]"));
  return out;
}

function CodeGutter({ rows }: { rows: Tok[][] }) {
  const width = String(rows.length).length;
  return (
    <pre className="ts-block" aria-label="about.ts TypeScript source">
      <code>
        {rows.map((row, idx) => (
          <div className="ts-line" key={idx}>
            <span className="ln">{String(idx + 1).padStart(width, " ")}</span>
            <span className="ts-code" title={tokStr(row)}>
              {row.map((tk, i) => {
                tk.c ? (
                  <span key={i} className={tk.c}>
                    {tk.t}
                  </span>
                ) : (
                  <span key={i}>{tk.t}</span>
                );
              })}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
}

function AboutContent({ profile }: { profile: Profile }) {
  const rows: Tok[][] = [
    [_CO("// Om Dandgavhal — profile source")],
    [],
    [_KW("interface"), _TX(" "), _TY("Developer"), _TX(" {")],
    [_TX("  "), _PR("name"), _TX(":"), _TX(" "), _TY("string"), _TX(";")],
    [_TX("  "), _PR("role"), _TX(":"), _TX(" "), _TY("string"), _TX(";")],
    [_TX("  "), _PR("location"), _TX(":"), _TX(" "), _TY("string"), _TX(";")],
    [_TX("  "), _PR("headline"), _TX(":"), _TX(" "), _TY("string"), _TX(";")],
    [_TX("  "), _PR("summary"), _TX(":"), _TX(" "), _TY("string"), _TX(";")],
    [_TX("  "), _PR("focus"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("  "), _PR("metrics"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("  "), _PR("keywords"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("};")],
    [],
    [_KW("interface"), _TX(" "), _TY("TechStack"), _TX(" {")],
    [_TX("  "), _PR("languages"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("  "), _PR("backend"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("  "), _PR("data"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("  "), _PR("realtime"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("  "), _PR("infrastructure"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("  "), _PR("frontend"), _TX(":"), _TX(" "), _TY("string"), _TX("[];")],
    [_TX("};")],
    [],
    [_KW("type"), _TX(" "), _TY("ContactType"), _TX(" =")],
    [_TX("  | "), _ST("github")],
    [_TX("  | "), _ST("linkedin")],
    [_TX("  | "), _ST("npm")],
    [_TX("  | "), _ST("email"), _TX(";")],
    [],
    [_KW("const"), _TX(" "), _ID("developer"), _TX(":"), _TX(" "), _TY("Developer"), _TX(" = {")],
    [_TX("  "), _PR("name"), _TX(":"), _TX(" "), _ST(profile.name), _TX(",")],
    [_TX("  "), _PR("role"), _TX(":"), _TX(" "), _ST(profile.role), _TX(",")],
    [_TX("  "), _PR("location"), _TX(":"), _TX(" "), _ST(profile.location), _TX(",")],
    [_TX("  "), _PR("headline"), _TX(":"), _TX(" "), _ST(profile.headline), _TX(",")],
    [_TX("  "), _PR("summary"), _TX(":"), _TX(" "), _ST(profile.summary), _TX(",")],
    [_TX("  "), _PR("focus"), _TX(":"), _TX(" "), ..._ARR(profile.focus ?? []), _TX(",")],
    [_TX("  "), _PR("metrics"), _TX(":"), _TX(" "), ..._ARR(profile.metrics ?? []), _TX(",")],
    [_TX("  "), _PR("keywords"), _TX(":"), _TX(" "), ..._ARR((profile.keywords ?? []).slice(0, 12)), _TX(" "), _TX(","), _CO("// + more")],
    [_TX("};")],
    [],
    [_KW("const"), _TX(" "), _ID("techStack"), _TX(":"), _TX(" "), _TY("TechStack"), _TX(" = {")],
    [_TX("  "), _PR("languages"), _TX(":"), _TX(" "), ..._ARR(profile.skills.languages ?? []), _TX(",")],
    [_TX("  "), _PR("backend"), _TX(":"), _TX(" "), ..._ARR(profile.skills.backend ?? []), _TX(",")],
    [_TX("  "), _PR("data"), _TX(":"), _TX(" "), ..._ARR(profile.skills.data ?? []), _TX(",")],
    [_TX("  "), _PR("realtime"), _TX(":"), _TX(" "), ..._ARR(profile.skills.realtime ?? []), _TX(",")],
    [_TX("  "), _PR("infrastructure"), _TX(":"), _TX(" "), ..._ARR(profile.skills.infrastructure ?? []), _TX(",")],
    [_TX("  "), _PR("frontend"), _TX(":"), _TX(" "), ..._ARR(profile.skills.frontend ?? [])],
    [_TX("};")],
    [],
    [_KW("const"), _TX(" "), _ID("education"), _TX(" = {")],
    [_TX("  "), _PR("degree"), _TX(":"), _TX(" "), _ST(profile.education.degree ?? ""), _TX(",")],
    [_TX("  "), _PR("school"), _TX(":"), _TX(" "), _ST(profile.education.school ?? ""), _TX(",")],
    [_TX("  "), _PR("university"), _TX(":"), _TX(" "), _ST(profile.education.university ?? ""), _TX(",")],
    [_TX("  "), _PR("graduation"), _TX(":"), _TX(" "), _ST(profile.education.graduation ?? "")],
    [_TX("};")],
    [],
    [_KW("export"), _TX(" { "), _ID("developer"), _TX(", "), _ID("techStack"), _TX(", "), _ID("education"), _TX(" };")]
  ];

  return (
    <article className="term-page ts-page">
      <header className="term-head ts-head">
        <p className="term-kicker">
          <Sparkles size={14} aria-hidden="true" />
          about.ts
        </p>
      </header>
      <CodeGutter rows={rows} />
    </article>
  );
}

function ProjectsContent({
  profile,
  githubRoot
}: {
  profile: Profile;
  githubRoot: string;
}) {
  return (
    <article className="term-page">
      <header className="term-head">
        <p className="term-kicker">
          <Github size={14} aria-hidden="true" />
          projects.md
        </p>
        <h2 className="term-h1">Projects</h2>
        <hr className="term-rule" />
      </header>

      {profile.projects.map((project, index) => {
        const url = project.url || `${githubRoot}`;
        const isExternal =
          !url.startsWith(githubRoot) && url.startsWith("https://www.npmjs");
        return (
          <section
            className="term-project"
            key={project.name}
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <h3 className="project-title">{project.name}</h3>
            <p className="project-tagline">
              {project.category} · {project.impact}
            </p>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="project-chip">
                  {tech}
                </span>
              ))}
            </div>
            <a
              className="project-link"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {isExternal ? (
                <>
                  View on npm <ExternalLink size={15} aria-hidden="true" />
                </>
              ) : (
                <>
                  View on GitHub <ArrowRight size={15} aria-hidden="true" />
                </>
              )}
            </a>
            {index < profile.projects.length - 1 && (
              <hr className="project-rule dim" />
            )}
          </section>
        );
      })}
    </article>
  );
}

function SkillsContent({ profile }: { profile: Profile }) {
  return (
    <article className="term-page">
      <header className="term-head">
        <p className="term-kicker">
          <FileCode2 size={14} aria-hidden="true" />
          skills.md
        </p>
        <h2 className="term-h1">Skills</h2>
        <hr className="term-rule" />
      </header>

      <section className="skills-grid">
        <div className="skills-column">
          <h3 className="skills-title">Languages</h3>
          <ul className="skills-list">
            {(profile.skills.languages ?? []).map((lang) => (
              <li key={lang} className="skills-item">
                <span className="skills-dot" />{lang}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-column">
          <h3 className="skills-title">Backend</h3>
          <ul className="skills-list">
            {(profile.skills.backend ?? []).map((skill) => (
              <li key={skill} className="skills-item">
                <span className="skills-dot" />{skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-column">
          <h3 className="skills-title">Data</h3>
          <ul className="skills-list">
            {(profile.skills.data ?? []).map((skill) => (
              <li key={skill} className="skills-item">
                <span className="skills-dot" />{skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-column">
          <h3 className="skills-title">Realtime</h3>
          <ul className="skills-list">
            {(profile.skills.realtime ?? []).map((skill) => (
              <li key={skill} className="skills-item">
                <span className="skills-dot" />{skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-column">
          <h3 className="skills-title">Infrastructure</h3>
          <ul className="skills-list">
            {(profile.skills.infrastructure ?? []).map((skill) => (
              <li key={skill} className="skills-item">
                <span className="skills-dot" />{skill}
              </li>
            ))}
          </ul