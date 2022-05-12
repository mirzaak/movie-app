<template>
<div class="media" v-for="video in media" :key="video">
    <div class="video">
    <iframe width="100%" v-if="media"
    height="100%"
    :src="'https://www.youtube.com/embed/' + video.key" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    </div>
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


    const loadVideos = async() => {
        try{
            let videosData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/videos?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
            media.value = await videosData.data.results
        }
        catch(err){}
        console.log(media.value)
    }

    loadVideos()
    return{
        media,
        id,
        route,

    }
}
}
</script>

<style scoped>
.video{
    display: flex;
    height: 300px;
    width: 532px;
}
</style>