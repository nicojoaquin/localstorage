import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agregar from './components/Agregar/Agregar';
import Navbar from './components/Navbar/Navbar';
import Productos from './components/Productos';
import AppContextProvider from './context/appContext';

function App() {

  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Agregar />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
