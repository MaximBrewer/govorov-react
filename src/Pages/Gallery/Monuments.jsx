import React from 'react';
import Index from './Index';


export default () => {
    const props = window.data.gallery.monuments;
    return <Index {...props} title={`Памятники`} />;
}
