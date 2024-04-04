var arr = [
    {songName:"Black In Black" , image:"./images/acdc.jpg" , url:"./songs/Back-In-Black.mp3"},
    {songName:"Almost Easy" , image:"./images/a7x.jpg" , url:"./songs/almost easy.mp3"},
    {songName:"Numb" , image:"./images/lp.jpg" , url:"./songs/numb.mp3"},
    {songName:"Tears Don't Fall" ,image:"./images/bfmv.jpg" ,url:"./songs/tears don't fall.mp3"},
    {songName:"Sweet Child O Mine" , image:"./images/gnr.jpg" , url:"./songs/sweet child o mine.mp3"}
]


var allSongs = document.querySelector("#all-songs")

var songImage = document.querySelector("#song-image")

var play = document.querySelector("#play")

var forward = document.querySelector("#forward")

var backward = document.querySelector("#backward")

var audio = new Audio();

var mySelectedSong = 0

var flag = 0

function mySongs(){
        var clutter = ""

            arr.forEach(function(elem , index){
                clutter += `<div class="song-card" id=${index}>
                                <div class="part1">
                                    <img src="${elem.image}"/>
                                    <h2>${elem.songName}</h2>
                                </div>
                                <h2>3:46</h2>
                            </div>`
            })
   audio.src = arr[mySelectedSong].url

   allSongs.innerHTML = clutter

   songImage.style.backgroundImage = `url(${arr[mySelectedSong].image})`

//    document.body.style.backgroundImage = `url(${arr[mySelectedSong].image})`

}

mySongs()


//selecting th song

allSongs.addEventListener("click" , function(dets){
    mySelectedSong = dets.target.id;
    console.log(dets)
    mySongs()    
    audio.play()
    play.innerHTML = `<i class="ri-pause-fill"></i>`     
    flag = 1
})


//playing and pausing the song

play.addEventListener("click" , function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mySongs()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mySongs()
        audio.pause()
        flag = 0
    }
})


//forward functionality

forward.addEventListener("click" , function(){
    if(mySelectedSong < arr.length-1){
        mySelectedSong++
        mySongs()
        audio.play()
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        flag = 1
    }else{
        forward.style.opacity = 0.3
    }
})


//backward functionality

backward.addEventListener("click" , function(){
    if(mySelectedSong > 0){
        mySelectedSong--
        mySongs()
        audio.play()
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        flag = 1
    }else{
        backward.style.opacity = 0.3
    }
})






