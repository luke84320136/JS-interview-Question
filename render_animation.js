function render() {
  if (scrollY != null) {
    let move = (scrollY - window.scrollY) * 0.1;
    window.scrollY(0, window.scrollY + move);
    // 距離非常短  STOP Animate
    if (Math.abs(scrollY - window.scrollY) < 50) scrollY = null;
  }
  requestAnimationFrame(render);
}

render();
