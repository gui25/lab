/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#ff0000',
    lineColor: '#ff1100'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 25 + 'px';
}, false);


