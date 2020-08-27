import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <a href="https://dergipark.org.tr/en/pub/ijepem">INTERNATIONAL JOURNAL OF ENVIRONMENTAL POLLUTION AND ENVIRONMENTAL MODELLING</a>
                        <a target="_blank" href="https://portal.issn.org/resource/issn/2618-6128">ISSN-2618-6128</a>
                    </div>
                    <div className="topbar-one__right">
                        <a href="https://dergipark.org.tr/en/journal/2661/submission/step/manuscript/new">MAKE A SUBMISSION</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;