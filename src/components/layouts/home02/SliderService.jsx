import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SliderService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: [
                {
                    id: 1,
                    srcimg: 'assets/img/seker/img1.jpg',
                    heading: 'ORGANİZASYON',
                    text: 'Edindiğimiz tecrübe ve bünyemizde çalışan personelimiz ile resmi ve özel kuruluşların, Açılış, Genel Kurul, Konferans, Seminer, Lansman (Bayi Toplantısı) Kokteyl, Etkinlik, Sosyal Sorumluluk, Fuar, Davet, Protokol, Personel, Festival vb. gibi organizasyonlarını planlamasından, uygulamasına kadar koordine ediyoruz....'
                },
                {
                    id: 2,
                    srcimg: 'assets/img/seker/img2.jpg',
                    heading: 'EXTRA PERSONEL',
                    text: 'Belirlenmiş veya acil olarak meydana gelen personel ihtiyaclarınızda, günü birlik Stand Elemanı (Host/Hostes) temini, Catering/Servis Elemanı, Garson ve Barmen, Dj, Güvenlik Görevlisi ve aklınıza gelebilecek tüm extra personel hizmetleri tarafımızca karşılanmaktadır....'
                },
                {
                    id: 3,
                    srcimg: 'assets/img/seker/img3.jpg',
                    heading: 'OTELİNİZİN TEMİZLİĞİNE TALİBİZ',
                    text: 'Bir otelde her tür insandan müşteri bulunduğu için, diğer hizmet alanlarında olduğu gibi extra temizlik hizmetlerinde de tüm müşterilerin faydalanabileceği ortak bir sistemde temizlik işinin yürütülmesi gerekir.Otel temizliğinin daha çok kat hizmetleri (housekeeping) görevlileri tarafından yerine getirilmektedir.Otelinizin temizlik ekibini deneyimli kadromuzdan oluşturalım ve otel temizliği işlerinizi biz yerine getirelim...'
                },
                {
                    id: 4,
                    srcimg: 'assets/img/seker/img4.jpg',
                    heading: 'AVM TEMİZLİĞİNE TALİBİZ',
                    text: 'AVM (Alışveriş Merkezi) nizin temizliğine talibiz.İster AVM temizlik personeli istihdamı yapalım, isterseniz part time AVM Temizlik Hizmeti sunalım.Sizler için en hızlı çözümü üretmeye devam ediyoruz.Bütün AVM ler müşteri sirkilasyonunun en yoğun yaşandığı alanlar olmuştur.AVM temizliği bu bağlamda kurumsal çözümler ve teknolojik ekipmanlarla daha etkin ve kalıcı temizlik istemektedir...'
                },
                {
                    id: 5,
                    srcimg: 'assets/img/seker/img5.jpg',
                    heading: 'ÜRETİM BÖLÜMÜ PERSONELİ',
                    text: 'Orta ve ağır sanayide Otomotiv sektöründe, İlaç sektöründe, Gemi İnşaat ve Tersanecilik sektöründe, Boya ve Plastik Sanayide, Metal Sanayide, Kalıpçılık sektöründe bir çok dev kuruluş kendilerine çözüm ortağı aramaktadır.10 yılın vermiş olduğu tecrübe ile yeni gelişen teknolojiyi yakından takip ederek personelimize bu konuda eğitim veriyor, çözüm ortağınız olarak sizleri personel ihtiyacından kurtarıyoruz...'
                },
                {
                    id: 6,
                    srcimg: 'assets/img/seker/img6.webp',
                    heading: 'YÖNETİM VE DANIŞMANLIK',
                    text: 'Özel Güvenlik, Yönetim ve Danışmanlık, Temizlik, İlaçlama, Peyzaj, Havuz Bakım, Teknik Hizmetler, Resepsiyon, Bina ve Tesis Yönetimine entegre ederek çözüm ortağınız olarak sizlerle birebir çalışarak ihtiyaçlarınıza göre özel olarak geliştirilmiş çözümler üretiyor ve uyguluyoruz...'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="themesflat-carousel-box has-arrows arrow-center offset-v-111 offset-h-21 arrow-circle arrow-style-2 data-effect clearfix"
                data-gap={30} data-column={3} data-column2={2} data-column3={1} data-auto="true">
                <div className="owl-carousel owl-theme">
                    {
                        this.state.slider.map(data =>(
                            <div className="themesflat-image-box style-2 clearfix" key={data.id}>
                                <div className="image-box-item">
                                    <div className="inner">
                                        <div className="thumb data-effect-item">
                                            <img src={data.srcimg} alt="altimage" />
                                            <div className="overlay-effect bg-color-accent" />
                                        </div>
                                        <div className="text-wrap">
                                            <h5 className="heading"><Link to="#">{data.heading}</Link></h5>
                                            <p>{data.text}</p>
                                            {/* <div className="elm-readmore">
                                                <Link to="#">DETAILS</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }             
                </div>
            </div>
        );
    }
}

export default SliderService;