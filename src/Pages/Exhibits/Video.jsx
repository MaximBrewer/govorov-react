import React from 'react';
import Index from './Index';

export default () => {
    const props = window.data.exhibits.video;
    return <Index {...props} title={`Видеоархив`} />;
}