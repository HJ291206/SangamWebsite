import { Link } from "react-router";
import { Calendar, Sparkles, Music, Users, Flame, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Divider, LotusPattern } from "../components/Divider";

export function HomePage() {
  const upcomingEvents = [
    { 
      id: 1, 
      title: "Classical Kathak Performance", 
      date: "March 15, 2026", 
      description: "Experience the elegance of Kathak with renowned dancers performing traditional pieces.",
      image: "https://images.unsplash.com/photo-1717011969223-0217a302ec6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBkYW5jZSUyMGthdGhhayUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjI5NDM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    { 
      id: 2, 
      title: "Deepavali Festival Celebration", 
      date: "March 28, 2026", 
      description: "Join us for a magnificent celebration of lights with traditional rituals and cultural programs.",
      image: "https://images.unsplash.com/photo-1759222198113-d0e2b862a3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXlhJTIwb2lsJTIwbGFtcCUyMGZlc3RpdmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcyMjk0MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    { 
      id: 3, 
      title: "Traditional Saree Exhibition", 
      date: "April 10, 2026", 
      description: "Explore the beauty of traditional Banarasi and Lucknowi sarees with expert artisans.",
      image: "https://images.unsplash.com/photo-1766857454509-3ee243001fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYXJpJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZyUyMGN1bHR1cmV8ZW58MXx8fHwxNzcyMjk0MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const culturalHighlights = [
    { icon: Music, title: "Classical Arts", description: "Kathak, Hindustani Music" },
    { icon: Flame, title: "Festivals", description: "Deepavali, Holi, Navratri" },
    { icon: Sparkles, title: "Heritage", description: "Taj Mahal, Spiritual Sites" },
    { icon: Users, title: "Community", description: "Cultural Exchange Programs" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1701619878991-716d8fbb319f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGJhbmFyYXMlMjBnaGF0JTIwZ2FuZ2VzJTIwcml2ZXJ8ZW58MXx8fHwxNzcyMzYzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Banaras Ghat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/80 via-[#8B0000]/60 to-[#FF9933]/70"></div>
          
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
          {/* Decorative lotus */}
          <div className="mb-8">
            <LotusPattern />
          </div>
          
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6 border border-[#D4AF37]/30 shadow-lg">
            <span className="text-sm font-medium">स्वागत है • Welcome</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            संगम
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 drop-shadow-lg">
            Uttar Pradesh Culture Club
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Celebrating the spiritual heritage, vibrant festivals, and timeless traditions of Uttar Pradesh
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events"
              className="group px-8 py-4 bg-gradient-to-r from-[#FF9933] to-[#ff6600] hover:from-[#ff6600] hover:to-[#FF9933] text-white rounded-full font-medium transition-all hover:scale-105 shadow-2xl hover:shadow-[#FF9933]/50 flex items-center justify-center gap-2 ring-2 ring-white/30"
            >
              Join Our Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/events"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-medium transition-all border-2 border-white/40 shadow-lg"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-20 bg-gradient-to-br from-white via-[#FFF8F0] to-white relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L60 30 L70 50 L60 70 Z M50 50 L40 30 L30 50 L40 70 Z' fill='%23FF9933' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Cultural Essence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Our Heritage</h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group text-center p-8 rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#D4AF37]/20">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#ff6600] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform ring-4 ring-[#D4AF37]/20">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-[#FFF3E6] via-white to-[#FFF3E6] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#D4AF37]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1720463903218-73720e80286d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzcyMjk0MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Temple architecture"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/30 to-transparent"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-2xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-6">
                <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">
                  Preserving Heritage,
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#FF9933] to-[#ff6600] bg-clip-text text-transparent">
                  Celebrating Culture
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sangam is dedicated to celebrating the rich cultural tapestry of Uttar Pradesh—a land of spiritual awakening, 
                architectural marvels, and vibrant traditions that have shaped India's cultural identity.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From the timeless beauty of classical Kathak to the spiritual essence of ancient temples, 
                we bring together a community passionate about preserving and promoting our cultural heritage for future generations.
              </p>
              
              {/* Decorative quote */}
              <div className="border-l-4 border-[#D4AF37] pl-6 py-4 bg-gradient-to-r from-[#FFF3E6] to-transparent rounded-r-2xl mb-8">
                <p className="text-[#8B0000] italic font-medium">"संस्कृति की शान, हमारी पहचान"</p>
                <p className="text-sm text-muted-foreground mt-1">Culture is our pride, our identity</p>
              </div>
              
              <Link 
                to="/board-members"
                className="inline-flex items-center gap-2 text-[#FF9933] hover:text-[#8B0000] font-medium transition-colors group"
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='1'%3E%3Cpath d='M40 40 L60 20 L40 0 L20 20 Z M40 40 L60 60 L40 80 L20 60 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Upcoming Programs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Cultural Events</span>
            </h2>
            <Divider />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in celebrating the vibrant traditions and artistic excellence of Uttar Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ring-1 ring-[#D4AF37]/20 hover:ring-2 hover:ring-[#FF9933]/40">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-[#8B0000]/40 to-transparent"></div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-xl"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm mb-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent group-hover:from-[#FF9933] group-hover:to-[#8B0000] transition-all">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="w-full py-3 bg-gradient-to-r from-[#FF9933] to-[#ff6600] hover:from-[#ff6600] hover:to-[#FF9933] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
                    View Info
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#5d0000] text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 ring-2 ring-[#D4AF37]/30"
            >
              View All Events
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}