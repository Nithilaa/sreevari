import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Img } from '../components/Img';
import { photos } from '../assets/images';
const P = [
  { n: 'Shirts', d: 'Formal, casual & cargo shirts', img: photos.rackShirts },
  { n: 'Jackets', d: 'Overshirts & light outerwear', img: photos.rackJackets },
  { n: 'Trousers', d: 'Chinos, casual & formal pants', img: photos.denim },
  { n: 'Uniforms', d: 'Corporate & institutional', img: photos.quality },
  { n: 'Workwear', d: 'Heavy cotton & cargo styles', img: photos.heavyStitch },
];
export default function Products() {
  const root = useRef<HTMLElement>(null), track = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<{ i: number; x: number; y: number } | null>(null);
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 801px) and (prefers-reduced-motion: no-preference)', () => {
      const dist = () => track.current!.scrollWidth - innerWidth;
      gsap.to(track.current, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);
  useEffect(() => {
    if (!open) return;
    gsap.fromTo('.ov-img', { clipPath: `circle(0px at ${open.x}px ${open.y}px)` }, { clipPath: `circle(150% at ${open.x}px ${open.y}px)`, duration: 1.1, ease: 'power3.inOut' });
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    addEventListener('keydown', k); return () => removeEventListener('keydown', k);
  }, [open]);
  return (
    <section className="prod" ref={root} aria-label="What we make">
      <div className="ptrack" ref={track}>
        <div className="pintro"><span className="mono">02 — What we make</span><h2>A focused woven range, <em>built to specification.</em></h2><p>Developed to buyer specification, approved samples and agreed quality standards. Select a garment to see it full-screen.</p></div>
        {P.map((p, i) => (
          <button className="pcard" key={p.n} onClick={e => setOpen({ i, x: e.clientX, y: e.clientY })} aria-label={`${p.n} — view full screen`}>
            <div className="win"><Img src={p.img} alt={`${p.n}: ${p.d}`} /></div>
            <span className="mono pnum">0{i + 1}</span><span className="pcap"><b>{p.n}</b><i>{p.d}</i></span>
          </button>))}
      </div>
      {open && <div className="ov" role="dialog" aria-modal="true" aria-label={P[open.i].n}><div className="ov-img"><Img src={P[open.i].img} alt={P[open.i].d} eager /></div>
        <div className="ov-t"><h3>{P[open.i].n}</h3><p className="mono">{P[open.i].d}</p></div><button className="ov-x mono" onClick={() => setOpen(null)}>Close ✕</button></div>}
    </section>
  );
}
