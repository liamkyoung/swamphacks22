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
                    <div style={{}}>
                        <div style={{float: 'right'}}>
                            <a href="#" onClick={handleClose}>
                                <button className="btn p-3 rounded-lg">Close</button>
                            </a>
                        </div>
                    </div>
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