<template>
   <v-footer
  
    bottom
    dark
    padless
    width="100%"
    class="mx-0 justify-center text-center purple background-color: red ;"
    
   
  
  >
    <v-card 
      flat
      tile
      dark
      width="100%"
      class="mx-0 justify-center  text-center background-color: red ; "
      
    >
      <v-card-text 
      class="justify-center"
      width="100%">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class=" dark white--text"
          icon
        >
          <v-icon size="20px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text 
      class="justify center light--text text-center pt-0"
      width="100%">
        PLAYGROUND bir gorkemderlerr :DDdd urunudur. Tum hakları saklidir.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="justify center light--text">
       <strong> {{ new Date().getUTCFullYear() }}</strong> — <strong>PLAYGROUND</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () =>({
        icons:[
            'mdi-facebook',
            'mdi-linkedin',
            'mdi-instagram'
        ]
    })
}
</script>

<style>

</style>