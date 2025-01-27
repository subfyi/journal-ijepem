import React, {Component} from 'react';
import circle from '../assets/images/circle-stripe.png';
import Image from "next/image";

class AboutOne extends Component {
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
            <section className="about-one ">
                <Image src={circle} className="about-one__circle" alt=""/>
                <div className="container text-center">
                    <div className="block-title text-center">
                        <a target="_blank" className="block-title__title" href="https://dergipark.org.tr/en/pub/ijepem">
                            <h2 className="block-title__title">
                                International Journal of Environmental Pollution and Environmental Modelling

                            </h2>
                        </a>
                    </div>

                    <p className="about-one__text">
                        IJEPEM (International Journal of Environmental Pollution and Environmental Modelling) is a leading journal for environmental researchers in several areas such as water pollution, wastewater pollution, air pollution, solid waste management, biotechnology, soil pollution, surface and groundwater, renewable energy, energy management, microbiology, sustainability, waste recovery and transformation, fuzzy logic, artificial neural networks.
                        <br/>
                        Journal welcomes the high-quality papers. Original research papers, review papers and technical notes are invited for publication.
                    </p>
                    <a href="https://dergipark.org.tr/en/journal/2661/submission/step/manuscript/new" className="thm-btn about-one__btn">Send Paper</a>
                </div>
            </section>
        );
    }
}

export default AboutOne;