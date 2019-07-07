const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    page: []
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
                page: action.payload.data,
                data: action.payload.data.data,
            }

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
                data: [...state.data, ...action.payload.data.data],
            }
        case "DELETE_NOTES_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "DELETE_NOTES_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "DELETE_NOTES_FULFILLED":
            return {
                ...state,
                isLoading: false,
                data: state.data.filter(val => (
                    action.payload.data.result.id_notes !== val.id_notes
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
                data: [action.payload.data.result, ...state.data]
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
                data: state.data.map(value =>
                    (value.id_notes == action.payload.data.result.id_notes) ?
                        action.payload.data.result : value
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