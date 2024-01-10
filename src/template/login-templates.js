import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Alert from 'react-bootstrap/Alert'

function Login(contentfulPage) {

    
    const [Logged, setLogged] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')

    }



    function Click() {
        setLogged(false)

    }

    const form = (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={Click} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

    const submitted = (
        <Alert variant="success">Thank you for logging in! we will respond shortly</Alert>
    )


  return (
    <div id="form1">
        <h2>{contentfulPage.title} template</h2>
                <span>{Logged ? form : submitted}</span>


            </div>
  )
}

export default Login
