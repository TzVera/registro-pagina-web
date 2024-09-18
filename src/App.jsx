// Registro del usuario 

import './App.css';
import backgroundVideo from '../src/assets/backgroundVideo.mp4';
import Header from './components/webpage/Header';
import Form from './components/webpage/Form';
import Footer from './components/webpage/Footer';

function App() {  
  return (
    <> 
      <video src={backgroundVideo} autoPlay muted loop className="backgroundVideo" />
      <Header />
      <Form/>
      <Footer/>
    </>
  )
}

export default App
