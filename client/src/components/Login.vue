<!-- // Client File -->

<template>
  <v-layout >
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        
          <v-text-field 
            label="Email"
            v-model="email">
          </v-text-field>
          <br>
          <v-text-field 
            label="Password"
            type="password"
            v-model="password">
          </v-text-field>            
          <br>
          <div v-show="error" flat dense class="cyan" dark style="color: white;" v-html="error">
          </div>
          <br>
          <v-btn dark class="cyan"  @click="login">Login</v-btn>
        
      </panel>
    </v-flex>
  </v-layout>


</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
// import Panel from '@/components/Panel'

export default {
  
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login (){
      this.error = null
      try {
       const response = await AuthenticationService.login({
         email: this.email, 
         password: this.password,
       })
      
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)

      this.$router.push({name: 'songs'})
      } catch(error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    // Panel
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
