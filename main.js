var app = new Vue({
    el:'#app',
    data:{
        saludo:'Ciclo de vida de Vuejs'
    },
    beforeCreate(){
        console.log('BeforeCreate');
    },
    created(){
        // Se ejecuta cuando ya estan creados los metodos, eventos, pero aun no se puede acceder al DOM
        console.log('Created');
    },
    beforeMount(){
        // Se ejecuta antes de insertar al DOM (Antes que se use Vuejs en el html)
        console.log('BeforeMount');
    },
    mounted(){
    //    Se ejecuta al insertar el DOM 
        console.log('Mounted');
    },
    beforeUpdate(){
        // Al detectar un cambio en el Html o en la instancia de Vuejs
        console.log('BeforeUpdate');
    },
    updated(){
        // Al realizar un cambio en el Html o en la instancia de Vuejs
        console.log('Updated');
    },
    beforeDestroy(){
        // Antes de destruir la instacion
        console.log('BeforeDestroy');
    },
    destroyed(){
        // Se destruye toda la instancia
        console.log('destroyed');
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    },
    computed:{
        
    }
})