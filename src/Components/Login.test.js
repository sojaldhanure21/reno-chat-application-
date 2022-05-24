import { render,screen } from "@testing-library/react"
import Login from "./Login"
import {BrowserRouter as Router} from "react-router-dom"

test('render correctly',async()=>{
    render(<Router><Login></Login></Router>);
    
    const loginButton = screen.getByText("Login");
    console.debug(loginButton)
    expect(loginButton).toBeTruthy()

    const registerButton = screen.getByText("Sign Up")
    console.debug(registerButton)
    expect(registerButton).toBeTruthy()

    const forgetpassword = screen.getAllByText("Forget Password")
    console.debug(forgetpassword)
    expect(forgetpassword).toBeTruthy()

})