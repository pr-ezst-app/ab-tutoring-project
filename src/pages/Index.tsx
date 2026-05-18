import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.ezst.app/projects/8b987f80-0d5c-4cf9-b151-5a416da76aaa/files/541c3a2a-3675-4c43-bc6f-607e23630832.jpg";

const NAV_LINKS = ["Home", "About", "Services", "Subjects", "Contact"];

const SUBJECTS = [
  { icon: "Calculator", label: "Mathematics" },
  { icon: "FlaskConical", label: "Physics" },
  { icon: "Microscope", label: "Biology" },
  { icon: "TestTube2", label: "Chemistry" },
  { icon: "BookOpen", label: "English" },
  { icon: "Globe", label: "History" },
  { icon: "BookMarked", label: "Social Studies" },
  { icon: "Atom", label: "Science" },
];

const SERVICES = [
  {
    icon: "UserCheck",
    title: "One-on-One Tutoring",
    desc: "Personalized sessions tailored to each student's unique learning style, pace, and academic goals.",
  },
  {
    icon: "Users",
    title: "Small Group Sessions",
    desc: "Collaborative learning in groups of 2–4 students, building teamwork skills alongside academic knowledge.",
  },
  {
    icon: "Monitor",
    title: "Online Tutoring",
    desc: "Flexible virtual sessions from the comfort of home, with full access to interactive tools and resources.",
  },
  {
    icon: "Trophy",
    title: "Exam Preparation",
    desc: "Focused prep for high school exams across all Canadian curriculum subjects, helping students feel confident and ready.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Parent of 10th Grader",
    text: "AB Tutoring transformed my daughter's confidence in math. Her grades went from a C to an A in just two months!",
    initials: "SM",
  },
  {
    name: "James R.",
    role: "College Freshman",
    text: "The exam prep sessions were incredibly focused. My son improved dramatically — couldn't have done it without AB Tutoring.",
    initials: "JR",
  },
  {
    name: "Linda T.",
    role: "Parent of 7th Grader",
    text: "Patient, professional, and truly passionate about teaching. My son actually looks forward to his sessions now.",
    initials: "LT",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(213,72%,28%)" }}>
              <span className="font-display font-bold text-white text-sm">AB</span>
            </div>
            <span className="font-display font-semibold text-xl" style={{ color: "hsl(213,72%,28%)" }}>AB Tutoring</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-white font-body font-medium text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              style={{ background: "hsl(158,52%,42%)" }}
            >
              Book Free Consultation
            </button>
          </div>

          <button className="md:hidden" style={{ color: "hsl(213,72%,28%)" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="font-body text-sm font-medium text-foreground text-left py-1"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-white font-body font-medium text-sm px-5 py-2.5 rounded-lg w-full"
              style={{ background: "hsl(158,52%,42%)" }}
            >
              Book Free Consultation
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(135deg, hsl(213,72%,22%) 0%, hsl(213,65%,16%) 50%, hsl(158,52%,22%) 100%)" }}
        />
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to right, hsl(213,72%,16%) 0%, rgba(17,43,74,0.7) 60%, transparent 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-medium px-3 py-1.5 rounded-full mb-6 animate-fade-in" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}>
              <Icon name="Star" size={12} />
              Trusted by 500+ students
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-delay-1">
              Unlock Every
              <span className="block" style={{ color: "hsl(158,65%,60%)" }}>
                Student's Potential
              </span>
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed animate-fade-in-delay-2" style={{ color: "rgba(255,255,255,0.8)" }}>
              Expert, personalized tutoring that builds confidence, improves grades, and inspires a lifelong love of learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-delay-3">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-white font-body font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                style={{ color: "hsl(213,72%,22%)" }}
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="text-white font-body font-medium px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.4)" }}
              >
                Explore Services
              </button>
            </div>
            <div className="mt-10 flex gap-8 animate-fade-in-delay-3">
              {[["500+", "Students Taught"], ["98%", "Success Rate"], ["10+", "Subjects Covered"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-white">{num}</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block animate-fade-in-delay-2">
            <div className="relative">
              <img
                src={HERO_IMAGE}
                alt="Tutoring session"
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsl(158,40%,94%)" }}>
                  <Icon name="CalendarCheck" size={20} style={{ color: "hsl(158,52%,42%)" }} />
                </div>
                <div>
                  <div className="font-body text-xs text-muted-foreground">Next available</div>
                  <div className="font-body font-semibold text-sm" style={{ color: "hsl(213,72%,28%)" }}>Tomorrow, 3:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background: "hsl(213,60%,96%)", color: "hsl(213,72%,28%)" }}>
              <Icon name="GraduationCap" size={13} />
              About AB Tutoring
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-snug" style={{ color: "hsl(213,72%,28%)" }}>
              We believe every student deserves to succeed
            </h2>
            <p className="mt-5 font-body text-muted-foreground leading-relaxed">
              AB Tutoring was founded with a simple belief: with the right guidance and support, every student can thrive academically. Our certified tutors bring passion, patience, and proven methods to every session.
            </p>
            <p className="mt-4 font-body text-muted-foreground leading-relaxed">
              From elementary school to college prep, we match each student with a tutor who understands their learning style and academic needs — building real skills that last a lifetime.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "Award", label: "Certified Tutors", desc: "All tutors are background-checked and credentialed" },
                { icon: "Clock", label: "Flexible Scheduling", desc: "Sessions available 7 days a week, day or evening" },
                { icon: "Target", label: "Goal-Oriented", desc: "Custom plans built around your specific targets" },
                { icon: "Heart", label: "Student-First", desc: "We celebrate every milestone, big or small" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "hsl(158,40%,94%)" }}>
                    <Icon name={icon} size={16} style={{ color: "hsl(158,52%,42%)" }} />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-sm" style={{ color: "hsl(213,72%,28%)" }}>{label}</div>
                    <div className="font-body text-muted-foreground text-xs mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl w-full h-80 md:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            />
            <div className="absolute top-5 -right-5 text-white rounded-xl shadow-lg px-5 py-4" style={{ background: "hsl(158,52%,42%)" }}>
              <div className="font-display text-2xl font-bold">5+</div>
              <div className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: "hsl(213,60%,96%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white text-xs font-body font-semibold px-3 py-1.5 rounded-full mb-4" style={{ color: "hsl(213,72%,28%)" }}>
              <Icon name="Layers" size={13} />
              Our Services
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "hsl(213,72%,28%)" }}>
              Tutoring that fits your life
            </h2>
            <p className="mt-4 font-body text-muted-foreground max-w-xl mx-auto">
              Whether you prefer in-person or online, individual or group — we have a format that works for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover-lift border border-border"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(213,72%,28%)" }}>
                  <Icon name={icon} size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "hsl(213,72%,28%)" }}>{title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section id="subjects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background: "hsl(158,40%,94%)", color: "hsl(158,52%,42%)" }}>
              <Icon name="BookMarked" size={13} />
              Subjects We Cover
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "hsl(213,72%,28%)" }}>
              Expert help across all subjects
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SUBJECTS.map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border hover-lift transition-all cursor-default group"
                style={{ transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(158,52%,42%)"; (e.currentTarget as HTMLElement).style.background = "hsl(158,40%,94%)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = ""; (e.currentTarget as HTMLElement).style.background = ""; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "hsl(213,60%,96%)" }}>
                  <Icon name={icon} size={22} style={{ color: "hsl(213,72%,28%)" }} />
                </div>
                <span className="font-body font-medium text-sm text-center" style={{ color: "hsl(213,72%,28%)" }}>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-display text-2xl font-bold text-center mb-10" style={{ color: "hsl(213,72%,28%)" }}>What families are saying</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ name, role, text, initials }) => (
                <div key={name} className="rounded-2xl p-6 border border-border hover-lift" style={{ background: "hsl(213,60%,96%)" }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="hsl(158,52%,42%)" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-body text-foreground text-sm leading-relaxed mb-5">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "hsl(213,72%,28%)" }}>
                      <span className="font-display font-bold text-white text-xs">{initials}</span>
                    </div>
                    <div>
                      <div className="font-body font-semibold text-sm" style={{ color: "hsl(213,72%,28%)" }}>{name}</div>
                      <div className="font-body text-muted-foreground text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ background: "linear-gradient(135deg, hsl(213,72%,22%) 0%, hsl(213,65%,16%) 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-body font-semibold px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>
            <Icon name="MessageCircle" size={13} />
            Get in Touch
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-snug">
            Ready to get started?
          </h2>
          <p className="mt-5 font-body leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.7)" }}>
            Reach out directly and we'll get back to you as soon as possible.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {[
              { icon: "Phone", label: "587-938-9852", sub: "Call or text anytime" },
              { icon: "Mail", label: "contactabtutoring@gmail.com", sub: "We reply within 24 hours" },
              { icon: "MapPin", label: "Available online", sub: "Sessions via video call" },
              { icon: "Clock", label: "Mon–Sat, 8am–9pm", sub: "Flexible scheduling" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl p-5 text-left" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <Icon name={icon} size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-body font-semibold text-white text-sm">{label}</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ background: "hsl(213,72%,12%)", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "hsl(158,52%,42%)" }}>
              <span className="font-display font-bold text-white text-xs">AB</span>
            </div>
            <span className="font-display font-semibold text-white text-lg">AB Tutoring</span>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="font-body text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {link}
              </button>
            ))}
          </div>
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>© 2026 AB Tutoring. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}