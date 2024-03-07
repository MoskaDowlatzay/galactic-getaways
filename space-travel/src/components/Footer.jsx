import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
            <div className='icons d-flex justify-content-center align-items-center'>
            <a href="https://github.com/MoskaDowlatzay/Project-2"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/?lang=en"><i className="bi--twitter-x"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
            </div>
            <br></br>
                <div className='d-flex justify-content-center'>
                <small style={{ color: 'white' }}>
                    Copyright &copy; 2024 EDX Front-end Web Developer Bootcamp. All Rights Reserved.
                </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;