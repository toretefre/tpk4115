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
    const [answerText, setAnswerText] = useState("");

    const [progress, setProgress] = useState({
        answeredQuestions: 0,
        correctQuestions: 0,
        wrongQuestions: 0,
        answered: false,
    })

    const handleCategoryChange = event => {
        setCategory(event.target.value);
    }

    const handleAnswer = event => {
        if (event.target.value === "correct") {
            setProgress({
                ...progress,
                answeredQuestions: progress.answeredQuestions += 1,
                correctQuestions: progress.correctQuestions += 1,
                answered: true,
            })
            setAnswerText(`Riktig! Riktig(e) svar er ${currentQuestion.correct}`)
        }

        if (event.target.value !== "correct") {
            setProgress({
                ...progress,
                answeredQuestions: progress.answeredQuestions += 1,
                wrongQuestions: progress.wrongQuestions += 1,
                answered: true,
            })
            setAnswerText(`Feil! Riktig(e) svar ville vært ${currentQuestion.correct}`)
        }
    }

    const handleNewQuestion = () => {
        setNewQuestion();
    }

    const setNewQuestion = () => {
        setProgress({
            ...progress,
            answered: false,
        });
        setCurrentQuestion({
            text: "Mumbo",
            correct: ["mumboja"],
            wrong: ["feil", "veldig feil"]
        });
    }

    if (progress.answeredQuestions >= 10) return (
        <p>
            Quizen er ferdig, og du har svart riktig
            på {progress.correctQuestions} av {progress.answeredQuestions} spørsmål.
        </p>
    )

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
            {progress.answered === false && currentQuestion.correct.map(alternative =>
                <button value={"correct"} onClick={handleAnswer}>{alternative}</button>
            )}
            {progress.answered === false && currentQuestion.wrong.map(alternative =>
                <button value={"wrong"} onClick={handleAnswer}>{alternative}</button>
            )}

            <h3>{answerText}</h3>
            <button onClick={handleNewQuestion}>Neste spørsmål</button>

            <p>Du har svart riktig på {progress.correctQuestions} av {progress.answeredQuestions} spørsmål.</p>
        </Fragment >
    )
}

export default Quiz;