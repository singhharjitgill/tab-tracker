//Client file
//This is used for hitting the registered back-end end-points.
import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('songs', {
             params: {
                 search: search
            }
        })
    },
    
    show (songId) {
        return Api().get(`songs/${songId}`)
    },

    post (song) {
        return Api().post('songs', song)
    },

    put (song) {
        return Api().put(`songs/${song.id}`, song)
    }
}
