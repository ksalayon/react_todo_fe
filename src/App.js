import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ManageUsersPage from "./pages/ManageUsersPage";
import ManageTodosPage from "./pages/ManageTodosPage";

const App = () => {
  // const [users, setUsers] = useState([]);
  //
  // // Fetch books from API on component mount
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/users`;
  //
  //     const res = await axios.get(API_URL);
  //     setUsers(res.data);
  //   };
  //
  //   fetchUsers();
  // }, []);
  //
  //
  // return (
  //     <div>
  //
  //       {users.map(user => (
  //           <div key={user.id}>
  //             <h2>{user.name}</h2>
  //             <p>{user.email}</p>
  //           </div>
  //       ))}
  //     </div>
  // );
  return (
      <Router>
        <Routes>
          {/* Main Layout wrapping all routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} /> {/* Renders at '/' */}
            <Route path="admin/users" element={<ManageUsersPage />} />
            <Route path="admin/todos" element={<ManageTodosPage />} />
          </Route>
        </Routes>
      </Router>
  );


};

export default App;