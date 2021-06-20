export const Modal = (props) => {
  return (
    <div className="modal">
      <h1 className="modal">MODAL</h1>
      {props.children}
    </div>
  );
};
