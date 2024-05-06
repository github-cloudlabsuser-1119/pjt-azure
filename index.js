import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    const data = [
        [{ name: 'John' }, { name: 'Jane' }],
        [{ name: 'Bob' }]
    ];

    const names = data.flatMap(arr => arr.map(obj => obj.name));

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
            <div>{names}</div>
        </div>
    );
};

export default MarkdownEditor;

