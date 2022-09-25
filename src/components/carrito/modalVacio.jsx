import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Boton from '../globales/boton';

function CarritoVacio() {
  return (
    <Modal.Dialog >
      <Modal.Header className="d-flex justify-content-center" >
        <Modal.Title >Carrito Vacio</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Su Carrito debe Tener al menos 1 producto</p>
      </Modal.Body>

      <Modal.Footer>
        <Link to="/">
        <Boton titulo="Ir a Comprar" />
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default CarritoVacio;