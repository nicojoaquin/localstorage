import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Productos.css'

const Agregar = ({products, setProducts}) => {

    const handleDelete = id => {
      setProducts(products.filter(product => product.id !== id));
    }

    const handleDeleteAll = () => setProducts([]);

    const productsTotal = products.reduce((price, product) => price + product.price * product.quantity, 0)

    return (
        <div className='container mt-4'>
            <h2>Productos</h2>

            <Link to="/"><button className="btn btn-success me-3">Agregar +</button></Link>
            <button onClick={handleDeleteAll} className="btn btn-danger">Eliminar todo</button>
            {products.length > 0 && <div className='mt-3' ><h3>Total: ${productsTotal}</h3></div>}       
            <div className='row border-bottom mt-4 p-2'>
              <div className='col-2 fw-bolder'>#</div>
              <div className='col-3 fw-bolder'>Nombre del producto</div>
              <div className='col-2 fw-bolder'>Cantidad</div>
              <div className='col-2 fw-bolder'>Precio</div>
              <div className='col-2 fw-bolder'>Subtotal</div>
              <div className='col-1 fw-bolder'>Acción</div>
            </div>

            {products.length === 0 && <h4 className='text-danger text-center mt-5' >Agregue productos a la lista!</h4>}

            {
              products.map(product => (
                <div key={product.id} className='row border-top border-bottom mt-3 p-2'>
                  <div className='col-2 fw-bolder'>{product.id}</div>
                  <div className='col-3 fw-bolder'>{product.name}</div>
                  <div className='col-2 fw-bolder'>{product.quantity}</div>
                  <div className='col-2 fw-bolder'>${product.price}</div>
                  <div className='col-2 fw-bolder'>${(product.quantity * product.price).toFixed(2)}</div>
                  <div className='col-1 fw-bolder'>
                    <i onClick = {() => handleDelete(product.id)} className="bi bi-dash-square-fill"></i>
                  </div>
                </div>
              ))
            }
           
        </div>
    );
}
 
export default Agregar;