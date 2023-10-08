import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import AtlanticCity from './pages/AtlanticCity';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Main />}/>
          <Route path='/AtlanticCity' element = {<AtlanticCity/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;