import React, { Fragment, useState } from 'react';
import * as q from './../questions.json'

// stackoverflow.com/a/12646864
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export const Quiz = () => {
    const jsonQuestions = q.default;
    const categorySet = new Set();
    categorySet.add(0);
    for (let question of jsonQuestions) {
        categorySet.add(question.category)
    }
    const categories = Array.from(categorySet)

    const [category, setCategory] = useState();
    const [questions, setQuestions] = useState(jsonQuestions);
    const [categoryQuestions, setCategoryQuestions] = useState({ category: -1, questions: [] })
    const [currentQuestion, setCurrentQuestion] = useState({
        text: "Spørsmålstekst",
        correct: ["Riktig svar"],
        wrong: ["Feil svar", "hvertfall feil svar"],
    })
    const [answerText, setAnswerText] = useState();
    const [progress, setProgress] = useState({
        totalQuestions: 0,
        answeredQuestions: 0,
        correctQuestions: 0,
        wrongQuestions: 0,
        answered: false,
    })

    const allCategories = {
        0: "Tilfeldige spørsmål",
        2: "Prosjektkarakteristikker",
        3: "Interessenter",
        4: "Prosjektets livsløp",
    }

    const handleCategoryChange = event => {
        const chosenCategory = event.target.value;
        setCategory(chosenCategory);
        let newQuestions = [];
        for (let question of questions) {
            if (parseInt(chosenCategory) === parseInt(0)) {
                newQuestions.push(question)
            }
            else if (parseInt(question.category) === parseInt(chosenCategory)) {
                newQuestions.push(question)
            }
        }
        shuffleArray(newQuestions);
        setCategoryQuestions({
            category: category,
            questions: newQuestions,
        });
        setCurrentQuestion({
            text: newQuestions[0].questionText,
            correct: newQuestions[0].correctAnswers,
            wrong: newQuestions[0].wrongAnswers,
        })
        setProgress({
            ...progress,
            totalQuestions: newQuestions.length,
        })
        newQuestions.shift();
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
        console.log(categoryQuestions);
        setProgress({
            ...progress,
            answered: false,
        });
        if (categoryQuestions.questions.length > 0) {
            let newQuestion = categoryQuestions.questions[0]
            setCurrentQuestion({
                text: newQuestion.questionText,
                correct: newQuestion.correctAnswers,
                wrong: newQuestion.wrongAnswers,
            });
            let newQuestionlist = categoryQuestions.questions.shift();
            setCategoryQuestions({
                questions: newQuestionlist,
                ...categoryQuestions
            })
        }
    }

    if (!category) return (
        <Fragment>
            <p>Velg en kategori for å starte!</p>
            <select onChange={handleCategoryChange}>
                <option value={null} key={null} >-</option>
                {categories.map(category =>
                    <option value={category} key={category} >{allCategories[category]}</option>
                )}
            </select>
        </Fragment>
    )

    if (progress.answered === false && progress.answeredQuestions === progress.totalQuestions) return (
        <Fragment>
            <p>
                Kategorien har ikke flere spørsmål, og du svarte riktig
                på {progress.correctQuestions} av {progress.answeredQuestions} spørsmål.
            </p>
            <button className="nextButton" onClick={() => window.location.reload()}>Start på nytt</button>
        </Fragment >
    );

    return (
        <Fragment>
            <h2>Kategori</h2>
            <select onChange={handleCategoryChange}>
                {categories.map(category =>
                    <option value={category} key={category} >{allCategories[category]}</option>
                )}
            </select>

            <h3>{currentQuestion.text}</h3>
            {progress.answered === false && currentQuestion.correct.map(alternative =>
                <button className="alternativeButton" value={"correct"} key={alternative} onClick={handleAnswer}>{alternative}</button>
            )}
            {progress.answered === false && currentQuestion.wrong.map(alternative =>
                <button className="alternativeButton" value={"wrong"} key={alternative} onClick={handleAnswer}>{alternative}</button>
            )}

            {progress.answered && <h3>{answerText}</h3>}
            {progress.answered === false && <button className="nextButton" onClick={handleNewQuestion}>Sjekk svar</button>}
            {progress.answered === true && <button className="nextButton" onClick={handleNewQuestion}>Neste spørsmål</button>}

            <p>Du har svart riktig på {progress.correctQuestions} av {progress.answeredQuestions} spørsmål</p>
            <p>Kategorien har totalt {progress.totalQuestions} spørsmål</p>
        </Fragment >
    )
}

export default Quiz;