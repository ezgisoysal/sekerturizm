import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IconBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconbox : [
                {
                    id: 1,
                    icon: "autora-icon-author",
                    title: "GÖREVİMİZ",
                    text: "Her işte, tüm ürün ve hizmetlerimizde en yüksek kalite standartlarını talep ediyoruz."
                },
                {
                    id: 2,
                    icon: "autora-icon-quality",
                    title: "EN İYİ KALİTE",
                    text: "Kendimizden ödün vermeden en yüksek kalite standartlarını karşılamayı taahhüt ediyoruz."
                },
                {
                    id: 3,
                    icon: "autora-icon-time",
                    title: "ZAMANINDA",
                    text: "Müşterilerimizden aldığımız projeleri ve işleri her zaman zamanında tamamlıyoruz."
                },
                {
                    id: 4,
                    icon: "autora-icon-author",
                    title: "TECRÜBELİ",
                    text: "Uzun yıllara dayanan tecrübemizle, işi tam olarak yapacağımıza bahse girebilirsiniz."
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="themesflat-row gutter-30 gutter-mobile clearfix">
                {
                    this.state.iconbox.map(data => (
                        <div className="col span_1_of_3" key={data.id}>
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                            <div
                                className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 bg-white-column padding-inner clearfix">
                                <div className="icon-wrap">
                                    <i className={data.icon} />
                                </div>
                                <div className="text-wrap">
                                    <h5 className="heading"><Link to="#">{data.title}</Link></h5>
                                    <div className="sep clearfix" />
                                    <p className="sub-heading">{data.text}</p>
                                </div>
                            </div>
                            <div className="divider h35" />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default IconBox;