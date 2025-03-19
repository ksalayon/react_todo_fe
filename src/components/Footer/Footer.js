import React from 'react';
import {FooterWrapper} from './style';

const Footer = () => {
    return (
        <FooterWrapper>
            <p>&copy; {new Date().getFullYear()} Kin's React App. All rights reserved.</p>
        </FooterWrapper>
    );
};

export default Footer;
