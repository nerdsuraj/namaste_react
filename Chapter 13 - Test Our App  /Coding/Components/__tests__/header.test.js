const { render, screen, fireEvent } = require("@testing-library/react")
import { Provider } from "react-redux"
import Header from "../ Header"
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

it('should renderd the header componant and check it the login button', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    //querring
    const loginButton = screen.getByText("Login") // we can use the regex here /login/

    //Assertion
    expect(loginButton).toBeInTheDocument()

})

it('should renderd the header componant and check the check the button bheviour on click', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    //querring
    const loginButton = screen.getByText("Login")

    fireEvent.click(loginButton)

    const logoutButton = screen.getByText("Logout")

    //Assertion
    expect(logoutButton).toBeInTheDocument()

})