import { useEffect, useMemo, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
} from "react-icons/fi";

const stack = {
  Frontend: ["React", "JavaScript", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "REST APIs", "JWT / Auth", "Python", "PHP"],
  Databases: ["MySQL", "MariaDB", "SQLite", "Advanced SQL", "Stored Procedures"],
  Infrastructure: ["Linux", "Nginx", "Bash", "Docker", "Git", "GitHub / GitLab"],
};

const content = {
  es: {
    meta: {
      title: "Daniel Tovar | Desarrollador Full-Stack JavaScript",
      description:
        "Portfolio profesional de Daniel Tovar, desarrollador Full-Stack JavaScript en Guadalajara con experiencia en React, Node.js, Express, MySQL, APIs REST y Linux.",
      locale: "es_MX",
    },
    nav: { experience: "Experiencia", projects: "Proyectos", stack: "Stack", contact: "Contacto", cv: "CV" },
    menuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
    languageLabel: "Cambiar idioma a inglés",
    downloadCv: "Descargar CV",
    hero: {
      eyebrow: "Alberto Daniel Tovar Mendoza",
      line1: "Professional",
      line2: "Developer",
      lead: <>¡Hola! Soy <strong>Daniel Tovar</strong>, desarrollador Full-Stack con experiencia profesional desde 2019. Trabajo de punta a punta con React, Node.js, Express, bases de datos relacionales y servidores Linux.</>,
      projects: "Ver proyectos",
      profile: "PROFILE / 01",
      role: "Software Developer",
      focus: "enfoque.actual",
    },
    profile: {
      index: "PERFIL",
      title: "No solo hago interfaces. Construyo el sistema completo.",
      p1: "He trabajado en aplicaciones web y sistemas de gestión con reglas de negocio complejas, autenticación, APIs REST, bases de datos, procesos institucionales y modernización de sistemas existentes.",
      p2: "Me muevo cómodo entre frontend, backend y datos, y entiendo el despliegue como parte del producto, no como un paso ajeno al desarrollo.",
    },
    experience: {
      index: "EXPERIENCIA",
      title: "Trabajo profesional",
      intro: "Experiencia construyendo soluciones reales para operación diaria, no solo demos.",
      present: "2022 — Actualidad",
      role1: "Desarrollador Web",
      org1: "Universidad de Guadalajara · CUCS",
      desc1: "Diseño, desarrollo, optimización y mantenimiento de aplicaciones web internas y servicios institucionales, cubriendo backend, frontend y bases de datos.",
      bullets1: [
        "Sistemas académicos con validaciones de profesor, aula, horario y carga.",
        "Plataformas end-to-end con autenticación, seguridad y reglas de negocio.",
        "MySQL/MariaDB, SQL complejo, stored procedures y respaldos.",
        "Mantenimiento de legacy y preparación de versiones de reemplazo.",
      ],
      freelance: "2019 — 2022",
      role2: "Desarrollador Freelancer",
      org2: "Proyectos para clientes",
      desc2: "Desarrollo de sitios y aplicaciones desde landing pages hasta sistemas de registro, administración y control de información.",
      bullets2: [
        "JavaScript, HTML/CSS, PHP, Python y bases de datos relacionales.",
        "Levantamiento directo de requerimientos y definición de alcance.",
        "Publicación, mantenimiento, reportes PDF/Excel y resolución de incidencias.",
      ],
    },
    projectsSection: {
      index: "PROYECTOS",
      title: "Selección de trabajo",
      intro: "Una muestra del tipo de problemas que sé llevar de requerimiento a solución.",
      items: [
        {
          number: "01",
          title: "Programación académica · CUCS",
          type: "Sistema institucional",
          description: "Sistema para modelar y validar materias, secciones, NRC, carreras, departamentos, aulas, profesores, contratos, carga horaria y cruces de agenda.",
          tech: ["Node.js", "Express", "MySQL", "JavaScript"],
          note: "Universidad de Guadalajara",
        },
        {
          number: "02",
          title: "Selección de agenda para alumnos",
          type: "Aplicación end-to-end",
          description: "Plataforma construida desde la configuración del servidor hasta la interfaz: autenticación, seguridad, validaciones, backend y base de datos.",
          tech: ["Node.js", "Express", "Auth", "Linux"],
          note: "Universidad de Guadalajara",
        },
        {
          number: "03",
          title: "Gestión para comunidad Minecraft",
          type: "Proyecto independiente",
          description: "Aplicación React para administrar jugadores, roles, baneos, estilos, premios, noticias y visualizar un mapa en tiempo real.",
          tech: ["React", "Node.js", "APIs", "UI"],
          note: "Producto full-stack",
        },
        {
          number: "04",
          title: "Bot interactivo para Twitch",
          type: "Automatización + APIs",
          description: "Bot con Twitch API y OpenAI API para moderación e interacción, comandos personalizados, actividad, analítica y reportes por correo.",
          tech: ["Python", "SQLite", "Twitch API", "OpenAI API"],
          note: "Proyecto independiente",
        },
      ],
    },
    stackSection: {
      index: "STACK",
      title: "Herramientas con las que trabajo",
      intro: "Tecnologías que utilizo para construir y mantener aplicaciones web completas.",
      labels: { Frontend: "Frontend", Backend: "Backend", Databases: "Datos", Infrastructure: "Infraestructura" },
    },
    work: {
      index: "05 / FORMA DE TRABAJAR",
      title: "Me interesa entender el problema antes de escribir la solución.",
      principles: [
        ["Contexto primero", "Entender reglas, usuarios, restricciones y operación real antes de diseñar."],
        ["Software mantenible", "Prefiero soluciones claras, modulares y fáciles de extender frente a parches rápidos."],
        ["Responsabilidad end-to-end", "Puedo moverme desde UI y API hasta SQL, servidor y despliegue."],
      ],
    },
    contact: {
      index: "06 / CONTACTO",
      title: "¿Tienes un problema interesante que resolver?",
      text: "Estoy abierto a oportunidades como desarrollador Full-Stack, especialmente en equipos donde pueda construir, mejorar sistemas y seguir creciendo técnicamente.",
      email: "EMAIL",
      github: "GITHUB",
      location: "UBICACIÓN",
      city: "Guadalajara, Jalisco, México",
    },
    footer: "Diseñado y desarrollado en React por Daniel Tovar.",
    backTop: "Volver arriba ↑",
  },
  en: {
    meta: {
      title: "Daniel Tovar | Full-Stack JavaScript Developer",
      description:
        "Professional portfolio of Daniel Tovar, a Full-Stack JavaScript Developer in Guadalajara experienced with React, Node.js, Express, MySQL, REST APIs and Linux.",
      locale: "en_US",
    },
    nav: { experience: "Experience", projects: "Projects", stack: "Stack", contact: "Contact", cv: "CV" },
    menuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    languageLabel: "Switch language to Spanish",
    downloadCv: "Download CV",
    hero: {
      eyebrow: "Alberto Daniel Tovar Mendoza",
      line1: "Professional",
      line2: "Developer",
      lead: <>Hi! I'm <strong>Daniel Tovar</strong>, a Full-Stack Developer with professional experience since 2019. I work end-to-end with React, Node.js, Express, relational databases and Linux servers.</>,
      projects: "View projects",
      profile: "PROFILE / 01",
      role: "Software Developer",
      focus: "current.focus",
    },
    profile: {
      index: "PROFILE",
      title: "I don't just build interfaces. I build the complete system.",
      p1: "I have worked on web applications and management systems involving complex business rules, authentication, REST APIs, databases, institutional workflows and modernization of existing systems.",
      p2: "I am comfortable moving across frontend, backend and data, and I treat deployment as part of the product rather than a separate step outside development.",
    },
    experience: {
      index: "EXPERIENCE",
      title: "Professional experience",
      intro: "Experience building real solutions for daily operations, not just demos.",
      present: "2022 — Present",
      role1: "Web Developer",
      org1: "University of Guadalajara · CUCS",
      desc1: "Design, development, optimization and maintenance of internal web applications and institutional services across backend, frontend and database layers.",
      bullets1: [
        "Academic systems with instructor, classroom, schedule and workload conflict validation.",
        "End-to-end platforms with authentication, security and business rules.",
        "MySQL/MariaDB, complex SQL, stored procedures and backups.",
        "Legacy maintenance and preparation of replacement versions.",
      ],
      freelance: "2019 — 2022",
      role2: "Freelance Developer",
      org2: "Client projects",
      desc2: "Development of websites and applications ranging from landing pages to registration, administration and data management systems.",
      bullets2: [
        "JavaScript, HTML/CSS, PHP, Python and relational databases.",
        "Direct requirements gathering and project scope definition.",
        "Deployment, maintenance, PDF/Excel reports and incident resolution.",
      ],
    },
    projectsSection: {
      index: "PROJECTS",
      title: "Selected work",
      intro: "A sample of the problems I can take from requirement to working solution.",
      items: [
        {
          number: "01",
          title: "Academic scheduling · CUCS",
          type: "Institutional system",
          description: "System for modeling and validating courses, sections, NRCs, academic programs, departments, classrooms, instructors, contracts, workloads and schedule conflicts.",
          tech: ["Node.js", "Express", "MySQL", "JavaScript"],
          note: "University of Guadalajara",
        },
        {
          number: "02",
          title: "Student schedule selection",
          type: "End-to-end application",
          description: "Platform built from server configuration through the user interface, including authentication, security, validations, backend and database.",
          tech: ["Node.js", "Express", "Auth", "Linux"],
          note: "University of Guadalajara",
        },
        {
          number: "03",
          title: "Minecraft community management",
          type: "Independent project",
          description: "React application for managing players, roles, bans, styles, rewards, news and real-time map visualization.",
          tech: ["React", "Node.js", "APIs", "UI"],
          note: "Full-stack product",
        },
        {
          number: "04",
          title: "Interactive Twitch bot",
          type: "Automation + APIs",
          description: "Bot using the Twitch and OpenAI APIs for moderation and chat interaction, custom commands, activity logging, analytics and email reports.",
          tech: ["Python", "SQLite", "Twitch API", "OpenAI API"],
          note: "Independent project",
        },
      ],
    },
    stackSection: {
      index: "STACK",
      title: "Tools I work with",
      intro: "Technologies I use to build and maintain complete web applications.",
      labels: { Frontend: "Frontend", Backend: "Backend", Databases: "Databases", Infrastructure: "Infrastructure" },
    },
    work: {
      index: "05 / HOW I WORK",
      title: "I want to understand the problem before writing the solution.",
      principles: [
        ["Context first", "Understand rules, users, constraints and real-world operations before designing."],
        ["Maintainable software", "I prefer clear, modular and extensible solutions over quick patches."],
        ["End-to-end ownership", "I can move from UI and API work to SQL, servers and deployment."],
      ],
    },
    contact: {
      index: "06 / CONTACT",
      title: "Have an interesting problem to solve?",
      text: "I'm open to Full-Stack Developer opportunities, especially in teams where I can build, improve systems and continue growing technically.",
      email: "EMAIL",
      github: "GITHUB",
      location: "LOCATION",
      city: "Guadalajara, Jalisco, Mexico",
    },
    footer: "Designed and developed in React by Daniel Tovar.",
    backTop: "Back to top ↑",
  },
};

const cvByLanguage = {
  es: "/CV_Daniel_Tovar_ES.pdf",
  en: "/CV_Daniel_Tovar_EN.pdf",
};

function updateMeta(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function App() {
  const getInitialLanguage = () => {
    const urlLanguage = new URLSearchParams(window.location.search).get("lang");
    if (urlLanguage === "en" || urlLanguage === "es") return urlLanguage;
    const saved = localStorage.getItem("portfolio-language");
    return saved === "en" || saved === "es" ? saved : "es";
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();
  const t = useMemo(() => content[language], [language]);
  const cvHref = cvByLanguage[language];

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "es" ? "es-MX" : "en";
    document.title = t.meta.title;
    localStorage.setItem("portfolio-language", language);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);

    updateMeta('meta[name="description"]', "content", t.meta.description);
    updateMeta('meta[property="og:title"]', "content", t.meta.title);
    updateMeta('meta[property="og:description"]', "content", t.meta.description);
    updateMeta('meta[property="og:locale"]', "content", t.meta.locale);
    updateMeta('meta[property="og:url"]', "content", `https://dato.dannprod.com/?lang=${language}`);
    updateMeta('meta[name="twitter:title"]', "content", t.meta.title);
    updateMeta('meta[name="twitter:description"]', "content", t.meta.description);
    updateMeta('link[rel="canonical"]', "href", `https://dato.dannprod.com/?lang=${language}`);
  }, [language, t]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((current) => (current === "es" ? "en" : "es"));
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#inicio" className="brand" onClick={(e) => { e.preventDefault(); go("inicio"); }} aria-label="Daniel Tovar — Full-Stack Developer">
          <span className="brand-mark">DT</span>
          <span className="brand-copy"><strong>Daniel Tovar</strong><small>Full-Stack Developer</small></span>
        </a>

        <nav className="desktop-nav" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
          <button onClick={() => go("experiencia")}>{t.nav.experience}</button>
          <button onClick={() => go("proyectos")}>{t.nav.projects}</button>
          <button onClick={() => go("stack")}>{t.nav.stack}</button>
          <button onClick={() => go("contacto")}>{t.nav.contact}</button>
        </nav>

        <div className="header-actions">
          <button className="language-switch" onClick={toggleLanguage} aria-label={t.languageLabel} title={t.languageLabel}>
            <FiGlobe aria-hidden="true" />
            <span>{language === "es" ? "EN" : "ES"}</span>
          </button>
          <a className="header-cta" href={cvHref} download>{t.nav.cv} <FiDownload aria-hidden="true" /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.closeMenuLabel : t.menuLabel} aria-expanded={menuOpen}>
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label={language === "es" ? "Navegación móvil" : "Mobile navigation"}>
          <button onClick={() => go("experiencia")}>{t.nav.experience}</button>
          <button onClick={() => go("proyectos")}>{t.nav.projects}</button>
          <button onClick={() => go("stack")}>{t.nav.stack}</button>
          <button onClick={() => go("contacto")}>{t.nav.contact}</button>
          <button onClick={toggleLanguage}><FiGlobe aria-hidden="true" /> {language === "es" ? "English" : "Español"}</button>
          <a href={cvHref} download>{t.downloadCv} <FiDownload aria-hidden="true" /></a>
        </nav>
      )}

      <main>
        <section className="hero section" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">{t.hero.eyebrow}</div>
            <h1 id="hero-title">{t.hero.line1}<span>{t.hero.line2}</span></h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => go("proyectos")}>{t.hero.projects} <FiArrowDownRight aria-hidden="true" /></button>
              <a className="btn secondary" href={cvHref} download>{t.downloadCv} <FiDownload aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero-visual">
            {/* <div className="portrait-frame">
              <img src="/daniel-tovar.jpg" alt="Daniel Tovar, Full-Stack JavaScript Developer" width="577" height="704" fetchPriority="high" />
              <div className="portrait-overlay" aria-hidden="true" />
              <div className="portrait-label"><span>{t.hero.profile}</span><strong>Daniel Tovar</strong><small>{t.hero.role}</small></div>
            </div> */}
            <div className="code-card">
              <span>{t.hero.focus}</span>
              <strong>Full-Stack Developer</strong>
              <p>React + Node.js + Express + MySQL + Linux</p>
            </div>
          </div>
        </section>

        <section className="section statement" aria-labelledby="profile-title">
          <p className="section-index">{t.profile.index}</p>
          <div className="statement-grid">
            <h2 id="profile-title">{t.profile.title}</h2>
            <div><p>{t.profile.p1}</p><p>{t.profile.p2}</p></div>
          </div>
        </section>

        <section className="section" id="experiencia" aria-labelledby="experience-title">
          <div className="section-heading">
            <div><p className="section-index">{t.experience.index}</p><h2 id="experience-title">{t.experience.title}</h2></div>
            <p>{t.experience.intro}</p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">{t.experience.present}</div>
              <div className="timeline-content">
                <div className="role-line"><h3>{t.experience.role1}</h3><span>{t.experience.org1}</span></div>
                <p>{t.experience.desc1}</p>
                <ul>{t.experience.bullets1.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">{t.experience.freelance}</div>
              <div className="timeline-content">
                <div className="role-line"><h3>{t.experience.role2}</h3><span>{t.experience.org2}</span></div>
                <p>{t.experience.desc2}</p>
                <ul>{t.experience.bullets2.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section projects-section" id="proyectos" aria-labelledby="projects-title">
          <div className="section-heading">
            <div><p className="section-index">{t.projectsSection.index}</p><h2 id="projects-title">{t.projectsSection.title}</h2></div>
            <p>{t.projectsSection.intro}</p>
          </div>
          <div className="project-list">
            {t.projectsSection.items.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
                <div className="project-note">{project.note}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <div><p className="section-index">{t.stackSection.index}</p><h2 id="stack-title">{t.stackSection.title}</h2></div>
            <p>{t.stackSection.intro}</p>
          </div>
          <div className="skills-grid">
            {Object.entries(stack).map(([group, items], index) => (
              <div className="skill-card" key={group}>
                <span>0{index + 1}</span>
                <h3>{t.stackSection.labels[group]}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section about-work" aria-labelledby="work-title">
          <p className="section-index">{t.work.index}</p>
          <div className="about-work-grid">
            <h2 id="work-title">{t.work.title}</h2>
            <div className="principles">
              {t.work.principles.map(([title, description], index) => (
                <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contacto" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div>
              <p className="section-index">{t.contact.index}</p>
              <h2 id="contact-title">{t.contact.title}</h2>
              <p>{t.contact.text}</p>
            </div>
            <div className="contact-links">
              <a href="mailto:daniel.tovar@dannprod.com"><FiMail aria-hidden="true" /><span><small>{t.contact.email}</small>daniel.tovar@dannprod.com</span><FiArrowUpRight aria-hidden="true" /></a>
              <a href="https://github.com/DannDato" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /><span><small>{t.contact.github}</small>@DannDato</span><FiArrowUpRight aria-hidden="true" /></a>
              <div className="location-row"><FiMapPin aria-hidden="true" /><span><small>{t.contact.location}</small>{t.contact.city}</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div><strong>Daniel Tovar</strong><span>Full-Stack Developer</span></div>
        <p>© {year} · {t.footer}</p>
        <button onClick={() => go("inicio")}>{t.backTop}</button>
      </footer>
    </div>
  );
}

export default App;
