console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex =0;
let audioElement = new Audio('./songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let volume_slider = document.querySelector(".volume_slider");

let songs = [
    { songName: "Salam-e-Ishq-1", filePath: "./songs/1.mp3", coverPath: "./Images/covers/1.jpg"},
    { songName: "Salam-e-Ishq-2", filePath: "./songs/2.mp3", coverPath: "./Images/covers/2.jpg"},
    { songName: "Salam-e-Ishq-3", filePath: "./songs/3.mp3", coverPath: "./Images/covers/3.jpg"},
    { songName: "Salam-e-Ishq-4", filePath: "./songs/4.mp3", coverPath: "./Images/covers/4.jpg"},
    { songName: "Salam-e-Ishq-5", filePath: "./songs/5.mp3", coverPath: "./Images/covers/5.jpg"},
    { songName: "Salam-e-Ishq-6", filePath: "./songs/6.mp3", coverPath: "./Images/covers/6.jpg"},
    { songName: "Salam-e-Ishq-7", filePath: "./songs/7.mp3", coverPath: "./Images/covers/7.jpg"}
]

songItems.forEach((element, i) => {
   
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        // console.log("true");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // document.getElementsByClassName('songItemPlay').classList.add('fa-play-circle');
        // document.getElementsByClassName('songItemPlay').classList.add('fa-pause-circle');
        gif.style.opacity = 0;
        // console.log("false");
    }

})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // console.log(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
//         // if(audioElement)
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 7){
        songIndex = 0
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity=1;
})

function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
}
