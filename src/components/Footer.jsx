import React from "react";

const year = new Date();
const currentYear = year.getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        Copyrights &copy; {currentYear} By Gerson Hauwanga
      </footer>
    </div>
  );
};

export default Footer;
