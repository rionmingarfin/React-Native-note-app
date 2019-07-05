import axios from 'axios'

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get('http://192.168.6.132:3000/category')
    }
}
export const addCategory = (data) => {
    console.log(data)
    return {
        type: 'ADD_CATEGORY',
        payload: axios.post(`http://192.168.6.132:3000/category`,data)
    }
}
export const deleteCategory = (id) =>{
    return {
        type : 'DELETE_NOTES',
        payload :axios.delete(`http://192.168.6.132:3000/category/${id}`)
    }
}