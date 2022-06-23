<template>
<div class="header">
        <span><div class="overview"><a>Overview</a> <div class="arrow"></div></div><div class="headerDropdown">
            <router-link :to="{ name: 'Moviedetails', params: { id: id }}">Main</router-link>
            <router-link :to="{ name: 'AlternativeTitles', params: { id: id }}">Alternative Titles</router-link>
            <router-link :to="{ name: 'CastAndCrew', params: { id: id }}">Cast & Crew</router-link>
            <router-link :to="{ name: 'ReleaseDates', params: { id: id }}">Release Dates</router-link>
            <router-link :to="{ name: 'Translations', params: { id: id }}">Translations</router-link>
            <router-link :to="{ name: 'Changes', params: { id: id }}">Changes</router-link>
            </div></span>
        <span><div>Media <div class="arrow"></div></div><div class="headerDropdown">
            <a>Backdrops</a>
            <a>Logos</a>
            <a>Posters</a>
            <a>Videos</a>
            </div></span>
        <span><div>Fandom <div class="arrow"></div></div><div class="headerDropdown">
            <a>Discussions</a>
            <a>Reviews</a>
            </div></span>
        <span><div>Share <div class="arrow"></div></div><div class="headerDropdown">
            <a>Share Link</a>
            <a>Facebook</a>
            <a>Tweet</a>
            </div></span>
</div>
<div v-if="data" class="main">
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
        <span class="expand"><img src="../assets/expand.svg" alt="">Expand</span> 
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
                
                
                
                
                
                
                
                <div class="overviewB">
                    <a>{{data.tagline}}</a>
                    <p>Overview</p>
                    <p>{{data.overview}}</p>
                </div>
                <div class="frontglumci">
                    <div class="frontGlumac" v-for="index in fourCredits" :key="index">
                        <a>{{index.name}}</a>
                        <p>{{index.known_for_department}}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>






<div class="other">
    <div class="otherleft">
            <span class="actorsHeader"><h1>Top Billed Cast</h1></span>
            <div class="actorFade">
                <div class="actorssection" v-if="credits"> 
            <div class="actors">
            <div class="actor" v-for="glumac in credits" :key="glumac">
            <div class="actorCard" v-if="glumac">
                <div>
                <img :src="slika + glumac.profile_path" alt=""><img class="noImage" v-if="glumac.profile_path==null" src="./person.svg" alt="">
                </div>
                <p><a>{{glumac.original_name}}</a></p>
                <p>{{glumac.character}}</p>
            </div>
      
            </div>
                <div class="lastActorCard">View more</div>

            </div>

                            
                </div>
                <div class="fade"></div>
                </div>
            
        <a>Full Cast & Crew</a>
        <div class="reviewsection" v-if="review">
                    <div class="reviews">
            <span class="reviewheader"><h1>Social</h1><h2>Reviews</h2><h2>Discussions</h2></span>
            <div class="review">
                <div class="reviewcard">
                <span class="reviewPrviRed"><img :src="revjuSlika" alt=""><div class="reviewProstor" ></div>
                <span class="reviewPrviRedText">
                <span class="reviewPrviRedTextRate"><h3><a>{{review.author}}</a></h3><div class="reviewrate">{{revjuRating}}</div></span>
                <h5>Written by <a>{{review.author}}</a> on <a>{{review.created_at}}</a></h5>
                </span>
                </span>
                
                <div class="reviewcontent">
                <p>{{review.content}}</p><a>read the rest.</a>
                </div>
                </div>
            </div>
        <a>Real All Reviews</a>
        </div>
        </div>
        <div class="mediasection">
        <span class="mediaheader"><h1>Media</h1><h2  @click="comp='MostPopular'" :class="{selectedMedia:comp==='MostPopular'}">Most Popular</h2><h2 @click="comp='Media'" :class="{selectedMedia:comp==='Media'}">Videos</h2><h2 @click="comp='Backdrops'" :class="{selectedMedia:comp==='Backdrops'}">Backdrops</h2><h2 @click="comp='Posters'" :class="{selectedMedia:comp==='Posters'}">Posters</h2></span>
        <div class="media">
            <component :is="comp"/>

                
                
        </div>
        <div class="fade"></div>
        </div>

        <div class="recommendationssection">
            <div class="recommendationHeader"><h1>Recommendations</h1></div>
            <div class="recommendationWrapper">
            <div class="recommendation" v-for="predlozeno in recommendations.results" :key="predlozeno">
                <img :src="slika + predlozeno.backdrop_path" alt="">
                <a>{{predlozeno.original_title}}</a>
            </div>
        
        </div>
        <div class="fade"></div>     
            
          
        </div>
         
    </div>
    <div class="otherright">

    </div>
</div>
<Footer/>
</template>

<script>
import Footer from './Footer.vue'
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
        Footer,
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
    const comp = shallowRef('MostPopular')
    const recommendations = ref([])
    const fade = ref(null)
    const review = ref([])
    const details = ref([])
    const revjuSlika = ref([])
    const revjuRating = ref([])
    const fourCredits = ref([])
    const overlayOn = ref(false)


    const overlayToggle = () => {
        overlayOn.value = !overlayOn.value
        console.log('overlay')
    }
    const loadData = async() => {
    try{
      let movieData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&append_to_response=reviews')
      data.value = await movieData.data
    console.log(data.value)
    }
    catch(err){}
    }
    const loadReview = async() => {
    try{
      let reviewData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&append_to_response=reviews')
      review.value = await reviewData.data.reviews.results[0]
      details.value = await reviewData.data.reviews.results[0].author_details
      revjuSlika.value = await reviewData.data.reviews.results[0].author_details.avatar_path.substring(1)
      revjuRating.value = await reviewData.data.reviews.results[0].author_details.rating
      console.log(review.value)
    }
    catch(err){}
    }

    const loadCredits = async() => {
        try{
            let creditsData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
            credits.value = await creditsData.data.cast
            credits.value.length = 8
        }
        catch(err){}
        console.log(credits.value)
    }
    const loadFourCredits = async() => {
        try{
            let creditsAData = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
            fourCredits.value = await creditsAData.data.cast
            fourCredits.value.length = 4
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








    

loadData()
loadImages()
loadCredits()
loadRecommendations()
loadReview()
loadFourCredits()
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
    backdropActive,
    review,
    details,
    revjuSlika,
    revjuRating,
    fourCredits,
    overlayToggle,
    overlayOn,
    id
    

}
}
}
</script>

<style scoped>
.overlay {
  position: fixed; /* Sit on top of the page content */

  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.header{
    border-bottom: 1px solid lightgray;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header span:hover .headerDropdown{
    display: flex;
}
.headerDropdown{
    background: white;
    border: 1px solid lightgray;
    display: none;
    position: absolute;
    top: 100px;
    padding-top: 8px;
    padding-bottom: 8px;
    flex-direction: column;
    border-radius: 5px;
    z-index: 3;
}
.headerDropdown a{
    height: 30px;
    align-items: center;
    display: flex;
    padding-left: 20px;
    padding-right: 60px;
    color: black;
    text-decoration: none;
    font-size: 17px;
}
.headerDropdown a:hover{
    background: lightgrey;
}
.header span{
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
}
.arrow {
  margin-left: 5px;
  margin-bottom: 3px;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
   transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.overview{
    display: flex;
    align-items: center;
    height: 35px;
    border-bottom: 5px solid #01b4e4;
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
.left:hover .expand{
    display: flex;
    pointer-events: none;
}
.expand{
    position: absolute;
    z-index: 4;
    flex-direction: row;
    align-items: center;
    margin-left: 115px;
    display: none;

}
.expand img{
    width: 15px;
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
    font-weight: 400;
    cursor: auto;
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
    position: relative;


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
    position: relative;

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
    padding-bottom: 10px;
    width: 138px;
    height: 100%;
}
.sectionFade{
    position: relative;
    width: 100%;
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
    padding-left: 10px;
    padding-bottom: 0;
    font-size: 0.8em;

}
.actors p a{
    font-weight: bold;
}
.actorsHeader{
    height: 60px;

    display: flex;
    align-items: center;
}
.actorsHeader h1{
    font-size: 1.4em;
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
    font-size: 1.4em;
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
    position: relative;
}
.mediaheader{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
}
.mediaheader h2{
    cursor: pointer;
    margin-right: 20px;
    font-size: 1.1em;

}
.mediaheader h1{
    margin-right: 50px;
    font-size: 1.4em;
}
.media{
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    border-top-left-radius: 10px;
    position: relative;
}
.fade{
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%);
    opacity: 1;
    pointer-events: none;

}
.videos{
    display: flex;
    flex-direction: row;
}
.actorssection{
    display: flex;
    overflow: auto;
    margin-bottom: 20px;
    position: relative;
    width: 1030px;

}
.actorFade{
    position: relative;
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

.reviewheader h2{
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
    justify-content: center;
}
.collectionsection{
    margin-top: 20px;
    height: 400px;

    border: 1px solid lightgray;
}
.recommendationssection{
    margin-top: 20px;

    position: relative;
    display: flex;
    flex-direction: column;

    border-radius: 10px;
    width: 1030px;

}
.recommendationWrapper{
    height: 205px;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: none;
    border-radius: 10px;
    width: 1030px;
    flex-direction: row;
}
.recommendationHeader h1{
    font-size: 1.4em;
}
.recommendation img{
    width: 300px;
    border-radius: 10px;
    cursor: pointer;
}
.recommendation a{
    cursor: pointer;
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
    overflow: hidden;
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
    left: 23px;
    top: 22px;
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
.overviewB a{
    opacity: 0.7;
    font-style: italic;
}
.overviewB{
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
    top: 200px;
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
    border-bottom: 4px solid black;
}
.noImage{
    height: 207px;
}

</style>