let page = 0;
let imageDiv = document.querySelector(".image");
let title = document.querySelector(".title");
let subtitle = document.querySelector(".subtitle");
let nextButton = document.querySelector(".next");
let skipButton = document.querySelector('.skip');

const data = [
    {
        title: "<b>Plant lover Community</b>",
        subtitle: "Find gardening enthusiasts from all over the world",
        button: "Continue"
    },

    {
        title: "<b>Get fast & safe delivery</b>",
        subtitle: "Get good quality products for your plants",
        button: "Continue"
    },

    {
        title: "<b>Buy & Sell Tools</b>",
        subtitle: "Buy & sell good quality products for your beautiful plants",
        button: "Get started"
    },
]

const setPage = () => {
    document.querySelector(`.point:nth-child(${page + 1})`).classList.add('selected');
    imageDiv.classList.add(`bg${page}`);
    title.innerHTML = data[page].title;
    subtitle.innerHTML = data[page].subtitle;
    nextButton.innerHTML = data[page].button;
    
    page === 2 
    ? skipButton.classList.add('hide')
    : skipButton.classList.remove('hide')
}

const nextPage = (i) => {
    document.querySelector(`.point:nth-child(${page + 1})`).classList.remove('selected');
    imageDiv.classList.remove(`bg${page}`);
    !isNaN(i) 
    ? ( page = i )
    : ( page === 2 ? ( page = 0 ) : ( page += 1 ) )
    setPage();
}

setPage();