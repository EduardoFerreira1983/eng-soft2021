import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar';


function App() {
  
  const valor = 10;

  return ( // é o que será renderizado no  browser
    <div className="App">
      <Header />
      <h1 className="bg-red-500 mt-12 py-2">Hello REACT</h1>
      <p> { valor }</p>
      <Sidebar/>
    </div>
  );
}
export default App;



// component 
