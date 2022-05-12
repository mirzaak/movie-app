<template>
<div class="all" v-if="media.backdrops">
    <div class="media" v-for="video in 6" :key="video">
    <img v-if="media" :src=" slika + media.backdrops[video].file_path " alt="">
</div>
<div class="viewmore"><h1>View More</h1></div>
</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
setup(){
    const media = ref([])
    const route = useRoute()
    const id = route.params.id
    const slika = ref('https://image.tmdb.org/t/p/original/')



    const loadImages = async() => {
        try{
            let imagesData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/images?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&include_image_language=en%2Cnull')
            media.value = await imagesData.data
        }   
        catch(err){}
        console.log(media.value)
    }

    loadImages()
    return{
        media,
        id,
        route,
        slika

    }
}
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: row;
}
.media img{
    height: 300px;
}
.viewmore{
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>