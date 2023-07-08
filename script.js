const containerDiv = document.getElementById('containerDiv')

let images = []

addImageToImages('Alison', 'Alison in the desert', 'images/20140429_151222.jpg', 'landscape', '20140429_151222' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140429_151926.jpg', 'landscape', '20140429_151926' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140429_153027.jpg', 'landscape', '20140429_153027' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140429_181702.jpg', 'landscape', '20140429_181702' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140429_195050.jpg', 'landscape', '20140429_195050' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140430_114541.jpg', 'landscape', '20140430_114541' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140430_120227.jpg', 'landscape', '20140430_120227' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140430_123408.jpg', 'landscape', '20140430_123408' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140430_130948.jpg', 'landscape', '20140430_130948' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140430_132145.jpg', 'landscape', '20140430_132145' )

function addImageToImages(name, alt, src, style, id) {
    const newImage = {
        name: name,
        alt: alt,
        src: src,
        style: style,
        id: id,
    }
    images.push(newImage)
    return newImage
}

const renderAllImages = () => {
    for (let i = 0; i < images.length; i++) {
        const newImageElem = document.createElement('img')
        newImageElem.src = images[i].src
        newImageElem.classList.add(images[i].style)
        newImageElem.alt = images[i].alt
        containerDiv.appendChild(newImageElem)
    }
}

const renderImagesCarousel = () => {
    const carouselDiv = document.createElement('div')    
    containerDiv.appendChild(carouselDiv)
    createScrollBtns()
  
}

const createScrollBtns = () => {
    let index = 0
    //left
    const leftScrollBtn = document.createElement('button')
    leftScrollBtn.innerHTML = '&#10094;'
    leftScrollBtn.id = 'leftScroll'
    leftScrollBtn.addEventListener('click', () => scroll(1, index))
    containerDiv.appendChild(leftScrollBtn)
    //right
    const rightScrollBtn = document.createElement('button')
    rightScrollBtn.innerHTML = '&#10095;'
    rightScrollBtn.id = 'rightScroll'
    rightScrollBtn.addEventListener('click', () => scroll(0, index))    
    containerDiv.appendChild(rightScrollBtn)
}

const scroll = (num, index) => {
   

    if (num === 1) {
        index++
        console.log(images[index].src)
    return images[index].src
    } else {
        index--
        console.log(index)
        console.log(images[index].src)
        if ( index === -1) {
            const lastImage = images[images.length - 1];
           return lastImage.src
        } else {
            return images[index].src
        }
    
    } 
}

renderImagesCarousel()