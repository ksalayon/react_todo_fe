// import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { CSSProperties } from "react";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        flex: 1, // Ensures content section grows proportionally and footer stays at the bottom
        padding: "1rem",
    },
};

const MainLayout: React.FC = () => {
    return (
        <div style={styles.container as CSSProperties}>
            <Header />
            <main style={styles.main}>
                <Outlet /> {/* This is where nested routes will render */}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
