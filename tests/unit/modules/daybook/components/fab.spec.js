import { shallowMount } from "@vue/test-utils"
import Fav from '@/modules/daybook/components/Fab.vue'


describe('Prueba en el FA component', () =>{

    test('debe de mostrar el icono por defecto', () =>{

        const wrapper = shallowMount(Fav)

        const iTag = wrapper.find('i')

        expect(iTag.classes()).toContain('fa-plus')

        
        // fa-plus
    })

    test('debe mostrar el icono por argumento: fa-circle', () =>{
        // fa-circle
        const wrapper2 = shallowMount(Fav, {
            props: {
                icon: 'fa-circle'
            }
        })

        const iTag = wrapper2.find('i')

        expect(iTag.classes()).toContain('fa-circle')
    })

    test('debe de emitir el evento on:click cuando se hace click', () =>{

        // wrapper.emmited('on:click)
        const wrapper = shallowMount(Fav)

        wrapper.find('button').trigger('click')

        expect( wrapper.emitted('on:click').length).toBe(1)

 
    
    })

})