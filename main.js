var app = new Vue({
    el:'#app',
    data:{
       title:'GYM con Vue',
       tasks:[

       ],
       newTask:''
    },
    methods:{
        addTask(){
            this.tasks.push({
                name:this.newTask,
                state:false
            });
            this.newTask=''
            localStorage.setItem('gym-local',JSON.stringify(this.tasks))
        },
        doneTask(i){
            this.tasks[i].state=true;
            localStorage.setItem('gym-local',JSON.stringify(this.tasks))
        },
        deleteTask(i){
            this.tasks.splice(i,1);          
            localStorage.setItem('gym-local',JSON.stringify(this.tasks))
        }
    },
    created(){
        let datosLS=JSON.parse(localStorage.getItem('gym-local'));
        if(datosLS=== null){
            this.tasks=[];
        }else{
            this.tasks=datosLS;
        }
    }
})