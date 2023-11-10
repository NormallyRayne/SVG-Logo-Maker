

class Shape {
    constructor(text,textColor,shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    setColor(textColor){
        this.textColor=textColor
    }
    setText(text){
        this.text=text
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor
    }
    render(){
        return Error("Child must create its own render function")
    }
}


Shape.prototype.sum = (a,b,c) => {
    return 
}

module.exports = Shape