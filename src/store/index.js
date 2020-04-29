import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meals: [
      {
        id: 1,
        type: 'main',
        name: 'hamburgers',
        sides: ['fries', 'onion rings', 'baked beans']
      },
      {
        id: 2,
        type: 'main',
        name: 'baked potato bar',
        sides: ['broccoli', 'green salad', 'rolls', 'scones']
      },
      {
        id: 3,
        type: 'main',
        name: 'chicken maccaroni casserole',
        sides: []
      },
      {
        id: 4,
        type: 'main',
        name: 'shepards pie',
        sides: []
      },
      {
        id: 5,
        type: 'main',
        name: 'pork chops',
        sides: []
      },
      {
        id: 6,
        type: 'main',
        name: 'chicken enchiladas',
        sides: ['chili con queso', 'onion rings', 'baked beans']
      },
      {
        id: 7,
        type: 'main',
        name: 'roast',
        sides: ['potatoes', 'carrots']
      },
      {
        id: 8,
        type: 'main',
        name: 'puffy oven pancakes',
        sides: ['bacon', 'sausage']
      },
      {
        id: 9,
        type: 'main',
        name: 'spaghetti & meatballs',
        sides: ['green salad', 'french bread']
      },
      {
        id: 10,
        type: 'main',
        name: 'potato ham cheese soup',
        sides: ['rolls']
      },
      {
        id: 11,
        type: 'main',
        name: 'navajo tacos',
        sides: []
      },
      {
        id: 12,
        type: 'main',
        name: 'italian chicken',
        sides: ['twice baked potatoes', 'mashed garlic potatoes']
      },
      {
        id: 13,
        type: 'main',
        name: 'french dip sandwhiches',
        sides: ['potato salad']
      },
      {
        id: 14,
        type: 'main',
        name: 'pot pie',
        sides: ['rolls', 'bread']
      },
      {
        id: 15,
        type: 'main',
        name: 'french toast',
        sides: ['sausage', 'bacon']
      },
      {
        id: 16,
        type: 'main',
        name: 'broccoli cheese soup',
        sides: ['rolls']
      },
      {
        id: 17,
        type: 'main',
        name: 'garden chowder',
        sides: ['rolls']
      },
      {
        id: 18,
        type: 'main',
        name: 'tacos',
        sides: []
      },
      {
        id: 19,
        type: 'main',
        name: 'lasagna',
        sides: ['green salad', 'french bread']
      },
      {
        id: 20,
        type: 'main',
        name: 'porcupine meatballs',
        sides: ['mashed potatoes']
      },
      {
        id: 21,
        type: 'main',
        name: 'barbequed beef sandwhiches',
        sides: ['fries', 'onion rings']
      },
      {
        id: 22,
        type: 'main',
        name: 'marinated chicken',
        sides: []
      },
      {
        id: 23,
        type: 'main',
        name: 'quiche',
        sides: ['scones']
      },
      {
        id: 24,
        type: 'main',
        name: 'chicken broccoli casserole',
        sides: []
      },
      {
        id: 25,
        type: 'main',
        name: 'stir fry & rice',
        sides: []
      },
      {
        id: 26,
        type: 'main',
        name: 'pizza',
        sides: ['salad']
      },
      {
        id: 27,
        type: 'main',
        name: 'ham',
        sides: ['hashbrown potatoes']
      },
      {
        id: 28,
        type: 'main',
        name: 'rice pilaf',
        sides: ['green beans']
      },
      {
        id: 29,
        type: 'main',
        name: 'chicken strips',
        sides: ['potato salad']
      },
      {
        id: 30,
        type: 'main',
        name: 'chicken roll-ups',
        sides: ['carrots', 'brocolli', 'rice']
      },
      {
        id: 31,
        type: 'main',
        name: 'chicken noodle soup',
        sides: ['bread']
      },
      {
        id: 32,
        type: 'main',
        name: 'crock pot chile verde',
        sides: []
      },
      {
        id: 33,
        type: 'main',
        name: 'stuffing chicken bake',
        sides: []
      },
      {
        id: 34,
        type: 'main',
        name: 'yogurt chicken',
        sides: []
      },
      {
        id: 35,
        type: 'main',
        name: 'chicken salad',
        sides: []
      },
      {
        id: 36,
        type: 'main',
        name: 'ramen noodle stir fry',
        sides: []
      },
      {
        id: 37,
        type: 'main',
        name: 'turkey soup',
        sides: []
      },
      {
        id: 38,
        type: 'main',
        name: 'taco soup',
        sides: []
      },
      {
        id: 39,
        type: 'main',
        name: 'chicken broccoli alfredo',
        sides: []
      },
      {
        id: 40,
        type: 'main',
        name: 'crock pot chicken pie',
        sides: []
      },
      {
        id: 41,
        type: 'main',
        name: 'barbeque chicken sandwhich',
        sides: []
      },
      {
        id: 42,
        type: 'main',
        name: 'taco bake',
        sides: []
      },
      {
        id: 43,
        type: 'main',
        name: 'chicken ceasar wrap',
        sides: []
      },
      {
        id: 44,
        type: 'main',
        name: 'chicken cordon bleu casserole',
        sides: []
      },
      {
        id: 45,
        type: 'main',
        name: 'bubble pizza',
        sides: []
      },
      {
        id: 46,
        type: 'main',
        name: 'crock pit chicken & stuffing',
        sides: []
      },
      {
        id: 47,
        type: 'main',
        name: 'meatload',
        sides: []
      },
      {
        id: 48,
        type: 'main',
        name: 'sloppy joes',
        sides: []
      },
      {
        id: 49,
        type: 'main',
        name: 'chili con queso casserole',
        sides: []
      },
      {
        id: 50,
        type: 'main',
        name: 'taco salad',
        sides: []
      },
      {
        id: 51,
        type: 'main',
        name: 'beef oles',
        sides: []
      },
      {
        id: 52,
        type: 'main',
        name: 'nachos',
        sides: []
      },
      {
        id: 53,
        type: 'main',
        name: 'chicken fajitas',
        sides: []
      },
      {
        id: 54,
        type: 'main',
        name: 'chicken parmesan nuggets',
        sides: []
      },
      {
        id: 55,
        type: 'main',
        name: 'mexican tortilla casserole',
        sides: []
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
