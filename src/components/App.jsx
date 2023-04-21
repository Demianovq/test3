import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/layout';
import { Userspage } from './pages/userspage';
import { UsersPageInfo } from './pages/userspageinfo';
import { UsersDetailsPage } from './pages/usersdetailspage';
import { AddUserPage } from './pages/AddUserPage';
import { UpdateUserPage } from './pages/UpdateUserPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Userspage />} />
        <Route path="users" element={<UsersPageInfo />} />
        <Route path="users/:id" element={<UsersDetailsPage />} />
        <Route path="users/:id/update" element={<UpdateUserPage />} />
        <Route path="users/add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};
