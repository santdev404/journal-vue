import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
// import { journalState } from 'tests/unit/mock-data/test-journal-state'
import { journalState }  from '../../../../mock-data/test-journal-state'


const createVuexStore = ( initialState )=> 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })


describe('Vuex - Pruebas en el journal module', () =>{

    //Basicas
    test('Este es el estado inicial, debe de tener este state', () =>{

        const store = createVuexStore( journalState )

        const { isLoading, entries } = store.state.journal

        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries )
    })

    //Mutations
    test('mutation: setEntries', () =>{
      const store = createVuexStore({ isLoading: true, entries: []})

      store.commit('journal/setEntries', journalState.entries)

      expect( store.state.journal.entries.length ).toBe(2)
      expect( store.state.journal.isLoading ).toBeFalsy()


    })

    test('mutation: updateEntry', () =>{
        //Create store
        const store = createVuexStore( journalState )

        //Updated entry
        const updatedEntry = {
                id: '-NAX5ZsEd9XsErd2py_s',
                date: "1661650966231",
                text: "ciber 1 updated"
            }
        
        // Commit de la mutation    
        store.commit('journal/updateEntry', updatedEntry)

        const storeEntries = store.state.journal.entries 

        //Expect
        expect( storeEntries.length ).toBe(2)

        // console.log(store.state.journal.entries.filter(e => e.id === updatedEntry.id )[0].id)
        // expect( store.state.journal.entries.filter(e => e.id === updatedEntry.id )[0].id).toEqual(updatedEntry.id)
        expect( storeEntries.find( e=> e.id === updatedEntry.id)).toEqual( updatedEntry )


    })

    test('mutation: addEntry deleteEntry', () =>{
        
        //Crear el store
        const store = createVuexStore( journalState )

        //Updated entry
        const addEntry = {
            id: '-NAX5ZsEd9XsErd2pdy_s',
            date: "1661650966231",
            text: "ciber 1 added"
        }

        store.commit('journal/addEntry', addEntry)

        let storeEntries = store.state.journal.entries

        expect( storeEntries.length ).toBe(3)
        expect( storeEntries.find( e=> e.id === addEntry.id)).toBeTruthy()

        store.commit('journal/deleteEntry', addEntry.id)

        storeEntries = store.state.journal.entries
        expect( storeEntries.length ).toBe(2)
        expect( storeEntries.find( e=> e.id === addEntry.id)).toBeFalsy()

    })

    test('Getters: getEntriesByTerm getEntryById', () =>{

        const store = createVuexStore( journalState )

        const [ entry1, entry2 ] = journalState.entries

        // console.log(entry2)

        // console.log(store.getters['journal/getEntriesByTerm'](''))
        expect(store.getters['journal/getEntriesByTerm']('').length).toBe(2)
        expect(store.getters['journal/getEntriesByTerm']('teradata').length).toBe(1)
        expect(store.getters['journal/getEntriesByTerm']('teradata')).toEqual([ entry2 ])


        expect(store.getters['journal/getEntryById']('-NAX5ZsEd9XsErd2py_s')).toEqual( entry1 )


    })

    test('Actions: loadEntries', async() =>{

        const store = createVuexStore({ isLoading: true, entries: []})

        await store.dispatch('journal/loadEntries')

        const storeEntries = store.state.journal.entries

        // console.log(storeEntries)

        expect( storeEntries.length ).toBe(4)

    })

    test('Actions: updateEntry', async() =>{

        const store = createVuexStore( journalState )

        const updatedEntry = {
            id: '-NAX5ZsEd9XsErd2py_s',
            date: "1661650966231",
            text: "ciber 1 updated",
            otroCampo: true
        }

        await store.dispatch('journal/updateEntry', updatedEntry)

        const storeEntries = store.state.journal.entries

        // console.log(storeEntries)

        expect( storeEntries.length ).toBe(2)
        expect( storeEntries.find( e => e.id === updatedEntry.id )).toEqual({             
            id: '-NAX5ZsEd9XsErd2py_s',
            date: "1661650966231",
            text: "ciber 1 updated"
        }) 
             
    
    })

    test('Actions: createEntry deleteEntry', async() =>{

        const store = createVuexStore( journalState )

        const newEntry = {
            date: "1661650966231",
            text: "new entry test",
        }

        const idNewEntry = await store.dispatch('journal/createEntry', newEntry)

        //El id debe ser un string
        expect( typeof idNewEntry ).toBe('string')
        // console.log( idNewEntry )

        let storeEntries = store.state.journal.entries

        // console.log(  storeEntries.find( e => e.id === idNewEntry) )

        // console.log( storeEntries.length ) //Se almacena en journalState

        expect( storeEntries.find( e => e.id === idNewEntry) ).toBeTruthy()



        //+++++++++++++++
        await store.dispatch('journal/deleteEntry', idNewEntry)
        storeEntries = store.state.journal.entries
        // console.log( storeEntries.length ) //Se borra  de journalState
        expect( storeEntries.find( e => e.id !== idNewEntry) ).toBeTruthy()
    
    })


})