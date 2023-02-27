import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Slider, TitleHeading } from '../layouts/home01/index'
import { IconBox, SliderService, TabProject,Testimonial } from '../layouts/home02/index'
import {Header, Footer, TopBar, BottomBar} from '../layouts/general/index'

class Home02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    logoweb: "assets/img/seker/skrlogo.png",
                    names: "Anasayfa",
                }
            ],
            ourservice: [
                {
                    id: 1,
                    classnames: 'heading',
                    title: 'HİZMETLERİMİZ',
                }
            ],
            leading: [
                {
                    id: 1,
                    classnames: 'heading',
                    title: 'ŞEKER TURİZM'
                }
            ],
            choose: [
                {
                    id: 1,
                    classnames: 'heading',
                    title: 'WHY CHOOSE US?'
                }
            ],
        }
    }
    render() {
        return (
            <div className="header-fixed page no-sidebar header-style-3 topbar-style-3 site-header-absolute menu-has-search">
                <div id="wrapper" className="animsition">
                    <div id="page" className="clearfix">
                        <div id="site-header-wrap">
                            <TopBar />
                            {
                                this.state.headers.map((data,idx) =>(
                                    <Header data={data} key={idx}/>
                                ))
                            }
                        </div>
                        <div id="main-content" className="site-main clearfix">
                            <div id="content-wrap">
                                <div id="site-content" className="site-content clearfix">
                                    <div id="inner-content" className="inner-content-wrap">
                                        <div className="page-content">
                                            <div className="rev_slider_wrapper fullwidthbanner-container">
                                                <div id="rev-slider2" className="rev_slider fullwidthabanner">
                                                    <Slider/>
                                                </div>
                                            </div>
                                            <div className="row-services">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            {
                                                                this.state.ourservice.map(data => (
                                                                    <TitleHeading data={data} key={data.id}/>
                                                                ))
                                                            }
                                                            <div className="themesflat-spacer clearfix" data-desktop="27" data-mobile="35" data-smobile="35"></div>
                                                            <SliderService />
                                                            <div className="themesflat-spacer clearfix" data-desktop={45} data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row-iconbox bg-row-2">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            {
                                                                this.state.leading.map(data => (
                                                                    <TitleHeading data={data} key={data.id}/>
                                                                ))
                                                            }
                                                            <div className="themesflat-spacer clearfix" data-desktop={25} data-mobile={35} data-smobile={35} />
                                                            <IconBox />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                
                                            
                                            <div className="row-project clearfix">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            <div className="position-relative">
                                                                <div className="themesflat-headings style-1 clearfix">
                                                                    <h2 className="heading ">ŞEKER TURİZM HİZMETLERİ</h2>
                                                                </div>
                                                            </div>                 
                                                            <div className="themesflat-spacer clearfix" data-desktop={40} data-mobile={35} data-smobile={35} />
                                                            <TabProject />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Testimonial />
                                            <div className="row-quote bg-row-1">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={40} data-mobile={60} data-smobile={60} />
                                                            <div className="themesflat-quote style-1 clearfix">
                                                                <div className="quote-item">
                                                                <div className="inner">
                                                                    <div className="heading-wrap">
                                                                    <h3 className="heading" style={{color:"black"}}>PROJENİZİ YÜRÜTMEYE BAŞLAYIN</h3>
                                                                    </div>
                                                                    <div className="button-wrap has-icon icon-left">
                                                                    <Link to="#" className="themesflat-button bg-white small"><span>(0541) 644 48 93 <span className="icon"><i className="autora-icon-phone-contact" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="themesflat-spacer clearfix" data-desktop={31} data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                        {
                            this.state.headers.map((data,idx) =>(
                                <BottomBar data={data} key={idx}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home02;