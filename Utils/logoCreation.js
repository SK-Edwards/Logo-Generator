// Square
function renderSquareLogo(value){
    if(value == "Square"){
        return `
<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="${data.shapeColor}" />

  <text x="150" y="150" font-size="100" text-anchor="middle" fill="${data.textColor}">${dataText}</text>

</svg>`
    } else {
        return " "
    }
}

//Circle
function renderCircleLogo(value){
    if(value == "Circle"){
    return  `
<svg version="1.1" width="300" height="300"xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="150" r="150" fill="${data.shapeColor}" />

  <text x="150" y="150" font-size="100" text-anchor="middle" fill="${data.textColor}">${dataText}</text>

</svg>`;
    } else{
        return " ";
    }
}



// Triangle
function renderTriangleLogo(value){
    if(value == "Triangle"){
        return `

<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">


     <polygon points="150 0 0 300 300 300 150 0"
      stroke="green" fill="${data.shapeColor}" stroke-width="5"/>
  
 
  <text x="150" y="250" font-size="100" text-anchor="middle" fill="${data.textColor}">${dataText}</text>
  
</svg>`

} else {
    return " ";
}
}


// Logo rendering function.

function logoCreation(data){
   if( data == data.logoShape){
    return `
    
    ${renderSquareLogo(`${data.logoShape}`)};
    ${renderCircleLogo(`${data.logoShape}`)};
    ${renderTriangleLogo(`${data.logoShape}`)};
    
    
    `
}
};

module.exports = logoCreation;