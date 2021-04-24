var app = new Vue({
    el:'#app',
    data:{
        saludo:'Hello world from Vuejs',
        fruits:[
            {
            'name':'apple',
            'cantidad':10
            },
            {
            'name':'banana',
            'cantidad':3
            },
            {
            'name':'orange',
            'cantidad':0
            }
        ],
        newFruit:'',
        total:0
    },
    methods:{
        addFruit(){
            if(this.newFruit!=''){
                this.fruits.push({
                    name:this.newFruit,
                    cantidad:0
                })
                this.newFruit='';
            }
        }
    },
    computed:{
        // Ejecuta una funcion cada vez q cambien los datos que esta dentro de su funcion
        sumarFruit(){
            this.total=0;
            for (const fruit of this.fruits) {
                this.total+=fruit.cantidad;
            }
            return this.total;
        }
    }
})