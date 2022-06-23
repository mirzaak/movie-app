<template>
<div class="all">
<div class="box" v-if="popular">

<div class="boxBack">

<img  :src="slika + popular[0].backdrop_path" alt="">
<div class="backColor">
</div>
</div>
<div class="boxFront">
<div class="tekst">
<h1>Welcome.</h1>
<h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
</div>
<div class="search">
<input type="text" class="textinput" placeholder="Search for a movie, tv show, person, ...">
<button class="submit">Search</button>
</div>
</div>

</div>
<div class="popularwrap" v-if="popular">
<div class="popularheader">
<h1>What's Popular</h1>
<div class="pill">
  <div class="ontvback">
  <a class="ontv" href="">On TV</a>
  </div>
<div class="pillinner">
  <a class="intheaters" href="">In Theaters</a>
</div>
</div>
</div>
<div class="popular" v-if="popular">

<div class="movies">
<div class="movie" v-for="movie in popular" :key="movie">
<div class="card">
<div class="percentage"><circle-progress class="circle" :percent="movie.vote_average*10" :size="300" fill-color="green" empty-color="none" /><p class="percentagebroj">{{movie.vote_average*10}}</p><a>%</a></div>
<img class="movieposter" :src=" slika + movie.poster_path" alt="">
<a href="#">{{movie.original_title}}</a>
<p>{{movie.release_date}}</p>
</div>
</div>
</div>
</div>
</div>
<div class="boxTrailer" v-if="popular">
<h1>Trailers</h1>
</div>
<div class="popularwrap" v-if="popular">
<div class="popularheader">
<h1>Trending</h1>
<div class="pill">
<div class="ontvback">
  <a class="ontv" href="">On TV</a>
</div>
<div class="pillinner">
  <a class="intheaters" href="">In Theaters</a>
</div>
</div>
</div>
<div class="populartrending" v-if="popular">
<div class="movies">
<div class="movie" v-for="movie in now_playing" :key="movie">
<div class="card">
<div class="percentage"><circle-progress class="circle" :percent="movie.vote_average*10" :size="300" fill-color="green" empty-color="none" /><p class="percentagebroj">{{movie.vote_average*10}}</p><a>%</a></div>
<img class="movieposter" :src=" slika + movie.poster_path" alt="">
<a href="#">{{movie.original_title}}</a>
<p>{{movie.release_date}}</p>
</div>
</div>
</div>
</div>

</div>
</div>
<Footer/>
</template>

<script>
import Footer from '../views/Footer.vue'
import axios from 'axios'
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
components:{CircleProgress,Footer},
data(){
  return{
    slika: 'https://image.tmdb.org/t/p/original/',
    popular: null,
    now_playing: null,
  }
},
created(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&page=1')
    .then((response) => {
    this.popular = response.data.results
    console.log(this.popular)
    })
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&page=1')
    .then((response) => {
    this.now_playing = response.data.results
    })
  
}
}
</script>
<style scoped>
.body{
  position: relative;
}
.boxTrailer{
  width: 1300px;
  height: 360px;
  display: flex;
  margin: auto;
  background: #0d253f;
  flex-direction: column;
  justify-content: center;  
}
.box{
  width: 1300px;
  height: 360px;
  display: flex;
  margin: auto;

  flex-direction: column;
  justify-content: center;
  overflow: hidden;

}
.boxFront{
  z-index: 3;
  position: absolute;
  width: 1300px;
}
.boxBack img{
  width: 100%;
  z-index: 1;
  position: absolute;
}
.boxBack{
  width: 100%;
  height:100%;
  position: relative;
}
.backColor{
  background:#0d253f;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  filter:opacity(0.8);
}
.textinput{
  width: 1180px;
  border-radius: 30px;
  border: none;
  height: 26px;
  padding: 10px;
  align-self: center;
  outline: none;
  font-size: 15px;
}
.search{
  display: flex;
  flex-direction: row;
  width: 1110px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
}
.submit{
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: white;
  cursor: pointer;

  background: linear-gradient(to right, rgba(30	213	169) 0%,rgba(1	180	228) 100%);
  margin-left: 980px;
  width: 130px;
  height: 46px;
  padding: 10px;
  position: absolute;
  border-radius: 30px;
  border: none;
  outline: none;
}
.submit:hover{
  color: black;
}
.box h1{
  color: white;
  margin: 0;
  margin-left: 100px;
  font-size: 40px;

}
.box h2{
  color: white;
  margin-left: 100px;
  margin-top: 0;
  margin-bottom: 50px;
}
.movieposter{
  width: 150px;
  height: 225px;
  border-radius: 10px;
}
.movie{
  margin-right: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
}
.popular{
  width: 100%;
  display: flex;
  overflow-x:scroll;
  overflow-y:hidden;
  flex-direction: column;
}
.popularwrap{
  display: flex;
  width: 1300px;
  margin: auto;
  flex-direction: column;
}
.popularheader{
  margin-left: 40px;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  width: 1300px;
  height: 40px;
  align-items: center;
}
.popularheader h1{
  font-size: 1.5rem;
  margin: 0;
  margin-right: 10px;
}
.movies{
  margin-left: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
}
.popularheader .pill{
  overflow: hidden;
  display: flex;
  width: 180px;
  height: 30px;
  border: 1px solid #0d253f;
  background: white;
  border-radius: 30px;
  align-items: center;

}
.popularheader .pillinner{
  display: flex;
  box-sizing: border-box;
  height: 30px;
  width: 80px;
  border-radius: 30px;
  align-items: center;

}

.ontv{
  text-decoration: none;
  color: white;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 20px;
  border-radius: 30px;
  font-size: 15px;
  background: -webkit-linear-gradient(white, green);
  -webkit-background-clip: text;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
}
.ontvback{
  height: 30px;
  display: flex;
  align-items: center;
  background: #0d253f;
  border-radius: 30px;

}
.intheaters{
  text-decoration: none;
  font-size: 15px;
  color: #0d253f;
  font-weight: bold;
  margin-left: 9px;
  white-space: nowrap; 
}
.card a{
  font-weight: bold;
  font-size: 1em;
  text-decoration: none;
  color:black;
  display: flex;
  margin-top: 15px;
  margin-left: 10px;
  }
.card p{
  color: gray;
  font-size: 15px;
  margin: 0;
  margin-left: 10px;
}
.percentage{
  background: #0d253f;
  height: 38px;
  width: 38px;
  right: 105px;
  bottom: 75px;
  display: flex;
  position: absolute;
  border-radius: 34px;

}
.circle{
  padding: 2px;
}
.percentagebroj{
  position: absolute;
  align-self: center;
  right: 14.5px;
  bottom: 11px;
}
.percentage p{
  font-size: 12px;
  color: white;
}
.percentage a{
  left: 14px;
  bottom: 17px;
  font-size: 7px;
  color: white;
  position: absolute;
}
::-webkit-scrollbar {
  height: 7px;
  border-radius: 5px;
  
}
::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 5px;
}
.populartrending{
  background-image: url(../assets/back.svg);
  background-repeat: repeat-x;
  background-position: bottom;
  width: 100%;
  display: flex;
  overflow-x:scroll;
  overflow-y:hidden;
  flex-direction: column;
}


</style>