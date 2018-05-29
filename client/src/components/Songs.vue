<!-- // Client File -->

<template>
  <v-layout >
    <v-flex xs6 offset-xs3>
        <panel title="Songs">
                <v-btn
                    slot="action"
                    @click = "navigateTo({name: 'songs-create'})"
                    class="cyan accent-2"
                    light
                    medium
                    absolute
                    right
                    middle
                    fab>
                    <v-icon>add</v-icon>
                </v-btn>
            </router-link>
            </div>
            <div v-for="song in songs" 
            class="song"
            :key="song.id">
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
                            @click="navigateTo
                            ({
                                name: 'song', params: 
                                {songId: song.id}
                            })">
                            View 
                            {{title}}
                        </v-btn>


                    </v-flex>



                    <v-flex xs6>
                        <img class="album-image" :src="song.albumImageUrl"/>
                    </v-flex>

                </v-layout>
            </div>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
    components: {
        Panel
    },
    data () {
        return {
            songs: null
        }
    },
    async mounted () {
        //do a request to the back-end for fetching the records
        this.songs = (await SongsService.index()).data
    },

    methods: {
        navigateTo: function(router){
            this.$router.push(router)
        }
    }
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
