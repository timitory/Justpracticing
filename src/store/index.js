import { createStore } from 'vuex'

export default createStore({
  state: {
    names:'Bayo',
    age:25,
    data:'',
    destinations:[],
  },
  
  getters: {
    ChangeName:(state)=>{
      const data=state.names ? state.names:'There'
      return data;
     },
     destinations:(state)=>{
      return state.destinations
     }

  },
  mutations: {
    setProduct(state,destinations){
     state.destinations=destinations
     
    }
  },
  actions: {
    async Fetcher({ commit }) {
      try {
        const response = await fetch('/data.json');
        const destinations = await response.json();
        console.log(destinations)
        commit('setProduct', destinations);
      } catch (error) {
        console.log('error', error);
      }
    },
      
},
  modules: {
  }
})
