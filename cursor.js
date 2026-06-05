/* ================================================
   HALNIP — Custom Cursor
   ドット（即追従）＋ リング（遅延追従）
   ================================================ */
(function () {
  // タッチデバイスは無効
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'c-cursor-dot';
  ring.className = 'c-cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mX = -100, mY = -100;
  let rX = -100, rY = -100;

  // ── マウス追従 ──
  document.addEventListener('mousemove', e => {
    mX = e.clientX;
    mY = e.clientY;
    dot.style.transform = `translate(${mX}px, ${mY}px)`;
  });

  // ── リングは lerp でゆっくり追従 ──
  (function animate() {
    rX += (mX - rX) * 0.1;
    rY += (mY - rY) * 0.1;
    ring.style.transform = `translate(${rX}px, ${rY}px)`;
    requestAnimationFrame(animate);
  })();

  // ── ホバー時：リング拡大 ──
  const hoverTargets = 'a, button, [role="button"], input, textarea, select, label, .btn, .filter-btn, .j-card, .journal__card, .brand__gallery-item';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) {
      ring.classList.add('hover');
      dot.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) {
      ring.classList.remove('hover');
      dot.classList.remove('hover');
    }
  });

  // ── クリック時：収縮 ──
  document.addEventListener('mousedown', () => ring.classList.add('click'));
  document.addEventListener('mouseup',   () => ring.classList.remove('click'));

  // ── ウィンドウ外に出たら非表示 ──
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();
