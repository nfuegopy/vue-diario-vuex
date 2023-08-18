import { createStore } from 'vuex'
import jorunal from '../modules/diario/store/journal'
const store = createStore({
modules:{
    jorunal
}

})

export default store