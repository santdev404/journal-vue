import { shallowMount } from "@vue/test-utils"
import About from '@/views/AboutView'



describe('Prueba en el About View', () =>{
    test('test de renderizar el componente correctamente', () =>{
        
        const wrapper = shallowMount(About)
        expect( wrapper.html()).toMatchSnapshot()

    })
})