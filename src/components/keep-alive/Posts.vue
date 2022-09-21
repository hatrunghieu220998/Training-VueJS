<template>
  <div id="posts">
    <h4>This is posts tab 😎🤷‍♀️🤦‍♀️🤦‍♂️🙌😒😁❤️🤣😊😂👌 </h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vel iusto natus, autem asperiores non laudantium praesentium nam in velit iure voluptate 
      ad accusamus quidem hic corporis enim perspiciatis voluptatem.</p>
      <div class="list">
        <ul class="tabs">
          <li v-for="post in posts" v-bind:key="post.id">
            <button class="btn" v-bind:class="{active: selectedPost.id === post.id}" type="button" v-on:click="selectedPost = post">{{post.title}}</button>
          </li>
        </ul>
        <div class="content">
          <div class="body" v-if="selectedPost">
            <h3>{{selectedPost.title}}</h3>
            <p>{{selectedPost.content}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'posts',
    data(){

      const posts = [
              {
                id: 1,
                title: "Cat Ipsum",
                content:
                  "Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around"
              },
              {
                id: 2,
                title: "Hipster Ipsum",
                content:
                  "Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang."
              },
              {
                id: 3,
                title: "Cupcake Ipsum",
                content:
                  "Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan."
              }
            ]
            const selectedPost = posts.find(post => post.id === 1)

      return {
        posts,
        selectedPost
      }
    },
    methods: {
      
    },
    beforeMount(){
      console.log('beforeMounted posts');
    },
    mounted(){
      console.log('Mounted posts');
    },
    beforeUpdate(){
      console.log('Before updated posts');
    },
    updated(){
      console.log('Updated posts');
    }
  }
</script>

<style scoped>
  h3,p{
    margin: 0;
  }
  #posts{
  }
  #posts .list {
    border: 1px solid grey;
    padding: 20px;
    margin: 20px 0 0 0;
    display: flex;
  }
  #posts .list .tabs{
    margin: 0;
    padding: 0;
    list-style: none;
    border: 2px solid grey;
    margin: 0 10px 0 0;
    min-width: 140px;
  }
  #posts .list .tabs li .btn{
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 1px solid black;
    display: block;
    width: 100%;
  }
  #posts .list .tabs li .btn.active{
    background-color: lightblue;
  }
  #posts .list .tabs li .btn:hover{
    background: lightblue;
  }
  #posts .list .tabs li .btn:focus-visible{
    background: lightblue;
  }
</style>