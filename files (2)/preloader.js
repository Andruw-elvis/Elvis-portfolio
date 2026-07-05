/* ============================================
   ELVIS SIGNATURE PRELOADER — SCRIPT
   ============================================ */
(function(){
  const preloader   = document.getElementById('preloader');
  const sigWrap      = document.getElementById('sigWrap');
  const fillEl       = document.getElementById('progressFill');
  const percentEl    = document.getElementById('progressPercent');
  const siteEl       = document.getElementById('site');

  let pct = 0;
  // Total runtime ~4.2s, matching the signature draw + a beat to admire it.
  const totalDuration = 4200;
  const startTime = performance.now();

  function easeOutQuart(t){
    return 1 - Math.pow(1 - t, 4);
  }

  function tick(now){
    const elapsed = now - startTime;
    const t = Math.min(elapsed / totalDuration, 1);
    pct = Math.round(easeOutQuart(t) * 100);

    fillEl.style.width = pct + '%';
    percentEl.textContent = pct + '%';

    if (t < 1){
      requestAnimationFrame(tick);
    } else {
      onLoadComplete();
    }
  }

 function onLoadComplete(){
  sigWrap.classList.add('complete');

  setTimeout(() => {
    preloader.classList.add('done');

    document.body.classList.remove('loading');

    if (siteEl) siteEl.classList.add('show');
  }, 650);
}

  requestAnimationFrame(tick);

  // Safety net: hook here if you want to sync with real asset loading.
  window.addEventListener('load', () => {
    // no-op hook
  });
})();
