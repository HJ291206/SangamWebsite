import { useState } from "react";
import { Calendar, MapPin, Clock, Users, CheckCircle2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Divider } from "../components/Divider";

export function EventsPage() {
  const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");

  const pastEvents = [
    { 
      id: 1, 
      name: "Annual Holi Festival", 
      date: "March 8, 2026", 
      description: "A vibrant celebration of colors with traditional music, dance, and delicious festive treats enjoyed by over 300 community members.",
      attendees: 300
    },
    { 
      id: 2, 
      name: "Classical Music Concert", 
      date: "February 14, 2026", 
      description: "An evening of soulful Hindustani classical music featuring renowned tabla and sitar artists from Varanasi.",
      attendees: 180
    },
    { 
      id: 3, 
      name: "Heritage Walk - Old Lucknow", 
      date: "January 20, 2026", 
      description: "Guided tour through the historical landmarks of Lucknow, exploring Nawabi architecture and cultural heritage.",
      attendees: 95
    },
    { 
      id: 4, 
      name: "Traditional Cooking Workshop", 
      date: "December 12, 2025", 
      description: "Hands-on session learning authentic UP cuisine including Awadhi biryani and traditional sweets from expert chefs.",
      attendees: 65
    },
  ];

  const upcomingEvents = [
    { 
      id: 5, 
      name: "Classical Kathak Performance", 
      date: "March 15, 2026",
      time: "7:00 PM - 10:00 PM",
      location: "Central Auditorium",
      description: "Experience the elegance of Kathak with renowned dancers performing traditional pieces showcasing the grace of this ancient art form.",
      image: "https://images.unsplash.com/photo-1717011969223-0217a302ec6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBkYW5jZSUyMGthdGhhayUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjI5NDM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      spotsLeft: 45
    },
    { 
      id: 6, 
      name: "Deepavali Festival Celebration", 
      date: "March 28, 2026",
      time: "6:00 PM - 11:00 PM",
      location: "Community Hall",
      description: "Join us for a magnificent celebration of lights with traditional diya lighting ceremony, cultural programs, and festive feast.",
      image: "https://images.unsplash.com/photo-1759222198113-d0e2b862a3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXlhJTIwb2lsJTIwbGFtcCUyMGZlc3RpdmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcyMjk0MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      spotsLeft: 80
    },
    { 
      id: 7, 
      name: "Traditional Saree Exhibition", 
      date: "April 10, 2026",
      time: "11:00 AM - 6:00 PM",
      location: "Exhibition Center",
      description: "Explore the exquisite beauty of traditional Banarasi and Lucknowi sarees with expert artisans demonstrating weaving techniques.",
      image: "https://images.unsplash.com/photo-1766857454509-3ee243001fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYXJpJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZyUyMGN1bHR1cmV8ZW58MXx8fHwxNzcyMjk0MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      spotsLeft: 60
    },
    { 
      id: 8, 
      name: "Spiritual Discourse & Meditation", 
      date: "April 25, 2026",
      time: "8:00 AM - 12:00 PM",
      location: "Meditation Hall",
      description: "Morning session of spiritual teachings and guided meditation inspired by the wisdom traditions of Uttar Pradesh.",
      image: "https://images.unsplash.com/photo-1720463903218-73720e80286d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzcyMjk0MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      spotsLeft: 40
    },
    { 
      id: 9, 
      name: "Youth Cultural Gathering", 
      date: "May 8, 2026",
      time: "4:00 PM - 8:00 PM",
      location: "Youth Center",
      description: "Interactive session for young members to learn about UP culture, traditional arts, and connect with heritage.",
      image: "https://images.unsplash.com/photo-1703145219083-6037d97decb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGFydCUyMHJhbmdvbGklMjBwYXR0ZXJufGVufDF8fHx8MTc3MjI5NDM2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      spotsLeft: 100
    },
    { 
      id: 10, 
      name: "Heritage Appreciation Evening", 
      date: "June 1, 2026",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Hall",
      description: "Celebrating the architectural marvels and cultural treasures of Uttar Pradesh with presentations and discussions.",
      image: "https://images.unsplash.com/photo-1736462522354-6b4388326c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMHV0dGFyJTIwcHJhZGVzaCUyMG1vbnVtZW50fGVufDF8fHx8MTc3MjI5NDM2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      spotsLeft: 70
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-[#8B0000] via-[#6d0000] to-[#FF9933] text-white py-20 overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 ring-2 ring-[#D4AF37]/50">
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cultural Events</h1>
          <Divider />
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Immerse yourself in the vibrant traditions and spiritual essence of Uttar Pradesh
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Filter Bar */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-12 sticky top-24 z-40 ring-2 ring-[#D4AF37]/20">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                filter === "all" 
                  ? "bg-gradient-to-r from-[#FF9933] to-[#ff6600] text-white shadow-lg" 
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                filter === "upcoming" 
                  ? "bg-gradient-to-r from-[#FF9933] to-[#ff6600] text-white shadow-lg" 
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("past")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                filter === "past" 
                  ? "bg-gradient-to-r from-[#FF9933] to-[#ff6600] text-white shadow-lg" 
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Upcoming Events Section */}
        {(filter === "all" || filter === "upcoming") && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9933] to-[#ff6600] rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-[#D4AF37]/20">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Upcoming Events</h2>
                <p className="text-sm text-muted-foreground">Join us in celebrating our rich heritage</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ring-2 ring-[#D4AF37]/20 hover:ring-[#FF9933]/40">
                  <div className="relative h-52 overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-[#8B0000]/30 to-transparent"></div>
                    
                    {/* Spots left badge */}
                    <div className="absolute top-4 right-4 bg-[#D4AF37] backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg ring-2 ring-white/50">
                      <span className="text-sm font-bold text-white">{event.spotsLeft} spots left</span>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-xl"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">
                      {event.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 text-[#FF9933]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 text-[#FF9933]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 text-[#FF9933]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-[#FF9933] to-[#ff6600] hover:from-[#ff6600] hover:to-[#FF9933] text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">
                      View Info
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Event History Section */}
        {(filter === "all" || filter === "past") && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B0000] to-[#5d0000] rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-[#D4AF37]/20">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Event History</h2>
                <p className="text-sm text-muted-foreground">Celebrating our past cultural gatherings</p>
              </div>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF9933] via-[#D4AF37] to-[#8B0000] rounded-full"></div>
              
              <div className="space-y-8">
                {pastEvents.map((event, index) => (
                  <div key={event.id} className="relative">
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-5 top-8 w-7 h-7 bg-gradient-to-br from-[#FF9933] to-[#ff6600] rounded-full border-4 border-white shadow-xl z-10 ring-2 ring-[#D4AF37]/30"></div>
                    
                    <div className="md:ml-24 bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all border-2 border-[#D4AF37]/10 hover:border-[#FF9933]/30">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full text-sm font-medium mb-3">
                            <span className="bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">{event.date}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">{event.name}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-[#FF9933]" />
                            <span className="font-medium text-[#8B0000]">{event.attendees} attendees</span>
                          </div>
                        </div>
                        
                        <div className="lg:text-right">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full ring-2 ring-green-200">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}