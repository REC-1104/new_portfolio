import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-100.0, -20.0, -30],
        center: [-5, -3],
        scale: 700
      }}
      style={{width: '100%', height: '100%'}}
    >
      <Geographies
        geography="/features.json"
        fill="#9e00c2"
        stroke="white"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[78.9629, 20.5937]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"INDIA"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
