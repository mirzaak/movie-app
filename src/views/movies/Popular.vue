<template>
<div class="header">
<h1>Popular Movies</h1>
</div>
<div class="all">
<div class="content">
<div class="left">
<div class="filteri">
<div class="filterone filter" :class="{ active: isActiveOne }"  @click="expandone">
<div class="filterhead" >
<h2>Sort</h2>
<img class="strelica" src="..\strelica.svg" alt="">
</div>
</div>
<div class="filteronecontent">
<p>Sort Results By</p>
<select name="" id="" v-model="sort">
<option value="popularity.asc" @click.prevent="ascending">Popularity Ascending</option>
<option value="popularity.desc" @click.prevent="descending">Popularity Descending</option>
<option value="vote_average.asc" @click.prevent="ratingasc">Rating Ascending</option>
<option value="vote_average.desc" @click.prevent="ratingdesc">Rating Descending</option>
<option value="release_date.asc" @click.prevent="rdasc">Release Date Ascending</option>
<option value="release_date.desc" @click.prevent="rddesc">Release Date Descending</option>
<option value="original_title.asc" @click.prevent="titleasc">Title (A-Z)</option>
<option value="original_title.desc" @click.prevent="titledesc">Title (Z-A)</option>
</select>
</div>
<div class="filtertwo filter" @click="expandtwo" :class="{ active: isActiveTwo }">
<div class="filterhead">
<h2>Filters</h2>
<img class="strelica" src="..\strelica.svg" alt="">
</div>
</div>
<div class="filtertwocontent">
<div class="contentfilter">
<span class="qMark"><p>Show Me</p><span class="tooltipqMark">Login to filter items you've watched.</span><img class="questionMark" src="../questionMark.svg" alt=""></span>
<label class="container">
  <input type="radio" name="radio">
  <span class="checkmark"></span>
  Everything
</label><label class="container">
  <input type="radio" name="radio">
  <span class="checkmark"></span>
  Movies I Haven't Seen
</label><label class="container">
  <input type="radio" name="radio">
  <span class="checkmark"></span>
  Movies I Have Seen
</label>
</div>
<div class="contentfilter">
<p>Avaliabilities</p>
<label class="jedan">
  <input type="checkbox" checked="checked">
  <span class="dva"></span>
  Search all avaliabilities?
</label>
</div>
<div class="contentfilter">
<p>Release Date</p>
<label class="jedan">
  <input type="checkbox" checked="checked">
  <span class="dva"></span>
  Search all releases?
</label>
<label for=""><label for="">From</label><input class="from" type="date" v-model="odGodina"></label>
<label for=""><label for="">To</label><input  class="to" type="date" v-model="doGodina"></label>
</div>
<div class="contentfilter">
<p>Genres</p>
<div class="zanrovi">
<div class="genre" v-for="genre in genres" :key="genre" @click="changeColor">
<a href="#" class="genres" :class="{selected: this.genre.includes(genre.id)}"  @click.prevent="zanr(genre.id)">{{genre.name}}</a>
</div>
</div>
</div>
<div class="contentfilter">
<p>Certification</p>
</div>
<div class="contentfilter">
<span class="qMark"><p>Login</p><span class="tooltipqMark">Login to filter items you've watched.</span><img class="questionMark" src="../questionMark.svg" alt=""></span>
<select class="language" name="" id=""></select>
</div>
<div class="contentfilter">
<p>User Score</p>
<input type="range" class="range odSlider" value="0" min="0" max="10">
<input type="range" class="range doSlider" value="10" min="0" max="10">
</div>
<div class="contentfilter">
<p>Minimum User Votes</p>
<input type="range" class="range">
</div>
<div class="contentfilter">
<p>Runtime</p>
<input type="range" class="range">
</div>
<div class="contentfilter">
<p for="">Keywords</p>
<input class="keywords" type="text" name="" id="" v-model="keywords" placeholder="Filter by keywords...">
</div>
</div>





<div class="filterthree filter" @click="expandthree" :class="{ active: isActiveThree }">
<div class="filterhead">
<h2>What To Watch</h2>
<img class="strelica" src="..\strelica.svg" alt="">
</div>
</div>
<div class="filterthreecontent">
<div class="contentfilter">
<span class="qMark"><p>Show Me</p><span class="tooltipqMark">Login to filter items you've watched.</span><img class="questionMark" src="../questionMark.svg" alt=""></span>
<label class="jedan">
  <input type="checkbox" checked="checked">
  <span class="dva"></span>
  Restrict searches to my subsrcribed servies?
</label>
</div>
<div class="contentfilter">
<p for="">Country</p>
<select @change="region" name="region" v-model="regionData">
<option v-for="aRegion in avaliableRegions.results" :key="aRegion">{{aRegion.iso_3166_1}}</option>
</select>
<div class="wProviders">
<div class="providers" v-for="provider in wProviders.results" :key="provider">
  <img class="providerimg" :src=" slika + provider.logo_path" alt="" @click="selectProvider(provider.provider_name)">
</div>
</div>
</div>
</div>
<button class="submit" @click="submit" :class="{filterColor:filterTrue}">Submit</button>

</div>
</div>
<div class="right">
<div class="movies" v-if="popular">
<div class="movie" v-for="movie in popular" :key="movie">
<div class="morebutton" @click="more"></div>
<div class="more">
  <p>Want to rate or add this item to a list?</p>
  <a>Login</a>
<div class="line"></div>
  <p>Not a member?</p>
  <a>Sign up and join the community</a>

</div>
<div class="moreback">
<div class="movieback">
<img class="movieposter" :src="slika + movie.poster_path" alt="">
<div class="percentage"><circle-progress class="circle" :percent="movie.vote_average*10" :size="200" fill-color="green" empty-color="none" /><p class="percentagebroj">{{movie.vote_average*10}}</p><a>%</a></div>
<div class="card">
<a href="#">{{movie.original_title}}</a>
<p>{{movie.release_date}}</p>
</div>
</div>
</div>

</div>



</div>


</div>
</div>
<button @click="loadMore" class="loadmore">Load More</button>
</div>

</template>

<script>
import axios from 'axios'
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
    components:{CircleProgress},

created(){
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
.then((response)=>{
  this.genres = response.data.genres
  console.log(this.genres)
})
axios.get('https://api.themoviedb.org/3/watch/providers/regions?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
.then((response)=>{
this.avaliableRegions = response.data
console.log(this.avaliableRegions)
})
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&page=1')
    .then((response) => {
    this.popular = response.data.results
    console.log(this.popular)
    })
},
data(){
    return{
        slika: 'https://image.tmdb.org/t/p/original/',
        popular:[],
        isActiveOne:false,
        isActiveTwo:false,
        isActiveThree:false,
        genres:'',
        genre:[],
        sort:null,
        vagte:null,
        valte:null,
        odGodina:'',
        doGodina:'',
        keywords:null,
        sProvider:'',
        wProviders:'',
        avaliableRegions:'',
        regionData:'',
        pagenext:[],
        page:[],
        filterTrue:false,
        number:2,
        busy:false,
    }
},
computed:{
},
methods:{
        more(){
          var morebutton = document.getElementsByClassName("morebutton")
    for(let i = 0; morebutton.length > i; i++){
            var panel = this.nextElementSibling
      morebutton[i].addEventListener("click",{
        if(panel.style.display ==="flex")
        
  
      })
        }},

  async loadMore(){
    await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&page='+this.number++)
    .then((response)=>{
      this.page = response.data.results
      this.popular = this.popular.concat(this.page)
    })
  },
          submit(){
                  const jedan = document.getElementsByClassName("odSlider")
        this.vagte = jedan[0].value
                const dva = document.getElementsByClassName("doSlider")
        this.valte = dva[0].value
          axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&sort_by='+this.sort+'&include_adult=false&include_video=false&page=1&primary_release_date.gte='+this.odGodina+'&'+'&primary_release_date.lte='+this.doGodina+'&'+'&vote_average.gte='+this.vagte+'&'+'&vote_average.lte='+this.valte+'&'+this.genre+'&watch_region='+this.regionData+'&with_watch_providers='+this.sProvider+'&with_genres='+this.genre+'&'+'with_keywords='+this.keywords)
          .then((response)=>{
            this.popular = response.data
          })
          console.log(this.genre)
          console.log(this.odGodina)
          console.log(this.doGodina)
          console.log(this.vagte)
          console.log(this.valte)
          console.log(this.regionData)
          console.log(this.sProvider)
          console.log(this.sort)
          console.log(this.keywords)
      },
      selectProvider(provider){
        this.filterTrue = true
        this.sProvider = provider
      },
      region(){
        axios.get('https://api.themoviedb.org/3/watch/providers/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&watch_region='+this.regionData)
.then((response)=>{
this.wProviders = response.data
console.log(this.wProviders)
})
        console.log(this.avaliable)
      },

      zanr(id){
        const i = this.genre.indexOf(id)
        if(this.genre.includes(id)){this.genre.splice(i,1)}else{this.genre.push(id)}
      console.log(this.genre)
        this.filterTrue = true
      },

      expandone(){
var acc = document.getElementsByClassName("filter");
var i;
for (i = 0; i < acc.length; i++) {
    this.isActiveOne = !this.isActiveOne
    var panel = acc[0].nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  ;
}},
      expandtwo(){
var acc = document.getElementsByClassName("filter");
var i;
    this.isActiveTwo = !this.isActiveTwo
for (i = 0; i < acc.length; i++) {
    var panel = acc[1].nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  ;
}},
      expandthree(){
var acc = document.getElementsByClassName("filter");
var i;
    this.isActiveThree = !this.isActiveThree
for (i = 0; i < acc.length; i++) {
    var panel = acc[2].nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  ;
}},
}
}
</script>

<style scoped>
.content{
    width: 1300px;
    height: 100%;
    display: flex;
    margin: auto;
    padding: 0;
    align-items: flex-start;
}
.left{
    width: 250px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
}
.right{
    width: 1050px;
    height: 100%;
    margin-top: 10px;
    align-items: flex-start;
}
.movieposter{
    width: 178px;
    height: 270px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
}
.movie{
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 0;
    margin-bottom: 30px;
    border-radius: 10px;
    position: relative;
}
.movies{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.header{
    width: 1300px;
    height: 50px;
    margin: auto;
}
.filter{
    border:1px solid lightgray;
    color: black;
    width: 250px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    font-size: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 10px;
    cursor: pointer;
}
.filter h2{
    margin-left: 10px ;
}
.header h1{
    font-size: 23px;
}
.header{
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: 400;
    align-items: center;
    display: flex;
}
.strelica{
    display: flex;
    height: 15px;
    width: 15px;
    margin-right: 20px;
}
.card{
    display: flex;
    flex-direction: column;
    width: 178px;
    position: relative;
    cursor:pointer;

}
.card a{
    text-decoration: none;
    color: black;
    margin-top: 10px;
}
.card p{
    font-weight: 400;
    color: lightgray;
    margin: 10px;
    margin-top: 0;
}
    .percentage{
    background: #0d253f;
    height: 38px;
    width: 38px;
    display: flex;
    position: absolute;
    border-radius: 34px;
    margin-top: 250px;
    margin-left: 10px;
    }
.circle{
  padding: 2px;
}
.percentagebroj{
  position: absolute;
  align-self: center;
  right: 14.5px;

}
.percentage p{
  font-size: 12px;
  color: white;
}
.percentage a{
margin-top: 5px;
  left: 15px;
  font-size: 7px;
  color: white;
  position: absolute;
}
.loadmore{
    width: 1030px;
    height: 50px;
    background: #01b4e4;
    border-radius: 5px;
    color: white;
    border: none;
    margin-left: 260px;
    margin-bottom: 20px;
}
.loadmore a{
 font-weight: bold;
 font-size: 25px;
 text-decoration: none;
 color: white;   
}
.submit{
    width: 250px;
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    color: gray;
    margin-top: 20px;
    pointer-events: none;
}
.filteronecontent{
    background: white;
    border: 1px solid lightgray;
    width: 250px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    display: none;
    flex-direction: column;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}
.filteronecontent p{
    font-size: 15px;
    color: black;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: 100;
}
.filteronecontent select{
    width: 220px;
    height: 35px;
    background: #e4e7eb;
    align-self: center;
    border-radius: 5px;
    border: 0;
    margin-bottom: 10px;
    cursor: pointer;
}

.filterhead{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
    height: 50px;
    align-items: center;
    position: absolute;
}
.filterfilter{
    width: 250px;
    height: 400px;
    border: 1px solid lightgray;
    border-radius: 5px;
}
.filtertwocontent{
    background: white;
    border: 1px solid lightgray;
    width: 250px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    display: none;
    flex-direction: column;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.filtertwocontent label{
    font-weight: 200;
    margin-left: 10px;
}
.filtertwocontent p{
    font-weight: 200;
    margin-left: 10px;
}
.contentfilter{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
}
.filterthreecontent{
    background: white;
    border: 1px solid lightgray;
    width: 250px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    display: none;
    flex-direction: column;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.active{
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: 0;
}
.container {
  display: block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 10px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
  border-radius: 50%;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #01b4e4;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
 	top: 4px;
	left: 4px;
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: white;
}
.jedan {
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jedan input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.dva {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border-radius: 5px;
}

.jedan:hover input ~ .dva {
  background-color: #ccc;
}

.jedan input:checked ~ .dva {
  background-color: #01b4e4;
}

.dva:after {
  content: "";
  position: absolute;
  display: none;
}

.jedan input:checked ~ .dva:after {
  display: block;
}

.jedan .dva:after {
  left:5px;
  top: 2px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.language{
    width: 230px;
    height: 35px;
    background: #e4e7eb;
    border-radius: 5px;
    border: 0;
    margin-bottom: 10px;
    margin-left: 10px;
    cursor: pointer;
}
.keywords{
    width: 220px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 10px;
    margin-left: 10px;
    border: 1px solid lightgray;
    padding-left: 10px;
}
.filterthreecontent{
    background: white;
    border: 1px solid lightgray;
    width: 250px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    display: none;
    flex-direction: column;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-weight: 200;
}
.contentfilter p{
    font-size: 15px;
    color: black;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: 100;
}
.filterthreecontent select{
    width: 220px;
    height: 35px;
    background: #e4e7eb;
    align-self: center;
    border-radius: 5px;
    border: 0;
    margin-bottom: 10px;
    cursor: pointer;
}
.filterthreecontent{
    background: white;
    border: 1px solid lightgray;
    width: 250px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    display: none;
    flex-direction: column;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.filterthreecontent label{
    font-weight: 200;
    margin-left: 10px;
}
.filterthreecontent p{
    font-weight: 200;
    margin-left: 10px;
}
.from{
    margin-left: 40px;
    margin-bottom: 10px;
    height: 30px;
}
.to{
    margin-left: 58px;
    margin-bottom: 10px;
    height: 30px;
}
.range{
    height: 5px;
    accent-color: #01b4e4;
    margin-bottom: 15px;
}
.genres{
  text-decoration: none;
  background: white;
  color: black;
  border-radius: 50px;
  padding: 8px;
  font-size: 12px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  margin: 3px;
}
.zanrovi{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5px;
    font-weight: 200;
}
.selected{
  border: none;
  color: white;
  background: #01b4e4;
  border: 1px solid #01b4e4;
}
.providerimg{
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}
.providers{
  display: flex;
  flex-direction: row;
}
.wProviders{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
.all{
  width: 1300px;
  margin: auto;
  height: 100%;
}
.filteri{
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.loadmore{
  font-size: 20px;
  cursor: pointer;
}
.filterColor{
  background: #01b4e4;
  color: white;
  cursor: pointer;
  pointer-events: all;
}
.questionMark{
  width: 16px;
  height: 16px;
  opacity: 0.4;
  margin-top: 15px;
  margin-left: 5px;
}
.qMark{
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 50px;
  position: relative;
}
.tooltipqMark{
  font-weight: 300;
  height: 25px;
  width: 230px;
  background: #0d253f;
  position: absolute;
  bottom: 40px;
  color: white;
  align-items: center;
  border-radius: 5px;
  display: none;
  padding-left: 10px;
}
.qMark:hover .tooltipqMark{
  display: flex;
}
.from{
  border-radius: 5px;
  border: 1px solid lightgray;
}
.to{
  border-radius: 5px;
  border: 1px solid lightgray;
}
.movieback{
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  display: flex;
}
.moreback{
  overflow: hidden;
  border-radius: 10px;
}
.more{
  width: 280px;
  height: 180px;
  background: white;
  position: absolute;
  z-index: 2;
  left: 15px;
  top: 35px;
  display: none;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 5px;
  overflow: visible;

}
.more p,a{
  padding-left: 10px;
}
.more a{
  width: 262px;
  cursor: pointer;

}
.more a:hover{
  background: #0d253f;
  color: white;
}
.line{
  border-top: 2px solid black;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 10px;
  

}
.morebutton{
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: absolute;
  background: white;
  top: 10px;
  left: 145px;
  cursor: pointer;
  opacity: 0.4;
}
</style>