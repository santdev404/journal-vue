import uploadImage from '@/modules/daybook/helpers/uploadImage'   
import 'setimmediate'
import cloudinary from 'cloudinary'
import axios from 'axios'


cloudinary.config({
    cloud_name: 'dfpv1v8yu',
    api_key: '886457724186984',
    api_secret: '9jq_U2urUFF6QjxbnQsUQCJ-KKM'
})

describe('Pruebas en el upload Image', () =>{

    test('debe de cargar un archivo y retornar el url', async( /*done*/ ) =>{

        const {data} = await axios.get('https://res.cloudinary.com/dfpv1v8yu/image/upload/v1661650919/e3ipmqharsdmkkxfmezl.jpg',{
            responseType: 'arraybuffer'
        })

        const file = new File([ data], 'foto.jpg')

        
        const url = await uploadImage(file)

        expect( typeof url).toBe('string')

        const segments = url.split('/')
        // console.log(segments)
        const imageId = segments[ segments.length - 1 ].replace('.jpg','')

        cloudinary.v2.api.delete_resources( imageId, {}, () =>{
            // done()
        })


    })

})