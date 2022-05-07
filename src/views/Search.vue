<template>
  <div class="searchbar">
      <div class="searchbarinput">
          <input type="text">
      </div>
  </div>
  <div class="main">
      <div class="left">
        <div class="content">
            <div class="block">
                <h1>Search Results</h1>
            </div>
            <span><a href="#">Movies</a><p>1</p></span>
            <span><a href="#">TV Shows</a><p>1</p></span>
            <span><a href="#">People</a><p>1</p></span>
            <span><a href="#">Collections</a><p>1</p></span>
            <span><a href="#">Keywords</a><p>1</p></span>
            <span><a href="#">Companies</a><p>1</p></span>
            <span><a href="#">Networks</a><p>1</p></span>
        </div>
      </div>
      <div class="right">

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.searchbar{
    width: 100%;
    border-bottom: 1px solid lightgray;
    height: 45px;
}
.searchbarinput{
    width: 1300px;
    height: 40px;
    margin: auto;
    border: 1px solid black;
}
.searchbarinput input{
    width: 1300px;
    height: 40px;
    border: none;
}
.main{
    width: 1400px;
    height: 1000px;
    margin: auto;
    display: flex;
}
.left{
    display: flex;
    align-items: flex-start;
    width: 300px;
    
}
.right{
    width: 1100px;
}
.content{
    border: 1px solid lightgray;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    padding: 0;
}
.content span{
    flex-direction: row;
    display: flex;
    width: 250px;
    height: 35px;
    text-align: left;
    background: white;
    justify-content: space-between;
    font-weight: 300;
}
.content span:hover{
    background: lightgray;
}
.content span a {
    text-decoration: none;
    color: black;
}
.block{
    background:#01b4e4;
    color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.block h1{
    margin: 0;
    width: 210px;
    font-size: 20px;
    padding: 20px;
}
</style>