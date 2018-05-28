<!-- // Client File -->

<template>
  <v-toolbar fixed class="cyan" dark>
  
    <v-toolbar-title class="mr-4" >
        <span @click="navigateTo({name: 'root'})" class="home">
            TabTracker
        </span>
    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items>
  
    <v-spacer></v-spacer>

    <v-toolbar-items>
      
        <v-btn v-show="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'login'})" >Login</v-btn>

        <!-- The router link is one way but it changes the page/button link so routing has been implemented
        using a function -->
        <!-- <router-link to="register"> -->
            <v-btn v-show="$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'register'})" >Sign-up</v-btn>
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
      navigateTo: function(route) {
          this.$router.push(route)
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
