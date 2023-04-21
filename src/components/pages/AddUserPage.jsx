import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUser } from 'redux/users/usersOperations';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  avatar: '',
  email: '',
  tel: '',
  address: '',
};
export const AddUserPage = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(e.target);
    const newUser = await dispatch(AddUser(data)).unwrap();
    setData(initialState);
    navigate(`/users/${newUser.id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={data.name}
          type="text"
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Avatar
        <input
          value={data.avatar}
          type="url"
          name="avatar"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          value={data.email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Tel
        <input value={data.tel} type="tel" name="tel" onChange={handleChange} />
      </label>
      <label>
        Address
        <input
          value={data.address}
          type="address"
          name="address"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
