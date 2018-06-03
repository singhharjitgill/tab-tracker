//Client file
//This is used for hitting the registered back-end end-points.
import Api from '@/services/Api'

export default {
    index (params) {
        return Api().get('histories', {
             params: params
        })
    },
    post (history) {
        return Api().post('histories', history)
    } 
}
