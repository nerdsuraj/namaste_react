import {render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom";

//Unit Testing for the isolation for the single componant!!
describe("to test all in one block",()=>{

    test('should loaded the contact us page!!', () => { 

        render(<Contact/>)
    
        //querring
        const header = screen.getByRole('heading')
    
        //Assertion
        expect(header).toBeInTheDocument();
    
     })
    
    test('should check the button is in contact page!!', () => { 
    
        render(<Contact/>)
    
        const button = screen.getByRole('button')
        // const button = screen.getByText("Submit")
    
        //Assertion
        expect(button).toBeInTheDocument();
    
     })
    
     it('should check the input is in contact page!!', () => { 
    
        render(<Contact/>)
    
        const input= screen.getByPlaceholderText("Email")
    
        //Assertion
        expect(input).toBeInTheDocument();
    
     })
})


// test('should loaded the contact us page!!', () => { 

//     render(<Contact/>)

//     const header = screen.getByRole('heading')

//     //Assertion
//     expect(header).toBeInTheDocument();

//  })
//  //find the other element for the testing in the same componantes

// it('should check the button is in contact page!!', () => { 

//     render(<Contact/>)

//     const button = screen.getByRole('button')
//     // const button = screen.getByText("Submit")

//     //Assertion
//     expect(button).toBeInTheDocument();

//  })

//  test('should check the input is in contact page!!', () => { 

//     render(<Contact/>)

//     const input= screen.getByPlaceholderText("Email")

//     //Assertion
//     expect(input).toBeInTheDocument();

//  })