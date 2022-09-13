import './modal-wrapper.scss';

function ModalWrapper({ active, setActive, children }) {
  return (
    <div
      className={`modal ${active ? 'modal_active' : ''}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`modal__content ${active ? 'modal__content_active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalWrapper;
