import './App.css';
import NavigationBar from './components/Header/NavigationBar';
import Banner from './components/Home/Banner';
import Products from './components/Home/Products';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Banner/>
      <Products/>
      <Footer/> 
    </div>
  );
}

export default App;