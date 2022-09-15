<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

    <Fab
    @on:click="createNewEntry" 
    :icon="icon"/>

</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {

    name: 'NoEntrySelected',

    data(){
        return{
            icon: "fa-plus"
        }
    },

    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    },
    methods:{
        createNewEntry(){
            this.$router.push({ name: 'entry', params: { id: 'new' }})
        }
    }


}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>
