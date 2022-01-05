import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agregar from './components/Agregar/Agregar';
import Navbar from './components/Navbar/Navbar';
import Productos from './components/Productos';

function App() {

  const productsStorage = JSON.parse(localStorage.getItem('products')); 
  const [products, setProducts] = useState(productsStorage ? productsStorage : []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Agregar products={products} setProducts={setProducts} />} />
        <Route path="/productos" element={<Productos products={products} setProducts={setProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;
