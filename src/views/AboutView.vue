<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ names }}</h2>
   <ul slot="sidebar">
    <li>Name</li>
    <li>Career</li>
    <li>School</li>
   </ul>

  </div>
</template>
<script>

export default {
  name:'about',
  props:['names'],
  components:{
    
  },
}
</script>