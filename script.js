let title = document.querySelector(".title");
let subtitle = document.querySelector(".subtitle");
let page = 0;

const data = [
    {
        title: "<b>Plant lover Community</b>",
        subtitle: "Find gardening enthusiasts from all over the world"
    },

    {
        title: "<b>Get fast & safe delivery</b>",
        subtitle: "Get good quality products for your plants"
    },

    {
        title: "<b>Buy & Sell Tools</b>",
        subtitle: "Buy & sell good quality products for your beautiful plants"
    },
]

title.innerHTML = data[page].title;
subtitle.innerHTML = data[page].subtitle;