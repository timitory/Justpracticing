<template >
    <div>
        <slot></slot>
        {{ this.names + ' '+'Is a kind hearted man'  }}
        <AboutView :names="names"><slot name="sidebar"></slot></AboutView>
       <p> Hi {{ChangeName}}</p>
       <a @click="handleClick('Do Something',$event)">Click me!</a>
      
    </div> 
    <div>
        <p v-for="destination in destinations.destinations" :key="destination.id">{{ destination.name}}</p>
        <p v-for="product in products" :key="product.id">{{ product.name }}</p>
        <p v-for="destination in destinations.destinations" :key="destination.id">{{ destination.name }}</p>
    </div>                                                                                                                                                                     
</template>

<script>
import { mapGetters, mapState } from "vuex";
import AboutView from "./AboutView.vue";
import destinations from '../../public/data.json'
import store from "@/store";

export default{
    name:'TestView',
    components:{
        AboutView 
    },
    data(){
        return {
            // names:'Bayo',
            // age:25
             products:[],
            // destinations:[]
        }
    },
    
    computed:{
        ...mapState([
            'names',
            'age',
            'data',
            
        ]),
        ...mapGetters(['ChangeName','destinations']),
    // destinations(){
    //     return this.$store.getters.destinations
    // }
        // Change:()=>{
        //     return this.$store.data
        // }
    //    destinations(){
    //     return store.state.destinations
    //    }
        
       
        
    },
   
  created() {
    this.callProduct();
  },

    methods: {
    handleClick: function(text,event) {
    console.log(event)
    console.log(text)
        },
    handleClickInParent:function(){

    },
    callProduct() {
      this.$store.dispatch('Fetcher');
    }
    }
}

</script>
<style>

</style>