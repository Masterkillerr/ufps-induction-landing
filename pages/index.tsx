import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const stats = [
  { value: "10+", label: "Semilleros de Investigación" },
  { value: "2", label: "Grupos Reconocidos MINCIENCIAS" },
  { value: "13", label: "Docentes con Posgrado" },
  { value: "10Gbps", label: "Conectividad de Fibra Óptica" },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Acreditación de Alta Calidad",
    desc: "Programa reconocido a nivel nacional con los más altos estándares académicos e investigativos."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Estándares ACM, IEEE y AIS",
    desc: "Plan de estudios alineado con las guías internacionales para Ingeniería de Sistemas y Software."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "FAB-LAB e Infraestructura",
    desc: "Laboratorios de IoT, Realidad Virtual y fabricación digital disponibles para todos los estudiantes."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Movilidad Internacional",
    desc: "Convenios activos con universidades nacionales e internacionales para intercambios académicos."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col overflow-x-hidden selection:bg-[#BE123C] selection:text-white">
      <Head>
        <title>Ingeniería de Sistemas | UFPS</title>
        <meta name="description" content="Portal de inducción del Programa de Ingeniería de Sistemas de la Universidad Francisco de Paula Santander. Acreditación de Alta Calidad." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
          * { box-sizing: border-box; }
          .font-display { font-family: 'Syne', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          @keyframes fade-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          .fade-up   { animation: fade-up 0.7s ease both; }
          .fade-up-1 { animation: fade-up 0.7s 0.15s ease both; }
          .fade-up-2 { animation: fade-up 0.7s 0.30s ease both; }
          .fade-up-3 { animation: fade-up 0.7s 0.45s ease both; }
          .card-hover { transition: box-shadow 0.25s, transform 0.25s; }
          .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        `}</style>
      </Head>

      {/* Navbar */}
      <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/ufps-induction/logo-ufps.png" alt="UFPS Logo" className="h-10 w-auto" />
          <span className="font-display text-lg font-bold text-slate-900 tracking-tight">
            UFPS <span className="text-[#BE123C]">·</span> Sistemas
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://ww2.ufps.edu.co/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden sm:block font-medium">
            Sitio Oficial
          </a>
          <Link href="/portal" className="text-sm font-semibold px-5 py-2.5 bg-slate-900 hover:bg-[#BE123C] text-white rounded-full transition-colors shadow-sm">
            Portal →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[88vh] px-6 pt-8 pb-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(190,18,60,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(15,23,42,0.04) 0%, transparent 50%)'}}></div>
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>

        <div className="relative z-10 max-w-4xl w-full text-center">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm text-sm font-medium text-slate-600 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BE123C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BE123C]"></span>
            </span>
            Acreditación de Alta Calidad · UFPS
          </div>

          {/* Heading */}
          <h1 className="fade-up-1 font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight text-slate-900 mb-8">
            Ingeniería<br />
            <span className="text-[#BE123C]">de Sistemas</span>
          </h1>

          {/* Sub */}
          <p className="fade-up-2 text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto mb-12 font-medium">
            Formamos líderes tecnológicos con visión global que diseñan y construyen las soluciones del mañana.
          </p>

          {/* CTAs */}
          <div className="fade-up-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portal" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#BE123C] hover:bg-red-700 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-red-200">
              Explorar el Portal de Inducción
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href="/ufps-induction/pep.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-semibold rounded-full transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Ver PEP Oficial
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-slate-50 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4">
              <p className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-1">{s.value}</p>
              <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BE123C] font-bold text-sm uppercase tracking-widest mb-4">¿Por qué elegirnos?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">Una carrera con propósito</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-hover p-8 rounded-2xl border border-slate-100 bg-white cursor-default shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#BE123C]/8 text-[#BE123C] flex items-center justify-center mb-6 border border-[#BE123C]/10">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">¿Listo para comenzar?</h2>
          <p className="text-slate-500 text-lg mb-10 font-medium">Explora el portal completo con toda la información del programa: malla curricular, docentes, investigación y más.</p>
          <Link href="/portal" className="inline-flex items-center gap-3 px-10 py-4 bg-[#BE123C] hover:bg-red-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-red-100">
            Ingresar al Portal Académico
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/ufps-induction/logo-ufps.png" alt="UFPS Logo" className="h-8 w-auto grayscale opacity-80" />
            <span className="font-display font-bold text-slate-900">UFPS <span className="text-[#BE123C]">·</span> Ingeniería de Sistemas</span>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Universidad Francisco de Paula Santander</p>
        </div>
      </footer>
    </div>
  );
}
