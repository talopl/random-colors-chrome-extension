const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const randomColor = "rgb(" + red + ", " + green + ", " + blue + ")"
    console.log(randomColor)
    return randomColor
}

const paintable_element_types = new Set()
paintable_element_types.add('DIV')
paintable_element_types.add('SPAN')
paintable_element_types.add('P') 
paintable_element_types.add('BODY')
paintable_element_types.add('TABLE')
paintable_element_types.add('TD')
paintable_element_types.add('TH')
paintable_element_types.add('TR')

paintElementsRandomColor(document.body)
changeColorOnClick(document.body)

function paintElementsRandomColor(element){
    if (element != null && paintable_element_types.has(element.tagName)) {
        element.style.backgroundColor = getRandomColor() 
    }
    
    if (element != null && element.hasChildNodes()) {
        element.childNodes.forEach(paintElementsRandomColor)
    
    }
    
}

function changeColorOnClick(element) {
    if (element != null && paintable_element_types.has(element.tagName)) {
        element.style.cursor = "pointer"
        element.addEventListener('click', () => {
            element.style.backgroundColor = getRandomColor()
        })
    }
    if (element != null && element.hasChildNodes()) {
        element.childNodes.forEach(changeColorOnClick)
    }
}
