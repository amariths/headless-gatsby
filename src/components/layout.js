import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {Link} from "gatsby";
import UseNavigation from "../hooks/use-Navigation";
import BottomNav from "../hooks/bottom-Navigation"
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"
import { StaticQuery} from "gatsby"

import Search from "./search"


const Layout = ({ children }) => {
  
const top = UseNavigation()
const bottom = BottomNav()




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
        <header>
          <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    
  <a  class="navbar-brand">Navbar</a>
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        {top.map((edge) => {
            return (

      <li class="nav-item active">
        <a class="nav-link" href={edge.node.url}>{edge.node.title}</a>
      </li>

        )
})}
    </ul>
  </div>
  <div  className="search">
  <Search className="search" searchIndex={data.siteSearchIndex.index} />
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
    </div>
         
        </header>
      )}
    />
      
    

)
    }


export default Layout
