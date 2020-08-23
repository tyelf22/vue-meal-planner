<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="appBar"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/mealPlannerLogo2.png"
          transition="scale-transition"
          width="40"
        />
        <router-link id="mealPlannerTitle" to="/"><h1>Meal Planner</h1></router-link>
      </div>

      <v-spacer></v-spacer>
      <div class="navLinks">
        <router-link class="rLink" to="/profile">Profile</router-link>
        <router-link class="rLink" to="/register">Register</router-link>
        <router-link class="rLink" to="/login">Login</router-link>
      </div>

    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
 
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>
  #mealPlannerTitle{
    color: white;
    text-decoration: none;
  }

  .navLinks {
    margin-right: 10%;
  }
  .navLinks .rLink {
    padding-right: 20%;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }


</style>