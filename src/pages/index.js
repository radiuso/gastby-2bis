import React from 'react';
import Link from 'gatsby-link';

import Atf from '../components/Atf';

const IndexPage = () => (
  <div className="2bis">
    <Atf />
    <div className="container">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/" className="button is-text">Go to page 2</Link>
    </div>
  </div>
);

export default IndexPage;
