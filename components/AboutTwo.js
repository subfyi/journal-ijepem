import React, {Component} from 'react';

export default class AboutTwo extends Component {
    constructor() {
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="about-one__about-page">
                                <div className="about-one__text">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Online Submission System
                                            </p>
                                            <p>
                                                An efficient, easy and user friendly online submission system reduces the overall time from submission to publication.

                                            </p>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-rocket"></i>

                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">
                                                Rapid Publication

                                            </p>
                                            <p>
                                                Online gönderi, eş zamanlı hakem değerlendirmesi, makalenin yayınlanmasını basit ve verimli bir şekilde gerçekleştirir.
                                            </p>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-newspaper"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">No Space Constraints

                                            </p>
                                            <p>
                                                Publishing online means unlimited space for figures, extensive data and video footage.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}