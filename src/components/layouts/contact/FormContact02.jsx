import React, { Component } from 'react';

class FormContact02 extends Component {
    render() {
        return (
          <div className="row-contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d398.8691099993928!2d30.701784014022092!3d36.89147549014009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKIZILSARAY%20MAH.%2061.%20SOK.%20AYAKKABICILAR%20%C4%B0%C5%9EHANI%20KAT%3A%202%20NO%3A206%20MURATPA%C5%9EA%20%2F%20ANTALYA!5e0!3m2!1str!2str!4v1671366638843!5m2!1str!2str" 
                width="100%" height="450" style={{border:0}} loading="lazy" title="mapsiframe"></iframe>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="themesflat-spacer clearfix" data-desktop={81} data-mobile={60} data-smobile={60} />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default FormContact02;