// ContactPage.js
import React from 'react';
import UsersTable from "../../components/Users/UsersTable";
const ManageUsersPage = () => {
    return (
        <>
            <h1>This is where the admin can create or manage all users</h1>
            <UsersTable />
        </>
    );
};

export default ManageUsersPage;