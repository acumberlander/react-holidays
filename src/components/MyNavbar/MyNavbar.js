import React from 'react';
import './MyNavbar.scss';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


class MyNavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    // same as const isAuthed = this.props.isAuthed
    // same as const newThing = this.props.isAuthed
    const { isAuthed, logoutClickEvent } = this.props;
    const buildNavbar = () => {
      if (isAuthed) {
        return (
          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink tag={RRNavLink} to="/friends">Friends</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={RRNavLink} to="/friends/new">New Friend</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={RRNavLink} to="/holidays">Holidays</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={RRNavLink} to="/holidays/new">New Holiday</NavLink>
            </NavItem>

            <NavItem className="logoutLink">
              <NavLink onClick={logoutClickEvent}>logout</NavLink>
            </NavItem>
            
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };

    return (
      <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React-Holidays</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
