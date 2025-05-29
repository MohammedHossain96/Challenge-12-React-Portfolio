import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/username" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </footer>
  );
}

export default Footer;