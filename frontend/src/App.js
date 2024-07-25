 
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Create } from './components/Create';
import { Update } from './components/Update';
import { Read } from './components/Read';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Create/>} />
        <Route path="/all" element={<Read/>} />
        <Route path="/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
