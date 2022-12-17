import React from 'react';
import Index from './Index';

export default () => {
    const props = window.data.exhibits.books;
    return <Index {...props} title={`Документы`} />;
}