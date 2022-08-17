<template>
   <div>
     <PopularFilms />
     <UpcomingFilms />
   
   </div>
</template>

<script>
  
import PopularFilms from '../components/PopularFilms.vue'
import UpcomingFilms from '../components/UpcomingFilms.vue'


  export default {
    name: 'Home',
    components: {
    PopularFilms,
    UpcomingFilms,
  
}

    
  }
</script>
