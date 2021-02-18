<template>
<div>
    <router-link to="/menu">
    <button v-if="visible" v-on:click="LoggIn">
       Brew me a cup 
    </button>
    </router-link>
    <h1 id="header1" v-if="notvisible">Profilepage. Ska visas efter att man loggat in</h1>
    
    </div>
    
</template>


<script>
export default {
    data() { return {
        visible: true,
        notvisible : false
    }},
    name: "ProfilePage",


    methods: {
        LoggIn(){
            localStorage.setItem("inloggad", "true")

            const x = document.getElementsByTagName("button")[0]
            x.style.display = "none"          
            
            const y = document.getElementById("header1")
            y.style.display = "block"
        }
    },

    created(){
        //const y = document.getElementById("header1")

        if(localStorage.getItem("inloggad")){     
            this.visible = false
            this.notvisible = true
            //y.style.display = "block"
        }
    }
}
</script>


<style scoped>
button{
position: center;
width: 248px;
height: 55px;
/* left: 64px;
top: 450px; */
color:white;
font-size: 22px;

/* Airbean - brown */

background: #2F2926;
border-radius: 50px;
}
</style>