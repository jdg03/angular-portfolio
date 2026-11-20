# Angular integration

Use the Angular version and conventions already in the project. The original portfolio implementation used standalone components, signal inputs, computed playback state, afterNextRender, afterRenderEffect and DestroyRef. Those are integration choices, not dependencies of the technique.

- Keep graph data in a typed module and let the component render SVG markers/outlines. Keep framework state separate from Animation objects.
- Read window, matchMedia, document visibility and IntersectionObserver only after browser rendering. SSR should produce readable static artwork without DOM API access.
- For raster readiness, attach load handling and also check image.complete && image.naturalWidth > 0 after rendering. A cached image may have loaded before the handler was attached.
- Associate readiness with the selected asset identity, not a single forever-true boolean. A theme change must not start new paths over the old image. Compare the loaded asset against the expected URL/currentSrc, or mount a keyed child per graph.
- Rebuild after the new SVG nodes render; cancel old effects first. Include asset identity, theme/graph and reduced-motion changes in the rebuild dependencies.
- Compute running from readiness, matching image identity, preference/explicit override, user pause, in-view status and document visibility.
- Apply play/pause when running changes. Apply that same state immediately after creating effects: a running boolean that stays true across a rebuild may not retrigger a separate effect.
- Avoid tracking incidental signal reads inside imperative animation creation; use untracked where appropriate for the Angular version.
- DestroyRef cleanup must cancel all animations, disconnect the observer and remove media/visibility listeners. Route navigation and theme toggling must not accumulate effects.

For a native SVG there is no raster load gate. For a raster overlay mark only the overlay aria-hidden and give the image useful alternative text describing the architecture. For native SVG use an accessible name/description. Do not expose every decorative moving packet to assistive technology.

The example player can be mounted after rendering with an explicitly rendered marker/outlines SVG, but it does not own image readiness or theme selection. Gate those in the Angular host and call dispose before remounting. Prefer adapting the existing component over adding a second lifecycle owner.
