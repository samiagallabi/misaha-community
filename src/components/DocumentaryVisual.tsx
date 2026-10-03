import React from 'react';

interface DocumentaryVisualProps {
  type: 'jebana-coffee' | 'elder-hands' | 'tea-tray' | 'archival-keepsakes' | 'window-light';
  captionAr?: string;
  captionEn?: string;
  className?: string;
  lang?: 'ar' | 'en';
}

export const DocumentaryVisual: React.FC<DocumentaryVisualProps> = ({
  type,
  captionAr,
  captionEn,
  className = '',
  lang = 'ar',
}) => {
  const isAr = lang === 'ar';

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#235836]/10 bg-[#F4EFE6] shadow-sm transition-all duration-500 group ${className}`}>
      {/* Visual Canvas */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#ECE5D8] via-[#E2D8C7] to-[#D5C9B3] p-6 flex flex-col justify-between">
        {/* Subtle film grain & warm light beam effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/35 via-transparent to-black/15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Vignette Metadata Badge */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-wider text-[#235836]/70 uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E86329] animate-pulse" />
            MISaha Archive
          </span>
          <span className="text-stone-500">Cairo · Oct 2026</span>
        </div>

        {/* Central Artistic Documentary Composition */}
        <div className="relative z-10 my-auto flex items-center justify-center py-4">
          {type === 'jebana-coffee' && (
            <svg
              viewBox="0 0 320 220"
              className="w-full max-w-[280px] h-auto drop-shadow-md select-none transition-transform duration-700 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Wooden Table Horizon */}
              <line x1="20" y1="180" x2="300" y2="180" stroke="#8C6E52" strokeWidth="3" strokeLinecap="round" />
              <line x1="40" y1="186" x2="280" y2="186" stroke="#A88B70" strokeWidth="1" strokeDasharray="6 6" />

              {/* Window Sunlight Beam */}
              <polygon points="120,10 280,10 310,180 180,180" fill="url(#sunbeam)" opacity="0.4" />

              {/* Sudanese Jebana (Clay pot) */}
              {/* Base Ring / Stand (Wagga) */}
              <ellipse cx="140" cy="174" rx="28" ry="8" fill="#8D5537" />
              <path d="M116 174 C116 168 164 168 164 174 L160 178 L120 178 Z" fill="#6A3B21" />

              {/* Pot Body */}
              <circle cx="140" cy="132" r="32" fill="#582C18" />
              <circle cx="140" cy="132" r="30" fill="url(#clayGradient)" />
              {/* Traditional Incised Motifs on Jebana */}
              <path d="M120 132 C128 126 152 126 160 132" stroke="#E2956A" strokeWidth="1.5" strokeDasharray="2 3" />
              <circle cx="140" cy="132" r="6" stroke="#E2956A" strokeWidth="1" />

              {/* Jebana Neck & Spout */}
              <path d="M134 104 L132 76 C132 70 148 70 148 76 L146 104 Z" fill="#6A3B21" />
              <ellipse cx="140" cy="74" rx="8" ry="3" fill="#42200F" />
              {/* Jebana Spout */}
              <path d="M147 88 C160 84 174 96 178 106 C178 112 172 110 166 102 C158 92 147 96 146 98" fill="#582C18" />
              {/* Jebana Handle */}
              <path d="M128 92 C104 90 98 128 118 144" stroke="#4A2614" strokeWidth="5" strokeLinecap="round" />

              {/* Steam wisps */}
              <path d="M140 68 C138 52 144 44 140 30" stroke="#FFF7ED" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M146 64 C148 50 144 40 148 26" stroke="#FFF7ED" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

              {/* Porcelain Finjan Cups */}
              <ellipse cx="206" cy="168" rx="14" ry="4" fill="#6E5644" opacity="0.3" />
              <path d="M196 150 C196 166 216 166 216 150 Z" fill="#FCFAF6" stroke="#D3C9BD" strokeWidth="1" />
              <ellipse cx="206" cy="150" rx="10" ry="3" fill="#4D2A18" />
              {/* Gold Filigree Band on Cup */}
              <path d="M197 154 C202 156 210 156 215 154" stroke="#D79E43" strokeWidth="1" />

              {/* Prayer Beads (Sebha) draping on table */}
              <path
                d="M60 178 C80 170 110 184 116 178 C122 172 134 186 160 182 C180 180 200 188 230 180"
                stroke="#3E2723"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="1 8"
              />
              {/* Tassel on Sebha */}
              <path d="M58 178 L48 184 M58 178 L46 181 M58 178 L48 177" stroke="#2B7946" strokeWidth="1.5" strokeLinecap="round" />

              <defs>
                <linearGradient id="clayGradient" x1="120" y1="110" x2="165" y2="155" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7E3F1F" />
                  <stop offset="0.6" stopColor="#582C18" />
                  <stop offset="1" stopColor="#3B1C0E" />
                </linearGradient>
                <linearGradient id="sunbeam" x1="120" y1="10" x2="280" y2="180" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFBEB" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#FEF3C7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {type === 'elder-hands' && (
            <svg
              viewBox="0 0 320 220"
              className="w-full max-w-[280px] h-auto drop-shadow-md select-none transition-transform duration-700 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Vintage Sepia Photograph Frame held in hands */}
              <rect x="80" y="44" width="160" height="110" rx="3" fill="#E8DFCF" stroke="#8C7456" strokeWidth="2" transform="rotate(-3 160 99)" />
              <rect x="90" y="52" width="140" height="92" rx="1" fill="#D3C3A7" transform="rotate(-3 160 99)" />

              {/* Silhouette inside old photo (Khartoum Nile / Palm / Family silhouette) */}
              <path d="M102 120 C116 100 130 114 146 95 C160 110 180 88 200 120 Z" fill="#998365" opacity="0.6" transform="rotate(-3 160 99)" />
              <circle cx="190" cy="74" r="8" fill="#F4EDE0" opacity="0.8" transform="rotate(-3 160 99)" />

              {/* Traditional White / Embroidered Cloth / Jalabiya cuff */}
              <path d="M20 180 C40 140 68 148 94 156 L70 210 Z" fill="#F9F7F2" stroke="#D9D0C3" strokeWidth="1" />
              <path d="M300 180 C280 140 252 148 226 156 L250 210 Z" fill="#F9F7F2" stroke="#D9D0C3" strokeWidth="1" />

              {/* Dignified Elder Hands */}
              {/* Left Hand Fingers */}
              <path d="M72 136 C80 128 92 132 94 144 C95 152 86 160 76 156 Z" fill="#7C523A" />
              <path d="M84 122 C92 114 104 118 106 130 C107 140 98 148 88 142 Z" fill="#885A3F" />
              <path d="M96 112 C104 104 116 108 117 122 C118 132 108 138 98 132 Z" fill="#8E6044" />
              {/* Delicate knuckle wrinkles & age texture */}
              <path d="M86 128 C90 126 94 128 95 130" stroke="#5E3821" strokeWidth="1" strokeLinecap="round" />
              <path d="M98 118 C102 116 106 118 107 120" stroke="#5E3821" strokeWidth="1" strokeLinecap="round" />

              {/* Right Hand Thumb & Fingers Holding other side */}
              <path d="M246 134 C238 126 226 130 224 142 C223 150 232 158 242 154 Z" fill="#7C523A" />
              <path d="M234 120 C226 112 214 116 212 128 C211 138 220 146 230 140 Z" fill="#885A3F" />
              <path d="M222 110 C214 102 202 106 201 120 C200 130 210 136 220 130 Z" fill="#8E6044" />
              <path d="M232 126 C228 124 224 126 223 128" stroke="#5E3821" strokeWidth="1" strokeLinecap="round" />

              {/* Gentle Window Sunlight across hands */}
              <rect x="60" y="30" width="200" height="150" fill="url(#handsLight)" opacity="0.3" pointerEvents="none" />

              <defs>
                <linearGradient id="handsLight" x1="80" y1="40" x2="240" y2="180" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF7ED" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#C2410C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {type === 'tea-tray' && (
            <svg
              viewBox="0 0 320 220"
              className="w-full max-w-[280px] h-auto drop-shadow-md select-none transition-transform duration-700 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Engraved Sudanese Brass Tray (Siniya) */}
              <ellipse cx="160" cy="148" rx="130" ry="46" fill="#A88B4C" />
              <ellipse cx="160" cy="146" rx="126" ry="43" fill="#C4A868" />
              <ellipse cx="160" cy="146" rx="118" ry="38" stroke="#876B2D" strokeWidth="1" strokeDasharray="3 3" />

              {/* Traditional Glass Tea Tumblers (Kubbaya) */}
              {/* Glass 1 - Rich red tea with mint */}
              <ellipse cx="120" cy="142" rx="14" ry="4" fill="#876B2D" opacity="0.4" />
              <path d="M106 102 L110 140 C110 144 130 144 130 140 L134 102 Z" fill="#FFFBEB" fillOpacity="0.4" stroke="#FFF7ED" strokeWidth="1.2" />
              {/* Red spiced tea liquid */}
              <path d="M108 112 L111 139 C111 142 129 142 129 139 L132 112 Z" fill="#991B1B" fillOpacity="0.85" />
              {/* Mint leaf at top of glass */}
              <path d="M118 110 C116 102 122 96 126 98 C128 104 122 108 118 110 Z" fill="#2E7D47" />

              {/* Glass 2 */}
              <ellipse cx="170" cy="148" rx="14" ry="4" fill="#876B2D" opacity="0.4" />
              <path d="M156 108 L160 146 C160 150 180 150 180 146 L184 108 Z" fill="#FFFBEB" fillOpacity="0.4" stroke="#FFF7ED" strokeWidth="1.2" />
              <path d="M158 118 L161 145 C161 148 179 148 179 145 L182 118 Z" fill="#851818" fillOpacity="0.85" />

              {/* Bowl of Sudanese Dates (Tamr) */}
              <ellipse cx="220" cy="144" rx="26" ry="12" fill="#E8DFCF" stroke="#B8A892" strokeWidth="1" />
              {/* Individual Dates */}
              <ellipse cx="214" cy="140" rx="9" ry="5" fill="#451A03" transform="rotate(-15 214 140)" />
              <ellipse cx="226" cy="142" rx="9" ry="5" fill="#582106" transform="rotate(20 226 142)" />
              <ellipse cx="218" cy="136" rx="8" ry="4" fill="#662908" />

              {/* Tea Steam curls */}
              <path d="M120 96 C116 80 124 70 118 56" stroke="#FEF3C7" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
              <path d="M170 102 C168 88 174 76 170 64" stroke="#FEF3C7" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            </svg>
          )}

          {type === 'archival-keepsakes' && (
            <svg
              viewBox="0 0 320 220"
              className="w-full max-w-[280px] h-auto drop-shadow-md select-none transition-transform duration-700 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Linen background surface */}
              <rect x="20" y="30" width="280" height="160" rx="8" fill="#ECE3D4" />
              <path d="M30 40 L290 40 M30 70 L290 70 M30 100 L290 100 M30 130 L290 130 M30 160 L290 160" stroke="#DECDB8" strokeWidth="0.5" strokeDasharray="4 4" />

              {/* Old Handwritten Letter from Home */}
              <rect x="50" y="55" width="130" height="95" rx="2" fill="#FAF6EE" stroke="#C9B89D" strokeWidth="1" transform="rotate(-6 115 102)" />
              <path d="M64 74 L160 64 M62 88 L158 78 M60 102 L150 92 M58 116 L120 110" stroke="#7A6852" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 4" transform="rotate(-6 115 102)" />

              {/* Antique Heavy Brass Key to Sudanese House */}
              <g transform="rotate(24 210 110)">
                <ellipse cx="210" cy="80" rx="14" ry="14" fill="none" stroke="#B45309" strokeWidth="4" />
                <circle cx="210" cy="80" r="7" fill="none" stroke="#D97706" strokeWidth="1.5" />
                <rect x="208" y="94" width="4" height="42" rx="1" fill="#B45309" />
                <path d="M212 120 L222 120 L222 124 L212 124 Z M212 128 L220 128 L220 132 L212 132 Z" fill="#92400E" />
              </g>

              {/* Dark Wooden Prayer Beads coiled around key */}
              <circle cx="160" cy="140" r="5" fill="#382417" />
              <circle cx="172" cy="144" r="5" fill="#442D1E" />
              <circle cx="184" cy="146" r="5" fill="#382417" />
              <circle cx="196" cy="144" r="5" fill="#4D3423" />
              <circle cx="206" cy="140" r="5" fill="#382417" />
              <circle cx="216" cy="134" r="5" fill="#442D1E" />
              <circle cx="224" cy="126" r="5" fill="#382417" />
            </svg>
          )}

          {type === 'window-light' && (
            <svg
              viewBox="0 0 320 220"
              className="w-full max-w-[280px] h-auto drop-shadow-md select-none transition-transform duration-700 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Window Frame with warm daylight streaming */}
              <rect x="40" y="20" width="240" height="150" rx="4" fill="#FEF3C7" stroke="#9A7B56" strokeWidth="4" />
              <line x1="160" y1="20" x2="160" y2="170" stroke="#9A7B56" strokeWidth="4" />
              <line x1="40" y1="95" x2="280" y2="95" stroke="#9A7B56" strokeWidth="4" />

              {/* Sheer curtain hanging with lace pattern */}
              <path d="M40 20 C60 50 45 100 55 170 L90 170 C80 100 95 50 75 20 Z" fill="#FFFFFF" fillOpacity="0.45" />
              <path d="M280 20 C260 50 275 100 265 170 L230 170 C240 100 225 50 245 20 Z" fill="#FFFFFF" fillOpacity="0.45" />

              {/* Warm Sun Rays falling across windowsill */}
              <polygon points="120,40 240,40 290,200 80,200" fill="url(#windowBeams)" opacity="0.35" />

              {/* Small potted basil or mint plant on windowsill */}
              <rect x="146" y="152" width="28" height="24" rx="2" fill="#A16207" />
              <ellipse cx="160" cy="144" rx="14" ry="10" fill="#2E7D47" />
              <ellipse cx="152" cy="140" rx="9" ry="7" fill="#3FA35D" />
              <ellipse cx="168" cy="140" rx="9" ry="7" fill="#235D38" />

              <defs>
                <linearGradient id="windowBeams" x1="180" y1="40" x2="180" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEF08A" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#D97706" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>

        {/* Bottom Editorial Caption */}
        {(captionAr || captionEn) && (
          <div className="relative z-10 pt-2 border-t border-[#235836]/15 text-xs text-[#24211D]/80">
            <p className={isAr ? 'font-cairo' : 'font-jakarta'}>
              {isAr ? captionAr : captionEn}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
