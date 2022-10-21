import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Categories from './components/category/Categories';
import Footer from './components/footer/Footer';
import TopAndTrending from './components/topAndTrending/TopAndTrending';
import './App.css';
import './assets/styles/index.scss'

function App() {
  return (
    <div className="App">
      <div className="hero">
          <Navbar/>
          <Hero/>
          <TopAndTrending/>
          <Categories/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
