import journalApi from '@/api/journalApi'   
// export const myAction = async({}) =>{

// }

export const loadEntries = async({ commit }) =>{
    
    const { data } = await journalApi.get('/entries.json')

    if(!data){
        commit('setEntries', [])
        return
    }

    const entries = []
    for( let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }



    commit('setEntries', entries)
}

export const updateEntry = async( { commit },  entry  )  =>{  //entry debe ser un parametro

    //Extraer solo lo que necestian // -id

    // const { date, picture, text} = entry 
    // const dataToSave = { date, picture, text } 

    // const resp = await journalApi.put( `/entry/${ entry.id}.json`, dataToSave)

    // console.log(resp)


    const url = `/entries/${entry.id}.json`
    const dataToSave = {
        "text" : entry.text,
        "date" : entry.date,
        "picture" : entry.picture
    }

    const { data } = await journalApi.put(url, dataToSave) 
    console.log(data)

    dataToSave.id = entry.id

    // se usa el operado spread ...entry para que el objeto no pase por referencia
    commit('updateEntry', {...dataToSave}) 

}

export const createEntry = async({ commit }, entry) =>{

    const url = `/entries.json`
    const addEntry = {
        "text" : entry.text,
        "date" : entry.date,
        "picture" : entry.picture
    }

    const { data } = await journalApi.post(url, addEntry) 

    addEntry.id = data.name

    commit('addEntry', addEntry)

    return data.name

}

export const deleteEntry = async({ commit }, id ) =>{

    const url = `/entries/${id}.json`
    const resp = await journalApi.delete(url) 
    console.log(resp)

    commit('deleteEntry', id)

}