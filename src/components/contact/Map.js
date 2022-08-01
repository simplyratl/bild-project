import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { AnimatePresence, motion } from "framer-motion";
import { Oval } from "react-loader-spinner";

const Map = () => {
    const containerStyle = {
        width: "100%",
        height: "500px",
    };

    const center = {
        lat: 42.425338553774004,
        lng: 19.238876847308806,
    };

    const marker = {
        lat: 42.425338553774004,
        lng: 19.238876847308806,
    };

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyC1iYSxI7cV82XA2Y5KmgfCNafjh5vz2wc",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <MarkerF position={marker} />
                    </GoogleMap>
                ) : (
                    <motion.div
                        className="loading"
                        initial={{ opacity: 0, width: 0, height: 0 }}
                        animate={{ opacity: 1, width: 46, height: 46 }}
                        exit={{ opacity: 0, width: 0, height: 0 }}
                    >
                        <Oval color="#2ecc71" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default React.memo(Map);
