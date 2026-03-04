import { Instagram, Linkedin, Youtube, Facebook, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Divider } from "../components/Divider";

export function ContactPage() {
  const socialPlatforms = [
    { 
      id: 1, 
      name: "Instagram", 
      handle: "@sangamup", 
      followers: "3.2K",
      color: "from-purple-500 to-pink-500",
      icon: Instagram,
      link: "#"
    },
    { 
      id: 2, 
      name: "LinkedIn", 
      handle: "Sangam UP Culture Club", 
      followers: "2.1K",
      color: "from-blue-600 to-blue-400",
      icon: Linkedin,
      link: "#"
    },
    { 
      id: 3, 
      name: "YouTube", 
      handle: "SangamUPCulture", 
      followers: "4.5K",
      color: "from-red-600 to-red-400",
      icon: Youtube,
      link: "#"
    },
    { 
      id: 4, 
      name: "Facebook", 
      handle: "SangamUttarPradesh", 
      followers: "5.8K",
      color: "from-blue-700 to-blue-500",
      icon: Facebook,
      link: "#"
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
            <Send className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <Divider />
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with us and join our vibrant cultural community
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Contact Information */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Reach Out</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Contact Information</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out through any of the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office Location */}
            <div className="bg-white rounded-3xl p-8 shadow-lg ring-2 ring-[#D4AF37]/20 hover:shadow-2xl transition-all">
              <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#FF9933] to-[#D4AF37] rounded-full mb-6"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF9933] to-[#ff6600] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-white">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Office Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Heritage Lane<br />
                    Gomti Nagar, Lucknow<br />
                    Uttar Pradesh - 226010<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-8 shadow-lg ring-2 ring-[#D4AF37]/20 hover:shadow-2xl transition-all">
              <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#FF9933] to-[#D4AF37] rounded-full mb-6"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#8B0000] to-[#6d0000] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-white">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Email Us</h3>
                  <p className="text-muted-foreground mb-2">
                    <a href="mailto:contact@sangam-up.org" className="hover:text-[#FF9933] transition-colors">
                      General: contact@sangam-up.org
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="mailto:events@sangam-up.org" className="hover:text-[#FF9933] transition-colors">
                      Events: events@sangam-up.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl p-8 shadow-lg ring-2 ring-[#D4AF37]/20 hover:shadow-2xl transition-all">
              <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#FF9933] to-[#D4AF37] rounded-full mb-6"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#b8941f] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-white">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Call Us</h3>
                  <p className="text-muted-foreground mb-2">
                    <a href="tel:+915221234567" className="hover:text-[#FF9933] transition-colors">
                      Office: +91 522 123 4567
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+919876543210" className="hover:text-[#FF9933] transition-colors">
                      Mobile: +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-lg ring-2 ring-[#D4AF37]/20 hover:shadow-2xl transition-all">
              <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#FF9933] to-[#D4AF37] rounded-full mb-6"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF9933] to-[#8B0000] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-white">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Office Hours</h3>
                  <p className="text-muted-foreground mb-1">
                    Monday - Friday: 10:00 AM - 6:00 PM
                  </p>
                  <p className="text-muted-foreground mb-1">
                    Saturday: 11:00 AM - 3:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Stay Connected</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Follow Us on Social Media</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands celebrating Uttar Pradesh's cultural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.id}
                  href={platform.link}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ring-2 ring-[#D4AF37]/20 hover:ring-[#FF9933]/40 text-center block"
                >
                  <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#FF9933] to-[#D4AF37] rounded-full mb-6"></div>
                  
                  <div className="relative mx-auto mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform ring-4 ring-white mx-auto`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full border-3 border-white shadow-lg"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">{platform.name}</h3>
                  <p className="text-sm text-[#FF9933] font-medium mb-2">{platform.handle}</p>
                  <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF9933]/10 to-[#D4AF37]/10 rounded-full mb-4">
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">{platform.followers}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
