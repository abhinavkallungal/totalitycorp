import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Categories from './components/category/Categories';
import Footer from './components/footer/Footer';
import TopAndTrending from './components/topAndTrending/TopAndTrending';
import SliderWithHeading from './components/sliderWithHeading/SliderWithHeading';
import profile from './mock/profile.json'

import './App.css';
import './assets/styles/index.scss'

function App() {
  return (
    <div className="App">
      <div className="hero">
          <Navbar/>
          <Hero/>
      </div>
          <TopAndTrending/>
          <SliderWithHeading name='New and notable' data={profile.new_and_notable}/>
          <SliderWithHeading name='Dreamers spotlight' data={profile.dreamers_spotlight}/>
          <Categories/>
          <Footer/>
    </div>
  );
}

export default App;
