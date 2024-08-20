import Swal from "sweetalert2";
import "./styles/UserCard.css";

const UserCard = ({ user, deleteUser, setUserSelected, setFormIsOpen }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(user.id);
        Swal.fire({
          title: "User Deleted!",
          text: `User ${user.first_name} ${user.last_name} has been deleted.`,
          icon: "success",
        });
      }
    });
  };

  const handleEdit = () => {
    setUserSelected(user);
    setFormIsOpen(true);
  };

  return (
    <article className="user">
      <img
        className="user__img"
        src={user.image_url}
        alt={`${user.first_name} ${user.last_name}`}
      />
      <h3 className="user__name">
        {user.first_name} {user.last_name}
      </h3>
      <hr className="user__hr" />
      <ul className="user__list grid-container">
        <li className="user__item grid-container">
          <span className="user__label">Email:</span>
          <span className="user__value">{user.email}</span>
        </li>
        <li className="user__item grid-container">
          <span className="user__label">Birthday:</span>
          <span className="user__value">{user.birthday}</span>
        </li>
      </ul>
      <footer className="user__footer flex-container">
        <button onClick={handleDelete} className="user__btn user__delete">
          Delete
        </button>
        <button onClick={handleEdit} className="user__btn user__edit">
          Edit
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
