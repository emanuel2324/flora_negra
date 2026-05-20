import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-ink overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/woman.jpg" 
          alt="Mulher Negra com Flores" 
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent"></div>
        {/* Top Gradient specific for header readability */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/75 via-ink/30 to-transparent"></div>
        <div className="absolute inset-0 bg-ink/10"></div>
      </div>

      {/* Header / Navbar */}
      <header className="fixed top-0 z-50 w-full px-6 md:px-16 py-6 flex items-center justify-between">
        <div className="text-3xl font-display text-canvas flex items-baseline gap-2 cursor-pointer drop-shadow-md">
          <span>Flora</span>
          <span className="font-script text-sunflower text-4xl">Negra</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-canvas/90 text-xs tracking-[0.2em] font-medium uppercase drop-shadow-xl text-shadow-paint font-sans md:mr-8 lg:mr-16">
          <a href="#" className="hover:text-sunflower transition-colors">Manifesto</a>
          <a href="#" className="hover:text-sunflower transition-colors">Campanha</a>
          <a href="#" className="hover:text-sunflower transition-colors">Coleção</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-16 pt-32 pb-20 md:py-32 max-w-[1440px] mx-auto w-full">
        <div className="max-w-3xl">
          <p className="font-script text-sunflower text-3xl md:text-5xl mb-4 drop-shadow-md">
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
              href="#" 
              className="inline-flex items-center justify-center px-10 py-4 bg-sunflower text-ink font-display font-medium transition-transform hover:scale-105 active:scale-95 impasto-shadow"
            >
              Ver a Campanha
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-10 py-4 border border-canvas text-canvas font-display font-medium bg-ink/30 transition-all hover:bg-canvas hover:text-ink active:bg-canvas/90 shadow-lg backdrop-blur-sm"
            >
              Nosso Manifesto
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
