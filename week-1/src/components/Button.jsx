const Button = ({ addButtonHandler, children }) => {
  return <button onClick={addButtonHandler}>{children}</button>;
};

export default Button;
