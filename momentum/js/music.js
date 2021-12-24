const menu = document.querySelector('.menu');
const player = document.querySelector('.player');
const controls = document.querySelector('.controls');
const span = controls.querySelectorAll('span');
const title = document.querySelector('.music_title');
const desc = document.querySelector('.music_desc');

const cd = document.querySelector('.big');
const audio = document.querySelector('audio');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let playlist = [
  {
    title: 'Blizzards',
    music: 'Blizzards.mp3',
  },
  {
    title: 'Calm',
    music: 'Calm.mp3',
  },
  {
    title: 'Dusty_Road',
    music: 'Dusty_Road.mp3',
  },
  {
    title: 'Escape',
    music: 'Escape.mp3',
  },
  {
    title: 'Payday',
    music: 'Payday.mp3',
  },
  {
    title: 'Retreat',
    music: 'Retreat.mp3',
  },
  {
    title: 'Seasonal',
    music: 'Seasonal.mp3',
  },
  {
    title: 'Vespers',
    music: 'Vespers.mp3',
  },
];

function showMusic() {
  player.style.display = 'block';
}

function closeMusic() {
  player.style.display = 'none';
}

function controlMusic(e) {
  if (e.target == span[0]) {
    cd.classList.remove('play');
    audio.pause();
  }
  if (e.target == span[1]) {
    cd.classList.add('play');
    audio.play();
  }
  if (e.target == span[2]) {
    cd.classList.remove('play');
    audio.pause();
    audio.currentTime = 0;
  }
}

let num = 0;
function prevMusic() {
  num -= 1;
  let index = playlist.length + num;
  audio.src = `../audio/${playlist[index].music}`;
  audio.play();

  title.innerText = `${playlist[index].title}`;

  if (num == -playlist.length) {
    num = 0;
  }
}

function nextMusic() {
  num++;
  audio.src = `../audio/${playlist[num].music}`;
  audio.play();

  title.innerText = `${playlist[num].title}`;

  if (num == playlist.length - 1) {
    num = -1;
  }
}

menu.addEventListener('click', showMusic);
controls.addEventListener('click', controlMusic);
prev.addEventListener('click', prevMusic);
next.addEventListener('click', nextMusic);
