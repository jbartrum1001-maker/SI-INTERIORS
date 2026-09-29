// Mobile menu toggle, footer year, and a guard for the unset form endpoint.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Logo carousel: repeat the logos enough times to fill the screen, then loop by exactly one set.
  // Skipped if the visitor prefers reduced motion (they get a static row instead).
  var viewport = document.querySelector('.logos-viewport');
  var track = document.querySelector('.logos-track');
  if (viewport && track && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var originals = Array.prototype.slice.call(track.children);
    var SPEED = 50; // pixels per second

    var buildCarousel = function () {
      Array.prototype.slice.call(track.querySelectorAll('[data-clone]')).forEach(function (n) { n.remove(); });
      viewport.classList.add('moving'); // measure in the moving (single-line) layout

      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      var setWidth = track.scrollWidth + gap; // one full set of logos plus the gap after it
      if (setWidth <= gap) return;

      var guard = 0;
      while (track.scrollWidth < viewport.clientWidth + setWidth && guard++ < 20) {
        originals.forEach(function (li) {
          var copy = li.cloneNode(true);
          copy.setAttribute('data-clone', '');
          copy.setAttribute('aria-hidden', 'true');
          copy.querySelector('img').alt = '';
          track.appendChild(copy);
        });
      }

      track.style.setProperty('--logos-shift', setWidth + 'px');
      track.style.setProperty('--logos-duration', (setWidth / SPEED) + 's');
    };

    buildCarousel();
    window.addEventListener('load', buildCarousel);
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildCarousel, 200);
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Until a real form endpoint is set, don't send the visitor to a dead page.
  var form = document.querySelector('.form');
  var status = document.querySelector('.form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      if (form.action.indexOf('PLACEHOLDER') !== -1) {
        e.preventDefault();
        status.hidden = false;
        status.textContent = 'Form not connected yet. Please call or email instead.';
      }
    });
  }
})();
