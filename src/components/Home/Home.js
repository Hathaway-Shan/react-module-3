import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [textAlign, setTextAlign] = useState('');
  const [font, setFont] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview
        title={title}
        subTitle={subTitle}
        blogBody={blogBody}
        textAlign={textAlign}
        font={font}
      />
      <Editor
        title={title}
        setTitle={setTitle}
        subTitle={subTitle}
        setSubTitle={setSubTitle}
        blogBody={blogBody}
        setBlogBody={setBlogBody}
        textAlign={textAlign}
        setTextAlign={setTextAlign}
        font={font}
        setFont={setFont}
      />
    </main>
  );
}
