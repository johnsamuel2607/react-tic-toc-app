import React from 'react';

function Footer() {
  return (
    <div className="my-5" style={{ width: '100%' }}>
      <footer
        className="text-center text-white "
        style={{
          left: 0,
          right: 0,
          bottom: '0px',
          position: 'fixed',
          zIndex: 3000,
        }}
      >
        <div
          className="text-center p-3 footer-mobile"
          style={{
            backgroundColor: '#45637d',
            height: '.5rem',
            fontSize: '8px',
            justifyItems: 'center',
            bottom: '0',
          }}
        >
          <p>
            © 2023 Copyright: John Samuel India Pvt Ltd Release version :0.0.1
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
