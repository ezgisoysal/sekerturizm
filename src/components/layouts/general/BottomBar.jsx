import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';

class BottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus : [
              {
                id: 1,
                name: 'ANASAYFA',
                links: '/'
              },
              {
                id: 2,
                name: 'HAKKIMIZDA',
                links: '/hakkimizda'
              },
              {
                id: 4,
                name: 'HİZMETLERİMİZ',
                links: '/hizmetlerimiz'
              },
              {
                id: 7,
                name: 'İLETİŞİM',
                links: '/iletisim'
              }
            ]
        }
    }
    
    render() {
        return (
            <div id="bottom" className="clearfix has-spacer">
                <div id="bottom-bar-inner" className="container">
                    <div className="bottom-bar-inner-wrap">
                        <div className="bottom-bar-content">
                            <div id="copyright">© <span className="text">Design <Link to="#"
                                        className="text-accent">by Ezgi Soysal</Link> </span>
                            </div>
                        </div>
                        <div className="bottom-bar-menu">
                            <ul className="bottom-nav">
                                {
                                    this.state.menus.map(data => (
                                        <li className={ data.name === this.props.data.names ? "menu-item current-menu-item" : "menu-item"} key={data.id}>
                                            <Link to={data.links} onClick={() => {window.location.href=data.links}}>{data.name}</Link> 
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BottomBar);