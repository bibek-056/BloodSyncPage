import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

export default function App() {
  return (
    <>
      <BrowserRouter basename='/bloodsync'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
