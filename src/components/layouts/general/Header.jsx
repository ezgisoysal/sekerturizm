import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import menus from '../menu'

class Header extends Component {
    render() {
        // const { location } = this.props;
        return (
            <header id="site-header">
                <div id="site-header-inner" className="container">                    
                    <div className="wrap-inner clearfix">
                        <div id="site-logo" className="clearfix">
                            <div id="site-log-inner">
                                <Link to="/" onClick={() => {window.location.href="/"}} rel="home" className="main-logo">
                                    <img src={this.props.data.logoweb} alt="Autora" width={223} height={56} data-retina="assets/img/seker/skrlogo.png" data-width={186} data-height={39} />
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-button">
                            <span />
                        </div>
                        <nav id="main-nav" className="main-nav">
                            <ul id="menu-primary-menu" className="menu">
                                {
                                    menus.map(data => (
                                        <li className={data.name === this.props.data.names ? "menu-item menu-item-has-children current-menu-item" : "menu-item menu-item-has-children"} key={data.id}>
                                            <Link to={data.links} onClick={() => {window.location.href=data.links}}>{data.sub}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>                 
                </div>
            </header>
        );
    }
}

export default withRouter(Header);