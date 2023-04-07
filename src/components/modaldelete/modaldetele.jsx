import { useDispatch } from 'react-redux';
import { deleteUserById } from 'redux/users/usersOperations';
import { useNavigate } from 'react-router-dom';

export const ModalDelete = ({ SetIsModalOpen, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleYes = () => {
    SetIsModalOpen(false);
    dispatch(deleteUserById(id));
    navigate('/users');
  };
  const handleNo = () => {
    SetIsModalOpen(false);
  };
  return (
    <div>
      <p>Are you sure for delete?</p>
      <button type="button" onClick={handleYes}>
        Yes
      </button>
      <button type="button" onClick={handleNo}>
        No
      </button>
    </div>
  );
};
