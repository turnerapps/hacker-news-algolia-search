import React from 'react';

export const Article = ({title, children}) => (
    <>
        <h1>{title}</h1>
        {children}
    </>
);

export default Article;