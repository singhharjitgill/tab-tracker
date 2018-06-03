<!-- // Client File 
 //Songs/Index-->

<template>
  <v-layout >
    <v-flex xs6 v-if="isUserLoggedIn">
        <songs-bookmarks />
        <recently-viewed-songs class="mt-2" />
    </v-flex>
    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
    }" class="ml-2">
        <songs-search-panel class="mb-2"  />
        <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
// import Panel from '@/components/Panel'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'

export default {
    components: {
        // Panel,
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks,
        RecentlyViewedSongs
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
        // navigateTo: function(router){
        //     this.$router.push(router)
        // }
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
