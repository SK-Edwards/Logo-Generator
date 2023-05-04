const {Square, Circle, Triangle, Shape} = require("./Shapes")







test('Shape is a class object', () => {
    const example = new Shape()
    expect(example instanceof Shape).toBe(true);
  });

  
test('Shape has property textColor', () => {
    const example = new Shape("AAA", "blue", "red")
    expect(example.textColor).toBe("blue");
  });

  test('Shape has a render() method that throws an error', () => {
    const example = new Shape("AAA", "blue", "red");
    // console.log(example.render());
    expect(() => example.render()).toThrow("You must create a child instance of this class");
  });


test('Square has a property shapeColor', () => {
  const example = new Square('AAA', 'gold', 'black');
  expect(example.shapeColor).toBe('black')
})

test('Triangle has render() method', () =>{
const example = new Triangle('AAA', 'Gold', 'Green');
const result = example.render();
expect(result).toEqual('<polygon points="150 0 0 200 300 200 150 0" stroke="black" fill="Green" stroke-width="2"/>');

});



test('Circle has render() method', () =>{
  const example = new Circle('AAA', 'Gold', 'Green');
  const result = example.render();
  expect(result).toEqual('<circle cx="150" cy="100" r="100" fill="Green" stroke="black" stroke-width="2"/>');
  

});

test('Square has render() method', () =>{
  const example = new Square('AAA', 'Gold', 'Green');
  const result = example.render();
  expect(result).toEqual('<polygon points= "50 0 250 0 250 200 50 200" fill="Green" stroke="black" stroke-width="2"/>');
  

});