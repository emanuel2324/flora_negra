"use client";

import { useState } from "react";
import Image from "next/image";

interface Photogram {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  frameNum: string;
  cameraText: string;
  makeupDetails: string[];
  colors: { name: string; hex: string }[];
}

const PHOTOGRAMS: Photogram[] = [
  {
    id: 1,
    title: "O Olhar de Calêndula",
    subtitle: "Pinceladas de Sol e Ouro",
    desc: "Pétalas de sol colhidas ao amanhecer, transformadas em luz e pigmento sobre o olhar. Uma fusão orgânica de calêndulas reais com o impasto dourado de uma tela de óleo viva.",
    image: "/makeup_oil_1.png",
    frameNum: "01 / FLORA_400",
    cameraText: "FILM REF: 5063 TX",
    makeupDetails: [
      "Pigmento de Calêndula Natural",
      "Poeira de Ouro 24k",
      "Textura Impasto Acrílica",
      "Flores Secas Aplicadas"
    ],
    colors: [
      { name: "Girassol", hex: "#E6C229" },
      { name: "Ouro Puro", hex: "#F7D070" },
      { name: "Ocre", hex: "#D1A153" },
      { name: "Terracota", hex: "#C2593F" },
      { name: "Nanquim", hex: "#1C1616" }
    ]
  },
  {
    id: 2,
    title: "A Boca de Terracota",
    subtitle: "A Força da Argila Ancestral",
    desc: "O calor da terra moldado em textura labial de alta costura. O brilho mineral do bronze se funde com folhas secas e rosas profundas, simbolizando as raízes de onde brota a beleza.",
    image: "/makeup_oil_2.png",
    frameNum: "02 / FLORA_400",
    cameraText: "FILM REF: 5063 TX",
    makeupDetails: [
      "Argila Terracota Micronizada",
      "Manteiga Metálica de Bronze",
      "Pétalas de Rosa Secas",
      "Óleo de Castanha Iluminador"
    ],
    colors: [
      { name: "Terracota", hex: "#A34832" },
      { name: "Ouro Velho", hex: "#C89D32" },
      { name: "Carmesim Escuro", hex: "#7A1C2C" },
      { name: "Folha Seca", hex: "#8B5A2B" },
      { name: "Bronze Profundo", hex: "#5A3A22" }
    ]
  },
  {
    id: 3,
    title: "A Realeza de Esmeralda",
    subtitle: "O Manto Sagrado da Floresta",
    desc: "Coroada com a soberania das folhas tropicais e adornada com traços majestosos de tinta a óleo dourada. Uma obra-prima expressionista de presença, mistério e realeza.",
    image: "/makeup_oil_3.png",
    frameNum: "03 / FLORA_400",
    cameraText: "FILM REF: 5063 TX",
    makeupDetails: [
      "Base de Tinta a Óleo Corporal",
      "Traços de Ouro Metálico",
      "Coroa de Costelas-de-Adão",
      "Bálsamo de Orquídea Negra"
    ],
    colors: [
      { name: "Esmeralda", hex: "#0F4C3A" },
      { name: "Verde Floresta", hex: "#0A2A1E" },
      { name: "Ouro Aveludado", hex: "#BFA253" },
      { name: "Carvão Vegetal", hex: "#151716" },
      { name: "Ocre Suave", hex: "#CA8A04" }
    ]
  }
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photogram>(PHOTOGRAMS[0]);
  const [activeTab, setActiveTab] = useState<"info" | "palette" | "ingredients">("info");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentZoomImage, setCurrentZoomImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setCurrentZoomImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentZoomImage(null);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-ink overflow-hidden scroll-smooth selection:bg-sunflower selection:text-ink">
      {/* Background Image Hero */}
      <div className="absolute inset-0 z-0 h-screen">
        <Image 
          src="/woman.jpg" 
          alt="Mulher Negra com Flores" 
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-transparent"></div>
        {/* Top Gradient specific for header readability */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent"></div>
        <div className="absolute inset-0 bg-ink/20"></div>
      </div>

      {/* Header / Navbar */}
      <header className="fixed top-0 z-50 w-full px-6 md:px-16 py-6 flex items-center justify-between backdrop-blur-md bg-ink/10 border-b border-canvas/5">
        <div className="text-3xl font-display text-canvas flex items-baseline gap-2 cursor-pointer drop-shadow-md transition-transform hover:scale-102">
          <span>Flora</span>
          <span className="font-script text-sunflower text-4xl">Negra</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-canvas/90 text-xs tracking-[0.2em] font-medium uppercase drop-shadow-xl text-shadow-paint font-sans md:mr-8 lg:mr-16">
          <a href="#" className="hover:text-sunflower transition-colors">Manifesto</a>
          <a href="#campanha" className="hover:text-sunflower transition-colors">Campanha</a>
          <a href="#fotogramas" className="hover:text-sunflower transition-colors">Fotogramas</a>
        </nav>
      </header>

      {/* Main Content Hero */}
      <main className="relative z-10 flex flex-col justify-center px-6 md:px-16 pt-32 pb-20 md:py-32 max-w-[1440px] mx-auto w-full h-screen">
        <div className="max-w-3xl my-auto">
          <p className="font-script text-sunflower text-3xl md:text-5xl mb-4 drop-shadow-md animate-fade-in">
            uma campanha em óleo
          </p>
          
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-canvas text-shadow-paint">
            A beleza <span className="text-sunflower">não se</span><br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px var(--color-sunflower)' }}>pinta,</span><br />
            ela se <span className="italic">revela.</span>
          </h1>
          
          <p className="text-canvas/90 font-sans text-xl md:text-2xl leading-relaxed mt-8 max-w-xl drop-shadow-md">
            Cada fio, cada flor, cada olhar. Celebramos a mulher negra como uma 
            obra viva — pintada com a coragem das pinceladas de Van Gogh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a 
              href="#fotogramas" 
              className="inline-flex items-center justify-center px-10 py-4 bg-sunflower text-ink font-display font-medium transition-all hover:scale-105 active:scale-95 impasto-shadow hover:bg-sunflower/90"
            >
              Ver os Fotogramas
            </a>
            <a 
              href="#campanha" 
              className="inline-flex items-center justify-center px-10 py-4 border border-canvas text-canvas font-display font-medium bg-ink/30 transition-all hover:bg-canvas hover:text-ink active:bg-canvas/90 shadow-lg backdrop-blur-sm"
            >
              Nossa Essência
            </a>
          </div>
        </div>
      </main>

      {/* Campaign Manifesto Section */}
      <section id="campanha" className="relative z-10 w-full py-24 bg-ink swirl-bg border-t border-canvas/10 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="brush-divider w-24"></div>
            <p className="text-sunflower font-script text-3xl">Manifesto Flora Negra</p>
            <h2 className="text-canvas font-display text-4xl md:text-5xl leading-tight">
              O reencontro com o pigmento sagrado da terra.
            </h2>
            <p className="text-canvas/70 font-sans text-lg leading-relaxed">
              Propomos uma maquiagem que rejeita a cobertura e celebra a revelação. Nossos tons de ocre, girassol e argila não escondem o rosto; eles emolduram as características herdadas, as texturas de pele e o brilho natural.
            </p>
            <p className="text-canvas/70 font-sans text-lg leading-relaxed">
              Trabalhamos com ingredientes orgânicos, extratos de pétalas maceradas e pigmentação mineral, garantindo que o que toca a sua pele seja tão vivo quanto o que cresce no solo.
            </p>
          </div>
          
          <div className="lg:col-span-7 flex justify-center relative">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-lg overflow-hidden frame-painted group cursor-pointer" onClick={() => openLightbox("/manifesto_art.png")}>
              <Image 
                src="/manifesto_art.png" 
                alt="Detalhe de Maquiagem em Óleo" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 bg-ink/80 backdrop-blur-sm px-4 py-2 border border-canvas/25 text-canvas text-xs tracking-wider font-display font-medium rounded-sm">
                OBRA VIVA • TOQUE PARA EXPANDIR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Interactive Section: Photograms of Makeup Artistry */}
      <section id="fotogramas" className="relative z-10 w-full py-28 bg-[#0D0E10] border-t border-canvas/10 px-6 md:px-16 relative overflow-hidden">
        {/* Analog Noise Grain Overlays */}
        <div className="film-grain"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0E10] via-black to-[#0D0E10] pointer-events-none"></div>

        {/* Vintage Light Leak Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] light-leak opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] light-leak-warm opacity-50"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="font-script text-sunflower text-3xl md:text-4xl block">Estética dos Pigmentos</span>
            <h2 className="font-display text-4xl md:text-6xl text-canvas tracking-tight">
              Fotogramas de <span className="text-sunflower">Maquiagem Artística</span>
            </h2>
            <div className="brush-divider w-32 mx-auto my-4"></div>
            <p className="text-canvas/60 text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
              Explore o encontro entre a maquiagem experimental, a natureza e as texturas de tinta em óleo. Clique em cada frame analógico para analisar os tons, ingredientes e detalhes poéticos de cada criação.
            </p>
          </div>

          {/* Film Strip Gallery Container */}
          <div className="w-full mb-16 relative py-8 bg-black/40 rounded-2xl border border-canvas/5 overflow-hidden">
            {/* Top sprocket holes */}
            <div className="absolute top-2 inset-x-0 h-4 film-strip-sprockets opacity-40"></div>
            
            {/* Horizontal Film Reel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-10">
              {PHOTOGRAMS.map((photo) => {
                const isSelected = selectedPhoto.id === photo.id;
                return (
                  <div
                    key={photo.id}
                    onClick={() => {
                      setSelectedPhoto(photo);
                      const detailsSection = document.getElementById("selected-details");
                      if (detailsSection) {
                        detailsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }
                    }}
                    className={`relative cursor-pointer group transition-all duration-500 ease-out ${
                      isSelected 
                        ? "scale-[1.03] -translate-y-2 z-20" 
                        : "scale-98 opacity-50 hover:opacity-90 hover:scale-[1.01] hover:-translate-y-1"
                    }`}
                  >
                    {/* Photogram Slide Border (Polaroid/Film Frame hybrid) */}
                    <div className="photogram-frame p-4 rounded-md relative aspect-[4/5] flex flex-col justify-between overflow-hidden">
                      {/* Film info text headers inside border */}
                      <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-canvas/40 uppercase font-mono mb-2">
                        <span>{photo.cameraText}</span>
                        <span className={isSelected ? "text-sunflower font-semibold" : ""}>{photo.frameNum}</span>
                      </div>

                      {/* Image Area */}
                      <div className="relative flex-grow w-full overflow-hidden rounded bg-ink/50 border border-black/80">
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65 group-hover:opacity-40 transition-opacity"></div>
                        
                        {/* Film Slide Overlay Details */}
                        <div className="absolute bottom-3 inset-x-3 text-canvas flex flex-col gap-0.5">
                          <p className="font-script text-sunflower text-xl leading-none">{photo.subtitle}</p>
                          <h4 className="font-display text-lg tracking-wide leading-tight">{photo.title}</h4>
                        </div>

                        {/* Interactive Loupe Icon on Hover */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(photo.image);
                          }}
                          className="absolute top-3 right-3 p-2 bg-ink/75 backdrop-blur-sm border border-canvas/20 rounded-full text-canvas opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-sunflower hover:text-ink hover:scale-110"
                          title="Expandir Imagem"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                          </svg>
                        </button>
                      </div>

                      {/* Bottom Film Strip Details */}
                      <div className="flex justify-between items-center text-[9px] tracking-widest text-canvas/30 font-mono mt-3">
                        <span>ISO 400</span>
                        <span>EXP {photo.id * 12}</span>
                        <span>FLORA ART</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom sprocket holes */}
            <div className="absolute bottom-2 inset-x-0 h-4 film-strip-sprockets opacity-40"></div>
          </div>

          {/* Interactive Slide Inspector / Projector Viewer */}
          <div id="selected-details" className="w-full bg-[#121316] rounded-2xl border border-canvas/10 p-6 md:p-12 relative overflow-hidden transition-all duration-500 ease-in-out">
            <div className="absolute inset-0 bg-ink/10 pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Huge detailed zoom of active photogram */}
              <div className="lg:col-span-5 flex justify-center">
                <div 
                  className="relative w-full max-w-[380px] aspect-[4/5] polaroid-frame p-4 pb-14 rounded-sm rotate-[-1deg] shadow-2xl transition-all duration-700 hover:rotate-0 hover:scale-102 cursor-pointer group"
                  onClick={() => openLightbox(selectedPhoto.image)}
                >
                  <div className="relative w-full h-full overflow-hidden border border-canvas/40 bg-ink">
                    <Image 
                      src={selectedPhoto.image} 
                      alt={selectedPhoto.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  {/* Handwritten Polaroid style label */}
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-baseline">
                    <p className="font-script text-ink/80 text-2xl md:text-3xl leading-none">
                      {selectedPhoto.title}
                    </p>
                    <p className="font-mono text-[10px] text-ink/50 tracking-wider">
                      {selectedPhoto.frameNum}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed narrative, interactive tabs and colors */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="font-script text-sunflower text-2xl block">{selectedPhoto.subtitle}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-canvas">{selectedPhoto.title}</h3>
                  <div className="h-0.5 w-16 bg-sunflower/80 mt-1"></div>
                </div>

                {/* Interactive Analysis Tabs */}
                <div className="flex border-b border-canvas/10 gap-2">
                  <button 
                    onClick={() => setActiveTab("info")}
                    className={`pb-3 text-xs tracking-widest uppercase font-mono font-medium transition-all ${
                      activeTab === "info" 
                        ? "text-sunflower border-b-2 border-sunflower px-1" 
                        : "text-canvas/50 hover:text-canvas/80 px-1"
                    }`}
                  >
                    Estética
                  </button>
                  <button 
                    onClick={() => setActiveTab("palette")}
                    className={`pb-3 text-xs tracking-widest uppercase font-mono font-medium transition-all ${
                      activeTab === "palette" 
                        ? "text-sunflower border-b-2 border-sunflower px-1" 
                        : "text-canvas/50 hover:text-canvas/80 px-1"
                    }`}
                  >
                    Paleta de Cores
                  </button>
                  <button 
                    onClick={() => setActiveTab("ingredients")}
                    className={`pb-3 text-xs tracking-widest uppercase font-mono font-medium transition-all ${
                      activeTab === "ingredients" 
                        ? "text-sunflower border-b-2 border-sunflower px-1" 
                        : "text-canvas/50 hover:text-canvas/80 px-1"
                    }`}
                  >
                    Pigmentos & Matérias
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="min-h-[160px] flex flex-col justify-center">
                  
                  {activeTab === "info" && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-canvas/80 text-lg leading-relaxed font-sans">
                        {selectedPhoto.desc}
                      </p>
                      <div className="p-4 bg-black/30 rounded border border-canvas/5 flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full border border-sunflower/20 flex items-center justify-center text-sunflower bg-sunflower/5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.666 8.582a7.485 7.485 0 014.668-4.668m0 0a7.485 7.485 0 014.668 4.668m-4.668-4.668v16.184m0-16.184L9.666 8.582m4.668-4.668l4.668 4.668" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-canvas text-xs font-mono tracking-wider uppercase text-canvas/45">Conexão Artística</p>
                          <p className="text-canvas/80 text-sm font-sans mt-0.5">Estudo conceitual que interpreta as pinceladas grossas e táteis do Expressionismo.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "palette" && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-canvas/70 text-sm font-mono tracking-wider uppercase">Tonalidades Extraídas da Obra:</p>
                      <div className="flex flex-wrap gap-4 py-2">
                        {selectedPhoto.colors.map((color, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 group/color">
                            <div 
                              className="w-16 h-16 rounded-full border border-canvas/10 shadow-lg transition-transform duration-300 group-hover/color:scale-110 flex items-center justify-center cursor-pointer"
                              style={{ backgroundColor: color.hex }}
                              title={`Copiar ${color.hex}`}
                              onClick={() => {
                                navigator.clipboard.writeText(color.hex);
                                alert(`Cor ${color.hex} copiada para a área de transferência!`);
                              }}
                            />
                            <span className="text-[11px] font-mono text-canvas/80 tracking-wide mt-1">{color.name}</span>
                            <span className="text-[10px] font-mono text-canvas/40 tracking-wider uppercase">{color.hex}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-canvas/50 text-[11px] font-sans italic mt-2">
                        *Clique no círculo de cor para copiar o código hexadecimal do pigmento.
                      </p>
                    </div>
                  )}

                  {activeTab === "ingredients" && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-canvas/80 text-base font-sans">
                        Fórmulas exclusivas baseadas na biodiversidade de nossa flora. Elementos puros que alimentam a pele enquanto criam arte viva.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        {selectedPhoto.makeupDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3 py-2 px-3 bg-black/20 rounded border border-canvas/5">
                            <span className="text-sunflower font-mono text-xs">0{idx + 1} //</span>
                            <span className="text-canvas/90 text-sm font-sans tracking-wide">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => openLightbox(selectedPhoto.image)}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-canvas/25 text-canvas text-xs tracking-wider uppercase font-mono transition-colors hover:bg-canvas hover:text-ink active:scale-95"
                    >
                      Ampliar Fotograma
                    </button>
                  </div>
                  <span className="text-canvas/30 text-xs font-mono tracking-widest uppercase">
                    Flora Negra Lab © 2026
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Component */}
      {lightboxOpen && currentZoomImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-ink/50 border border-canvas/10 text-canvas rounded-full hover:bg-sunflower hover:text-ink hover:scale-105 transition-all"
            title="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative max-w-full max-h-[85vh] aspect-[4/5] rounded overflow-hidden shadow-2xl border border-canvas/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Film frame style wrapper inside lightbox */}
            <div className="absolute top-2 inset-x-2 flex justify-between items-center text-[10px] tracking-[0.25em] text-canvas/40 uppercase font-mono z-50 px-2 pointer-events-none">
              <span>EXPOSURE LOCK</span>
              <span>HD ZOOM PROJECTOR</span>
            </div>
            
            <Image 
              src={currentZoomImage} 
              alt="Ampliação do Fotograma" 
              fill
              className="object-contain"
              quality={100}
            />

            <div className="absolute bottom-2 inset-x-2 text-center text-[10px] tracking-[0.3em] text-canvas/40 uppercase font-mono pointer-events-none">
              FLORA NEGRA FINE ART
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 w-full py-16 bg-black border-t border-canvas/5 px-6 md:px-16 text-center text-canvas/40">
        <div className="max-w-[1440px] mx-auto space-y-6">
          <div className="text-2xl font-display text-canvas flex items-baseline justify-center gap-2">
            <span>Flora</span>
            <span className="font-script text-sunflower text-3xl">Negra</span>
          </div>
          <p className="font-sans text-sm max-w-md mx-auto">
            Uma ode à pigmentação da terra e à força expressiva do olhar. A arte e a maquiagem como manifestações da alma.
          </p>
          <div className="brush-divider w-16 mx-auto"></div>
          <p className="font-mono text-xs uppercase tracking-widest">
            © 2026 Flora Negra. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
