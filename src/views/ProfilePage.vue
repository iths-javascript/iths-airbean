<template>
<div>
    <h1 id="h1" v-if="visible" v-on:click="LoggIn"><router-link to="/">Profilepage Ska visas EN gång. Klick på DEN!</router-link></h1>
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

            const x = document.getElementById("h1")
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


</style>