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
          <a href="#">Popular</a>
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
      <router-link to="/"><a href="#">Login</a></router-link> 
      <router-link to="/"><a href="#">Sign Up</a></router-link> 
      <router-link to="/"><img class="search" src="./assets/search.svg" alt="search"></router-link> 
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
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
</style>
