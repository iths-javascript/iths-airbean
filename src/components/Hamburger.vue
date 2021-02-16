<template>
    <div class="test" v-on:click="testMethod">CLICK HERE!!!!
        <p class="alex">CODE NINJAH</p>
        <p class="alex">DETTA BLIR 1A</p>
    </div>
</template>


<script>
export default {
    name: 'Hamburger',
    methods: {
        testMethod(){
            const x = document.getElementsByClassName("alex")[0]
            x.style.display = "block"
        }
    }
}
</script>


<style>

.alex {
    display: none;
}

</style>