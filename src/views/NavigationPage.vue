<template>
    <div>        
        <router-link to="/menu">Meny</router-link>
        <router-link to="/about">Vårt kaffe</router-link>
        <router-link to="/profile">Min profil</router-link>
        <router-link to="/profile">Orderstatus</router-link>
        
    </div>
</template>


<script>
export default {
    name: "NavigationPage",
}
</script>


<style scoped>

div {
    /*background-color: black;*/
    color: white;
}

</style>