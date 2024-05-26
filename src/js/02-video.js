import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
let isEnded = false;

const currentTimeKey = 'videoplayer-current-time';
const currentTime = localStorage.getItem(currentTimeKey);

if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime)).catch(error => {
    if (error.name === 'RangeError') {
      player.setCurrentTime(0);
    }
  });
}

const onTimeUpdate = throttle(function ({ seconds }) {
  if (!isEnded) {
    localStorage.setItem(currentTimeKey, seconds);
  }
}, 1000);

const onEnded = function () {
  localStorage.removeItem(currentTimeKey);
  isEnded = true;
};

player.on('play', function () {
  isEnded = false;
});

player.on('timeupdate', onTimeUpdate);

player.on('ended', onEnded);
