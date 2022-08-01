export const posts = () => {
    const postsArray = [
        { image: require("../../assets/images/slider/2.png") },
        { image: require("../../assets/images/slider/3.png") },
        { image: require("../../assets/images/slider/5.png") },
        { image: require("../../assets/images/slider/4.png") },
        { image: require("../../assets/images/slider/1.png") },
    ];

    return postsArray;
};

export const textSlider = () => {
    const postsArray = [
        {
            title: "Dark UI Kit Freebie",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.",
        },
        {
            title: "Light UI Kit Freebie Exclusive",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis. Fusce velit justo, faucibus eu sagittis",
        },
    ];

    return postsArray;
};
