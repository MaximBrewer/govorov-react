import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/TestLocal';


const root = ReactDOM.createRoot(document.getElementById('quiz'));

const props = {
    ...window.data.test,
    questions: window.data.test.appquestions,
    results: window.data.test.appresults,
}

root.render(<App  {...props} />);