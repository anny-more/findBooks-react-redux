import './styles/styles.css';
import { Route, Routes } from 'react-router-dom';
import ItemPage from './components/itemPage';
import SearchPage from './components/searchPage';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<SearchPage/>}></Route> 
        <Route path='/:id' element={<ItemPage/>}></Route>
        <Route index element={<SearchPage/>}></Route>
      </Routes>
    </>
    
  );
}

export default App;
