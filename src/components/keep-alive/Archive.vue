<template>
  <div id="archive">
    <h4>This is archive tab 😚☺️😚☺️😘🥰😍😚☺️🤩🤗 </h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vel iusto natus, autem asperiores non laudantium praesentium nam in velit iure voluptate 
      ad accusamus quidem hic corporis enim perspiciatis voluptatem.</p>
  </div>
</template>

<script>
  export default {
    name: 'archive',
    beforeMount(){
      console.log('beforeMounted archive');
    },
    mounted(){
      console.log('Mounted archive');
    },
    beforeUpdate(){
      console.log('Before updated archive');
    },
    updated(){
      console.log('Updated archive');
    }
  }
  
</script>