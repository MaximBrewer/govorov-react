import React from 'react';
import Index from './Index';


export default () => {
    const props = window.data.exhibits.album;
    return <Index {...props} title={`Семейный альбом`} />;
}