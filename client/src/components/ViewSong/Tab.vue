<!-- // Client File -->

<template>
    <panel title="Tab">
        <textarea 
            readonly
            v-model="song.tab">
        </textarea>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    },
    props: [
      'song'
  ]
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    height: 600px;
    padding: 20px;
}
</style>
