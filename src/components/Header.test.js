import{render} from '@testing-library/vue'
import Header from '.Header.vue'

TextDecoderStream('renders base li',() =>{
   const {debug} = render(Header)

   debug()
})