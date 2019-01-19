// CHANGE first_photo TO USE THE URL OF THE FIRST PHOTO IN YOUR ALBUM
var first_photo = '<link to first photo in frame';
var current_url = '2';
var next_url = '';

function pressKey() {
next_url = window.location.href;
}

function next_or_prev() {
  current_url = window.location.href;
  setTimeout(function(){ pressKey() }, 60000);
  if (current_url == next_url) {
    // page didnt change, must be at last photo
    // load the first photo
    window.location.href = first_photo;
  }
}
window.setInterval(function(){next_or_prev()}, 60000);
