import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const YoutubePopup = ({ setPopup }) => {
    useEffect(() => {
        const keyDownHandler = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setPopup(false);
            }
        };

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    return (
        <div className="youtube-popup">
            <AiOutlineClose className="close" onClick={() => setPopup(false)} />

            <div className="youtube-popup__wrapper">
                <iframe
                    src="https://www.youtube.com/embed/hz6k3kqTyko"
                    title="YouTube"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YoutubePopup;
