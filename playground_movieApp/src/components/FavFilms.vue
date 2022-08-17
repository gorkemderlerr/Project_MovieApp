<template>
  <div class="mx-5">
    <h2 class="mx-3 black--text">Fav. Films</h2>
    <ul>
        <li v-for="(film, index) in FavFilms" :key="index">{{ film }}</li>
    </ul>
  </div>
</template>

<script>
let currentPage = 1;
export default {
    data(){
        return {
            FavFilms: this.$store.state.favMovies,
        };
    },
    mounted(){
        this.fetchFavFilms(currentPage);
    },
    computed: {
        getLikedMovies() {
            return this.$store.state.favMovies;
        }
    },
    methods: {
        async fetchFavFilms(){
         try{
            const response = await this.$http.get(
                "https://api.themoviedb.org/3/movie/popular/"
            );
            this.FavFilms = response.data.results;
         }catch(error){
            console.log(error);
         }
        },
        scroll(){
            window.onscroll = () => {

            }
        }
    }
}
</script>

<style>

</style>