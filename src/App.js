import Banner from './components/banner';
import Header from './components/header';
import Pricing from './components/pricing';
import Service from './components/service';
import Statistic from './components/statistic';
import Support from './components/support';
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
    </div>
  );
}

export default App;
