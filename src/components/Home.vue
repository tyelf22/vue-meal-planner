<template>
  <v-container>
    <v-row>
      <v-col v-for="meal in meals" :key="meal.id">
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            width="380"
          >
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title>{{meal.name}}</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 subtitle-1">
                Popular Sides
              </div>
              <div v-for="(sides, i) in meal.sides" :key="i">{{sides}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
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
  }
</script>
