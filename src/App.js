import './App.css';
import Merge from './components/nav/merge';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Item from './components/item/item';
import Itemdetails from './components/itemdetail/itemdetails';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Merge/>}>
          <Route index element={<Home/>}/>
          <Route path='item' element={<Item/>} />
          <Route path='item/:id'element={<Itemdetails/>}/>
          <Route path='contact'element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
