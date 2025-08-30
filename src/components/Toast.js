import React, { useEffect } from "react";

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        if (message) {
            
            const timer = setTimeout(() => {
                onClose();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [message]);

  return (
    <div id="customToast" className="toast show position-fixed bottom-0 m-3 text-bg-primary " style={{ zIndex: 9999 }}  role="alert" aria-live="assertive" aria-atomic="true">
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Toast;
