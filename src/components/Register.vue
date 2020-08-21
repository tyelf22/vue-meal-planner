<template>
    <v-container class="d-flex flex-column justify-center">
        <h1>Register page</h1>

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :counter="8"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn :disabled="!valid" @click="register" max-width="100px" color="primary">Register</v-btn>
      </v-container>
    </v-form>
    

    </v-container>
</template>

<script>
  import AuthenticationService from '../services/authenticationService'
  export default {
    name: 'register',

    data() {
      return {
        valid: false,
        password:'',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 8 || 'Password must be more than 8 characters long',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
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