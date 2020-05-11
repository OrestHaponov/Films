import {HANDLE_CHANGE_QUESTION,HANDLE_CHANGE_ANSWER_ONE,HANDLE_CHANGE_ANSWER_TWO,HANDLE_CHANGE_ANSWER_THREE,HANDLE_CHANGE_ANSWER_FOUR,HANDLE_CHANGE_SELECT,ADD_QUESTION_TO_QUIZ,HANDLE_CHANGE_QUIZ_NAME,ADD_NEW_QUIZ,ADD_QUIZ_NAME,CLEAR_VALUE_QUIZ_NAME,CLEAR_QUESTION_FORM,REFRESH_FORM_ADD_QUIZ } from "./actionTypes";

//GET CONTROLED ALL INPUTS
export function handleChangeQuestion(valueQuestion){
    return{
        type: HANDLE_CHANGE_QUESTION,
        valueQuestion
    }
}

export function handleChangeAnswerOne(valueAnswerOne){
    return{
        type: HANDLE_CHANGE_ANSWER_ONE,
        valueAnswerOne
    }
}

export function handleChangeAnswerTwo(valueAnswerTwo){
    return{
        type: HANDLE_CHANGE_ANSWER_TWO,
        valueAnswerTwo
    }
}

export function handleChangeAnswerThree(valueAnswerThree){
    return{
        type: HANDLE_CHANGE_ANSWER_THREE,
        valueAnswerThree
    }
}

export function handleChangeAnswerFour(valueAnswerFour){
    return{
        type: HANDLE_CHANGE_ANSWER_FOUR,
        valueAnswerFour
    }
}

export function handleChangeSelect(valueSelect){
    return{
        type: HANDLE_CHANGE_SELECT,
        valueSelect
    }
}

export function handleChangeQuizName(valueQuizName){
    return{
        type: HANDLE_CHANGE_QUIZ_NAME,
        valueQuizName
    }
}
//CREATE QUESTION

//ADD NAME FUNCTIONAL
    export function addQuizName(valueQuizName){
        return(dispatch) =>{
            event.preventDefault();
            if(valueQuizName == ""){
                alert("Please type name");
            }else{
                dispatch(addNameOfQuiz(valueQuizName));
                dispatch(clearValueQuizName());
            }
        }
    }

    export function clearValueQuizName(){
        return{
            type: CLEAR_VALUE_QUIZ_NAME
        }
    }

    export function addNameOfQuiz(valueQuizName){
        return{
            type: ADD_QUIZ_NAME,
            valueQuizName
        }
    }

// ADD QUESTION FUNCTIONAL
    export function addQuestion(quiz,valueQuestion,valueAnswerOne,valueAnswerTwo,valueAnswerThree,valueAnswerFour,valueSelect){
        return(dispatch) =>{
            let question = {};
            question["question"] = valueQuestion;
            question["answerState"] = "";
            question["rightAnswer"] = parseInt(valueSelect);
            question["answers"] = [
                {answer: `A) ${valueAnswerOne}`, id:1},
                {answer: `B) ${valueAnswerTwo}`, id:2},
                {answer: `C) ${valueAnswerThree}`, id:3},
                {answer: `D) ${valueAnswerFour}`, id:4},
            ]
            if(valueQuestion == "" || valueAnswerOne == "" || valueAnswerTwo == "" || valueAnswerThree == "" || valueAnswerFour == ""){
                alert("Please fill all fields")
            }else{
                quiz.push(question);
                dispatch(addQuestionToQuiz(quiz));
                dispatch(clearQuestionForm());
            }
        }
    }

    export function addQuestionToQuiz(quiz){
        return{
            type: ADD_QUESTION_TO_QUIZ,
            quiz
        }
    }

    export function clearQuestionForm(){
        return{
            type: CLEAR_QUESTION_FORM
        }
    }

//ADD QUIZ FUNCTIONAL

    export function addQuiz(quiz,quizName){
        return(dispatch) =>{
            let doneQuiz = {}
            let name = quizName;
            doneQuiz[name] = quiz;
            dispatch(addNewQuiz(doneQuiz));
            dispatch(refreshFormAddQuiz());
        }
    }

    export function addNewQuiz(doneQuiz){
        return{
            type: ADD_NEW_QUIZ,
            doneQuiz
        }
    }

    export function refreshFormAddQuiz(){
        return{
            type: REFRESH_FORM_ADD_QUIZ
        }
    }

