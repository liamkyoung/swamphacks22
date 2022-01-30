import { endAt } from "firebase/firestore";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/modal.module.css";

export default function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
<<<<<<< HEAD
                    <div style={{}}>
                        <div style={{float: 'right'}}>
                            <a href="#" onClick={handleClose}>
                                <button className="btn p-3">Close</button>
                            </a>
                        </div>
                    </div>
=======
                    <a href="#" onClick={handleClose}>
                        <button className="btn p-3 rounded-md">Close</button>
                    </a>
>>>>>>> 7ecdcfbaa654e5720a756b1bf02518a24b153f4f
                </div>
                <div className={styles.body}>
                    { children }
                </div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
}