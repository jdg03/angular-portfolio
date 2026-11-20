// Mount only after the browser has rendered the selected graph.
// For raster overlays, the host must also gate mounting on the matching image load.
export function mountFlow(svg, { routes, modules = [], period = 8 }) {
  const win = svg.ownerDocument.defaultView;
  const doc = svg.ownerDocument;
  const finite = (v) => Number.isFinite(v) && v >= 0;
  if (!Number.isFinite(period) || period <= 0) throw new Error('Invalid cycle duration');
  const entries = [];
  for (const route of routes) {
    if (!finite(route.start) || !Number.isFinite(route.duration) || route.duration <= 0 ||
        route.start + route.duration + 0.1 >= period) throw new Error('Route exceeds cycle: ' + route.id);
    const el = Array.from(svg.querySelectorAll('[data-message]')).find(n => n.dataset.message === route.id);
    if (!el || !route.path) throw new Error('Missing marker/path: ' + route.id);
    entries.push({ el, route });
  }
  for (const module of modules) {
    if (!finite(module.start) || module.start + 0.6 >= period) throw new Error('Module exceeds cycle: ' + module.id);
    const el = Array.from(svg.querySelectorAll('[data-module]')).find(n => n.dataset.module === module.id);
    if (!el) throw new Error('Missing module: ' + module.id);
    entries.push({ el, module });
  }
  const noop = () => {};
  if (!win || typeof svg.animate !== 'function' || typeof win.matchMedia !== 'function' ||
      !win.CSS?.supports('offset-path', 'path("M0 0H10")')) {
    return { supported: false, setPaused: noop, dispose: noop };
  }
  const animations = [];
  const media = win.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let inView = false;
  let disposed = false;
  const sync = () => {
    const reduced = media.matches;
    const running = !disposed && !paused && !reduced && inView && !doc.hidden;
    svg.dataset.running = String(running);
    for (const animation of animations) {
      if (running) animation.play();
      else animation.pause();
      // A reduced-motion user sees the static diagram, not a frozen mid-route packet.
      if (reduced) animation.currentTime = 0;
    }
  };
  try {
    for (const { el, route, module } of entries) {
      let frames;
      if (route) {
        el.style.offsetPath = 'path(' + JSON.stringify(route.path) + ')';
        el.style.offsetAnchor = '0px 0px';
        el.style.offsetPosition = '0 0';
        el.style.offsetRotate = '0deg';
        frames = [
          { opacity: 0, offsetDistance: '0%', offset: 0 },
          { opacity: 0, offsetDistance: '0%', offset: route.start / period },
          { opacity: 1, offsetDistance: '0%', offset: (route.start + Math.min(0.01, route.duration / 10)) / period },
          { opacity: 1, offsetDistance: '100%', offset: (route.start + route.duration) / period },
          { opacity: 0, offsetDistance: '100%', offset: (route.start + route.duration + 0.1) / period },
          { opacity: 0, offsetDistance: '100%', offset: 1 },
        ];
      } else {
        frames = [
          { opacity: 0, offset: 0 },
          { opacity: 0, offset: module.start / period },
          { opacity: 0.9, offset: (module.start + 0.1) / period },
          { opacity: 0, offset: (module.start + 0.6) / period },
          { opacity: 0, offset: 1 },
        ];
      }
      const animation = el.animate(frames, { duration: period * 1000, iterations: Infinity, easing: 'linear' });
      animation.pause();
      animations.push(animation);
    }
  } catch (error) {
    animations.forEach(a => a.cancel());
    throw error;
  }
  const observer = typeof win.IntersectionObserver === 'function'
    ? new win.IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); })
    : null;
  if (observer) observer.observe(svg);
  else inView = true;
  media.addEventListener('change', sync);
  doc.addEventListener('visibilitychange', sync);
  sync();
  return {
    supported: true,
    setPaused(value) { if (!disposed) { paused = Boolean(value); sync(); } },
    dispose() {
      if (disposed) return;
      disposed = true;
      observer?.disconnect();
      media.removeEventListener('change', sync);
      doc.removeEventListener('visibilitychange', sync);
      animations.forEach(a => a.cancel());
      svg.dataset.running = 'false';
    },
  };
}
