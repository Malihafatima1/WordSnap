
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="WordSnap" aboutText="About Us" />
    <div className="container my-3">
    <TextForm heading="Enter here text to analyze"/>
    </div>
    
    </>
  );
}

export default App;
