<!-- // Client File -->

<template>
    <panel title="Song" style="height: 480px">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
                </div>

                <div class="song-artist">
                    {{song.artist}}
                </div>

                <div class="song-genre">
                    {{song.genre}}
                </div>

                    <v-btn 
                        dark 
                        class="cyan"  
                        :to="{
                            name: 'song-edit', 
                            params: {songId: song.id}
                        }">
                        Edit 
                    </v-btn>

                    <v-btn
                        v-if="(isUserLoggedIn && !bookmark)"
                        dark 
                        class="cyan"  
                        @click="setAsBookmark">
                        Set As Bookmark
                    </v-btn>

                    <v-btn
                        v-if="(isUserLoggedIn && bookmark)"
                        dark 
                        class="cyan"  
                        @click="unSetAsBookmark">
                        Unset Bookmark 
                    </v-btn>

            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl"/>
                <br>
                {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
// import Panel from '@/components/Panel'
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarkService'
export default {
    data () {
        return {
            bookmark: null
        }
    },
    components: {
        // Panel
    },
    props: [
      'song'
  ],

//watch : {
async mounted () {

    if (!this.isUserLoggedIn) {
        return ;
    }
    try { 
            const bookmarks = (await BookmarkService.index({
                songId: this.song.id
                // userId: this.user.id
            })).data
            if (bookmarks.length) {
                this.bookmark = bookmarks[0]
            }
        } catch (err) {
            console.log(err)
        }
//    }   
},
    
  methods: {
      async setAsBookmark () {
       //<!-- console.log(this.$store.state.user.id, this.song.id) -->
       try {
            this.bookmark = (await BookmarkService.post({
              songId: this.song.id
              // userId: this.user.id
            })).data
        } catch (err) {
            console.log("Internal Error Occured: ",  err)
    }
},
      async unSetAsBookmark () {
        console.log(`Un-Bookmark called for : ${this.bookmark.id}`)
       try {
            await BookmarkService.delete(this.bookmark.id)
            this.bookmark = null
        } catch (err) {
            console.log(err)
    }
},

      //navigateTo(route) {
      //    this.$router.push(route)
      //  }
     },
  computed: {
      ...mapState([
        'isUserLoggedIn',
        'user'
      ])
  },

 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
.song-title{
    font-size: 30px;
}

.song-artist{
    font-size: 24px;
}

.song-genre{
    font-size: 18px;
}

.album-image {
    width: 70%;
    margin: 0 auto;
}

</style>
