import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div className='contLoading'>
            <div className='childLoading'>
                <Spinner className="iconLoading" animation="border" variant="primary" />
                <span className='messageLoading'>Cargando...</span>
            </div>
        </div>
    )
}

export default Loading