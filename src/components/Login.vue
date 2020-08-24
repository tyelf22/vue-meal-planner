<template>
    <form @submit.prevent="loginUser">
        <div class="loginCard">
            <v-row
            align="center"
            justify="center"
            >
            <v-col
                cols="12"
                sm="8"
                md="4"
            >
                <v-card class="elevation-6">
                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                    <v-text-field
                        label="Username"
                        name="username"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="username"
                    ></v-text-field>

                    <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        v-model="password"
                    ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <input type="submit" color="primary" value="login">
                    <router-link  class="ml-3 cardLink" to="/register">Need an account?</router-link>
                </v-card-actions>
                </v-card>
            </v-col>
            </v-row>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        ...mapActions(['login']),
        loginUser(){
            let user = {
                username: this.username,
                password: this.password
            }
            this.login(user)
            .then(res => {
                if(res.data.success){
                    this.$router.push('/profile')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
    .loginCard{
        margin-top: 2rem;
    }
    .cardLink {
        text-decoration: none;
    }
</style>