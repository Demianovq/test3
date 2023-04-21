import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateUser } from 'redux/users/usersOperations';

export const UpdateUserPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(location.state.name);
  const [avatar, setAvatar] = useState(location.state.avatar);
  const [email, setEmail] = useState(location.state.email);
  const [tel, setTel] = useState(location.state.tel);
  const [address, setAddress] = useState(location.state.address);

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'avatar':
        setAvatar(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'Tel':
        setTel(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      avatar,
      email,
      tel,
      address,
      id: location.state.id,
    };

    dispatch(UpdateUser(data));
    navigate(`/users/${location.state.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input value={name} type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Avatar
        <input
          value={avatar}
          type="url"
          name="avatar"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Tel
        <input value={tel} type="tel" name="tel" onChange={handleChange} />
      </label>
      <label>
        Address
        <input
          value={address}
          type="address"
          name="address"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
