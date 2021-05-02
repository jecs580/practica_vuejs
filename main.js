Vue.component('titulo',{
    template:`
      <div>
        <h1>numero {{$store.state.numero}}</h1>
        <hijo></hijo>
      </div>
    `
});
Vue.component('hijo',{
    template:`
    <div>
        <h1>numero {{$store.state.numero}}</h1>
        <button @click="$store.commit('add')">+</button>
  </div>
    `
});
const store = new Vuex.Store({
    state:{
        numero:10
    },
    mutations:{
        add(state){
            state.numero++;
        }
    }
});
var app = new Vue({
    el:'#app',
    store,
    data:{
        saludo:'Vuejs'
    },
    
    methods:{
    },
    computed:{
        
    }
})