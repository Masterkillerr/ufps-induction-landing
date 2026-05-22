import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1E293B] font-sans flex flex-col items-center justify-center p-6">
      <Head>
        <title>Bienvenida UFPS - Ingeniería de Sistemas</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        `}</style>
      </Head>

      <div className="max-w-3xl text-center space-y-8">
        <div className="w-20 h-20 bg-[#BE123C] rounded-2xl mx-auto flex items-center justify-center text-white shadow-xl shadow-[#BE123C]/20">
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h1 className="font-display text-6xl md:text-7xl font-bold text-slate-900 tracking-tight">Portal de Inducción</h1>
        <p className="text-xl text-slate-500 leading-relaxed font-sans">
          Accede a la estructura curricular, investigación y cuerpo docente del programa de Ingeniería de Sistemas de la UFPS.
        </p>
        <a 
          href="/portal" 
          className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-semibold hover:bg-[#BE123C] transition-all hover:scale-105 shadow-xl shadow-slate-900/10"
        >
          Entrar al Portal Académico
        </a>
      </div>
    </div>
  );
}
