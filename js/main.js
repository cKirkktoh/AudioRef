console.log('JS is running!')

// select all the placeholder images
let albumCovers = document.querySelectorAll('.audio img');
    audioEl = document.querySelector('audio'),
    playButton = document.querySelector("#playButton")
    rewindButton = document.querySelector("#rewindButton")
    pauseButton = document.querySelector("#pauseButton")

function loadAudio() {
    audioEl.src = `audio/${this.dataset.trackref}.mp3`;
    audioEl.load();

    playTrack();
}
// play the audio
function playTrack() { audioEl.play(); }

function pauseTrack() { audioEl.pause(); }

function rewindTrack () { audioEl.currentTime = 0; }


// add the reactions (the event we want to listen for)
albumCovers.forEach(album => album.addEventListener('click',loadAudio));

// custom audio controls
playButton.addEventListener('click', playTrack)
rewindButton.addEventListener('click', rewindTrack)
pauseButton.addEventListener('click', pauseTrack)