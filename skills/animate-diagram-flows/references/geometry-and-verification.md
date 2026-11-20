# Geometry and visual verification

## Map the actual artwork

Use one coordinate system, for example viewBox="0 0 851 315". These are example dimensions, not a required banner size.

When an inspected image has dimensions W × H and the viewBox is Vw × Vh, convert an image point with xSvg = xImage * Vw / W and ySvg = yImage * Vh / H. Subtract any preview padding or letterboxing before converting screenshot coordinates. Images with different crops cannot share routes merely because their dimensions match.

For a raster, use a relative wrapper with the art's aspect ratio; render the image at width/height 100% and an absolute SVG overlay with inset:0 and width/height:100%. Keep both content rectangles identical. If a cover needs less height, scale the whole wrapper and center it in a neutral container; do not crop the arrows or independently stretch the overlay.

A marker at cx=0, cy=0 can follow CSS offset-path: path("M..."). Set offset-anchor:0px 0px, offset-position:0 0 and offset-rotate:0deg. A missing explicit origin can displace packets even when the path itself is correct. Keep data coordinates in SVG units. Check in target browsers.

## Sequence data, not decoration

Store routes separately from rendering:
- id, path, start and duration in consistent time units;
- module id, x/y/width/height and activation time;
- cycle duration and theme accent.

A service should activate when its incoming packet reaches it. Fan-out branches can share a start. A dead-letter route belongs after a failed consumer attempt, not as the normal success destination. Telemetry is illustrative unless actual instrumentation drives it.

The included player uses a common clock and encodes the start inside normalized keyframes instead of independent repeating delays. Keep every start + duration inside the cycle. Its example values are illustrative and should be replaced with timings appropriate to the target graph.

## Verification that catches false positives

1. Capture the static art and check the routes against existing arrows.
2. Allow normal motion in browser emulation. Sample at least two distinct times; assert an actual packet changes position and remains on its route. Changing animation.currentTime alone does not prove visible movement.
3. Pause, wait one animation frame, then sample again. Verify position/time stays stable. Resume and verify advancement.
4. For deterministic screenshots, pause all effects and set their currentTime to a chosen visible segment. This is an inspection technique, not an autoplay test.
5. Scroll the diagram outside the viewport and verify effects pause. Scroll back and verify they resume. Simulate document visibility when browser tooling supports it.
6. Emulate reduced motion before mounting and change it while mounted. Verify static art remains useful.
7. Change themes while a raster is loading, then with its asset cached. Verify only the selected theme's effects remain. Unmount and verify listeners/observers/effects are released.
8. Check narrow mobile, short laptop and wide desktop screens. Inspect clipping, horizontal overflow, label clarity and whether important content below the cover is visible.
9. Check console errors and asset failures. Verify a build from included files does not depend on ignored originals.

Raster clarity depends on source pixels, rendered width and DPR. Responsive WebP is useful for photographic/generated art; preserve approved originals. Native SVG labels stay sharp but rebuilding text/geometry is a separate design decision.

Avoid animating blur/filter/shadow across the entire cover. Keep packet count proportional to actual routes. No video or large animation library is required for this technique. Do not promise a performance or SEO benefit without measuring it.
