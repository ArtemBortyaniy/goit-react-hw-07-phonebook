export const BtnOpenModal = ({ onClick, children }) => {
  return (
    <div>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
