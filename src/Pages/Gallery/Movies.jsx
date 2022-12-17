import React from 'react';
import Index from './Index';


export default () => {
    const props = window.data.gallery.movies;
    return <Index {...props} title={`Фильмы`} />;
}