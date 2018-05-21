import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="2bis"
      meta={[
        { name: 'description', content: '2bis' },
        { name: 'keywords', content: 'boulangerie, pâtisserie' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
