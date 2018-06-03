//Client file
//API created for hitting different end-points
import axios from 'axios'
import store from '@/store/store'

export default () => {
    return axios.create({
        //Create and Return the connector to back-end
        baseURL: `http://localhost:8081/`,
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }

    })
}
