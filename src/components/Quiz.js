import React, { Fragment, useState } from 'react';
import * as jsonQuestions from './../questions.json'

export const Quiz = () => {
    const [category, setCategory] = useState("random");
    const [questions, setQuestions] = useState(jsonQuestions);

    const [progress, setProgress] = useState({
        answeredQuestions: [],
        correctQuestions: [],
        wrongQuestions: [],
    })

    console.log(jsonQuestions);
    return (
        <Fragment>
            <select value={category} onChange={setCategory}>
                <option value="random">Tilfeldige spørsmål</option>
                <option value="1">Kapittel 1</option>
                <option value="2">Kapittel 2</option>
                <option value="3">Kapittel 3</option>
            </select>
            {progress.answeredQuestions.length > 0 &&
                <p>Du har svart riktig på {progress.correctQuestions.length} av {progress.answeredQuestions.length} spørsmål.</p>}
        </Fragment >
    )
}

export default Quiz;