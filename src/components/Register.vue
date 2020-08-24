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
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            
          </v-col>
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
          
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              type="text"
              label="Username"
              name="username"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :counter="8"
              type="password"
              label="Password"
              name="password"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="confirmPassword"
              :rules="passwordRules"
              :counter="8"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn :disabled="!valid" @click="register" max-width="100px" color="primary">Register</v-btn>
        <router-link class="cardLink ml-3" to="/login">Already have an account?</router-link>
      </v-container>
    </v-form>
    

    </v-container>
</template>

<script>
  //import AuthenticationService from '../services/authenticationService'
  export default {
    name: 'register',

    data() {
      return {
        name: '',
        nameRules: [
          v => !!v || 'Name is required'
        ],
        username: '',
        usernameRules: [
          v => !!v || 'Username is required'
        ],
        valid: false,
        password:'',
        confirmPassword: '',
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
      // async register() {
      //   const response = await AuthenticationService.register({
      //     email: this.email,
      //     password: this.password
      //   })
      //   console.log(response.data)
      // }
    }
  }
</script>

<style scoped>
  .cardLink{
    text-decoration: none;
  }
</style>