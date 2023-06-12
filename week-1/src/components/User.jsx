const User = ({ user, removeButtonHandler }) => {
  return (
    <div className="component-style">
      {user.age} - {user.name}
      <button onClick={() => removeButtonHandler(user.id)}>x</button>
    </div>
  );
};

export default User;
