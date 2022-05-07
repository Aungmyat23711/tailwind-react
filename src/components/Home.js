import React from 'react';
import Header from './Header';
const Home = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
export default Home;
