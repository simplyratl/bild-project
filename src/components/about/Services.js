import React, { useEffect, useState } from "react";
import { BsFillGearFill, BsCameraFill, BsWindow } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import TabData from "./services.json";

const Services = () => {
    const [category, setCategory] = useState("WEBSITES");

    const categories = [
        { icon: <BsFillGearFill className="icon" />, title: "WEBSITES" },
        { icon: <BsCameraFill className="icon" />, title: "PHOTOGRAPHY" },
        { icon: <BiSearchAlt className="icon" />, title: "SEO" },
        { icon: <BsWindow className="icon" />, title: "APPLICATIONS" },
    ];

    const filterCategory = () => {
        return TabData.filter((tab) => tab.title === category);
    };

    useEffect(() => {
        filterCategory();
    }, [category]);

    return (
        <div className="services">
            <div className="services__wrapper">
                <h3 className="services__heading">SERVICES</h3>
            </div>

            <div className="services__categories">
                <div className="services__categories-wrapper">
                    {categories.map((categoryEl, index) => (
                        <div
                            className={`category ${category === categoryEl.title ? "active" : ""}`}
                            key={index}
                            onClick={() => setCategory(categoryEl.title)}
                        >
                            {categoryEl.icon}
                            <h4 className="title">{categoryEl.title}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className="services__wrapper">
                {filterCategory().map((tab, index) => (
                    <div key={index}>
                        <p className="services__paragraph">{tab.info}</p>

                        <ul className="services__list">
                            {tab.list.map((list) => (
                                <li className="list-element">{list}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
