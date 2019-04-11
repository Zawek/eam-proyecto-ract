import React from 'react';
import { Menu } from 'semantic-ui-react';
import './navbar.sass'
import {Link} from 'react-router-dom'

const Navbar = () =>{
  
    return (
      
      <Menu inverted id='men' color='grey'  >

      <Menu.Item position='left'>
        <Link to='/'>Home</Link>
      </Menu.Item>
      

      <Menu.Item position='rigth' >
        <Link to='login'>Log In</Link>
      </Menu.Item>


      <Menu.Item
        name='Albunes'>
        <Link to='Post'>Albunes </Link>
      </Menu.Item>
      
      
    </Menu>
    
  );
  
    
}
  
export default Navbar