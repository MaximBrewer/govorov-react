import React from 'react';
import Index from './Index';

export default () => {
    const props = window.data.exhibits.favorites;
    return <Index {...props} title={`Личное`} />;
}