<template>
    <div>
        <header>
            <ul>
                <li v-for="item in data1" :key="item.age" @click="handleClick(item.age)">
                   <router-link  :to="ulr + item.name"> {{item.name}}</router-link>
                </li>
            </ul>
        </header>
        <detailrouterVue  />
    </div>
</template>
<script>
    import detailrouterVue from './detailrouter.vue';
    export default {
        name:'dynamicrouter',
        component:{detailrouterVue},
        data(){
            return{
                ulr: '/dynamicrouter/',
                id:18,
                data1:[
                    {
                        name: 'hieu',
                        age: 18,
                        img:'https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg'
                    },
                    {
                        name: 'sang',
                        age: 20,
                        img:'https://kynguyenlamdep.com/wp-content/uploads/2020/01/bat-ca.jpg'
                    },
                    {
                        name: 'tuan',
                        age: 32,
                        img:'https://xemanhdep.com/wp-content/uploads/2017/07/anh-dep-drone-tren-cao-390x250.jpg'
                    },
                    {
                        name: 'hiep',
                        age: 14,
                        img:'https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-dep-ve-hoa-sen.jpg'
                    },
                ]
            }
        },
        methods:{
            handleClick(id){
                this.id = id
            }
        }
        
    }
</script>