<template>
    <div>
        <span @click="handlepushrouter" class="back">{{name}}</span>
        <!-- <img :src="data1[index].img" alt=""> -->
        <h2>alo</h2>
    </div>
</template>
<script>
export default {
    name: 'Detailrputer',
    props: { data1: Array, id:Number },
    created() {
        this.name = this.$route.params.name
        // this.index = this.data1.findIndex(item => item.id === this.id)
        // console.log(this.data1);
        // console.log(this.id);
        console.log(this.$router);
        console.log(this.$route);

    },
    data() {
        return {
            name: "hieu",
            // index: 1
        }
    },
    methods:{
        handlepushrouter(){
            this.$router.push('/dynamicrouter')
        }
    }

}
</script>
<style>
    .back{
        border: solid tomato 2px;
        background-color: bisque;
        padding: 10px 40px;
        cursor: pointer;
        margin-left: 20px;
        border-radius: 10px;
    }
    h2{
        margin: 50px;
    }
</style>