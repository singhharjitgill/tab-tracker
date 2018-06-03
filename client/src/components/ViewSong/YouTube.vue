<!-- // Client File -->

<template>
    <panel title="You Tube Video" >
        <youtube
            :video-id="youtubeId"
            :player-width = "500"
            :player:height = "200"
        >
        </youtube>
    </panel>
</template>

<script>

// import Panel from '@/components/Panel'
import VueYouTubeEmbeeded from 'vue-youtube-embed'

export default {
    props: [
      'youtubeId'
    ],
    components: {
        // Panel,
        VueYouTubeEmbeeded
    }

 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
