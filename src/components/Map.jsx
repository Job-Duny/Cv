import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
    return (
    <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
        rotate: [85, -20, 5],
        // "arcs": [[-99, -343, 479, 480, 481]],
        center: [-10, 3],
        scale: 1000
        }}
        style={{width: "100%", height: "100%"}}
    >
        <Geographies
        geography="/features.json"
        fill="#DACBBA"
        stroke="#044a40"
        strokeWidth={0.8}
        >
        {({ geographies }) =>
            geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
            ))
        }
        </Geographies>
        <Annotation
        subject={[-99.2, 19]}
        dx={-120}
        dy={-20}
        connectorProps={{
            stroke: "#8d947e",
            strokeWidth: 3,
            strokeLinecap: "round"
        }}
        >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#DACBBA" style={{fontSize: 35, fontWeight:300, textTransform: "capitalize"}}>
            {"Mexico City"}
        </text>
        </Annotation>
    </ComposableMap>
    );
};

export default MapChart;
