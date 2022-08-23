<template>
    <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10}})">

        <!-- title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>

        </div>


        <div class="entry-description">
            Consequat magna dolore eu irure incididunt labore cillum amet ad dolore in. Adipisicing exercitation ad ea anim irure tempor nisi voluptate reprehenderit incididunt incididunt proident. Reprehenderit elit esse id voluptate adipisicing laboris consequat. Dolor dolor nulla cillum exercitation id qui eu proident aute tempor nulla officia consequat. Nulla consectetur dolore occaecat sit. Commodo eiusmod dolore ad exercitation aliqua velit consequat laborum sunt.
        </div>



    </div>



</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;

    }

    entry-description{
        font-size: 12px;
    }

}

.entry-title{

}

.entry-description{

}
</style>