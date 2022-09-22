<script>
    import Home from '../views/HomeView.vue'
    import Routing from '../views/Routing.vue'
    import NotFound from '../routerExample/NotFoundPage.vue'
    
    const routes = {
      '/': Home,
      '/Routing': Routing
    }
    
    export default {
        
      data() {
        return {
          currentPath: window.location.hash
        }
      },
      computed: {
        currentView() {
          return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
      },
      mounted() {
        console.log(window.location);
        console.log(window.location.hash);
        window.addEventListener('hashchange', () => {
              this.currentPath = window.location.hash
            })
      },
      created(){
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
              console.log(previousParams);
                console.log(toParams);
            }
        )
      }
    }
    </script>
    
    <template>
      <a href="#/">Home</a> |
      <a href="#/Routing">Routing</a> |
      <a href="#/non-existent-path">Broken Link</a>
      <component :is="currentView" />
      <p> phương thức <span style="font-weight:900">window.location</span> chỉ ra các thuộc tính bên trong mà từ đó ta gán cho component phía dưới </p>
    </template>
    