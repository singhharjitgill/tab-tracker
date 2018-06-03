//Client file
//This is used for hitting the registered back-end end-points.
import Api from '@/services/Api'

export default {
    index (bookmark) {
        return Api().get('bookmarks', {
             params: bookmark
        })
    },
    post (bookmark) {
        return Api().post('bookmarks', {bookmark})
    },  
    delete (bookmarkId) {
        return Api().delete(`bookmarks/${bookmarkId}`)
    },      
}
