// import * as React from "react"
// import '../css/style.css';
// import {Link} from "gatsby";
// import UseNavigation from "../hooks/use-Navigation";
// import BottomNav from "../hooks/bottom-Navigation"
// import { Helmet } from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticQuery} from "gatsby"


// import Search from "./search"


// const Layout = ({ children }) => {
  
// const top = UseNavigation()
// const bottom = BottomNav()




//     return (

//       <StaticQuery
//       query={graphql`
//         query SearchIndexQuery {
//           siteSearchIndex {
//             index
//           }
//         }
//       `}
//       render={data => (
//         <>
//         <Helmet> 
//           <meta name="author" content="Amar epic"></meta> 
//           </Helmet>
//         <header>
//           <div>


            
//           <nav className="navbar-bg">
    
//     <a  className="navbar-brand">Navbar</a>

//    <div id="navbarNav">
//           <ul className="navbar-nav">
//               {top.map((edge) => {
//                 return (

//                      <li className="nav-item">

//                         {edge.node.url != '/404' && <a className="nav-link" href={edge.node.url}>{edge.node.title}</a>}
//                      </li>

//                 )
//               })}
//           </ul>
//    </div>
//          <div  className="search">
//             <Search className="search" searchIndex={data.siteSearchIndex.index} />
//          </div>
// </nav>





//       <main className="main">{children}</main>



//       <footer className="footer">
//         <span>Footer</span>
//         <ul>
//            {bottom.map((edge) => {
//               return (
//                 <li className="list-footer">
//                   <Link className="link-footer" href={edge.node.url}>{edge.node.title}</Link>
//                 </li>
//               )
//             })}
//         </ul>
//         </footer>
//     </div>
         
//         </header>
//         </>
//       )}
//     />
      
    

// )
//     }


// export default Layout
