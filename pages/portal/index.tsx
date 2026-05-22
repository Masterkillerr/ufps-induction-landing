import React, { useState } from 'react';
import Link from "next/link";
import Head from "next/head";

// --- Data & Components ---

const Data = {
  identidad: {
    title: "Identidad Institucional",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Misión</h3>
            <p className="text-slate-600 leading-relaxed font-sans text-sm">
              El Programa de Ingeniería de Sistemas de la UFPS está comprometido en la formación integral de profesionales competentes en el Gestión y Desarrollo de Software, caracterizados por una sólida fundamentación en las áreas de las ciencias de la computación e informática, enmarcado en un Proyecto Educativo fundamentado en el mejoramiento continuo de los procesos misionales; basados en los principios de excelencia académica, con responsabilidad y compromiso con los procesos de transformación de la región y del país; contando con docentes de calidad y con una adecuada infraestructura física y tecnológica.
            </p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Visión</h3>
            <p className="text-slate-300 leading-relaxed font-sans text-sm">
              En el año 2027, el Programa de Ingeniería de Sistemas de la UFPS alcanzará niveles de alta calidad, enmarcados en procesos continuos de mejoramiento, líder en la formación de profesionales competentes en la Gestión y Desarrollo de Software, comprometidos con el desarrollo regional, nacional e internacional, afrontando las situaciones cambiantes del medio. Apoyados en una estructura curricular flexible, con un equipo administrativo idóneo, con docentes de calidad, con una adecuada infraestructura física y tecnológica.
            </p>
          </div>
        </div>
      </div>
    )
  },
  objetivos: {
    title: "Objetivos del Programa",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h3 className="font-display text-2xl font-bold mb-4 text-slate-900">Objetivo General</h3>
          <p className="text-slate-600 leading-relaxed font-sans">
            Diseñar y consolidar un modelo educativo innovador y de alta calidad en Ingeniería de Sistemas, que forme profesionales con competencias técnicas, investigativas y éticas, capaces de desarrollar, gestionar y optimizar soluciones tecnológicas para la transformación digital y la innovación en diversos sectores.
          </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h4 className="font-display text-2xl font-bold text-slate-900 mb-6">Objetivos Específicos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Formación Integral", d: "Desarrollar en los estudiantes competencias en desarrollo de software, infraestructura tecnológica, seguridad informática y gestión de proyectos." },
              { t: "Innovación y Tecnología", d: "Incorporar tecnologías emergentes como inteligencia artificial, big data, blockchain, IoT y computación en la nube en la formación académica." },
              { t: "Investigación y Desarrollo", d: "Fomentar la investigación aplicada y la producción de conocimiento en áreas clave de la Ingeniería de Sistemas." },
              { t: "Vinculación Sector Productivo", d: "Promover la interacción entre la academia y la industria a través de prácticas, convenios y proyectos de impacto social y tecnológico." },
              { t: "Internacionalización", d: "Fortalecer la participación de estudiantes y docentes en redes académicas y de investigación a nivel internacional." },
              { t: "Responsabilidad Social", d: "Formar ingenieros con un alto sentido de ética y compromiso con el desarrollo sostenible." }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:-translate-y-1 cursor-default">
                <div className="w-10 h-10 bg-red-50 text-[#BE123C] rounded-full flex items-center justify-center font-bold mb-4 group-hover:bg-[#BE123C] group-hover:text-white transition-colors">{i+1}</div>
                <h5 className="font-bold text-slate-900 mb-2">{p.t}</h5>
                <p className="text-sm text-slate-600 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  competencias: {
    title: "Competencias Específicas",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: "CE1",
              name: "Resolución de Problemas",
              desc: "Resolver problemas complejos de ingeniería por medio de la aplicación de principios de ingeniería, ciencia y matemáticas."
            },
            {
              id: "CE2",
              name: "Diseño de Software",
              desc: "Aplicar el diseño de ingeniería para producir soluciones que satisfagan necesidades específicas con consideración a la salud pública, seguridad y bienestar, así como a factores globales, culturales, sociales, ambientales y económicos."
            },
            {
              id: "CE3",
              name: "Formulación de Proyectos",
              desc: "Plantear proyectos de ingeniería basado en conceptos y procedimientos básicos en el ciclo de vida del software, considerando riesgos e impactos."
            }
          ].map(comp => (
            <div key={comp.id} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-shadow group cursor-default">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl mb-6 group-hover:bg-[#BE123C] transition-colors shadow-md">{comp.id}</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-slate-900">{comp.name}</h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm">{comp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  perfil: {
    title: "Perfil de Ingreso y Egreso",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="font-display text-2xl font-bold mb-6 text-slate-900">Ponderación Saber 11</h3>
            {[
              { area: "Matemáticas", val: 30, color: "bg-[#BE123C]" },
              { area: "Lectura Crítica", val: 30, color: "bg-[#BE123C]" },
              { area: "Inglés", val: 20, color: "bg-slate-800" },
              { area: "Ciencias Naturales", val: 10, color: "bg-slate-400" },
              { area: "Sociales y Ciudadanas", val: 10, color: "bg-slate-400" }
            ].map(item => (
              <div key={item.area} className="space-y-1 mb-4">
                <div className="flex justify-between text-sm font-semibold text-slate-700">
                  <span>{item.area}</span> <span>{item.val}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Perfil de Egreso</h3>
            <p className="text-slate-300 leading-relaxed font-sans text-sm">
              Profesional autónomo, crítico y creador, capaz de resolver problemas complejos de ingeniería mediante la aplicación de principios científicos y el diseño de software de clase mundial con ética y responsabilidad social.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h4 className="font-display text-3xl font-bold text-slate-900 mb-6">Propósitos Formativos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "Intelectual", d: "Fomento de pensamiento crítico, lógico y sistémico para modelar soluciones complejas." },
              { t: "Humano", d: "Actitudes éticas, honestidad, responsabilidad y respeto hacia la diversidad social." },
              { t: "Social", d: "Capacidad de relacionarse, trabajar en equipo multidisciplinar y cohabitar constructivamente." },
              { t: "Profesional", d: "Saberes teóricos, heurísticos y de gestión de proyectos para favorecer la empleabilidad." }
            ].map(p => (
              <div key={p.t} className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                <h5 className="font-bold text-slate-900 mb-1">{p.t}</h5>
                <p className="text-sm text-slate-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  malla: {
    title: "Malla Curricular",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { a: "Ciencias Básicas", c: "Cálculo, Física, Discretas.", p: "20.12%" },
            { a: "Básicas de Ingeniería", c: "Probabilidad, Investigación Operaciones.", p: "7.31%" },
            { a: "Ingeniería Aplicada", c: "Fundamentos, POO, Software, Redes.", p: "59.76%" },
            { a: "Complementaria", c: "Ética, Comunicación, Electivas.", p: "12.80%" }
          ].map((area, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-3xl cursor-default">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{area.a}</h3>
              <p className="text-[#BE123C] font-bold text-3xl mb-4">{area.p}</p>
              <p className="font-sans text-slate-500 text-sm">{area.c}</p>
            </div>
          ))}
        </div>
        <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">Metodologías de Innovación</h3>
            <p className="text-slate-300 text-sm">Aprendizaje Basado en Problemas (ABP), Clase Invertida, Gamificación, Resultados de Aprendizaje.</p>
          </div>
          <a href="/ufps-induction/pensum_ufps_sistemas.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#BE123C] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold whitespace-nowrap transition-transform hover:scale-105 shadow-lg">
            Descargar Malla PDF
          </a>
        </div>
      </div>
    )
  },
  investigacion: {
    title: "Investigación",
    content: (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["SILUX", "SIA", "SIAWEB", "VIRAL", "SIDSMOVIL", "SIENSI", "DATASCIENCE", "SIREDSE"].map(s => (
                    <div key={s} className="p-4 bg-white border border-slate-100 rounded-xl font-bold text-center text-sm shadow-sm hover:bg-[#BE123C] hover:text-white hover:border-[#BE123C] transition-colors cursor-default">
                        {s}
                    </div>
                ))}
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display text-2xl font-bold mb-4 text-slate-900">Grupos GIDISOFT y GIA</h3>
                <p className="text-slate-600 leading-relaxed">Investigación multidisciplinar con impacto regional e internacional, apoyada por FINU (Fondo de Investigaciones Universitarias).</p>
            </div>
        </div>
    )
  },
  extension: {
    title: "Sector Productivo",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
                <h3 className="font-display text-3xl font-bold mb-4">Transferencia de Tecnología</h3>
                <p className="text-slate-300 leading-relaxed font-sans">
                  Nuestra relación con el sector productivo nos permite establecer alianzas estratégicas para la realización de proyectos de vinculación, prácticas profesionales y pasantías. Promovemos la transferencia de conocimiento entre la universidad y la industria para impulsar la innovación regional.
                </p>
            </div>
            <div className="w-full md:w-1/3 bg-white/10 p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-white mb-2">Educación Continua</h4>
                <p className="text-sm text-slate-300 mb-4">Procesos de certificación que acreditan las competencias adquiridas.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#BE123C] text-xs font-bold rounded-full">Prácticas</span>
                    <span className="px-3 py-1 bg-[#BE123C] text-xs font-bold rounded-full">Pasantías</span>
                    <span className="px-3 py-1 bg-white/20 text-xs font-bold rounded-full">Proyectos</span>
                </div>
            </div>
        </div>
      </div>
    )
  },
  internacional: {
    title: "Visibilidad Internacional",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Estándares Globales</h3>
            <p className="text-slate-600 leading-relaxed font-sans text-sm mb-6">
              El Programa está concebido, se revisa y actualiza según los estudios realizados por instituciones de prestigio mundial.
            </p>
            <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-sm font-bold border border-slate-200">ACM</span>
                <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-sm font-bold border border-slate-200">IEEE</span>
                <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-sm font-bold border border-slate-200">AIS</span>
            </div>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Movilidad y Convenios</h3>
            <p className="text-slate-300 leading-relaxed font-sans text-sm">
              La UFPS ha suscrito múltiples convenios marco y específicos a nivel nacional e internacional para mejorar las relaciones de docencia e investigación, permitiendo realizar movilidad docente y estudiantil con instituciones reconocidas y acreditadas.
            </p>
          </div>
        </div>
      </div>
    )
  },
  infraestructura: {
    title: "Infraestructura",
    content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">🌐</div>
                <h3 className="font-display text-xl font-bold mb-2">Conectividad</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Fibra 10Gbps y 2.0Gbps dedicado, garantizando acceso a alta velocidad en todos los espacios del programa.</p>
            </div>
            <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">🛠️</div>
                <h3 className="font-display text-xl font-bold mb-2">FAB-LAB</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Laboratorios de última generación para Fabricación digital, Internet de las Cosas (IoT) y Realidad Virtual.</p>
            </div>
            <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">📚</div>
                <h3 className="font-display text-xl font-bold mb-2">Recursos Digitales</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Acceso premium a bases de datos científicas internacionales: IEEE, Scopus, Proquest y Emerald.</p>
            </div>
        </div>
    )
  },
  profesores: {
    title: "Cuerpo Docente",
    content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { "name": "Marco Antonio Adarme Jaimes", "title": "Doctor en Ingeniería", "img": "/profesores/Marco Antonio Adarme Jaimes/img.jpeg" },
              { "name": "José Martín Calixto Cely", "title": "Magister en Proyectos", "img": "/profesores/José Martín Calixto Cely/img.jpeg" },
              { "name": "Nelly Rosana Diaz Leal", "title": "Magister en Gerencia", "img": "/profesores/Nelly Rosana Diaz Leal/img.jpeg" },
              { "name": "Judith del Pilar Rodriguez Tenjo", "title": "Doctor en Educación", "img": "/profesores/Judith del Pilar Rodriguez Tenjo/img.jpeg" },
              { "name": "Carmen Janeth Parada", "title": "Magister en Ciencias", "img": "/profesores/Carmen Janeth Parada/img.jpeg" },
              { "name": "María del Pilar Rojas Puentes", "title": "Maestria en Proyectos", "img": "/profesores/María del Pilar Rojas Puentes/img.jpeg" },
              { "name": "Carlos Eduardo Pardo", "title": "Doctor en Educación", "img": "/profesores/Carlos Eduardo Pardo/img.jpg" },
              { "name": "Freddy Humberto Vera Rivera", "title": "Doctor en Ingeniería", "img": "/profesores/Freddy Humberto Vera Rivera/img.jpg" },
              { "name": "Eduard Gilberto Puerto Cuadros", "title": "Doctor en Ingeniería", "img": "/profesores/Eduard Gilberto Puerto Cuadros/img.jpg" },
              { "name": "Boris Rainiero Pérez Gutiérrez", "title": "Doctor en Ingeniería", "img": "/profesores/Boris Rainiero Pérez Gutiérrez/img.jpeg" },
              { "name": "Mátias Herrera Cáceres", "title": "Doctor en Educación", "img": "/profesores/Mátias Herrera Cáceres/img.jpg" },
              { "name": "Nelson Beltrán Galvis", "title": "Magister en Ciencias", "img": "/profesores/Nelson Beltrán Galvis/img.jpg" },
              { "name": "Milton Jesús Vera Contreras", "title": "Magister en Ingeniería", "img": "/profesores/Milton Jesús Vera Contreras/img.png" }
            ].map((p, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                    <img src={`/ufps-induction/profesores/${encodeURIComponent(p.name)}/${p.img.split('/').pop()}`} alt={p.name} className="w-16 h-16 rounded-full object-cover group-hover:scale-105 transition-transform"/>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
                        <p className="text-xs text-[#BE123C] font-semibold mt-1">{p.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
  }
};

// --- Portal View ---

const PortalPage = () => {
  const [activeTab, setActiveTab] = useState('identidad');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Grouped tabs for cleaner UX
  const tabGroups = [
    { 
      section: "El Programa", 
      items: [
        { id: 'identidad', label: 'Identidad (Misión)', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9' },
        { id: 'objetivos', label: 'Objetivos', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { id: 'competencias', label: 'Competencias', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' }
      ]
    },
    { 
      section: "Académico", 
      items: [
        { id: 'perfil', label: 'Perfil de Ingreso', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
        { id: 'malla', label: 'Malla Curricular', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' }
      ]
    },
    { 
      section: "Proyección", 
      items: [
        { id: 'investigacion', label: 'Investigación', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
        { id: 'extension', label: 'Sector Productivo', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { id: 'internacional', label: 'Internacionalización', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
      ]
    },
    { 
      section: "Recursos", 
      items: [
        { id: 'infraestructura', label: 'Infraestructura', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        { id: 'profesores', label: 'Cuerpo Docente', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
      ]
    }
  ];

  return (
    <div className="h-screen bg-[#FDFDFD] text-[#1E293B] font-sans flex overflow-hidden">
      <Head>
        <title>Portal Académico | Ingeniería de Sistemas UFPS</title>
        <meta name="description" content="Portal de inducción del Programa de Ingeniería de Sistemas de la UFPS." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
          .font-display { font-family: 'Syne', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        `}</style>
      </Head>
      
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-72'} flex flex-col transition-all duration-300 relative z-20 shrink-0 border-r bg-white border-slate-100 shadow-sm`}>
        <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} p-5 border-b border-slate-100`}>
          {!sidebarCollapsed && <img src="/ufps-induction/logo-ufps.png" alt="UFPS Logo" className="h-10 w-auto" />}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-2 hover:bg-slate-50 rounded-lg transition-colors focus:outline-none text-slate-400 hover:text-slate-900">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={sidebarCollapsed ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h8"} />
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {tabGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-5">
              {!sidebarCollapsed && <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-3">{group.section}</p>}
              <div className="space-y-0.5">
                {group.items.map(tab => (
                  <button 
                    key={tab.id} 
                    onClick={() => setActiveTab(tab.id)} 
                    title={sidebarCollapsed ? tab.label : undefined}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                      activeTab === tab.id 
                        ? 'bg-red-50 text-[#BE123C] font-semibold' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <svg className={`w-4.5 h-4.5 flex-shrink-0 transition-colors ${activeTab === tab.id ? 'text-[#BE123C]' : ''}`} style={{width:'18px',height:'18px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={activeTab === tab.id ? 2 : 1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                    </svg>
                    {!sidebarCollapsed && <span className="text-sm whitespace-nowrap">{tab.label}</span>}
                    {!sidebarCollapsed && activeTab === tab.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#BE123C]"></span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Action Bottom */}
        <div className="p-4 border-t border-slate-100">
          {!sidebarCollapsed ? (
            <a href="/ufps-induction/pep.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
              Descargar PEP Oficial
            </a>
          ) : (
            <a href="/ufps-induction/pep.pdf" target="_blank" rel="noopener noreferrer" title="Descargar PEP Oficial" className="w-full flex items-center justify-center py-3 rounded-xl transition-all border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
            </a>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-5xl mx-auto p-8 sm:p-10 lg:p-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-10 hover:text-slate-900 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver al Inicio
          </Link>
          
          <div className="mb-10 pb-8 border-b border-slate-200">
            <p className="text-[#BE123C] font-semibold text-xs mb-3 tracking-widest uppercase">Portal Académico</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              {Data[activeTab as keyof typeof Data].title}
            </h2>
          </div>
          
          <div className="pb-24">
            {Data[activeTab as keyof typeof Data].content}
          </div>
        </div>
      </main>
      
      {/* Global styles for custom scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}} />
    </div>
  );
};

export default PortalPage;
