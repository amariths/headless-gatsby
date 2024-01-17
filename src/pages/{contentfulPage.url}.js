import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Layout2 from '../components/layout2';
import AboutTemplate from '../template/about-template'
import HomeTemplate from '../template/home-template'
import LoginTemplate from '../template/login-templates'
import PortfolioTemplate from '../template/portfolio-templates'
import KontaktTemplate from '../template/kontakt-template'
import PolicyTemplate from '../template/policy-templates'
import KursTemplate from '../template/CMS-kurs-templates'
import ErrorTemplate from '../template/404'



function Page(props) {

    const {data} = props;
    const {contentfulPage} = data;
       const getTemplate = (contentfulPage) => {
            switch (contentfulPage.template) {
                case 'about' :
                     return <AboutTemplate {...contentfulPage} />;
                case 'login' :
                    return <LoginTemplate {...contentfulPage} />;
                case 'portfolio' :
                    return <PortfolioTemplate {...contentfulPage} />;
                case 'kontakt' :
                    return <KontaktTemplate {...contentfulPage} />;
                case 'policy' :
                    return <PolicyTemplate {...contentfulPage} />;
                case 'CMS-kurs' :
                    return <KursTemplate {...contentfulPage} />;
                case '404' :
                    return <ErrorTemplate {...contentfulPage} />;
                default:
                    return <HomeTemplate {...contentfulPage} />;
            }
        };


        return (

        <Layout2>{getTemplate(contentfulPage)}</Layout2>

        );
}

export const data = graphql`
query pageQuery($id: String) {
   contentfulPage(id: { eq: $id }) {
        url
        title
        content {
            raw
        }
        image {
            gatsbyImage(width: 700)
          }

        template
    }
 }
`


export default Page
