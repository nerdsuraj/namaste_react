const { sum } = require("../sum")

test("function to check that return value is added or not!", ()=>{
    const result = sum(10,20);

    //Assertion 
    expect(result).toBe(30);
})