import ReactDOM from "react-dom";
import './Modal.css';

function Modal(props) {
    return ReactDOM.createPortal(
        <div className="modal">
            {props.children}
        </div>,
        document.getElementById('modal')
    )
}

export {
    Modal
}