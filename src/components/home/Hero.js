import React from "react";
import Devices from "../../assets/images/hero-devices.png";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="hero" style={{}}>
            <div className="hero__wrapper">
                <div className="devices-container">
                    <motion.div className="devices-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <img src={Devices} className="devices" />
                    </motion.div>
                </div>
            </div>

            <div className="hero__bottom">
                <motion.p
                    className="short-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus,
                    vel congue mauris. Fusce velitaria justo, faucibus eu.
                </motion.p>

                <motion.a
                    href="#"
                    className="browse-portfolio-link"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <button type="button" className="browse-portfolio">
                        BROWSE PORTFOLIO
                    </button>
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
