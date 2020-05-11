import {HANDLE_CHANGE_QUESTION,HANDLE_CHANGE_ANSWER_ONE,HANDLE_CHANGE_ANSWER_TWO,HANDLE_CHANGE_ANSWER_THREE,HANDLE_CHANGE_ANSWER_FOUR,HANDLE_CHANGE_SELECT,HANDLE_CHANGE_QUIZ_NAME,CLEAR_VALUE_QUIZ_NAME,CLEAR_QUESTION_FORM,REFRESH_FORM_ADD_QUIZ} from "../Action/actionTypes";

const initialState={
   valueQuizName: "",
   valueQuestion: "",
   valueAnswerOne: "",
   valueAnswerTwo: "",
   valueAnswerThree: "",
   valueAnswerFour: "",
   valueSelect: 1,
   addName: false,
}

export default function createQuiz(state=initialState, action){
    switch(action.type){
        //GET CONTROLED ALL INPUTS
            case HANDLE_CHANGE_QUESTION:
                return{
                    ...state, valueQuestion: action.valueQuestion.target.value
                }
            case HANDLE_CHANGE_ANSWER_ONE:
                return{
                    ...state, valueAnswerOne: action.valueAnswerOne.target.value
                }
            case HANDLE_CHANGE_ANSWER_TWO:
                return{
                    ...state, valueAnswerTwo: action.valueAnswerTwo.target.value
                }
            case HANDLE_CHANGE_ANSWER_THREE:
                return{
                    ...state, valueAnswerThree: action.valueAnswerThree.target.value
                }
            case HANDLE_CHANGE_ANSWER_FOUR:
                return{
                    ...state, valueAnswerFour: action.valueAnswerFour.target.value
                }
            case HANDLE_CHANGE_SELECT:
                return{
                    ...state, valueSelect: action.valueSelect.target.value
                }
            case HANDLE_CHANGE_QUIZ_NAME:
                return{
                    ...state, valueQuizName: action.valueQuizName.target.value
                }
        // NAME FUNCTIONAL
            case CLEAR_VALUE_QUIZ_NAME:
                return{
                    ...state, valueQuizName: "", addName: true
                }
        // QUESTION FUNCTIONAL
            case CLEAR_QUESTION_FORM:
                return{
                    ...state, valueQuestion: "", valueAnswerOne: "", valueAnswerTwo: "", valueAnswerThree: "", valueAnswerFour: "", valueSelect: 1,
                }
        // QUIZ FUNCTIONAL
        case REFRESH_FORM_ADD_QUIZ:
            return{
                ...state, addName: false
            }
        default:
            return state
    }
}