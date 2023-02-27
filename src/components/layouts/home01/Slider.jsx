import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import bannerhome2 from '../home02/data_banner';

class Slider extends Component {

    render() {
        const { location } = this.props;
        const mainContent = () =>{
            if(location.pathname === "/"){
                return(
                    <>
                        {
                            bannerhome2.map(data =>(
                                <li data-transition="random" key={data.id}>
                                    <img src={data.srcimg} alt="altimage" data-bgposition="center center" data-no-retina />
                                </li>
                            ))
                        }
                    </>
                )
            }
        }
        return (
            
            <ul>             
                    {mainContent()}   
            </ul>
        );
    }
}

export default withRouter (Slider);