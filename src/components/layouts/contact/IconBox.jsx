import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class IconBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconbox: [
                {
                    id: 1,
                    headding: "0541 644 48 93 - 0533 036 57 84",
                    subheading: "7/24 Destek - Çevrimiçi 24 saat \n Bizi Şimdi Ara",
                    icon: 'icon-phone'
                },
                {
                    id: 2,
                    headding: "Kızılsaray Mah. 61. Sok. Ayakkabıcılar İş Hanı Kat: 2 No: 206 Muratpaşa / ANTALYA",
                    subheading: "Pzt - Cmt: 08:00 - 20:00, Pazar: Kapalı",
                    icon: 'icon-map'
                },
                {
                    id: 3,
                    headding: "iletisim@skrturizm.com",
                    subheading: "7/24 Destek - Çevrimiçi 24 saat \n Bize Mail Atın",
                    icon:'icon-envelope'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="row gutter-16">
              {
                this.state.iconbox.map(data =>(
                  <div className="col-md-4" key={data.id}>
                    <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                      <div className="themesflat-icon-box icon-top align-center accent-color style-3 bg-light-snow clearfix">
                          <div className="icon-wrap">
                            <i className={data.icon} />
                          </div>
                          <div className="text-wrap">
                            <h5 className="heading"><Link to="#">{data.headding}</Link></h5>
                            {/* <h5 className="heading"><Link to="#">{data.headding2}</Link></h5> */}
                            <p className="sub-heading">{data.subheading}</p>
                          </div>
                      </div>
                  </div> 
                ))
              }                      
            </div>
        );
    }
}

export default IconBox;