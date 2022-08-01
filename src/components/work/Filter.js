import React, { useEffect, useState } from "react";

const Filter = ({ selectedFilter, setSelectedFilter }) => {
    const filters = ["ALL", "PRINT", "PHOTOGRAPHY", "WEB", "APPLICATIONS"];

    return (
        <div className="breadcrumbs">
            {filters.map((filter, index) => (
                <span
                    className={`breadcrumb ${selectedFilter === filter ? "active" : ""}`}
                    key={index}
                    onClick={() => setSelectedFilter(filter)}
                >
                    {filter} /
                </span>
            ))}
        </div>
    );
};

export default Filter;
