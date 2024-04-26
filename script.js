document.addEventListener("DOMContentLoaded", function() {
    var starsWrapper = document.querySelector('.stars-wrapper');
    var starsSvg = document.getElementById('stars-svg');
    var extrasSvg = document.getElementById('extras-svg');
  
    for (var s = 0; s < 3; ++s) {
      var starsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      starsGroup.setAttribute('width', '100%');
      starsGroup.setAttribute('height', '100%');
      starsGroup.setAttribute('preserveAspectRatio', 'none');
  
      for (var i = 0; i < 200; ++i) {
        var cx = Math.round(Math.random() * 10000) / 100 + '%';
        var cy = Math.round(Math.random() * 10000) / 100 + '%';
        var r = Math.round((Math.random() + 0.5) * 10) / 10;
  
        var star = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        star.setAttribute('class', 'star');
        star.setAttribute('cx', cx);
        star.setAttribute('cy', cy);
        star.setAttribute('r', r);
  
        starsGroup.appendChild(star);
      }
  
      starsSvg.appendChild(starsGroup);
    }
  
    var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    var radialGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    radialGradient.setAttribute('id', 'comet-gradient');
    radialGradient.setAttribute('cx', '0');
    radialGradient.setAttribute('cy', '.5');
    radialGradient.setAttribute('r', '0.5');
  
    var stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', 'rgba(255,255,255,.8)');
  
    var stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', 'rgba(255,255,255,0)');
  
    radialGradient.appendChild(stop1);
    radialGradient.appendChild(stop2);
    defs.appendChild(radialGradient);
  
    extrasSvg.appendChild(defs);
  
    var comets = [
      { transform: 'rotate(-135)', cx: '0', cy: '0' },
      { transform: 'rotate(20)', cx: '100%', cy: '0' },
      { transform: 'rotate(300)', cx: '40%', cy: '100%' }
    ];
  
    comets.forEach(function(comet) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('transform', comet.transform);
  
      var ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
      ellipse.setAttribute('class', 'comet');
      ellipse.setAttribute('fill', 'url(#comet-gradient)');
      ellipse.setAttribute('cx', comet.cx);
      ellipse.setAttribute('cy', comet.cy);
      ellipse.setAttribute('rx', '150');
      ellipse.setAttribute('ry', '2');
  
      g.appendChild(ellipse);
      extrasSvg.appendChild(g);
    });
  });


let promContainer = document.querySelector('#prom-container')
let fakeOut = document.querySelector('#fakeout-container')

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        fakeOut.classList.add('d-none');
        promContainer.classList.remove('d-none');
    }
})