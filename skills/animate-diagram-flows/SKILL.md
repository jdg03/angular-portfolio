---
name: animate-diagram-flows
description: Animate architecture diagrams, CI/CD pipelines, event-driven systems, and agent workflows with visible messages and service activation. Use when a user wants an existing diagram or cover to look alive and explain its flow, while preserving the artwork. Supports raster images with SVG overlays and native SVG diagrams, across web frameworks.
---

# Animate diagram flows

Produce a working flow animation, not a slideshow or a pan/zoom effect. Preserve the approved composition, labels and source artwork. Prefer SVG plus the browser Web Animations API for ordinary 2D flows; use an existing animation engine when the project already depends on it or the requested choreography warrants it.

## Choose the rendering mode

- Existing raster: retain the original; animate a separate SVG overlay aligned to a runtime copy. Do not regenerate text, repaint the image or animate the whole bitmap to simulate data flow.
- Existing SVG: animate dedicated markers and module outlines without disturbing original paths or text.
- New diagram: use code-native SVG for sharp labels and geometry when possible. Generate raster art only when the requested visual style benefits from it.

Read [geometry and verification](references/geometry-and-verification.md) before measuring routes. For Angular integration, also read [Angular lifecycle](references/angular.md). The [working example](assets/demo.html) and [framework-independent player](assets/flow-player.mjs) demonstrate native SVG animation without dependencies; serve them over HTTP to try them. They are adaptable starting points, not a replacement for project conventions.

## Model the flow before adding motion

Inspect the actual asset and identify producers, consumers, boundaries, direction, fan-out and return paths. Trace the existing arrows. If the architecture is ambiguous, ask only about the consequential ambiguity; do not invent a backend behavior and present it as fact.

Use a small data model: viewBox dimensions, route IDs and paths, start/duration, module rectangles, activation times, accent and cycle duration. Coordinate every theme with its own diagram geometry. Do not apply one theme's paths to a different architecture.

Make timing explain the system: upstream message arrives before its receiver activates; parallel consumers can run together; retries, telemetry and failures use their actual branches. Distinguish illustrative sequencing from real latency. Use short visible messages and restrained outline pulses so the labels remain readable.

## Preserve geometry and assets

Render image and overlay in the same aspect-ratio wrapper with identical dimensions and viewBox mapping. Scale the pair as a unit. Avoid cropping, distortion, or viewport-sized SVG coordinates applied to image-local routes. Explicitly set marker motion-path origin and anchor; inspect actual marker position, not just changing animation clocks.

Keep originals untouched. Copy assets before conversion or experimentation. If the user asks to ignore source originals in Git, narrowly ignore only that archive and verify that runtime copies remain included and no app references ignored files. Do not silently apply this repository's archive policy to another project.

Use responsive image sizes when raster labels need resolution. Match source density to rendered size and device pixel ratio; CSS stretching cannot recover missing detail. SVG text is preferable when the user authorizes rebuilding the diagram.

## Integrate real playback

Start browser animation after client rendering and image readiness. Keep server rendering deterministic and readable. Cache-hit image loads, theme switches and component destruction must work too.

Maintain one playback decision from readiness, reduced-motion preference, user pause, intersection and document visibility. Pause when offscreen or hidden, resume at the current position, and cancel effects and detach observers/listeners on disposal. Cancel the old theme's effects before building its replacement. Use a static diagram if required browser APIs are unavailable.

Respect reduced motion by default. An explicit motion override is a product choice, not a universal default. Provide usable playback controls when requested or required by the host interface; avoid disabled controls with no explanation. Continuous autoplay must not prevent users from accessing an available motion preference or pause mechanism. Do not add controls merely because the example exposes a playback API.

## Verify the delivered result

Use the browser tooling available in the target agent: Playwright, CDP or equivalent. No particular MCP or provider is required. Check a real advancing frame and marker position against the artwork, not only a running flag. Confirm hidden/offscreen suspension, resumption, reduced-motion behavior, theme replacement and cleanup. Verify desktop/mobile layout, sharpness and the amount of introductory content visible under a cover. Run the project's relevant build checks.

Report the renderer, which assets changed, what remains original, and what was actually tested. If browser validation is unavailable, state the limitation rather than claiming the animation was verified.

## Portability

Instructions and example assets use relative paths, standard browser APIs and no proprietary tools. Read [installation and reuse](references/portability.md) when sharing with another agent. Do not copy machine-specific filesystem paths, this portfolio's personal content or its source imagery into another project.
