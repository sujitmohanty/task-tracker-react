import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Header = () => {
  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand>Task tracker</Navbar.Brand>
      </Navbar>
    </div>
  );
};
