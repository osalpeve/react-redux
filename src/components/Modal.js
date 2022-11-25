import { useDispatch } from "react-redux";
import { closeModal} from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
const Modal = () => {
  const dispatch = useDispatch();
    return(
      <aside className='modal-container'>
        <div className='modal'>
          <h4>seguro que desea limpiar el carrito de compra</h4>
        <div className='btn-container'>
          <button type="button" className="btn confirm-btn"onClick={() => {
            dispatch(clearCart())
            dispatch(closeModal())
            }}>
            CONFIRMAR
          </button>
          <button type="button" className="btn clear-btn" onClick={() => {dispatch(closeModal())}}>
            CANCELAR
          </button>
          </div>
        </div>
      </aside>
    );
};

export default Modal;