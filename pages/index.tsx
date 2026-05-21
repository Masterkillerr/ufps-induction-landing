import React, { useState } from 'react';
import Head from 'next/head';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1E293B] font-sans selection:bg-[#BE123C]/10 selection:text-[#BE123C] overflow-x-hidden">
      <Head>
        <title>UFPS Induction - Ingeniería de Sistemas</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
          html { scroll-behavior: smooth; }
        `}</style>
      </Head>

      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#BE123C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#BE123C] rounded-xl flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-6 shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <span className="font-display text-xl font-bold text-slate-900 tracking-tight">UFPS</span>
              <span className="text-xs block text-slate-500 font-sans tracking-wider uppercase">Sistemas</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="space-x-8 hidden lg:flex font-medium text-sm text-slate-600">
            <a href="#perfil" className="hover:text-[#BE123C] transition-colors relative after:absolute after:bottom-[-20px] after:left-0 after:w-0 after:h-[2px] after:bg-[#BE123C] hover:after:w-full after:transition-all">Perfil de Ingreso</a>
            <a href="#malla" className="hover:text-[#BE123C] transition-colors relative after:absolute after:bottom-[-20px] after:left-0 after:w-0 after:h-[2px] after:bg-[#BE123C] hover:after:w-full after:transition-all">Malla Curricular</a>
            <a href="#investigacion" className="hover:text-[#BE123C] transition-colors relative after:absolute after:bottom-[-20px] after:left-0 after:w-0 after:h-[2px] after:bg-[#BE123C] hover:after:w-full after:transition-all">Investigación</a>
            <a href="#recursos" className="hover:text-[#BE123C] transition-colors relative after:absolute after:bottom-[-20px] after:left-0 after:w-0 after:h-[2px] after:bg-[#BE123C] hover:after:w-full after:transition-all">Infraestructura</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-slate-900 text-white text-sm px-6 py-2.5 rounded-full font-semibold hover:bg-[#BE123C] hover:shadow-lg hover:shadow-[#BE123C]/20 transition-all duration-300">
              Inscribirse
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#BE123C] focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out border-b border-slate-100 bg-white ${isMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
          <div className="container mx-auto px-6 flex flex-col gap-4 font-medium text-sm text-slate-600">
            <a href="#perfil" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#BE123C] transition-colors">Perfil de Ingreso</a>
            <a href="#malla" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#BE123C] transition-colors">Malla Curricular</a>
            <a href="#investigacion" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#BE123C] transition-colors">Investigación</a>
            <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#BE123C] transition-colors">Infraestructura</a>
            <button className="sm:hidden bg-slate-900 text-white text-sm py-3 rounded-full font-semibold hover:bg-[#BE123C] transition-colors mt-2">
              Inscribirse
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <header className="py-20 sm:py-24 lg:py-32 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BE123C]/5 text-[#BE123C] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C] animate-pulse"></span>
            Acreditación de Alta Calidad Continua
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
            Ingeniería <br className="hidden sm:inline" />de <span className="text-[#BE123C] italic font-normal">Sistemas</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans mb-10">
            Formación integral líder en Gestión y Desarrollo de Software, fundamentada en las ciencias de la computación con un enfoque crítico, dialógico y socialmente responsable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="#perfil" className="bg-[#BE123C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#A00E30] transition shadow-lg shadow-[#BE123C]/15 text-center">
              Comenzar Inducción
            </a>
            <a href="#malla" className="bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition text-center">
              Ver Plan de Estudios
            </a>
          </div>
        </header>

        {/* Section: Perfiles e Ingreso */}
        <section id="perfil" className="py-16 sm:py-24 border-b border-slate-100 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BE123C]">Admisión Oficial</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Perfil y Proceso de Ingreso</h2>
              <p className="text-slate-500 leading-relaxed font-sans">
                La Universidad realiza pruebas diagnósticas integrales y pondera detalladamente tus resultados Saber 11 para asegurar una formación con base académica sólida.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Saber 11 Progress Bars */}
                <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl shadow-sm">
                  <h3 className="font-display text-2xl font-bold mb-6 text-slate-900">Ponderación Saber 11</h3>
                  <div className="space-y-5">
                    {[
                      { area: "Matemáticas", val: 30, color: "bg-[#BE123C]" },
                      { area: "Lectura Crítica", val: 30, color: "bg-[#BE123C]" },
                      { area: "Inglés", val: 20, color: "bg-slate-800" },
                      { area: "Ciencias Naturales", val: 10, color: "bg-slate-400" },
                      { area: "Sociales y Ciudadanas", val: 10, color: "bg-slate-400" }
                    ].map(item => (
                      <div key={item.area} className="space-y-1">
                        <div className="flex justify-between text-sm font-semibold text-slate-700">
                          <span>{item.area}</span>
                          <span>{item.val}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                          <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.val}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE123C]/20 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-widest text-[#BE123C] font-semibold mb-2 block">El Ingeniero de Sistemas UFPS</span>
                    <h3 className="font-display text-2xl font-bold mb-4">Perfil de Egreso</h3>
                    <p className="text-slate-300 leading-relaxed font-sans text-sm">
                      Profesional autónomo, crítico y creador, capaz de resolver problemas complejos de ingeniería mediante la aplicación de principios científicos y el diseño de software de clase mundial con ética y responsabilidad social.
                    </p>
                  </div>
                  <div className="border-t border-slate-800 pt-4 mt-6 flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#BE123C]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#BE123C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-400">Certificado por el CNA (MEN)</span>
                  </div>
                </div>
              </div>

              {/* Formation Purposes */}
              <div className="space-y-6">
                <h4 className="font-display text-3xl font-bold text-slate-900">Propósitos Formativos Integrales</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { t: "Intelectual", d: "Fomento de pensamiento crítico, lógico y sistémico para modelar soluciones complejas.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                    { t: "Humano", d: "Desarrollo de actitudes éticas, honestidad, responsabilidad y respeto hacia la diversidad social.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                    { t: "Social", d: "Capacidad de relacionarse, trabajar en equipo multidisciplinar y cohabitar constructivamente.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                    { t: "Profesional", d: "Experiencias de saber técnico, heurístico y de gestión de proyectos para favorecer la empleabilidad.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
                  ].map(p => (
                    <div key={p.t} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#BE123C]/5 flex items-center justify-center text-[#BE123C] shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 mb-1">{p.t}</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Malla Curricular */}
        <section id="malla" className="py-16 sm:py-24 border-b border-slate-100 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BE123C]">Plan de Estudios Oficial</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Estructura Curricular Auditada</h2>
            <p className="text-slate-500 leading-relaxed font-sans">
              El plan de estudios del programa equilibra rigurosamente las áreas de ciencias exactas con el diseño de ingeniería y ciencias aplicadas computacionales.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { a: "Ciencias Básicas", c: "Cálculo Diferencial/Integral/Vectorial, Física Mecánica/Electromagnética, Ecuaciones Diferenciales, Ondas y Partículas, Matemáticas Discretas.", p: "20.12%", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
              { a: "Básicas de Ingeniería", c: "Probabilidad y Estadística, Investigación de Operaciones, Análisis Numérico, Electrónica.", p: "7.31%", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
              { a: "Ingeniería Aplicada", c: "Fundamentos, POO I y II, Estructura de Datos, Algoritmos, Teoría de la Computación, Bases de Datos, Sistemas Operativos, Web, Ingeniería de Software, Redes, Arquitectura.", p: "59.76%", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { a: "Formación Complementaria", c: "Introducción a la Ingeniería, Comunicación I y II, Seminario Investigativo I/II/III, Constitución y Civismo, Ética Profesional, Electivas Socio-Humanísticas.", p: "12.80%", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5A1.5 1.5 0 0118 13.5v1a1.5 1.5 0 01-1.5 1.5H15M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map(area => (
              <div key={area.a} className="p-6 sm:p-8 bg-white border border-slate-100 rounded-3xl text-left hover:border-[#BE123C] hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:text-[#BE123C] group-hover:bg-[#BE123C]/5 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">{area.a}</h3>
                <p className="text-[#BE123C] font-bold text-3xl mb-4">{area.p}</p>
                <p className="font-sans text-slate-500 text-sm leading-relaxed">{area.c}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 sm:p-8 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#BE123C]/10 rounded-full flex items-center justify-center shrink-0 text-[#BE123C]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="font-sans text-slate-700 leading-relaxed font-medium text-sm sm:text-base">
                Un total robusto de <strong>164 créditos académicos</strong> respaldados por renovación constante de acreditaciones nacionales e internacionales (ABET/MEN).
              </p>
            </div>
            <button className="w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors shrink-0">
              Descargar Pensum Completo
            </button>
          </div>
        </section>

        {/* Section: Metodologías y RA */}
        <section className="py-16 sm:py-24 border-b border-slate-100">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BE123C]">Metodologías Formativas</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Métodos Dialógico-Críticos</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-sans">
                Nuestra concepción curricular privilegia la interacción horizontal y erradica la simple memorización de datos, fomentando el aprendizaje dinámico y experimental.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {[
                { t: "Aprendizaje Basado en Problemas", d: "Se fomenta que los estudiantes enfrenten situaciones reales o simuladas del sector productivo, proponiendo soluciones óptimas y eficientes mediante pensamiento crítico.", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
                { t: "Flipped Classroom (Clase Invertida)", d: "Aprovechamiento de plataformas y laboratorios digitales para estudio conceptual autónomo previo, maximizando la interacción y discusión en el aula.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
                { t: "Gamificación & Retos", d: "Incoporación de dinámicas competitivas y retos prácticos para incentivar la asimilación conceptual de tecnologías abstractas en el desarrollo de software.", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm-8 8a2 2 0 114 0 2 2 0 01-4 0zm12 0a2 2 0 114 0 2 2 0 01-4 0z" },
                { t: "Resultados de Aprendizaje", d: "Un marco curricular orientado al logro tangible medido en 5 momentos clave del plan de estudios, desde pruebas diagnósticas hasta Saber Pro.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
              ].map(item => (
                <div key={item.t} className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#BE123C]/5 text-[#BE123C] flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.t}</h3>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Semilleros */}
        <section id="investigacion" className="py-16 sm:py-24 border-b border-slate-100 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BE123C]">Investigación Formativa</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Semilleros de Investigación</h2>
            <p className="text-slate-500 leading-relaxed font-sans">
              Ecosistema de investigación donde convergen estudiantes y docentes para proponer soluciones tecnológicas disruptivas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "SIDSMOVIL", desc: "Desarrollo de Software Móvil, automatización y movilidad." },
              { name: "SIA", desc: "Inteligencia Artificial, modelos predictivos y computación inteligente." },
              { name: "SILUX", desc: "Software Libre, tecnologías de tendencia libres y programación competitiva." },
              { name: "SIAWEB", desc: "Desarrollo y Gestión ágil de proyectos y aplicaciones en la Web." },
              { name: "VIRAL", desc: "Motores de videojuegos, Realidad Virtual y Realidad Aumentada." },
              { name: "SIENSI", desc: "Seguridad de la Información, normatividad y estándares criptográficos." },
              { name: "DATASCIENCE", desc: "Big Data, análisis de datos complejos y modelación predictiva." },
              { name: "SIREDSE", desc: "Redes de computación, protocolos TCP/IP y auditorías de seguridad informática." }
            ].map(s => (
              <div key={s.name} className="p-6 bg-white border border-slate-100 rounded-3xl hover:border-[#BE123C] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 mb-4 group-hover:text-[#BE123C] group-hover:bg-[#BE123C]/5 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2">{s.name}</h4>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-50 mt-4 flex justify-between items-center text-xs text-[#BE123C] font-semibold md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <span>Ver proyectos</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#BE123C]/10 rounded-full blur-3xl" />
              <h3 className="font-display text-2xl sm:text-3xl mb-6">Grupos de Investigación Oficiales</h3>
              <p className="font-sans text-lg text-slate-400 mb-8 leading-relaxed">
                Nuestros grupos oficiales, <strong>GIDISOFT / GIDIS</strong> y <strong>GIA</strong>, se articulan directamente con convocatorias nacionales y proyectos avalados por el FINU (Fondo de Investigaciones Universitario).
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center font-bold text-[#BE123C]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                  </svg>
                </div>
                <p className="text-xs text-slate-400 font-sans italic">Producción activa registrada en Colciencias.</p>
              </div>
            </div>
            <div className="space-y-8 py-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Investigación Formativa Transversal</h3>
              <p className="font-sans text-slate-500 leading-relaxed text-sm sm:text-base">
                El proceso de formación investigativa es horizontal e integral. Se articula a través de los ejes transversales del currículo con seminarios especializados, garantizando que cada estudiante publique avances prácticos antes de su egreso.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-100 bg-slate-50 rounded-2xl">
                  <span className="font-bold text-slate-900 block mb-1 text-sm">Seminarios de Investigación</span>
                  <span className="text-xs text-slate-500">I, II y III para conceptualización científica.</span>
                </div>
                <div className="p-4 border border-slate-100 bg-slate-50 rounded-2xl">
                  <span className="font-bold text-slate-900 block mb-1 text-sm">Seminarios Integradores</span>
                  <span className="text-xs text-slate-500">I, II y III para desarrollo transdisciplinar.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Infraestructura */}
        <section id="recursos" className="py-16 sm:py-24 scroll-mt-20">
          <div className="bg-slate-900 text-white rounded-[3rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BE123C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BE123C]">Plataforma Tecnológica</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">Infraestructura de Clase Mundial</h2>
              <p className="font-sans text-lg text-slate-400">
                La universidad provee una plataforma física y digital robusta, respaldada por conectividad de fibra óptica y laboratorios dedicados de última generación.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-[#BE123C]">2.0 Gbps</div>
                <h4 className="font-bold text-lg text-white">Canal de Internet</h4>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">Acceso a internet dedicado con reuso 1:1, respaldado por backups LTE y redundancia hacia ETB-Bogotá.</p>
              </div>
              <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-[#BE123C]">10 Gbps</div>
                <h4 className="font-bold text-lg text-white">Velocidad del Backbone</h4>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">Conexión interna por fibra óptica interconectando 19 edificios de forma ultra-rápida y segura.</p>
              </div>
              <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-[#BE123C]">64 Servidores</div>
                <h4 className="font-bold text-lg text-white">Infraestructura de Red</h4>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">26 servidores físicos y 38 servidores virtuales para servicios Proxy, DNS, intranet y correo corporativo.</p>
              </div>
              <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-[#BE123C]">FAB-LAB</div>
                <h4 className="font-bold text-lg text-white">Fabricación Digital</h4>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">Espacios especializados para corte láser, IoT, Drones e impresión 3D integrados al sector productivo.</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-400">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#BE123C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.5a13.917 13.917 0 00-2.384-7.355l-.054-.09A2 2 0 018 2h8a2 2 0 011.37.545l.054.09V11c0 3.517 1.009 6.799 2.753 9.571m-3.44-2.04l.054-.09M9 11.5A13.916 13.916 0 0011.5 9" />
                  </svg>
                </div>
                <p className="font-sans">Acceso completo a la red de divulgación científica internacional con bases de datos licenciadas: <strong>Scopus, Science Direct, Proquest y ACM</strong>.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#BE123C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="font-sans">Sistemas de información seguros y de alto nivel: <strong>SIA</strong> (Académico), <strong>UVirtual</strong> (Moodle), <strong>DatArSoft</strong> y el aplicativo especializado <strong>GEDUCO</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 sm:py-24 text-center space-y-12 bg-white rounded-t-[3rem] sm:rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)] scroll-mt-20">
          <div className="max-w-2xl mx-auto space-y-4 px-4">
             <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">¿Listo para transformar el futuro digital?</h2>
             <p className="font-sans text-lg sm:text-xl text-slate-500">Únete a la comunidad líder en Ingeniería de Sistemas en la región de Norte de Santander.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
            <button className="bg-[#BE123C] text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#A00E30] hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-[#BE123C]/15 transform">
              Postularme Ahora
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 px-12 py-5 rounded-full text-lg font-semibold hover:bg-slate-50 transition shadow-md">
              Iniciar Mi Inducción
            </button>
          </div>
          <div className="pt-12 text-slate-400 font-sans text-xs flex flex-wrap justify-center gap-6 px-4">
            <span>© 2026 Universidad Francisco de Paula Santander</span>
            <span>•</span>
            <span>Ingeniería de Sistemas</span>
            <span>•</span>
            <span>Cúcuta, Colombia</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
