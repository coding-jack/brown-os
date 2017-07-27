$(document).ready(function(){

  $('#welcome').modal({
    'show': true,
    'backdrop': false
  });

  $('button.random-chan').click(function(){
    RandomChan();
  })

});

function RandomChan(){
  chanSelection = getRandomIntInclusive(0,chanImages.length - 1);
  $('#jackiechan .modal-body img').attr('src',chanImages[chanSelection]);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var chanImages = [
  'images/jackie-chan/jackie-1.jpg',
  'images/jackie-chan/jackie-2.jpg',
  'images/jackie-chan/jackie-3.jpg',
  'images/jackie-chan/jackie-4.jpg',
  'images/jackie-chan/jackie-5.jpg',
  'images/jackie-chan/jackie-6.jpg',
  'images/jackie-chan/jackie-7.jpg',
  'images/jackie-chan/jackie-8.jpg',
  'images/jackie-chan/jackie-9.jpg',
  'images/jackie-chan/jackie-10.jpg',
  'images/jackie-chan/jackie-11.jpg',
  'images/jackie-chan/jackie-12.jpg',
  'images/jackie-chan/jackie-13.jpg',
  'images/jackie-chan/jackie-14.jpg',
  'images/jackie-chan/jackie-15.jpg',
]
