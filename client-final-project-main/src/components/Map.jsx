import React from "react";
import ReactMapGL from "react-map-gl";

function Map() {
    const [viewport, setViewport] = React.useState({
        width: "100px", //or full width then set width: "100vw",
        height: "400px", //full height then set height: "100vh",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/ckszotu58a7dz17qh8ysv970j"
            mapboxApiAccessToken={
                "pk.eyJ1IjoiZmFsZGkwMTI2IiwiYSI6ImNsY3B0N3UxdzJvbjgzcHA4dW9xdm1pa3gifQ.f_fE0qZ7IPzVnlRm1UEibg"
            }
            onViewportChange={(viewport) => setViewport(viewport)}
            {...viewport}
        ></ReactMapGL>
    );
}

export default Map;
