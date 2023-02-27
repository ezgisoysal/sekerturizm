import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class TabProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    classnames: 'project-item green villa',
                    srcimg: 'assets/img/seker/img10.jpg',
                },
                {
                    id: 2,
                    classnames: 'project-item architecture building construction',
                    srcimg: 'assets/img/seker/img11.jpg',
                },
                {
                    id: 3,
                    classnames: 'project-item villa architecture building construction',
                    srcimg: 'assets/img/seker/img12.jpg',
                },
                {
                    id: 4,
                    classnames: 'project-item green villa',
                    srcimg: 'assets/img/seker/img13.jpg',
                },
                {
                    id: 5,
                    classnames: 'project-item architecture building construction',
                    srcimg: 'assets/img/seker/img14.jpg',
                },
                {
                    id: 6,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/seker/img15.jfif',
                },
                {
                  id: 7,
                  classnames: 'project-item green',
                  srcimg: 'assets/img/seker/img16.jpg',
                },
                {
                  id: 8,
                  classnames: 'project-item green',
                  srcimg: 'assets/img/seker/img17.jpg',
                },
                {
                  id: 9,
                  classnames: 'project-item green',
                  srcimg: 'assets/img/seker/img18.jpg',
                },
                {
                  id: 10,
                  classnames: 'project-item green',
                  srcimg: 'assets/img/seker/img19.jpg',
                },
                {
                  id: 11,
                  classnames: 'project-item green',
                  srcimg: 'assets/img/seker/img20.jpg',
                },
                {
                  id: 12,
                  classnames: 'project-item green',
                  srcimg: 'assets/img/seker/img21.jpg',
                },
                {
                  id: 13,
                  classnames: 'project-item green',
                  srcimg: 'assets/img/seker/img22.jfif',
                }
            ]
        }
    }

    render() {
        return (
            <div className="themesflat-project style-2 isotope-project has-margin mg15 data-effect clearfix">
                {
                this.state.projects.map(data =>(
                <div className={data.classnames} key={data.id}>
                    <div className="inner">
                        <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
                            <img src={data.srcimg} alt="altimage" />
                            
                            <div className="overlay-effect bg-color-3" />
                        </div>
                        {/* <div className="text-wrap">
                            <h5 className="heading">
                                <Link to="#">{data.heading}</Link>
                            </h5>
                            <div className="elm-meta">
                                <span>
                                    <Link to="#">{data.name01}</Link></span>
                                <span>
                                    <Link to="#">{data.name01}</Link></span>
                            </div>
                        </div> */}
                    </div>
                </div>
                ))
                }
            </div>
        );
    }
}

export default (TabProject);