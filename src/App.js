import logo from './logo.svg';
import './App.css';
// importacion de componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlogs';
import ComEditatar from './blog/EditBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className='App-logo' alt='logo'/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs/>} />
          <Route path='/create' element={ <CompCreateBlog/>} />
          <Route path='/edit/:id' element={ <ComEditatar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
