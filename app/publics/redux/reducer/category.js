const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export default Category = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORY_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_CATEGORY_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_CATEGORY_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }
        case "ADD_CATEGORY_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "ADD_CATEGORY_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "ADD_CATEGORY_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data:[...state.data].concat([action.payload.data.result])
            }
            case "DELETE_CATEGORY_PENDING":
                return {
                    ...state,
                    isLoading: true
                }
            case "DELETE_CATEGORY_REJECTED":
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }
            case "DELETE_CATEGORY_FULFILLED":
                return {
                    ...state,
                    isLoading: false,
                    data: state.data,
                    data: state.data.filter(val => (
                        val.id !== action.payload.data.result.id
                    ))
                }
        default:
            return state
    }
}