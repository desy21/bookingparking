import './App.css';
import Banner from './components/Banner';
import Footer from './components/Navbar';
import Content from './components/Content';
import './style/landingPage.css';

function App() {
  return (
    <div className="background">
      <div>
        <Banner/>
      </div>
      <div className='d-flex justify-content-center align-item-center'>
        <Content/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;