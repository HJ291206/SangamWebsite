import { Link, Outlet, useLocation } from "react-router";
import { Instagram, Linkedin, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";

export function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 shadow-md sticky top-0 z-50 backdrop-blur-sm border-b-2 border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF9933] via-[#FF9933] to-[#8B0000] rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#D4AF37] group-hover:ring-4 transition-all">
                  <span className="text-white text-xl font-bold">स</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#D4AF37] rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Sangam</span>
                <p className="text-xs text-muted-foreground -mt-1">Uttar Pradesh Culture Club</p>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              <Link 
                to="/" 
                className={`px-6 py-2.5 rounded-full transition-all font-medium ${
                  isActive("/") 
                    ? "bg-gradient-to-r from-[#FF9933] to-[#ff6600] text-white shadow-lg shadow-[#FF9933]/30" 
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className={`px-6 py-2.5 rounded-full transition-all font-medium ${
                  isActive("/events") 
                    ? "bg-gradient-to-r from-[#FF9933] to-[#ff6600] text-white shadow-lg shadow-[#FF9933]/30" 
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                Events
              </Link>
              <Link 
                to="/board-members" 
                className={`px-6 py-2.5 rounded-full transition-all font-medium ${
                  isActive("/board-members") 
                    ? "bg-gradient-to-r from-[#FF9933] to-[#ff6600] text-white shadow-lg shadow-[#FF9933]/30" 
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                Board Members
              </Link>
              <Link 
                to="/contact" 
                className={`px-6 py-2.5 rounded-full transition-all font-medium ${
                  isActive("/contact") 
                    ? "bg-gradient-to-r from-[#FF9933] to-[#ff6600] text-white shadow-lg shadow-[#FF9933]/30" 
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-secondary rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Decorative border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#8B0000] via-[#6d0000] to-[#4d0000] text-white mt-auto overflow-hidden">
        {/* Particles Background */}
        <ParticlesBackground />
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Top decorative border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* About */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#D4AF37]">
                      <span className="text-white text-xl font-bold">स</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-[#8B0000]"></div>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-white">Sangam</span>
                    <p className="text-xs text-white/70 -mt-1">Uttar Pradesh Culture Club</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                  Celebrating the rich heritage, vibrant traditions, and spiritual essence of Uttar Pradesh. 
                  Join us in preserving and promoting our cultural legacy.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-[#FF9933] backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 ring-1 ring-white/20">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-[#FF9933] backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 ring-1 ring-white/20">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-[#FF9933] backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 ring-1 ring-white/20">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-[#FF9933] backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 ring-1 ring-white/20">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold mb-4 text-lg text-[#D4AF37] flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-white/80 hover:text-[#FF9933] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>Home
                  </Link></li>
                  <li><Link to="/events" className="text-white/80 hover:text-[#FF9933] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>Events
                  </Link></li>
                  <li><Link to="/board-members" className="text-white/80 hover:text-[#FF9933] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>Board Members
                  </Link></li>
                  <li><Link to="/contact" className="text-white/80 hover:text-[#FF9933] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>Contact
                  </Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-bold mb-4 text-lg text-[#D4AF37] flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                  Contact Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                    <span className="text-sm">contact@sangam-up.org</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                    <span className="text-sm">+91 98765 43210</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                    <span className="text-sm">Lucknow, Uttar Pradesh<br />India</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#FF9933] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                </div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
              </div>
              <p className="text-white/60 text-sm">© 2026 Sangam - Uttar Pradesh Culture Club. All rights reserved.</p>
              <p className="text-white/40 text-xs mt-2">संस्कृति की शान, हमारी पहचान</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}