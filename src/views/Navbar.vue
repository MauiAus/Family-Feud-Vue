<template>
    <div id = "Body">
        <div id = "navBox">
            <div id = "title">
                <router-link id="header" to="/Home">Family Feud</router-link>
            </div>
            <div id = "links">
                <div id = "linkBox">
                    <router-link v-if="mobileView >=650" id="link" to="/Home">Play</router-link>
                    <router-link v-if="mobileView >=650" id="link" to="/HowtoPlay">How to Play</router-link>
                </div>
            </div>
            <div id = "barBox" v-if="mobileView < 650">
                <i button @click="sideShow = !sideShow" class="fa fa-bars"></i>
            </div>
        </div>
            <transition name="slide-fade">
                <div id = "sideBar" v-if="sideShow">
                <router-link  id="link" to="/Home">Play</router-link>
                <router-link  id="link" to="/HowtoPlay">How to Play</router-link>
                </div>
            </transition>
        <div id = "content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            mobileView:window.innerWidth,
            sideShow:false,
        }
    },
    created() {
        window.addEventListener("resize", this.changeSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.changeSize);
    },
    methods:{
        changeSize(){
            this.mobileView=window.innerWidth;
        }
    }
}

</script>

<style lang="scss" scoped>
a { text-decoration: none; }
#navBox{
    overflow:hidden;
    //background-color: aqua;
    display:flex;
    justify-content: space-between;
    flex: 1;
    background-color: #64b9ee;
    padding-bottom: 1%;
    #title{
        /*
        padding-left:2vw;
        padding-right:2vw;
        */
        padding-top:2%;
        #header{
            padding-left:60px;
            font-size: 2rem;
            color: white;
            &:hover{
                color: #edcf2e;
            }
        }
    }
    #links{
        //margin-left: 1vw;
        //background-color: darkgrey;
        // width:100%;
        // margin: 1px auto;
        padding-top:2%;
        //padding-left:40%;
        padding-right:60px;
        #linkBox{
            #link{
                text-align: center;
                padding: 50% 10px;
                font-size:1.5rem;
                color:white;
                &:hover{
                    color: #edcf2e;
                }
            }
        }
    }
    #barBox{
        margin-left:auto;
        margin-right:0;
        i{
            background-color: #64b9ee;
            padding: 20px;
            color:white;
        }
    }
}
.slide-fade-enter-active {
transition: all .3s ease;
}
.slide-fade-leave-active {
transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
transform: translateX(10px);
opacity: 0;
}
#sideBar{
    float:right;
    display:grid;
    background-color: #64b9ee;
    width:100%;
    #link{
        padding:3%;
        color:white;
        &:hover{
            color:#edcf2e;
        }
    }
}
</style>