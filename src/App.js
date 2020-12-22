import Banner from './components/banner';
import Contact from './components/contact';
import Faq from './components/faq';
import Footer from './components/footer';
import Header from './components/header';
import Pricing from './components/pricing';
import Service from './components/service';
import Statistic from './components/statistic';
import Support from './components/support';
import Testimonial from './components/testimonial';
import './styles/main.css';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Support />
      <Statistic />
      <Service />
      <Pricing />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
