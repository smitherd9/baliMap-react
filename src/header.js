import './App.css';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';

function Header() {
    return (
        <div className="header">
            <Nav>
               <div className="menu-icon">
                  <i className="fa fa-bars fa-2x"></i>
               </div>
               <div className="logo">
                   BALI GAMELAN MAP
                   <div className="logo-img">
                   <a href="#"><img src="./img/barong-bw.gif" /></a>
                   </div>
                  
               </div>
               <div className="menu">
                  <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Blog</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Contact</a></li>
                  </ul>
               </div>
            </Nav>

        </div>
    )

}

export default Header;