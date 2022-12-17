import React from 'react';
import Index from './Index';


export default () => {
    const props = window.data.gallery.books;
    return <Index {...props} title={`Книги`} />;
}