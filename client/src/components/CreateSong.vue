<!-- // Client File -->

<template>
<v-layout>
    <v-flex xs4>
        <panel title="Song Metadata">
            <v-text-field 
                label="Title"
                    required
                    :rules="[required]"
                    v-model="song.title">
                </v-text-field> 

                <v-text-field 
                    label="Artist"
                    required
                    :rules="[required]"
                    v-model="song.artist">
                </v-text-field>

                <v-text-field 
                    label="Genre"
                    required
                    :rules="[required]"
                    v-model="song.genre">
                </v-text-field> 

                <v-text-field 
                    label="Album"
                    required
                    :rules="[required]"
                    v-model="song.album">
                </v-text-field> 

                <v-text-field 
                    label="Album Image Url"
                    required
                    :rules="[required]"
                    v-model="song.albumImageUrl">
                </v-text-field> 

                <v-text-field 
                    label="YouTube Id"
                    required
                    :rules="[required]"
                    v-model="song.youtubeId">
                </v-text-field> 
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
                <v-text-field 
                    label="Lyrics"
                    required
                    :rules="[required]"
                    multi-line
                    v-model="song.lyrics">
                </v-text-field>

                <v-text-field 
                    label="Tab"
                    required
                    :rules="[required]"
                    multi-line
                    v-model="song.tab">
                </v-text-field> 
            </panel>
            
            <div class="dangerAlert" v-if="error">
                {{error}}
            </div>
                
            <v-btn 
                dark 
                class="cyan"  
                @click="create">Create Song
            </v-btn>

        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
      return {
              song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },
             error: null,
             required: (value) => !!value || 'Required'
      }
  },
  components:{
      Panel
  },
  methods:{
      async create () {
          //call API
          this.error = null
          const allAllTheFieldsFilledIn = Object
            .keys(this.song)
            .every(key => !!this.song[key])

            if (!allAllTheFieldsFilledIn) {
                this.error = 'Please fill values in all the fields before saving.'
                return
            }

          try {
            await SongsService.post(this.song)
            this.$router.push(({
                name: 'songs'
            }))
          } catch (err) {
              console.log(err)
          }
      }
  }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dangerAlert {
    color: red;
}

</style>
