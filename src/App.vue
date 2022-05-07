<template>
  <nav>
    <div class="content">
      <div class="left">
      <router-link to="/"><img class="logo" src="./assets/logo.svg" alt="logo"></router-link> 
      <div class="dropdown">
      <router-link to="/"><a href="#">Movies</a></router-link>
        <div class="dropdowncontent">
          <a href="#">Popular</a>
          <a href="#">Now Playing</a>
          <a href="#">Upcoming</a>
          <a href="#">Top Rated</a>
        </div> 
      </div>
      <div class="dropdown">
      <router-link to="/"><a href="#">TV Shows</a></router-link>
        <div class="dropdowncontent">
          <a href="#" @click="toPopular">Popular</a>
          <a href="#">Now Playing</a>
          <a href="#">Upcoming</a>
          <a href="#">Top Rated</a>
        </div> 
      </div>
      <div class="dropdown">
      <router-link to="/"><a href="#">Popular</a></router-link>
        <div class="dropdowncontent">
          <a href="#">Popular People</a>
        </div> 
      </div> 
      <router-link to="/"><a href="#">More</a></router-link> 
      </div>
      <div class="right">
      <router-link to="/login"><a href="#">Login</a></router-link> 
      <router-link to="/"><a href="#" @click="register">Sign Up</a></router-link> 
      <router-link to="/"><img class="search" src="./assets/search.svg" alt="search"></router-link> 
      </div>
    </div>
  </nav>
  <router-view/>
  <footer>
    <div class="footer">
      <div class="footercontent">
        <div class="fcontent">
        <div class="footerleft">
        <img class="logodva" src="./assets/logodva.svg" alt="">
        <div class="footeruser">User</div>
        </div>
        <ul>
          <a href="#">THE BASICS</a>
          <li>About TMDB</li>
          <li>Contact Us</li>
          <li>Support Forums</li>
          <li>API</li>
          <li>System Status</li>
        </ul>
        <ul>
          <a href="#">GET INVOLVED</a>
          <li>Contribution Bible</li>
          <li>Add New Movie</li>
          <li>Add New TV Show</li>
        </ul>
        <ul>
          <a href="#">COMMUNITY</a>
          <li>Guidelines</li>
          <li>Discussions</li>
          <li>Leaderboard</li>
          <li>Twitter</li>
        </ul>
        <ul>
          <a href="#">COMMUNITY</a>
          <li>Terms of Use</li>
          <li>API Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
        
      </div>
    </div>
    </div>
  </footer>
</template>
<script>


export default {
methods:{
  register(){
    window.location.href = "https://www.themoviedb.org/signup"
  },
  toPopular(){
    this.$router.push('/tvpopular')
  }
}
}
</script>

<style>
body{
  margin: 0;
}
*{
    font-family: 'Source Sans Pro', Arial, sans-serif;

}
nav{
  width: 100%;
  height: 64px;
  background: #0d253f;
  align-items: center;
  display: flex;
  justify-content: center;
}
nav a{
  text-decoration: none;
  color: white;
}
.content{
  width: 1220px;
  height: 40px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 40px;
  font-weight: bold;
  font-size: 14px;
}
.content a{
  padding: 8px;
}
.left{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo{
  width: 154px;
}
.search{
  margin-top: 5px;
}
.dropdowncontent{
  margin-left: 10px;
  margin-top: 8px;
  display: none;
  flex-direction: column;
  background: white;
  position: absolute;
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid lightgray;
  z-index: 2;
}
.dropdowncontent a{
  margin: 0;
  color: gray;
  font-weight: 400;
  padding-left: 24px;
  padding-right: 64px;
  font-size: 1rem;
  padding-top: 5px;
  padding-bottom: 5px;

}
.dropdown:hover .dropdowncontent{
  display: flex;
}
.dropdowncontent a:hover{
  background: rgba(211, 211, 211, 0.489);
  overflow: hidden;
}
.footer{
  height: 300px;
  width: 100%;
  background: #0d253f;
  bottom: 0;
  position: relative;
}
.footercontent{
  width: 1000px;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.footercontent li{
  text-decoration: none;
  color: white;
  list-style-type: none;
  font-size: 1.0em;
  line-height: 1.4em;
}
.footercontent a{
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.2em;
}
.logodva{
  width: 130px;
  height: 94px;
}
.fcontent{
  display: flex;
  margin-top: 40px;
  margin: auto;
}

.footeruser{
  background:white;
  width: 130px;
  height: 30px;
  border-radius: 5px;
  color: #01b4e4;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  font-weight: bold;
}
</style>
