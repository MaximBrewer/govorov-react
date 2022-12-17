import React from 'react';
import Index from './Index';


export default () => {
    const props = window.data.gallery.pictures;
    return <Index {...props} title={`Картины`} />;
}