import React from 'react';
import { GithubIcon, InstagramIcon, TwitterIcon, ShoppingCart, Zap, Terminal } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Sean King Lord T-Shirt',
    price: 30,
    image: 'https://chipper-quokka-99395b.netlify.app/images/standard%20t/Sean%20king%20lord.jpg',
    description: 'Digital glitch meets street style',
  },
  {
    id: 2,
    name: 'Luma Mockup T-Shirt',
    price: 30,
    image: 'https://chipper-quokka-99395b.netlify.app/images/standard%20t/luma%20mockup%20shirt.jpg',
    description: 'Cyberpunk aesthetic redefined',
  },
];

function MatrixBackground() {
  React.useEffect(() => {
    const canvas = document.getElementById('matrix') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // Matrix characters
    const chars = "PAINT.EXE アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン 01010101";
    const charArray = chars.split('');

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    // Animation loop
    function draw() {
      // Set semi-transparent black background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Generate random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add some variation to the green color
        const green = Math.random() > 0.1 ? '#00ff00' : '#00cc00';
        ctx.fillStyle = green;

        // Draw the character
        ctx.fillText(char, x, y);

        // Reset drop or move it down
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    // Run animation
    const interval = setInterval(draw, 33); // Approximately 30 FPS

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      id="matrix"
      className="fixed inset-0 -z-10"
      style={{ background: 'black' }}
    />
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative bg-black/30 backdrop-blur-sm rounded-xl border-2 border-[#00ff00] p-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_#00ff00]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0ME0gMCAzMCBMIDQwIDMwIE0gMzAgMCBMIDMwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
      
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#111] mb-6 border border-[#00ff00]/50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-cover object-center transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <p className="text-sm text-[#00ff00]/80 font-medium">{product.description}</p>
        </div>
      </div>

      <div className="relative">
        <h3 className="text-2xl font-bold text-[#00ff00] mb-2 glitch-text">{product.name}</h3>
        <div className="flex items-center justify-between mb-6">
          <p className="text-xl font-medium text-[#00ff00]">${product.price}</p>
          <div className="flex items-center gap-2 text-[#00ff00]/70">
            <Terminal className="w-4 h-4" />
            <span className="text-sm">DIGITAL_CHAOS_v2.0</span>
          </div>
        </div>
        
        <button
          onClick={() => window.location.href = 'https://your-store-link.com'}
          className="w-full bg-[#00ff00] text-black py-4 px-6 rounded-lg font-bold transition-all duration-300 hover:bg-[#00ff00]/80 hover:shadow-[0_0_20px_#00ff00] flex items-center justify-center gap-2 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Buy Now
            <Zap className="w-5 h-5" />
          </span>
          <div className="absolute inset-0 bg-[#00ff00] transition-transform duration-300 translate-x-full group-hover:translate-x-0" />
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] font-mono selection:bg-[#00ff00] selection:text-black">
      <MatrixBackground />
      
      <main className="relative z-10 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-[glitch_2s_infinite] glitch inline-block relative">
              PAINT.EXE
              <span className="absolute inset-0 animate-[glitch_2.1s_infinite] text-[#ff00ff]/50 clip-path-1">PAINT.EXE</span>
              <span className="absolute inset-0 animate-[glitch_2.2s_infinite] text-[#00ffff]/50 clip-path-2">PAINT.EXE</span>
            </h1>
            <p className="text-xl md:text-2xl animate-pulse">
              Edgy, raw, and digital chaos on fabric & collectibles.
            </p>
            <div className="mt-4 inline-flex gap-2 px-4 py-2 bg-black/50 rounded-full border border-[#00ff00]/30 text-sm">
              <span className="animate-ping w-2 h-2 rounded-full bg-[#00ff00]" />
              <span>System Status: ONLINE</span>
            </div>
          </div>

          <section className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-radial from-[#00ff00]/10 to-transparent -z-10" />
            <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-[0.2em] glitch-text">
              Digital Threads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-[#00ff00]/30 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex gap-2 items-center text-sm">
              <span className="w-2 h-2 rounded-full bg-[#00ff00] animate-pulse" />
              <span>PAINT.EXE_SYSTEM v2.0.25</span>
            </div>
            
            <div className="flex gap-8">
              <a href="https://instagram.com" className="hover:text-[#00ff00] transition-colors group">
                <InstagramIcon className="w-6 h-6 group-hover:animate-pulse" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" className="hover:text-[#00ff00] transition-colors group">
                <TwitterIcon className="w-6 h-6 group-hover:animate-pulse" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com" className="hover:text-[#00ff00] transition-colors group">
                <GithubIcon className="w-6 h-6 group-hover:animate-pulse" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            
            <p className="text-center text-sm text-[#00ff00]/70">
              © 2025 PAINT.EXE | <span className="text-[#00ff00]">DIGITAL_CHAOS_INITIATIVE</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
