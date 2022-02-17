import { Link } from "react-router-dom"
import './Item.css'

export const Item = ({ producto }) => {

    return (
        <article id={producto.id} className="cardProduct">
            <div className="product " >
                <Link to={`/item/${producto.id}`}>
                    <div className="card__imgproduct">
                        <img src={`../${producto.imagen}`} alt="Imagen Producto" />
                    </div>
                    <div className="card-Information">
                        <div className="card__title">
                            <h2>{producto.titulo}</h2>
                        </div>
                        <div className="card__envio">
                            <p>{producto.envio}</p>
                        </div>
                        <div className="card__cost">
                            <p>$ {producto.precio}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </article>
    )
}

