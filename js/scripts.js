/*!
    Description: This file contains all the scripts associated with web site
*/

(function() {
  // Browser resize and set #lead to 100vh
  function resize() {
    var heights = window.innerHeight;
    document.getElementById("lead").style.height = heights + "px";
  }

  resize();

  window.onresize = function() {
    resize();
  };

  // Fake loading.
  setTimeout(init, 1200);

  function init() {
    document.body.classList.remove('loading');
  }
})();
