//const arrayOfBackgrounds = ['images/stars3.jpg', 'images/london-web33.jpg'];
const arrayOfBackgrounds = ['images/stars4.jpg'];
    const choice = Math.floor(Math.random() * arrayOfBackgrounds.length);
    document.querySelector('.background').style.backgroundImage = 'url(' + arrayOfBackgrounds[choice] + ')';
