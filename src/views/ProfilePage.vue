<template>
<div>
<div>
    <h1>Välkommen till<br> Airbean-familjen!</h1>
    <h4>Genom att skapa ett konto nedan kan<br> du sparaoch se din orderhistorik</h4>
</div>
<label for="name">Name</label><br>
<input type="text" id="name" name="name" required
       size="30">
       <div>
<label for="name">E-post</label><br>
<input type="text" id="name" name="name" required
       size="30" placeholder="sohail/Alex">
       </div> 
       <div><input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>
</div>


   <div> <router-link to="/menu">
    <button v-if="visible" v-on:click="LoggIn">
       Brew me a cup 
    </button>
    </router-link>
    <h1 id="header1" v-if="notvisible">Profilepage. Ska visas efter att man loggat in</h1>
</div>
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
h1{
    font-family: PT Serif;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 38px;
letter-spacing: 0em;
text-align: center;

}
h4{font-family: Work Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;


}
    input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
label{
    position:absolute;
    font-family: Work Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
left: 10px;
}
button{
position: center;
width: 248px;
height: 55px;
left: 64px;
top: 450px import !important;
color:white;
font-size: 22px;
font-weight: 700;
/* Airbean - brown */

background: #2F2926;
border-radius: 50px;
}
</style>