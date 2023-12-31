const containerDiv = document.getElementById('containerDiv')
const buttonDiv = document.getElementById('buttonDiv')
const carouselDiv = document.getElementById('carouselDiv')

let images = []
let index = 0

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

addImageToImages('Alison', 'Alison in the desert', 'images/20140429_153018.jpg', 'portrait', '20140429_153018' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140429_181918.jpg', 'portrait', '20140429_181918' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140429_181925.jpg', 'portrait', '20140429_181925' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140430_113955.jpg', 'portrait', '20140430_113955' )
addImageToImages('Alison', 'Alison in the desert', 'images/20140430_114555.jpg', 'portrait', '20140430_114555' )


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
    renderImage(index)
    createScrollBtns()    
}

const renderImage = (i) => {
    const lastImage = document.querySelector('img')
    if (lastImage) {
        lastImage.remove()
    }
    const newImageElem = document.createElement('img')
    newImageElem.src = images[i].src
    newImageElem.classList.add(images[i].style)
    newImageElem.alt = images[i].alt
    carouselDiv.appendChild(newImageElem)

    let imageDots = document.querySelectorAll('.imageDot')
    for (let j = 0; j  < imageDots.length; j++) {
        imageDots[j].classList.remove('active')    
        if (j === i) {
          imageDots[j].classList.add('active')
        }       
    }
}

const createScrollBtns = () => {    
    //left
    const leftScrollBtn = document.createElement('button')
    leftScrollBtn.classList.add('scrollBtn')
    leftScrollBtn.innerHTML = '&#10094;'
    leftScrollBtn.id = 'leftScroll'
    leftScrollBtn.addEventListener('click', () => {
        pauseCarousel()
        scroll(0)
        renderImage(index)
        
    })
    buttonDiv.appendChild(leftScrollBtn)

    //image dots for each image
    for (let i = 0; i < images.length; i++) {
        const imageDots = document.createElement('div')
        imageDots.classList.add('imageDot')
        imageDots.addEventListener('click', () => {
            pauseCarousel()
            renderImage(i)  
            index = i          
        })
        buttonDiv.appendChild(imageDots)
    }
    //set first dot to active
    let allImageDots = document.querySelectorAll('.imageDot')
    for (let i = 0; i < allImageDots.length; i++) {
        let firstImage = allImageDots[0]
        firstImage.classList.add('active')
    }

    //right
    const rightScrollBtn = document.createElement('button')
    rightScrollBtn.classList.add('scrollBtn')
    rightScrollBtn.innerHTML = '&#10095;'
    rightScrollBtn.id = 'rightScroll'
    rightScrollBtn.addEventListener('click', () => {
        pauseCarousel()
        scroll(1)
        renderImage(index)
    
    })    
    buttonDiv.appendChild(rightScrollBtn)
}

const scroll = (num) => {
  if (num >= 1) {
    index++
  } else {
    index--
    if (index === -1) {
      const lastImage = images.length - 1
      index = lastImage
    }
  }
  if (index >= images.length) {
    index = 0
    }
return index
}

let isPaused = false

const scrollImages = () => {    
    setTimeout(function() {
        if (!isPaused) {
        scroll(1)
        renderImage(index)
        scrollImages()
        }
    }, 5000)        
}

const pauseCarousel = () => {
    isPaused = true
    return isPaused
}

renderImagesCarousel()
scrollImages()