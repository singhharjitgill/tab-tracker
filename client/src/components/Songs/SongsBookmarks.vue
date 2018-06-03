<!-- // Client File -->

<template>
    <panel title="Bookmarks">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="bookmarks"
        >
        <template slot="items" scope="props" >
            <td class="text-xs-right">
                {{props.item.title}}
            </td>

            <td class="text-xs-right">
                {{props.item.artist}}
            </td>

        </template>
        
        </v-data-table>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarkService'
export default {
    data () {
        return {
            headers: [
                {
                    text: 'Title',
                    value: 'title'
                },
                {
                    text: 'Artist',
                    value: 'artist'
                },
            ],
            pagination: {
                sortBy: 'createdAt',
                descending: true
            },
            bookmarks: []
        }
    },
    computed: {
      ...mapState([
        'isUserLoggedIn',
        'user'
      ])
    },
    async mounted () {
        
        if (this.isUserLoggedIn) {
            console.log(this.user.id)
            this.bookmarks = (await BookmarkService.index()).data
        }
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
