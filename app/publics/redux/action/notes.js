import axios from 'axios'

export const getNotes = (search ='',sort = 'desc', page = '') => {
    let link = `http://192.168.6.132:3000/notes?`
    if (search !== '') {
        link = link + `search=` + search
    }
    if (sort !== '') {
        link = link + `&sort=` + sort
    } if (page !== 0) {
        link = link + `&page=` + page
    }
    // console.log(link)
    return {
        type: 'GET_NOTES',
        payload: axios.get(link)
    }
}
export const getNotesPage = (page) => {
    // let link = `http://192.168.6.132:3000/notes?`
    // if (page !== 0) {
    //     link = link + `&page=` + page
    // }
    // // console.log(link)
    return {
        type: 'GET_PAGE_NOTES',
        payload: axios.get(`http://192.168.6.132:3000/notes?page=${page}`)
    }
}
// export const getNotesSearch = (search = '',sort = 'desc',page='') => {
//     let link = `http://192.168.6.132:3000/notes?`
//     if (search !== '') {
//         link = link + `search=` + search
//     }
//     if (sort !== '') {
//         link = link + `&sort=` + sort
//     }
//     return {
//         type: 'GET_SEARCH_NOTES',
//         payload: axios.get(link)
//     }
// }
export const deleteNotes = (id_notes) => {
    return {
        type: 'DELETE_NOTES',
        payload: axios.delete(`http://192.168.6.132:3000/notes/${id_notes}`)
    }
}
export const postNotes = (title, note, idCategory) => {
    if (title !== '' && note !== '' && idCategory !== '') {
        console.log("...." + title)
        return {
            type: 'POST_NOTES',
            payload: axios({
                method: `post`,
                url: `http://192.168.6.132:3000/notes`,
                data: {
                    title: title,
                    note: note,
                    category_id: idCategory
                }
            })
            // payload : dataNotes
        }

    }
}
export const updateNote = (id, data) => {
    return {
        type: 'EDIT_NOTES',
        payload: axios.put(`http://192.168.6.132:3000/notes/${id}`, data)
    }
}
export const getNotesByCategory = (id) =>{
    return {
        type :'GET_NOTES_BY_ID_CATEGORY',
        payload : axios.get(`http://192.168.6.132:3000/notes/category/${id}`)
    }
}