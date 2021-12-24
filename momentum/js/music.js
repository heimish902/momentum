'use strict';

/* menu */
const menu = document.querySelector('.menu');
const bar = document.querySelectorAll('.bar');

const player = document.querySelector('.player');

const cd = document.querySelector('.big');
const title = document.querySelector('.music_title');
const desc = document.querySelector('.music_desc');

/* controls */
const controls = document.querySelector('.controls');
const audio = document.querySelector('audio');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const play = controls.querySelector('.play');

let index = 0;
let playlist = [
  'Blizzards',
  'Calm',
  'Dusty_Road',
  'Escape',
  'Payday',
  'Retreat',
  'Seasonal',
  'Vespers',
];

// change menu icon
function changeMenuIcon() {
  bar.forEach((el) => {
    el.classList.toggle('change');
  });
  playerControl();
}

// show , hide player
function showPlayer() {
  player.classList.add('on');
}

function hidePlayer() {
  player.classList.remove('on');
}

function playerControl() {
  const isOn = player.classList.contains('on');
  if (!isOn) {
    showPlayer();
  } else {
    hidePlayer();
  }
}

// prev, next music
function prevMusic() {
  index--;
  if (index < 0) {
    index = playlist.length - 1;
  }
  changeMusic(playlist[index]);
}

function nextMusic() {
  index++;
  if (index > playlist.length - 1) {
    index = 0;
  }
  changeMusic(playlist[index]);
}

function changeMusic(num) {
  audio.src = `audio/${num}.mp3`;
  title.innerText = `${num}`;
  playMusic();
}

// play , pause
function playMusic() {
  cd.classList.add('play');
  play.innerText = 'pause';
  play.className = play.className.replace('play', 'pause');

  audio.play();
  audio.muted = false;
}
function pauseMusic() {
  cd.classList.remove('play');
  play.innerText = 'play_arrow';
  play.className = play.className.replace('pause', 'play');

  audio.pause();
}
function playToPause() {
  const isPlaying = play.classList.contains('play');
  if (isPlaying) {
    playMusic();
  } else {
    pauseMusic();
  }
}

menu.addEventListener('click', changeMenuIcon);
play.addEventListener('click', playToPause);
prev.addEventListener('click', prevMusic);
next.addEventListener('click', nextMusic);
