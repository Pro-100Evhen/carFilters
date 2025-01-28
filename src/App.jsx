import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FilterPage from './Pages/FilterPage';
import ResultPage from './pages/ResultPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<FilterPage />} />
            <Route path="/result/:makeId/:year" element={<ResultPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
