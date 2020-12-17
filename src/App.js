import Banner from './components/banner';
import Header from './components/header';
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
    </div>
  );
}

export default App;
