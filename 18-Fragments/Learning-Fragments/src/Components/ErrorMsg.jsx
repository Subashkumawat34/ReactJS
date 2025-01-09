const ErrorMsg = ({ items }) => {
  return <>{items.length === 0 && <h3>Food List is Empty</h3>}</>;
};

export default ErrorMsg;
