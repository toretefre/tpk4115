import React, { Fragment, useState } from 'react';

export const Quiz = () => {
    const [questionText, setQuestionText] = useState("Eksempelspørsmål");
    const [correctAnswers, setCorrectAnswers] = useState(["Et riktig alternativ", "Enda et riktig alternativ"]);
    const [wrongAnswers, setWrongAnswers] = useState(["Et feil alternativ", "et veldig feil alternativ"])
    const [scores, setScores] = useState({
        answered: 0,
        correct: 0,
    })


    const alternatives = wrongAnswers.concat(correctAnswers);
    console.log(alternatives)

    return (
        <Fragment>
            <h2>{questionText}</h2>
            {alternatives.map(alternative =>
                <button>{alternative}</button>
            )}

            <h3>Din statistikk</h3>

            {scores.answered > 0 && <p>Du har svart riktig på {scores.correct} av {scores.answered} spørsmål.</p>}
        </Fragment>
    )
}

export default Quiz;