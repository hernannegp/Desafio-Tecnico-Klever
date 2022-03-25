import GlobalStyle from './styles/GlobalStyle'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='addToken' element={<AddToken />}/>
          <Route path='editToken/:id' element={<EditToken />}/>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
