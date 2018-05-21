/**
 * Above the fold component
 */
import React from 'react';
import './Atf.scss';

const Atf = () => (
  <div className="atf">
    <img src="images/logo.svg" className="atf--logo" />

    <h2 className="atf--subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus dolor, eleifend a enim at, feugiat lobortis magna.
    </h2>
    <img src="images/rect.svg" className="atf--rect" />

    <img src="images/atf_terrasse.png"
        srcSet="images/atf_terrasse@2x.png 2x,
                images/atf_terrasse@3x.png 3x"
        className="atf--image" />
  </div>
);

export default Atf;
