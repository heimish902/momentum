const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('./image/${chosenImage}')`;
