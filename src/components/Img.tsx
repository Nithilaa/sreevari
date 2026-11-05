import { useState, type CSSProperties } from 'react';
export function Img({ src, alt, className, style, eager }: { src: string[]; alt: string; className?: string; style?: CSSProperties; eager?: boolean }) {
  const [i, setI] = useState(0);
  return <img className={className} style={style} alt={alt} src={src[i]} loading={eager ? 'eager' : 'lazy'} decoding="async"
    referrerPolicy="no-referrer" onError={() => i < src.length - 1 && setI(i + 1)} />;
}
export const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
