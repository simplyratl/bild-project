import React from "react";

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="main-section__wrapper">
                <div className="main-section__top">
                    <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&w=1000&q=80"
                        alt="About us"
                        className="main-section__image"
                    />

                    <p className="main-section__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
                        vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
                        Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
                        congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
                        facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
                        <br /> <br />
                        Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet
                        sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
                        elit congue lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis
                        ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className="main-section__bottom">
                    <div className="box">
                        <h2 className="bottom-section-heading">MISSION STATEMENT</h2>
                        <p className="bottom-section-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat
                            lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis
                            tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis,
                            fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id
                            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue
                            lacinia.
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="bottom-section-heading">FUN FACTS</h2>
                        <p className="bottom-section-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat
                            lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis
                            tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis,
                            fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id
                            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue
                            lacinia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
