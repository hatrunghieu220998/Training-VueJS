<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{item}}  <button type="button" @click="$emit('handleClick', index)">X</button></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'propsChild',
        props:{
            items: {
                type: [Array, Number],
                required: true,
                default:['hom nay', 'di lam'] || 2
            }
        }
        // methods:{
        //     handleClick(index){
        //         this.$emit('handleClick', index)
        //     }
        // }
    }
</script>