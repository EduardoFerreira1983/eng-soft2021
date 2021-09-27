import './App.css';
import Sidebar from './components/sidebar';
import Footer from './components/footer'
import Header from './components/header';
import Main from './components/main';



function App()  {
  const nome = 'passado variável';
  return ( // é o que será renderizado no  browser
    
    <div >
      <Header nome={nome}/>
      <div className="flex space-x-12">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
export default App;



// component 
