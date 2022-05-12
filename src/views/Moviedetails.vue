<template>
<div class="header">
<span>Overview</span>
<span>Media</span>
<span>Fandom</span>
<span>Share</span>
</div>
<div class="main">
    <div class="behindmain">
        <img :src=" slika + data.backdrop_path" alt="">
    </div>
    <div class="frontmain">
        <div class="left">
            <div class="posterback">
            <div class="poster">
                <img :src=" slika + data.poster_path" alt="">
            </div>
            </div>
        </div>
        <div class="right">
            <div class="rightup">
                <span class="rednaslova"><h1>{{ data.title }}</h1><h1 class="hajedan"> ({{ data.release_date }})</h1></span>
                <span class="rednaslovaDrugired"><a>{{data.release_date}}</a><div class="dot"></div><span class="redzanrova" v-for="genre in data.genres" :key="genre"><a>{{genre.name}}</a></span><div class="dot"></div><a>{{data.runtime}}min</a></span>
            </div>
            <div class="rightdown">





                <div class="buttonsWrap">
                    <div class="buttons">
                        <div class="userscore">
                            <div class="circleAndText">
                                <div class="circle"><circle-progress class="circleProgress" :percent="data.vote_average*10" fill-color="lightgreen" empty-color="none" /><a>{{data.vote_average*10}}</a><p>%</p></div>
                                <h2>User Score</h2>
                            </div>
                        </div>
                        <div class="fourButtons">
                            <div class="smallCircle">

                                    <div class="circleTooltip">
                                    <a>Add to list</a>
                                    <div class="tip"></div>
                                </div>
                                <img src="../assets/list.svg" alt="">
                            </div>
                            <div class="smallCircle">
                                    <div class="circleTooltip">
                                    <a>Mark as favourite</a>
                                    <div class="tip"></div>
                                </div>

                                <img src="../assets/heart.svg" alt="">
                            </div>
                            <div class="watchlist, smallCircle">
                                    <div class="circleTooltip">
                                    <a>Add to your watchlist</a>
                                    <div class="tip"></div>
                                </div>
                                <img src="../assets/bookmark.svg" alt="">
                            </div>
                            <div class="rate, smallCircle">
                                    <div class="circleTooltip">
                                    <a>Rate It!</a>
                                    <div class="tip"></div>
                                </div>
                                <img src="../assets/star.svg" alt="">
                            </div>
                        </div>

                        <div class="playTrailer">
                            <span><img src="../assets/play.svg" alt=""><a>Play Trailer</a></span>
                        </div>
                        
                    </div>
                </div>
                
                
                
                
                
                
                
                <div class="overview">
                    <a>{{data.tagline}}</a>
                    <p>Overview</p>
                    <p>{{data.overview}}</p>
                </div>
                <div class="frontglumci">
                    <div class="frontGlumac" v-for="index in 6" :key="index">
                        <a>{{credits.cast[index].name}}</a>
                        <p>{{credits.cast[index].known_for_department}}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>






<div class="other">
    <div class="otherleft">
            <span class="actorsHeader"><h1>Top Billed Cast</h1></span>
                <div class="actorssection" @scroll="fadeFunction">
            <div class="actors">
            <div class="actor" v-for="actor in 8" :key="actor">
            <div class="actorCard">
                <img :src="slika + credits.cast[actor].profile_path" alt="">
                <p><a>{{credits.cast[actor].name}}</a></p>
                <p>{{credits.cast[actor].character}}</p>
            </div>
            
            </div>
                <div class="lastActorCard">View more</div>
            </div>
                <div class="fade" ref="fade"></div>
                </div>
            
        <a>Full Cast & Crew</a>
        <div class="reviewsection">
                    <div class="reviews">
            <span class="reviewheader"><h1>Social</h1><h2>Reviews</h2><h2>Discussions</h2></span>
            <div class="review">
                <div class="reviewcard">
                <span class="reviewPrviRed"><img :src="data.reviews.results[0].author_details.avatar_path.substring(1)" alt=""><div class="reviewProstor" ></div>
                <span class="reviewPrviRedText">
                <span class="reviewPrviRedTextRate"><h3><a>{{data.reviews.results[0].author}}</a></h3><div class="reviewrate" v-if="data.reviews.results[0].author_details.rating">{{data.reviews.results[0].author_details.rating}}</div></span>
                <h5>Written by <a>{{data.reviews.results[0].author}}</a> on <a>{{data.reviews.results[0].created_at}}</a></h5>
                </span>
                </span>
                
                <div class="reviewcontent">
                <p>{{data.reviews.results[0].content}}</p><a>read the rest.</a>
                </div>
                </div>
            </div>
        <a>Real All Reviews</a>
        </div>
        </div>
        <div class="mediasection">
        <span class="mediaheader"><h1>Media</h1><h2  @click="comp='MostPopular'" :class="{selectedMedia:comp = 'MostPopular'}">Most Popular</h2><h2 @click="comp='MostPopular'" :class="{selectedMedia:comp.value = MostPopular}">Videos</h2><h2 @click="comp='Backdrops'">Backdrops</h2><h2 @click="comp='Posters'">Posters</h2></span>
        <div class="media" >
            <component :is="comp"></component>
        </div>
        </div>
        <div class="collectionsection">
            <div class="collection">
                <h1>Collection</h1>
                <img :src=" slika + data.backdrop_path" alt="">
            </div>
        </div>
        <div class="recommendationssection">
            
            <div class="recommendation" v-for="predlozeno in recommendations.results" :key="predlozeno">
                <img :src="slika + predlozeno.backdrop_path" alt="">
                <a>{{predlozeno.original_title}}</a>
            </div>
        </div>
    </div>
    <div class="otherright">

    </div>
</div>
</template>

<script>
import Media from '../views/Moviedetailscomponents/Media.vue'
import Backdrops from '../views/Moviedetailscomponents/Backdrops.vue'
import MostPopular from '../views/Moviedetailscomponents/MostPopular.vue'
import Posters from '../views/Moviedetailscomponents/Posters.vue'

import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { ref, shallowRef } from 'vue'
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
    components:{
        Media,
        Backdrops,
        MostPopular,
        Posters,
        CircleProgress
    },
setup(){
    const router = useRouter()
    const route = useRoute()

    const slika = ref('https://image.tmdb.org/t/p/original/')
    const data = ref([])
    const credits = ref([])
    const images = ref([])
    const videos = ref([])
    const videoUrl = ref('https://www.youtube.com/embed/')
    const id = route.params.id
    let backdropActive = ref(false)
    const comp = shallowRef(Media)
    const recommendations = ref([])
    const fade = ref(null)



    const loadData = async() => {
    try{
      let movieData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&append_to_response=reviews')
      data.value = await movieData.data
    console.log(data.value)
    }
    catch(err){}
    }

    const loadCredits = async() => {
        try{
            let creditsData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
            credits.value = await creditsData.data
        }
        catch(err){}
        console.log(credits.value)
    }

    const loadImages = async() => {
        try{
            let imagesData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/images?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&include_image_language=en%2Cnull')
            images.value = await imagesData.data
        }   
        catch(err){}
        console.log(images.value)
    }
    const loadRecommendations = async() => {
        try{
            let recommendationsData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/recommendations?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&page=1')
            recommendations.value = await recommendationsData.data
        }   
        catch(err){}
        console.log(recommendations.value)
    }

    const fadeFunction = () => {
        console.log(fade.value)
    }






    

loadData()
loadImages()
loadCredits()
return{
    data,
    slika,
    credits,
    images,
    videos,
    videoUrl,
    Media,
    Backdrops,
    MostPopular,
    Posters,
    comp,
    recommendations,
    fade,
    fadeFunction,
    backdropActive

}
}
}
</script>

<style scoped>
.header{
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header span{
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
}
.main{
    height: 510px;
    width: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
}
.behindmain{
    height: 510px;
    width: 100%;
    position: relative;
    z-index: 1;
}
.behindmain img{
    width: 100%;
    position: relative;
    z-index: 1;
    filter: brightness(30%);
}
.frontmain{
    z-index: 2;
    position: absolute;
    display: flex;
    margin: auto;
    width: 1350px;
    color: white;
}
.poster img{
    height: 450px;
    z-index: 2;
    border-radius: 10px;
}
.poster:hover{
    filter: blur(10px);
    cursor: pointer;
}
.posterback{
    overflow: hidden;
    border-radius: 10px;
}
.rednaslova{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.rednaslova h1:hover{
    cursor: pointer;
    opacity: 0.7;
}
.hajedan{
    opacity: 0.7;
    margin-left: 5px;
}
.right{
    display: flex;
    flex-direction: column;
    margin-left: 40px;
}
.rightup{
    display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
}
.rightdown{
    display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
}
.frontglumci{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 900px;
    margin-top: 20px;


}
.frontGlumac{
    width: 33%;
    margin-bottom: 20px;
}
.frontGlumac a{
    font-weight: bold;
}
.frontGlumac p{
    margin: 0;
}
.frontglumci span{
    margin-right: 120px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
.frontglumci span p{
    margin: 0;
    width: 200px;
}
.actor{
    display: flex;
    flex-direction: column;
}
.other{
    display: flex;
    width: 1350px;
    margin: auto;
    min-height: 1500px;
}
.otherleft{
    display: flex;
    width: 1030px;
    flex-direction: column;
}
.actors{
    display: flex;

}
.actorCard{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 1em;
    padding-bottom: 20px;
    width: 138px;
    height: 100%;
}
.actorCard img{
    cursor: pointer;
    width: 138px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.actorCard p{
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    font-size: 0.8em;

}
.actors p a{
    font-weight: bold;
}
.actorsHeader{
    height: 40px;
    font-size: 8px;
    margin-top: 10px;
}
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 10px;
}
.reviewheader{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.reviewheader h1{
    margin-right: 20px;
}
.reviewheader h2{
    cursor: pointer;
    margin-right: 10px;
}
.review{
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    margin-bottom: 20px;
}
.reviewsection{
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
}
.mediasection{
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
}
.mediaheader{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.mediaheader h2{
    cursor: pointer;
    margin-right: 10px;
}
.mediaheader h1{
    margin-right: 10px;
}
.media{
    height: 320px;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
    border-top-left-radius: 10px;
}
.videos{
    display: flex;
    flex-direction: row;
}

.fade{
    background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgb(255, 255, 255) 100%);
    width: 60px;
    height: 300px;
    z-index: 2;
    position:absolute;
    margin-left: 970px;
}
.actorssection{
    display: flex;
    overflow: auto;
    margin-bottom: 20px;

}
.lastActorCard{
    height: 93%;
    width: 138px;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;

    align-items: center;
    justify-content: center;
}
.review img{
    border-radius: 50px;
}
.reviewheader h1{
    font-size: 1.1em;
}
.reviewheader h2{
    font-size: 1em;
}
.mediaheader h1{
    font-size: 1.1em;
}
.mediaheader h2{
    font-size: 1em;
}
.reviewcontent a{
    cursor: pointer;
    text-decoration: underline;
}

.reviewcontent p{
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;

}
.reviewcontent{
    margin-left: 70px;
}
.reviewcard{
    padding: 20px;
}

.reviewPrviRed{
    display: flex;
    flex-direction: row;
    height: 63px;
}
.reviewPrviRedText{
    margin-left: 10px;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.reviewPrviRedText h3{
    margin: 0;
}
.reviewPrviRedText h5{
    margin: 0;
}
.reviewPrviRedTextRate{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.reviewrate{
    width: 30px;
    height: 15px;
    display: flex;
    background: black;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
    align-items: center;
}
.collectionsection{
    margin-top: 20px;
    height: 400px;
    width: 100%;
    border: 1px solid lightgray;
}
.recommendationssection{
    margin-top: 20px;
    height: 200px;
    width: 100%;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    overflow: auto;
    border-radius: 10px;

}
.recommendation img{
    width: 300px;
    border-radius: 10px;
}
.recommendation{
    margin-right: 20px;
}
.collection img{
    width: 100%;
}
.collection{
    overflow: hidden;
}
.collectionsection{
    height: 300px;
    width: 100%;
    margin-top: 20px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    overflow: auto;
    border-radius: 10px;
}
.collection{
    overflow: hidden;
    height: 300px;
    width: 100%;
}
.collection h1{
    position: absolute;
}
.circle{
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    background: #081c22;
    align-items: center;
    justify-content: center;
    position: relative;
}
.circle:hover{
    transform: scale(1.1);
    cursor:pointer;
    transition: transform .2s;
}
.circle a{
    color: white;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    left: 22px;
    top: 24px;
}
.circle p{
    font-size: 10px;
    right: 17px;
    top: 15px;
    position: absolute;
}
.circleProgress{
    position: absolute;
    top: 60px;
    padding: 5px;
}
.buttonsWrap{
    margin-top: 20px;
    height: 70px;
    display: flex;
    flex-direction: row;
}
.buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.circleAndText{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.circleAndText h2{
    margin-left: 7px;
    flex-wrap: wrap;
    width: 5px;
    font-size: 18px;
}
.fourButtons{
    display: flex;
    flex-direction: row;

    height: 50px;
    margin-left: 60px;
}
.smallCircle{
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: #081c22;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.playTrailer img{
    width: 30px;
    height: 30px;
    margin-right: 5px;
}
.playTrailer{
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    cursor: pointer;
}
.playTrailer span{
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    filter: invert(1);
    
}
.playTrailer a{
    width: 90px;
}
.smallCircle img{
    width: 15px;
    height: 15px;
}
.overview a{
    opacity: 0.7;
    font-style: italic;
}
.overview{
    margin-top: 20px;
}
.dot{
    display: flex;
    height: 5px;
    width: 5px;
    border-radius: 5px;
    background: white;
}
.rednaslovaDrugired{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.rednaslovaDrugired a{
    margin-right: 5px;
    margin-left: 5px;
}
.smallCircle:hover .circleTooltip{
    display: flex;
}
.circleTooltip{
    display: none;
    height: 20px;
    background:#081c22;
    position: absolute;
    bottom: 240px;
    z-index: 5;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    padding-left: 10px;
    padding-right: 10px;
}
.tip{
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color:#081c22;
    bottom: 20px;
}
.selectedMedia{
    text-decoration: underline;
}

</style>