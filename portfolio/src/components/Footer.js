import React from 'react';
import '../styles/hint.css'; 

const Footer = () => {
  return (
    <footer id="footer" className="flex_row justify_content_fSpaceAround" style={{ width: 'auto' }}>

      <section id="footer_left " className="flex_col justify_content_fCenter">
        <code>
            <em> Some </em> Rights Preserved
        </code>
      </section>

      <section id="footer_right " className="flex_row justify_content_fSpaceAround">
        <a href="https://www.facebook.com/" className="fa fa-facebook hint" title="Facebook"> f </a>
        <a href="https://www.twitter.com/" className="fa fa-twitter hint" title="Twitter"> t </a>
        <a href="https://www.linkedin.com/" className="fa fa-facebook hint" title="LinkedIn">
          <small>iN</small>
        </a>
      </section>

    </footer>
  );
};

export default Footer;
