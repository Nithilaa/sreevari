import Nav from './components/Nav';
import Hero from './sections/Hero';
import Journey from './sections/Journey';
import Products from './sections/Products';
import Capabilities from './sections/Capabilities';
import Network from './sections/Network';
import About from './sections/About';
import Contact from './sections/Contact';
export default function App() {
  return <><Nav /><main id="top"><Hero /><div id="making"><Journey /></div><div id="products"><Products /></div><Capabilities />
    <div id="network"><Network /></div><div id="about"><About /></div><div id="contact"><Contact /></div></main></>;
}
