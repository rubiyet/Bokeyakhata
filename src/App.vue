<template>
  <div class="container">
    <compHeader :allname="allname"/>
    <compbody/>
    <p>{{name}} {{age}}</p>
    <compFooter :name="name"/>
  </div>
</template>

<script>
import compFooter from './components/header_footer/footer.vue';
import compbody from './components/body.vue';
export default {
  data() {
    return {
      name: "Adi",
      age : 23,
      allname: ['adi','aditta']
    }
  },
  components: {
    compFooter,
    compbody,
  }
}
</script>

<style>
  div{
    color:blue;
    font-size: 22px;
  }
  body{
    font-family: 'Open Sans Condensed', sans-serif;
  }
</style>
 