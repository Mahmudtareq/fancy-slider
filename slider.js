const images = [
    'slide-image/pic1.jpg',
    'slide-image/pic2.jpg',
    'slide-image/pic3.jpg',
    'slide-image/pic4.jpg',
    'slide-image/pic5.jpg',
    'slide-image/pic6.jpg'
]
let imageIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {

    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];

    // console.log(imgUrl);
    imgElement.setAttribute('src', imgUrl);
    imageIndex++;

}, 1000);