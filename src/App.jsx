import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./hooks/useCrud";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";

function App() {
  const [users, getUsers, createUser, deleteUser, updateUser] =
    useCrud("/users/");
  //Se crea este state para que la clase padre se pueda comunicar
  // con la otra clase , y luego se envia el setUserSelected porque es cuando se selecciona
  const [userSelected, setUserSelected] = useState();
  const [formIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const handleOpenForm = () => {
    setFormIsOpen(true);
  };

  return (
    <div className="app">
      <header className="user__header">
        <h1>Users CRUD</h1>
        <button onClick={handleOpenForm} className="new__user__btn">
          New User +
        </button>
      </header>
      <FormUser
        createUser={createUser}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        updateUser={updateUser}
        setFormIsOpen={setFormIsOpen}
        formIsOpen={formIsOpen}
      />
      <section className="user__container flex-container">
        {
          //Para traer los arrays de los usuarios se usa el comando map y el comando ?
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              // Al hacer click se atrapa el user seleccionado
              setUserSelected={setUserSelected}
              setFormIsOpen={setFormIsOpen}
            />
          ))
        }
      </section>
    </div>
  );
}

export default App;
