<template>
  <div>
  {{msg}}
  <h1>{{count}}</h1>

  <p>

    <button @click="$store.commit('add',10)">添加</button>
     <button @click="reduce">减</button>
  </p>

  </div>
</template>

<script>
import  store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello 我是ldn'
    }
  },
  computed:mapState({
    count:state=>state.count
  }),
   methods:mapMutations([
        'add','reduce'
]),
  // computed:mapState({
  //   count:function(state){
  //     return state.count;
  //   }
  // }),
  store
}
 var Person = function(){}
Person.prototype.sayName = function() {
    alert('my name is 55')
}

Person.prototype.age = 12

var p = new Person()

p.sayName()              // test
console.log(p)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
