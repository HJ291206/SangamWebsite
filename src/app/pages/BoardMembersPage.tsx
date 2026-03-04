import { Mail, Linkedin, Award, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Divider } from "../components/Divider";

export function BoardMembersPage() {
  const facultyCoordinator = {
    name: "Dr. Priya Sharma",
    role: "Faculty Coordinator",
    bio: "Leading the club with vision and academic excellence. Over 15 years of experience in cultural studies and heritage preservation. Dedicated to nurturing student leadership and promoting the rich cultural legacy of Uttar Pradesh.",
    image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    email: "priya.sharma@university.edu"
  };

  const board2024_25 = [
    { 
      name: "Rajesh Kumar", 
      role: "President", 
      bio: "Leading student initiatives and cultural programs with dedication.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Ananya Verma", 
      role: "Vice President", 
      bio: "Coordinating events and member engagement activities.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Vikram Singh", 
      role: "Secretary", 
      bio: "Maintaining records and facilitating communication.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Priya Gupta", 
      role: "Treasurer", 
      bio: "Managing club finances and budget planning.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Aditya Mishra", 
      role: "Cultural Director", 
      bio: "Leading cultural performances and workshops.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Kavita Yadav", 
      role: "Events Coordinator", 
      bio: "Planning and executing club events and festivals.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const board2023_24 = [
    { 
      name: "Rahul Pandey", 
      role: "President", 
      bio: "Former president who established key partnerships.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Sneha Tripathi", 
      role: "Vice President", 
      bio: "Led member engagement and outreach programs.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Arjun Tiwari", 
      role: "Secretary", 
      bio: "Documented club activities and maintained archives.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Meera Saxena", 
      role: "Treasurer", 
      bio: "Managed finances with transparency and efficiency.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const board2022_23 = [
    { 
      name: "Deepak Shukla", 
      role: "President", 
      bio: "Founded key cultural initiatives and traditions.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Ritu Chauhan", 
      role: "Vice President", 
      bio: "Established first annual cultural festival.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    { 
      name: "Nikhil Dubey", 
      role: "Secretary", 
      bio: "Built club's organizational structure and systems.",
      image: "https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjI5MzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const MemberCard = ({ member, showEmail = false }: { member: any; showEmail?: boolean }) => (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ring-2 ring-[#D4AF37]/20 hover:ring-[#FF9933]/40">
      <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#FF9933] to-[#D4AF37]"></div>
      <div className="p-6">
        <div className="relative w-28 h-28 mx-auto mb-4">
          <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-[#D4AF37] group-hover:ring-[#FF9933] transition-all shadow-xl">
            <ImageWithFallback
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#FF9933] to-[#ff6600] rounded-full border-3 border-white shadow-lg"></div>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold mb-1">{member.name}</h3>
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#FF9933]/20 to-[#D4AF37]/20 rounded-full ring-1 ring-[#D4AF37]/30 mb-3">
            <span className="text-xs font-bold bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">{member.role}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
          
          {showEmail && (
            <div className="flex gap-2 justify-center">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#FF9933]/10 to-[#D4AF37]/10 hover:from-[#FF9933] hover:to-[#ff6600] text-[#8B0000] hover:text-white rounded-full transition-all text-xs font-medium ring-1 ring-[#D4AF37]/30 hover:ring-0">
                <Mail className="w-3 h-3" />
                <span>Email</span>
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#FF9933]/10 to-[#D4AF37]/10 hover:from-[#8B0000] hover:to-[#6d0000] text-[#8B0000] hover:text-white rounded-full transition-all text-xs font-medium ring-1 ring-[#D4AF37]/30 hover:ring-0">
                <Linkedin className="w-3 h-3" />
                <span>Connect</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-[#8B0000] via-[#6d0000] to-[#FF9933] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 ring-2 ring-[#D4AF37]/50">
            <Award className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Board Members</h1>
          <Divider />
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the dedicated leaders preserving and promoting our cultural heritage
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Faculty Coordinator Highlight */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Mentorship & Guidance</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Faculty Coordinator</span>
            </h2>
            <Divider />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#D4AF37]/40 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#FF9933]/10 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#8B0000]/10 to-transparent rounded-tl-full"></div>
              
              <div className="h-2 bg-gradient-to-r from-[#8B0000] via-[#FF9933] to-[#D4AF37]"></div>
              
              <div className="relative z-10 p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-48 rounded-full overflow-hidden ring-8 ring-[#D4AF37] shadow-2xl">
                      <ImageWithFallback
                        src={facultyCoordinator.image}
                        alt={facultyCoordinator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 p-3 bg-gradient-to-br from-[#FF9933] to-[#ff6600] rounded-full shadow-lg ring-4 ring-white">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">
                      {facultyCoordinator.name}
                    </h3>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/20 to-[#D4AF37]/20 rounded-full ring-2 ring-[#D4AF37]/40 mb-4">
                      <span className="font-bold bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">{facultyCoordinator.role}</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {facultyCoordinator.bio}
                    </p>
                    <div className="flex gap-3 justify-center md:justify-start">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FF9933] to-[#ff6600] hover:from-[#ff6600] hover:to-[#FF9933] text-white rounded-full transition-all font-medium shadow-lg hover:shadow-xl">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </button>
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#8B0000] to-[#6d0000] hover:from-[#6d0000] hover:to-[#8B0000] text-white rounded-full transition-all font-medium shadow-lg hover:shadow-xl">
                        <Linkedin className="w-4 h-4" />
                        <span>Connect</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board 2024-25 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Current Team</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Board 2024–25</span>
            </h2>
            <Divider />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {board2024_25.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Board 2023-24 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Previous Leadership</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Board 2023–24</span>
            </h2>
            <Divider />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {board2023_24.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Board 2022-23 */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9933]/10 to-[#8B0000]/10 rounded-full mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#8B0000] bg-clip-text text-transparent">Founding Leadership</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#8B0000] to-[#FF9933] bg-clip-text text-transparent">Board 2022–23</span>
            </h2>
            <Divider />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {board2022_23.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
