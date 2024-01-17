import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'


import Alert from 'react-bootstrap/Alert'

function Login(contentfulPage) {

    
    const options = {
        renderMark: {
          [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
        },
        renderNode: {
    
          [BLOCKS.HEADING_2]: (node, children) => {
            return <h2>{children}</h2>
          },
        },
      }

    
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

    const form1 = (
        <form className='formm' onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label for="username">Email address</label>
        <input className='input' type="text" placeholder="Email" id="username"/>

        <label for="password">Password</label>
        <input className='input' type="password" placeholder="Password" id="password"/>

        <button onClick={Click}>Log In</button>

    </form>
    )

    const submitted = (
        <Alert className='success' variant="success">Thank you for logging in! we will respond shortly</Alert>
    )
  

  return (
    <div className='bg'>
          
        <h2 className='login-template'>{renderRichText(contentfulPage.content, options)}</h2>
        <h2 className='login-template'>{contentfulPage.title} template</h2>
    <div id="form1">
        
                <span className='login'>{Logged ? form1 : submitted}</span>

                {contentfulPage.image && <GatsbyImage className='image' alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage} />}

            </div>
            </div>
  )
}

export default Login
