# claude-sneakpeek

Isolated Claude Code variants with swarm mode and multi-provider support.

## What is this?

claude-sneakpeek installs fully isolated copies of Claude Code -- each with its own config, sessions, MCP servers, and credentials. Your existing Claude Code installation is completely untouched.

It unlocks **swarm mode**, a native multi-agent orchestration feature built into Claude Code but gated behind feature flags in public releases. Swarm mode lets Claude spawn teammate agents, delegate tasks in the background, and coordinate work across multiple agents from a single conversation.

It also supports **alternative AI providers** as drop-in replacements for the Anthropic API. You can run Claude Code's interface powered by Z.ai, MiniMax, Kimi, OpenRouter, or local models -- each in its own isolated variant with provider-specific theming.

## Quick Start

```bash
npx github:gustavo-v-monteiro/custom-claudecode quick --name claudesp
```

Add `~/.local/bin` to your PATH if it isn't already (macOS/Linux):

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

Then run `claudesp` to launch.

For the full interactive setup wizard:

```bash
npx github:gustavo-v-monteiro/custom-claudecode
```

## What gets unlocked?

**Swarm mode** enables native multi-agent orchestration that is built into Claude Code but not yet publicly released. claude-sneakpeek patches a feature gate in the bundled CLI to force-enable it.

When active, Claude gains access to:

- **TeammateTool** -- spawn teammate agents that work in parallel
- **Delegate mode** -- hand off tasks to background agents
- **Team coordination** -- agents communicate via a shared message system and coordinate ownership of subtasks

Swarm mode is enabled by default on all variants.

## Supported Providers

| Provider | Models | Auth | Description |
|----------|--------|------|-------------|
| **Mirror** | Claude (Anthropic native) | OAuth / API key | Pure Claude with isolated config. No proxy. |
| **Z.ai** | GLM-4.7, GLM-4.5-Air | API key | GLM models via Z.ai Coding Plan |
| **MiniMax** | MiniMax-M2.1 | API key | Unified model with MCP server integration |
| **Kimi** | Kimi K2.5 (Multimodal) | API key | Multimodal coding from Moonshot AI |
| **OpenRouter** | 100+ models | Auth token | Any model via OpenRouter gateway |
| **CCRouter** | Local LLMs | Optional | Ollama, DeepSeek, and other local models |

Each provider can be selected during setup. Mirror is the default and uses your existing Anthropic authentication.

## Commands

```bash
# Install
npx github:gustavo-v-monteiro/custom-claudecode quick --name <name>       # Fast setup
npx github:gustavo-v-monteiro/custom-claudecode create                     # Full wizard
npx github:gustavo-v-monteiro/custom-claudecode                            # Interactive TUI

# Manage
npx github:gustavo-v-monteiro/custom-claudecode update <name>              # Update a variant
npx github:gustavo-v-monteiro/custom-claudecode update                     # Update all variants
npx github:gustavo-v-monteiro/custom-claudecode remove <name>              # Uninstall a variant
npx github:gustavo-v-monteiro/custom-claudecode list                       # List all variants
npx github:gustavo-v-monteiro/custom-claudecode doctor                     # Health check
npx github:gustavo-v-monteiro/custom-claudecode tweak <name>               # Launch theme editor
```

### Create options

```
--provider <name>          Provider: mirror, zai, minimax, kimi, openrouter, ccrouter
--name <name>              Variant name (becomes the CLI command)
--api-key <key>            Provider API key
--brand <name>             Theme preset: auto, none, zai, minimax, kimi, etc.
--model-sonnet <model>     Override the sonnet-tier model
--model-opus <model>       Override the opus-tier model
--model-haiku <model>      Override the haiku-tier model
--no-tweak                 Skip theming
--no-prompt-pack           Skip provider prompt enhancements
```

## How It Works

Each variant is a self-contained Claude Code installation:

1. **Isolated npm install** -- Claude Code is installed into a per-variant `npm/` directory, separate from any global install.

2. **Feature gate patching** -- Swarm mode is enabled by patching a statsig gate in the bundled `cli.js` that controls access to native multi-agent tools.

3. **Wrapper script** -- A shell script is placed in `~/.local/bin/<name>` that sets `CLAUDE_CONFIG_DIR` to the variant's config directory, loads provider env vars from `settings.json`, displays the provider splash art, and launches Claude Code.

4. **Provider theming** -- Each provider has an optional brand theme applied via [TweakCC](https://github.com/Piebald-AI/tweakcc), including custom color schemes, thinking animations, and splash art.

## Where Things Live

```
~/.claude-sneakpeek/<name>/
  npm/                     Claude Code installation
  config/
    settings.json          Env vars (API keys, model mappings, base URLs)
    .claude.json           MCP servers, theme, onboarding state
  tweakcc/
    config.json            Brand theme configuration
    system-prompts/        Provider-specific prompt overlays
  variant.json             Metadata (provider, brand, version)

~/.local/bin/<name>        Wrapper script (macOS/Linux)
```

Variants are completely independent. You can have multiple variants with different providers, models, and configurations running side by side.

## Credits

This project builds on work by several people and projects:

- **[cc-mirror](https://github.com/numman-ali/cc-mirror)** by [Numman Ali](https://github.com/numman-ali) -- the original multi-provider router that claude-sneakpeek is forked from. The provider system, brand theming architecture, and variant isolation model all originate from cc-mirror.

- **[TweakCC](https://github.com/Piebald-AI/tweakcc)** by Piebald AI -- used for system prompt customization, CLI theming, and provider-specific prompt overlays.

- **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** by Anthropic -- the upstream CLI that each variant wraps.

## License

[MIT](LICENSE)
