import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Img, reduced } from '../components/Img';
import { photos } from '../assets/images';
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    let mv: ((e: PointerEvent) => void) | null = null;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.h-main', { clipPath: 'inset(100% 0 0 0)', duration: 1.7 })
        .from('.h-main img', { scale: 1.6, duration: 2.4 }, 0)
        .from('.h-small', { clipPath: 'inset(0 100% 0 0)', duration: 1.3 }, 0.6)
        .from('.h-line', { yPercent: 115, duration: 1.3, stagger: 0.12 }, 0.7)
        .from('.h-meta', { opacity: 0, y: 16, duration: 1, stagger: 0.1 }, 1.3);
      const d = [['.h-main', -26], ['.h-small', 48], ['.h-title', 16]] as const;
      const q = d.map(([s, k]) => ({ k, x: gsap.quickTo(s, 'x', { duration: 1.3, ease: 'power3' }), y: gsap.quickTo(s, 'y', { duration: 1.3, ease: 'power3' }) }));
      mv = (e) => { const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5; q.forEach(o => { o.x(x * o.k); o.y(y * o.k * 0.7); }); };
      window.addEventListener('pointermove', mv);
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.h-main img', { yPercent: 14, ease: 'none', scrollTrigger: st });
      gsap.to('.h-small', { yPercent: -60, ease: 'none', scrollTrigger: st });
    }, root);
    return () => { if (mv) window.removeEventListener('pointermove', mv); ctx.revert(); };
  }, []);
  return (
    <section className="hero" ref={root} aria-label="Introduction">
      <div className="h-meta mono h-m1">Woven garments<br />Made in Coimbatore, India<br />Since 1993</div>
      <div className="h-main"><Img src={photos.rackJackets} alt="Shirts and jackets hanging on a garment rail" eager /></div>
      <h1 className="h-title" aria-label="We make what brands are made of.">
        <span className="mask"><span className="h-line">WE MAKE</span></span>
        <span className="mask"><span className="h-line">WHAT <em>BRANDS</em></span></span>
        <span className="mask"><span className="h-line">ARE MADE OF.</span></span>
      </h1>
      <div className="h-small"><Img src={photos.stitchClose} alt="Close-up of a sewing machine stitching fabric" eager /></div>
      <p className="h-meta mono h-m2">Scroll to watch a garment being made ↓</p>
    </section>
  );
}
