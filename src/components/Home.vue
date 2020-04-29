<template>
  <v-container>
    <v-row>
      <v-col v-for="meal in meals" :key="meal.id">
        <v-img class="white--text align-end" width="350" height="200" src="https://via.placeholder.com/350">

        </v-img>
        <v-card width="350px">
          <v-card-title>{{meal.name}}</v-card-title>
          <v-card-subtitle class="pb-0">{{getSides(meal.sides)}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'HelloWorld',

    data() {
      return {
        test: 'This is a test'
      }    
    },
    computed: {
      ...mapState(['meals'])
    },
    methods: {
      getSides(sides) {
        console.log(sides)
      }
    }
  }
</script>
