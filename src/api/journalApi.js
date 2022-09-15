import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-32b84-default-rtdb.firebaseio.com'
})

// console.log( process.env.NODE_ENV )


export default journalApi