import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelections';
export const UsersPageInfo = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
