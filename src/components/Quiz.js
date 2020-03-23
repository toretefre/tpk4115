import React, { Fragment, useState } from 'react';

export const Quiz = () => {
    const [questionText, setQuestionText] = useState("Eksempelspørsmål");
    const [correctAnswers, setCorrectAnswers] = useState(["Et riktig alternativ", "Enda et riktig alternativ"]);
    const [wrongAnswers, setWrongAnswers] = useState(["Et feil alternativ", "et veldig feil alternativ"])

    const alternatives = wrongAnswers.concat(correctAnswers);
    console.log(alternatives)

    return (
        <Fragment>
            <h2>{questionText}</h2>
            {alternatives.map(alternative =>
                <button>{alternative}</button>
            )}
        </Fragment>
    )
}

export default Quiz;