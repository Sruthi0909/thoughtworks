import "./index.css";

const UserProfile = (props) => {
  const { userDetails } = props;
  const { name, role, email, phoneNo } = userDetails;
  const onDelete = () => {
    deleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <h1 className="user-designation">{email}</h1>
        <h1 className="user-designation">{phoneNo}</h1>
        <p className="user-designation">{role}</p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
    </li>
  );
};
export default UserProfile;
