// export const myGetter = ( state ) =>{
//    return state
// }


export const getEntriesByTerm = ( state ) => ( term = '') => {

    if(term.length === 0) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLocaleLowerCase()))

}

export const getEntryById = ( state ) => (id = '') =>{

    const entry = state.entries.find( entry => entry.id === id)

    // const entry = state.entries.filter(entry => entry.id === id)

    // console.log(entry)

    if(!entry) return

    return {...entry}

}