import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import AboutTemplate from '../template/about-template'
import HomeTemplate from '../template/home-template'
import LoginTemplate from '../template/login-templates'
import PortfolioTemplate from '../template/portfolio-templates'
import KontaktTemplate from '../template/kontakt-template'
import PolicyTemplate from '../template/policy-templates'
import KursTemplate from '../template/CMS-kurs-templates'



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
                case 'cms-kurs' :
                    return <KursTemplate {...contentfulPage} />;
                default:
                    return <HomeTemplate {...contentfulPage} />;
            }
        };


        return (

        <Layout>{getTemplate(contentfulPage)}</Layout>

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

        template
    }
 }
`


export default Page
