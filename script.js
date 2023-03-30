let audioElement = new Audio('songs/1.mp3')
// audioElement.play()
superIndex = 0
let songs = [
    {songName: "Ilzaam - King", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jhankaar - Renuka", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Let me love you - Ed-sheran", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Maan meri jaan - King", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Rockbye clean-bandit", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tere hawaale - Arijit Singh", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"}
]

let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");

masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        songItemPlay.classList.remove("fa-circle-play")
        songItemPlay.classList.add("fa-circle-pause")
        gif.style.opacity = "1"
        
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        songItemPlay.classList.remove("fa-circle-pause")
        songItemPlay.classList.add("fa-circle-play")
        gif.style.opacity = "0"
    }

  
   
})
audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress
})
progressBar.addEventListener("change", () => {
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

let songItem = Array.from(document.getElementsByClassName("songItem"));
songItem.forEach((element,i) => {
    // console.log(element)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
});

let songTitle = document.getElementById("songTitle");




let songItemPlay =  Array.from(document.getElementsByClassName("songItemPlay"));
songItemPlay.forEach((element) =>{
   
    element.addEventListener("click", (e) =>{
        if(audioElement.paused || audioElement.currentTime <= 0){
            superIndex = parseInt(e.target.id);
            songTitle.innerText = songs[superIndex].songName
            e.target.classList.remove("fa-circle-play")
            e.target.classList.add("fa-circle-pause")
            audioElement.src = `songs/${superIndex+1}.mp3`
            songTitle.innerText = songs[superIndex].songName;
            audioElement.currentTime = 0;
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            audioElement.play()
            gif.style.opacity = "1"
        }
        else{
            superIndex = parseInt(e.target.id);
           
            e.target.classList.remove("fa-circle-pause")
            e.target.classList.add("fa-circle-play")
            audioElement.src = `songs/${superIndex+1}.mp3`
            songTitle.innerText = songs[superIndex].songName;
            // audioElement.currentTime = 0;
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
            audioElement.pause()
            gif.style.opacity = "0"
        }
       
    })
   
})

document.getElementById("previous").addEventListener("click", () => {
    if(superIndex >= 0){
        superIndex -= 1;
    }
    else{
        superIndex = 5
    }
    audioElement.src = `songs/${superIndex+1}.mp3`
    songTitle.innerText = songs[superIndex].songName;
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    audioElement.play()

})
document.getElementById("next").addEventListener("click", () => {
    if(superIndex >= 6){
        superIndex = 0;
    }
    else{
        superIndex += 1;
    }
    audioElement.src = `songs/${superIndex+1}.mp3`
    songTitle.innerText = songs[superIndex].songName;
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    audioElement.play()
})

