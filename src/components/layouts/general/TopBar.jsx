import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <div id="top-bar">
                <div id="top-bar-inner" className="container">
                    <div className="top-bar-inner-wrap">
                        <div className="top-bar-content">
                            <div className="inner">
                                <span className="address content">Ayakkabıcılar İşhanı MURATPAŞA / ANTALYA </span>
                                <span className="phone content">0541 644 48 93</span>
                                <span className="phone content">0533 036 57 84</span>
                            </div>                            
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default TopBar;