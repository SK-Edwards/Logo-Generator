// Switch statement for generating the logos

function logoCreation(data){
switch (data.logoShape) {
    case 'Circle':
        return  `
<svg version="1.1" width="300" height="300"xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="150" r="150" fill="${data.shapeColor}" stroke="black" stroke-width="2"/>

  <text x="150" y="150" font-size="100" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`;
      break;
    case 'Triangle':
        return `

        <svg version="1.1"
             width="300" height="300"
             xmlns="http://www.w3.org/2000/svg">
        
        
             <polygon points="150 0 0 300 300 300 150 0"
              stroke="black" fill="${data.shapeColor}" stroke-width="2"/>
          
         
          <text x="150" y="250" font-size="90" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
          
        </svg>`;
      break;
    case 'Square':
        return `
        <svg version="1.1"
             width="300" height="300"
             xmlns="http://www.w3.org/2000/svg">
        
          <rect width="100%" height="100%" fill="${data.shapeColor}" stroke="black" stroke-width="2"/>
        
          <text x="150" y="150" font-size="100" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        
        </svg>`;
      break;
    default:
      return ` `;
  }};

  module.exports = logoCreation;