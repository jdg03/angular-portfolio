# Icon sources

The inline brand icons in src/app/shared/components/svg-icon/svg-icon.html use these sources (retrieved 2026-10-24):

- Codex: https://github.com/pheralb/svgl/blob/main/static/library/codex_light.svg — outer fill follows currentColor for theme contrast.
- Claude (displayed as Claude Code): https://github.com/pheralb/svgl/blob/main/static/library/claude-ai-icon.svg
- Antigravity: https://github.com/pheralb/svgl/blob/main/static/library/antigravity.svg
- Terraform: https://github.com/pheralb/svgl/blob/main/static/library/terraform.svg — class fill moved inline to avoid global .cls-1 collisions.
- google-adk.png: https://github.com/google/adk-docs/blob/main/docs/assets/agent-development-kit.png — the logo configured by the official documentation in mkdocs.yml.

Existing React SVG path data matches SVGL react_dark.svg. The historic origin of every other existing icon is not documented. SVGL repository license: https://github.com/pheralb/svgl/blob/main/LICENSE (MIT). Product names and logos remain their respective owners' trademarks. Google ADK documentation license: https://github.com/google/adk-docs/blob/main/LICENSE.
