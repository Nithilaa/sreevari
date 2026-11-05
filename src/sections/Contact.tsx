import { useLayoutEffect, useRef, useState, type FormEvent } from 'react';
import { gsap } from 'gsap';
import { reduced } from '../components/Img';
export default function Contact() {
  const r = useRef<HTMLElement>(null); const [hint, setHint] = useState('');
  useLayoutEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => { gsap.from('.cl', { yPercent: 115, stagger: 0.12, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: r.current, start: 'top 65%' } }); }, r);
    return () => c.revert();
  }, []);
  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const f = new FormData(e.currentTarget); const g = (k: string) => String(f.get(k) || '-');
    const msg = `Hello Sreevari Apparels,\nName: ${g('name')}\nCompany/market: ${g('co')}\nProduct: ${g('p')}\nDetails: ${g('d')}`;
    window.open('https://wa.me/918072544030?text=' + encodeURIComponent(msg), '_blank', 'noopener'); setHint('Opening WhatsApp with your enquiry…');
  };
  return (
    <section className="contact" ref={r} aria-label="Contact">
      <h2 aria-label="Let's make something worth wearing."><span className="mask"><span className="cl">LET'S MAKE</span></span><span className="mask"><span className="cl">SOMETHING</span></span><span className="mask"><span className="cl"><em>WORTH WEARING.</em></span></span></h2>
      <div className="cc">
        <form onSubmit={send} aria-label="Start a project"><span className="mono">Start a project — send a tech pack, a reference or a sample</span>
          <label><span className="mono">Name</span><input name="name" required autoComplete="name" /></label>
          <label><span className="mono">Company / market</span><input name="co" autoComplete="organization" /></label>
          <label><span className="mono">Product</span><select name="p"><option>Shirts</option><option>T-Shirts</option><option>Jackets</option><option>Trousers</option><option>Uniforms</option><option>Workwear</option><option>Knitwear / Home textiles / Fabrics</option></select></label>
          <label><span className="mono">Quantity &amp; details</span><textarea name="d" rows={3} required /></label>
          <button className="btn" type="submit">Send via WhatsApp →</button><p className="hint" role="status">{hint}</p></form>
        <div><span className="mono">Registered office &amp; factory</span>
          <address>Sreevari Apparels Private Limited<br />No. 399/2, Door No. 8/6, Level Crossing Road,<br />Irugur, Coimbatore – 641 103,<br />Tamil Nadu, India.</address>
          <a className="btn ghost" href="https://wa.me/918072544030" target="_blank" rel="noopener noreferrer">WhatsApp +91 80725 44030</a>
          <p className="note">Contact: Shravan J. We will confirm whether we manufacture your product directly or source it through our Indian partner network.</p></div>
      </div>
      <footer className="mono"><span>© 2026 Sreevari Apparels Private Limited</span><span>Garments. Textiles. Sourcing. India.</span></footer>
    </section>
  );
}
