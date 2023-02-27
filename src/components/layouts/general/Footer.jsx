import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="clearfix">
                <div id="footer-widgets" className="container">
                    <div className="themesflat-row gutter-30">
                        <div className="col span_1_of_6">
                            <div className="widget widget_text">
                                <div className="textwidget">
                                    <p>
                                        <img src="assets/img/seker/skrlogo.png" alt="imagealt" width={336} height={87} />
                                    </p>
                                    <p className="margin-bottom-15">
                                      Günün 24 saati size yardımcı olabilecek 10 yılı aşkın deneyime sahibiz.
                                    </p>
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <span className="fa fa-map-marker" />
                                                <span className="text">
                                                  Kızılsaray Mah. 61. Sok. Ayakkabıcılar İş Hanı Kat: 2 No: 206 <span className="sl">
                                                  Muratpaşa / ANTALYA</span></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <span className="fa fa-phone" />
                                                <span className="text">Bizi Arayın: (0541) 644 48 93</span>
                                            </div>
                                        </li>
                                        <li className="margin-top-7">
                                            <div className="inner">
                                                <span className=" font-size-14 fa fa-envelope" />
                                                <span className="text">iletisim@skrturizm.com</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>{/* /.widget_text */}
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                        </div>
                        <div className="col span_1_of_6">
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={35} data-smobile={35} />
                            <div className="widget widget_tags">
                                <h2 className="widget-title margin-bottom-30"><span>ETİKETLER</span></h2>
                                <div className="tags-list">
                                    <Link to="#">Organizasyon</Link>
                                    <Link to="#">Ekstra Temizlik</Link>
                                    <Link to="#">Personel Tedariği</Link>
                                    <Link to="#">Servis Hizmetleri</Link>
                                    <Link to="#">Havalimanı Transfer</Link>
                                    <Link to="#">Bahçe Peyzaj Ekibi</Link>
                                    <Link to="#">Personel Lojmanı</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;