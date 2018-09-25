/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

function toggleClosed() {
  var modal = document.getElementById('modal-window');
  modal.classList.toggle('closed');
}

function toggleClassToBody(className) {
  var body = document.getElementsByTagName('body')[0];
  body.classList.toggle(className);
}

function toggleFontAwesome() {
  var items = document.getElementsByClassName('fa-awesome');
  for(var i = 0; i < items.length; i ++) {
    items[i].classList.toggle('fa');
  }
}

function javascriptAlert(){
  if (document.getElementsByClassName('javascript').length == 1) {
    alert("Great!  Try to make this fancy checkbox form and change your css in response!");
  }
}

var button = document.getElementById('modal-button');
button.addEventListener('click', toggleClosed);
document.getElementById('position').addEventListener('click', function() { toggleClassToBody('position');});
document.getElementById('background-image').addEventListener('click', function() { toggleClassToBody('background-image');});
document.getElementById('google-fonts').addEventListener('click', function() { toggleClassToBody('google-fonts');});
document.getElementById('font-awesome').addEventListener('click', toggleFontAwesome);
document.getElementById('transitions').addEventListener('click', function() { toggleClassToBody('transitions');});
document.getElementById('animations').addEventListener('click', function() { toggleClassToBody('animations');});
document.getElementById('media-queries').addEventListener('click', function() { toggleClassToBody('media-queries');});
document.getElementById('forms').addEventListener('click', function() { toggleClassToBody('forms');});
document.getElementById('pseudo-classes').addEventListener('click', function() { toggleClassToBody('pseudo-classes');});
document.getElementById('javascript').addEventListener('click', function() { 
  toggleClassToBody('javascript');
  javascriptAlert();
});