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
        <button @click="getCourses">Obtener Cursos</button>
        <ul v-for="curso of cursos">
        <li>{{curso.nombre}}</li>
        </ul>
  </div>
    `,
    computed:{
        ...Vuex.mapState(['numero','cursos'])
    },
    methods:{
        ...Vuex.mapMutations(['add','subtract']),
        ...Vuex.mapActions(['getCourses'])
    }
});
const store = new Vuex.Store({
    state:{
        numero:10,
        cursos:[]
    },
    mutations:{
        add(state){
            state.numero++;
        },
        subtract(state,n){
            state.numero-=n;
        },
        llenarCursos(state,getCourses){
            state.cursos = getCourses
        }
    },
    actions:{
        // Sirve para hacer peticiones a API's y poder ejecutar una mutacion para guardarlo en nuestro estado.
         getCourses:async function({commit}){
            const data = await fetch('cursos.json');
            const cursos = await data.json();
            commit('llenarCursos',cursos);

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