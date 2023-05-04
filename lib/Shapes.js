class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render(){
        throw Error("You must create a child instance of this class")
    }
    renderSVG() {
        return ` <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
        ${this.render()}
          <text x="150" y="150" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
   
   }



    
}


class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text,textColor, shapeColor)
    }
    render(){
        return `<polygon points= "50 0 250 0 250 200 50 200" fill="${this.shapeColor}" stroke="black" stroke-width="2"/>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text,textColor, shapeColor)
    }
    render(){
        return `<polygon points="150 0 0 200 300 200 150 0" stroke="black" fill="${this.shapeColor}" stroke-width="2"/>`
    }
}


class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text,textColor, shapeColor)
    }
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" stroke="black" stroke-width="2"/>`
    }
}



module.exports = {Shape, Square, Triangle, Circle}