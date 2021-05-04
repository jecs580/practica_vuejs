Vue.component('titulo',{
    template:`
      <div>
        <h1>numero {{numero}}</h1>
        <hijo></hijo>
      </div>
    `,
    computed:{
        ...Vuex.mapState(['numero'])
    }
});
Vue.component('hijo',{
    template:`
    <div>
        <h1>numero {{numero}}</h1>
        <button @click="add">+</button>
        <button @click="subtract(2)">-</button>
  </div>
    `,
    computed:{
        ...Vuex.mapState(['numero'])
    },
    methods:{
        ...Vuex.mapMutations(['add','subtract'])
    }
});
const store = new Vuex.Store({
    state:{
        numero:10
    },
    mutations:{
        add(state){
            state.numero++;
        },
        subtract(state,n){
            state.numero-=n;
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