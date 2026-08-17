import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Languages as LanguagesIcon,
  Linkedin,
  Mail,
  Menu,
  Network,
  Phone,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import shivamPhoto from '@assets/bro_1786965381314.jpeg';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const skillGroups = [
  { label: 'Languages', icon: Terminal, skills: ['C++', 'JavaScript'] },
  { label: 'Frontend', icon: Code2, skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'] },
  { label: 'Backend', icon: Network, skills: ['Node.js', 'Express.js'] },
  { label: 'Database', icon: Zap, skills: ['MongoDB'] },
  { label: 'Tools', icon: BriefcaseBusiness, skills: ['Git', 'GitHub', 'Mapbox'] },
  { label: 'AI / APIs', icon: Sparkles, skills: ['OpenAI API', 'NLP'] },
];

const education = [
  {
    school: 'United College of Engineering and Research',
    program: 'Bachelor of Technology',
    year: '2022 – Present',
    result: '8.5 CGPA',
    current: true,
  },
  {
    school: 'Shiv Inter College',
    program: 'Class XII | CBSE',
    year: '2021',
    result: '60%',
    current: false,
  },
  {
    school: 'ST Thomas School',
    program: 'Class X | CBSE',
    year: '2018',
    result: '70%',
    current: false,
  },
];

const experiencePoints = [
  'Developed a responsive retail monitoring interface with a modern dashboard-focused user experience',
  'Implemented real-time vehicle tracking using Mapbox integration for live location visualization',
  'Integrated route management functionality to display optimized routes between locations',
  'Built an analytics dashboard for KPI monitoring and statistical insights',
  'Implemented secure authentication and responsive UI using Tailwind CSS',
];

const projects = [
  {
    number: '01',
    title: 'AI Resume Generator',
    label: 'AI / PRODUCTIVITY',
    accent: 'cyan',
    description:
      'Designed and developed an AI-powered resume generator capable of analyzing job descriptions and generating ATS-optimized resume content using NLP and automation techniques.',
    technologies: ['React.js', 'Tailwind CSS', 'OpenAI API', 'NLP', 'Vercel'],
    features: [
      'Job description analysis',
      'ATS-optimized resume generation',
      'AI-powered content generation',
      'Responsive interface',
    ],
  },
  {
    number: '02',
    title: 'Employee Management System',
    label: 'FULL-STACK / MERN',
    accent: 'mint',
    description: 'Developed a full-stack employee management application using the MERN stack.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: [
      'Secure authentication',
      'CRUD operations',
      'Employee data management',
      'Administrator interface',
    ],
  },
];

const certifications = [
  {
    title: 'Web Development, Android Development, Ethical Hacking and Networking',
    issuer: 'Netcamp',
  },
  {
    title: 'C++ Certification',
    issuer: 'United College of Engineering and Research, Prayagraj',
  },
  {
    title: 'Internship Certification',
    issuer: 'Muskurahat Foundation',
  },
];

const achievements = [
  'Won 1st Prize in the Zonal-Level Athletics Competition in Kabaddi',
  'Won 1st Prize in the District-Level Mathematics Olympiad Competition',
];

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[180px_1fr] md:items-end">
      <div className="font-mono-ui text-xs uppercase tracking-[0.28em] text-primary">
        <span className="mr-3 text-muted-foreground/60">{index}</span>
        {eyebrow}
      </div>
      <div>
        <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-border/80 bg-background/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <nav className="section-shell flex h-[74px] items-center justify-between" aria-label="Primary navigation">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
          data-testid="link-brand"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-primary/50 bg-primary/10 font-mono-ui text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            SP
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.16em] text-foreground">SHIVAM PANDEY</span>
        </a>

        <div className="hidden items-center gap-3 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-ui text-[9px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center border border-border bg-card/70 text-foreground transition-colors hover:border-primary hover:text-primary xl:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={18} strokeWidth={1.7} /> : <Menu size={18} strokeWidth={1.7} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="border-t border-border/80 bg-background/95 px-5 pb-5 pt-3 backdrop-blur-xl xl:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mx-auto grid max-w-[1180px] gap-1">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border/60 py-3 font-mono-ui text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  <span>{item.label}</span>
                  <span className="text-primary/60">0{index + 1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24" data-testid="section-home">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[-12%] top-[14%] h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[12%] right-[-8%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[110px]" aria-hidden="true" />

      <div className="section-shell relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 lg:py-28">
        <div>
          <motion.div
            className="mb-8 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-primary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            data-testid="status-open-to-opportunities"
          >
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
            Open to Opportunities
          </motion.div>

          <motion.p
            className="mb-4 font-mono-ui text-xs uppercase tracking-[0.34em] text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            B.Tech student · builder · problem solver
          </motion.p>
          <motion.h1
            className="max-w-4xl font-display text-[clamp(3.5rem,9vw,7.4rem)] font-semibold leading-[.9] tracking-[-0.075em] text-foreground"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            data-testid="heading-shivam-pandey"
          >
            SHIVAM
            <span className="block text-primary">PANDEY<span className="text-accent">.</span></span>
          </motion.h1>
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            <span className="h-px w-10 bg-primary" />
            <p className="font-display text-xl font-medium text-foreground sm:text-2xl" data-testid="text-full-stack-developer">
              Full-Stack Developer
            </p>
          </motion.div>
          <motion.p
            className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            data-testid="text-hero-supporting-copy"
          >
            A B.Tech student and aspiring full-stack developer applying to internships, placements, and entry-level software engineering roles.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            <a
              href="#projects"
              className="shine-button inline-flex items-center justify-center gap-3 bg-primary px-5 py-3.5 font-mono-ui text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              data-testid="link-view-projects"
            >
              View My Projects <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-border bg-card/60 px-5 py-3.5 font-mono-ui text-xs font-bold uppercase tracking-[0.12em] text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              data-testid="link-contact-me"
            >
              Contact Me <ArrowDownRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[530px] lg:ml-auto"
          initial={{ opacity: 0, scale: .96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .9, delay: .24, ease: [0.22, 1, .36, 1] }}
        >
          <div className="hero-orbit absolute -inset-4 opacity-80 sm:-inset-10" />
          <div className="hero-orbit absolute -inset-10 rotate-[22deg] opacity-40 sm:-inset-20" />
          <div className="glass relative aspect-[4/5] overflow-hidden p-2 shadow-md sm:p-3">
            <img
              src={shivamPhoto}
              alt="Shivam Pandey"
              className="h-full w-full object-cover object-[center_22%]"
            />
            <div className="absolute inset-2 bg-gradient-to-t from-background/90 via-background/5 to-transparent sm:inset-3" />
            <div className="absolute bottom-6 left-7 right-7 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
              <div>
                <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">Shivam Pandey</p>
                <p className="mt-1 font-mono-ui text-[9px] uppercase tracking-[.2em] text-primary">Full-Stack Developer</p>
              </div>
              <span className="mb-1 flex h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_14px_rgba(45,226,176,.9)]" />
            </div>
          </div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.25em] text-muted-foreground transition-colors hover:text-primary md:flex" data-testid="link-scroll-about">
        Scroll to explore <ChevronRight size={14} className="rotate-90" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative border-t border-border/70 py-24 sm:py-32" data-testid="section-about">
      <div className="section-shell">
        <SectionHeading index="01" eyebrow="About" title="Curious by default. Useful by design." description="I like turning a difficult brief into a clear interface, a reliable API, and a product people can actually use." />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="card-line border border-border bg-card/70 p-6 sm:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono-ui text-xs uppercase tracking-[.2em] text-primary">Profile / 2026</p>
                <h3 className="mt-5 max-w-xl font-display text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                  Building the bridge between thoughtful experiences and solid engineering.
                </h3>
              </div>
              <Code2 className="hidden shrink-0 text-primary/60 sm:block" size={30} strokeWidth={1.2} />
            </div>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">
              I am a B.Tech student with a strong interest in full-stack development, AI-powered projects, and modern web technologies. My approach is hands-on: understand the problem, keep the system legible, and ship an interface that earns its place.
            </p>
            <div className="mt-8 flex items-center gap-4 border-t border-border/70 pt-6">
              <span className="font-display text-5xl font-semibold tracking-[-.08em] text-primary" data-testid="text-cgpa">8.5</span>
              <span className="max-w-[120px] font-mono-ui text-[10px] uppercase leading-5 tracking-[.15em] text-muted-foreground">Current CGPA / United College</span>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ['01', 'Full-stack development', 'From responsive UI to dependable server-side logic.'],
              ['02', 'AI-powered projects', 'Exploring useful automation through NLP and APIs.'],
              ['03', 'Modern web technologies', 'Focused on clear systems and polished user experiences.'],
            ].map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * .08} className="card-line border border-border bg-secondary/45 p-5">
                <p className="font-mono-ui text-[10px] tracking-[.2em] text-primary">{number}</p>
                <h3 className="mt-6 font-display text-lg font-medium text-foreground" data-testid={`text-highlight-${number}`}>{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32" data-testid="section-skills">
      <div className="section-shell">
        <SectionHeading index="02" eyebrow="Toolkit" title="The tools I reach for." description="A focused toolkit for building, shipping, and iterating on the web." />
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.label} delay={index * .06} className="group relative min-h-[175px] bg-card/90 p-6 transition-colors hover:bg-secondary/80">
                <div className="flex items-start justify-between">
                  <Icon size={19} strokeWidth={1.5} className="text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="font-mono-ui text-[10px] text-muted-foreground/60">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-lg font-medium text-foreground">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="border border-border bg-background/50 px-2.5 py-1 font-mono-ui text-[10px] tracking-[.04em] text-muted-foreground" data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border/70 py-24 sm:py-32" data-testid="section-experience">
      <div className="section-shell">
        <SectionHeading index="03" eyebrow="Experience" title="A dashboard that stays in motion." description="GENTRAX / Retail Monitoring Frontend" />
        <Reveal className="grid overflow-hidden border border-border bg-card/70 lg:grid-cols-[.7fr_1.3fr]">
          <div className="relative min-h-[260px] overflow-hidden bg-secondary/70 p-7 sm:p-10">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-primary/20" />
            <div className="absolute -right-4 top-[-3px] h-64 w-64 rounded-full border border-primary/10" />
            <div className="relative">
              <p className="font-mono-ui text-xs uppercase tracking-[.2em] text-primary">Selected experience</p>
              <h3 className="mt-8 max-w-xs font-display text-3xl font-semibold tracking-[-.04em] text-foreground">GENTRAX</h3>
              <p className="mt-2 font-mono-ui text-xs uppercase tracking-[.16em] text-muted-foreground">Retail Monitoring Frontend</p>
              <div className="mt-16 flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono-ui text-[10px] uppercase tracking-[.15em]">Interface systems</span>
              </div>
            </div>
          </div>
          <div className="p-7 sm:p-10">
            <ul className="space-y-5">
              {experiencePoints.map((point, index) => (
                <li key={point} className="flex gap-4 text-sm leading-7 text-muted-foreground" data-testid={`experience-responsibility-${index + 1}`}>
                  <Check className="mt-1 shrink-0 text-primary" size={16} strokeWidth={2} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32" data-testid="section-projects">
      <div className="section-shell">
        <SectionHeading index="04" eyebrow="Projects" title="Work with a point of view." description="A couple of builds where product thinking and engineering meet." />
        <div className="space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * .1}>
              <article className="card-line group border border-border bg-card/70 p-6 transition-colors hover:bg-secondary/60 sm:p-9" data-testid={`card-project-${project.number}`}>
                <div className="grid gap-8 lg:grid-cols-[100px_1fr_260px] lg:gap-10">
                  <div className="flex items-start justify-between lg:block">
                    <span className="font-mono-ui text-sm text-primary">{project.number}</span>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-muted-foreground lg:mt-20 lg:block">{project.label}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-[-.05em] text-foreground sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground" data-testid={`text-project-description-${project.number}`}>{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`border px-2.5 py-1 font-mono-ui text-[10px] ${project.accent === 'cyan' ? 'border-primary/25 bg-primary/5 text-primary' : 'border-accent/25 bg-accent/5 text-accent'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border/70 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="font-mono-ui text-[10px] uppercase tracking-[.17em] text-muted-foreground">Features</p>
                    <ul className="mt-4 space-y-3">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-xs text-foreground/80">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-7 inline-flex cursor-not-allowed items-center gap-2 border border-border/80 px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[.12em] text-muted-foreground/55" aria-disabled="true" data-testid={`status-project-coming-soon-${project.number}`}>
                      Coming Soon <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-t border-border/70 py-24 sm:py-32" data-testid="section-education">
      <div className="section-shell">
        <SectionHeading index="05" eyebrow="Education" title="The foundation underneath." />
        <div className="relative ml-2 border-l border-primary/30 pl-7 sm:ml-10 sm:pl-10">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * .08} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary sm:-left-[47px]" />
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <p className="font-mono-ui text-xs uppercase tracking-[.15em] text-primary">{item.year}</p>
                  <h3 className="mt-3 font-display text-xl font-medium text-foreground sm:text-2xl" data-testid={`education-school-${index + 1}`}>{item.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.program}</p>
                </div>
                <div className="flex items-center gap-2 self-start border border-border bg-card/70 px-3 py-2 font-mono-ui text-xs text-foreground">
                  <GraduationCap size={15} className="text-primary" /> {item.result}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32" data-testid="section-certifications">
      <div className="section-shell">
        <SectionHeading index="06" eyebrow="Credentials" title="Proof of the practice." />
        <div className="grid gap-4 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * .08} className="card-line border border-border bg-card/70 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center border border-primary/30 bg-primary/5 text-primary">
                  <Sparkles size={16} strokeWidth={1.5} />
                </span>
                <span className="font-mono-ui text-[10px] text-muted-foreground/60">0{index + 1}</span>
              </div>
              <h3 className="mt-8 font-display text-lg font-medium leading-7 text-foreground" data-testid={`certification-${index + 1}`}>{certificate.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{certificate.issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="border-t border-border/70 py-24 sm:py-32" data-testid="section-achievements">
      <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <SectionHeading index="07" eyebrow="Beyond code" title="Competitive spirit." description="The same focus that shapes a good build shows up away from the editor, too." />
          <div className="mt-10 flex items-center gap-3 text-muted-foreground">
            <Trophy size={18} className="text-accent" />
            <span className="font-mono-ui text-[10px] uppercase tracking-[.18em]">Achievements</span>
          </div>
        </div>
        <div className="space-y-4 lg:pt-3">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement} delay={index * .1} className="group flex gap-5 border border-border bg-card/70 p-6 transition-colors hover:border-accent/50 hover:bg-secondary/60 sm:p-8" data-testid={`achievement-${index + 1}`}>
              <span className="font-mono-ui text-sm text-accent">0{index + 1}</span>
              <p className="max-w-lg font-display text-xl leading-snug text-foreground sm:text-2xl">{achievement}</p>
              <ArrowUpRight className="ml-auto shrink-0 text-muted-foreground/40 transition-colors group-hover:text-accent" size={19} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section className="relative py-24 sm:py-32" data-testid="section-languages">
      <div className="section-shell">
        <div className="grid gap-8 border-y border-border py-8 sm:grid-cols-[.7fr_1.3fr] sm:items-center sm:py-10">
          <div className="flex items-center gap-3">
            <LanguagesIcon size={18} className="text-primary" />
            <span className="font-mono-ui text-xs uppercase tracking-[.22em] text-primary">Languages</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
            {[
              ['Hindi', 'Native', 'native'],
              ['English', 'Proficient', 'proficient'],
            ].map(([language, level, testId]) => (
              <div key={language} className="flex items-center justify-between border-b border-border/70 pb-3" data-testid={`language-${testId}`}>
                <span className="font-display text-lg text-foreground">{language}</span>
                <span className="font-mono-ui text-[10px] uppercase tracking-[.13em] text-muted-foreground">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/70 py-28 sm:py-40" data-testid="section-contact">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="section-shell relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[.25em] text-primary">08 / Contact</p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[.9] tracking-[-.075em] text-foreground">
              Let’s Build
              <span className="block text-primary">Something Great<span className="text-accent">.</span></span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg" data-testid="text-contact-copy">
              Have an opportunity or project in mind? I’d love to connect.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a href="tel:8960231157" className="group flex items-center gap-3 font-mono-ui text-sm text-foreground transition-colors hover:text-primary" data-testid="link-phone">
              <Phone size={16} className="text-primary" /> 8960231157 <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="mailto:pandeyshivam0048@gmail.com" className="group flex items-center gap-3 font-mono-ui text-sm text-foreground transition-colors hover:text-primary" data-testid="link-email">
              <Mail size={16} className="text-primary" /> pandeyshivam0048@gmail.com <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://linkedin.com/in/shivam-pandey-1b812933" target="_blank" rel="noreferrer" className="group flex items-center gap-3 font-mono-ui text-sm text-foreground transition-colors hover:text-primary" data-testid="link-linkedin">
              <Linkedin size={16} className="text-primary" /> LinkedIn <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="site-noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Languages />
        <Contact />
      </main>
      <footer className="border-t border-border/70 py-7" data-testid="footer">
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-muted-foreground" data-testid="text-copyright">
            © 2026 Shivam Pandey. All rights reserved.
          </p>
          <a href="#home" className="group inline-flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.14em] text-muted-foreground transition-colors hover:text-primary" data-testid="link-back-to-top">
            Back to Top <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;