export function Divider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-3">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
          <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
          <div className="w-2 h-2 bg-[#8B0000] rounded-full"></div>
          <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
          <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
        </div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>
    </div>
  );
}

export function LotusPattern() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto">
      {/* Center circle */}
      <circle cx="30" cy="30" r="6" fill="#D4AF37" opacity="0.3"/>
      
      {/* Petals */}
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#FF9933" opacity="0.2" transform="rotate(0 30 30)"/>
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#FF9933" opacity="0.2" transform="rotate(45 30 30)"/>
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#FF9933" opacity="0.2" transform="rotate(90 30 30)"/>
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#FF9933" opacity="0.2" transform="rotate(135 30 30)"/>
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#8B0000" opacity="0.2" transform="rotate(22.5 30 30)"/>
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#8B0000" opacity="0.2" transform="rotate(67.5 30 30)"/>
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#8B0000" opacity="0.2" transform="rotate(112.5 30 30)"/>
      <ellipse cx="30" cy="18" rx="8" ry="14" fill="#8B0000" opacity="0.2" transform="rotate(157.5 30 30)"/>
      
      {/* Center dot */}
      <circle cx="30" cy="30" r="3" fill="#D4AF37"/>
    </svg>
  );
}
