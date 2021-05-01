Vue.component('hijo',{
    template:`
        <div class="py-5 bg-success">
            <h4>Componente hijo {{numero}}</h4>
            <h4>Nombre: {{name}}</h4>
        </div>
    `,
    props:['numero'],
    data(){
        return{ 
            name:'Jorge Callisaya',
        }
    },
    mounted(){
        this.$emit('nameChild',this.name);
    }
})