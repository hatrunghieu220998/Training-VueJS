<template>
    <div>
        <p @click="handlepushrouter">{{name}}</p>
        <img src="" alt="">
    </div>
</template>
<script>
export default {
    name: 'Detailrputer',
    props: { data: Object },
    created() {
        this.name = this.$route.params.id
       
    },
    data() {
        return {
            name: "hieu",
        }
    },
    methods:{
        handlepushrouter(){
            this.$router.push('/dynamicrouter')
        }
    }

}
</script>