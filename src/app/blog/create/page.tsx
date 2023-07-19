'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "react-quill/dist/quill.core.css";

export default function page() {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }]
    ],
  }
  const formats = [ 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'align' ]
  const [value, setValue] = useState('');
  return (
  <div>
    <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
  </div>
  )
}

