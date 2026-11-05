import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Img, reduced } from '../components/Img';
import { photos } from '../assets/images';
const F = [
  { k: 'Fabric', t: ['IT STARTS', 'WITH FABRIC.'], img: photos.rollsB, alt: 'Rolls of woven fabric in a textile workshop', note: 'Fabric sourcing & approval' },
  { k: 'Pattern', t: ['EVERY DETAIL', 'IS PLANNED.'], img: photos.rollsC, alt: 'Textile rolls used as a backdrop for pattern development', note: 'Pattern & CAD sampling' },
  { k: 'Cutting', t: ['PRECISION', 'IN EVERY CUT.'], img: photos.rollsA, alt: 'Fabric rolls prepared for cutting', note: 'Cutting' },
  { k: 'Sewing', t: ['BUILT', 'STITCH BY STITCH.'], img: photos.stitchHands, alt: 'Hands guiding fabric through a sewing machine', note: 'Sewing' },
  { k: 'Quality', t: ['QUALITY IS NEVER', 'AN AFTERTHOUGHT.'], img: photos.quality, alt: 'Measurement and workmanship check of a finished woven shirt', note: 'In-line QC & final AQL inspection' },
  { k: 'Finished', t: ['READY FOR', 'THE WORLD.'], img: photos.rackShirts, alt: 'Finished shirts ready for dispatch', note: 'Finishing, packing & export' },
];
const CLIP = ['', 'inset(100% 0 0 0)', 'polygon(0 0,0 0,-30% 100%,-30% 100%)', 'inset(0 100% 0 0)', 'circle(0% at 62% 50%)', 'inset(32% 34% 32% 34%)'];
const OPEN = ['', 'inset(0% 0 0 0)', 'polygon(0 0,130% 0,100% 100%,-30% 100%)', 'inset(0 0% 0 0)', 'circle(90% at 62% 50%)', 'inset(0% 0% 0% 0%)'];
export default function Journey() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (reduced()) { root.current?.classList.add('static'); return; }
    const ctx = gsap.context(() => {
      const fr = gsap.utils.toArray<HTMLElement>('.jf'), dots = gsap.utils.toArray<HTMLElement>('.jp li');
      fr.forEach((f, i) => { gsap.set(f, { zIndex: i + 1 }); if (i) gsap.set(f, { clipPath: CLIP[i] }); gsap.set(f.querySelectorAll('.ln'), { yPercent: 115 }); });
      gsap.set('.pp', { strokeDasharray: 1, strokeDashoffset: 1 }); gsap.set('.pat-l,.qc-l', { opacity: 0 });
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: root.current, start: 'top top', end: '+=700%', pin: true, scrub: 0.8,
        onUpdate: s => { const a = Math.min(5, Math.floor(s.progress * 6 + 0.25)); dots.forEach((d, k) => d.classList.toggle('on', k <= a)); } } });
      fr.forEach((f, i) => {
        const t0 = i === 0 ? 0 : i - 0.4, img = f.querySelector('.jimg img');
        if (i) tl.fromTo(f, { clipPath: CLIP[i] }, { clipPath: OPEN[i], duration: 0.4, ease: 'power2.inOut' }, t0);
        tl.fromTo(img, { scale: i === 5 ? 1.7 : 1.3, xPercent: i % 2 ? -3 : 3 }, { scale: 1.05, xPercent: i % 2 ? 3 : -3, duration: 1.4 }, t0);
        tl.to(f.querySelectorAll('.ln'), { yPercent: 0, duration: 0.3, stagger: 0.06, ease: 'power3.out' }, i + 0.08);
        if (i < 5) tl.to(f.querySelectorAll('.ln'), { yPercent: -115, duration: 0.2, stagger: 0.04, ease: 'power3.in' }, i + 0.72);
      });
      tl.to('.pp', { strokeDashoffset: 0, duration: 0.6, stagger: 0.07 }, 1.08).to('.pat-l', { opacity: 1, duration: 0.2 }, 1.6)
        .fromTo('.cutline', { left: '0%' }, { left: '130%', duration: 0.4, ease: 'power2.inOut' }, 1.6)
        .fromTo('.stitchline', { left: '0%' }, { left: '100%', duration: 0.4, ease: 'power2.inOut' }, 2.6)
        .to('.qc-l', { opacity: 1, duration: 0.2, stagger: 0.08 }, 3.75).to('.qc-l', { opacity: 0, duration: 0.15 }, 4.65);
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section className="journey" ref={root} aria-label="How a garment is made">
      {F.map((f, i) => (
        <div className="jf" data-i={i} key={f.k}>
          <div className="jimg"><Img src={f.img} alt={f.alt} eager={i < 2} /></div>
          {i === 1 && <svg className="pat" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke="#efe9dd" strokeWidth="2" vectorEffect="non-scaling-stroke">
              <path className="pp" pathLength={1} d="M60 120 L200 90 Q260 125 320 90 L440 120 L420 470 L80 470 Z" />
              <path className="pp" pathLength={1} d="M500 120 L620 90 Q660 170 720 90 L840 120 L820 470 L520 470 Z" />
              <path className="pp" pathLength={1} d="M880 140 L965 170 L945 330 L860 300 Z" />
              <path className="pp" pathLength={1} d="M250 200 L250 420 M670 210 L670 430" />
            </g>
            <g className="pat-l" fill="#efe9dd" fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2"><text x="70" y="500">BACK</text><text x="510" y="500">FRONT</text><text x="868" y="360">SLEEVE</text><text x="262" y="320">GRAIN</text></g>
          </svg>}
          {i === 2 && <div className="cutline" aria-hidden="true" />}
          {i === 3 && <div className="stitchline" aria-hidden="true" />}
          {i === 4 && <div className="qc-l mono" style={{ left: '58%', top: '34%' }}>Measurement &amp; workmanship check</div>}
          {i === 4 && <div className="qc-l mono" style={{ left: '58%', top: '40%' }}>Final AQL inspection</div>}
          <h2 className="jt" aria-label={f.t.join(' ')}>{f.t.map(l => <span className="mask" key={l}><span className="ln">{l}</span></span>)}</h2>
        </div>
      ))}
      <ol className="jp mono" aria-label="Manufacturing stages">{F.map((f, i) => <li key={f.k} className={i === 0 ? 'on' : ''}><b>0{i + 1} {f.k}</b><span>{f.note}</span></li>)}</ol>
    </section>
  );
}
