import React from 'react';
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
function Layout({ children }) {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Heading</h1>
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;