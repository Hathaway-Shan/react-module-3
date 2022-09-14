import React from 'react';

import './Preview.css';

export default function Preview({ title, subTitle, blogBody, textAlign, font }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  return (
    //add style properties to the div as objects
    <div className={`preview ${font}`} style={{ textAlign: textAlign }}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>{blogBody}</p>
    </div>
  );
}
