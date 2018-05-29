//Client file
//This is used for hitting the registered back-end end-points.
import Api from '@/services/Api'

export default {
    index () {
        return Api().get('songs')
    },
    post (song) {
        return Api().post('songs', song)
    }
}
