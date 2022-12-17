import React, { useEffect, useState } from 'react';

import Question from './Test/Question';
import Screensaver from './Test/Screensaver';
import Result from './Test/Result';

export default () => {
    
    const props = window.data.test;

    const [question, setQuestion] = useState(null)

    const quiz = props.results;

    const [results, setResults] = useState({ })

    const [corrects, setCorrects] = useState({})

    useEffect(() => {
        let corrects = {}
        props.questions.data.map((item, index) => {
            corrects[item.sort] = `${item.answers.correct}`
        })
        setCorrects(corrects)
    }, [])

    return (<>
        {results[10] !== undefined
            ? <Result
                {...props}
                question={question}
                setQuestion={setQuestion}
                results={results}
                setResults={setResults}
                corrects={corrects}
                quiz={quiz}
            />
            : (
                question
                    ? <Question
                        {...props}
                        question={question}
                        setQuestion={setQuestion}
                        results={results}
                        setResults={setResults}
                        corrects={corrects}
                        quiz={quiz}
                    />
                    : <Screensaver
                        {...props}
                        question={question}
                        setQuestion={setQuestion}
                        results={results}
                        setResults={setResults}
                        corrects={corrects}
                        quiz={quiz}
                    />
            )}
    </>
    );
}
