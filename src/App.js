
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    
      <Navbar title = "TEXTUTILS" aboutText= "About" />
      {/* <Navbar/> */}

      <div className='container my-3'>
        
        <TextForm handing = "Enter the text to analyze below :)"/>  
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
