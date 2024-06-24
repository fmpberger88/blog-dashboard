const Footer = () => {
    // Get current year
    const currentYear = new Date().getFullYear();

    return (
        <>
            <p>© {currentYear} | <a href="https://www.fmpberger.com">fmpberger.com</a></p>
        </>
    )
};

export default Footer;