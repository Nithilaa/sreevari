import { useState } from 'react';
import { Img } from '../components/Img';
import { photos } from '../assets/images';
export default function Network() {
  const [on, setOn] = useState(0);
  const P = [
    { h: ['Made', 'by us.'], tag: 'Own facility — Coimbatore', img: photos.floor, alt: 'Operators sewing woven garments at the Sreevari factory', li: ['Woven garments — Men', 'Woven garments — Women', 'Shirts, jackets, trousers, uniforms, workwear'] },
    { h: ['Sourced through', 'our network.'], tag: 'Partner network — across India', img: photos.fabric, alt: 'Rolls of fabric', li: ['Knitted garments — Men & Women', 'T-shirts (knitted)', 'Home textiles & fabrics'] },
  ];
  return (
    <section className="duo" aria-label="Manufactured versus sourced">
      {P.map((p, i) => (
        <button key={i} className={'pane' + (on === i ? ' on' : '') + (i ? ' src' : '')} onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)} onClick={() => setOn(i)} aria-pressed={on === i}>
          <Img src={p.img} alt={p.alt} />
          <span className="mono">{p.tag}</span>
          <h2>{p.h.map(l => <span key={l}>{l}<br /></span>)}</h2>
          <ul>{p.li.map(l => <li key={l}>{l}</li>)}</ul>
        </button>))}
    </section>
  );
}
