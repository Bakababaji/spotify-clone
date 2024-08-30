console.log("Hello World");

// Initialize the variables
let SongIndex=1;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBAr= document.getElementById('myProgressBAr');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
 var something = (function () {
     var executed = false;
     return function () {
       if (!executed) {
         executed = true;
         SongIndex=1;
       
       }
     };
   })();

let songs=[
    {songName:"Fairy Tail OP 1 -『Snow Fairy』",filepath:"songs/1.mp3",coverpath:"Cover/a.jpg"},
    {songName:"Bôa - Duvet",filepath:"songs/2.mp3",coverpath:"Cover/b.jpg"},
    {songName:"Kano - Irony",filepath:"songs/3.mp3",coverpath:"Cover/c.jpg"},
    {songName:"Radiohead - No Surprises",filepath:"songs/4.mp3",coverpath:"Cover/d.jpg"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;

})

//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
         something();
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;

    }
})

//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBAr.value = progress;


})

myProgressBAr.addEventListener('change',()=>{
audioElement.currentTime = (myProgressBAr.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        SongIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src= `songs/${SongIndex}.mp3`;
    //    masterSongName.innerText=songs[SongIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');



    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=4){
        SongIndex=1;
    }

    else{
        SongIndex+=1;
    }
    audioElement.src= `songs/${SongIndex}.mp3`;
    // masterSongName.innerText=songs[SongIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
}

)

document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=1){
        SongIndex=4;
    }
    else{
        SongIndex-=1;
    }
    audioElement.src= `songs/${SongIndex}.mp3`;
    // masterSongName.innerText=songs[SongIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
}

)



