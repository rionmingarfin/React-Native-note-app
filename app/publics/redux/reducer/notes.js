const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    response: '',
    page :[]
}

export default notes = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NOTES_PENDING":
            return {
                ...state,
                isLoading: true
            }
            case "GET_NOTES_REJECTED":
                return {
                ...state,
                isLoading: false,
                isError: true
            }
            case "GET_NOTES_FULFILLED":
                
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    page:action.payload.data,
                    data:action.payload.data.data,
                // data:[...state.data].concat(action.payload.data.data),
            }
            // case "GET_NOTES_SORT_PENDING":
            //     return {
                //         ...state,
                //         isLoading: true
                //     }
                // case "GET_NOTES_SORT_REJECTED":
                //     return {
                    //         ...state,
                    //         isLoading: false,
                    //         isError: true
                    //     }
                    // case "GET_NOTES_SORT_FULFILLED":
                    
                    //     return {
                        //         ...state,
                        //         isLoading: false,
                        //         isError: false,
                        //         data:action.payload.data.data,
                        //     }
                        case "GET_PAGE_NOTES_PENDING":
            return {
                ...state,
                isLoading: true
            }
            case "GET_PAGE_NOTES_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            case "GET_PAGE_NOTES_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data:[...state.data].concat(action.payload.data.data),
                // page : action.payload.data.totalPage,
            }
        case "GET_DELETE_PENDING":
            return {
                ...state,
                isLoading: true
            }
            case "GET_DELETE_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_DELETE_FULFILLED":
            return {
                ...state,
                isLoading: false,
                data: state.data.filter(val => (
                    val.idNotes !== action.payload.data.result.idNotes
                ))
            }
        case "POST_NOTES_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "POST_NOTES_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "POST_NOTES_FULFILLED":
            return {
                ...state,
                isLoading: false,
                response: action.payload.data.result
            }
        case "EDIT_NOTES_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "EDIT_NOTES_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "EDIT_NOTES_FULFILLED":
            return {
                ...state,
                isLoading: false,
                response: state.data.map(data =>
                    (data.id_notes == action.payload.data.result.id_notes) ?
                        action.payload.data.result : data
                )
            }
        case "GET_NOTES_BY_ID_CATEGORY_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_NOTES_BY_ID_CATEGORY_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_NOTES_BY_ID_CATEGORY_FULFILLED":
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.data
            }
        default:
            return state
    }
}