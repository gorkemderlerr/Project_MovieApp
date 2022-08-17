<template>
  <div class="mx-5">
      <h2 class="mt-5 mx-3 black--text"> Popular Movies</h2>
     <v-container fluid>
    <v-row>
        <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id"  >
          <Films :movie="movie" :genres="genres"/>
          </v-col>
    </v-row>
      </v-container>  
      
  </div>  
</template>

<script>
import Films from '../components/Films'
export default {  
components :{
    Films,
},
data: function (){
  return {
    movies: [],
    genres: []
  };
},
async mounted(){
  this.fetchGenres();
  try {
     const response = await this.$http.get("/movie/popular");
     this.movies = response.data.results;
  }catch (error) {
    console.log(error);
  }
},
methods: {
  async fetchGenres() {
    try {
     const response = await this.$http.get("/genre/movie/list");
     this.genres = response.data.genres;
  }catch (error) {
    console.log(error);
  }
  }
}
}
</script>

<style>
</style>