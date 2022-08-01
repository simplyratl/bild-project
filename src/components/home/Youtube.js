import React, { useEffect, useState } from "react";
import YoutubeMockUp from "../../assets/images/youtube-mockup.png";
import YoutubePopup from "./YoutubePopup";

const Youtube = () => {
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (popup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "hidden visible";
        }
    }, [popup]);

    return (
        <>
            <div className="youtube">
                <div className="youtube__wrapper">
                    <div className="youtube__left">
                        <img src={YoutubeMockUp} className="youtube__mockup" onClick={() => setPopup(true)} />
                    </div>

                    <div className="youtube__right">
                        <h2 className="heading">Get To Know Us a Little Better!</h2>

                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat
                            lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis
                            tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis,
                            fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id
                            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue
                            lacinia.
                            <br />
                            <br />
                            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet
                            sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu
                            a elit congue lacinia.
                        </p>
                    </div>
                </div>
            </div>

            {popup && (
                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <YoutubePopup setPopup={setPopup} />
                </div>
            )}
        </>
    );
};

export default Youtube;
