# Installation and reuse

Copy the entire animate-diagram-flows directory, including references and assets. Do not copy SKILL.md alone.

Common installation locations:
- Codex personal: ~/.codex/skills/animate-diagram-flows/ (or the configured CODEX_HOME/skills directory).
- Claude Code project: .claude/skills/animate-diagram-flows/.
- GitHub Copilot project: .github/skills/animate-diagram-flows/.

Use one canonical copy per agent/project to avoid conflicting duplicates. agents/openai.yaml is optional Codex UI metadata; other agents can use the standard SKILL.md entrypoint without it. Automatic discovery and reload timing depend on the host. Restart/reload the agent if a newly installed skill is not listed.

Example request:
"Use animate-diagram-flows to animate this existing cloud architecture. Preserve the original image and English labels, show requests and telemetry following the arrows, and integrate the result into the cover. Respect reduced motion and verify it in a browser."

Codex also supports explicit invocation using $animate-diagram-flows; Claude Code exposes skills as /animate-diagram-flows. Other hosts can be asked by name or told to read SKILL.md directly when automatic discovery is unavailable. Reading instructions manually does not provide browser or filesystem capabilities the agent lacks.

## Trying the example

Serve the assets folder over HTTP with an available local static server. For example, from the skill directory:
python -m http.server 8765 --directory assets --bind 127.0.0.1

Open http://127.0.0.1:8765/demo.html. The module uses standard browser APIs with no npm installation. Its pause button toggles an explicit user pause; the player's preference, intersection and visibility gates still apply.

To reuse with a raster, keep your own approved image in a shared aspect-ratio wrapper and replace the example static SVG artwork with that image plus a transparent SVG containing the corresponding markers/outlines. The example's coordinates are not transferable to a new image.

## Format sources

Checked 2026-10-24:
- Agent Skills specification: https://agentskills.io/specification
- Claude Code skills: https://code.claude.com/docs/en/skills
- GitHub Copilot skills: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills

The skill uses the shared name/description frontmatter and relative files. It requires no provider-specific MCP, account, image-generation service or Angular runtime. Browser validation still requires a browser tool supplied by the host.
