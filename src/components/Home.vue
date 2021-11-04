<template>
  <div id="playerBox">
      <div id="teamBox">
        <p>Name your team!</p>
        <input id="teamInput" type="text" placeholder="Enter team name" v-model="teamA"/>
        <input id="teamInput" type="text" placeholder="Enter team name" v-model="teamB"/>
      </div>
      <div id="players">
        <p id="header">Who's playing?</p>
        <ul>
          <li v-for="player in players" :key="player.index">
            <div id="pBox" v-bind:style='{"border-color":player.activeColor}' >
              <input id="pInput" v-on:keyup.enter="addPlayer()" v-on:keyup.delete="removePlayer()" type="text" placeholder="Enter team name" v-model="player.pname"/>
              <p id="teamA" v-on:click="addTeam(true)">{{teamA}}</p>
              <p id="teamB" v-on:click="addTeam(false)">{{teamB}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div id="playBox" v-if="players.length > 1">
       <!--<router-link id="pButton" v-bind:players="players" to="/Play">Play!</router-link>-->
       <!--<p id="pButton" @click="goPlay()">Play!</p> -->
       <router-link id="pButton"
          :to="{ name:'Play',
                 params:{data: this.players,teamA,teamB}}">
        Play!
       </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      teamA:"Team A",
      teamB:"Team B",
      tempA:"",
      tempB:"",
      tempC:"",
      players:[
        {pname:"",team:"",activeColor:"gray",aFlag:false,bFlag:false},
      ]
    }
  },
  methods:{
    addPlayer(){
      this.players.push({pname:"",team:"",activeColor:"gray",aFlag:false,bFlag:false});
    },
    removePlayer(){
      if(this.players.length>1){
        if(this.players[this.players.length-1].pname.length <= 0)
          this.players.pop();
      }
    },
    addTeam(checkF){
      if(checkF){
        this.players[this.players.length-1].aFlag = true;
        this.players[this.players.length-1].activeColor='#ff6437';
      }
      else{
        this.players[this.players.length-1].bFlag = true;
        this.players[this.players.length-1].activeColor='#f89c12';
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#playerBox{
  display:grid;
  #teamBox{
    margin:auto;
    display:grid;
    width:200px;
    input:focus,
    select:focus,
    textarea:focus,
    button:focus{
        outline:none;
    }
    p{
      text-align: center;
      font-size: 20px;
    }
    #teamInput{
      margin-top:5%;
      border: 0 none #ccc;
      border-bottom: 2px solid  #64b9ee;
      border-radius: 0;
      border-width: 5px;
      font-size: 15px;
      color: #111;
    }
  }
  #players{
    padding-top:2%;
    margin:auto;
    ul{
        list-style: none;
        padding: 0;
    }
    #header{
      text-align: center;
      font-size: 20px;
    }
    #pBox{
      display:flex;
      border-bottom: 5px solid;
      border-radius: 0;
      input:focus,
      select:focus,
      textarea:focus,
      button:focus{
          outline:none;
      }
      p{
        margin-left:10px;
        margin-right:10px;
      }
      #pInput{
        border: 0 none #ccc;
        font-size: 15px;
        color: #111;
      }
      #teamA{
        &:hover{
            color:#ff6437;
        }
      }
      #teamB{
        &:hover{
            color:#f89c12;
        }
      }
    }
  }
  #playBox{
    margin:auto;
    margin-top:20px;
    margin-bottom:50px;
    padding: 2px 40px;
    background-color: #64b9ee;
    border-radius: 10px;
    &:hover{
      background-color:#e5d824;
    }
    #pButton{
      color:white;
      font-size: 20px;
    }
  }
}
</style>
