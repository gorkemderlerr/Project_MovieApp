<template>
  <nav>
      <v-system-bar app dark>
          <v-spacer></v-spacer>
          <v-icon>mdi-minus</v-icon>
          <v-icon>mdi-checkbox-blank-outline</v-icon>
          <v-icon>mdi-close</v-icon>
      </v-system-bar>
      <v-app-bar app color="rgb(74, 20, 140)" dark>
          <v-icon class="mr-2">fas fa-tape</v-icon>
          <v-toolbar-title class="">PlayGround</v-toolbar-title>
          <v-btn text class="ml-2" to="/">Movies</v-btn>
          <v-btn text class="ml-2" to="/FavFilms">Favs</v-btn>
          <v-btn text class="ml-2">Updates</v-btn>
          <v-btn text class="ml-2">Contact</v-btn>
          <v-spacer></v-spacer>
          <v-autocomplete
          clearable
          hide-no-data
          hide-selected
          color="black"
          label="search movies"
          prepend-inner-icon="search"
          flat
          :items="movies"
          item-text="title"
          item-value="id"
          id="search"
          >
            <template v-slot:item="{item}">
                <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
            </template>
          </v-autocomplete>
          <v-btn icon>
              <v-badge color="green" content="2" overlap>
                  <v-icon>far fa-bell</v-icon>
              </v-badge>
          </v-btn>
          <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
              <v-avatar size="40">
                  <v-img src="https://us.123rf.com/450wm/arbuzu/arbuzu1902/arbuzu190200090/118799925-letter-p-logo-icon-design-template-elements.jpg?ver=6"></v-img>
              </v-avatar>
          </v-badge>
      </v-app-bar>
  </nav>
</template>

<script>
export default {
    data:()=>({
        drawer:null,
        model:'',
        search:null,
        movies: []
    }),
    mounted(){
        this.loadMovies();
    },
    methods: {
        loadMovies: async function() {
            try{
                const response = await this.$http.get("/movie/popular");
                this.movies = response.data.results;
                
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>