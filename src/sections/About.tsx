import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Img, reduced } from '../components/Img';
import { photos } from '../assets/images';
export default function About() {
  const r = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => {
      const st = { trigger: r.current, start: 'top bottom', end: 'bottom top', scrub: true };
      gsap.to('.ab1', { yPercent: -8, ease: 'none', scrollTrigger: st }); gsap.to('.ab2', { yPercent: -35, ease: 'none', scrollTrigger: st });
    }, r); return () => c.revert();
  }, []);
  return (
    <section className="about" ref={r} aria-label="About Sreevari">
      <div className="abimg"><div className="ab1"><Img src={photos.stitchHands} alt="Hands guiding fabric through a sewing machine" /></div><div className="ab2"><Img src={photos.quality} alt="Workmanship check of a finished shirt" /></div></div>
      <div className="abtxt"><span className="mono">07 — About</span>
        <h2>An apparel manufacturer, <em>and a sourcing partner.</em></h2>
        <p>Sreevari Apparels Private Limited has worked in apparel manufacturing since 1993, specializing in woven garments produced in our own facility in Coimbatore, Tamil Nadu.</p>
        <p>Led by Shravan J, we support brands and buyers with product development, sampling and production to specification. Beyond our own woven manufacturing, we source knitwear, home textiles and fabrics through suitable partners across India — one point of contact for a wider programme.</p>
        <ul className="why mono"><li>Since 1993</li><li>Direct manufacturing</li><li>Specialized woven focus</li><li>Indian sourcing network</li><li>Product development</li><li>One point of contact</li></ul></div>
    </section>
  );
}
