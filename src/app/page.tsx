
import Hero from '../app/(client)/components/Hero.jsx'
import ServiceCards from '../app/(client)/components/ServiceCards'
import About from './(client)/components/About.jsx'
import Counter from '../app/(client)/components/Counter.jsx'
import Portfolio from '../app/(client)/components/Portfolio.jsx'
import Contact from '../app/(client)/components/Contact.jsx'
import Footer from '../app/(client)/components/Footer.jsx'
export default function Home() {
  return (
 <>
<Hero/>
<ServiceCards/>
<About/>
<Counter/>
<Portfolio />
<Contact/>
<Footer/>
 </>
  );
}
