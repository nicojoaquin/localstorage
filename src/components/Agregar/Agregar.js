import { useState } from 'react'
import './Agregar.css'

const Agregar = ({products, setProducts}) => {

  const initialState = {
    name: '',
    quantity: '',
    price: '',
  }

  const [value, setValue] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {name, quantity, price} = value;
  
  const handleInput = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }
  
  const addProducts = product => {
    setProducts([{id: new Date().getTime(), ...product}, ...products])
  }

  const onAdd = () => {
    addProducts(value)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 1000);
  } 
  
  const handleSubmit = e => {
    e.preventDefault();

    if(quantity <= 0 || price < 0) {
      return setError(true);
    } else if ([quantity, price, name].includes('')) {
      return setError(true);
    }

    setError(false)
    setValue(initialState);
    onAdd();
  } 
  
  return (
    <div className='container mt-4'>
            <h2>Agregar producto</h2>

            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input type="text" pattern="[a-zA-Z]*" className="form-control" name='name' value={name} onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className="form-control" name='quantity' value={quantity} onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="number" className="form-control" name='price' value={price} onChange={handleInput} />
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
                {success ? <span className='ms-3 text-success' >Agreago con éxito!</span> :
                error && <span className='ms-3 text-danger' >Error en los campos</span>            
                }
            </form>
        </div>
    );
}
 
export default Agregar;