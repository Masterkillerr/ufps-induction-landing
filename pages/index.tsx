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

              <div className="space-y-6">
                <h4 className="font-display text-3xl font-bold text-slate-900">Propósitos Formativos Integrales</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { t: "Intelectual", d: "Pensamiento crítico, lógico y sistémico para modelar soluciones complejas.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                    { t: "Humano", d: "Actitudes éticas, honestidad, responsabilidad y respeto hacia la diversidad social.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                    { t: "Social", d: "Capacidad de relacionarse, trabajar en equipo multidisciplinar y cohabitar constructivamente.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                    { t: "Profesional", d: "Saberes teóricos, heurísticos y de gestión de proyectos para favorecer la empleabilidad.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
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
              El plan de estudios equilibra rigurosamente las áreas de ciencias exactas con el diseño de ingeniería y ciencias aplicadas computacionales.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { a: "Ciencias Básicas", c: "Cálculo Diferencial, Integral, Vectorial, Física Mecánica/Electromagnética, Ecuaciones, Ondas, Discretas.", p: "20.12%", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
              { a: "Básicas de Ingeniería", c: "Probabilidad y Estadística, Investigación de Operaciones, Análisis Numérico, Electrónica.", p: "7.31%", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
              { a: "Ingeniería Aplicada", c: "Fundamentos, POO, Estructura de Datos, Algoritmos, Teoría de la Computación, Bases de Datos, Sistemas Operativos, Web, Ingeniería de Software, Redes, Arquitectura.", p: "59.76%", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { a: "Complementaria", c: "Introducción, Comunicación, Seminarios Investigativos I/II/III, Constitución, Ética, Electivas Socio-Humanísticas.", p: "12.80%", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5A1.5 1.5 0 0118 13.5v1a1.5 1.5 0 01-1.5 1.5H15M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                </svg>
              </div>
              <p className="font-sans text-slate-700 leading-relaxed font-medium text-sm sm:text-base">
                Un total robusto de <strong>164 créditos académicos</strong> respaldados por renovación constante de acreditaciones (ABET/MEN).
              </p>
            </div>
            <a href="/pensum_ufps_sistemas.pdf" download className="w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors shrink-0 text-center">
              Descargar Pensum Completo
            </a>
          </div>
        </section>

        {/* Section: Metodologías */}
        <section className="py-16 sm:py-24 border-b border-slate-100">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BE123C]">Metodologías Formativas</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Métodos Dialógico-Críticos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { t: "Aprendizaje Basado en Problemas", d: "Enfrentamiento de situaciones reales para desarrollar pensamiento crítico." },
                { t: "Flipped Classroom", d: "Optimización del tiempo presencial para discusión y experimentación." },
                { t: "Gamificación", d: "Retos y dinámicas competitivas para incentivar el compromiso técnico." },
                { t: "Resultados de Aprendizaje", d: "Evaluación integral en 5 momentos clave desde diagnóstico hasta Saber Pro." }
              ].map(item => (
                <div key={item.t} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h3>
                  <p className="font-sans text-slate-500 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-20 text-center bg-slate-50 rounded-t-[3rem] mt-16 px-6">
          <p className="text-slate-500 text-sm">© 2026 Universidad Francisco de Paula Santander - Ingeniería de Sistemas. Cúcuta, Colombia.</p>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
