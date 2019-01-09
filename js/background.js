//var arrayOfBackgrounds = ['images/stars3.jpg', 'images/london-web33.jpg'];
var arrayOfBackgrounds = ['images/stars4.jpg'];
    var choice = Math.floor(Math.random() * arrayOfBackgrounds.length);
    document.querySelector('.background').style.backgroundImage = 'url(' + arrayOfBackgrounds[choice] + ')';
