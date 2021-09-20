import './App.css';
import Sidebar from './components/sidebar';
import Footer from './components/footer'
import Header from './components/header';
import Main from './components/main';



function App() {
  
  

  return ( // é o que será renderizado no  browser
    <div >
      <Header/>
      <Sidebar />
      <Main/>
      <Footer />
    </div>
  );
}
export default App;



// component 
