const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
        allContentfulPortfolioItems {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulPortfolioItems.edges.forEach((edge) => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./src/template/Item.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
