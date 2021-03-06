import React from 'react';
import Navbar from './Navbar';

const Layout = ({
  children,
  imgSrc = './resources/imgs/connect.png',
  imgAlt = 'connect',
  imgWidth = '360px',
  imgHeight = '330px',
  title = 'Welcome to Revature Tech Support!',
  desc = "Need help with anything tech-related? You've come to the right place.",
  jtClass = 'home-jt',
  childClass
}) => (
  <>
    <Navbar />
    <div className={jtClass + ' jumbotron'}>
      <h1 className='display-4'>{title}</h1>
      <img width={imgWidth} height={imgHeight} src={imgSrc} alt={imgAlt} />
      <p className='lead'>{desc}</p>
    </div>
    <div className={childClass}>{children}</div>
  </>
);

export default Layout;
