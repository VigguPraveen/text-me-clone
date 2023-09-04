import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './auth/Login';
import Signup from './auth/Signup';
import MainpageContainer from './containers/MainPage-Container/MainpageContainer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/chat" element={<MainpageContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
