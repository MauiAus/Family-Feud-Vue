<template>
  <div id="playBox">
      <div id="teamABox">
          <p id="teamN">{{teamA}}</p>
          <ul>
            <div id="ABox">
            <li v-for="player in players" :key="player.index">
                <p id="playersA" v-if="player.aFlag==true">{{player.pname}}</p>
            </li>
            </div>
          </ul>
      </div>
      <div id="gameBox">
      </div>
      <div id="teamBBox">
          <p id="teamN">{{teamB}}</p>
          <ul>
            <div id="BBox">
            <li v-for="player in players" :key="player.index">
              <p id="playersB" v-if="player.bFlag==true">{{player.pname}}</p>
            </li>
            </div>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Play',
  props: {
    players:Array,
    teamA:String,
    teamB:String
  },
  data(){
      return{

      }
  },
  created(){
    this.players=this.$route.params.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#playBox{
    display:grid;
    #teamABox{
      width:100%;
      padding-top:10px;
      #teamN{
        text-align: center;
        font-size: 30px;
        color:#ff6437;
      }
      #ABox{
        margin:auto;
        display:flex;
      }
      ul{
        list-style: none;
        padding: 0;
        display:flex;
      }
      #playersA{
        padding: 5px 30px;
        font-size: 20px;
        border: 0 none #ccc;
        border-bottom: 2px solid  #ff6437;
        border-radius: 0;
        border-width: 5px;
      }
    }
    #gameBox{
      background-color: yellow;
        width:100%;
        padding-top:100px;
    }
    #teamBBox{
      width:100%;
      padding-top:10px;
      #teamN{
        text-align: center;
        font-size: 30px;
        color:#f89c12;
      }
      #BBox{
        margin:auto;
        display:flex;
      }
      ul{
        list-style: none;
        padding: 0;
        display:flex;
      }
      #playersB{
        padding: 5px 30px;
        font-size: 20px;
        border: 0 none #ccc;
        border-bottom: 2px solid  #f89c12;
        border-radius: 0;
        border-width: 5px;
      }
    }
}
</style>
