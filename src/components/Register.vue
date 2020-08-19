<template>
    <div>
        <h1>Register page</h1>

        <input 
          v-model="email"
          type="email" 
          name="email" 
          placeholder="email" />
          <br>
        <input 
        v-model="password"
          type="password" 
          name="password" 
          placeholder="password" />
          <br>
        <v-btn @click="register" color="primary">Register</v-btn>
    </div>
</template>

<script>
  import AuthenticationService from '../services/authenticationService'
  export default {
    name: 'register',

    data() {
      return {
        email: '',
        password: '',

      }    
    },
    methods: {
      async register() {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    }
  }
</script>

<style scoped>

</style>