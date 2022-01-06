import { createContext, useEffect, useState } from "react";

export const appContext = createContext(null);

const AppContextProvider = ({children}) => {

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) ?? []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products])

  //Agregar productos
  const addProducts = product => {
    setProducts([{id: new Date().getTime(), ...product}, ...products])
  }

  //Eliminar productos
  const handleDelete = id => {
    setProducts(products.filter(product => product.id !== id));
  }

  //Eliminar todos los productos
  const handleDeleteAll = () => setProducts([]);

  return(
    <appContext.Provider value={{products, addProducts, handleDelete, handleDeleteAll }}>
      {children}
    </appContext.Provider>
  )
} 

export default AppContextProvider;