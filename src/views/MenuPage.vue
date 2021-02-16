<template>
<div>
    <h1>MENU PAGE</h1>

    <ul>
        <li> {{fetchProducts}}
         </li>
    </ul>    

</div>
    
</template>


<script>
import fetchProducts from '@/api/mock.js'

export default {
    name: "MenuPage",

    methods : {
            fetchProducts : fetchProducts,
        }
    }

</script>

<style scoped>

</style>