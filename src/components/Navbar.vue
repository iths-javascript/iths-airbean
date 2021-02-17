<template>
<div class="wrapper">
    
    <div class="links">
        <router-link to="/navigation">
            <img src="@/assets/navicon.svg" class="icon">
        </router-link>
        <img src="@/assets/bag.svg" class="icon" @click="toggleCart">
    </div>
    <Shopping-cart v-if="active"/>
</div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
    components: {ShoppingCart},
    data(){return{
        active: false
    }},
    methods: {
        toggleCart(){
            if(!this.active){
                this.active = true
            } else {
                this.active = false
            }
        }
    }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    background-color: cadetblue;
    padding: 2em;
}

.links{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    cursor: pointer;
}


</style>