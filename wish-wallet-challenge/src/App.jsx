import GlobalStyle from './styles/GlobalStyle'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='addToken' element={<AddToken />}/>
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
