import React, { Fragment, useState } from 'react';
import * as jsonQuestions from './../questions.json'

export const Quiz = () => {
    const [category, setCategory] = useState("random");
    const [questions, setQuestions] = useState(jsonQuestions.default);
    const [currentQuestion, setCurrentQuestion] = useState({
        text: "Hva er riktig svar?",
        correct: ["Riktig svar"],
        wrong: ["Feil svar", "hvertfall feil svar", "veldig feil svar"],
    })

    const [progress, setProgress] = useState({
        answeredQuestions: [],
        correctQuestions: [],
        wrongQuestions: [],
    })

    const handleCategoryChange = event => {
        setCategory(event.target.value);
    }

    const alternatives = currentQuestion.correct.concat(currentQuestion.wrong);

    console.log(questions);
    return (
        <Fragment>
            <h2>Kategori:</h2>
            <select value={category} onChange={handleCategoryChange}>
                <option value="random">Tilfeldige spørsmål</option>
                <option value="1">Kapittel 1</option>
                <option value="2">Kapittel 2</option>
                <option value="3">Kapittel 3</option>
            </select>

            <h3>{currentQuestion.text}</h3>
            {alternatives.map(alternative =>
                <button>{alternative}</button>
            )}

            <p>Du har svart riktig på {progress.correctQuestions.length} av {progress.answeredQuestions.length} spørsmål.</p>
        </Fragment >
    )
}

export default Quiz;