import daybookRouter from '@/modules/daybook/router/index.js'

describe('pruebas en el router module del Daybook', () =>{

    test('el router debe de tener esta configuracion', async() =>{
        
        expect( daybookRouter ).toMatchObject({
            name: 'daybook',
            component: expect.any( Function ),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any( Function ),

                },
                {
                    path: ':id', // route /daybook/:id -> /daybook/1
                    name: 'entry',
                    component: expect.any( Function ),
                    props: expect.any( Function ),
                    
                }
            ]
        })

        // expect( (await daybookRouter.children[0].component()).default.name ).toBe('NoEntrySelected')
        // expect( (await daybookRouter.children[1].component()).default.name ).toBe('EntryView')

        const promiseRoute = []

        daybookRouter.children.forEach( child => promiseRoute.push( child.component() ) )

        const routes = (await Promise.all( promiseRoute )).map( r => r.default.name )

        expect( routes ).toContain('NoEntrySelected')
        expect( routes ).toContain('EntryView')



    })

    test('debe de retornar el id de la ruta', () =>{
        
        const route = {
            params: {
                id: 'ABC-123'
            }
        }

        // expect( daybookRouter.children[1].props( route ) ).toEqual({ id: 'ABC-123'}) 

        const entryRoute = daybookRouter.children.find( route => route.name === 'entry')

        expect( entryRoute.props( route )).toEqual({ id: 'ABC-123' })


    })

})