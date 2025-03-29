import { FooterWrapper } from "./style";

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <p>
                &copy; {new Date().getFullYear()} Kin&apos;s React App. All
                rights reserved.
            </p>
        </FooterWrapper>
    );
};

export default Footer;
