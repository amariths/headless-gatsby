/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

// gatsby-browser.js
import React from 'react';
import { isRTL } from './src/utils/helpers';

export const wrapRootElement = ({ element }) => {
  const dir = isRTL() ? 'rtl' : 'ltr'; // Set dynamically based on your logic
  document.documentElement.setAttribute('dir', dir);
  return element;
};
