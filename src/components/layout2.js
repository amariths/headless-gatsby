import React, { useState} from "react"
import '../css/style.css';
import {Link} from "gatsby";
import UseNavigation from "../hooks/use-Navigation";
import BottomNav from "../hooks/bottom-Navigation"
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"
import { StaticQuery} from "gatsby"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import Search from "./search"


const Layout2 = ({ children }) => {
  
const top = UseNavigation()
const bottom = BottomNav()

const [state, setState] = useState(false);


function collapse(e) {
   
    setState(!state)
  }


    return (

      <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <>
        <Helmet> 
          <meta name="author" content="Amar epic"></meta> 
          </Helmet>
        <header>
          

          <nav class={state ? 'navbar1 bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark': 'navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark'} data-bs-theme="dark">
          <div class="container-fluid">
          <a class={state ? 'navbar-brand1': 'navbar-brand'}  href="/">Navbar</a>
          <button onClick={collapse}  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-5">
              {top.map((edge) => (
                <li class="nav-item" key={edge.node.id}>
                  {edge.node.url !== '/404' && (
                    <a class="nav-link" href={edge.node.url}>{edge.node.title}</a>
                  )}
                </li>
              ))}
            </ul>

            
              <Search className="search" searchIndex={data.siteSearchIndex.index} />
            
            </div>
  </div>
    </nav>



      <main className="main">{children}</main>



      <footer className="footer">
        <span>Footer</span>
        <ul>
           {bottom.map((edge) => {
              return (
                <li className="list-footer">
                  <Link className="link-footer" href={edge.node.url}>{edge.node.title}</Link>
                </li>
              )
            })}
        </ul>
        </footer>
    
         
        </header>
        </>
      )}
    />
      
    

)
    }


export default Layout2
