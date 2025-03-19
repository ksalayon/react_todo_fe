import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={styles.container}>
            <Header />
            <main style={styles.main}>
                <Outlet /> {/* This is where nested routes will render */}
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        flex: 1, // Ensures content section grows proportionally and footer stays at the bottom
        padding: '1rem',
    }
};

export default Layout;