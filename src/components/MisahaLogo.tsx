import React from 'react';

interface MisahaLogoProps {
  className?: string;
  variant?: 'bilingual' | 'english' | 'mark-only';
  theme?: 'light' | 'inverted';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const MisahaLogo: React.FC<MisahaLogoProps> = ({
  className = '',
  variant = 'bilingual',
  theme = 'light',
  size = 'md',
  showTagline = false,
}) => {
  const isDark = theme === 'inverted';
  const primaryGreen = isDark ? '#FFFFFF' : '#235D38';
  const secondaryGreen = isDark ? '#D9E8DC' : '#3F874C';
  const deepGreen = isDark ? '#B6D7BE' : '#1D4D2E';
  const warmOrange = '#E86329'; // Terracotta accent from MISaha identity

  // Dimensions based on size
  const markSize = size === 'sm' ? 28 : size === 'lg' ? 48 : 38;

  // The distinctive MISaha geometric mark
  const BrandMark = () => (
    <svg
      width={markSize}
      height={markSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Top Right: Terracotta Arch / Half-circle */}
      <path
        d="M52 8 C52 24, 68 38, 92 38 L92 8 Z"
        fill={warmOrange}
      />
      <path
        d="M52 8 L92 8 C92 24.57 78.57 38 62 38 C56.48 38 52 33.52 52 28 Z"
        fill={warmOrange}
      />

      {/* Top Left: Deep organic shape */}
      <path
        d="M8 38 C8 21.43 21.43 8 38 8 L38 38 Z"
        fill={deepGreen}
      />

      {/* Center Left / Bottom Left: Rounded pillar */}
      <path
        d="M8 48 C8 48 24 48 38 48 C38 64 38 80 38 92 C21.43 92 8 78.57 8 62 Z"
        fill={primaryGreen}
      />

      {/* Bottom Right: Quarter circle arch / open space */}
      <path
        d="M52 92 C52 75.43 65.43 62 82 62 L92 62 L92 92 Z"
        fill={secondaryGreen}
      />

      {/* Right Column accent */}
      <path
        d="M68 48 C68 48 80 48 92 48 L92 56 C78.75 56 68 52.4 68 48 Z"
        fill={secondaryGreen}
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <BrandMark />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {variant === 'bilingual' ? (
        <div className="flex items-center gap-3.5">
          <div className="flex flex-col text-start">
            <span
              className={`font-cairo font-bold tracking-tight leading-none ${
                size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
              }`}
              style={{ color: primaryGreen }}
            >
              مساحة
            </span>
            <span
              className={`font-jakarta font-extrabold tracking-tight leading-none mt-1 lowercase ${
                size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'
              }`}
              style={{ color: primaryGreen }}
            >
              misaha
            </span>
          </div>
          <BrandMark />
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <BrandMark />
          <div className="flex flex-col text-start">
            <span
              className={`font-jakarta font-extrabold tracking-tight leading-tight lowercase ${
                size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
              }`}
              style={{ color: primaryGreen }}
            >
              misaha
            </span>
            {showTagline && (
              <span
                className={`font-jakarta tracking-normal leading-tight font-normal text-xs md:text-sm ${
                  isDark ? 'text-stone-300' : 'text-[#366847]'
                }`}
              >
                You don't have to do it alone
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
