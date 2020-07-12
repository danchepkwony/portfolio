import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
      <div>
      {wideEnough ? (
        <div className = "Top-bar"> 
          <div className = "Top-link"><p className = "Top-logo"> <Link to='/' className = "Top-no-decoration"> Logo </Link> </p></div>
          <div className = "Top-link"><p className = "Top-navigation"> <Link to='/' className = "Top-no-decoration"> about me </Link> </p></div>
          <div className = "Top-link"><p className = "Top-navigation"> <Link to='/portfolio' className = "Top-no-decoration"> portfolio </Link> </p></div>
          <div className = "Top-link"><p className = "Top-navigation"> <Link to='/say-hi' className = "Top-no-decoration"> contact me </Link> </p></div>
        </div>
        ) : (
        <div className = "Top-bar"> 
          <Link to='/' className = "Top-link"> <p className = "Top-logo">Logo</p></Link>
          <div className="Top-dropdown">
            <button className="Top-dropbtn">Dropdown</button>
              <ul className="Top-dropdown-content">
                <li className = "Top-list"><Link to='/' className = "Top-dropdown-link"><p className = "Top-navigation">about me</p></Link></li>
                <li className = "Top-list"><Link to='/portfolio' className = "Top-dropdown-link"><p className = "Top-navigation">portfolio</p></Link></li>
                <li className = "Top-list"><Link to='/say-hi' className = "Top-dropdown-link"><p className = "Top-navigation">contact me</p></Link></li>
              </ul>
          </div>
        </div>
      )}
      </div>
      );
  }
};
 
export default Navigation;