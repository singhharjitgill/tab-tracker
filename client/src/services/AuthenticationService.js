//Client file
//This is used for hitting the registered back-end end-points.
import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    },
    login(credentials) {
        return Api().post('login', credentials)
    }


}
