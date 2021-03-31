import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ButtonContainer from './style/ButtonContainer';
import NavWraper from './style/NavWraper';

class Navbar extends Component  {
    render(){
  return (
        <NavWraper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
  

<ul className="navbar-nav align-items-center">
    <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
            Home
        </Link>
    </li>
        </ul>
        
<Link to='/cart' className="ml-auto">
    <ButtonContainer> 
        <span className="mr-2">  <i className = "fas fa-cart-plus" />
        </span>
        my cart
        </ButtonContainer>
</Link>
        </NavWraper>
    )
    }  
}


export default Navbar
