import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class AboutOne extends Component {
    constructor(){
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
            <section className="about-one ">
                <img src="assets/images/circle-stripe.png" className="about-one__circle" alt="" />
                    <div className="container text-center">
                        <div className="block-title text-center">
                            <h2 className="block-title__title">International Journal of Environmental Pollution and Environmental Modelling </h2>
                        </div>

                        <p className="about-one__text">IJEPEM (International Journal of Environmental Pollution and Environmental Modelling) is a leading journal for environmental researchers in several areas such as water pollution, wastewater pollution, air pollution, solid waste management, biotechnology, soil pollution, surface and groundwater, renewable energy, energy management, microbiology, sustainability, waste recovery and transformation, fuzzy logic, artificial neural networks.


                            <br />
                            Journal welcomes the high-quality papers. Original research papers, state-of-the-art reviews and high quality technical notes are invited for publication.

                        </p>
                        <a href="https://dergipark.org.tr/tr/journal/2662/submission/step/manuscript/new" className="thm-btn about-one__btn">Send Paper</a>
                    </div>
            </section>
        );
    }
}

export default AboutOne;