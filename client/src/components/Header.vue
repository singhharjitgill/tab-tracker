<!-- // Client File -->

<template>
  <v-toolbar fixed class="cyan" dark>
  
    <v-toolbar-title class="mr-4" >
        <router-link tag="span" :to="{name: 'songs'}" class="home">
            TabTracker
        </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
        <!--
        <v-btn flat dark>
            Browse
        </v-btn> -->

        <v-btn 
            flat 
            dark 
            :to="{name: 'songs'}" >
            Browse
        </v-btn>

    </v-toolbar-items>
  
    <v-spacer></v-spacer>

    <v-toolbar-items>
      
        <v-btn v-show="!$store.state.isUserLoggedIn" flat dark :to="{name: 'login'}" >Login</v-btn>

        <!-- The router link is one way but it changes the page/button link so routing has been implemented
        using a function -->
        <!-- <router-link to="register"> -->
            <v-btn v-show="!$store.state.isUserLoggedIn" flat dark :to="{name: 'register'}" >Sign-up</v-btn>

            <v-btn v-show="$store.state.isUserLoggedIn" flat dark @click="logout" >Logout</v-btn>
        <!--</router-link> -->
    </v-toolbar-items>
  
  </v-toolbar>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  
  data () {
  },
  
  methods: {
    //   navigateTo: function(route) {
    //       this.$router.push(route)
    //   },
      logout () {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
          
          this.$router.push({
            name: 'songs'
          })
      }
  }
}

</script>
<style scoped>
.home {
    cursor: pointer;
}

.home:hover {
    color: #18FFFF;
}
</style>
