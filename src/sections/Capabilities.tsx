import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { reduced } from '../components/Img';
function Count({ to, from = 0, group = true }: { to: number; from?: number; group?: boolean }) {
  const r = useRef<HTMLSpanElement>(null);
  const f = (v: number) => Math.round(v).toLocaleString('en-US', { useGrouping: group });
  useEffect(() => {
    const el = r.current!; if (reduced()) { el.textContent = f(to); return; }
    const o = { v: from };
    const t = gsap.to(o, { v: to, duration: 2.2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true }, onUpdate: () => { el.textContent = f(o.v); } });
    return () => { t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  return <span ref={r}>{f(from)}</span>;
}
export default function Capabilities() {
  return (
    <section className="caps" aria-label="Capabilities">
      <span className="mono">04 — Capabilities</span>
      <h2>Three decades of making, <em>measured.</em></h2>
      <div className="cgrid">
        <div><b><Count to={1993} from={1900} group={false} /></b><span className="mono">Established</span></div>
        <div><b><Count to={30} />+</b><span className="mono">Years of manufacturing</span></div>
        <div><b><Count to={120} />+</b><span className="mono">Sewing machines</span></div>
        <div><b className="rng"><Count to={1500} />–<Count to={2000} /></b><span className="mono">Pieces per day</span></div>
      </div>
      <p className="mono clist">CAD &amp; pattern development · Sampling · Cutting &amp; sewing · In-line quality control · Final AQL inspection · Washing support · Finishing, packing &amp; export</p>
    </section>
  );
}
