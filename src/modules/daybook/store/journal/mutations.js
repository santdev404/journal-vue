// export const myAction = ( state) =>{
    
// }


export const setEntries = ( state, entries ) =>{
    //desestructura el state anterior (...state.entries), esparcir nuevas entradas (...entries)
    //Crear un nuevo arreglo con los valores enteriores y los nuevos
    state.entries = [ ...state.entries, ...entries ] 
    state.isLoading = false
}

export const updateEntry = ( state, entry) =>{ //entry actualizada

    // generar un nuevo arreglo del actual entries que solo contengan los id
    // state.entries.map( e => e.id)
    // ejemplo: [abc, xyz]
    // Busca el indice/ posicion dentro del arreglo q coincida con el id del objeto entry
    // .indexOf( entry.id )
    // regresa la posicion
    const idx = state.entries.map( e => e.id).indexOf( entry.id )


    // console.log(state.entries)
    // console.log(entry)

    state.entries[idx] = entry

    // console.log({idx})
  
}

export const addEntry = ( state, entry) =>{

     state.entries = [ entry, ...state.entries]

    //  console.log(state.entries)
    // entries del state y colocar el nuevo entry al inicio

    // state -> entries -> entry
}

export const deleteEntry = ( state, id ) =>{

    state.entries = state.entries.filter( data => data.id != id )
    
}