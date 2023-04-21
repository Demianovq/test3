import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { selectUser } from 'redux/users/usersSelections';
import { fetchUser } from 'redux/users/usersOperations';
import { useParams } from 'react-router-dom';
import { ModalDelete } from 'components/modaldelete/modaldetele';
export const UsersDetailsPage = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);
  const handleClickDelete = () => {
    SetIsModalOpen(true);
  };
  return (
    <>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <img src={user.avatar} alt={user.name} />
          <p>Email: {user.email}</p>
          <p>Tel.: {user.tel}</p>
          <p>Address: {user.address}</p>
        </>
      )}
      <button type="button" onClick={handleClickDelete}>
        Delete
      </button>
      <Link to="update" state={user}>
        Update this user
      </Link>
      {isModalOpen && <ModalDelete id={id} SetIsModalOpen={SetIsModalOpen} />}
    </>
  );
};
