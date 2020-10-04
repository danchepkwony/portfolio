import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'


class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wideEnough: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ wideEnough: window.innerWidth > 907 });
  }
 
  render() {

    const {wideEnough} = this.state;

    return (
      <nav className = "Nav-bar"> 
      {wideEnough ? (
          <div style={{display: "flex"}}> 
            <NavLink to="/" exact activeClassName="Nav-link-active" className = "Nav-link">home</NavLink>
            <NavLink to='/portfolio' activeClassName="Nav-link-active" className = "Nav-link">portfolio</NavLink>
            <NavLink to='/say-hi' activeClassName="Nav-link-active" className = "Nav-link" style={{marginRight: "50px"}}>contact</NavLink>
          </div>
        ) : (
          <div className="Nav-dropdown">
          <button className="Nav-dropbtn">Dropdown</button>
            <ul className="Nav-dropdown-content">
              <li className = "Nav-dropdown-list">
                <NavLink to='/' className = "Nav-dropdown-link">home</NavLink>
              </li>
              <li className = "Nav-list">
                <NavLink to='/portfolio' className = "Nav-dropdown-link">portfolio</NavLink>
              </li>
              <li className = "Nav-list">
                <NavLink to='/say-hi' className = "Nav-dropdown-link">contact</NavLink>
              </li>
            </ul>
          </div>
      )}
      </nav>
      );
  }
};
 
export default Navigation;