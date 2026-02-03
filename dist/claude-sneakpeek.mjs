#!/usr/bin/env node

// src/cli/args.ts
var parseArgs = (argv) => {
  const opts = { _: [], env: [] };
  const args = [...argv];
  while (args.length > 0) {
    const arg = args.shift();
    if (!arg.startsWith("-")) {
      opts._.push(arg);
      continue;
    }
    if (arg === "--yes") {
      opts.yes = true;
      continue;
    }
    if (arg === "--no-tweak") {
      opts.noTweak = true;
      continue;
    }
    if (arg === "--tui") {
      opts.tui = true;
      continue;
    }
    if (arg === "--quick" || arg === "--simple") {
      opts.quick = true;
      continue;
    }
    if (arg === "--no-tui") {
      opts.noTui = true;
      continue;
    }
    if (arg.startsWith("--env=")) {
      opts.env.push(arg.slice("--env=".length));
      continue;
    }
    if (arg === "--env") {
      const value2 = args.shift();
      if (value2) opts.env.push(value2);
      continue;
    }
    const [key, inlineValue] = arg.startsWith("--") ? arg.slice(2).split("=") : [void 0, void 0];
    if (!key) continue;
    let value;
    if (inlineValue !== void 0) {
      value = inlineValue;
    } else {
      const next = args[0];
      if (next && !next.startsWith("-")) {
        value = args.shift();
      }
    }
    if (value !== void 0) {
      opts[key] = value;
    } else {
      opts[key] = true;
    }
  }
  return opts;
};

// src/tui/content/haikus.ts
var COMPLETION_HAIKUS = {
  zai: [
    ["Gold streams, code dreams\u2014", "your variant awaits you now.", "GLM starts to gleam."],
    ["Calibrated well,", "the mirror reflects your code.", "Zai hears your call."]
  ],
  minimax: [
    ["Coral light shines bright,", "MiniMax pulses with power.", "AGI for all."],
    ["Resonating deep,", "the model learns to listen.", "Your code takes its leap."]
  ],
  openrouter: [
    ["Many paths, one door\u2014", "OpenRouter finds the way.", "Models at your core."],
    ["Routes converge as one,", "your choice echoes through the wire.", "The journey begun."]
  ],
  ccrouter: [
    ["Local models shine,", "routed through the mirror's edge.", "Your code, your design."],
    ["Proxied through the night,", "your models stand at the ready.", "Code takes its first flight."]
  ],
  kimi: [
    ["Prism breaks the light,", "Kimi thinks in royal blue,", "Code begins to flow."],
    ["Through the crystal lens,", "Deepest space and bright insights,", "Your variant lives."]
  ],
  default: [
    ["Mirror reflects true,", "your variant is ready now.", "Go build something new."],
    ["Configuration done,", "the wrapper awaits your call.", "Your coding has begun."]
  ]
};
var getRandomHaiku = (providerKey) => {
  const haikus = COMPLETION_HAIKUS[providerKey || ""] || COMPLETION_HAIKUS.default;
  return haikus[Math.floor(Math.random() * haikus.length)];
};

// src/core/constants.ts
import os from "node:os";
import path from "node:path";
var DEFAULT_ROOT = path.join(os.homedir(), ".claude-sneakpeek");
var DEFAULT_BIN_DIR = process.platform === "win32" ? path.join(DEFAULT_ROOT, "bin") : path.join(os.homedir(), ".local", "bin");
var TWEAKCC_VERSION = "3.2.2";
var DEFAULT_NPM_PACKAGE = "@anthropic-ai/claude-code";
var DEFAULT_NPM_VERSION = "2.1.22";
var NATIVE_MULTIAGENT_SUPPORTED = true;
var TEAM_MODE_SUPPORTED = false;

// src/cli/help.ts
var printHelp = () => {
  console.log(`
\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551                        CLAUDE-SNEAKPEEK                                  \u2551
\u2551                     Claude Code, Unshackled                              \u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

  Pre-configured Claude Code variants with custom providers,
  prompt packs, and battle-tested enhancements.

  One command. Instant power-up.

FOCUS
  CLAUDE-SNEAKPEEK focuses on provider enablement and stable workflows.
  Team mode is only supported in claude-sneakpeek 1.6.3 (published release).

QUICK START
  npx claude-sneakpeek quick --provider mirror    # Fastest path to multi-agent
  npx claude-sneakpeek quick --provider zai       # Z.ai with GLM models
  npx claude-sneakpeek                            # Interactive TUI

COMMANDS
  quick [options]              Fast setup: provider \u2192 ready in 30s
  create [options]             Full configuration wizard
  list                         List all variants
  update [name]                Update to latest Claude Code
  remove <name>                Remove a variant
  doctor                       Health check all variants
  tweak <name>                 Launch tweakcc customization
  tasks [operation]            Manage legacy team tasks (claude-sneakpeek 1.6.3 only)

OPTIONS (create/quick)
  --name <name>                Variant name (becomes CLI command)
  --provider <name>            Provider: mirror | zai | minimax | openrouter | ccrouter
  --api-key <key>              Provider API key
  --brand <preset>             Theme: auto | none | mirror | zai | minimax
  --tui / --no-tui             Force TUI on/off

OPTIONS (advanced)
  --base-url <url>             ANTHROPIC_BASE_URL override
  --model-sonnet <name>        Default Sonnet model
  --model-opus <name>          Default Opus model
  --model-haiku <name>         Default Haiku model
  --root <path>                Variants root (default: ${DEFAULT_ROOT})
  --bin-dir <path>             Wrapper install dir (default: ${DEFAULT_BIN_DIR})
  --no-tweak                   Skip tweakcc theming
  --no-prompt-pack             Skip provider prompt pack
  --shell-env                  Write env vars to shell profile
  --verbose                    Show full tweakcc output during update

PROVIDERS
  mirror        Pure Claude (recommended)
  zai           GLM-4.7 via Z.ai Coding Plan
  minimax       MiniMax-M2.1 via MiniMax Cloud
  openrouter    100+ models via OpenRouter
  ccrouter      Local LLMs via Claude Code Router

EXAMPLES
  npx claude-sneakpeek quick --provider mirror --name mclaude
  npx claude-sneakpeek quick --provider zai --api-key "$Z_AI_API_KEY"
  npx claude-sneakpeek tasks graph
  npx claude-sneakpeek doctor

LEARN MORE
  https://github.com/mikekelly/claude-sneakpeek

\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
Created by Numman Ali \u2022 https://x.com/nummanali
`);
};
var printHaiku = () => {
  const haiku = getRandomHaiku();
  console.log(`
    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    ${haiku[0]}
    ${haiku[1]}
    ${haiku[2]}
    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`);
};

// src/cli/tui.ts
import fs from "node:fs";
import path2 from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
var dirname = path2.dirname(fileURLToPath(import.meta.url));
var shouldLaunchTui = (cmd, opts) => {
  if (opts.noTui) return false;
  if (opts.tui) return true;
  if (!process.stdout.isTTY) return false;
  if (cmd === "create") {
    const hasArgs = opts.yes || Boolean(opts.name) || Boolean(opts.provider) || Boolean(opts["base-url"]) || Boolean(opts["api-key"]) || (opts._?.length ?? 0) > 0;
    return !hasArgs;
  }
  return false;
};
var runTui = async () => {
  const candidates = [
    process.env.CC_MIRROR_TUI_PATH,
    path2.join(dirname, "..", "tui", "index.tsx"),
    path2.join(dirname, "..", "tui", "index.mjs"),
    path2.join(dirname, "tui.mjs")
  ].filter(Boolean);
  const target = candidates.find((filePath) => fs.existsSync(filePath));
  if (!target) {
    throw new Error("Unable to locate TUI entrypoint.");
  }
  await import(pathToFileURL(target).href);
};

// src/core/index.ts
import fs17 from "node:fs";
import path25 from "node:path";

// src/core/fs.ts
import fs2 from "node:fs";
var ensureDir = (dir) => {
  fs2.mkdirSync(dir, { recursive: true });
};
var writeJson = (filePath, data) => {
  fs2.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
var readJson = (filePath) => {
  try {
    return JSON.parse(fs2.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
};

// src/core/paths.ts
import { spawnSync } from "node:child_process";
import os2 from "node:os";
import path3 from "node:path";
var isWindows = process.platform === "win32";
var VARIANT_NAME_PATTERN = /^[A-Za-z0-9_][A-Za-z0-9._-]*$/;
var assertValidVariantName = (name) => {
  if (!name || !VARIANT_NAME_PATTERN.test(name)) {
    throw new Error(
      `Invalid variant name "${name}". Use letters, numbers, underscores, dots, and dashes (no spaces or slashes).`
    );
  }
};
var expandTilde = (input) => {
  if (!input) return input;
  if (input === "~") return os2.homedir();
  if (input.startsWith("~/")) return path3.join(os2.homedir(), input.slice(2));
  return input;
};
var normalizeWrapperBaseName = (name) => {
  if (!isWindows) return name;
  return name.toLowerCase().endsWith(".cmd") ? name.slice(0, -4) : name;
};
var getWrapperFilename = (name) => isWindows ? `${normalizeWrapperBaseName(name)}.cmd` : name;
var getWrapperScriptFilename = (name) => `${normalizeWrapperBaseName(name)}.mjs`;
var getWrapperPath = (binDir, name) => path3.join(binDir, getWrapperFilename(name));
var getWrapperScriptPath = (binDir, name) => path3.join(binDir, getWrapperScriptFilename(name));
var commandExists = (cmd) => {
  const result = spawnSync(process.platform === "win32" ? "where" : "which", [cmd], {
    encoding: "utf8"
  });
  return result.status === 0 && result.stdout.trim().length > 0;
};

// src/core/tweakcc.ts
import fs3 from "node:fs";
import { spawn, spawnSync as spawnSync2 } from "node:child_process";
import path4 from "node:path";
import { createRequire } from "node:module";

// src/brands/defaultThemes.ts
var DEFAULT_THEMES = [
  {
    name: "Dark mode",
    id: "dark",
    colors: {
      autoAccept: "rgb(175,135,255)",
      bashBorder: "rgb(253,93,177)",
      claude: "rgb(215,119,87)",
      claudeShimmer: "rgb(235,159,127)",
      claudeBlue_FOR_SYSTEM_SPINNER: "rgb(147,165,255)",
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(177,195,255)",
      permission: "rgb(177,185,249)",
      permissionShimmer: "rgb(207,215,255)",
      planMode: "rgb(72,150,140)",
      ide: "rgb(71,130,200)",
      promptBorder: "rgb(136,136,136)",
      promptBorderShimmer: "rgb(166,166,166)",
      text: "rgb(255,255,255)",
      inverseText: "rgb(0,0,0)",
      inactive: "rgb(153,153,153)",
      subtle: "rgb(80,80,80)",
      suggestion: "rgb(177,185,249)",
      remember: "rgb(177,185,249)",
      background: "rgb(0,204,204)",
      success: "rgb(78,186,101)",
      error: "rgb(255,107,128)",
      warning: "rgb(255,193,7)",
      warningShimmer: "rgb(255,223,57)",
      diffAdded: "rgb(34,92,43)",
      diffRemoved: "rgb(122,41,54)",
      diffAddedDimmed: "rgb(71,88,74)",
      diffRemovedDimmed: "rgb(105,72,77)",
      diffAddedWord: "rgb(56,166,96)",
      diffRemovedWord: "rgb(179,89,107)",
      diffAddedWordDimmed: "rgb(46,107,58)",
      diffRemovedWordDimmed: "rgb(139,57,69)",
      red_FOR_SUBAGENTS_ONLY: "rgb(220,38,38)",
      blue_FOR_SUBAGENTS_ONLY: "rgb(37,99,235)",
      green_FOR_SUBAGENTS_ONLY: "rgb(22,163,74)",
      yellow_FOR_SUBAGENTS_ONLY: "rgb(202,138,4)",
      purple_FOR_SUBAGENTS_ONLY: "rgb(147,51,234)",
      orange_FOR_SUBAGENTS_ONLY: "rgb(234,88,12)",
      pink_FOR_SUBAGENTS_ONLY: "rgb(219,39,119)",
      cyan_FOR_SUBAGENTS_ONLY: "rgb(8,145,178)",
      professionalBlue: "rgb(106,155,204)",
      rainbow_red: "rgb(235,95,87)",
      rainbow_orange: "rgb(245,139,87)",
      rainbow_yellow: "rgb(250,195,95)",
      rainbow_green: "rgb(145,200,130)",
      rainbow_blue: "rgb(130,170,220)",
      rainbow_indigo: "rgb(155,130,200)",
      rainbow_violet: "rgb(200,130,180)",
      rainbow_red_shimmer: "rgb(250,155,147)",
      rainbow_orange_shimmer: "rgb(255,185,137)",
      rainbow_yellow_shimmer: "rgb(255,225,155)",
      rainbow_green_shimmer: "rgb(185,230,180)",
      rainbow_blue_shimmer: "rgb(180,205,240)",
      rainbow_indigo_shimmer: "rgb(195,180,230)",
      rainbow_violet_shimmer: "rgb(230,180,210)",
      clawd_body: "rgb(215,119,87)",
      clawd_background: "rgb(0,0,0)",
      userMessageBackground: "rgb(55, 55, 55)",
      bashMessageBackgroundColor: "rgb(65, 60, 65)",
      memoryBackgroundColor: "rgb(55, 65, 70)",
      rate_limit_fill: "rgb(177,185,249)",
      rate_limit_empty: "rgb(80,83,112)"
    }
  },
  {
    name: "Light mode",
    id: "light",
    colors: {
      autoAccept: "rgb(135,0,255)",
      bashBorder: "rgb(255,0,135)",
      claude: "rgb(215,119,87)",
      claudeShimmer: "rgb(245,149,117)",
      claudeBlue_FOR_SYSTEM_SPINNER: "rgb(87,105,247)",
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(117,135,255)",
      permission: "rgb(87,105,247)",
      permissionShimmer: "rgb(137,155,255)",
      planMode: "rgb(0,102,102)",
      ide: "rgb(71,130,200)",
      promptBorder: "rgb(153,153,153)",
      promptBorderShimmer: "rgb(183,183,183)",
      text: "rgb(0,0,0)",
      inverseText: "rgb(255,255,255)",
      inactive: "rgb(102,102,102)",
      subtle: "rgb(175,175,175)",
      suggestion: "rgb(87,105,247)",
      remember: "rgb(0,0,255)",
      background: "rgb(0,153,153)",
      success: "rgb(44,122,57)",
      error: "rgb(171,43,63)",
      warning: "rgb(150,108,30)",
      warningShimmer: "rgb(200,158,80)",
      diffAdded: "rgb(105,219,124)",
      diffRemoved: "rgb(255,168,180)",
      diffAddedDimmed: "rgb(199,225,203)",
      diffRemovedDimmed: "rgb(253,210,216)",
      diffAddedWord: "rgb(47,157,68)",
      diffRemovedWord: "rgb(209,69,75)",
      diffAddedWordDimmed: "rgb(144,194,156)",
      diffRemovedWordDimmed: "rgb(232,165,173)",
      red_FOR_SUBAGENTS_ONLY: "rgb(220,38,38)",
      blue_FOR_SUBAGENTS_ONLY: "rgb(37,99,235)",
      green_FOR_SUBAGENTS_ONLY: "rgb(22,163,74)",
      yellow_FOR_SUBAGENTS_ONLY: "rgb(202,138,4)",
      purple_FOR_SUBAGENTS_ONLY: "rgb(147,51,234)",
      orange_FOR_SUBAGENTS_ONLY: "rgb(234,88,12)",
      pink_FOR_SUBAGENTS_ONLY: "rgb(219,39,119)",
      cyan_FOR_SUBAGENTS_ONLY: "rgb(8,145,178)",
      professionalBlue: "rgb(106,155,204)",
      rainbow_red: "rgb(235,95,87)",
      rainbow_orange: "rgb(245,139,87)",
      rainbow_yellow: "rgb(250,195,95)",
      rainbow_green: "rgb(145,200,130)",
      rainbow_blue: "rgb(130,170,220)",
      rainbow_indigo: "rgb(155,130,200)",
      rainbow_violet: "rgb(200,130,180)",
      rainbow_red_shimmer: "rgb(250,155,147)",
      rainbow_orange_shimmer: "rgb(255,185,137)",
      rainbow_yellow_shimmer: "rgb(255,225,155)",
      rainbow_green_shimmer: "rgb(185,230,180)",
      rainbow_blue_shimmer: "rgb(180,205,240)",
      rainbow_indigo_shimmer: "rgb(195,180,230)",
      rainbow_violet_shimmer: "rgb(230,180,210)",
      clawd_body: "rgb(215,119,87)",
      clawd_background: "rgb(0,0,0)",
      userMessageBackground: "rgb(240, 240, 240)",
      bashMessageBackgroundColor: "rgb(250, 245, 250)",
      memoryBackgroundColor: "rgb(230, 245, 250)",
      rate_limit_fill: "rgb(87,105,247)",
      rate_limit_empty: "rgb(39,47,111)"
    }
  },
  {
    name: "Light mode (ANSI colors only)",
    id: "light-ansi",
    colors: {
      autoAccept: "ansi:magenta",
      bashBorder: "ansi:magenta",
      claude: "ansi:redBright",
      claudeShimmer: "ansi:yellowBright",
      claudeBlue_FOR_SYSTEM_SPINNER: "ansi:blue",
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: "ansi:blueBright",
      permission: "ansi:blue",
      permissionShimmer: "ansi:blueBright",
      planMode: "ansi:cyan",
      ide: "ansi:blueBright",
      promptBorder: "ansi:white",
      promptBorderShimmer: "ansi:whiteBright",
      text: "ansi:black",
      inverseText: "ansi:white",
      inactive: "ansi:blackBright",
      subtle: "ansi:blackBright",
      suggestion: "ansi:blue",
      remember: "ansi:blue",
      background: "ansi:cyan",
      success: "ansi:green",
      error: "ansi:red",
      warning: "ansi:yellow",
      warningShimmer: "ansi:yellowBright",
      diffAdded: "ansi:green",
      diffRemoved: "ansi:red",
      diffAddedDimmed: "ansi:green",
      diffRemovedDimmed: "ansi:red",
      diffAddedWord: "ansi:greenBright",
      diffRemovedWord: "ansi:redBright",
      diffAddedWordDimmed: "ansi:green",
      diffRemovedWordDimmed: "ansi:red",
      red_FOR_SUBAGENTS_ONLY: "ansi:red",
      blue_FOR_SUBAGENTS_ONLY: "ansi:blue",
      green_FOR_SUBAGENTS_ONLY: "ansi:green",
      yellow_FOR_SUBAGENTS_ONLY: "ansi:yellow",
      purple_FOR_SUBAGENTS_ONLY: "ansi:magenta",
      orange_FOR_SUBAGENTS_ONLY: "ansi:redBright",
      pink_FOR_SUBAGENTS_ONLY: "ansi:magentaBright",
      cyan_FOR_SUBAGENTS_ONLY: "ansi:cyan",
      professionalBlue: "ansi:blueBright",
      rainbow_red: "ansi:red",
      rainbow_orange: "ansi:redBright",
      rainbow_yellow: "ansi:yellow",
      rainbow_green: "ansi:green",
      rainbow_blue: "ansi:cyan",
      rainbow_indigo: "ansi:blue",
      rainbow_violet: "ansi:magenta",
      rainbow_red_shimmer: "ansi:redBright",
      rainbow_orange_shimmer: "ansi:yellow",
      rainbow_yellow_shimmer: "ansi:yellowBright",
      rainbow_green_shimmer: "ansi:greenBright",
      rainbow_blue_shimmer: "ansi:cyanBright",
      rainbow_indigo_shimmer: "ansi:blueBright",
      rainbow_violet_shimmer: "ansi:magentaBright",
      clawd_body: "ansi:redBright",
      clawd_background: "ansi:black",
      userMessageBackground: "ansi:white",
      bashMessageBackgroundColor: "ansi:whiteBright",
      memoryBackgroundColor: "ansi:white",
      rate_limit_fill: "ansi:yellow",
      rate_limit_empty: "ansi:black"
    }
  },
  {
    name: "Dark mode (ANSI colors only)",
    id: "dark-ansi",
    colors: {
      autoAccept: "ansi:magentaBright",
      bashBorder: "ansi:magentaBright",
      claude: "ansi:redBright",
      claudeShimmer: "ansi:yellowBright",
      claudeBlue_FOR_SYSTEM_SPINNER: "ansi:blueBright",
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: "ansi:blueBright",
      permission: "ansi:blueBright",
      permissionShimmer: "ansi:blueBright",
      planMode: "ansi:cyanBright",
      ide: "ansi:blue",
      promptBorder: "ansi:white",
      promptBorderShimmer: "ansi:whiteBright",
      text: "ansi:whiteBright",
      inverseText: "ansi:black",
      inactive: "ansi:white",
      subtle: "ansi:white",
      suggestion: "ansi:blueBright",
      remember: "ansi:blueBright",
      background: "ansi:cyanBright",
      success: "ansi:greenBright",
      error: "ansi:redBright",
      warning: "ansi:yellowBright",
      warningShimmer: "ansi:yellowBright",
      diffAdded: "ansi:green",
      diffRemoved: "ansi:red",
      diffAddedDimmed: "ansi:green",
      diffRemovedDimmed: "ansi:red",
      diffAddedWord: "ansi:greenBright",
      diffRemovedWord: "ansi:redBright",
      diffAddedWordDimmed: "ansi:green",
      diffRemovedWordDimmed: "ansi:red",
      red_FOR_SUBAGENTS_ONLY: "ansi:redBright",
      blue_FOR_SUBAGENTS_ONLY: "ansi:blueBright",
      green_FOR_SUBAGENTS_ONLY: "ansi:greenBright",
      yellow_FOR_SUBAGENTS_ONLY: "ansi:yellowBright",
      purple_FOR_SUBAGENTS_ONLY: "ansi:magentaBright",
      orange_FOR_SUBAGENTS_ONLY: "ansi:redBright",
      pink_FOR_SUBAGENTS_ONLY: "ansi:magentaBright",
      cyan_FOR_SUBAGENTS_ONLY: "ansi:cyanBright",
      professionalBlue: "rgb(106,155,204)",
      rainbow_red: "ansi:red",
      rainbow_orange: "ansi:redBright",
      rainbow_yellow: "ansi:yellow",
      rainbow_green: "ansi:green",
      rainbow_blue: "ansi:cyan",
      rainbow_indigo: "ansi:blue",
      rainbow_violet: "ansi:magenta",
      rainbow_red_shimmer: "ansi:redBright",
      rainbow_orange_shimmer: "ansi:yellow",
      rainbow_yellow_shimmer: "ansi:yellowBright",
      rainbow_green_shimmer: "ansi:greenBright",
      rainbow_blue_shimmer: "ansi:cyanBright",
      rainbow_indigo_shimmer: "ansi:blueBright",
      rainbow_violet_shimmer: "ansi:magentaBright",
      clawd_body: "ansi:redBright",
      clawd_background: "ansi:black",
      userMessageBackground: "ansi:blackBright",
      bashMessageBackgroundColor: "ansi:black",
      memoryBackgroundColor: "ansi:blackBright",
      rate_limit_fill: "ansi:yellow",
      rate_limit_empty: "ansi:white"
    }
  },
  {
    name: "Light mode (colorblind-friendly)",
    id: "light-daltonized",
    colors: {
      autoAccept: "rgb(135,0,255)",
      bashBorder: "rgb(0,102,204)",
      claude: "rgb(255,153,51)",
      claudeShimmer: "rgb(255,183,101)",
      claudeBlue_FOR_SYSTEM_SPINNER: "rgb(51,102,255)",
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(101,152,255)",
      permission: "rgb(51,102,255)",
      permissionShimmer: "rgb(101,152,255)",
      planMode: "rgb(51,102,102)",
      ide: "rgb(71,130,200)",
      promptBorder: "rgb(153,153,153)",
      promptBorderShimmer: "rgb(183,183,183)",
      text: "rgb(0,0,0)",
      inverseText: "rgb(255,255,255)",
      inactive: "rgb(102,102,102)",
      subtle: "rgb(175,175,175)",
      suggestion: "rgb(51,102,255)",
      remember: "rgb(51,102,255)",
      background: "rgb(0,153,153)",
      success: "rgb(0,102,153)",
      error: "rgb(204,0,0)",
      warning: "rgb(255,153,0)",
      warningShimmer: "rgb(255,183,50)",
      diffAdded: "rgb(153,204,255)",
      diffRemoved: "rgb(255,204,204)",
      diffAddedDimmed: "rgb(209,231,253)",
      diffRemovedDimmed: "rgb(255,233,233)",
      diffAddedWord: "rgb(51,102,204)",
      diffRemovedWord: "rgb(153,51,51)",
      diffAddedWordDimmed: "rgb(102,153,204)",
      diffRemovedWordDimmed: "rgb(204,153,153)",
      red_FOR_SUBAGENTS_ONLY: "rgb(204,0,0)",
      blue_FOR_SUBAGENTS_ONLY: "rgb(0,102,204)",
      green_FOR_SUBAGENTS_ONLY: "rgb(0,204,0)",
      yellow_FOR_SUBAGENTS_ONLY: "rgb(255,204,0)",
      purple_FOR_SUBAGENTS_ONLY: "rgb(128,0,128)",
      orange_FOR_SUBAGENTS_ONLY: "rgb(255,128,0)",
      pink_FOR_SUBAGENTS_ONLY: "rgb(255,102,178)",
      cyan_FOR_SUBAGENTS_ONLY: "rgb(0,178,178)",
      professionalBlue: "rgb(106,155,204)",
      rainbow_red: "rgb(235,95,87)",
      rainbow_orange: "rgb(245,139,87)",
      rainbow_yellow: "rgb(250,195,95)",
      rainbow_green: "rgb(145,200,130)",
      rainbow_blue: "rgb(130,170,220)",
      rainbow_indigo: "rgb(155,130,200)",
      rainbow_violet: "rgb(200,130,180)",
      rainbow_red_shimmer: "rgb(250,155,147)",
      rainbow_orange_shimmer: "rgb(255,185,137)",
      rainbow_yellow_shimmer: "rgb(255,225,155)",
      rainbow_green_shimmer: "rgb(185,230,180)",
      rainbow_blue_shimmer: "rgb(180,205,240)",
      rainbow_indigo_shimmer: "rgb(195,180,230)",
      rainbow_violet_shimmer: "rgb(230,180,210)",
      clawd_body: "rgb(215,119,87)",
      clawd_background: "rgb(0,0,0)",
      userMessageBackground: "rgb(220, 220, 220)",
      bashMessageBackgroundColor: "rgb(250, 245, 250)",
      memoryBackgroundColor: "rgb(230, 245, 250)",
      rate_limit_fill: "rgb(51,102,255)",
      rate_limit_empty: "rgb(23,46,114)"
    }
  },
  {
    name: "Dark mode (colorblind-friendly)",
    id: "dark-daltonized",
    colors: {
      autoAccept: "rgb(175,135,255)",
      bashBorder: "rgb(51,153,255)",
      claude: "rgb(255,153,51)",
      claudeShimmer: "rgb(255,183,101)",
      claudeBlue_FOR_SYSTEM_SPINNER: "rgb(153,204,255)",
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(183,224,255)",
      permission: "rgb(153,204,255)",
      permissionShimmer: "rgb(183,224,255)",
      planMode: "rgb(102,153,153)",
      ide: "rgb(71,130,200)",
      promptBorder: "rgb(136,136,136)",
      promptBorderShimmer: "rgb(166,166,166)",
      text: "rgb(255,255,255)",
      inverseText: "rgb(0,0,0)",
      inactive: "rgb(153,153,153)",
      subtle: "rgb(80,80,80)",
      suggestion: "rgb(153,204,255)",
      remember: "rgb(153,204,255)",
      background: "rgb(0,204,204)",
      success: "rgb(51,153,255)",
      error: "rgb(255,102,102)",
      warning: "rgb(255,204,0)",
      warningShimmer: "rgb(255,234,50)",
      diffAdded: "rgb(0,68,102)",
      diffRemoved: "rgb(102,0,0)",
      diffAddedDimmed: "rgb(62,81,91)",
      diffRemovedDimmed: "rgb(62,44,44)",
      diffAddedWord: "rgb(0,119,179)",
      diffRemovedWord: "rgb(179,0,0)",
      diffAddedWordDimmed: "rgb(26,99,128)",
      diffRemovedWordDimmed: "rgb(128,21,21)",
      red_FOR_SUBAGENTS_ONLY: "rgb(255,102,102)",
      blue_FOR_SUBAGENTS_ONLY: "rgb(102,178,255)",
      green_FOR_SUBAGENTS_ONLY: "rgb(102,255,102)",
      yellow_FOR_SUBAGENTS_ONLY: "rgb(255,255,102)",
      purple_FOR_SUBAGENTS_ONLY: "rgb(178,102,255)",
      orange_FOR_SUBAGENTS_ONLY: "rgb(255,178,102)",
      pink_FOR_SUBAGENTS_ONLY: "rgb(255,153,204)",
      cyan_FOR_SUBAGENTS_ONLY: "rgb(102,204,204)",
      professionalBlue: "rgb(106,155,204)",
      rainbow_red: "rgb(235,95,87)",
      rainbow_orange: "rgb(245,139,87)",
      rainbow_yellow: "rgb(250,195,95)",
      rainbow_green: "rgb(145,200,130)",
      rainbow_blue: "rgb(130,170,220)",
      rainbow_indigo: "rgb(155,130,200)",
      rainbow_violet: "rgb(200,130,180)",
      rainbow_red_shimmer: "rgb(250,155,147)",
      rainbow_orange_shimmer: "rgb(255,185,137)",
      rainbow_yellow_shimmer: "rgb(255,225,155)",
      rainbow_green_shimmer: "rgb(185,230,180)",
      rainbow_blue_shimmer: "rgb(180,205,240)",
      rainbow_indigo_shimmer: "rgb(195,180,230)",
      rainbow_violet_shimmer: "rgb(230,180,210)",
      clawd_body: "rgb(215,119,87)",
      clawd_background: "rgb(0,0,0)",
      userMessageBackground: "rgb(55, 55, 55)",
      bashMessageBackgroundColor: "rgb(65, 60, 65)",
      memoryBackgroundColor: "rgb(55, 65, 70)",
      rate_limit_fill: "rgb(153,204,255)",
      rate_limit_empty: "rgb(69,92,115)"
    }
  },
  {
    name: "Monochrome",
    id: "monochrome",
    colors: {
      autoAccept: "rgb(200,200,200)",
      bashBorder: "rgb(180,180,180)",
      claude: "rgb(255,255,255)",
      claudeShimmer: "rgb(230,230,230)",
      claudeBlue_FOR_SYSTEM_SPINNER: "rgb(200,200,200)",
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(220,220,220)",
      permission: "rgb(200,200,200)",
      permissionShimmer: "rgb(220,220,220)",
      planMode: "rgb(180,180,180)",
      ide: "rgb(190,190,190)",
      promptBorder: "rgb(160,160,160)",
      promptBorderShimmer: "rgb(180,180,180)",
      text: "rgb(255,255,255)",
      inverseText: "rgb(40,40,40)",
      inactive: "rgb(120,120,120)",
      subtle: "rgb(100,100,100)",
      suggestion: "rgb(200,200,200)",
      remember: "rgb(200,200,200)",
      background: "rgb(180,180,180)",
      success: "rgb(220,220,220)",
      error: "rgb(180,180,180)",
      warning: "rgb(200,200,200)",
      warningShimmer: "rgb(220,220,220)",
      diffAdded: "rgb(90,90,90)",
      diffRemoved: "rgb(60,60,60)",
      diffAddedDimmed: "rgb(110,110,110)",
      diffRemovedDimmed: "rgb(80,80,80)",
      diffAddedWord: "rgb(200,200,200)",
      diffRemovedWord: "rgb(80,80,80)",
      diffAddedWordDimmed: "rgb(160,160,160)",
      diffRemovedWordDimmed: "rgb(70,70,70)",
      red_FOR_SUBAGENTS_ONLY: "rgb(200,200,200)",
      blue_FOR_SUBAGENTS_ONLY: "rgb(180,180,180)",
      green_FOR_SUBAGENTS_ONLY: "rgb(210,210,210)",
      yellow_FOR_SUBAGENTS_ONLY: "rgb(190,190,190)",
      purple_FOR_SUBAGENTS_ONLY: "rgb(170,170,170)",
      orange_FOR_SUBAGENTS_ONLY: "rgb(195,195,195)",
      pink_FOR_SUBAGENTS_ONLY: "rgb(205,205,205)",
      cyan_FOR_SUBAGENTS_ONLY: "rgb(185,185,185)",
      professionalBlue: "rgb(190,190,190)",
      rainbow_red: "rgb(240,240,240)",
      rainbow_orange: "rgb(230,230,230)",
      rainbow_yellow: "rgb(220,220,220)",
      rainbow_green: "rgb(210,210,210)",
      rainbow_blue: "rgb(200,200,200)",
      rainbow_indigo: "rgb(190,190,190)",
      rainbow_violet: "rgb(180,180,180)",
      rainbow_red_shimmer: "rgb(255,255,255)",
      rainbow_orange_shimmer: "rgb(245,245,245)",
      rainbow_yellow_shimmer: "rgb(235,235,235)",
      rainbow_green_shimmer: "rgb(225,225,225)",
      rainbow_blue_shimmer: "rgb(215,215,215)",
      rainbow_indigo_shimmer: "rgb(205,205,205)",
      rainbow_violet_shimmer: "rgb(195,195,195)",
      clawd_body: "rgb(255,255,255)",
      clawd_background: "rgb(40,40,40)",
      userMessageBackground: "rgb(70,70,70)",
      bashMessageBackgroundColor: "rgb(65,65,65)",
      memoryBackgroundColor: "rgb(75,75,75)",
      rate_limit_fill: "rgb(200,200,200)",
      rate_limit_empty: "rgb(90,90,90)"
    }
  }
];

// src/brands/userLabel.ts
import os3 from "node:os";
var sanitizeLabel = (value) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed;
};
var getUserLabel = () => {
  const candidates = [
    sanitizeLabel(process.env.CLAUDE_CODE_USER_LABEL),
    sanitizeLabel(process.env.USER),
    sanitizeLabel(process.env.USERNAME)
  ];
  for (const candidate of candidates) {
    if (candidate) return candidate;
  }
  try {
    const info = os3.userInfo();
    const name = sanitizeLabel(info.username);
    if (name) return name;
  } catch {
  }
  return "user";
};
var formatUserMessage = (label) => ` [${label}] {} `;

// src/brands/zai.ts
var ZAI_BLOCKED_TOOLS = [
  // Server-injected MCP tools (Z.ai injects these, we block them)
  "mcp__4_5v_mcp__analyze_image",
  "mcp__milk_tea_server__claim_milk_tea_coupon",
  "mcp__web_reader__webReader",
  // Builtin tools that should use zai-cli instead
  "WebSearch",
  "WebFetch"
];
var clamp = (value) => Math.max(0, Math.min(255, Math.round(value)));
var hexToRgb = (hex) => {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length === 3) {
    const [r, g, b] = normalized.split("");
    return {
      r: clamp(parseInt(r + r, 16)),
      g: clamp(parseInt(g + g, 16)),
      b: clamp(parseInt(b + b, 16))
    };
  }
  if (normalized.length !== 6) {
    throw new Error(`Unsupported hex color: ${hex}`);
  }
  return {
    r: clamp(parseInt(normalized.slice(0, 2), 16)),
    g: clamp(parseInt(normalized.slice(2, 4), 16)),
    b: clamp(parseInt(normalized.slice(4, 6), 16))
  };
};
var rgb = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgb(${r},${g},${b})`;
};
var mix = (hexA, hexB, weight) => {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const w = Math.max(0, Math.min(1, weight));
  return `rgb(${clamp(a.r + (b.r - a.r) * w)},${clamp(a.g + (b.g - a.g) * w)},${clamp(a.b + (b.b - a.b) * w)})`;
};
var lighten = (hex, weight) => mix(hex, "#ffffff", weight);
var palette = {
  base: "#1b1d1f",
  surface: "#25272b",
  panel: "#282a30",
  border: "#353842",
  borderStrong: "#484a58",
  text: "#e8e8e8",
  textMuted: "#c3c4cc",
  textDim: "#8d8e99",
  gold: "#ffd373",
  goldSoft: "#ffdc8f",
  goldDeep: "#b2892e",
  blue: "#0080ff",
  blueSoft: "#66b3ff",
  blueDeep: "#134cff",
  green: "#37d995",
  red: "#fb2c36",
  orange: "#ff8e42",
  purple: "#9c8bff"
};
var theme = {
  name: "Z.ai Carbon",
  id: "zai-carbon",
  colors: {
    autoAccept: rgb(palette.green),
    bashBorder: rgb(palette.gold),
    claude: rgb(palette.gold),
    claudeShimmer: rgb(palette.goldSoft),
    claudeBlue_FOR_SYSTEM_SPINNER: rgb(palette.blue),
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: rgb(palette.blueSoft),
    permission: rgb(palette.blue),
    permissionShimmer: rgb(palette.blueSoft),
    planMode: rgb(palette.green),
    ide: rgb(palette.blueSoft),
    promptBorder: rgb(palette.border),
    promptBorderShimmer: rgb(palette.borderStrong),
    text: rgb(palette.text),
    inverseText: rgb(palette.base),
    inactive: rgb(palette.textDim),
    subtle: rgb(palette.border),
    suggestion: rgb(palette.blueSoft),
    remember: rgb(palette.gold),
    background: rgb(palette.base),
    success: rgb(palette.green),
    error: rgb(palette.red),
    warning: rgb(palette.orange),
    warningShimmer: rgb(palette.goldSoft),
    diffAdded: mix(palette.base, palette.green, 0.18),
    diffRemoved: mix(palette.base, palette.red, 0.18),
    diffAddedDimmed: mix(palette.base, palette.green, 0.1),
    diffRemovedDimmed: mix(palette.base, palette.red, 0.1),
    diffAddedWord: mix(palette.base, palette.green, 0.45),
    diffRemovedWord: mix(palette.base, palette.red, 0.45),
    diffAddedWordDimmed: mix(palette.base, palette.green, 0.3),
    diffRemovedWordDimmed: mix(palette.base, palette.red, 0.3),
    red_FOR_SUBAGENTS_ONLY: rgb(palette.red),
    blue_FOR_SUBAGENTS_ONLY: rgb(palette.blueDeep),
    green_FOR_SUBAGENTS_ONLY: rgb(palette.green),
    yellow_FOR_SUBAGENTS_ONLY: rgb(palette.gold),
    purple_FOR_SUBAGENTS_ONLY: rgb(palette.purple),
    orange_FOR_SUBAGENTS_ONLY: rgb(palette.orange),
    pink_FOR_SUBAGENTS_ONLY: rgb(palette.goldSoft),
    cyan_FOR_SUBAGENTS_ONLY: rgb(palette.blueSoft),
    professionalBlue: rgb(palette.blueSoft),
    rainbow_red: rgb(palette.red),
    rainbow_orange: rgb(palette.orange),
    rainbow_yellow: rgb(palette.gold),
    rainbow_green: rgb(palette.green),
    rainbow_blue: rgb(palette.blue),
    rainbow_indigo: rgb(palette.blueDeep),
    rainbow_violet: rgb(palette.purple),
    rainbow_red_shimmer: lighten(palette.red, 0.35),
    rainbow_orange_shimmer: lighten(palette.orange, 0.35),
    rainbow_yellow_shimmer: lighten(palette.gold, 0.25),
    rainbow_green_shimmer: lighten(palette.green, 0.35),
    rainbow_blue_shimmer: lighten(palette.blue, 0.35),
    rainbow_indigo_shimmer: lighten(palette.blueDeep, 0.35),
    rainbow_violet_shimmer: lighten(palette.purple, 0.35),
    clawd_body: rgb(palette.gold),
    clawd_background: rgb(palette.base),
    userMessageBackground: rgb(palette.panel),
    bashMessageBackgroundColor: rgb(palette.surface),
    memoryBackgroundColor: rgb(palette.panel),
    rate_limit_fill: rgb(palette.gold),
    rate_limit_empty: rgb(palette.borderStrong)
  }
};
var buildZaiTweakccConfig = () => ({
  ccVersion: "",
  ccInstallationPath: null,
  lastModified: (/* @__PURE__ */ new Date()).toISOString(),
  changesApplied: false,
  hidePiebaldAnnouncement: true,
  settings: {
    themes: [theme, ...DEFAULT_THEMES],
    thinkingVerbs: {
      format: "{}... ",
      verbs: [
        "Calibrating",
        "Indexing",
        "Synthesizing",
        "Optimizing",
        "Routing",
        "Vectorizing",
        "Mapping",
        "Compiling",
        "Refining",
        "Auditing",
        "Aligning",
        "Balancing",
        "Forecasting",
        "Resolving",
        "Validating",
        "Benchmarking",
        "Assembling",
        "Delivering"
      ]
    },
    thinkingStyle: {
      updateInterval: 110,
      phases: [".", "o", "O", "0", "O", "o"],
      reverseMirror: false
    },
    userMessageDisplay: {
      format: formatUserMessage(getUserLabel()),
      styling: ["bold"],
      foregroundColor: "default",
      backgroundColor: "default",
      borderStyle: "topBottomBold",
      borderColor: rgb(palette.gold),
      paddingX: 1,
      paddingY: 0,
      fitBoxToContent: true
    },
    inputBox: {
      removeBorder: true
    },
    misc: {
      showTweakccVersion: false,
      showPatchesApplied: false,
      expandThinkingBlocks: true,
      enableConversationTitle: true,
      hideStartupBanner: true,
      hideCtrlGToEditPrompt: true,
      hideStartupClawd: true,
      increaseFileReadLimit: true
    },
    toolsets: [
      {
        name: "zai",
        allowedTools: "*",
        blockedTools: ZAI_BLOCKED_TOOLS
      }
    ],
    defaultToolset: "zai",
    planModeToolset: "zai"
  }
});

// src/brands/minimax.ts
var MINIMAX_BLOCKED_TOOLS = [
  // WebSearch should use mcp__MiniMax__web_search instead
  "WebSearch"
];
var clamp2 = (value) => Math.max(0, Math.min(255, Math.round(value)));
var hexToRgb2 = (hex) => {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length === 3) {
    const [r, g, b] = normalized.split("");
    return {
      r: clamp2(parseInt(r + r, 16)),
      g: clamp2(parseInt(g + g, 16)),
      b: clamp2(parseInt(b + b, 16))
    };
  }
  if (normalized.length !== 6) {
    throw new Error(`Unsupported hex color: ${hex}`);
  }
  return {
    r: clamp2(parseInt(normalized.slice(0, 2), 16)),
    g: clamp2(parseInt(normalized.slice(2, 4), 16)),
    b: clamp2(parseInt(normalized.slice(4, 6), 16))
  };
};
var rgb2 = (hex) => {
  const { r, g, b } = hexToRgb2(hex);
  return `rgb(${r},${g},${b})`;
};
var mix2 = (hexA, hexB, weight) => {
  const a = hexToRgb2(hexA);
  const b = hexToRgb2(hexB);
  const w = Math.max(0, Math.min(1, weight));
  return `rgb(${clamp2(a.r + (b.r - a.r) * w)},${clamp2(a.g + (b.g - a.g) * w)},${clamp2(a.b + (b.b - a.b) * w)})`;
};
var lighten2 = (hex, weight) => mix2(hex, "#ffffff", weight);
var MINIMAX_CORE = "#ff5733";
var palette2 = {
  base: "#0b0b0f",
  surface: "#15151d",
  panel: "#1b1b24",
  border: "#2b2b36",
  borderStrong: "#3a3a4a",
  text: "#f7f7fb",
  textMuted: "#d1d1db",
  textDim: "#9b9bac",
  core: MINIMAX_CORE,
  deep: "#c70039",
  orange: "#ff8c42",
  yellow: "#ffeb3b",
  cyan: "#4db5ff",
  blue: "#3a7dff",
  green: "#22c55e",
  red: "#ff3b3b"
};
var makeTheme = () => {
  const tint = (hex, weight) => mix2(palette2.base, hex, weight);
  return {
    name: "MiniMax Pulse",
    id: "minimax-pulse",
    colors: {
      autoAccept: rgb2(palette2.green),
      bashBorder: rgb2(palette2.core),
      claude: rgb2(palette2.core),
      claudeShimmer: lighten2(palette2.core, 0.28),
      claudeBlue_FOR_SYSTEM_SPINNER: rgb2(palette2.blue),
      claudeBlueShimmer_FOR_SYSTEM_SPINNER: lighten2(palette2.blue, 0.3),
      permission: rgb2(palette2.orange),
      permissionShimmer: lighten2(palette2.orange, 0.25),
      planMode: rgb2(palette2.core),
      ide: rgb2(palette2.cyan),
      promptBorder: rgb2(palette2.border),
      promptBorderShimmer: rgb2(palette2.borderStrong),
      text: rgb2(palette2.text),
      inverseText: rgb2(palette2.base),
      inactive: rgb2(palette2.textDim),
      subtle: tint(palette2.core, 0.18),
      suggestion: rgb2(palette2.deep),
      remember: rgb2(palette2.core),
      background: rgb2(palette2.base),
      success: rgb2(palette2.green),
      error: rgb2(palette2.red),
      warning: rgb2(palette2.yellow),
      warningShimmer: lighten2(palette2.yellow, 0.2),
      diffAdded: mix2(palette2.base, palette2.green, 0.18),
      diffRemoved: mix2(palette2.base, palette2.red, 0.18),
      diffAddedDimmed: mix2(palette2.base, palette2.green, 0.1),
      diffRemovedDimmed: mix2(palette2.base, palette2.red, 0.1),
      diffAddedWord: mix2(palette2.base, palette2.green, 0.45),
      diffRemovedWord: mix2(palette2.base, palette2.red, 0.45),
      diffAddedWordDimmed: mix2(palette2.base, palette2.green, 0.3),
      diffRemovedWordDimmed: mix2(palette2.base, palette2.red, 0.3),
      red_FOR_SUBAGENTS_ONLY: rgb2(palette2.red),
      blue_FOR_SUBAGENTS_ONLY: rgb2(palette2.blue),
      green_FOR_SUBAGENTS_ONLY: rgb2(palette2.green),
      yellow_FOR_SUBAGENTS_ONLY: rgb2(palette2.yellow),
      purple_FOR_SUBAGENTS_ONLY: rgb2(palette2.deep),
      orange_FOR_SUBAGENTS_ONLY: rgb2(palette2.orange),
      pink_FOR_SUBAGENTS_ONLY: rgb2(palette2.core),
      cyan_FOR_SUBAGENTS_ONLY: rgb2(palette2.cyan),
      professionalBlue: rgb2(palette2.blue),
      rainbow_red: rgb2(palette2.red),
      rainbow_orange: rgb2(palette2.orange),
      rainbow_yellow: rgb2(palette2.yellow),
      rainbow_green: rgb2(palette2.green),
      rainbow_blue: rgb2(palette2.cyan),
      rainbow_indigo: rgb2(palette2.blue),
      rainbow_violet: rgb2(palette2.core),
      rainbow_red_shimmer: lighten2(palette2.red, 0.35),
      rainbow_orange_shimmer: lighten2(palette2.orange, 0.35),
      rainbow_yellow_shimmer: lighten2(palette2.yellow, 0.25),
      rainbow_green_shimmer: lighten2(palette2.green, 0.35),
      rainbow_blue_shimmer: lighten2(palette2.cyan, 0.35),
      rainbow_indigo_shimmer: lighten2(palette2.blue, 0.35),
      rainbow_violet_shimmer: lighten2(palette2.core, 0.35),
      clawd_body: rgb2(palette2.core),
      clawd_background: rgb2(palette2.base),
      userMessageBackground: rgb2(palette2.panel),
      bashMessageBackgroundColor: rgb2(palette2.surface),
      memoryBackgroundColor: tint(palette2.panel, 0.2),
      rate_limit_fill: rgb2(palette2.core),
      rate_limit_empty: rgb2(palette2.borderStrong)
    }
  };
};
var pulseTheme = makeTheme();
var buildMinimaxTweakccConfig = () => ({
  ccVersion: "",
  ccInstallationPath: null,
  lastModified: (/* @__PURE__ */ new Date()).toISOString(),
  changesApplied: false,
  hidePiebaldAnnouncement: true,
  settings: {
    themes: [pulseTheme, ...DEFAULT_THEMES],
    thinkingVerbs: {
      format: "{}... ",
      verbs: [
        "Resonating",
        "Prisming",
        "Spectralizing",
        "Phase-locking",
        "Lensing",
        "Vectorizing",
        "Harmonizing",
        "Amplifying",
        "Stabilizing",
        "Optimizing",
        "Synthesizing",
        "Refining",
        "Resolving",
        "Transmitting"
      ]
    },
    thinkingStyle: {
      updateInterval: 90,
      phases: ["\xB7", "\u2022", "\u25E6", "\u2022"],
      reverseMirror: false
    },
    userMessageDisplay: {
      format: formatUserMessage(getUserLabel()),
      styling: ["bold"],
      foregroundColor: "default",
      backgroundColor: "default",
      borderStyle: "topBottomDouble",
      borderColor: rgb2(palette2.core),
      paddingX: 1,
      paddingY: 0,
      fitBoxToContent: true
    },
    inputBox: {
      removeBorder: true
    },
    misc: {
      showTweakccVersion: false,
      showPatchesApplied: false,
      expandThinkingBlocks: true,
      enableConversationTitle: true,
      hideStartupBanner: true,
      hideCtrlGToEditPrompt: true,
      hideStartupClawd: true,
      increaseFileReadLimit: true
    },
    toolsets: [
      {
        name: "minimax",
        allowedTools: "*",
        blockedTools: MINIMAX_BLOCKED_TOOLS
      }
    ],
    defaultToolset: "minimax",
    planModeToolset: "minimax"
  }
});

// src/brands/openrouter.ts
var clamp3 = (value) => Math.max(0, Math.min(255, Math.round(value)));
var hexToRgb3 = (hex) => {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length === 3) {
    const [r, g, b] = normalized.split("");
    return {
      r: clamp3(parseInt(r + r, 16)),
      g: clamp3(parseInt(g + g, 16)),
      b: clamp3(parseInt(b + b, 16))
    };
  }
  if (normalized.length !== 6) {
    throw new Error(`Unsupported hex color: ${hex}`);
  }
  return {
    r: clamp3(parseInt(normalized.slice(0, 2), 16)),
    g: clamp3(parseInt(normalized.slice(2, 4), 16)),
    b: clamp3(parseInt(normalized.slice(4, 6), 16))
  };
};
var rgb3 = (hex) => {
  const { r, g, b } = hexToRgb3(hex);
  return `rgb(${r},${g},${b})`;
};
var mix3 = (hexA, hexB, weight) => {
  const a = hexToRgb3(hexA);
  const b = hexToRgb3(hexB);
  const w = Math.max(0, Math.min(1, weight));
  return `rgb(${clamp3(a.r + (b.r - a.r) * w)},${clamp3(a.g + (b.g - a.g) * w)},${clamp3(a.b + (b.b - a.b) * w)})`;
};
var lighten3 = (hex, weight) => mix3(hex, "#ffffff", weight);
var palette3 = {
  base: "#eef1f4",
  surface: "#f5f7f9",
  panel: "#e5e9ee",
  border: "#b0d4d4",
  borderStrong: "#7ec4c4",
  text: "#1f2430",
  textMuted: "#475569",
  textDim: "#6b7280",
  // Teal/cyan palette matching ASCII art colors
  teal: "#00a896",
  // Primary teal (matches ANSI 43)
  tealBright: "#00d4aa",
  // Bright teal (matches ANSI 49)
  tealDeep: "#008080",
  // Deep teal (matches ANSI 37)
  tealMuted: "#5fb3a8",
  // Softer teal for accents
  cyan: "#20b2aa",
  green: "#2f9b6d",
  red: "#d04b5a",
  orange: "#d28a3c",
  purple: "#6a5ad6"
};
var theme2 = {
  name: "OpenRouter Teal",
  id: "openrouter-teal",
  colors: {
    autoAccept: rgb3(palette3.green),
    bashBorder: rgb3(palette3.teal),
    claude: rgb3(palette3.tealDeep),
    claudeShimmer: lighten3(palette3.teal, 0.35),
    claudeBlue_FOR_SYSTEM_SPINNER: rgb3(palette3.teal),
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: lighten3(palette3.tealMuted, 0.2),
    permission: rgb3(palette3.cyan),
    permissionShimmer: lighten3(palette3.cyan, 0.25),
    planMode: rgb3(palette3.tealDeep),
    ide: rgb3(palette3.tealMuted),
    promptBorder: rgb3(palette3.border),
    promptBorderShimmer: rgb3(palette3.borderStrong),
    text: rgb3(palette3.text),
    inverseText: rgb3(palette3.base),
    inactive: rgb3(palette3.textDim),
    subtle: mix3(palette3.base, palette3.tealMuted, 0.12),
    suggestion: rgb3(palette3.tealMuted),
    remember: rgb3(palette3.tealDeep),
    background: rgb3(palette3.base),
    success: rgb3(palette3.green),
    error: rgb3(palette3.red),
    warning: rgb3(palette3.orange),
    warningShimmer: lighten3(palette3.orange, 0.28),
    diffAdded: mix3(palette3.base, palette3.green, 0.2),
    diffRemoved: mix3(palette3.base, palette3.red, 0.2),
    diffAddedDimmed: mix3(palette3.base, palette3.green, 0.12),
    diffRemovedDimmed: mix3(palette3.base, palette3.red, 0.12),
    diffAddedWord: mix3(palette3.base, palette3.green, 0.42),
    diffRemovedWord: mix3(palette3.base, palette3.red, 0.42),
    diffAddedWordDimmed: mix3(palette3.base, palette3.green, 0.28),
    diffRemovedWordDimmed: mix3(palette3.base, palette3.red, 0.28),
    red_FOR_SUBAGENTS_ONLY: rgb3(palette3.red),
    blue_FOR_SUBAGENTS_ONLY: rgb3(palette3.tealDeep),
    green_FOR_SUBAGENTS_ONLY: rgb3(palette3.green),
    yellow_FOR_SUBAGENTS_ONLY: rgb3(palette3.orange),
    purple_FOR_SUBAGENTS_ONLY: rgb3(palette3.purple),
    orange_FOR_SUBAGENTS_ONLY: rgb3(palette3.orange),
    pink_FOR_SUBAGENTS_ONLY: lighten3(palette3.purple, 0.32),
    cyan_FOR_SUBAGENTS_ONLY: rgb3(palette3.cyan),
    professionalBlue: rgb3(palette3.teal),
    rainbow_red: rgb3(palette3.red),
    rainbow_orange: rgb3(palette3.orange),
    rainbow_yellow: lighten3(palette3.orange, 0.18),
    rainbow_green: rgb3(palette3.green),
    rainbow_blue: rgb3(palette3.tealMuted),
    rainbow_indigo: rgb3(palette3.tealDeep),
    rainbow_violet: rgb3(palette3.purple),
    rainbow_red_shimmer: lighten3(palette3.red, 0.35),
    rainbow_orange_shimmer: lighten3(palette3.orange, 0.35),
    rainbow_yellow_shimmer: lighten3(palette3.orange, 0.3),
    rainbow_green_shimmer: lighten3(palette3.green, 0.35),
    rainbow_blue_shimmer: lighten3(palette3.tealMuted, 0.35),
    rainbow_indigo_shimmer: lighten3(palette3.tealDeep, 0.35),
    rainbow_violet_shimmer: lighten3(palette3.purple, 0.35),
    clawd_body: rgb3(palette3.tealDeep),
    clawd_background: rgb3(palette3.base),
    userMessageBackground: rgb3(palette3.panel),
    bashMessageBackgroundColor: rgb3(palette3.surface),
    memoryBackgroundColor: mix3(palette3.panel, palette3.tealMuted, 0.12),
    rate_limit_fill: rgb3(palette3.teal),
    rate_limit_empty: rgb3(palette3.borderStrong)
  }
};
var buildOpenRouterTweakccConfig = () => ({
  ccVersion: "",
  ccInstallationPath: null,
  lastModified: (/* @__PURE__ */ new Date()).toISOString(),
  changesApplied: false,
  hidePiebaldAnnouncement: true,
  settings: {
    themes: [theme2, ...DEFAULT_THEMES],
    thinkingVerbs: {
      format: "{}... ",
      verbs: [
        "Routing",
        "Switchboarding",
        "Proxying",
        "Negotiating",
        "Handshake",
        "Bridging",
        "Mapping",
        "Tunneling",
        "Resolving",
        "Balancing",
        "Rewriting",
        "Indexing",
        "Synchronizing",
        "Aligning"
      ]
    },
    thinkingStyle: {
      updateInterval: 120,
      phases: ["\xB7", "\u2022", "\u25E6", "\u2022"],
      reverseMirror: false
    },
    userMessageDisplay: {
      format: formatUserMessage(getUserLabel()),
      styling: ["bold"],
      foregroundColor: "default",
      backgroundColor: "default",
      borderStyle: "topBottomSingle",
      borderColor: rgb3(palette3.teal),
      paddingX: 1,
      paddingY: 0,
      fitBoxToContent: true
    },
    inputBox: {
      removeBorder: true
    },
    misc: {
      showTweakccVersion: false,
      showPatchesApplied: false,
      expandThinkingBlocks: true,
      enableConversationTitle: true,
      hideStartupBanner: true,
      hideCtrlGToEditPrompt: true,
      hideStartupClawd: true,
      increaseFileReadLimit: true
    },
    toolsets: [
      {
        name: "openrouter",
        allowedTools: "*"
      }
    ],
    defaultToolset: "openrouter",
    planModeToolset: "openrouter"
  }
});

// src/brands/ccrouter.ts
var clamp4 = (value) => Math.max(0, Math.min(255, Math.round(value)));
var hexToRgb4 = (hex) => {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length === 3) {
    const [r, g, b] = normalized.split("");
    return {
      r: clamp4(parseInt(r + r, 16)),
      g: clamp4(parseInt(g + g, 16)),
      b: clamp4(parseInt(b + b, 16))
    };
  }
  if (normalized.length !== 6) {
    throw new Error(`Unsupported hex color: ${hex}`);
  }
  return {
    r: clamp4(parseInt(normalized.slice(0, 2), 16)),
    g: clamp4(parseInt(normalized.slice(2, 4), 16)),
    b: clamp4(parseInt(normalized.slice(4, 6), 16))
  };
};
var rgb4 = (hex) => {
  const { r, g, b } = hexToRgb4(hex);
  return `rgb(${r},${g},${b})`;
};
var mix4 = (hexA, hexB, weight) => {
  const a = hexToRgb4(hexA);
  const b = hexToRgb4(hexB);
  const w = Math.max(0, Math.min(1, weight));
  return `rgb(${clamp4(a.r + (b.r - a.r) * w)},${clamp4(a.g + (b.g - a.g) * w)},${clamp4(a.b + (b.b - a.b) * w)})`;
};
var lighten4 = (hex, weight) => mix4(hex, "#ffffff", weight);
var palette4 = {
  base: "#edf6ff",
  surface: "#f6fbff",
  panel: "#e3f0fb",
  border: "#c5d9ee",
  borderStrong: "#9fb9d8",
  text: "#162434",
  textMuted: "#3f546b",
  textDim: "#6b7f95",
  sky: "#4da3ff",
  skySoft: "#7bbcff",
  skyDeep: "#2a6fcb",
  cyan: "#6cc7ff",
  green: "#3aa876",
  red: "#d34e5c",
  orange: "#e59b3e",
  purple: "#6b7dd8"
};
var theme3 = {
  name: "CCRouter Sky",
  id: "ccrouter-sky",
  colors: {
    autoAccept: rgb4(palette4.green),
    bashBorder: rgb4(palette4.sky),
    claude: rgb4(palette4.skyDeep),
    claudeShimmer: lighten4(palette4.sky, 0.35),
    claudeBlue_FOR_SYSTEM_SPINNER: rgb4(palette4.sky),
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: lighten4(palette4.skySoft, 0.2),
    permission: rgb4(palette4.cyan),
    permissionShimmer: lighten4(palette4.cyan, 0.25),
    planMode: rgb4(palette4.skyDeep),
    ide: rgb4(palette4.cyan),
    promptBorder: rgb4(palette4.border),
    promptBorderShimmer: rgb4(palette4.borderStrong),
    text: rgb4(palette4.text),
    inverseText: rgb4(palette4.base),
    inactive: rgb4(palette4.textDim),
    subtle: mix4(palette4.base, palette4.skySoft, 0.15),
    suggestion: rgb4(palette4.skySoft),
    remember: rgb4(palette4.skyDeep),
    background: rgb4(palette4.base),
    success: rgb4(palette4.green),
    error: rgb4(palette4.red),
    warning: rgb4(palette4.orange),
    warningShimmer: lighten4(palette4.orange, 0.28),
    diffAdded: mix4(palette4.base, palette4.green, 0.2),
    diffRemoved: mix4(palette4.base, palette4.red, 0.2),
    diffAddedDimmed: mix4(palette4.base, palette4.green, 0.12),
    diffRemovedDimmed: mix4(palette4.base, palette4.red, 0.12),
    diffAddedWord: mix4(palette4.base, palette4.green, 0.42),
    diffRemovedWord: mix4(palette4.base, palette4.red, 0.42),
    diffAddedWordDimmed: mix4(palette4.base, palette4.green, 0.28),
    diffRemovedWordDimmed: mix4(palette4.base, palette4.red, 0.28),
    red_FOR_SUBAGENTS_ONLY: rgb4(palette4.red),
    blue_FOR_SUBAGENTS_ONLY: rgb4(palette4.skyDeep),
    green_FOR_SUBAGENTS_ONLY: rgb4(palette4.green),
    yellow_FOR_SUBAGENTS_ONLY: rgb4(palette4.orange),
    purple_FOR_SUBAGENTS_ONLY: rgb4(palette4.purple),
    orange_FOR_SUBAGENTS_ONLY: rgb4(palette4.orange),
    pink_FOR_SUBAGENTS_ONLY: lighten4(palette4.purple, 0.32),
    cyan_FOR_SUBAGENTS_ONLY: rgb4(palette4.cyan),
    professionalBlue: rgb4(palette4.sky),
    rainbow_red: rgb4(palette4.red),
    rainbow_orange: rgb4(palette4.orange),
    rainbow_yellow: lighten4(palette4.orange, 0.18),
    rainbow_green: rgb4(palette4.green),
    rainbow_blue: rgb4(palette4.skySoft),
    rainbow_indigo: rgb4(palette4.skyDeep),
    rainbow_violet: rgb4(palette4.purple),
    rainbow_red_shimmer: lighten4(palette4.red, 0.35),
    rainbow_orange_shimmer: lighten4(palette4.orange, 0.35),
    rainbow_yellow_shimmer: lighten4(palette4.orange, 0.3),
    rainbow_green_shimmer: lighten4(palette4.green, 0.35),
    rainbow_blue_shimmer: lighten4(palette4.skySoft, 0.35),
    rainbow_indigo_shimmer: lighten4(palette4.skyDeep, 0.35),
    rainbow_violet_shimmer: lighten4(palette4.purple, 0.35),
    clawd_body: rgb4(palette4.skyDeep),
    clawd_background: rgb4(palette4.base),
    userMessageBackground: rgb4(palette4.panel),
    bashMessageBackgroundColor: rgb4(palette4.surface),
    memoryBackgroundColor: mix4(palette4.panel, palette4.skySoft, 0.12),
    rate_limit_fill: rgb4(palette4.sky),
    rate_limit_empty: rgb4(palette4.borderStrong)
  }
};
var buildCCRouterTweakccConfig = () => ({
  ccVersion: "",
  ccInstallationPath: null,
  lastModified: (/* @__PURE__ */ new Date()).toISOString(),
  changesApplied: false,
  hidePiebaldAnnouncement: true,
  settings: {
    themes: [theme3, ...DEFAULT_THEMES],
    thinkingVerbs: {
      format: "{}... ",
      verbs: [
        "Routing",
        "Switching",
        "Proxying",
        "Forwarding",
        "Dispatching",
        "Negotiating",
        "Bridging",
        "Mapping",
        "Tunneling",
        "Resolving",
        "Balancing",
        "Indexing",
        "Synchronizing",
        "Finalizing"
      ]
    },
    thinkingStyle: {
      updateInterval: 115,
      phases: ["\xB7", "\u2022", "\u25E6", "\u2022"],
      reverseMirror: false
    },
    userMessageDisplay: {
      format: formatUserMessage(getUserLabel()),
      styling: ["bold"],
      foregroundColor: "default",
      backgroundColor: "default",
      borderStyle: "topBottomDouble",
      borderColor: rgb4(palette4.sky),
      paddingX: 1,
      paddingY: 0,
      fitBoxToContent: true
    },
    inputBox: {
      removeBorder: true
    },
    misc: {
      showTweakccVersion: false,
      showPatchesApplied: false,
      expandThinkingBlocks: true,
      enableConversationTitle: true,
      hideStartupBanner: true,
      hideCtrlGToEditPrompt: true,
      hideStartupClawd: true,
      increaseFileReadLimit: true
    },
    toolsets: [
      {
        name: "ccrouter",
        allowedTools: "*"
      }
    ],
    defaultToolset: "ccrouter",
    planModeToolset: "ccrouter"
  }
});

// src/brands/mirror.ts
var clamp5 = (value) => Math.max(0, Math.min(255, Math.round(value)));
var hexToRgb5 = (hex) => {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length === 3) {
    const [r, g, b] = normalized.split("");
    return {
      r: clamp5(parseInt(r + r, 16)),
      g: clamp5(parseInt(g + g, 16)),
      b: clamp5(parseInt(b + b, 16))
    };
  }
  if (normalized.length !== 6) {
    throw new Error(`Unsupported hex color: ${hex}`);
  }
  return {
    r: clamp5(parseInt(normalized.slice(0, 2), 16)),
    g: clamp5(parseInt(normalized.slice(2, 4), 16)),
    b: clamp5(parseInt(normalized.slice(4, 6), 16))
  };
};
var rgb5 = (hex) => {
  const { r, g, b } = hexToRgb5(hex);
  return `rgb(${r},${g},${b})`;
};
var mix5 = (hexA, hexB, weight) => {
  const a = hexToRgb5(hexA);
  const b = hexToRgb5(hexB);
  const w = Math.max(0, Math.min(1, weight));
  return `rgb(${clamp5(a.r + (b.r - a.r) * w)},${clamp5(a.g + (b.g - a.g) * w)},${clamp5(a.b + (b.b - a.b) * w)})`;
};
var lighten5 = (hex, weight) => mix5(hex, "#ffffff", weight);
var palette5 = {
  // Base surfaces - near-black with metallic sheen
  base: "#0d0f12",
  surface: "#14161a",
  panel: "#1a1d22",
  elevated: "#22262d",
  // Borders - subtle silver
  border: "#3a3f48",
  borderStrong: "#4a5058",
  borderGlow: "#6a7078",
  // Text
  text: "#e8eaed",
  textMuted: "#b0b5bc",
  textDim: "#7a8088",
  // Primary: Silver/Chrome
  silver: "#c0c0c0",
  chrome: "#a0a0a0",
  platinum: "#e5e4e2",
  // Accent: Electric blue
  electric: "#00d4ff",
  electricSoft: "#4de1ff",
  electricDeep: "#00a3cc",
  // Secondary: Deep purple
  purple: "#6b5b95",
  purpleSoft: "#8a7ab4",
  // Semantic
  green: "#4ade80",
  red: "#f87171",
  orange: "#fb923c",
  cyan: "#22d3ee"
};
var theme4 = {
  name: "Mirror Claude",
  id: "mirror-claude",
  colors: {
    autoAccept: rgb5(palette5.green),
    bashBorder: rgb5(palette5.electric),
    claude: rgb5(palette5.silver),
    claudeShimmer: rgb5(palette5.platinum),
    claudeBlue_FOR_SYSTEM_SPINNER: rgb5(palette5.electric),
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: lighten5(palette5.electric, 0.2),
    permission: rgb5(palette5.electricSoft),
    permissionShimmer: lighten5(palette5.electricSoft, 0.25),
    planMode: rgb5(palette5.purple),
    ide: rgb5(palette5.cyan),
    promptBorder: rgb5(palette5.border),
    promptBorderShimmer: rgb5(palette5.borderGlow),
    text: rgb5(palette5.text),
    inverseText: rgb5(palette5.base),
    inactive: rgb5(palette5.textDim),
    subtle: mix5(palette5.base, palette5.chrome, 0.08),
    suggestion: rgb5(palette5.electricSoft),
    remember: rgb5(palette5.purple),
    background: rgb5(palette5.base),
    success: rgb5(palette5.green),
    error: rgb5(palette5.red),
    warning: rgb5(palette5.orange),
    warningShimmer: lighten5(palette5.orange, 0.28),
    diffAdded: mix5(palette5.base, palette5.green, 0.15),
    diffRemoved: mix5(palette5.base, palette5.red, 0.15),
    diffAddedDimmed: mix5(palette5.base, palette5.green, 0.08),
    diffRemovedDimmed: mix5(palette5.base, palette5.red, 0.08),
    diffAddedWord: mix5(palette5.base, palette5.green, 0.32),
    diffRemovedWord: mix5(palette5.base, palette5.red, 0.32),
    diffAddedWordDimmed: mix5(palette5.base, palette5.green, 0.18),
    diffRemovedWordDimmed: mix5(palette5.base, palette5.red, 0.18),
    red_FOR_SUBAGENTS_ONLY: rgb5(palette5.red),
    blue_FOR_SUBAGENTS_ONLY: rgb5(palette5.electric),
    green_FOR_SUBAGENTS_ONLY: rgb5(palette5.green),
    yellow_FOR_SUBAGENTS_ONLY: rgb5(palette5.orange),
    purple_FOR_SUBAGENTS_ONLY: rgb5(palette5.purple),
    orange_FOR_SUBAGENTS_ONLY: rgb5(palette5.orange),
    pink_FOR_SUBAGENTS_ONLY: lighten5(palette5.purple, 0.32),
    cyan_FOR_SUBAGENTS_ONLY: rgb5(palette5.cyan),
    professionalBlue: rgb5(palette5.electric),
    rainbow_red: rgb5(palette5.red),
    rainbow_orange: rgb5(palette5.orange),
    rainbow_yellow: lighten5(palette5.orange, 0.18),
    rainbow_green: rgb5(palette5.green),
    rainbow_blue: rgb5(palette5.electricSoft),
    rainbow_indigo: rgb5(palette5.electricDeep),
    rainbow_violet: rgb5(palette5.purple),
    rainbow_red_shimmer: lighten5(palette5.red, 0.35),
    rainbow_orange_shimmer: lighten5(palette5.orange, 0.35),
    rainbow_yellow_shimmer: lighten5(palette5.orange, 0.3),
    rainbow_green_shimmer: lighten5(palette5.green, 0.35),
    rainbow_blue_shimmer: lighten5(palette5.electricSoft, 0.35),
    rainbow_indigo_shimmer: lighten5(palette5.electricDeep, 0.35),
    rainbow_violet_shimmer: lighten5(palette5.purple, 0.35),
    clawd_body: rgb5(palette5.silver),
    clawd_background: rgb5(palette5.base),
    userMessageBackground: rgb5(palette5.panel),
    bashMessageBackgroundColor: rgb5(palette5.surface),
    memoryBackgroundColor: mix5(palette5.panel, palette5.purple, 0.08),
    rate_limit_fill: rgb5(palette5.electric),
    rate_limit_empty: rgb5(palette5.borderStrong)
  }
};
var buildMirrorTweakccConfig = () => ({
  ccVersion: "",
  ccInstallationPath: null,
  lastModified: (/* @__PURE__ */ new Date()).toISOString(),
  changesApplied: false,
  hidePiebaldAnnouncement: true,
  settings: {
    themes: [theme4, ...DEFAULT_THEMES],
    thinkingVerbs: {
      format: "{}... ",
      verbs: [
        "Reflecting",
        "Refracting",
        "Projecting",
        "Mirroring",
        "Amplifying",
        "Focusing",
        "Polishing",
        "Crystallizing",
        "Calibrating",
        "Synthesizing",
        "Resolving",
        "Composing",
        "Rendering",
        "Finalizing"
      ]
    },
    thinkingStyle: {
      updateInterval: 100,
      phases: ["\u25C7", "\u25C6", "\u25C7", "\u25C8"],
      reverseMirror: true
    },
    userMessageDisplay: {
      format: formatUserMessage(getUserLabel()),
      styling: ["bold"],
      foregroundColor: rgb5(palette5.platinum),
      backgroundColor: rgb5(palette5.panel),
      borderStyle: "topBottomDouble",
      borderColor: rgb5(palette5.silver),
      paddingX: 1,
      paddingY: 0,
      fitBoxToContent: true
    },
    inputBox: {
      removeBorder: true
    },
    misc: {
      showTweakccVersion: false,
      showPatchesApplied: false,
      expandThinkingBlocks: true,
      enableConversationTitle: true,
      hideStartupBanner: true,
      hideCtrlGToEditPrompt: true,
      hideStartupClawd: true,
      increaseFileReadLimit: true
    },
    toolsets: [
      {
        name: "mirror",
        allowedTools: "*"
      }
    ],
    defaultToolset: "mirror",
    planModeToolset: "mirror"
  }
});

// src/brands/kimi.ts
var rgb6 = (r, g, b) => `rgb(${r},${g},${b})`;
var palette6 = {
  base: "#05070a",
  // Deep space black
  blue: "#1a56ff",
  // Kimi Royal Blue
  electric: "#00d4ff",
  // Prism Cyan
  violet: "#a855f7",
  // Prism Violet
  surface: "#0f172a",
  // Dark slate surface
  text: "#f8fafc"
};
var theme5 = {
  name: "Kimi Prism",
  id: "kimi-prism",
  colors: {
    autoAccept: rgb6(74, 222, 128),
    bashBorder: palette6.blue,
    claude: palette6.blue,
    claudeShimmer: palette6.electric,
    claudeBlue_FOR_SYSTEM_SPINNER: palette6.blue,
    planMode: palette6.violet,
    ide: palette6.electric,
    promptBorder: "#1e293b",
    text: palette6.text,
    background: palette6.base,
    userMessageBackground: palette6.surface,
    bashMessageBackgroundColor: "#020617",
    rainbow_blue: palette6.blue,
    rainbow_violet: palette6.violet,
    // Additional required colors from dark theme
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: "#60a5fa",
    permission: "rgb(177,185,249)",
    permissionShimmer: "rgb(207,215,255)",
    inverseText: "rgb(0,0,0)",
    inactive: "rgb(153,153,153)",
    subtle: "rgb(80,80,80)",
    suggestion: "rgb(177,185,249)",
    remember: "rgb(177,185,249)",
    success: "rgb(78,186,101)",
    error: "rgb(255,107,128)",
    warning: "rgb(255,193,7)",
    warningShimmer: "rgb(255,223,57)",
    diffAdded: "rgb(34,92,43)",
    diffRemoved: "rgb(122,41,54)",
    diffAddedDimmed: "rgb(71,88,74)",
    diffRemovedDimmed: "rgb(105,72,77)",
    diffAddedWord: "rgb(56,166,96)",
    diffRemovedWord: "rgb(179,89,107)",
    diffAddedWordDimmed: "rgb(46,107,58)",
    diffRemovedWordDimmed: "rgb(139,57,69)",
    red_FOR_SUBAGENTS_ONLY: "rgb(220,38,38)",
    blue_FOR_SUBAGENTS_ONLY: "rgb(37,99,235)",
    green_FOR_SUBAGENTS_ONLY: "rgb(22,163,74)",
    yellow_FOR_SUBAGENTS_ONLY: "rgb(202,138,4)",
    purple_FOR_SUBAGENTS_ONLY: "rgb(147,51,234)",
    orange_FOR_SUBAGENTS_ONLY: "rgb(234,88,12)",
    pink_FOR_SUBAGENTS_ONLY: "rgb(219,39,119)",
    cyan_FOR_SUBAGENTS_ONLY: "rgb(8,145,178)",
    professionalBlue: "rgb(106,155,204)",
    rainbow_red: "rgb(235,95,87)",
    rainbow_orange: "rgb(245,139,87)",
    rainbow_yellow: "rgb(250,195,95)",
    rainbow_green: "rgb(145,200,130)",
    rainbow_indigo: "rgb(155,130,200)",
    rainbow_red_shimmer: "rgb(250,155,147)",
    rainbow_orange_shimmer: "rgb(255,185,137)",
    rainbow_yellow_shimmer: "rgb(255,225,155)",
    rainbow_green_shimmer: "rgb(185,230,180)",
    rainbow_blue_shimmer: "rgb(180,205,240)",
    rainbow_indigo_shimmer: "rgb(195,180,230)",
    rainbow_violet_shimmer: "rgb(230,180,210)",
    clawd_body: "rgb(215,119,87)",
    clawd_background: "rgb(0,0,0)",
    memoryBackgroundColor: "rgb(55, 65, 70)",
    rate_limit_fill: "rgb(177,185,249)",
    rate_limit_empty: "rgb(80,83,112)",
    promptBorderShimmer: "rgb(66,66,66)"
  }
};
var buildKimiTweakccConfig = () => ({
  ccVersion: "",
  ccInstallationPath: null,
  lastModified: (/* @__PURE__ */ new Date()).toISOString(),
  changesApplied: false,
  settings: {
    themes: [theme5, ...DEFAULT_THEMES],
    thinkingVerbs: {
      format: "{}... ",
      verbs: ["Refracting", "Analyzing", "Synthesizing", "Kimi is thinking"]
    },
    thinkingStyle: {
      reverseMirror: false,
      updateInterval: 80,
      phases: ["\u25E2", "\u25E3", "\u25E4", "\u25E5"]
      // Geometric prism-like animation
    },
    userMessageDisplay: {
      format: formatUserMessage("Kimi User"),
      styling: ["bold"],
      foregroundColor: "default",
      backgroundColor: palette6.surface,
      borderStyle: "single",
      borderColor: palette6.blue,
      paddingX: 1,
      paddingY: 0,
      fitBoxToContent: true
    },
    inputBox: {
      removeBorder: false
    },
    misc: {
      showTweakccVersion: false,
      showPatchesApplied: false,
      expandThinkingBlocks: false,
      enableConversationTitle: false,
      hideStartupBanner: true,
      hideCtrlGToEditPrompt: false,
      hideStartupClawd: false,
      increaseFileReadLimit: true
    },
    toolsets: [{ name: "kimi", allowedTools: "*" }],
    defaultToolset: "kimi",
    planModeToolset: null
  }
});

// src/brands/index.ts
var BRAND_PRESETS = {
  zai: {
    key: "zai",
    label: "Z.ai Carbon",
    description: "Dark carbon palette, gold + blue accents, Z.ai toolset label.",
    buildTweakccConfig: buildZaiTweakccConfig
  },
  minimax: {
    key: "minimax",
    label: "MiniMax Pulse",
    description: "Vibrant spectrum accents (red/orange/pink/violet) with MiniMax toolset label.",
    buildTweakccConfig: buildMinimaxTweakccConfig
  },
  openrouter: {
    key: "openrouter",
    label: "OpenRouter Teal",
    description: "Light UI with teal/cyan accents and OpenRouter toolset label.",
    buildTweakccConfig: buildOpenRouterTweakccConfig
  },
  ccrouter: {
    key: "ccrouter",
    label: "CCRouter Sky",
    description: "Airy sky-blue accents for Claude Code Router.",
    buildTweakccConfig: buildCCRouterTweakccConfig
  },
  mirror: {
    key: "mirror",
    label: "Mirror Claude",
    description: "Reflective silver/chrome theme for pure Claude Code experience.",
    buildTweakccConfig: buildMirrorTweakccConfig
  },
  kimi: {
    key: "kimi",
    label: "Kimi Prism",
    description: "Deep space palette with refracting royal blue and cyan accents.",
    buildTweakccConfig: buildKimiTweakccConfig
  }
};
var listBrandPresets = () => Object.values(BRAND_PRESETS);
var resolveBrandKey = (providerKey, requested) => {
  const normalized = requested?.trim().toLowerCase();
  if (!normalized || normalized === "auto") {
    return BRAND_PRESETS[providerKey] ? providerKey : null;
  }
  if (normalized === "none" || normalized === "default" || normalized === "off") {
    return null;
  }
  if (!BRAND_PRESETS[normalized]) {
    throw new Error(`Unknown brand preset: ${requested}`);
  }
  return normalized;
};
var buildBrandConfig = (brandKey) => {
  const preset = BRAND_PRESETS[brandKey];
  if (!preset) {
    throw new Error(`Unknown brand preset: ${brandKey}`);
  }
  return preset.buildTweakccConfig();
};
var getBrandThemeId = (brandKey) => {
  if (!brandKey) return null;
  const config = buildBrandConfig(brandKey);
  const theme6 = config.settings?.themes?.[0];
  return theme6?.id ?? null;
};

// src/core/tweakcc.ts
var require2 = createRequire(import.meta.url);
var ensureTweakccConfig = (tweakDir, brandKey) => {
  if (!brandKey) return false;
  const configPath = path4.join(tweakDir, "config.json");
  const brandConfig = buildBrandConfig(brandKey);
  const desiredDisplay = brandConfig.settings.userMessageDisplay;
  const normalizeFormat = (format) => (format || "").replace(/\s+/g, "").toLowerCase();
  const legacyFormats = /* @__PURE__ */ new Set(["[z.ai]{}", "[minimax]{}"]);
  const themeMatches = (a, b) => !!a?.id && !!b?.id && a.id === b.id || !!a?.name && !!b?.name && a.name === b.name;
  if (fs3.existsSync(configPath)) {
    try {
      const existing = JSON.parse(fs3.readFileSync(configPath, "utf8"));
      let existingThemes = Array.isArray(existing.settings?.themes) ? existing.settings?.themes : [];
      const brandThemes = Array.isArray(brandConfig.settings.themes) ? brandConfig.settings.themes : [];
      const brandThemeId = brandThemes[0]?.id;
      const looksLikeLegacy = existingThemes.length === 1 && brandThemeId && existingThemes[0]?.id === brandThemeId;
      let didUpdate = false;
      if (brandKey === "minimax" && existingThemes.length > 0) {
        const filtered = existingThemes.filter(
          (theme6) => theme6?.id !== "minimax-ember" && theme6?.id !== "minimax-glass" && theme6?.id !== "minimax-blade" && theme6?.name !== "MiniMax Ember" && theme6?.name !== "MiniMax Glass" && theme6?.name !== "MiniMax Blade"
        );
        if (filtered.length !== existingThemes.length) {
          existingThemes = filtered;
          existing.settings = { ...existing.settings, themes: existingThemes };
          didUpdate = true;
        }
      }
      if (looksLikeLegacy) {
        existing.settings = { ...brandConfig.settings, ...existing.settings, themes: brandConfig.settings.themes };
        didUpdate = true;
      }
      const existingDisplay = existing.settings?.userMessageDisplay;
      const desiredMisc = brandConfig.settings.misc;
      if (desiredDisplay) {
        if (!existingDisplay) {
          existing.settings = { ...existing.settings, userMessageDisplay: desiredDisplay };
          didUpdate = true;
        } else {
          const existingFormat = normalizeFormat(existingDisplay.format);
          const desiredFormat = normalizeFormat(desiredDisplay.format);
          if (legacyFormats.has(existingFormat) && existingFormat !== desiredFormat) {
            existing.settings = {
              ...existing.settings,
              userMessageDisplay: { ...desiredDisplay, ...existingDisplay, format: desiredDisplay.format }
            };
            didUpdate = true;
          }
        }
      }
      if (desiredMisc) {
        const existingMisc = existing.settings?.misc || {};
        const nextMisc = { ...existingMisc, ...desiredMisc };
        const miscChanged = Object.entries(desiredMisc).some(
          ([key, value]) => existingMisc[key] !== value
        );
        if (miscChanged) {
          existing.settings = { ...existing.settings, misc: nextMisc };
          didUpdate = true;
        }
      }
      if (brandThemes.length > 0) {
        const mergedThemes = [
          ...brandThemes,
          ...existingThemes.filter((existingTheme) => !brandThemes.some((theme6) => themeMatches(existingTheme, theme6)))
        ];
        const sameLength = mergedThemes.length === existingThemes.length;
        const sameOrder = sameLength && mergedThemes.every((theme6, idx) => themeMatches(theme6, existingThemes[idx]));
        if (!sameOrder) {
          existing.settings = { ...existing.settings, themes: mergedThemes };
          didUpdate = true;
        }
      }
      if (didUpdate) {
        fs3.writeFileSync(configPath, JSON.stringify(existing, null, 2));
        return true;
      }
    } catch {
    }
    return false;
  }
  fs3.writeFileSync(configPath, JSON.stringify(brandConfig, null, 2));
  return true;
};
var resolveLocalTweakcc = (args) => {
  try {
    const entry = require2.resolve("tweakcc/dist/index.js");
    return { cmd: process.execPath, args: [entry, ...args] };
  } catch {
    return null;
  }
};
var runTweakcc = (tweakDir, binaryPath, stdio = "inherit") => {
  const env = {
    ...process.env,
    TWEAKCC_CONFIG_DIR: tweakDir,
    TWEAKCC_CC_INSTALLATION_PATH: binaryPath
  };
  const local = resolveLocalTweakcc(["--apply"]);
  if (local) {
    const result2 = spawnSync2(local.cmd, local.args, { stdio: "pipe", env, encoding: "utf8" });
    if (stdio === "inherit") {
      if (result2.stdout) process.stdout.write(result2.stdout);
      if (result2.stderr) process.stderr.write(result2.stderr);
    }
    return result2;
  }
  if (commandExists("tweakcc")) {
    const result2 = spawnSync2("tweakcc", ["--apply"], { stdio: "pipe", env, encoding: "utf8" });
    if (stdio === "inherit") {
      if (result2.stdout) process.stdout.write(result2.stdout);
      if (result2.stderr) process.stderr.write(result2.stderr);
    }
    return result2;
  }
  if (!commandExists("npx")) {
    return { status: 1, stderr: "npx not found", stdout: "" };
  }
  const result = spawnSync2("npx", [`tweakcc@${TWEAKCC_VERSION}`, "--apply"], { stdio: "pipe", env, encoding: "utf8" });
  if (stdio === "inherit") {
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
  }
  return result;
};
var launchTweakccUi = (tweakDir, binaryPath) => {
  const env = {
    ...process.env,
    TWEAKCC_CONFIG_DIR: tweakDir,
    TWEAKCC_CC_INSTALLATION_PATH: binaryPath
  };
  const local = resolveLocalTweakcc([]);
  if (local) {
    return spawnSync2(local.cmd, local.args, { stdio: "inherit", env, encoding: "utf8" });
  }
  if (commandExists("tweakcc")) {
    return spawnSync2("tweakcc", [], { stdio: "inherit", env, encoding: "utf8" });
  }
  if (!commandExists("npx")) {
    return { status: 1, stderr: "npx not found", stdout: "" };
  }
  return spawnSync2("npx", [`tweakcc@${TWEAKCC_VERSION}`], { stdio: "inherit", env, encoding: "utf8" });
};
var spawnTweakccAsync = (cmd, args, env, stdio) => {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { stdio: "pipe", env });
    let stdout = "";
    let stderr = "";
    child.stdout?.on("data", (d) => {
      stdout += d.toString();
      if (stdio === "inherit") process.stdout.write(d);
    });
    child.stderr?.on("data", (d) => {
      stderr += d.toString();
      if (stdio === "inherit") process.stderr.write(d);
    });
    child.on("close", (status) => {
      resolve({ status, stdout, stderr });
    });
    child.on("error", (err) => {
      resolve({ status: 1, stdout: "", stderr: err.message });
    });
  });
};
var runTweakccAsync = async (tweakDir, binaryPath, stdio = "inherit") => {
  const env = {
    ...process.env,
    TWEAKCC_CONFIG_DIR: tweakDir,
    TWEAKCC_CC_INSTALLATION_PATH: binaryPath
  };
  const local = resolveLocalTweakcc(["--apply"]);
  if (local) {
    return spawnTweakccAsync(local.cmd, local.args, env, stdio);
  }
  if (commandExists("tweakcc")) {
    return spawnTweakccAsync("tweakcc", ["--apply"], env, stdio);
  }
  if (!commandExists("npx")) {
    return { status: 1, stderr: "npx not found", stdout: "" };
  }
  return spawnTweakccAsync("npx", [`tweakcc@${TWEAKCC_VERSION}`, "--apply"], env, stdio);
};

// src/core/errors.ts
var extractErrorHint = (text) => {
  const normalized = text.toLowerCase();
  if (normalized.includes("could not extract js from native binary")) {
    return "tweakcc reported a native Claude Code binary. claude-sneakpeek uses npm installs only; update or recreate the variant, or run with --no-tweak.";
  }
  if (normalized.includes("node-lief")) {
    return "tweakcc requires node-lief for native Claude Code binaries. claude-sneakpeek uses npm installs only; update or recreate the variant, or run with --no-tweak.";
  }
  return null;
};
var formatTweakccFailure = (output) => {
  const hint = extractErrorHint(output);
  if (hint) return hint;
  const lines = output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.length === 0) return "tweakcc failed.";
  const errorLine = lines.find((line) => line.toLowerCase().startsWith("error:"));
  if (errorLine) return errorLine;
  const tail = lines.slice(-3).join(" | ");
  return tail.length > 0 ? tail : "tweakcc failed.";
};

// src/core/variants.ts
import fs4 from "node:fs";
import path5 from "node:path";
var loadVariantMeta = (variantDir) => {
  const metaPath = path5.join(variantDir, "variant.json");
  if (!fs4.existsSync(metaPath)) return null;
  return readJson(metaPath);
};
var listVariants = (rootDir) => {
  if (!fs4.existsSync(rootDir)) return [];
  return fs4.readdirSync(rootDir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name).filter((name) => fs4.existsSync(path5.join(rootDir, name, "variant.json"))).map((name) => ({ name, meta: loadVariantMeta(path5.join(rootDir, name)) }));
};

// src/core/variant-builder/VariantBuilder.ts
import path18 from "node:path";

// src/providers/index.ts
var DEFAULT_TIMEOUT_MS = "3000000";
var CCROUTER_AUTH_FALLBACK = "ccrouter-proxy";
var PROVIDERS = {
  mirror: {
    key: "mirror",
    label: "Mirror Claude",
    description: "Pure Claude with isolated config and clean defaults",
    baseUrl: "",
    // Empty = use Claude Code defaults (no ANTHROPIC_BASE_URL override)
    env: {
      // Only cosmetic settings - no auth or model overrides
      CLAUDE_SNEAKPEEK_SPLASH: 1,
      CLAUDE_SNEAKPEEK_PROVIDER_LABEL: "Mirror Claude",
      CLAUDE_SNEAKPEEK_SPLASH_STYLE: "mirror"
    },
    apiKeyLabel: "",
    // Empty = skip API key prompt
    authMode: "none",
    // No auth handling - user authenticates via normal Claude flow
    credentialOptional: true,
    // No credentials required at create time
    noPromptPack: true
    // Skip prompt pack (pure Claude experience)
  },
  zai: {
    key: "zai",
    label: "Zai Cloud",
    description: "GLM-4.7 via Z.ai Coding Plan",
    baseUrl: "https://api.z.ai/api/anthropic",
    env: {
      API_TIMEOUT_MS: DEFAULT_TIMEOUT_MS,
      ANTHROPIC_DEFAULT_HAIKU_MODEL: "glm-4.5-air",
      ANTHROPIC_DEFAULT_SONNET_MODEL: "glm-4.7",
      ANTHROPIC_DEFAULT_OPUS_MODEL: "glm-4.7",
      CLAUDE_SNEAKPEEK_SPLASH: 1,
      CLAUDE_SNEAKPEEK_PROVIDER_LABEL: "Zai Cloud",
      CLAUDE_SNEAKPEEK_SPLASH_STYLE: "zai"
    },
    apiKeyLabel: "Zai API key"
  },
  minimax: {
    key: "minimax",
    label: "MiniMax Cloud",
    description: "MiniMax-M2.1 via MiniMax Cloud",
    baseUrl: "https://api.minimax.io/anthropic",
    env: {
      API_TIMEOUT_MS: DEFAULT_TIMEOUT_MS,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: 1,
      ANTHROPIC_MODEL: "MiniMax-M2.1",
      ANTHROPIC_SMALL_FAST_MODEL: "MiniMax-M2.1",
      ANTHROPIC_DEFAULT_SONNET_MODEL: "MiniMax-M2.1",
      ANTHROPIC_DEFAULT_OPUS_MODEL: "MiniMax-M2.1",
      ANTHROPIC_DEFAULT_HAIKU_MODEL: "MiniMax-M2.1",
      CLAUDE_SNEAKPEEK_SPLASH: 1,
      CLAUDE_SNEAKPEEK_PROVIDER_LABEL: "MiniMax Cloud",
      CLAUDE_SNEAKPEEK_SPLASH_STYLE: "minimax"
    },
    apiKeyLabel: "MiniMax API key"
  },
  kimi: {
    key: "kimi",
    label: "Kimi AI",
    description: "Kimi K2.5 (Multimodal)",
    baseUrl: "https://api.kimi.com/coding",
    env: {
      API_TIMEOUT_MS: DEFAULT_TIMEOUT_MS,
      ANTHROPIC_DEFAULT_SONNET_MODEL: "kimi-k2.5",
      ANTHROPIC_DEFAULT_HAIKU_MODEL: "kimi-k2-turbo-preview",
      ANTHROPIC_DEFAULT_OPUS_MODEL: "kimi-k2-thinking",
      CLAUDE_SNEAKPEEK_SPLASH: 1,
      CLAUDE_SNEAKPEEK_PROVIDER_LABEL: "Kimi AI",
      CLAUDE_SNEAKPEEK_SPLASH_STYLE: "kimi"
    },
    apiKeyLabel: "Kimi API key"
  },
  openrouter: {
    key: "openrouter",
    label: "OpenRouter",
    description: "100+ models via OpenRouter gateway",
    baseUrl: "https://openrouter.ai/api",
    env: {
      API_TIMEOUT_MS: DEFAULT_TIMEOUT_MS,
      CLAUDE_SNEAKPEEK_SPLASH: 1,
      CLAUDE_SNEAKPEEK_PROVIDER_LABEL: "OpenRouter",
      CLAUDE_SNEAKPEEK_SPLASH_STYLE: "openrouter"
    },
    apiKeyLabel: "OpenRouter API key",
    authMode: "authToken",
    requiresModelMapping: true
  },
  ccrouter: {
    key: "ccrouter",
    label: "Claude Code Router",
    description: "Local LLMs via Claude Code Router",
    baseUrl: "http://127.0.0.1:3456",
    env: {
      API_TIMEOUT_MS: DEFAULT_TIMEOUT_MS,
      CLAUDE_SNEAKPEEK_SPLASH: 1,
      CLAUDE_SNEAKPEEK_PROVIDER_LABEL: "Claude Code Router",
      CLAUDE_SNEAKPEEK_SPLASH_STYLE: "ccrouter"
    },
    apiKeyLabel: "Router URL",
    authMode: "authToken",
    requiresModelMapping: false,
    // Models configured in ~/.claude-code-router/config.json
    credentialOptional: true
    // No API key needed - CCRouter handles auth
  },
  custom: {
    key: "custom",
    label: "Custom",
    description: "Coming Soon \u2014 Bring your own endpoint",
    baseUrl: "",
    env: {
      API_TIMEOUT_MS: DEFAULT_TIMEOUT_MS
    },
    apiKeyLabel: "API key",
    experimental: true
  }
};
var getProvider = (key) => PROVIDERS[key];
var listProviders = (includeExperimental = false) => {
  const providers = Object.values(PROVIDERS);
  if (includeExperimental) {
    return providers;
  }
  return providers.filter((p) => !p.experimental);
};
var normalizeModelValue = (value) => (value ?? "").trim();
var applyModelOverrides = (env, overrides) => {
  if (!overrides) return;
  const entries = [
    ["ANTHROPIC_DEFAULT_SONNET_MODEL", overrides.sonnet],
    ["ANTHROPIC_DEFAULT_OPUS_MODEL", overrides.opus],
    ["ANTHROPIC_DEFAULT_HAIKU_MODEL", overrides.haiku],
    ["ANTHROPIC_SMALL_FAST_MODEL", overrides.smallFast],
    ["ANTHROPIC_MODEL", overrides.defaultModel],
    ["CLAUDE_CODE_SUBAGENT_MODEL", overrides.subagentModel]
  ];
  for (const [key, value] of entries) {
    const trimmed = normalizeModelValue(value);
    if (trimmed) {
      env[key] = trimmed;
    }
  }
};
var buildEnv = ({ providerKey, baseUrl, apiKey, extraEnv, modelOverrides }) => {
  const provider = getProvider(providerKey);
  if (!provider) {
    throw new Error(`Unknown provider: ${providerKey}`);
  }
  const env = { ...provider.env };
  const authMode = provider.authMode ?? "apiKey";
  if (authMode === "none") {
    if (Array.isArray(extraEnv)) {
      for (const entry of extraEnv) {
        const idx = entry.indexOf("=");
        if (idx === -1) continue;
        const key = entry.slice(0, idx).trim();
        const value = entry.slice(idx + 1).trim();
        if (!key) continue;
        env[key] = value;
      }
    }
    return env;
  }
  if (!Object.hasOwn(env, "DISABLE_AUTOUPDATER")) {
    env.DISABLE_AUTOUPDATER = "1";
  }
  if (!Object.hasOwn(env, "DISABLE_AUTO_MIGRATE_TO_NATIVE")) {
    env.DISABLE_AUTO_MIGRATE_TO_NATIVE = "1";
  }
  if (!Object.hasOwn(env, "CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION")) {
    env.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION = "1";
  }
  if (baseUrl) env.ANTHROPIC_BASE_URL = baseUrl;
  if (authMode === "authToken") {
    const trimmed = normalizeModelValue(apiKey);
    if (trimmed) {
      env.ANTHROPIC_AUTH_TOKEN = trimmed;
    } else if (providerKey === "ccrouter") {
      env.ANTHROPIC_AUTH_TOKEN = CCROUTER_AUTH_FALLBACK;
    }
    if (Object.hasOwn(env, "ANTHROPIC_API_KEY")) {
      delete env.ANTHROPIC_API_KEY;
    }
  } else if (apiKey) {
    env.ANTHROPIC_API_KEY = apiKey;
    env.CLAUDE_SNEAKPEEK_UNSET_AUTH_TOKEN = "1";
    if (providerKey === "zai") {
      env.Z_AI_API_KEY = apiKey;
    }
  } else if (authMode === "apiKey") {
    env.CLAUDE_SNEAKPEEK_UNSET_AUTH_TOKEN = "1";
  }
  applyModelOverrides(env, modelOverrides);
  if (Array.isArray(extraEnv)) {
    for (const entry of extraEnv) {
      const idx = entry.indexOf("=");
      if (idx === -1) continue;
      const key = entry.slice(0, idx).trim();
      const value = entry.slice(idx + 1).trim();
      if (!key) continue;
      env[key] = value;
    }
  }
  if (authMode === "authToken" && Object.hasOwn(env, "ANTHROPIC_API_KEY")) {
    delete env.ANTHROPIC_API_KEY;
  }
  if (authMode !== "authToken" && Object.hasOwn(env, "ANTHROPIC_AUTH_TOKEN")) {
    delete env.ANTHROPIC_AUTH_TOKEN;
  }
  return env;
};

// src/core/variant-builder/steps/PrepareDirectoriesStep.ts
var PrepareDirectoriesStep = class {
  name = "PrepareDirectories";
  execute(ctx) {
    ctx.report("Preparing directories...");
    ensureDir(ctx.paths.variantDir);
    ensureDir(ctx.paths.configDir);
    ensureDir(ctx.paths.tweakDir);
    ensureDir(ctx.paths.resolvedBin);
    ensureDir(ctx.paths.npmDir);
  }
  async executeAsync(ctx) {
    await ctx.report("Preparing directories...");
    ensureDir(ctx.paths.variantDir);
    ensureDir(ctx.paths.configDir);
    ensureDir(ctx.paths.tweakDir);
    ensureDir(ctx.paths.resolvedBin);
    ensureDir(ctx.paths.npmDir);
  }
};

// src/core/install.ts
import fs5 from "node:fs";
import path6 from "node:path";
import { spawn as spawn2, spawnSync as spawnSync3 } from "node:child_process";
var npmCommand = "npm";
var npmShell = process.platform === "win32";
var NPM_PACKAGE_PATTERN = /^(?:@[\w.-]+\/)?[\w.-]+$/;
var NPM_VERSION_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._+-]*$/;
var assertValidNpmPackage = (value) => {
  if (!value || !NPM_PACKAGE_PATTERN.test(value)) {
    throw new Error(`Invalid npm package "${value}". Use a normal package name like "@scope/name" or "name".`);
  }
};
var assertValidNpmVersion = (value) => {
  if (!value) return;
  if (!NPM_VERSION_PATTERN.test(value)) {
    throw new Error(`Invalid npm version "${value}". Use a specific version or dist-tag (letters, digits, ., -, +).`);
  }
};
var assertSafeNpmInputs = (npmPackage, npmVersion) => {
  assertValidNpmPackage(npmPackage);
  assertValidNpmVersion(npmVersion);
};
var quoteCmdArg = (value) => {
  if (value.length === 0) return '""';
  if (value.includes('"')) {
    throw new Error(`Invalid value "${value}". Double quotes are not supported.`);
  }
  return `"${value}"`;
};
var buildWindowsNpmCommand = (npmDir, pkgSpec) => {
  const args = ["install", "--prefix", npmDir, "--no-save", pkgSpec];
  return [npmCommand, ...args.map(quoteCmdArg)].join(" ");
};
var resolveNpmCliPath = (npmDir, npmPackage) => {
  const packageParts = npmPackage.split("/");
  return path6.join(npmDir, "node_modules", ...packageParts, "cli.js");
};
var installNpmClaude = (params) => {
  assertSafeNpmInputs(params.npmPackage, params.npmVersion);
  if (!commandExists(npmCommand)) {
    throw new Error("npm is required for npm-based installs.");
  }
  const stdio = params.stdio ?? "inherit";
  const pkgSpec = params.npmVersion ? `${params.npmPackage}@${params.npmVersion}` : params.npmPackage;
  const npmArgs = ["install", "--prefix", params.npmDir, "--no-save", pkgSpec];
  const result = npmShell ? spawnSync3(buildWindowsNpmCommand(params.npmDir, pkgSpec), {
    stdio: "pipe",
    encoding: "utf8",
    shell: true
  }) : spawnSync3(npmCommand, npmArgs, {
    stdio: "pipe",
    encoding: "utf8"
  });
  if (stdio === "inherit") {
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
  }
  if (result.status !== 0) {
    const output = `${result.stderr ?? ""}
${result.stdout ?? ""}`.trim();
    const errorMessage = result.error ? `
${result.error.message}` : "";
    const tail = output.length > 0 ? `
${output}` : "";
    throw new Error(`npm install failed for ${pkgSpec}.${errorMessage}${tail}`);
  }
  const cliPath = resolveNpmCliPath(params.npmDir, params.npmPackage);
  if (!fs5.existsSync(cliPath)) {
    throw new Error(`npm install succeeded but cli.js was not found at ${cliPath}`);
  }
  return { cliPath };
};
var installNpmClaudeAsync = (params) => {
  return new Promise((resolve, reject) => {
    try {
      assertSafeNpmInputs(params.npmPackage, params.npmVersion);
    } catch (error) {
      reject(error);
      return;
    }
    if (!commandExists(npmCommand)) {
      reject(new Error("npm is required for npm-based installs."));
      return;
    }
    const stdio = params.stdio ?? "inherit";
    const pkgSpec = params.npmVersion ? `${params.npmPackage}@${params.npmVersion}` : params.npmPackage;
    const npmArgs = ["install", "--prefix", params.npmDir, "--no-save", pkgSpec];
    const child = npmShell ? spawn2(buildWindowsNpmCommand(params.npmDir, pkgSpec), {
      stdio: "pipe",
      shell: true
    }) : spawn2(npmCommand, npmArgs, {
      stdio: "pipe"
    });
    let stdout = "";
    let stderr = "";
    child.stdout?.on("data", (data) => {
      stdout += data.toString();
      if (stdio === "inherit") process.stdout.write(data);
    });
    child.stderr?.on("data", (data) => {
      stderr += data.toString();
      if (stdio === "inherit") process.stderr.write(data);
    });
    child.on("close", (code) => {
      if (code !== 0) {
        const output = `${stderr}
${stdout}`.trim();
        const tail = output.length > 0 ? `
${output}` : "";
        reject(new Error(`npm install failed for ${pkgSpec}.${tail}`));
        return;
      }
      const cliPath = resolveNpmCliPath(params.npmDir, params.npmPackage);
      if (!fs5.existsSync(cliPath)) {
        reject(new Error(`npm install succeeded but cli.js was not found at ${cliPath}`));
        return;
      }
      resolve({ cliPath });
    });
    child.on("error", (err) => {
      reject(new Error(`Failed to spawn npm: ${err.message}`));
    });
  });
};

// src/core/variant-builder/steps/InstallNpmStep.ts
var InstallNpmStep = class {
  name = "InstallNpm";
  execute(ctx) {
    const { prefs, paths, state } = ctx;
    ctx.report(`Installing ${prefs.resolvedNpmPackage}@${prefs.resolvedNpmVersion}...`);
    const install = installNpmClaude({
      npmDir: paths.npmDir,
      npmPackage: prefs.resolvedNpmPackage,
      npmVersion: prefs.resolvedNpmVersion,
      stdio: prefs.commandStdio
    });
    state.binaryPath = install.cliPath;
    state.claudeBinary = `npm:${prefs.resolvedNpmPackage}@${prefs.resolvedNpmVersion}`;
  }
  async executeAsync(ctx) {
    const { prefs, paths, state } = ctx;
    await ctx.report(`Installing ${prefs.resolvedNpmPackage}@${prefs.resolvedNpmVersion}...`);
    const install = await installNpmClaudeAsync({
      npmDir: paths.npmDir,
      npmPackage: prefs.resolvedNpmPackage,
      npmVersion: prefs.resolvedNpmVersion,
      stdio: prefs.commandStdio
    });
    state.binaryPath = install.cliPath;
    state.claudeBinary = `npm:${prefs.resolvedNpmPackage}@${prefs.resolvedNpmVersion}`;
  }
};

// src/core/variant-builder/steps/TeamModeStep.ts
import fs8 from "node:fs";
import path9 from "node:path";

// src/core/skills.ts
import fs6 from "node:fs";
import os4 from "node:os";
import path7 from "node:path";
import { spawn as spawn3, spawnSync as spawnSync4 } from "node:child_process";
import { fileURLToPath as fileURLToPath2 } from "node:url";
var DEV_BROWSER_REPO = "https://github.com/SawyerHood/dev-browser.git";
var DEV_BROWSER_ARCHIVE = "https://github.com/SawyerHood/dev-browser/archive/refs/heads/main.tar.gz";
var SKILL_SUBDIR = path7.join("skills", "dev-browser");
var MANAGED_MARKER = ".claude-sneakpeek-managed";
var ensureDir2 = (dir) => {
  fs6.mkdirSync(dir, { recursive: true });
};
var copyDir = (source, target) => {
  fs6.cpSync(source, target, { recursive: true });
};
var resolveSkillSourceDir = (repoDir) => {
  const direct = path7.join(repoDir, SKILL_SUBDIR);
  if (fs6.existsSync(direct)) return direct;
  const nested = fs6.readdirSync(repoDir).find((entry) => entry.startsWith("dev-browser-"));
  if (nested) {
    const candidate = path7.join(repoDir, nested, SKILL_SUBDIR);
    if (fs6.existsSync(candidate)) return candidate;
  }
  return null;
};
var cloneRepo = (targetDir) => {
  if (!commandExists("git")) return { ok: false, message: "git not found" };
  const result = spawnSync4("git", ["clone", "--depth", "1", DEV_BROWSER_REPO, targetDir], {
    encoding: "utf8"
  });
  if (result.status === 0) return { ok: true };
  return { ok: false, message: result.stderr?.trim() || result.stdout?.trim() || "git clone failed" };
};
var downloadArchive = (targetDir) => {
  if (!commandExists("curl") || !commandExists("tar")) {
    return { ok: false, message: "curl or tar not found" };
  }
  const archivePath = path7.join(targetDir, "dev-browser.tar.gz");
  const curlResult = spawnSync4("curl", ["-L", "-o", archivePath, DEV_BROWSER_ARCHIVE], { encoding: "utf8" });
  if (curlResult.status !== 0) {
    return { ok: false, message: curlResult.stderr?.trim() || "curl failed" };
  }
  const tarResult = spawnSync4("tar", ["-xzf", archivePath, "-C", targetDir], { encoding: "utf8" });
  if (tarResult.status !== 0) {
    return { ok: false, message: tarResult.stderr?.trim() || "tar extract failed" };
  }
  return { ok: true };
};
var ensureDevBrowserSkill = (opts) => {
  if (!opts.install) {
    return { status: "skipped", message: "skill install disabled" };
  }
  const skillRoot = opts.targetDir || path7.join(os4.homedir(), ".claude", "skills");
  const targetDir = path7.join(skillRoot, "dev-browser");
  const markerPath = path7.join(targetDir, MANAGED_MARKER);
  const exists = fs6.existsSync(targetDir);
  const managed = exists && fs6.existsSync(markerPath);
  if (exists && !managed && !opts.update) {
    return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
  }
  ensureDir2(skillRoot);
  const tmpDir = fs6.mkdtempSync(path7.join(os4.tmpdir(), "claude-sneakpeek-skill-"));
  try {
    let fetchResult = cloneRepo(tmpDir);
    if (!fetchResult.ok) {
      fetchResult = downloadArchive(tmpDir);
    }
    if (!fetchResult.ok) {
      return { status: "failed", message: fetchResult.message || "skill fetch failed" };
    }
    const sourceDir = resolveSkillSourceDir(tmpDir);
    if (!sourceDir) {
      return { status: "failed", message: "skill source not found after download" };
    }
    if (exists) {
      fs6.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs6.writeFileSync(
      markerPath,
      JSON.stringify({ managedBy: "claude-sneakpeek", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, null, 2)
    );
    return { status: exists ? "updated" : "installed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  } finally {
    fs6.rmSync(tmpDir, { recursive: true, force: true });
  }
};
var ORCHESTRATOR_SKILL_NAME = "orchestration";
var findBundledSkillDir = () => {
  const thisFile = fileURLToPath2(import.meta.url);
  const thisDir = path7.dirname(thisFile);
  const devPath = path7.join(thisDir, "..", "skills", ORCHESTRATOR_SKILL_NAME);
  if (fs6.existsSync(devPath)) return devPath;
  const distPath = path7.join(thisDir, "skills", ORCHESTRATOR_SKILL_NAME);
  if (fs6.existsSync(distPath)) return distPath;
  const distPath2 = path7.join(thisDir, "..", "skills", ORCHESTRATOR_SKILL_NAME);
  if (fs6.existsSync(distPath2)) return distPath2;
  return null;
};
var installOrchestratorSkill = (configDir) => {
  const sourceDir = findBundledSkillDir();
  if (!sourceDir) {
    return { status: "failed", message: "bundled orchestrator skill not found" };
  }
  const skillsDir = path7.join(configDir, "skills");
  const targetDir = path7.join(skillsDir, ORCHESTRATOR_SKILL_NAME);
  const markerPath = path7.join(targetDir, MANAGED_MARKER);
  try {
    ensureDir2(skillsDir);
    if (fs6.existsSync(targetDir) && !fs6.existsSync(markerPath)) {
      return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
    }
    if (fs6.existsSync(targetDir)) {
      fs6.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs6.writeFileSync(
      markerPath,
      JSON.stringify({ managedBy: "claude-sneakpeek", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, null, 2)
    );
    return { status: "installed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  }
};
var removeOrchestratorSkill = (configDir) => {
  const skillsDir = path7.join(configDir, "skills");
  const targetDir = path7.join(skillsDir, ORCHESTRATOR_SKILL_NAME);
  const markerPath = path7.join(targetDir, MANAGED_MARKER);
  if (!fs6.existsSync(targetDir)) {
    return { status: "skipped", message: "skill not installed" };
  }
  if (!fs6.existsSync(markerPath)) {
    return { status: "skipped", message: "skill is user-managed, not removing" };
  }
  try {
    fs6.rmSync(targetDir, { recursive: true, force: true });
    return { status: "removed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  }
};
var TASK_MANAGER_SKILL_NAME = "task-manager";
var findBundledTaskManagerSkillDir = () => {
  const thisFile = fileURLToPath2(import.meta.url);
  const thisDir = path7.dirname(thisFile);
  const devPath = path7.join(thisDir, "..", "skills", TASK_MANAGER_SKILL_NAME);
  if (fs6.existsSync(devPath)) return devPath;
  const distPath = path7.join(thisDir, "skills", TASK_MANAGER_SKILL_NAME);
  if (fs6.existsSync(distPath)) return distPath;
  const distPath2 = path7.join(thisDir, "..", "skills", TASK_MANAGER_SKILL_NAME);
  if (fs6.existsSync(distPath2)) return distPath2;
  return null;
};
var installTaskManagerSkill = (configDir) => {
  const sourceDir = findBundledTaskManagerSkillDir();
  if (!sourceDir) {
    return { status: "failed", message: "bundled task-manager skill not found" };
  }
  const skillsDir = path7.join(configDir, "skills");
  const targetDir = path7.join(skillsDir, TASK_MANAGER_SKILL_NAME);
  const markerPath = path7.join(targetDir, MANAGED_MARKER);
  try {
    ensureDir2(skillsDir);
    if (fs6.existsSync(targetDir) && !fs6.existsSync(markerPath)) {
      return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
    }
    if (fs6.existsSync(targetDir)) {
      fs6.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs6.writeFileSync(
      markerPath,
      JSON.stringify({ managedBy: "claude-sneakpeek", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, null, 2)
    );
    return { status: "installed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  }
};
var removeTaskManagerSkill = (configDir) => {
  const skillsDir = path7.join(configDir, "skills");
  const targetDir = path7.join(skillsDir, TASK_MANAGER_SKILL_NAME);
  const markerPath = path7.join(targetDir, MANAGED_MARKER);
  if (!fs6.existsSync(targetDir)) {
    return { status: "skipped", message: "skill not installed" };
  }
  if (!fs6.existsSync(markerPath)) {
    return { status: "skipped", message: "skill is user-managed, not removing" };
  }
  try {
    fs6.rmSync(targetDir, { recursive: true, force: true });
    return { status: "removed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  }
};
var spawnAsync = (cmd, args) => {
  return new Promise((resolve) => {
    const child = spawn3(cmd, args, { stdio: "pipe" });
    let stderr = "";
    let stdout = "";
    child.stdout?.on("data", (d) => {
      stdout += d.toString();
    });
    child.stderr?.on("data", (d) => {
      stderr += d.toString();
    });
    child.on("close", (code) => {
      if (code === 0) resolve({ ok: true });
      else resolve({ ok: false, message: stderr.trim() || stdout.trim() || `${cmd} failed` });
    });
    child.on("error", (err) => resolve({ ok: false, message: err.message }));
  });
};
var cloneRepoAsync = async (targetDir) => {
  if (!commandExists("git")) return { ok: false, message: "git not found" };
  return spawnAsync("git", ["clone", "--depth", "1", DEV_BROWSER_REPO, targetDir]);
};
var downloadArchiveAsync = async (targetDir) => {
  if (!commandExists("curl") || !commandExists("tar")) {
    return { ok: false, message: "curl or tar not found" };
  }
  const archivePath = path7.join(targetDir, "dev-browser.tar.gz");
  const curlResult = await spawnAsync("curl", ["-L", "-o", archivePath, DEV_BROWSER_ARCHIVE]);
  if (!curlResult.ok) return curlResult;
  return spawnAsync("tar", ["-xzf", archivePath, "-C", targetDir]);
};
var ensureDevBrowserSkillAsync = async (opts) => {
  if (!opts.install) {
    return { status: "skipped", message: "skill install disabled" };
  }
  const skillRoot = opts.targetDir || path7.join(os4.homedir(), ".claude", "skills");
  const targetDir = path7.join(skillRoot, "dev-browser");
  const markerPath = path7.join(targetDir, MANAGED_MARKER);
  const exists = fs6.existsSync(targetDir);
  const managed = exists && fs6.existsSync(markerPath);
  if (exists && !managed && !opts.update) {
    return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
  }
  ensureDir2(skillRoot);
  const tmpDir = fs6.mkdtempSync(path7.join(os4.tmpdir(), "claude-sneakpeek-skill-"));
  try {
    let fetchResult = await cloneRepoAsync(tmpDir);
    if (!fetchResult.ok) {
      fetchResult = await downloadArchiveAsync(tmpDir);
    }
    if (!fetchResult.ok) {
      return { status: "failed", message: fetchResult.message || "skill fetch failed" };
    }
    const sourceDir = resolveSkillSourceDir(tmpDir);
    if (!sourceDir) {
      return { status: "failed", message: "skill source not found after download" };
    }
    if (exists) {
      fs6.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs6.writeFileSync(
      markerPath,
      JSON.stringify({ managedBy: "claude-sneakpeek", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, null, 2)
    );
    return { status: exists ? "updated" : "installed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  } finally {
    fs6.rmSync(tmpDir, { recursive: true, force: true });
  }
};

// src/team-pack/index.ts
import fs7 from "node:fs";
import path8 from "node:path";
import { fileURLToPath as fileURLToPath3 } from "node:url";
var __dirname = path8.dirname(fileURLToPath3(import.meta.url));
var TEAM_PACK_FILES = [
  { source: "tasklist.md", target: "tool-description-tasklist.md" },
  { source: "taskupdate.md", target: "tool-description-taskupdate.md" },
  { source: "task-extra-notes.md", target: "agent-prompt-task-tool-extra-notes.md" },
  { source: "task-management-note.md", target: "system-prompt-task-management-note.md" },
  { source: "orchestration-skill.md", target: "system-prompt-orchestration-skill.md" },
  { source: "skill-tool-override.md", target: "tool-description-skill.md" }
];
var copyTeamPackPrompts = (systemPromptsDir) => {
  const copied = [];
  if (!fs7.existsSync(systemPromptsDir)) {
    fs7.mkdirSync(systemPromptsDir, { recursive: true });
  }
  for (const file of TEAM_PACK_FILES) {
    const sourcePath = path8.join(__dirname, file.source);
    const targetPath = path8.join(systemPromptsDir, file.target);
    if (fs7.existsSync(sourcePath)) {
      fs7.copyFileSync(sourcePath, targetPath);
      copied.push(file.target);
    }
  }
  return copied;
};
var removeTeamPackPrompts = (systemPromptsDir) => {
  const removed = [];
  if (!fs7.existsSync(systemPromptsDir)) {
    return removed;
  }
  for (const file of TEAM_PACK_FILES) {
    const targetPath = path8.join(systemPromptsDir, file.target);
    if (fs7.existsSync(targetPath)) {
      fs7.unlinkSync(targetPath);
      removed.push(file.target);
    }
  }
  return removed;
};
var configureTeamToolset = (configPath) => {
  if (!fs7.existsSync(configPath)) {
    return false;
  }
  try {
    const config = JSON.parse(fs7.readFileSync(configPath, "utf8"));
    config.settings = config.settings || {};
    const toolsets = Array.isArray(config.settings.toolsets) ? config.settings.toolsets : [];
    const defaultToolsetName = config.settings.defaultToolset;
    const existingDefaultToolset = toolsets.find(
      (t) => t.name === defaultToolsetName
    );
    const existingBlockedTools = existingDefaultToolset?.blockedTools || [];
    const mergedBlockedTools = [.../* @__PURE__ */ new Set([...existingBlockedTools, "TodoWrite"])];
    const teamToolset = {
      name: "team",
      allowedTools: "*",
      blockedTools: mergedBlockedTools
    };
    const existingTeamIndex = toolsets.findIndex((t) => t.name === "team");
    if (existingTeamIndex >= 0) {
      toolsets[existingTeamIndex] = teamToolset;
    } else {
      toolsets.push(teamToolset);
    }
    config.settings.toolsets = toolsets;
    config.settings.defaultToolset = "team";
    config.settings.planModeToolset = "team";
    fs7.writeFileSync(configPath, JSON.stringify(config, null, 2));
    return true;
  } catch {
    return false;
  }
};
var removeTeamToolset = (configPath) => {
  if (!fs7.existsSync(configPath)) {
    return false;
  }
  try {
    const config = JSON.parse(fs7.readFileSync(configPath, "utf8"));
    config.settings = config.settings || {};
    const toolsets = Array.isArray(config.settings.toolsets) ? config.settings.toolsets : [];
    const nextToolsets = toolsets.filter((t) => t?.name !== "team");
    const fallbackName = nextToolsets[0]?.name;
    if (config.settings.defaultToolset === "team") {
      if (fallbackName) {
        config.settings.defaultToolset = fallbackName;
      } else {
        delete config.settings.defaultToolset;
      }
    }
    if (config.settings.planModeToolset === "team") {
      if (fallbackName) {
        config.settings.planModeToolset = fallbackName;
      } else {
        delete config.settings.planModeToolset;
      }
    }
    config.settings.toolsets = nextToolsets;
    fs7.writeFileSync(configPath, JSON.stringify(config, null, 2));
    return true;
  } catch {
    return false;
  }
};

// src/core/variant-builder/team-mode-patch.ts
var TODO_WRITE_MARKER = /(var|let|const)\s+[A-Za-z_$][\w$]*="TodoWrite";/;
var IS_ENABLED_FN_RE = /isEnabled\(\)\{return!([A-Za-z_$][\w$]*)\(\)\}/;
var findTodoWriteGate = (content) => {
  const markerIndex = content.search(TODO_WRITE_MARKER);
  if (markerIndex === -1) return null;
  const window = content.slice(markerIndex, markerIndex + 8e3);
  const isEnabledMatch = window.match(IS_ENABLED_FN_RE);
  if (!isEnabledMatch) return null;
  return { fnName: isEnabledMatch[1] };
};
var findGateDefinition = (content, fnName) => {
  const fnDefRe = new RegExp(`function\\s+${fnName}\\(\\)\\{return(!0|!1)\\}`);
  return content.match(fnDefRe);
};
var detectTeamModeState = (content) => {
  const gate = findTodoWriteGate(content);
  if (!gate) return "unknown";
  const fnDefMatch = findGateDefinition(content, gate.fnName);
  if (!fnDefMatch) return "unknown";
  return fnDefMatch[1] === "!0" ? "enabled" : "disabled";
};
var setTeamModeEnabled = (content, enable) => {
  const gate = findTodoWriteGate(content);
  if (!gate) return { content, changed: false, state: "unknown" };
  const fnDefRe = new RegExp(`function\\s+${gate.fnName}\\(\\)\\{return(!0|!1)\\}`);
  const match = content.match(fnDefRe);
  if (!match) return { content, changed: false, state: "unknown" };
  const desiredLiteral = enable ? "!0" : "!1";
  const currentLiteral = match[1];
  if (currentLiteral === desiredLiteral) {
    return { content, changed: false, state: enable ? "enabled" : "disabled" };
  }
  const updated = content.replace(fnDefRe, `function ${gate.fnName}(){return${desiredLiteral}}`);
  return { content: updated, changed: true, state: enable ? "enabled" : "disabled" };
};

// src/core/variant-builder/steps/TeamModeStep.ts
var TeamModeStep = class {
  name = "TeamMode";
  shouldEnableTeamMode(ctx) {
    return Boolean(ctx.params.enableTeamMode) || Boolean(ctx.provider.enablesTeamMode);
  }
  execute(ctx) {
    if (!this.shouldEnableTeamMode(ctx)) return;
    ctx.report("Enabling team mode...");
    this.patchCli(ctx);
  }
  async executeAsync(ctx) {
    if (!this.shouldEnableTeamMode(ctx)) return;
    await ctx.report("Enabling team mode...");
    this.patchCli(ctx);
  }
  patchCli(ctx) {
    const { state, paths } = ctx;
    const cliPath = path9.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs8.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping team mode patch");
      return;
    }
    if (!fs8.existsSync(backupPath)) {
      fs8.copyFileSync(cliPath, backupPath);
    }
    const content = fs8.readFileSync(cliPath, "utf8");
    const patchResult = setTeamModeEnabled(content, true);
    if (patchResult.state === "unknown") {
      state.notes.push("Warning: Team mode marker not found in cli.js, patch may not work");
      return;
    }
    if (!patchResult.changed && patchResult.state === "enabled") {
      state.notes.push("Team mode already enabled");
      return;
    }
    fs8.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs8.readFileSync(cliPath, "utf8");
    if (detectTeamModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Team mode patch verification failed");
      return;
    }
    const settingsPath = path9.join(paths.configDir, "settings.json");
    if (fs8.existsSync(settingsPath)) {
      try {
        const settings = JSON.parse(fs8.readFileSync(settingsPath, "utf8"));
        settings.env = settings.env || {};
        if (!settings.env.CLAUDE_CODE_TEAM_MODE) {
          settings.env.CLAUDE_CODE_TEAM_MODE = "1";
        }
        if (!settings.env.CLAUDE_CODE_AGENT_TYPE) {
          settings.env.CLAUDE_CODE_AGENT_TYPE = "team-lead";
        }
        settings.permissions = settings.permissions || {};
        settings.permissions.allow = settings.permissions.allow || [];
        if (!settings.permissions.allow.includes("Skill(orchestration)")) {
          settings.permissions.allow.push("Skill(orchestration)");
        }
        fs8.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
      } catch {
        state.notes.push("Warning: Could not update settings.json with team env vars");
      }
    }
    state.notes.push("Team mode enabled successfully");
    const skillResult = installOrchestratorSkill(paths.configDir);
    if (skillResult.status === "installed") {
      state.notes.push("Multi-agent orchestrator skill installed");
    } else if (skillResult.status === "failed") {
      state.notes.push(`Warning: orchestrator skill install failed: ${skillResult.message}`);
    }
    const taskSkillResult = installTaskManagerSkill(paths.configDir);
    if (taskSkillResult.status === "installed") {
      state.notes.push("Task manager skill installed");
    } else if (taskSkillResult.status === "failed") {
      state.notes.push(`Warning: task-manager skill install failed: ${taskSkillResult.message}`);
    }
    const systemPromptsDir = path9.join(paths.tweakDir, "system-prompts");
    const copiedFiles = copyTeamPackPrompts(systemPromptsDir);
    if (copiedFiles.length > 0) {
      state.notes.push(`Team pack prompts installed (${copiedFiles.join(", ")})`);
    }
    const tweakccConfigPath = path9.join(paths.tweakDir, "config.json");
    if (configureTeamToolset(tweakccConfigPath)) {
      state.notes.push("Team toolset configured (TodoWrite blocked)");
    }
  }
};

// src/core/variant-builder/steps/SwarmModeStep.ts
import fs9 from "node:fs";
import path10 from "node:path";

// src/core/variant-builder/swarm-mode-patch.ts
var SWARM_GATE_MARKER = /tengu_brass_pebble/;
var SWARM_GATE_FN_RE = /function\s+([a-zA-Z_$][\w$]*)\(\)\{if\([\w$]+\(process\.env\.CLAUDE_CODE_AGENT_SWARMS\)\)return!1;return\s*[\w$]+\("tengu_brass_pebble",!1\)\}/;
var findSwarmGateFunction = (content) => {
  if (!SWARM_GATE_MARKER.test(content)) return null;
  const match = content.match(SWARM_GATE_FN_RE);
  if (!match) return null;
  return { fnName: match[1], fullMatch: match[0] };
};
var isAlreadyPatched = (content, fnName) => {
  const patchedRe = new RegExp(`function\\s+${fnName}\\(\\)\\{return!0\\}`);
  return patchedRe.test(content);
};
var detectSwarmModeState = (content) => {
  const gate = findSwarmGateFunction(content);
  if (gate) {
    return "disabled";
  }
  if (!SWARM_GATE_MARKER.test(content)) {
    const hasSwarmCode = /TeammateTool|teammate_mailbox|launchSwarm/.test(content);
    if (hasSwarmCode) {
      return "enabled";
    }
    return "unknown";
  }
  return "unknown";
};
var setSwarmModeEnabled = (content, enable) => {
  if (!enable) {
    return { content, changed: false, state: detectSwarmModeState(content) };
  }
  const gate = findSwarmGateFunction(content);
  if (!gate) {
    const currentState = detectSwarmModeState(content);
    if (currentState === "enabled") {
      return { content, changed: false, state: "enabled" };
    }
    return { content, changed: false, state: "unknown" };
  }
  if (isAlreadyPatched(content, gate.fnName)) {
    return { content, changed: false, state: "enabled" };
  }
  const patched = content.replace(gate.fullMatch, `function ${gate.fnName}(){return!0}`);
  return { content: patched, changed: true, state: "enabled" };
};

// src/core/variant-builder/steps/SwarmModeStep.ts
var SwarmModeStep = class {
  name = "SwarmMode";
  shouldEnableSwarmMode(ctx) {
    if (ctx.params.disableSwarmMode === true) return false;
    return true;
  }
  execute(ctx) {
    if (!this.shouldEnableSwarmMode(ctx)) return;
    ctx.report("Enabling swarm mode...");
    this.patchCli(ctx);
  }
  async executeAsync(ctx) {
    if (!this.shouldEnableSwarmMode(ctx)) return;
    await ctx.report("Enabling swarm mode...");
    this.patchCli(ctx);
  }
  patchCli(ctx) {
    const { state, paths } = ctx;
    const cliPath = path10.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs9.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping swarm mode patch");
      return;
    }
    if (!fs9.existsSync(backupPath)) {
      fs9.copyFileSync(cliPath, backupPath);
    }
    const content = fs9.readFileSync(cliPath, "utf8");
    const patchResult = setSwarmModeEnabled(content, true);
    if (patchResult.state === "unknown") {
      state.notes.push("Warning: Swarm mode gate not found in cli.js, patch may not work");
      return;
    }
    if (!patchResult.changed && patchResult.state === "enabled") {
      state.notes.push("Swarm mode already enabled");
      return;
    }
    fs9.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs9.readFileSync(cliPath, "utf8");
    if (detectSwarmModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Swarm mode patch verification failed");
      return;
    }
    state.notes.push("Swarm mode enabled successfully");
    state.swarmModeEnabled = true;
  }
};

// src/core/variant-builder/steps/WriteConfigStep.ts
import path12 from "node:path";

// src/core/claude-config.ts
import fs10 from "node:fs";
import path11 from "node:path";
var SETTINGS_FILE = "settings.json";
var CLAUDE_CONFIG_FILE = ".claude.json";
var PLACEHOLDER_KEY = "<API_KEY>";
var toStringOrNull = (value) => {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed === PLACEHOLDER_KEY) return null;
  return trimmed;
};
var readSettingsApiKey = (configDir) => {
  const settingsPath = path11.join(configDir, SETTINGS_FILE);
  const settings = readJson(settingsPath);
  if (!settings?.env) return null;
  const env = settings.env;
  return toStringOrNull(env.ANTHROPIC_API_KEY);
};
var ZAI_DENY_TOOLS = [
  "mcp__4_5v_mcp__analyze_image",
  "mcp__milk_tea_server__claim_milk_tea_coupon",
  "mcp__web_reader__webReader"
];
var ensureZaiMcpDeny = (configDir) => {
  const settingsPath = path11.join(configDir, SETTINGS_FILE);
  const existing = readJson(settingsPath) || {};
  const permissions = existing.permissions || {};
  const deny = Array.isArray(permissions.deny) ? [...permissions.deny] : [];
  let changed = false;
  for (const tool of ZAI_DENY_TOOLS) {
    if (!deny.includes(tool)) {
      deny.push(tool);
      changed = true;
    }
  }
  if (!changed) return false;
  const next = {
    ...existing,
    permissions: {
      ...permissions,
      deny
    }
  };
  writeJson(settingsPath, next);
  return true;
};
var ENV_RENAMES = [
  ["CC_MIRROR_SPLASH", "CLAUDE_SNEAKPEEK_SPLASH"],
  ["CC_MIRROR_SPLASH_STYLE", "CLAUDE_SNEAKPEEK_SPLASH_STYLE"],
  ["CC_MIRROR_PROVIDER_LABEL", "CLAUDE_SNEAKPEEK_PROVIDER_LABEL"],
  ["CC_MIRROR_UNSET_AUTH_TOKEN", "CLAUDE_SNEAKPEEK_UNSET_AUTH_TOKEN"]
];
var migrateSettingsEnvKeys = (configDir) => {
  const settingsPath = path11.join(configDir, SETTINGS_FILE);
  const existing = readJson(settingsPath);
  if (!existing?.env) return false;
  const env = { ...existing.env };
  let changed = false;
  for (const [oldKey, newKey] of ENV_RENAMES) {
    if (Object.hasOwn(env, oldKey)) {
      if (!Object.hasOwn(env, newKey)) {
        env[newKey] = env[oldKey];
      }
      delete env[oldKey];
      changed = true;
    }
  }
  if (!changed) return false;
  writeJson(settingsPath, { ...existing, env });
  return true;
};
var ensureSettingsEnvDefaults = (configDir, defaults) => {
  const settingsPath = path11.join(configDir, SETTINGS_FILE);
  const existing = readJson(settingsPath) || {};
  const env = { ...existing.env ?? {} };
  let changed = false;
  for (const [key, value] of Object.entries(defaults)) {
    if (!Object.hasOwn(env, key)) {
      env[key] = value;
      changed = true;
    }
  }
  if (!changed) return false;
  writeJson(settingsPath, { ...existing, env });
  return true;
};
var ensureSettingsEnvOverrides = (configDir, overrides) => {
  const settingsPath = path11.join(configDir, SETTINGS_FILE);
  const existing = readJson(settingsPath) || {};
  const env = { ...existing.env ?? {} };
  let changed = false;
  for (const [key, value] of Object.entries(overrides)) {
    if (value === void 0) continue;
    if (env[key] !== value) {
      env[key] = value;
      changed = true;
    }
  }
  if (!changed) return false;
  writeJson(settingsPath, { ...existing, env });
  return true;
};
var ensureApiKeyApproval = (configDir, apiKey) => {
  const resolvedKey = toStringOrNull(apiKey) || readSettingsApiKey(configDir);
  if (!resolvedKey) return false;
  const approvedToken = resolvedKey.slice(-20);
  const configPath = path11.join(configDir, CLAUDE_CONFIG_FILE);
  const exists = fs10.existsSync(configPath);
  let config = null;
  if (exists) {
    config = readJson(configPath);
    if (!config) return false;
  } else {
    config = {};
  }
  const approved = Array.isArray(config.customApiKeyResponses?.approved) ? [...config.customApiKeyResponses.approved] : [];
  const rejected = Array.isArray(config.customApiKeyResponses?.rejected) ? [...config.customApiKeyResponses.rejected] : [];
  if (approved.includes(approvedToken)) return false;
  approved.push(approvedToken);
  const next = {
    ...config,
    customApiKeyResponses: {
      ...config.customApiKeyResponses,
      approved,
      rejected
    }
  };
  writeJson(configPath, next);
  return true;
};
var ensureOnboardingState = (configDir, opts = {}) => {
  const configPath = path11.join(configDir, CLAUDE_CONFIG_FILE);
  const exists = fs10.existsSync(configPath);
  let config = null;
  if (exists) {
    config = readJson(configPath);
    if (!config) {
      return { updated: false, themeChanged: false, onboardingChanged: false };
    }
  } else {
    config = {};
  }
  let changed = false;
  let themeChanged = false;
  let onboardingChanged = false;
  if (opts.themeId) {
    const shouldSetTheme = opts.forceTheme || !config.theme;
    if (shouldSetTheme && config.theme !== opts.themeId) {
      config.theme = opts.themeId;
      changed = true;
      themeChanged = true;
    }
  }
  if (!opts.skipOnboardingFlag && config.hasCompletedOnboarding !== true) {
    config.hasCompletedOnboarding = true;
    changed = true;
    onboardingChanged = true;
  }
  if (!changed) {
    return { updated: false, themeChanged: false, onboardingChanged: false };
  }
  writeJson(configPath, config);
  return { updated: true, themeChanged, onboardingChanged };
};
var ensureMinimaxMcpServer = (configDir, apiKey) => {
  const resolvedKey = toStringOrNull(apiKey) || readSettingsApiKey(configDir);
  const configPath = path11.join(configDir, CLAUDE_CONFIG_FILE);
  const exists = fs10.existsSync(configPath);
  let config = null;
  if (exists) {
    config = readJson(configPath);
    if (!config) return false;
  } else {
    config = {};
  }
  const existingServers = config.mcpServers ?? {};
  if (existingServers.MiniMax) return false;
  const mcpServer = {
    command: "uvx",
    args: ["minimax-coding-plan-mcp", "-y"],
    env: {
      MINIMAX_API_KEY: resolvedKey ?? "Enter your API key",
      MINIMAX_API_HOST: "https://api.minimax.io"
    }
  };
  const next = {
    ...config,
    mcpServers: {
      ...existingServers,
      MiniMax: mcpServer
    }
  };
  writeJson(configPath, next);
  return true;
};

// src/core/variant-builder/steps/WriteConfigStep.ts
var WriteConfigStep = class {
  name = "WriteConfig";
  execute(ctx) {
    this.writeConfig(ctx);
  }
  async executeAsync(ctx) {
    await ctx.report("Writing configuration...");
    this.writeConfig(ctx);
  }
  writeConfig(ctx) {
    const { params, provider, paths, state } = ctx;
    ctx.report("Writing configuration...");
    const env = buildEnv({
      providerKey: params.providerKey,
      baseUrl: params.baseUrl,
      apiKey: params.apiKey,
      extraEnv: params.extraEnv,
      modelOverrides: params.modelOverrides
    });
    if (!Object.hasOwn(env, "TWEAKCC_CONFIG_DIR")) {
      env.TWEAKCC_CONFIG_DIR = paths.tweakDir;
    }
    const authMode = provider.authMode ?? "apiKey";
    if (authMode === "apiKey" && !env.ANTHROPIC_API_KEY) {
      env.ANTHROPIC_API_KEY = "<API_KEY>";
    }
    const config = { env };
    writeJson(path12.join(paths.configDir, "settings.json"), config);
    state.env = env;
    state.resolvedApiKey = typeof env.ANTHROPIC_API_KEY === "string" ? env.ANTHROPIC_API_KEY : void 0;
    ensureApiKeyApproval(paths.configDir, state.resolvedApiKey);
    if (provider.authMode === "authToken" && !env.ANTHROPIC_AUTH_TOKEN) {
      state.notes.push("ANTHROPIC_AUTH_TOKEN not set; provider auth may fail.");
    }
    if (params.providerKey === "openrouter") {
      const missing = [];
      if (!env.ANTHROPIC_DEFAULT_SONNET_MODEL) missing.push("ANTHROPIC_DEFAULT_SONNET_MODEL");
      if (!env.ANTHROPIC_DEFAULT_OPUS_MODEL) missing.push("ANTHROPIC_DEFAULT_OPUS_MODEL");
      if (!env.ANTHROPIC_DEFAULT_HAIKU_MODEL) missing.push("ANTHROPIC_DEFAULT_HAIKU_MODEL");
      if (missing.length > 0) {
        state.notes.push(`Model mapping incomplete; add ${missing.join(", ")} if needed.`);
      }
      state.notes.push("Feature support varies by provider. WebSearch/Image tools may require special models.");
    }
  }
};

// src/core/variant-builder/steps/BrandThemeStep.ts
var BrandThemeStep = class {
  name = "BrandTheme";
  execute(ctx) {
    ctx.report("Setting up brand theme...");
    this.setupBrand(ctx);
  }
  async executeAsync(ctx) {
    await ctx.report("Setting up brand theme...");
    this.setupBrand(ctx);
    if (ctx.params.providerKey === "minimax") {
      await ctx.report("Configuring MiniMax MCP server...");
    }
  }
  setupBrand(ctx) {
    const { params, paths, prefs, state } = ctx;
    const brandKey = resolveBrandKey(params.providerKey, params.brand);
    prefs.brandKey = brandKey;
    ensureTweakccConfig(paths.tweakDir, brandKey);
    const brandThemeId = !params.noTweak && brandKey ? getBrandThemeId(brandKey) : null;
    const skipOnboardingFlag = params.providerKey === "mirror";
    const onboarding = ensureOnboardingState(paths.configDir, {
      themeId: brandThemeId ?? "dark",
      forceTheme: Boolean(brandThemeId),
      skipOnboardingFlag
    });
    if (onboarding.themeChanged) {
      state.notes.push(`Default theme set to ${brandThemeId ?? "dark"}.`);
    }
    if (onboarding.onboardingChanged) {
      state.notes.push("Onboarding marked complete.");
    }
    if (skipOnboardingFlag) {
      state.notes.push("Login screen enabled (authenticate when you run the variant).");
    }
    if (params.providerKey === "minimax") {
      ctx.report("Configuring MiniMax MCP server...");
      ensureMinimaxMcpServer(paths.configDir, state.resolvedApiKey);
    }
    if (params.providerKey === "zai") {
      const blockedZaiTools = ensureZaiMcpDeny(paths.configDir);
      if (blockedZaiTools) {
        state.notes.push("Blocked Z.ai-injected MCP tools in settings.json.");
      }
    }
    if (params.noTweak && prefs.promptPackPreference) {
      state.notes.push("Prompt pack skipped (tweakcc disabled).");
    }
  }
};

// src/core/prompt-pack.ts
import fs11 from "node:fs";
import path13 from "node:path";

// src/core/prompt-pack/sanitize.ts
var BACKTICK_REGEX = /`/g;
var sanitizeOverlayText = (text) => text.replace(BACKTICK_REGEX, "'");
var sanitizeOverlayMap = (overlays) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(overlays)) {
    if (!value || !value.trim()) continue;
    sanitized[key] = sanitizeOverlayText(value);
  }
  return sanitized;
};

// src/core/prompt-pack/shared.ts
var verbositySpec = `
<output_verbosity_spec>
- Default: 3-6 sentences or <=6 bullets.
- For multi-step / multi-file work: 1 short overview paragraph, then <=6 bullets:
  What changed, Where, How to verify, Risks, Next steps, Open questions.
</output_verbosity_spec>
`.trim();
var operatingSpec = () => `
<system_reminder>
- Operate like an ambitious, senior engineer: proactive, high-ownership, and precise.
- Prefer concrete outputs: commands, file paths, diffs, and validation steps.
- Respect permissions and confirm before destructive actions.
</system_reminder>
`.trim();
var subjectiveWorkSpec = `
<subjective_work_guardrails>
- For creative, subjective, or open-ended tasks, ask clarifying questions first (use AskUserQuestion when available).
- Treat phrases like "impress me", "make it cool", "build something amazing" as signals to clarify preferences, not invitations to execute.
- For design or aesthetic work, ask about purpose, audience, style preferences, inspirations, constraints, and tech stack before generating.
- When you catch yourself making assumptions about subjective quality, pause and ask instead.
</subjective_work_guardrails>
`.trim();
var skillClarificationSpec = `
<skill_clarification>
The examples in the Skill tool description (commit, review-pr, pdf) are illustrative only.
IMPORTANT: Only skills listed in <available_skills> are actually installed in this variant.
If a user asks for a skill not in <available_skills>, inform them it's not installed.
</skill_clarification>
`.trim();

// src/core/prompt-pack/providers/zai.ts
var ZAI_BLOCKED_MCP_TOOLS = [
  "mcp__4_5v_mcp__analyze_image",
  "mcp__milk_tea_server__claim_milk_tea_coupon",
  "mcp__web_reader__webReader"
];
var ZAI_CLI_TEXT = `
Access Z.AI capabilities via 'npx zai-cli'. The CLI is self-documenting - use '--help' at any level.

Commands:
- vision: Analyze images, screenshots, videos (many subcommands)
- search: Real-time web search (domain/recency/location/count filters)
- read: Fetch web pages as markdown/text (format/no-images/with-links/timeout)
- repo: GitHub exploration (tree/search/read). Run npx zai-cli repo --help for subcommands.

Quick start examples:
- npx zai-cli vision analyze ./screenshot.png "What errors do you see?"
- npx zai-cli search "React 19 new features" --count 5
- npx zai-cli read https://docs.example.com/api
- npx zai-cli repo search facebook/react "server components"
- npx zai-cli repo --help
`.trim();
var buildZaiContract = () => `
<explicit_guidance>
Provider: z.ai (GLM)

<authentication>
- Use API-key auth only.
- Ignore ANTHROPIC_AUTH_TOKEN if present.
- Required env:
  - ANTHROPIC_API_KEY (Claude Code API-key mode)
  - Z_AI_API_KEY (for zai-cli)
</authentication>

<tool_info>
${ZAI_CLI_TEXT}

Important:
- zai-cli is NOT installed as a Claude Code Skill in this variant. Do not use Skill for this.
</tool_info>

<tool_routing priority="critical">
When you need external info, web content, or image understanding, follow this routing (use the Bash tool):
1) Web search:
   npx -y zai-cli search "<query>" --count 5 --output-format json
2) Read a URL:
   npx -y zai-cli read <url> --output-format json
3) Image analysis:
   npx -y zai-cli vision analyze <image_url_or_path> "<prompt>" --output-format json
4) GitHub repo exploration (public repos only):
   - Search: npx -y zai-cli repo search <owner/repo> "<query>" --output-format json
   - Tree:   npx -y zai-cli repo tree <owner/repo> --depth 2 --output-format json
   - Read:   npx -y zai-cli repo read <owner/repo> <path> --output-format json

The built in WebSearch/WebFetch tools are NOT available.
</tool_routing>

<warning priority="critical">
Z.ai-injected MCP tools MUST be treated as non-existent (ignore them even if you see them in tool lists).
Rules:
- NEVER select or call these tools.
- Prefer zai-cli via Bash for web/search/vision.
- Other MCP tools may exist if the user configured them; use them only if explicitly requested or clearly needed.
Blocked tools:
${ZAI_BLOCKED_MCP_TOOLS.map((tool) => `- ${tool}`).join("\n")}
</warning>

${operatingSpec()}

${subjectiveWorkSpec}

${verbositySpec}
</explicit_guidance>
`.trim();
var buildZaiExcerpt = () => `
<tool_info>
- Use Bash + npx -y zai-cli for web/search/vision.
- Ignore the Z.ai-injected MCP tools listed below (treat them as non-existent).
- No zai-cli skill is installed; do not use Skill for this.
Blocked MCP tool names (treat as non-existent):
${ZAI_BLOCKED_MCP_TOOLS.map((tool) => `- ${tool}`).join("\n")}
</tool_info>

${subjectiveWorkSpec}
`.trim();
var buildZaiOverlays = () => ({
  main: buildZaiContract(),
  mcpCli: `
${buildZaiExcerpt()}

<warning priority="critical">
Z.ai MCP policy: Ignore the blocked Z.ai-injected MCP tools (treat them as non-existent).
</warning>

If you need web/search/vision, use zai-cli via Bash.
  `.trim(),
  taskAgent: `
<explicit_guidance>
You are a Task subagent. Stay within requested scope, but be proactive about missing prerequisites.
Verify key claims with tools when possible; cite file paths and command outputs.
</explicit_guidance>

${buildZaiExcerpt()}

${verbositySpec}
  `.trim(),
  bash: `
${ZAI_CLI_TEXT}

<explicit_guidance>
When you need web/search/vision, use these exact commands:
- Web search:
  npx -y zai-cli search "<query>" --count 5 --output-format json
- Read a URL:
  npx -y zai-cli read <url> --output-format json
- Vision: analyze images, screenshots, videos
  npx -y zai-cli vision analyze <image_url_or_path> "<prompt>" --output-format json
- GitHub repo exploration (public repos only):
  - Search: npx -y zai-cli repo search <owner/repo> "<query>" --output-format json
  - Tree:   npx -y zai-cli repo tree <owner/repo> --depth 2 --output-format json
  - Read:   npx -y zai-cli repo read <owner/repo> <path> --output-format json
</explicit_guidance>

<warning priority="critical">
Z.ai MCP policy: ignore the blocked Z.ai-injected MCP tools (treat them as non-existent).
Prefer zai-cli via Bash for web/search/vision.
</warning>
  `.trim(),
  webfetch: `
<explicit_guidance>
Z.ai routing: prefer Bash + npx -y zai-cli read <url> --output-format json.
</explicit_guidance>
  `.trim(),
  websearch: `
<explicit_guidance>
Z.ai routing: prefer Bash + npx -y zai-cli search "<query>" --count 5 --output-format json.
</explicit_guidance>
  `.trim(),
  mcpsearch: `
<warning priority="critical">
Z.ai MCP policy: never select these Z.ai-injected MCP tools (treat them as non-existent):
${ZAI_BLOCKED_MCP_TOOLS.map((tool) => `- ${tool}`).join("\n")}
</warning>

<explicit_guidance>
Prefer zai-cli via Bash for web/search/vision. Only use other MCP tools if the user explicitly configured them and they are clearly relevant.
</explicit_guidance>
  `.trim(),
  skill: skillClarificationSpec
});

// src/core/prompt-pack/providers/minimax.ts
var MINIMAX_WEB_SEARCH = "mcp__MiniMax__web_search";
var MINIMAX_UNDERSTAND_IMAGE = "mcp__MiniMax__understand_image";
var buildMinimaxContract = () => `
<explicit_guidance>
<tool_routing priority="critical">
MiniMax MCP tools available (and ONLY these for web + vision):
- ${MINIMAX_WEB_SEARCH} (web search)
- ${MINIMAX_UNDERSTAND_IMAGE} (image understanding)

<warning priority="critical">
For MiniMax variants, the builtin WebSearch tool does NOT exist (treat it as unavailable).
You MUST use ${MINIMAX_WEB_SEARCH} for all web discovery/search.
</warning>

MCP usage requirement:
- Before calling an MCP tool, you MUST load it using MCPSearch:
  - MCPSearch query: select:<full_tool_name>

Web search (MANDATORY):
1) Load: MCPSearch query select:${MINIMAX_WEB_SEARCH}
2) Call: ${MINIMAX_WEB_SEARCH} with:
   - query: 3-5 keywords; include the current date for time-sensitive queries
   - If results are weak: change keywords and retry

Image understanding (MANDATORY):
1) Load: MCPSearch query select:${MINIMAX_UNDERSTAND_IMAGE}
2) Call: ${MINIMAX_UNDERSTAND_IMAGE} for ANY image you need to interpret.
   - Only jpeg/png/webp are supported (per tool description).

Single-page URL retrieval:
- Use WebFetch for fetching and extracting from a specific URL.
- Do NOT misuse web_search to fetch full page content.
</tool_routing>

${operatingSpec()}

${subjectiveWorkSpec}

${verbositySpec}
</explicit_guidance>
`.trim();
var buildMinimaxExcerpt = () => `
<tool_info>
MiniMax tool routing:
- Web search MUST use ${MINIMAX_WEB_SEARCH} (load via MCPSearch first).
- Image understanding MUST use ${MINIMAX_UNDERSTAND_IMAGE} (load via MCPSearch first).
- Builtin WebSearch does NOT exist (treat as unavailable); always use ${MINIMAX_WEB_SEARCH}.
- Use WebFetch only for single-page URL retrieval/extraction.
</tool_info>

${subjectiveWorkSpec}
`.trim();
var buildMinimaxOverlays = () => ({
  main: buildMinimaxContract(),
  mcpCli: `
${buildMinimaxExcerpt()}

The MiniMax MCP server is preconfigured. Use MCPSearch to load the MCP tools before calling them.
  `.trim(),
  taskAgent: `
<explicit_guidance>
You are a Task subagent. Stay within requested scope, but be proactive about missing prerequisites.
Verify key claims with tools when possible; cite file paths and command outputs.
</explicit_guidance>

${buildMinimaxExcerpt()}

${verbositySpec}
  `.trim(),
  webfetch: `
<explicit_guidance>
MiniMax routing:
- Use WebFetch for fetching and extracting from a specific URL.
- Use ${MINIMAX_WEB_SEARCH} for discovery/search, not for fetching full page content.
</explicit_guidance>
  `.trim(),
  websearch: `
<explicit_guidance>
MiniMax routing: WebSearch does NOT exist (treat as unavailable).
Use MCPSearch + ${MINIMAX_WEB_SEARCH} for all web discovery/search instead.
</explicit_guidance>
  `.trim(),
  mcpsearch: `
<explicit_guidance>
MiniMax MCP tools:
- Web search: ${MINIMAX_WEB_SEARCH}
- Image understanding: ${MINIMAX_UNDERSTAND_IMAGE}

You MUST load the tool first:
- MCPSearch query: select:${MINIMAX_WEB_SEARCH} or select:${MINIMAX_UNDERSTAND_IMAGE}
</explicit_guidance>
  `.trim(),
  skill: skillClarificationSpec
});

// src/core/prompt-pack/overlays.ts
var buildProviderOverlays = (provider) => {
  if (provider === "zai") return buildZaiOverlays();
  return buildMinimaxOverlays();
};
var resolveOverlays = (provider) => {
  const base = buildProviderOverlays(provider);
  return sanitizeOverlayMap(base);
};

// src/core/prompt-pack/targets.ts
var OVERLAY_MARKERS = {
  start: "<!-- claude-sneakpeek:provider-overlay start -->",
  end: "<!-- claude-sneakpeek:provider-overlay end -->"
};
var PROMPT_PACK_TARGETS = [
  { key: "main", filename: "system-prompt-main-system-prompt.md" },
  { key: "mcpCli", filename: "system-prompt-mcp-cli.md" },
  { key: "bash", filename: "tool-description-bash.md" },
  { key: "webfetch", filename: "tool-description-webfetch.md" },
  { key: "websearch", filename: "tool-description-websearch.md" },
  { key: "mcpsearch", filename: "tool-description-mcpsearch.md" },
  { key: "mcpsearch", filename: "tool-description-mcpsearch-with-available-tools.md" },
  { key: "explore", filename: "agent-prompt-explore.md" },
  { key: "planEnhanced", filename: "agent-prompt-plan-mode-enhanced.md" },
  { key: "taskAgent", filename: "agent-prompt-task-tool.md" },
  { key: "planReminder", filename: "system-reminder-plan-mode-is-active.md" },
  { key: "planReminderSub", filename: "system-reminder-plan-mode-is-active-for-subagents.md" },
  { key: "taskTool", filename: "tool-description-task.md" },
  { key: "enterPlan", filename: "tool-description-enterplanmode.md" },
  { key: "exitPlan", filename: "tool-description-exitplanmode-v2.md" },
  { key: "skill", filename: "tool-description-skill.md" },
  { key: "conversationSummary", filename: "agent-prompt-conversation-summarization.md" },
  {
    key: "conversationSummaryExtended",
    filename: "agent-prompt-conversation-summarization-with-additional-instructions.md"
  },
  { key: "webfetchSummary", filename: "agent-prompt-webfetch-summarizer.md" }
];

// src/core/prompt-pack.ts
var isPromptPackKey = (value) => value === "zai" || value === "minimax";
var insertOverlay = (content, overlay) => {
  if (!overlay.trim()) return content;
  const block = `${OVERLAY_MARKERS.start}
${overlay.trim()}
${OVERLAY_MARKERS.end}`;
  if (content.includes(OVERLAY_MARKERS.start) && content.includes(OVERLAY_MARKERS.end)) {
    const start = content.indexOf(OVERLAY_MARKERS.start);
    const end = content.indexOf(OVERLAY_MARKERS.end, start);
    const before = content.slice(0, start).trimEnd();
    const after = content.slice(end + OVERLAY_MARKERS.end.length).trimStart();
    return `${before}

${block}

${after}`.trimEnd() + "\n";
  }
  return `${content.trimEnd()}

${block}
`.trimEnd() + "\n";
};
var updatePromptFile = (filePath, overlay) => {
  if (!overlay) return false;
  if (!fs11.existsSync(filePath)) return false;
  const content = fs11.readFileSync(filePath, "utf8");
  const updated = insertOverlay(content, overlay);
  if (updated === content) return false;
  fs11.writeFileSync(filePath, updated);
  return true;
};
var applyOverlays = (systemPromptsDir, overlays) => {
  const updated = [];
  for (const target of PROMPT_PACK_TARGETS) {
    const filePath = path13.join(systemPromptsDir, target.filename);
    const overlay = overlays[target.key];
    if (updatePromptFile(filePath, overlay)) {
      updated.push(target.filename);
    }
  }
  return updated;
};
var applyPromptPack = (tweakDir, providerKey) => {
  if (!isPromptPackKey(providerKey)) {
    return { changed: false, updated: [] };
  }
  const overlays = resolveOverlays(providerKey);
  const systemPromptsDir = path13.join(tweakDir, "system-prompts");
  const updated = applyOverlays(systemPromptsDir, overlays);
  return { changed: updated.length > 0, updated };
};

// src/core/variant-builder/steps/TweakccStep.ts
var TweakccStep = class {
  name = "Tweakcc";
  execute(ctx) {
    const { params, paths, prefs, state } = ctx;
    if (params.noTweak) {
      return;
    }
    ctx.report("Running tweakcc patches...");
    state.tweakResult = runTweakcc(paths.tweakDir, state.binaryPath, prefs.commandStdio);
    if (state.tweakResult.status !== 0) {
      const output = `${state.tweakResult.stderr ?? ""}
${state.tweakResult.stdout ?? ""}`.trim();
      throw new Error(formatTweakccFailure(output));
    }
    let shouldReapply = false;
    if (prefs.promptPackEnabled) {
      ctx.report("Applying prompt pack...");
      const packResult = applyPromptPack(paths.tweakDir, params.providerKey);
      if (packResult.changed) {
        state.notes.push(`Prompt pack applied (${packResult.updated.join(", ")})`);
        shouldReapply = true;
      }
    }
    if (shouldReapply) {
      ctx.report("Re-applying tweakcc...");
      const reapply = runTweakcc(paths.tweakDir, state.binaryPath, prefs.commandStdio);
      state.tweakResult = reapply;
      if (reapply.status !== 0) {
        const output = `${reapply.stderr ?? ""}
${reapply.stdout ?? ""}`.trim();
        throw new Error(formatTweakccFailure(output));
      }
    }
  }
  async executeAsync(ctx) {
    const { params, paths, prefs, state } = ctx;
    if (params.noTweak) {
      return;
    }
    await ctx.report("Running tweakcc patches...");
    state.tweakResult = await runTweakccAsync(paths.tweakDir, state.binaryPath, prefs.commandStdio);
    if (state.tweakResult.status !== 0) {
      const output = `${state.tweakResult.stderr ?? ""}
${state.tweakResult.stdout ?? ""}`.trim();
      throw new Error(formatTweakccFailure(output));
    }
    let shouldReapply = false;
    if (prefs.promptPackEnabled) {
      await ctx.report("Applying prompt pack...");
      const packResult = applyPromptPack(paths.tweakDir, params.providerKey);
      if (packResult.changed) {
        state.notes.push(`Prompt pack applied (${packResult.updated.join(", ")})`);
        shouldReapply = true;
      }
    }
    if (shouldReapply) {
      await ctx.report("Re-applying tweakcc...");
      const reapply = await runTweakccAsync(paths.tweakDir, state.binaryPath, prefs.commandStdio);
      state.tweakResult = reapply;
      if (reapply.status !== 0) {
        const output = `${reapply.stderr ?? ""}
${reapply.stdout ?? ""}`.trim();
        throw new Error(formatTweakccFailure(output));
      }
    }
  }
};

// src/core/wrapper.ts
import fs12 from "node:fs";
import path14 from "node:path";
var C = {
  reset: "\x1B[0m",
  // Zai: Gold/Amber gradient
  zaiPrimary: "\x1B[38;5;220m",
  // Gold
  zaiSecondary: "\x1B[38;5;214m",
  // Orange-gold
  zaiAccent: "\x1B[38;5;208m",
  // Dark orange
  zaiDim: "\x1B[38;5;172m",
  // Muted gold
  // MiniMax: Coral/Red/Orange gradient (from brand image)
  mmPrimary: "\x1B[38;5;203m",
  // Coral/salmon red
  mmSecondary: "\x1B[38;5;209m",
  // Light coral/orange
  mmAccent: "\x1B[38;5;208m",
  // Orange
  mmDim: "\x1B[38;5;167m",
  // Muted coral/dark red
  // OpenRouter: Cyan/Teal gradient
  orPrimary: "\x1B[38;5;43m",
  // Teal
  orSecondary: "\x1B[38;5;49m",
  // Bright teal
  orAccent: "\x1B[38;5;37m",
  // Deep cyan
  orDim: "\x1B[38;5;30m",
  // Muted teal
  // CCRouter: Sky blue gradient
  ccrPrimary: "\x1B[38;5;39m",
  // Sky blue
  ccrSecondary: "\x1B[38;5;45m",
  // Bright cyan
  ccrAccent: "\x1B[38;5;33m",
  // Deep blue
  ccrDim: "\x1B[38;5;31m",
  // Muted blue
  // Mirror: Silver/Chrome with electric blue
  mirPrimary: "\x1B[38;5;252m",
  // Silver/light gray
  mirSecondary: "\x1B[38;5;250m",
  // Platinum
  mirAccent: "\x1B[38;5;45m",
  // Electric cyan
  mirDim: "\x1B[38;5;243m",
  // Muted silver
  // Kimi: Prism Blue gradient
  kimiPrimary: "\x1B[38;5;27m",
  // Royal Blue
  kimiSecondary: "\x1B[38;5;33m",
  // Bright Blue
  kimiAccent: "\x1B[38;5;45m",
  // Prism Cyan
  kimiDim: "\x1B[38;5;24m",
  // Deep Blue
  // Default: White/Gray
  defPrimary: "\x1B[38;5;255m",
  // White
  defDim: "\x1B[38;5;245m"
  // Gray
};
var SPLASH_ART = {
  zai: [
    "",
    `${C.zaiPrimary}    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557       \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557${C.reset}`,
    `${C.zaiPrimary}    \u255A\u2550\u2550\u2588\u2588\u2588\u2554\u255D      \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551${C.reset}`,
    `${C.zaiSecondary}      \u2588\u2588\u2588\u2554\u255D       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551${C.reset}`,
    `${C.zaiSecondary}     \u2588\u2588\u2588\u2554\u255D    ${C.zaiAccent}\u2588\u2588\u2557${C.zaiSecondary} \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551${C.reset}`,
    `${C.zaiAccent}    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u255A\u2550\u255D \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551${C.reset}`,
    `${C.zaiAccent}    \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D      \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D${C.reset}`,
    "",
    `${C.zaiDim}    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.zaiPrimary}\u25C6${C.zaiDim}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.reset}`,
    `${C.zaiSecondary}      GLM Coding Plan${C.reset}`,
    ""
  ],
  minimax: [
    "",
    `${C.mmPrimary}    \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557${C.reset}`,
    `${C.mmPrimary}    \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2588\u2588\u2557\u2588\u2588\u2554\u255D${C.reset}`,
    `${C.mmSecondary}    \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2554\u255D${C.reset}`,
    `${C.mmSecondary}    \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2554\u2588\u2588\u2557${C.reset}`,
    `${C.mmAccent}    \u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u255D \u2588\u2588\u2557${C.reset}`,
    `${C.mmAccent}    \u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D${C.reset}`,
    "",
    `${C.mmDim}    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.mmPrimary}\u25C6${C.mmDim}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.reset}`,
    `${C.mmSecondary}           MiniMax-M2.1 ${C.mmDim}\u2501${C.mmSecondary} AGI for All${C.reset}`,
    ""
  ],
  openrouter: [
    "",
    `${C.orPrimary}     \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557${C.reset}`,
    `${C.orPrimary}    \u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551${C.reset}`,
    `${C.orSecondary}    \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551${C.reset}`,
    `${C.orSecondary}    \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551${C.reset}`,
    `${C.orAccent}    \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551${C.reset}`,
    `${C.orAccent}     \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D${C.reset}`,
    `${C.orPrimary}    \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557${C.reset}`,
    `${C.orPrimary}    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557${C.reset}`,
    `${C.orSecondary}    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D${C.reset}`,
    `${C.orSecondary}    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557${C.reset}`,
    `${C.orAccent}    \u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551${C.reset}`,
    `${C.orAccent}    \u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D  \u255A\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D   \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D${C.reset}`,
    "",
    `${C.orDim}    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.orPrimary}\u25C6${C.orDim}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.reset}`,
    `${C.orSecondary}      One API ${C.orDim}\u2501${C.orSecondary} Any Model${C.reset}`,
    ""
  ],
  ccrouter: [
    "",
    `${C.ccrPrimary}     \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557${C.reset}`,
    `${C.ccrPrimary}    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557${C.reset}`,
    `${C.ccrSecondary}    \u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D${C.reset}`,
    `${C.ccrSecondary}    \u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557${C.reset}`,
    `${C.ccrAccent}    \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551${C.reset}`,
    `${C.ccrAccent}     \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D  \u255A\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D   \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D${C.reset}`,
    "",
    `${C.ccrDim}    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.ccrPrimary}\u25C6${C.ccrDim}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.reset}`,
    `${C.ccrSecondary}      Claude Code Router ${C.ccrDim}\u2501${C.ccrSecondary} Any Model${C.reset}`,
    ""
  ],
  mirror: [
    "",
    `${C.mirPrimary}    \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557${C.reset}`,
    `${C.mirPrimary}    \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557${C.reset}`,
    `${C.mirSecondary}    \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D${C.reset}`,
    `${C.mirSecondary}    \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557${C.reset}`,
    `${C.mirAccent}    \u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551  \u2588\u2588\u2551${C.reset}`,
    `${C.mirAccent}    \u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u255D${C.reset}`,
    "",
    `${C.mirDim}    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.mirAccent}\u25C7${C.mirDim}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.reset}`,
    `${C.mirSecondary}      Claude ${C.mirDim}\u2501${C.mirSecondary} Pure Reflection${C.reset}`,
    ""
  ],
  kimi: [
    "",
    `${C.kimiPrimary}    \u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2557${C.reset}`,
    `${C.kimiPrimary}    \u2588\u2588\u2551 \u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551${C.reset}`,
    `${C.kimiSecondary}    \u2588\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2551${C.reset}`,
    `${C.kimiSecondary}    \u2588\u2588\u2554\u2550\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551${C.reset}`,
    `${C.kimiAccent}    \u2588\u2588\u2551  \u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551${C.reset}`,
    `${C.kimiAccent}    \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D${C.reset}`,
    "",
    `${C.kimiDim}    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.kimiAccent}\u25E2\u25E4${C.kimiDim}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${C.reset}`,
    `${C.kimiSecondary}      Kimi K2.5 ${C.kimiDim}\u2501${C.kimiSecondary} Prism Blue${C.reset}`,
    ""
  ],
  default: [
    "",
    `${C.defPrimary}    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557   ${C.defDim}\u2501\u2501  M I R R O R${C.reset}`,
    `${C.defPrimary}   \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D${C.reset}`,
    `${C.defPrimary}   \u2588\u2588\u2551     \u2588\u2588\u2551     ${C.defDim}Claude Code Variants${C.reset}`,
    `${C.defPrimary}   \u2588\u2588\u2551     \u2588\u2588\u2551     ${C.defDim}Custom Providers${C.reset}`,
    `${C.defPrimary}   \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557${C.reset}`,
    `${C.defPrimary}    \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D${C.reset}`,
    ""
  ]
};
var KNOWN_SPLASH_STYLES = ["zai", "minimax", "openrouter", "ccrouter", "mirror", "kimi"];
var buildWindowsWrapperScript = (opts) => {
  const splashJson = JSON.stringify(SPLASH_ART);
  const stylesJson = JSON.stringify(KNOWN_SPLASH_STYLES);
  const lines = [
    "import fs from 'node:fs';",
    "import path from 'node:path';",
    "import { spawnSync } from 'node:child_process';",
    "import os from 'node:os';",
    "",
    `const configDir = ${JSON.stringify(opts.configDir)};`,
    `const tweakDir = ${JSON.stringify(opts.tweakDir)};`,
    `const binaryPath = ${JSON.stringify(opts.binaryPath)};`,
    `const runtime = ${JSON.stringify(opts.runtime)};`,
    "const args = process.argv.slice(2);",
    "",
    "process.env.CLAUDE_CONFIG_DIR = configDir;",
    "process.env.TWEAKCC_CONFIG_DIR = tweakDir;",
    "",
    "const loadSettingsEnv = () => {",
    "  const file = path.join(configDir, 'settings.json');",
    "  try {",
    "    if (!fs.existsSync(file)) return;",
    "    const data = JSON.parse(fs.readFileSync(file, 'utf8'));",
    "    const env = data && typeof data === 'object' ? data.env : null;",
    "    if (env && typeof env === 'object') {",
    "      for (const [key, value] of Object.entries(env)) {",
    "        if (!key) continue;",
    "        process.env[key] = String(value);",
    "      }",
    "    }",
    "  } catch {",
    "    // ignore malformed settings",
    "  }",
    "};",
    "loadSettingsEnv();",
    "",
    "if ((process.env.CLAUDE_SNEAKPEEK_UNSET_AUTH_TOKEN || '0') !== '0') {",
    "  delete process.env.ANTHROPIC_AUTH_TOKEN;",
    "}",
    "",
    "// Dynamic team name: purely directory-based, with optional TEAM modifier",
    "// Check for CLAUDE_CODE_TEAM_MODE (not TEAM_NAME) to avoid Claude Code overwriting",
    "const teamMode = process.env.CLAUDE_CODE_TEAM_MODE;",
    "const teamModifier = process.env.TEAM;",
    "if (teamMode || teamModifier) {",
    "  let gitRoot = process.cwd();",
    "  try {",
    "    const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });",
    "    if (result.status === 0 && result.stdout.trim()) {",
    "      gitRoot = result.stdout.trim();",
    "    }",
    "  } catch {",
    "    // ignore",
    "  }",
    "  const folderName = path.basename(gitRoot || process.cwd());",
    "  if (teamMode) {",
    "    process.env.CLAUDE_CODE_TEAM_NAME = teamModifier ? folderName + '-' + teamModifier : folderName;",
    "  } else if (teamModifier) {",
    "    process.env.CLAUDE_CODE_TEAM_NAME = folderName + '-' + teamModifier;",
    "  }",
    "}",
    "",
    "const splashEnabled = (process.env.CLAUDE_SNEAKPEEK_SPLASH || '0') !== '0';",
    "const skipSplash = args.join(' ').includes('--output-format');",
    "const shouldSplash = splashEnabled && Boolean(process.stdout.isTTY) && !skipSplash;",
    `const splashArt = ${splashJson};`,
    `const knownStyles = new Set(${stylesJson});`,
    "if (shouldSplash) {",
    "  const style = process.env.CLAUDE_SNEAKPEEK_SPLASH_STYLE || 'default';",
    "  const label = process.env.CLAUDE_SNEAKPEEK_PROVIDER_LABEL || 'claude-sneakpeek';",
    "  const resolvedStyle = knownStyles.has(style) ? style : 'default';",
    "  const art = splashArt[resolvedStyle] || [];",
    "  process.stdout.write('\\n');",
    "  if (art.length > 0) {",
    "    process.stdout.write(art.join('\\n'));",
    "  }",
    "  if (knownStyles.has(style)) {",
    "    process.stdout.write('\\n');",
    "  } else {",
    "    process.stdout.write('\\n        ' + label + '\\n\\n');",
    "  }",
    "}",
    "",
    "const execArgs = runtime === 'node' ? [binaryPath, ...args] : args;",
    "const execCmd = runtime === 'node' ? process.execPath : binaryPath;",
    'const result = spawnSync(execCmd, execArgs, { stdio: "inherit", env: process.env });',
    'if (typeof result.status === "number") {',
    "  process.exit(result.status);",
    "}",
    "if (result.signal) {",
    "  const code = (os.constants?.signals && os.constants.signals[result.signal])",
    "    ? 128 + os.constants.signals[result.signal]",
    "    : 1;",
    "  process.exit(code);",
    "}",
    "process.exit(1);",
    ""
  ];
  return lines.join("\n");
};
var writeWindowsWrapper = (opts) => {
  const parsed = path14.parse(opts.wrapperPath);
  const basePath = parsed.ext ? path14.join(parsed.dir, parsed.name) : opts.wrapperPath;
  const cmdPath = parsed.ext ? opts.wrapperPath : `${opts.wrapperPath}.cmd`;
  const scriptPath = `${basePath}.mjs`;
  const scriptFilename = `${parsed.name}.mjs`;
  const scriptContent = buildWindowsWrapperScript({
    configDir: opts.configDir,
    tweakDir: opts.tweakDir,
    binaryPath: opts.binaryPath,
    runtime: opts.runtime
  });
  const cmdLines = ["@echo off", "setlocal", `node "%~dp0${scriptFilename}" %*`, ""];
  fs12.writeFileSync(scriptPath, scriptContent, { encoding: "utf8" });
  fs12.writeFileSync(cmdPath, cmdLines.join("\r\n"), { encoding: "utf8" });
};
var writeWrapper = (wrapperPath, configDir, binaryPath, runtime = "node") => {
  const tweakDir = path14.join(path14.dirname(configDir), "tweakcc");
  if (isWindows) {
    writeWindowsWrapper({ wrapperPath, configDir, tweakDir, binaryPath, runtime });
    return;
  }
  const execLine = runtime === "node" ? `exec node "${binaryPath}" "$@"` : `exec "${binaryPath}" "$@"`;
  const envLoader = [
    "if command -v node >/dev/null 2>&1; then",
    '  __claude_sneakpeek_env_file="$(mktemp)"',
    `  node - <<'NODE' > "$__claude_sneakpeek_env_file" || true`,
    "const fs = require('fs');",
    "const path = require('path');",
    "const dir = process.env.CLAUDE_CONFIG_DIR;",
    "if (!dir) process.exit(0);",
    "const file = path.join(dir, 'settings.json');",
    `const escape = (value) => "'" + String(value).replace(/'/g, "'\\"'\\"'") + "'";`,
    "try {",
    "  if (fs.existsSync(file)) {",
    "    const data = JSON.parse(fs.readFileSync(file, 'utf8'));",
    "    const env = data && typeof data === 'object' ? data.env : null;",
    "    if (env && typeof env === 'object') {",
    "      for (const [key, value] of Object.entries(env)) {",
    "        if (!key) continue;",
    "        process.stdout.write(`export ${key}=${escape(value)}\\n`);",
    "      }",
    "    }",
    "  }",
    "} catch {",
    "  // ignore malformed settings",
    "}",
    "NODE",
    '  if [[ -s "$__claude_sneakpeek_env_file" ]]; then',
    "    # shellcheck disable=SC1090",
    '    source "$__claude_sneakpeek_env_file"',
    "  fi",
    '  rm -f "$__claude_sneakpeek_env_file" || true',
    "fi"
  ];
  const splash = [
    'if [[ "${CLAUDE_SNEAKPEEK_SPLASH:-0}" != "0" ]] && [[ -t 1 ]]; then',
    '  if [[ "$*" != *"--output-format"* ]]; then',
    '    __cc_label="${CLAUDE_SNEAKPEEK_PROVIDER_LABEL:-claude-sneakpeek}"',
    '    __cc_style="${CLAUDE_SNEAKPEEK_SPLASH_STYLE:-default}"',
    '    __cc_show_label="1"',
    '    printf "\\n"',
    '    case "$__cc_style" in',
    "      zai)",
    "        cat <<'CCMZAI'",
    ...SPLASH_ART.zai,
    "CCMZAI",
    '        __cc_show_label="0"',
    "        ;;",
    "      minimax)",
    "        cat <<'CCMMIN'",
    ...SPLASH_ART.minimax,
    "CCMMIN",
    '        __cc_show_label="0"',
    "        ;;",
    "      openrouter)",
    "        cat <<'CCMORT'",
    ...SPLASH_ART.openrouter,
    "CCMORT",
    '        __cc_show_label="0"',
    "        ;;",
    "      ccrouter)",
    "        cat <<'CCMCCR'",
    ...SPLASH_ART.ccrouter,
    "CCMCCR",
    '        __cc_show_label="0"',
    "        ;;",
    "      mirror)",
    "        cat <<'CCMMIR'",
    ...SPLASH_ART.mirror,
    "CCMMIR",
    '        __cc_show_label="0"',
    "        ;;",
    "      kimi)",
    "        cat <<'CCMKIMI'",
    ...SPLASH_ART.kimi,
    "CCMKIMI",
    '        __cc_show_label="0"',
    "        ;;",
    "      *)",
    "        cat <<'CCMGEN'",
    ...SPLASH_ART.default,
    "CCMGEN",
    "        ;;",
    "    esac",
    '    if [[ "$__cc_show_label" == "1" ]]; then',
    '      printf "        %s\\n\\n" "$__cc_label"',
    "    else",
    '      printf "\\n"',
    "    fi",
    "  fi",
    "fi"
  ];
  const content = [
    "#!/usr/bin/env bash",
    "set -euo pipefail",
    `export CLAUDE_CONFIG_DIR="${configDir}"`,
    `export TWEAKCC_CONFIG_DIR="${tweakDir}"`,
    ...envLoader,
    'if [[ "${CLAUDE_SNEAKPEEK_UNSET_AUTH_TOKEN:-0}" != "0" ]]; then',
    "  unset ANTHROPIC_AUTH_TOKEN",
    "fi",
    "# Dynamic team name: purely directory-based, with optional TEAM modifier",
    "# Check for CLAUDE_CODE_TEAM_MODE (not TEAM_NAME) to avoid Claude Code overwriting",
    'if [[ -n "${CLAUDE_CODE_TEAM_MODE:-}" ]]; then',
    "  __cc_git_root=$(git rev-parse --show-toplevel 2>/dev/null || pwd)",
    '  __cc_folder_name=$(basename "$__cc_git_root")',
    '  if [[ -n "${TEAM:-}" ]]; then',
    "    # Folder name + TEAM modifier",
    '    export CLAUDE_CODE_TEAM_NAME="${__cc_folder_name}-${TEAM}"',
    "  else",
    "    # Just folder name (pure directory-based)",
    '    export CLAUDE_CODE_TEAM_NAME="${__cc_folder_name}"',
    "  fi",
    'elif [[ -n "${TEAM:-}" ]]; then',
    "  # TEAM env var set without team mode in settings - use folder + TEAM",
    "  __cc_git_root=$(git rev-parse --show-toplevel 2>/dev/null || pwd)",
    '  __cc_folder_name=$(basename "$__cc_git_root")',
    '  export CLAUDE_CODE_TEAM_NAME="${__cc_folder_name}-${TEAM}"',
    "fi",
    ...splash,
    execLine,
    ""
  ].join("\n");
  fs12.writeFileSync(wrapperPath, content, { mode: 493 });
};

// src/core/variant-builder/steps/WrapperStep.ts
var WrapperStep = class {
  name = "Wrapper";
  execute(ctx) {
    ctx.report("Writing CLI wrapper...");
    writeWrapper(ctx.paths.wrapperPath, ctx.paths.configDir, ctx.state.binaryPath, "node");
  }
  async executeAsync(ctx) {
    await ctx.report("Writing CLI wrapper...");
    writeWrapper(ctx.paths.wrapperPath, ctx.paths.configDir, ctx.state.binaryPath, "node");
  }
};

// src/core/shell-env.ts
import fs13 from "node:fs";
import os5 from "node:os";
import path15 from "node:path";
var SETTINGS_FILE2 = "settings.json";
var BLOCK_START = "# claude-sneakpeek: Z.ai env start";
var BLOCK_END = "# claude-sneakpeek: Z.ai env end";
var PLACEHOLDER_KEY2 = "<API_KEY>";
var normalizeApiKey = (value) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed === PLACEHOLDER_KEY2) return null;
  return trimmed;
};
var resolveShellProfile = () => {
  const home = os5.homedir();
  const shell = process.env.SHELL || "";
  const name = path15.basename(shell);
  if (name === "zsh") {
    return path15.join(home, ".zshrc");
  }
  if (name === "bash") {
    const bashrc = path15.join(home, ".bashrc");
    if (fs13.existsSync(bashrc)) return bashrc;
    return path15.join(home, ".bash_profile");
  }
  return null;
};
var readSettingsApiKey2 = (configDir) => {
  const settingsPath = path15.join(configDir, SETTINGS_FILE2);
  if (!fs13.existsSync(settingsPath)) return null;
  const settings = readJson(settingsPath);
  const key = settings?.env?.ANTHROPIC_API_KEY;
  if (typeof key !== "string") return null;
  return normalizeApiKey(key);
};
var renderBlock = (apiKey) => `${BLOCK_START}
export Z_AI_API_KEY="${apiKey}"
${BLOCK_END}
`;
var upsertBlock = (content, block) => {
  if (content.includes(BLOCK_START) && content.includes(BLOCK_END)) {
    const start = content.indexOf(BLOCK_START);
    const end = content.indexOf(BLOCK_END, start);
    const before = content.slice(0, start).trimEnd();
    const after = content.slice(end + BLOCK_END.length).trimStart();
    return `${before}

${block}
${after}`.trimEnd() + "\n";
  }
  return `${content.trimEnd()}

${block}`.trimEnd() + "\n";
};
var hasZaiKeyInProfile = (content) => {
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const exportStripped = trimmed.startsWith("export ") ? trimmed.slice(7).trim() : trimmed;
    if (!exportStripped.startsWith("Z_AI_API_KEY")) continue;
    const equalsIndex = exportStripped.indexOf("=");
    if (equalsIndex === -1) continue;
    let value = exportStripped.slice(equalsIndex + 1).trim();
    if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1);
    }
    if (normalizeApiKey(value)) return true;
  }
  return false;
};
var ensureZaiShellEnv = (opts) => {
  const apiKey = normalizeApiKey(opts.apiKey) || readSettingsApiKey2(opts.configDir);
  if (!apiKey) {
    return { status: "skipped", message: "Z_AI_API_KEY not set (missing API key)" };
  }
  const envKey = normalizeApiKey(process.env.Z_AI_API_KEY);
  if (envKey) {
    return { status: "skipped", message: "Z_AI_API_KEY already set in environment" };
  }
  const profile = opts.profilePath ?? resolveShellProfile();
  if (!profile) {
    return { status: "failed", message: "Unsupported shell; set Z_AI_API_KEY manually" };
  }
  const existing = fs13.existsSync(profile) ? fs13.readFileSync(profile, "utf8") : "";
  if (hasZaiKeyInProfile(existing)) {
    return { status: "skipped", message: "Z_AI_API_KEY already set in shell profile", path: profile };
  }
  const next = upsertBlock(existing, renderBlock(apiKey));
  if (next === existing) {
    return { status: "skipped", message: "Shell profile already up to date", path: profile };
  }
  fs13.writeFileSync(profile, next);
  return { status: "updated", path: profile, message: `Run: source ${profile}` };
};

// src/core/variant-builder/steps/ShellEnvStep.ts
var ShellEnvStep = class {
  name = "ShellEnv";
  execute(ctx) {
    this.setupShellEnv(ctx);
  }
  async executeAsync(ctx) {
    if (ctx.prefs.shellEnvEnabled && ctx.params.providerKey === "zai") {
      await ctx.report("Configuring shell environment...");
    }
    this.setupShellEnv(ctx);
  }
  setupShellEnv(ctx) {
    const { params, paths, prefs, state } = ctx;
    if (prefs.shellEnvEnabled && params.providerKey === "zai") {
      ctx.report("Configuring shell environment...");
      const shellResult = ensureZaiShellEnv({
        apiKey: state.resolvedApiKey ?? null,
        configDir: paths.configDir
      });
      if (shellResult.status === "updated") {
        const suffix = shellResult.message ? ` (${shellResult.message})` : "";
        state.notes.push(`Z_AI_API_KEY written to ${shellResult.path}${suffix}`);
      } else if (shellResult.status === "failed") {
        state.notes.push(`Z_AI_API_KEY not written: ${shellResult.message || "unknown error"}`);
      } else if (shellResult.message) {
        state.notes.push(`Z_AI_API_KEY: ${shellResult.message}`);
      }
    } else if (params.providerKey === "zai") {
      state.notes.push("Z_AI_API_KEY not written to shell profile. Set it manually in your shell rc file.");
    }
  }
};

// src/core/variant-builder/steps/SkillInstallStep.ts
import path16 from "node:path";
var SkillInstallStep = class {
  name = "SkillInstall";
  execute(ctx) {
    const { paths, prefs, state } = ctx;
    if (!prefs.skillInstallEnabled) {
      return;
    }
    ctx.report("Installing dev-browser skill...");
    const skillResult = ensureDevBrowserSkill({
      install: true,
      update: prefs.skillUpdateEnabled,
      targetDir: path16.join(paths.configDir, "skills")
    });
    if (skillResult.status === "failed") {
      state.notes.push(`dev-browser skill install failed: ${skillResult.message || "unknown error"}`);
    } else if (skillResult.status !== "skipped") {
      state.notes.push(`dev-browser skill ${skillResult.status}`);
    }
  }
  async executeAsync(ctx) {
    const { paths, prefs, state } = ctx;
    if (!prefs.skillInstallEnabled) {
      return;
    }
    await ctx.report("Installing dev-browser skill...");
    const skillResult = await ensureDevBrowserSkillAsync({
      install: true,
      update: prefs.skillUpdateEnabled,
      targetDir: path16.join(paths.configDir, "skills")
    });
    if (skillResult.status === "failed") {
      state.notes.push(`dev-browser skill install failed: ${skillResult.message || "unknown error"}`);
    } else if (skillResult.status !== "skipped") {
      state.notes.push(`dev-browser skill ${skillResult.status}`);
    }
  }
};

// src/core/variant-builder/steps/FinalizeStep.ts
import path17 from "node:path";
var FinalizeStep = class {
  name = "Finalize";
  execute(ctx) {
    ctx.report("Finalizing variant...");
    this.finalize(ctx);
  }
  async executeAsync(ctx) {
    await ctx.report("Finalizing variant...");
    this.finalize(ctx);
  }
  finalize(ctx) {
    const { params, paths, prefs, state, provider } = ctx;
    const teamModeEnabled = TEAM_MODE_SUPPORTED ? Boolean(params.enableTeamMode) || Boolean(provider.enablesTeamMode) : false;
    const swarmModeEnabled = NATIVE_MULTIAGENT_SUPPORTED ? Boolean(state.swarmModeEnabled) : false;
    const meta = {
      name: params.name,
      provider: params.providerKey,
      baseUrl: params.baseUrl,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      claudeOrig: state.claudeBinary,
      binaryPath: state.binaryPath,
      configDir: paths.configDir,
      tweakDir: paths.tweakDir,
      brand: prefs.brandKey ?? void 0,
      promptPack: prefs.promptPackPreference,
      skillInstall: prefs.skillInstallEnabled,
      shellEnv: prefs.shellEnvEnabled,
      binDir: paths.resolvedBin,
      installType: "npm",
      npmDir: paths.npmDir,
      npmPackage: prefs.resolvedNpmPackage,
      npmVersion: prefs.resolvedNpmVersion,
      teamModeEnabled,
      swarmModeEnabled
    };
    writeJson(path17.join(paths.variantDir, "variant.json"), meta);
    state.meta = meta;
  }
};

// src/core/variant-builder/VariantBuilder.ts
var normalizeNpmPackage = (value) => value && value.trim().length > 0 ? value.trim() : DEFAULT_NPM_PACKAGE;
var normalizeNpmVersion = () => DEFAULT_NPM_VERSION;
var shouldEnablePromptPack = (providerKey, provider) => {
  if (provider?.noPromptPack) return false;
  return providerKey === "zai" || providerKey === "minimax";
};
var shouldInstallSkills = (providerKey) => providerKey === "zai" || providerKey === "minimax";
var shouldEnableShellEnv = (providerKey) => providerKey === "zai";
var yieldToEventLoop = () => new Promise((resolve) => setImmediate(resolve));
var VariantBuilder = class {
  constructor(isAsync = false) {
    this.isAsync = isAsync;
    this.steps = [
      new PrepareDirectoriesStep(),
      new InstallNpmStep(),
      ...NATIVE_MULTIAGENT_SUPPORTED ? [new SwarmModeStep()] : [],
      // Swarm mode (native multi-agent) enabled by default
      new WriteConfigStep(),
      new BrandThemeStep(),
      // Creates tweakcc/config.json
      ...TEAM_MODE_SUPPORTED ? [new TeamModeStep()] : [],
      // Legacy team mode (deprecated)
      new TweakccStep(),
      new WrapperStep(),
      new ShellEnvStep(),
      new SkillInstallStep(),
      new FinalizeStep()
    ];
  }
  steps;
  /**
   * Initialize the build context from params
   */
  initContext(params) {
    const provider = getProvider(params.providerKey);
    if (!provider) throw new Error(`Unknown provider: ${params.providerKey}`);
    if (!params.name) throw new Error("Variant name is required");
    assertValidVariantName(params.name);
    const rootDir = params.rootDir ?? DEFAULT_ROOT;
    const binDir = params.binDir ?? DEFAULT_BIN_DIR;
    const resolvedRoot = expandTilde(rootDir) ?? rootDir;
    const resolvedBin = expandTilde(binDir) ?? binDir;
    const variantDir = path18.join(resolvedRoot, params.name);
    const configDir = path18.join(variantDir, "config");
    const tweakDir = path18.join(variantDir, "tweakcc");
    const wrapperPath = getWrapperPath(resolvedBin, params.name);
    const npmDir = path18.join(variantDir, "npm");
    const paths = {
      resolvedRoot,
      resolvedBin,
      variantDir,
      configDir,
      tweakDir,
      wrapperPath,
      npmDir
    };
    const resolvedNpmPackage = normalizeNpmPackage(params.npmPackage);
    const resolvedNpmVersion = normalizeNpmVersion();
    const promptPackPreference = params.promptPack ?? shouldEnablePromptPack(params.providerKey, provider);
    const promptPackEnabled = !params.noTweak && promptPackPreference;
    const skillInstallEnabled = params.skillInstall ?? shouldInstallSkills(params.providerKey);
    const shellEnvEnabled = params.shellEnv ?? shouldEnableShellEnv(params.providerKey);
    const skillUpdateEnabled = Boolean(params.skillUpdate);
    const commandStdio = params.tweakccStdio ?? "inherit";
    const prefs = {
      resolvedNpmPackage,
      resolvedNpmVersion,
      promptPackPreference,
      promptPackEnabled,
      skillInstallEnabled,
      shellEnvEnabled,
      skillUpdateEnabled,
      brandKey: null,
      // Will be resolved in BrandThemeStep
      commandStdio
    };
    const state = {
      binaryPath: "",
      claudeBinary: "",
      notes: [],
      tweakResult: null
    };
    const report = this.isAsync ? async (step) => {
      params.onProgress?.(step);
      await yieldToEventLoop();
    } : (step) => {
      params.onProgress?.(step);
    };
    return {
      params,
      provider,
      paths,
      prefs,
      state,
      report,
      isAsync: this.isAsync
    };
  }
  /**
   * Build a variant synchronously
   */
  build(params) {
    if (this.isAsync) {
      throw new Error("Use buildAsync() for async builds");
    }
    const ctx = this.initContext(params);
    for (const step of this.steps) {
      step.execute(ctx);
    }
    return this.toResult(ctx);
  }
  /**
   * Build a variant asynchronously
   */
  async buildAsync(params) {
    if (!this.isAsync) {
      throw new Error("Use build() for sync builds");
    }
    const ctx = this.initContext(params);
    for (const step of this.steps) {
      await step.executeAsync(ctx);
    }
    return this.toResult(ctx);
  }
  /**
   * Convert build context to result
   */
  toResult(ctx) {
    if (!ctx.state.meta) {
      throw new Error("FinalizeStep did not populate meta");
    }
    return {
      meta: ctx.state.meta,
      wrapperPath: ctx.paths.wrapperPath,
      tweakResult: ctx.state.tweakResult,
      notes: ctx.state.notes.length > 0 ? ctx.state.notes : void 0
    };
  }
};

// src/core/variant-builder/VariantUpdater.ts
import path24 from "node:path";

// src/core/variant-builder/update-steps/RebuildUpdateStep.ts
import fs14 from "node:fs";
import path19 from "node:path";
var RebuildUpdateStep = class {
  name = "Rebuild";
  execute(ctx) {
    ctx.report("Resetting variant install directories...");
    this.rebuild(ctx);
  }
  async executeAsync(ctx) {
    await ctx.report("Resetting variant install directories...");
    this.rebuild(ctx);
  }
  rebuild(ctx) {
    const { opts, meta, paths, state } = ctx;
    if (opts.settingsOnly) {
      return;
    }
    const shouldResetTweakcc = !opts.noTweak;
    if (shouldResetTweakcc) {
      const tweakConfigPath = path19.join(meta.tweakDir, "config.json");
      if (fs14.existsSync(tweakConfigPath)) {
        state.savedTweakccConfig = fs14.readFileSync(tweakConfigPath, "utf8");
      }
    }
    if (fs14.existsSync(paths.npmDir)) {
      fs14.rmSync(paths.npmDir, { recursive: true, force: true });
    }
    if (shouldResetTweakcc && fs14.existsSync(meta.tweakDir)) {
      fs14.rmSync(meta.tweakDir, { recursive: true, force: true });
    }
    const resolvedBin = opts.binDir ? expandTilde(opts.binDir) ?? opts.binDir : meta.binDir;
    if (resolvedBin) {
      const wrapperPath = getWrapperPath(resolvedBin, ctx.name);
      fs14.rmSync(wrapperPath, { force: true });
      if (isWindows) {
        const scriptPath = getWrapperScriptPath(resolvedBin, ctx.name);
        fs14.rmSync(scriptPath, { force: true });
      }
    }
    if (shouldResetTweakcc && state.savedTweakccConfig) {
      ensureDir(meta.tweakDir);
      fs14.writeFileSync(path19.join(meta.tweakDir, "config.json"), state.savedTweakccConfig);
      state.notes.push("Preserved tweakcc config");
    }
  }
};

// src/core/variant-builder/update-steps/InstallNpmUpdateStep.ts
var InstallNpmUpdateStep = class {
  name = "InstallNpm";
  execute(ctx) {
    if (ctx.opts.settingsOnly) return;
    ctx.report(`Installing ${ctx.prefs.resolvedNpmPackage}@${ctx.prefs.resolvedNpmVersion}...`);
    this.install(ctx, false);
  }
  async executeAsync(ctx) {
    if (ctx.opts.settingsOnly) return;
    await ctx.report(`Installing ${ctx.prefs.resolvedNpmPackage}@${ctx.prefs.resolvedNpmVersion}...`);
    await this.install(ctx, true);
  }
  async install(ctx, isAsync) {
    const { meta, paths, prefs } = ctx;
    ensureDir(paths.npmDir);
    const installOpts = {
      npmDir: paths.npmDir,
      npmPackage: prefs.resolvedNpmPackage,
      npmVersion: prefs.resolvedNpmVersion,
      stdio: prefs.commandStdio
    };
    const install = isAsync ? await installNpmClaudeAsync(installOpts) : installNpmClaude(installOpts);
    meta.binaryPath = install.cliPath;
    meta.installType = "npm";
    meta.npmDir = paths.npmDir;
    meta.npmPackage = prefs.resolvedNpmPackage;
    meta.npmVersion = prefs.resolvedNpmVersion;
    meta.claudeOrig = `npm:${prefs.resolvedNpmPackage}@${prefs.resolvedNpmVersion}`;
  }
};

// src/core/variant-builder/update-steps/SwarmModeUpdateStep.ts
import fs15 from "node:fs";
import path20 from "node:path";
var SwarmModeUpdateStep = class {
  name = "SwarmMode";
  shouldEnableSwarmMode(ctx) {
    if (ctx.meta.swarmModeEnabled === false) return false;
    return true;
  }
  execute(ctx) {
    if (!NATIVE_MULTIAGENT_SUPPORTED) return;
    if (!this.shouldEnableSwarmMode(ctx)) return;
    ctx.report("Re-applying swarm mode patch...");
    this.patchCli(ctx);
  }
  async executeAsync(ctx) {
    if (!NATIVE_MULTIAGENT_SUPPORTED) return;
    if (!this.shouldEnableSwarmMode(ctx)) return;
    await ctx.report("Re-applying swarm mode patch...");
    this.patchCli(ctx);
  }
  patchCli(ctx) {
    const { state, meta, paths } = ctx;
    const cliPath = path20.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs15.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping swarm mode patch");
      return;
    }
    if (!fs15.existsSync(backupPath)) {
      fs15.copyFileSync(cliPath, backupPath);
    }
    const content = fs15.readFileSync(cliPath, "utf8");
    const patchResult = setSwarmModeEnabled(content, true);
    if (patchResult.state === "unknown") {
      state.notes.push("Warning: Swarm mode gate not found in cli.js, patch may not work");
      return;
    }
    if (!patchResult.changed && patchResult.state === "enabled") {
      state.notes.push("Swarm mode already enabled");
      meta.swarmModeEnabled = true;
      return;
    }
    fs15.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs15.readFileSync(cliPath, "utf8");
    if (detectSwarmModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Swarm mode patch verification failed");
      return;
    }
    meta.swarmModeEnabled = true;
    state.notes.push("Swarm mode enabled successfully");
  }
};

// src/core/variant-builder/update-steps/TeamModeUpdateStep.ts
import fs16 from "node:fs";
import path21 from "node:path";
var TeamModeUpdateStep = class {
  name = "TeamMode";
  shouldEnableTeamMode(ctx) {
    const provider = getProvider(ctx.meta.provider);
    return Boolean(ctx.opts.enableTeamMode) || Boolean(provider?.enablesTeamMode) || Boolean(ctx.meta.teamModeEnabled);
  }
  shouldDisableTeamMode(ctx) {
    return Boolean(ctx.opts.disableTeamMode);
  }
  execute(ctx) {
    if (!TEAM_MODE_SUPPORTED) {
      this.handleUnsupported(ctx);
      return;
    }
    if (this.shouldDisableTeamMode(ctx)) {
      ctx.report("Disabling team mode...");
      this.unpatchCli(ctx);
      return;
    }
    if (!this.shouldEnableTeamMode(ctx)) return;
    ctx.report("Enabling team mode...");
    this.patchCli(ctx);
  }
  async executeAsync(ctx) {
    if (!TEAM_MODE_SUPPORTED) {
      this.handleUnsupported(ctx);
      return;
    }
    if (this.shouldDisableTeamMode(ctx)) {
      await ctx.report("Disabling team mode...");
      this.unpatchCli(ctx);
      return;
    }
    if (!this.shouldEnableTeamMode(ctx)) return;
    await ctx.report("Enabling team mode...");
    this.patchCli(ctx);
  }
  unpatchCli(ctx) {
    const { state, meta, paths } = ctx;
    const cliPath = path21.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    if (!fs16.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping team mode unpatch");
      this.removeSkill(ctx);
      return;
    }
    const content = fs16.readFileSync(cliPath, "utf8");
    const patchResult = setTeamModeEnabled(content, false);
    if (patchResult.state === "unknown") {
      state.notes.push("Warning: Team mode marker not found in cli.js");
      this.removeSkill(ctx);
      return;
    }
    if (!patchResult.changed && patchResult.state === "disabled") {
      state.notes.push("Team mode already disabled");
      meta.teamModeEnabled = false;
      this.removeSkill(ctx);
      return;
    }
    fs16.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs16.readFileSync(cliPath, "utf8");
    if (detectTeamModeState(verifyContent) !== "disabled") {
      state.notes.push("Warning: Team mode unpatch verification failed");
      this.removeSkill(ctx);
      return;
    }
    meta.teamModeEnabled = false;
    state.notes.push("Team mode disabled successfully");
    this.removeSkill(ctx);
  }
  removeSkill(ctx) {
    const { state, meta } = ctx;
    const skillResult = removeOrchestratorSkill(meta.configDir);
    if (skillResult.status === "removed") {
      state.notes.push("Multi-agent orchestrator skill removed");
    } else if (skillResult.status === "failed") {
      state.notes.push(`Warning: orchestrator skill removal failed: ${skillResult.message}`);
    }
    const taskSkillResult = removeTaskManagerSkill(meta.configDir);
    if (taskSkillResult.status === "removed") {
      state.notes.push("Task manager skill removed");
    } else if (taskSkillResult.status === "failed") {
      state.notes.push(`Warning: task-manager skill removal failed: ${taskSkillResult.message}`);
    }
  }
  patchCli(ctx) {
    const { state, meta, paths } = ctx;
    const cliPath = path21.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs16.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping team mode patch");
      return;
    }
    if (!fs16.existsSync(backupPath)) {
      fs16.copyFileSync(cliPath, backupPath);
    }
    const content = fs16.readFileSync(cliPath, "utf8");
    const patchResult = setTeamModeEnabled(content, true);
    if (patchResult.state === "unknown") {
      state.notes.push("Warning: Team mode marker not found in cli.js, patch may not work");
      return;
    }
    if (!patchResult.changed && patchResult.state === "enabled") {
      state.notes.push("Team mode already enabled");
      meta.teamModeEnabled = true;
      return;
    }
    fs16.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs16.readFileSync(cliPath, "utf8");
    if (detectTeamModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Team mode patch verification failed");
      return;
    }
    const settingsPath = path21.join(meta.configDir, "settings.json");
    if (fs16.existsSync(settingsPath)) {
      try {
        const settings = JSON.parse(fs16.readFileSync(settingsPath, "utf8"));
        settings.env = settings.env || {};
        if (!settings.env.CLAUDE_CODE_TEAM_MODE) {
          settings.env.CLAUDE_CODE_TEAM_MODE = "1";
        }
        if (!settings.env.CLAUDE_CODE_AGENT_TYPE) {
          settings.env.CLAUDE_CODE_AGENT_TYPE = "team-lead";
        }
        settings.permissions = settings.permissions || {};
        settings.permissions.allow = settings.permissions.allow || [];
        if (!settings.permissions.allow.includes("Skill(orchestration)")) {
          settings.permissions.allow.push("Skill(orchestration)");
        }
        fs16.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
      } catch {
        state.notes.push("Warning: Could not update settings.json with team env vars");
      }
    }
    meta.teamModeEnabled = true;
    state.notes.push("Team mode enabled successfully");
    const skillResult = installOrchestratorSkill(meta.configDir);
    if (skillResult.status === "installed") {
      state.notes.push("Multi-agent orchestrator skill installed");
    } else if (skillResult.status === "failed") {
      state.notes.push(`Warning: orchestrator skill install failed: ${skillResult.message}`);
    }
    const taskSkillResult = installTaskManagerSkill(meta.configDir);
    if (taskSkillResult.status === "installed") {
      state.notes.push("Task manager skill installed");
    } else if (taskSkillResult.status === "failed") {
      state.notes.push(`Warning: task-manager skill install failed: ${taskSkillResult.message}`);
    }
    const systemPromptsDir = path21.join(meta.tweakDir, "system-prompts");
    const copiedFiles = copyTeamPackPrompts(systemPromptsDir);
    if (copiedFiles.length > 0) {
      state.notes.push(`Team pack prompts installed (${copiedFiles.join(", ")})`);
    }
    const tweakccConfigPath = path21.join(meta.tweakDir, "config.json");
    if (configureTeamToolset(tweakccConfigPath)) {
      state.notes.push("Team toolset configured (TodoWrite blocked)");
    }
  }
  handleUnsupported(ctx) {
    const { meta, opts, state, paths } = ctx;
    if (!meta.teamModeEnabled && !opts.enableTeamMode && !opts.disableTeamMode) {
      return;
    }
    state.notes.push(
      "Team mode is not supported in this claude-sneakpeek release; disabling and removing team assets."
    );
    meta.teamModeEnabled = false;
    this.removeSkill(ctx);
    this.removeTeamSettings(ctx);
    const systemPromptsDir = path21.join(meta.tweakDir, "system-prompts");
    const removedPrompts = removeTeamPackPrompts(systemPromptsDir);
    if (removedPrompts.length > 0) {
      state.notes.push(`Team pack prompts removed (${removedPrompts.join(", ")})`);
    }
    const tweakccConfigPath = path21.join(paths.variantDir, "tweakcc", "config.json");
    if (removeTeamToolset(tweakccConfigPath)) {
      state.notes.push("Team toolset removed");
    }
  }
  removeTeamSettings(ctx) {
    const { meta, state } = ctx;
    const settingsPath = path21.join(meta.configDir, "settings.json");
    if (!fs16.existsSync(settingsPath)) {
      return;
    }
    try {
      const settings = JSON.parse(fs16.readFileSync(settingsPath, "utf8"));
      let changed = false;
      if (settings.env && typeof settings.env === "object") {
        if ("CLAUDE_CODE_TEAM_MODE" in settings.env) {
          delete settings.env.CLAUDE_CODE_TEAM_MODE;
          changed = true;
        }
        if ("CLAUDE_CODE_AGENT_TYPE" in settings.env) {
          delete settings.env.CLAUDE_CODE_AGENT_TYPE;
          changed = true;
        }
      }
      if (settings.permissions?.allow && Array.isArray(settings.permissions.allow)) {
        const nextAllow = settings.permissions.allow.filter(
          (entry) => entry !== "Skill(orchestration)" && entry !== "Skill(task-manager)"
        );
        if (nextAllow.length !== settings.permissions.allow.length) {
          settings.permissions.allow = nextAllow;
          changed = true;
        }
      }
      if (changed) {
        fs16.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
      }
    } catch {
      state.notes.push("Warning: Could not update settings.json to remove team mode flags");
    }
  }
};

// src/core/variant-builder/update-steps/ModelOverridesStep.ts
var ModelOverridesStep = class {
  name = "ModelOverrides";
  execute(ctx) {
    this.apply(ctx);
  }
  async executeAsync(ctx) {
    this.apply(ctx);
  }
  apply(ctx) {
    const { opts, meta, state } = ctx;
    if (!opts.modelOverrides || Object.keys(opts.modelOverrides).length === 0) {
      return;
    }
    const envOverridesUpdated = ensureSettingsEnvOverrides(meta.configDir, {
      ...opts.modelOverrides.sonnet ? { ANTHROPIC_DEFAULT_SONNET_MODEL: opts.modelOverrides.sonnet } : {},
      ...opts.modelOverrides.opus ? { ANTHROPIC_DEFAULT_OPUS_MODEL: opts.modelOverrides.opus } : {},
      ...opts.modelOverrides.haiku ? { ANTHROPIC_DEFAULT_HAIKU_MODEL: opts.modelOverrides.haiku } : {},
      ...opts.modelOverrides.smallFast ? { ANTHROPIC_SMALL_FAST_MODEL: opts.modelOverrides.smallFast } : {},
      ...opts.modelOverrides.defaultModel ? { ANTHROPIC_MODEL: opts.modelOverrides.defaultModel } : {},
      ...opts.modelOverrides.subagentModel ? { CLAUDE_CODE_SUBAGENT_MODEL: opts.modelOverrides.subagentModel } : {}
    });
    if (envOverridesUpdated) {
      state.notes.push("Updated model mapping in settings.json.");
    }
  }
};

// src/core/variant-builder/update-steps/TweakccUpdateStep.ts
var TweakccUpdateStep = class {
  name = "Tweakcc";
  execute(ctx) {
    if (ctx.opts.noTweak) return;
    ctx.report("Running tweakcc patches...");
    this.runTweakcc(ctx, false);
  }
  async executeAsync(ctx) {
    if (ctx.opts.noTweak) return;
    await ctx.report("Running tweakcc patches...");
    await this.runTweakcc(ctx, true);
  }
  async runTweakcc(ctx, isAsync) {
    const { opts, meta, prefs, state } = ctx;
    ensureDir(meta.tweakDir);
    if (opts.brand !== void 0) {
      state.brandKey = resolveBrandKey(meta.provider, opts.brand);
      meta.brand = state.brandKey ?? void 0;
    }
    ensureTweakccConfig(meta.tweakDir, state.brandKey);
    const tweakResult = isAsync ? await runTweakccAsync(meta.tweakDir, meta.binaryPath, prefs.commandStdio) : runTweakcc(meta.tweakDir, meta.binaryPath, prefs.commandStdio);
    state.tweakResult = tweakResult;
    if (tweakResult.status !== 0) {
      const output = `${tweakResult.stderr ?? ""}
${tweakResult.stdout ?? ""}`.trim();
      throw new Error(formatTweakccFailure(output));
    }
    let shouldReapply = false;
    if (prefs.promptPackEnabled) {
      if (isAsync) {
        await ctx.report("Applying prompt pack...");
      } else {
        ctx.report("Applying prompt pack...");
      }
      const packResult = applyPromptPack(meta.tweakDir, meta.provider);
      if (packResult.changed) {
        state.notes.push(`Prompt pack applied (${packResult.updated.join(", ")})`);
        shouldReapply = true;
      }
    }
    if (shouldReapply) {
      if (isAsync) {
        await ctx.report("Re-applying tweakcc...");
      } else {
        ctx.report("Re-applying tweakcc...");
      }
      const reapply = isAsync ? await runTweakccAsync(meta.tweakDir, meta.binaryPath, prefs.commandStdio) : runTweakcc(meta.tweakDir, meta.binaryPath, prefs.commandStdio);
      state.tweakResult = reapply;
      if (reapply.status !== 0) {
        const output = `${reapply.stderr ?? ""}
${reapply.stdout ?? ""}`.trim();
        throw new Error(formatTweakccFailure(output));
      }
    }
  }
};

// src/core/variant-builder/update-steps/WrapperUpdateStep.ts
var WrapperUpdateStep = class {
  name = "Wrapper";
  execute(ctx) {
    if (ctx.opts.settingsOnly) return;
    ctx.report("Writing CLI wrapper...");
    this.writeWrapper(ctx);
  }
  async executeAsync(ctx) {
    if (ctx.opts.settingsOnly) return;
    await ctx.report("Writing CLI wrapper...");
    this.writeWrapper(ctx);
  }
  writeWrapper(ctx) {
    const { name, opts, meta } = ctx;
    const resolvedBin = opts.binDir ? expandTilde(opts.binDir) ?? opts.binDir : meta.binDir;
    if (resolvedBin) {
      ensureDir(resolvedBin);
      const wrapperPath = getWrapperPath(resolvedBin, name);
      writeWrapper(wrapperPath, meta.configDir, meta.binaryPath, "node");
      meta.binDir = resolvedBin;
    }
  }
};

// src/core/variant-builder/update-steps/ConfigUpdateStep.ts
var ConfigUpdateStep = class {
  name = "Config";
  execute(ctx) {
    ctx.report("Updating configuration...");
    this.updateConfig(ctx, false);
  }
  async executeAsync(ctx) {
    await ctx.report("Updating configuration...");
    await this.updateConfig(ctx, true);
  }
  async updateConfig(ctx, isAsync) {
    const { opts, meta, state } = ctx;
    migrateSettingsEnvKeys(meta.configDir);
    ensureApiKeyApproval(meta.configDir);
    if (meta.provider === "minimax") {
      if (isAsync) {
        await ctx.report("Configuring MiniMax MCP server...");
      } else {
        ctx.report("Configuring MiniMax MCP server...");
      }
      ensureMinimaxMcpServer(meta.configDir);
    }
    if (meta.provider === "zai") {
      const denied = ensureZaiMcpDeny(meta.configDir);
      if (denied) {
        state.notes.push("Blocked Z.ai-injected MCP tools in settings.json.");
      }
    }
    const brandThemeId = !opts.noTweak && state.brandKey ? getBrandThemeId(state.brandKey) : null;
    const onboarding = ensureOnboardingState(meta.configDir, {
      themeId: brandThemeId ?? "dark",
      forceTheme: Boolean(brandThemeId)
    });
    const envDefaultsUpdated = ensureSettingsEnvDefaults(meta.configDir, {
      TWEAKCC_CONFIG_DIR: meta.tweakDir,
      DISABLE_AUTOUPDATER: "1",
      DISABLE_AUTO_MIGRATE_TO_NATIVE: "1",
      CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION: "1"
    });
    if (envDefaultsUpdated) {
      state.notes.push(
        "Disabled Claude Code auto-updater and auto-migration (DISABLE_AUTOUPDATER=1, DISABLE_AUTO_MIGRATE_TO_NATIVE=1)."
      );
    }
    if (onboarding.themeChanged) {
      state.notes.push(`Default theme set to ${brandThemeId ?? "dark"}.`);
    }
    if (onboarding.onboardingChanged) {
      state.notes.push("Onboarding marked complete.");
    }
  }
};

// src/core/variant-builder/update-steps/ShellEnvUpdateStep.ts
var ShellEnvUpdateStep = class {
  name = "ShellEnv";
  execute(ctx) {
    if (ctx.opts.settingsOnly) return;
    this.configure(ctx, false);
  }
  async executeAsync(ctx) {
    if (ctx.opts.settingsOnly) return;
    await this.configure(ctx, true);
  }
  async configure(ctx, isAsync) {
    const { opts, meta, prefs, state } = ctx;
    if (prefs.shellEnvEnabled && meta.provider === "zai") {
      if (isAsync) {
        await ctx.report("Configuring shell environment...");
      } else {
        ctx.report("Configuring shell environment...");
      }
      const shellResult = ensureZaiShellEnv({ configDir: meta.configDir });
      if (shellResult.status === "updated") {
        const suffix = shellResult.message ? ` (${shellResult.message})` : "";
        state.notes.push(`Z_AI_API_KEY written to ${shellResult.path}${suffix}`);
      } else if (shellResult.status === "failed") {
        state.notes.push(`Z_AI_API_KEY not written: ${shellResult.message || "unknown error"}`);
      } else if (shellResult.message) {
        state.notes.push(`Z_AI_API_KEY: ${shellResult.message}`);
      }
    } else if (meta.provider === "zai" && opts.shellEnv === false) {
      state.notes.push("Z_AI_API_KEY not written to shell profile. Set it manually in your shell rc file.");
    }
  }
};

// src/core/variant-builder/update-steps/SkillInstallUpdateStep.ts
import path22 from "node:path";
var SkillInstallUpdateStep = class {
  name = "SkillInstall";
  execute(ctx) {
    if (ctx.opts.settingsOnly) return;
    if (!ctx.prefs.skillInstallEnabled) return;
    ctx.report("Installing dev-browser skill...");
    this.install(ctx, false);
  }
  async executeAsync(ctx) {
    if (ctx.opts.settingsOnly) return;
    if (!ctx.prefs.skillInstallEnabled) return;
    await ctx.report("Installing dev-browser skill...");
    await this.install(ctx, true);
  }
  async install(ctx, isAsync) {
    const { meta, prefs, state } = ctx;
    const skillOpts = {
      install: true,
      update: prefs.skillUpdateEnabled,
      targetDir: path22.join(meta.configDir, "skills")
    };
    const skillResult = isAsync ? await ensureDevBrowserSkillAsync(skillOpts) : ensureDevBrowserSkill(skillOpts);
    if (skillResult.status === "failed") {
      state.notes.push(`dev-browser skill install failed: ${skillResult.message || "unknown error"}`);
    } else if (skillResult.status !== "skipped") {
      state.notes.push(`dev-browser skill ${skillResult.status}`);
    }
  }
};

// src/core/variant-builder/update-steps/FinalizeUpdateStep.ts
import path23 from "node:path";
var FinalizeUpdateStep = class {
  name = "Finalize";
  execute(ctx) {
    ctx.report("Finalizing variant...");
    this.finalize(ctx);
  }
  async executeAsync(ctx) {
    await ctx.report("Finalizing variant...");
    this.finalize(ctx);
  }
  finalize(ctx) {
    const { meta, paths, prefs } = ctx;
    meta.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    meta.promptPack = prefs.promptPackPreference;
    meta.skillInstall = prefs.skillInstallEnabled;
    meta.shellEnv = prefs.shellEnvEnabled;
    if (!TEAM_MODE_SUPPORTED) {
      meta.teamModeEnabled = false;
    }
    delete meta.promptPackMode;
    writeJson(path23.join(paths.variantDir, "variant.json"), meta);
  }
};

// src/core/variant-builder/VariantUpdater.ts
var normalizeNpmPackage2 = (value) => value && value.trim().length > 0 ? value.trim() : DEFAULT_NPM_PACKAGE;
var normalizeNpmVersion2 = () => DEFAULT_NPM_VERSION;
var shouldEnablePromptPack2 = (providerKey) => {
  const provider = getProvider(providerKey);
  if (provider?.noPromptPack) return false;
  return providerKey === "zai" || providerKey === "minimax";
};
var shouldInstallSkills2 = (providerKey) => providerKey === "zai" || providerKey === "minimax";
var shouldEnableShellEnv2 = (providerKey) => providerKey === "zai";
var yieldToEventLoop2 = () => new Promise((resolve) => setImmediate(resolve));
var VariantUpdater = class {
  constructor(isAsync = false) {
    this.isAsync = isAsync;
    this.steps = [
      new RebuildUpdateStep(),
      new InstallNpmUpdateStep(),
      new SwarmModeUpdateStep(),
      // Patches cli.js for native multi-agent features (enabled by default)
      new TeamModeUpdateStep(),
      // Legacy team mode (deprecated, if enabled)
      new ModelOverridesStep(),
      new TweakccUpdateStep(),
      new WrapperUpdateStep(),
      new ConfigUpdateStep(),
      new ShellEnvUpdateStep(),
      new SkillInstallUpdateStep(),
      new FinalizeUpdateStep()
    ];
  }
  steps;
  /**
   * Initialize the update context
   */
  initContext(rootDir, name, opts) {
    const resolvedRoot = expandTilde(rootDir || DEFAULT_ROOT) ?? rootDir;
    const variantDir = path24.join(resolvedRoot, name);
    const meta = loadVariantMeta(variantDir);
    if (!meta) throw new Error(`Variant not found: ${name}`);
    const resolvedNpmPackage = normalizeNpmPackage2(opts.npmPackage ?? meta.npmPackage);
    const resolvedNpmVersion = normalizeNpmVersion2();
    const promptPackPreference = opts.promptPack ?? meta.promptPack ?? shouldEnablePromptPack2(meta.provider);
    const promptPackEnabled = !opts.noTweak && promptPackPreference;
    const skillInstallEnabled = opts.skillInstall ?? meta.skillInstall ?? shouldInstallSkills2(meta.provider);
    const shellEnvEnabled = opts.shellEnv ?? meta.shellEnv ?? shouldEnableShellEnv2(meta.provider);
    const skillUpdateEnabled = Boolean(opts.skillUpdate);
    const commandStdio = opts.tweakccStdio || "inherit";
    const paths = {
      resolvedRoot,
      resolvedBin: opts.binDir ? expandTilde(opts.binDir) ?? opts.binDir : meta.binDir,
      variantDir,
      npmDir: meta.npmDir || path24.join(variantDir, "npm")
    };
    const prefs = {
      resolvedNpmPackage,
      resolvedNpmVersion,
      promptPackPreference,
      promptPackEnabled,
      skillInstallEnabled,
      shellEnvEnabled,
      skillUpdateEnabled,
      commandStdio
    };
    const state = {
      notes: [],
      tweakResult: null,
      brandKey: meta.brand ?? null
    };
    const report = this.isAsync ? async (step) => {
      opts.onProgress?.(step);
      await yieldToEventLoop2();
    } : (step) => {
      opts.onProgress?.(step);
    };
    return {
      name,
      opts,
      meta,
      paths,
      prefs,
      state,
      report,
      isAsync: this.isAsync
    };
  }
  /**
   * Update a variant synchronously
   */
  update(rootDir, name, opts = {}) {
    if (this.isAsync) {
      throw new Error("Use updateAsync() for async updates");
    }
    const ctx = this.initContext(rootDir, name, opts);
    for (const step of this.steps) {
      step.execute(ctx);
    }
    return this.toResult(ctx);
  }
  /**
   * Update a variant asynchronously
   */
  async updateAsync(rootDir, name, opts = {}) {
    if (!this.isAsync) {
      throw new Error("Use update() for sync updates");
    }
    const ctx = this.initContext(rootDir, name, opts);
    for (const step of this.steps) {
      await step.executeAsync(ctx);
    }
    return this.toResult(ctx);
  }
  /**
   * Convert update context to result
   */
  toResult(ctx) {
    return {
      meta: ctx.meta,
      tweakResult: ctx.state.tweakResult,
      notes: ctx.state.notes.length > 0 ? ctx.state.notes : void 0
    };
  }
};

// src/core/index.ts
var createVariant = (params) => {
  return new VariantBuilder(false).build(params);
};
var updateVariant = (rootDir, name, opts = {}) => {
  return new VariantUpdater(false).update(rootDir, name, opts);
};
var removeVariant = (rootDir, name) => {
  const resolvedRoot = expandTilde(rootDir || DEFAULT_ROOT) ?? rootDir;
  const variantDir = path25.join(resolvedRoot, name);
  if (!fs17.existsSync(variantDir)) throw new Error(`Variant not found: ${name}`);
  fs17.rmSync(variantDir, { recursive: true, force: true });
};
var doctor = (rootDir, binDir) => {
  const resolvedRoot = expandTilde(rootDir || DEFAULT_ROOT) ?? rootDir;
  const resolvedBin = expandTilde(binDir || DEFAULT_BIN_DIR) ?? binDir;
  const variants = listVariants(resolvedRoot);
  return variants.map(({ name, meta }) => {
    const wrapperPath = getWrapperPath(resolvedBin, name);
    const wrapperOk = fs17.existsSync(wrapperPath);
    const scriptOk = !isWindows || fs17.existsSync(getWrapperScriptPath(resolvedBin, name));
    const ok = Boolean(meta && fs17.existsSync(meta.binaryPath) && wrapperOk && scriptOk);
    return {
      name,
      ok,
      binaryPath: meta?.binaryPath,
      wrapperPath
    };
  });
};
var listVariants2 = (rootDir) => listVariants(rootDir);
var tweakVariant = (rootDir, name) => {
  const resolvedRoot = expandTilde(rootDir || DEFAULT_ROOT) ?? rootDir;
  const variantDir = path25.join(resolvedRoot, name);
  const meta = loadVariantMeta(variantDir);
  if (!meta) throw new Error(`Variant not found: ${name}`);
  ensureDir(meta.tweakDir);
  const brandKey = meta.brand ?? null;
  ensureTweakccConfig(meta.tweakDir, brandKey);
  const result = launchTweakccUi(meta.tweakDir, meta.binaryPath);
  if (result.status && result.status !== 0) {
    const output = `${result.stderr ?? ""}
${result.stdout ?? ""}`.trim();
    throw new Error(formatTweakccFailure(output));
  }
};

// src/cli/commands/list.ts
function runListCommand({ opts }) {
  const rootDir = opts.root || DEFAULT_ROOT;
  const variants = listVariants2(rootDir);
  if (variants.length === 0) {
    console.log(`No variants found in ${rootDir}`);
    return;
  }
  for (const entry of variants) {
    console.log(entry.name);
  }
}

// src/cli/doctor.ts
var printDoctor = (report) => {
  if (report.length === 0) {
    console.log("No variants found.");
    return;
  }
  for (const item of report) {
    console.log(`${item.ok ? "\u2713" : "\u2717"} ${item.name}`);
    if (!item.ok) {
      console.log(`  binary: ${item.binaryPath ?? "missing"}`);
      console.log(`  wrapper: ${item.wrapperPath}`);
    }
  }
};

// src/cli/commands/doctorCmd.ts
function runDoctorCommand({ opts }) {
  const rootDir = opts.root || DEFAULT_ROOT;
  const binDir = opts["bin-dir"] || DEFAULT_BIN_DIR;
  const report = doctor(rootDir, binDir);
  printDoctor(report);
}

// src/cli/commands/remove.ts
function runRemoveCommand({ opts }) {
  const target = opts._ && opts._[0];
  if (!target) {
    console.error("remove requires a variant name");
    process.exit(1);
  }
  const rootDir = opts.root || DEFAULT_ROOT;
  removeVariant(rootDir, target);
  console.log(`Removed ${target}`);
}

// src/cli/commands/tweak.ts
function runTweakCommand({ opts }) {
  const target = opts._ && opts._[0];
  if (!target) {
    console.error("tweak requires a variant name");
    process.exit(1);
  }
  const rootDir = opts.root || DEFAULT_ROOT;
  tweakVariant(rootDir, target);
}

// src/cli/utils/printSummary.ts
function printSummary(opts) {
  const { action, meta, wrapperPath, notes } = opts;
  const getPromptPackDescription = () => {
    if (!meta.promptPack) return "off";
    if (meta.provider === "zai") return "on (zai-cli routing)";
    if (meta.provider === "minimax") return "on (MCP routing)";
    return "on";
  };
  const getTeamModeDescription = () => {
    if (!meta.teamModeEnabled) return "off";
    return "on (orchestrator skill, TodoWrite blocked)";
  };
  console.log("");
  console.log(`\u2713 ${action}: ${meta.name}`);
  console.log(`  Provider: ${meta.provider}`);
  if (meta.promptPack !== void 0) {
    console.log(`  Prompt pack: ${getPromptPackDescription()}`);
  }
  if (meta.skillInstall !== void 0) {
    console.log(`  dev-browser skill: ${meta.skillInstall ? "on" : "off"}`);
  }
  if (meta.teamModeEnabled !== void 0) {
    const teamModeDescription = TEAM_MODE_SUPPORTED ? getTeamModeDescription() : "unsupported (use claude-sneakpeek 1.6.3)";
    console.log(`  Team mode: ${teamModeDescription}`);
  }
  if (meta.shellEnv !== void 0 && meta.provider === "zai") {
    console.log(`  Shell env: ${meta.shellEnv ? "write Z_AI_API_KEY" : "manual"}`);
  }
  if (wrapperPath) console.log(`  Wrapper: ${wrapperPath}`);
  if (meta.configDir) console.log(`  Config: ${meta.configDir}`);
  if (notes && notes.length > 0) {
    console.log("");
    for (const note of notes) console.log(`  \u2022 ${note}`);
  }
  console.log("");
  console.log(`  Run: ${meta.name}`);
  console.log("");
}

// src/cli/prompt.ts
import readline from "node:readline";
var prompt = async (question, defaultValue) => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const suffix = defaultValue ? ` [${defaultValue}]` : "";
  return new Promise((resolve) => {
    rl.question(`${question}${suffix}: `, (answer) => {
      rl.close();
      const trimmed = answer.trim();
      resolve(trimmed.length > 0 ? trimmed : defaultValue ?? "");
    });
  });
};

// src/cli/utils/requirePrompt.ts
async function requirePrompt(label, value) {
  let next = (value ?? "").trim();
  while (!next) {
    next = (await prompt(label, value)).trim();
    if (!next) {
      console.log("Value required.");
    }
  }
  return next;
}

// src/cli/utils/modelOverrides.ts
function getModelOverridesFromArgs(opts) {
  return {
    sonnet: typeof opts["model-sonnet"] === "string" ? opts["model-sonnet"] : void 0,
    opus: typeof opts["model-opus"] === "string" ? opts["model-opus"] : void 0,
    haiku: typeof opts["model-haiku"] === "string" ? opts["model-haiku"] : void 0,
    smallFast: typeof opts["model-small-fast"] === "string" ? opts["model-small-fast"] : void 0,
    defaultModel: typeof opts["model-default"] === "string" ? opts["model-default"] : void 0,
    subagentModel: typeof opts["model-subagent"] === "string" ? opts["model-subagent"] : void 0
  };
}
async function ensureModelMapping(providerKey, opts, overrides) {
  const provider = getProvider(providerKey);
  if (!provider?.requiresModelMapping) return overrides;
  const missing = {
    sonnet: (overrides.sonnet ?? "").trim().length === 0,
    opus: (overrides.opus ?? "").trim().length === 0,
    haiku: (overrides.haiku ?? "").trim().length === 0
  };
  if (opts.yes && (missing.sonnet || missing.opus || missing.haiku)) {
    throw new Error("OpenRouter/Local LLMs require --model-sonnet/--model-opus/--model-haiku");
  }
  if (!opts.yes) {
    if (missing.sonnet) overrides.sonnet = await requirePrompt("Default Sonnet model", overrides.sonnet);
    if (missing.opus) overrides.opus = await requirePrompt("Default Opus model", overrides.opus);
    if (missing.haiku) overrides.haiku = await requirePrompt("Default Haiku model", overrides.haiku);
  }
  return overrides;
}
function formatModelNote(overrides) {
  const entries = [
    ["sonnet", overrides.sonnet],
    ["opus", overrides.opus],
    ["haiku", overrides.haiku]
  ].filter(([, value]) => value && String(value).trim().length > 0);
  if (entries.length === 0) return null;
  const text = entries.map(([key, value]) => `${key}=${value}`).join(", ");
  return `Model mapping: ${text}`;
}

// src/cli/utils/extraEnv.ts
function buildExtraEnv(opts) {
  const env = Array.isArray(opts.env) ? [...opts.env] : [];
  const timeout = opts["timeout-ms"];
  if (typeof timeout === "string" && timeout.trim().length > 0) {
    env.push(`API_TIMEOUT_MS=${timeout}`);
  }
  return env;
}

// src/cli/commands/update.ts
function runUpdateCommand({ opts }) {
  const target = opts._ && opts._[0];
  const rootDir = opts.root || DEFAULT_ROOT;
  const binDir = opts["bin-dir"] || DEFAULT_BIN_DIR;
  const names = target ? [target] : listVariants2(rootDir).map((entry) => entry.name);
  if (names.length === 0) {
    console.log(`No variants found in ${rootDir}`);
    return;
  }
  const promptPack = opts["no-prompt-pack"] ? false : void 0;
  const skillInstall = opts["no-skill-install"] ? false : void 0;
  const skillUpdate = Boolean(opts["skill-update"]);
  const shellEnv = opts["no-shell-env"] ? false : opts["shell-env"] ? true : void 0;
  const enableTeamMode = opts["enable-team-mode"] ? true : void 0;
  const disableTeamMode = opts["disable-team-mode"] ? true : void 0;
  const rawTweakccStdio = opts["tweakcc-stdio"];
  const tweakccStdio = rawTweakccStdio === "inherit" || opts.verbose ? "inherit" : rawTweakccStdio === "pipe" ? "pipe" : "pipe";
  if (!TEAM_MODE_SUPPORTED && (enableTeamMode || disableTeamMode)) {
    console.log("Team mode flags are ignored in this release. Use claude-sneakpeek 1.6.3 for team mode support.");
  }
  for (const name of names) {
    const result = updateVariant(rootDir, name, {
      binDir,
      npmPackage: opts["npm-package"],
      brand: opts.brand,
      noTweak: Boolean(opts.noTweak),
      promptPack,
      skillInstall,
      shellEnv,
      skillUpdate,
      enableTeamMode,
      disableTeamMode,
      tweakccStdio
    });
    const wrapperPath = getWrapperPath(binDir, name);
    printSummary({
      action: "Updated",
      meta: result.meta,
      wrapperPath,
      notes: result.notes
    });
  }
}

// src/cli/commands/create.ts
async function prepareCreateParams(opts, quickMode = false) {
  let providerKey = opts.provider;
  if (!providerKey && !opts.yes && !quickMode) {
    const providers = listProviders().map((p) => p.key).join(", ");
    providerKey = await prompt(`Provider (${providers})`, "mirror");
  }
  providerKey = providerKey || "mirror";
  const provider = getProvider(providerKey);
  if (!provider) {
    throw new Error(`Unknown provider: ${providerKey}`);
  }
  const name = opts.name || providerKey;
  const baseUrl = opts["base-url"] || provider.baseUrl;
  const envZaiKey = providerKey === "zai" ? process.env.Z_AI_API_KEY : void 0;
  const envAnthropicKey = providerKey === "zai" ? process.env.ANTHROPIC_API_KEY : void 0;
  const hasApiKeyFlag = Boolean(opts["api-key"]);
  const hasZaiEnv = Boolean(envZaiKey);
  const apiKeyDetected = !hasApiKeyFlag && hasZaiEnv;
  const apiKey = opts["api-key"] || (providerKey === "zai" ? envZaiKey || envAnthropicKey || "" : "");
  if (apiKeyDetected && !opts.yes) {
    console.log("Detected Z_AI_API_KEY in environment. Using it by default.");
  }
  const brand = opts.brand || "auto";
  const rootDir = opts.root || DEFAULT_ROOT;
  const binDir = opts["bin-dir"] || DEFAULT_BIN_DIR;
  const npmPackage = opts["npm-package"] || DEFAULT_NPM_PACKAGE;
  const extraEnv = buildExtraEnv(opts);
  const requiresCredential = !provider.credentialOptional;
  const shouldPromptApiKey = !provider.credentialOptional && !opts.yes && !hasApiKeyFlag && (providerKey === "zai" ? !hasZaiEnv : !apiKey);
  return {
    provider,
    providerKey,
    name,
    baseUrl,
    apiKey,
    brand,
    rootDir,
    binDir,
    npmPackage,
    extraEnv,
    requiresCredential,
    shouldPromptApiKey,
    hasZaiEnv
  };
}
async function handleQuickMode(opts, params) {
  const { provider } = params;
  const promptPack = opts["no-prompt-pack"] ? false : void 0;
  const skillInstall = opts["no-skill-install"] ? false : void 0;
  const skillUpdate = Boolean(opts["skill-update"]);
  let shellEnv = opts["no-shell-env"] ? false : opts["shell-env"] ? true : void 0;
  const modelOverrides = getModelOverridesFromArgs(opts);
  let apiKey = params.apiKey;
  if (params.shouldPromptApiKey) {
    apiKey = params.requiresCredential ? await requirePrompt(provider.apiKeyLabel || "ANTHROPIC_API_KEY", apiKey) : await prompt(provider.apiKeyLabel || "ANTHROPIC_API_KEY", apiKey);
  }
  if (params.requiresCredential && !apiKey) {
    if (opts.yes) {
      throw new Error("Provider API key required (use --api-key)");
    }
    apiKey = await requirePrompt(provider.apiKeyLabel || "ANTHROPIC_API_KEY", apiKey);
  }
  const resolvedModelOverrides = await ensureModelMapping(params.providerKey, opts, { ...modelOverrides });
  if (params.providerKey === "zai" && shellEnv === void 0 && !opts.yes) {
    if (params.hasZaiEnv) {
      shellEnv = false;
    } else {
      const answer = await prompt("Write Z_AI_API_KEY to your shell profile? (yes/no)", "yes");
      shellEnv = answer.trim().toLowerCase().startsWith("y");
    }
  }
  const enableTeamMode = TEAM_MODE_SUPPORTED ? opts["disable-team-mode"] ? false : true : false;
  const result = createVariant({
    name: params.name,
    providerKey: params.providerKey,
    baseUrl: params.baseUrl,
    apiKey,
    brand: params.brand,
    extraEnv: params.extraEnv,
    rootDir: params.rootDir,
    binDir: params.binDir,
    npmPackage: params.npmPackage,
    noTweak: Boolean(opts.noTweak),
    promptPack,
    skillInstall,
    shellEnv,
    skillUpdate,
    modelOverrides: resolvedModelOverrides,
    enableTeamMode,
    tweakccStdio: "pipe"
  });
  const modelNote = formatModelNote(resolvedModelOverrides);
  const notes = [...result.notes || [], ...modelNote ? [modelNote] : []];
  printSummary({
    action: "Created",
    meta: result.meta,
    wrapperPath: result.wrapperPath,
    notes: notes.length > 0 ? notes : void 0
  });
}
async function handleInteractiveMode(opts, params) {
  const { provider } = params;
  const promptPack = opts["no-prompt-pack"] ? false : void 0;
  const skillInstall = opts["no-skill-install"] ? false : void 0;
  const skillUpdate = Boolean(opts["skill-update"]);
  let shellEnv = opts["no-shell-env"] ? false : opts["shell-env"] ? true : void 0;
  const modelOverrides = getModelOverridesFromArgs(opts);
  const nextName = await prompt("Variant name", params.name);
  const nextBase = await prompt("ANTHROPIC_BASE_URL", params.baseUrl);
  let nextKey = params.shouldPromptApiKey ? params.requiresCredential ? await requirePrompt(provider.apiKeyLabel || "ANTHROPIC_API_KEY", params.apiKey) : await prompt(provider.apiKeyLabel || "ANTHROPIC_API_KEY", params.apiKey) : params.apiKey;
  if (params.requiresCredential && !nextKey) {
    nextKey = await requirePrompt(provider.apiKeyLabel || "ANTHROPIC_API_KEY", params.apiKey);
  }
  const resolvedModelOverrides = await ensureModelMapping(params.providerKey, opts, { ...modelOverrides });
  const brandOptions = listBrandPresets().map((item) => item.key).join(", ");
  const brandHint = brandOptions.length > 0 ? `auto, none, ${brandOptions}` : "auto, none";
  const nextBrand = await prompt(`Brand preset (${brandHint})`, params.brand);
  const nextRoot = await prompt("Variants root directory", params.rootDir);
  const nextBin = await prompt("Wrapper install directory", params.binDir);
  const nextNpmPackage = await prompt("NPM package", params.npmPackage);
  const envInput = await prompt("Extra env (KEY=VALUE, comma separated)", params.extraEnv.join(","));
  const parsedEnv = envInput.split(",").map((entry) => entry.trim()).filter(Boolean);
  if (params.providerKey === "zai" && shellEnv === void 0) {
    if (params.hasZaiEnv) {
      shellEnv = false;
    } else {
      const answer = await prompt("Write Z_AI_API_KEY to your shell profile? (yes/no)", "yes");
      shellEnv = answer.trim().toLowerCase().startsWith("y");
    }
  }
  let enableTeamMode = false;
  if (TEAM_MODE_SUPPORTED) {
    enableTeamMode = true;
    if (opts["disable-team-mode"]) {
      enableTeamMode = false;
    } else if (!opts["enable-team-mode"]) {
      const answer = await prompt("Enable team mode (multi-agent collaboration)? (yes/no)", "yes");
      enableTeamMode = answer.trim().toLowerCase().startsWith("y");
    }
  }
  const result = createVariant({
    name: nextName,
    providerKey: params.providerKey,
    baseUrl: nextBase,
    apiKey: nextKey,
    brand: nextBrand,
    extraEnv: parsedEnv,
    rootDir: nextRoot,
    binDir: nextBin,
    npmPackage: nextNpmPackage,
    noTweak: Boolean(opts.noTweak),
    promptPack,
    skillInstall,
    shellEnv,
    skillUpdate,
    modelOverrides: resolvedModelOverrides,
    enableTeamMode,
    tweakccStdio: "pipe"
  });
  const modelNote = formatModelNote(resolvedModelOverrides);
  const notes = [...result.notes || [], ...modelNote ? [modelNote] : []];
  printSummary({
    action: "Created",
    meta: result.meta,
    wrapperPath: result.wrapperPath,
    notes: notes.length > 0 ? notes : void 0
  });
}
async function handleNonInteractiveMode(opts, params) {
  const promptPack = opts["no-prompt-pack"] ? false : void 0;
  const skillInstall = opts["no-skill-install"] ? false : void 0;
  const skillUpdate = Boolean(opts["skill-update"]);
  const shellEnv = opts["no-shell-env"] ? false : opts["shell-env"] ? true : void 0;
  const modelOverrides = getModelOverridesFromArgs(opts);
  if (params.requiresCredential && !params.apiKey) {
    throw new Error("Provider API key required (use --api-key)");
  }
  const resolvedModelOverrides = await ensureModelMapping(params.providerKey, opts, { ...modelOverrides });
  const enableTeamMode = TEAM_MODE_SUPPORTED ? opts["disable-team-mode"] ? false : true : false;
  const result = createVariant({
    name: params.name,
    providerKey: params.providerKey,
    baseUrl: params.baseUrl,
    apiKey: params.apiKey,
    brand: params.brand,
    extraEnv: params.extraEnv,
    rootDir: params.rootDir,
    binDir: params.binDir,
    npmPackage: params.npmPackage,
    noTweak: Boolean(opts.noTweak),
    promptPack,
    skillInstall,
    shellEnv,
    skillUpdate,
    modelOverrides: resolvedModelOverrides,
    enableTeamMode,
    tweakccStdio: "pipe"
  });
  const modelNote = formatModelNote(resolvedModelOverrides);
  const notes = [...result.notes || [], ...modelNote ? [modelNote] : []];
  printSummary({
    action: "Created",
    meta: result.meta,
    wrapperPath: result.wrapperPath,
    notes: notes.length > 0 ? notes : void 0
  });
}
async function runCreateCommand({ opts, quickMode }) {
  const params = await prepareCreateParams(opts, quickMode);
  if (!TEAM_MODE_SUPPORTED && (opts["enable-team-mode"] || opts["disable-team-mode"])) {
    console.log("Team mode flags are ignored in this release. Use claude-sneakpeek 1.6.3 for team mode support.");
  }
  if (quickMode) {
    await handleQuickMode(opts, params);
  } else if (opts.yes) {
    await handleNonInteractiveMode(opts, params);
  } else {
    await handleInteractiveMode(opts, params);
  }
}

// src/core/tasks/store.ts
import fs18 from "node:fs";
import path26 from "node:path";
function getTasksDir(rootDir, variant, team) {
  return path26.join(rootDir, variant, "config", "tasks", team);
}
function listTaskIds(tasksDir) {
  if (!fs18.existsSync(tasksDir)) return [];
  return fs18.readdirSync(tasksDir).filter((f) => f.endsWith(".json")).map((f) => f.replace(".json", "")).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}
function loadTask(tasksDir, id) {
  const taskPath = path26.join(tasksDir, `${id}.json`);
  if (!fs18.existsSync(taskPath)) return null;
  return readJson(taskPath);
}
function loadAllTasks(tasksDir) {
  const ids = listTaskIds(tasksDir);
  return ids.map((id) => loadTask(tasksDir, id)).filter((task) => task !== null);
}
function saveTask(tasksDir, task) {
  fs18.mkdirSync(tasksDir, { recursive: true });
  const taskPath = path26.join(tasksDir, `${task.id}.json`);
  writeJson(taskPath, task);
}
function deleteTask(tasksDir, id) {
  const taskPath = path26.join(tasksDir, `${id}.json`);
  if (!fs18.existsSync(taskPath)) return false;
  fs18.unlinkSync(taskPath);
  return true;
}
function getNextTaskId(tasksDir) {
  const ids = listTaskIds(tasksDir);
  if (ids.length === 0) return "1";
  const maxId = Math.max(...ids.map((id) => parseInt(id, 10)));
  return String(maxId + 1);
}
function createTask(tasksDir, subject, description, opts) {
  const id = getNextTaskId(tasksDir);
  const task = {
    id,
    subject,
    description,
    status: "open",
    owner: opts?.owner,
    references: [],
    blocks: opts?.blocks || [],
    blockedBy: opts?.blockedBy || [],
    comments: []
  };
  saveTask(tasksDir, task);
  return task;
}
function listTeams(rootDir, variant) {
  const tasksRoot = path26.join(rootDir, variant, "config", "tasks");
  if (!fs18.existsSync(tasksRoot)) return [];
  return fs18.readdirSync(tasksRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

// src/core/tasks/resolve.ts
import fs19 from "node:fs";
import path27 from "node:path";
import os6 from "node:os";
import { spawnSync as spawnSync5 } from "node:child_process";
var DEFAULT_VARIANT = "_default";
var DEFAULT_CLAUDE_CONFIG_DIR = path27.join(os6.homedir(), ".claude");
function detectVariantFromEnv() {
  const configDir = process.env.CLAUDE_CONFIG_DIR;
  if (!configDir) return null;
  const normalized = configDir.replace(/\\/g, "/");
  const match = normalized.match(/\.claude-sneakpeek\/([^/]+)\/config/);
  return match ? match[1] : null;
}
function detectCurrentTeam(cwd) {
  const teamFromEnv = process.env.CLAUDE_CODE_TEAM_NAME;
  if (teamFromEnv) {
    return teamFromEnv;
  }
  const workDir = cwd || process.cwd();
  let gitRoot;
  try {
    const result = spawnSync5("git", ["rev-parse", "--show-toplevel"], {
      cwd: workDir,
      encoding: "utf8"
    });
    if (result.status === 0 && result.stdout.trim()) {
      gitRoot = result.stdout.trim();
    } else {
      gitRoot = workDir;
    }
  } catch {
    gitRoot = workDir;
  }
  const folderName = path27.basename(gitRoot);
  const teamModifier = process.env.TEAM;
  if (teamModifier) {
    return `${folderName}-${teamModifier}`;
  }
  return folderName;
}
function listVariantsWithTasks(rootDir) {
  const variants = listVariants(rootDir);
  return variants.map((v) => v.name).filter((name) => {
    const tasksRoot = path27.join(rootDir, name, "config", "tasks");
    return fs19.existsSync(tasksRoot);
  });
}
function resolveTasksDir(rootDir, variant, team) {
  if (variant === DEFAULT_VARIANT) {
    return path27.join(DEFAULT_CLAUDE_CONFIG_DIR, "tasks", team);
  }
  return getTasksDir(rootDir, variant, team);
}
function resolveTeams(rootDir, variant) {
  if (variant === DEFAULT_VARIANT) {
    const tasksRoot = path27.join(DEFAULT_CLAUDE_CONFIG_DIR, "tasks");
    if (!fs19.existsSync(tasksRoot)) return [];
    return fs19.readdirSync(tasksRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  }
  return listTeams(rootDir, variant);
}
function resolveContext(opts) {
  const { rootDir, variant, team, allVariants, allTeams, cwd } = opts;
  const locations = [];
  let variants;
  if (allVariants) {
    variants = listVariantsWithTasks(rootDir);
    const defaultTeams = resolveTeams(rootDir, DEFAULT_VARIANT);
    if (defaultTeams.length > 0 && !variants.includes(DEFAULT_VARIANT)) {
      variants.push(DEFAULT_VARIANT);
    }
  } else if (variant) {
    variants = [variant];
  } else {
    const envVariant = detectVariantFromEnv();
    variants = [envVariant || DEFAULT_VARIANT];
  }
  for (const v of variants) {
    let teams;
    if (allTeams) {
      teams = resolveTeams(rootDir, v);
    } else if (team) {
      teams = [team];
    } else {
      const detectedTeam = detectCurrentTeam(cwd);
      teams = [detectedTeam];
    }
    for (const t of teams) {
      const tasksDir = resolveTasksDir(rootDir, v, t);
      if (fs19.existsSync(tasksDir)) {
        locations.push({ variant: v, team: t, tasksDir });
      }
    }
  }
  return { locations };
}

// src/core/tasks/queries.ts
function isBlocked(task, allTasks) {
  if (task.blockedBy.length === 0) return false;
  const taskMap = new Map(allTasks.map((t) => [t.id, t]));
  return task.blockedBy.some((id) => {
    const blockingTask = taskMap.get(id);
    return blockingTask && blockingTask.status === "open";
  });
}
function isBlocking(task) {
  return task.blocks.length > 0;
}
function filterTasks(tasks, filter, allTasks) {
  let filtered = [...tasks];
  const taskContext = allTasks || tasks;
  if (filter.status && filter.status !== "all") {
    filtered = filtered.filter((t) => t.status === filter.status);
  }
  if (filter.blocked !== void 0) {
    if (filter.blocked) {
      filtered = filtered.filter((t) => isBlocked(t, taskContext));
    } else {
      filtered = filtered.filter((t) => !isBlocked(t, taskContext));
    }
  }
  if (filter.blocking !== void 0) {
    if (filter.blocking) {
      filtered = filtered.filter((t) => isBlocking(t));
    } else {
      filtered = filtered.filter((t) => !isBlocking(t));
    }
  }
  if (filter.ready !== void 0) {
    if (filter.ready) {
      filtered = filtered.filter((t) => t.status === "open" && !isBlocked(t, taskContext));
    } else {
      filtered = filtered.filter((t) => t.status === "resolved" || isBlocked(t, taskContext));
    }
  }
  if (filter.owner) {
    filtered = filtered.filter((t) => t.owner === filter.owner);
  }
  if (filter.limit && filter.limit > 0) {
    filtered = filtered.slice(0, filter.limit);
  }
  return filtered;
}
function getTaskSummary(tasks) {
  const open = tasks.filter((t) => t.status === "open");
  const resolved = tasks.filter((t) => t.status === "resolved");
  const blocked = open.filter((t) => isBlocked(t, tasks));
  const ready = open.filter((t) => !isBlocked(t, tasks));
  return {
    total: tasks.length,
    open: open.length,
    resolved: resolved.length,
    ready: ready.length,
    blocked: blocked.length
  };
}
function getOpenBlockers(task, allTasks) {
  if (task.blockedBy.length === 0) return [];
  const taskMap = new Map(allTasks.map((t) => [t.id, t]));
  return task.blockedBy.filter((id) => {
    const blockingTask = taskMap.get(id);
    return blockingTask && blockingTask.status === "open";
  });
}
function sortTasksById(tasks) {
  return [...tasks].sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
}

// src/cli/commands/tasks/output.ts
function enrichTask(task, allTasks) {
  const taskMap = new Map(allTasks.map((t) => [t.id, t]));
  const blockedByWithStatus = task.blockedBy.map((id) => {
    const blockingTask = taskMap.get(id);
    return {
      id,
      status: blockingTask ? blockingTask.status : "unknown"
    };
  });
  return {
    id: task.id,
    subject: task.subject,
    description: task.description,
    status: task.status,
    owner: task.owner,
    blocked: isBlocked(task, allTasks),
    blockedBy: blockedByWithStatus,
    openBlockers: getOpenBlockers(task, allTasks),
    blocks: task.blocks,
    references: task.references,
    comments: task.comments
  };
}
function truncate(text, maxLen) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 3) + "...";
}
function pad(text, width) {
  return text.padEnd(width);
}
function formatTaskTable(tasks, location, summary) {
  const lines = [];
  const { variant, team } = location;
  lines.push(`TASKS (${variant} / ${team}) - ${summary.open} open, ${summary.resolved} resolved`);
  lines.push("\u2500".repeat(70));
  lines.push(`${pad("ID", 5)} ${pad("STATUS", 10)} ${pad("SUBJECT", 45)} BLOCKED`);
  lines.push("\u2500".repeat(70));
  for (const task of tasks) {
    const blocked = isBlocked(task, tasks) ? "\u25CF" : "";
    const status = task.status;
    const subject = truncate(task.subject, 45);
    lines.push(`${pad(task.id, 5)} ${pad(status, 10)} ${pad(subject, 45)} ${blocked}`);
  }
  lines.push("\u2500".repeat(70));
  if (summary.blocked > 0) {
    lines.push("\u25CF = blocked by unresolved tasks");
  }
  return lines.join("\n");
}
function formatMultiLocationTaskTable(tasksByLocation) {
  const sections = [];
  for (const { location, tasks, summary } of tasksByLocation) {
    sections.push(formatTaskTable(tasks, location, summary));
    sections.push("");
  }
  return sections.join("\n");
}
function formatTaskDetail(task, location, allTasks) {
  const lines = [];
  const { variant, team } = location;
  lines.push(`TASK #${task.id} (${variant} / ${team})`);
  lines.push("\u2550".repeat(60));
  lines.push("");
  lines.push(`Subject:     ${task.subject}`);
  lines.push(`Status:      ${task.status}`);
  lines.push(`Owner:       ${task.owner || "(unassigned)"}`);
  lines.push("");
  if (task.description) {
    lines.push("Description:");
    const descLines = task.description.split("\n");
    for (const line of descLines.slice(0, 10)) {
      lines.push(`  ${line}`);
    }
    if (descLines.length > 10) {
      lines.push(`  ... (${descLines.length - 10} more lines)`);
    }
    lines.push("");
  }
  if (task.blockedBy.length > 0 || task.blocks.length > 0) {
    lines.push("Dependencies:");
    if (task.blockedBy.length > 0) {
      const blockedByStatus = task.blockedBy.map((id) => {
        const t = allTasks.find((t2) => t2.id === id);
        return t ? `#${id} (${t.status})` : `#${id} (?)`;
      });
      lines.push(`  Blocked by: ${blockedByStatus.join(", ")}`);
    }
    if (task.blocks.length > 0) {
      lines.push(`  Blocks:     ${task.blocks.map((id) => `#${id}`).join(", ")}`);
    }
    lines.push("");
  }
  if (task.references.length > 0) {
    lines.push(`References:  ${task.references.map((id) => `#${id}`).join(", ")}`);
    lines.push("");
  }
  if (task.comments.length > 0) {
    lines.push(`Comments (${task.comments.length}):`);
    for (const comment of task.comments) {
      lines.push(`  \u250C\u2500 ${comment.author} ${"\u2500".repeat(Math.max(0, 50 - comment.author.length))}`);
      const commentLines = comment.content.split("\n");
      for (const line of commentLines) {
        lines.push(`  \u2502 ${line}`);
      }
      lines.push("  \u2514" + "\u2500".repeat(55));
    }
  }
  return lines.join("\n");
}
function formatTasksJson(tasks, location, summary, allTasks) {
  const enrichedTasks = tasks.map((t) => enrichTask(t, allTasks));
  return JSON.stringify(
    {
      variant: location.variant,
      team: location.team,
      tasks: enrichedTasks,
      summary
    },
    null,
    2
  );
}
function formatTaskJson(task, location, allTasks) {
  const enrichedTask = enrichTask(task, allTasks);
  return JSON.stringify(
    {
      variant: location.variant,
      team: location.team,
      task: enrichedTask
    },
    null,
    2
  );
}
function formatMultiLocationJson(tasksByLocation) {
  return JSON.stringify(
    {
      locations: tasksByLocation.map(({ location, tasks, allTasks, summary }) => ({
        variant: location.variant,
        team: location.team,
        tasks: tasks.map((t) => enrichTask(t, allTasks)),
        summary
      }))
    },
    null,
    2
  );
}
function formatCleanResults(results) {
  const lines = [];
  for (const { location, deleted, dryRun } of results) {
    const action = dryRun ? "Would delete" : "Deleted";
    lines.push(`${location.variant} / ${location.team}: ${action} ${deleted.length} tasks`);
    if (deleted.length > 0 && deleted.length <= 10) {
      lines.push(`  IDs: ${deleted.join(", ")}`);
    }
  }
  return lines.join("\n");
}

// src/cli/commands/tasks/list.ts
function runTasksList(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team,
    allVariants: opts.allVariants,
    allTeams: opts.allTeams
  });
  if (context.locations.length === 0) {
    console.log("No task locations found. Check variant and team settings.");
    return;
  }
  const tasksByLocation = context.locations.map((location) => {
    const allTasks = loadAllTasks(location.tasksDir);
    const filteredTasks = filterTasks(
      allTasks,
      {
        status: opts.status || "open",
        blocked: opts.blocked,
        blocking: opts.blocking,
        ready: opts.ready,
        owner: opts.owner,
        limit: opts.limit
      },
      allTasks
    );
    const sortedTasks = sortTasksById(filteredTasks);
    const summary = getTaskSummary(allTasks);
    return { location, tasks: sortedTasks, allTasks, summary };
  });
  if (opts.json) {
    if (tasksByLocation.length === 1) {
      const { location, tasks, allTasks, summary } = tasksByLocation[0];
      console.log(formatTasksJson(tasks, location, summary, allTasks));
    } else {
      console.log(formatMultiLocationJson(tasksByLocation));
    }
  } else {
    if (tasksByLocation.length === 1) {
      const { location, tasks, summary } = tasksByLocation[0];
      console.log(formatTaskTable(tasks, location, summary));
    } else {
      console.log(formatMultiLocationTaskTable(tasksByLocation));
    }
  }
}

// src/cli/commands/tasks/show.ts
function runTasksShow(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team
  });
  if (context.locations.length === 0) {
    console.error("No task locations found. Check variant and team settings.");
    process.exitCode = 1;
    return;
  }
  for (const location of context.locations) {
    const task = loadTask(location.tasksDir, opts.taskId);
    if (task) {
      const allTasks = loadAllTasks(location.tasksDir);
      if (opts.json) {
        console.log(formatTaskJson(task, location, allTasks));
      } else {
        console.log(formatTaskDetail(task, location, allTasks));
      }
      return;
    }
  }
  console.error(`Task #${opts.taskId} not found.`);
  process.exitCode = 1;
}

// src/cli/commands/tasks/create.ts
function runTasksCreate(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team
  });
  let location = context.locations[0];
  if (!location) {
    const team = opts.team || detectCurrentTeam();
    const variant = opts.variant || detectVariantFromEnv() || DEFAULT_VARIANT;
    const tasksDir = resolveTasksDir(opts.rootDir, variant, team);
    location = { variant, team, tasksDir };
  }
  const task = createTask(location.tasksDir, opts.subject, opts.description || "", {
    owner: opts.owner,
    blocks: opts.blocks,
    blockedBy: opts.blockedBy
  });
  if (opts.json) {
    const allTasks = loadAllTasks(location.tasksDir);
    console.log(formatTaskJson(task, location, allTasks));
  } else {
    console.log(`Created task #${task.id}: ${task.subject}`);
    console.log(`Location: ${location.variant} / ${location.team}`);
  }
}

// src/cli/commands/tasks/update.ts
function runTasksUpdate(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team
  });
  if (context.locations.length === 0) {
    console.error("No task locations found. Check variant and team settings.");
    process.exitCode = 1;
    return;
  }
  for (const location of context.locations) {
    const task = loadTask(location.tasksDir, opts.taskId);
    if (!task) continue;
    if (opts.subject) task.subject = opts.subject;
    if (opts.description) task.description = opts.description;
    if (opts.status) task.status = opts.status;
    if (opts.owner !== void 0) task.owner = opts.owner || void 0;
    if (opts.addBlocks) {
      for (const id of opts.addBlocks) {
        if (!task.blocks.includes(id)) task.blocks.push(id);
      }
    }
    if (opts.removeBlocks) {
      task.blocks = task.blocks.filter((id) => !opts.removeBlocks.includes(id));
    }
    if (opts.addBlockedBy) {
      for (const id of opts.addBlockedBy) {
        if (!task.blockedBy.includes(id)) task.blockedBy.push(id);
      }
    }
    if (opts.removeBlockedBy) {
      task.blockedBy = task.blockedBy.filter((id) => !opts.removeBlockedBy.includes(id));
    }
    if (opts.addComment) {
      task.comments.push({
        author: opts.commentAuthor || "cli",
        content: opts.addComment
      });
    }
    saveTask(location.tasksDir, task);
    if (opts.json) {
      const allTasks = loadAllTasks(location.tasksDir);
      console.log(formatTaskJson(task, location, allTasks));
    } else {
      console.log(`Updated task #${task.id}: ${task.subject}`);
    }
    return;
  }
  console.error(`Task #${opts.taskId} not found.`);
  process.exitCode = 1;
}

// src/cli/commands/tasks/delete.ts
import * as readline2 from "node:readline";
async function confirm(prompt2) {
  const rl = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(prompt2, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}
async function runTasksDelete(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team
  });
  if (context.locations.length === 0) {
    console.error("No task locations found. Check variant and team settings.");
    process.exitCode = 1;
    return;
  }
  for (const location of context.locations) {
    const task = loadTask(location.tasksDir, opts.taskId);
    if (!task) continue;
    if (!opts.force) {
      const confirmed = await confirm(`Delete task #${task.id} "${task.subject}"? [y/N] `);
      if (!confirmed) {
        console.log("Cancelled.");
        return;
      }
    }
    const deleted = deleteTask(location.tasksDir, opts.taskId);
    if (deleted) {
      if (opts.json) {
        console.log(JSON.stringify({ deleted: true, taskId: opts.taskId }));
      } else {
        console.log(`Deleted task #${opts.taskId}`);
      }
    } else {
      console.error(`Failed to delete task #${opts.taskId}`);
      process.exitCode = 1;
    }
    return;
  }
  console.error(`Task #${opts.taskId} not found.`);
  process.exitCode = 1;
}

// src/cli/commands/tasks/clean.ts
import fs20 from "node:fs";
import path28 from "node:path";
import * as readline3 from "node:readline";
async function confirm2(prompt2) {
  const rl = readline3.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(prompt2, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}
function getTaskAge(tasksDir, taskId) {
  const taskPath = path28.join(tasksDir, `${taskId}.json`);
  try {
    const stats = fs20.statSync(taskPath);
    const now = Date.now();
    const mtime = stats.mtime.getTime();
    return Math.floor((now - mtime) / (1e3 * 60 * 60 * 24));
  } catch {
    return null;
  }
}
function filterTasksForClean(tasks, tasksDir, opts) {
  let candidates = [...tasks];
  if (opts.resolved) {
    candidates = candidates.filter((t) => t.status === "resolved");
  }
  if (opts.olderThan !== void 0) {
    candidates = candidates.filter((t) => {
      const age = getTaskAge(tasksDir, t.id);
      return age !== null && age >= opts.olderThan;
    });
  }
  return candidates;
}
async function runTasksClean(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team,
    allVariants: opts.allVariants,
    allTeams: opts.allTeams
  });
  if (context.locations.length === 0) {
    console.log("No task locations found. Check variant and team settings.");
    return;
  }
  if (!opts.resolved && opts.olderThan === void 0) {
    console.error("Error: Specify at least one filter (--resolved or --older-than).");
    process.exitCode = 1;
    return;
  }
  const results = [];
  let totalToDelete = 0;
  for (const location of context.locations) {
    const tasks = loadAllTasks(location.tasksDir);
    const toDelete = filterTasksForClean(tasks, location.tasksDir, opts);
    totalToDelete += toDelete.length;
    results.push({
      location,
      deleted: toDelete.map((t) => t.id),
      dryRun: opts.dryRun || false
    });
  }
  if (totalToDelete === 0) {
    console.log("No tasks match the cleanup criteria.");
    return;
  }
  console.log(formatCleanResults(results));
  if (opts.dryRun) {
    console.log(`
Dry run: ${totalToDelete} tasks would be deleted.`);
    return;
  }
  if (!opts.force) {
    const confirmed = await confirm2(`
Delete ${totalToDelete} tasks? [y/N] `);
    if (!confirmed) {
      console.log("Cancelled.");
      return;
    }
  }
  let deletedCount = 0;
  for (const result of results) {
    for (const taskId of result.deleted) {
      if (deleteTask(result.location.tasksDir, taskId)) {
        deletedCount++;
      }
    }
  }
  if (opts.json) {
    console.log(
      JSON.stringify({
        deleted: deletedCount,
        locations: results.map((r) => ({
          variant: r.location.variant,
          team: r.location.team,
          taskIds: r.deleted
        }))
      })
    );
  } else {
    console.log(`
Deleted ${deletedCount} tasks.`);
  }
}

// src/cli/commands/tasks/graph.ts
function buildDependencyLine(task, allTasks, depth, visited) {
  const lines = [];
  const indent = "  ".repeat(depth);
  const prefix = depth === 0 ? "" : "\u2514\u2500 ";
  if (visited.has(task.id)) {
    lines.push(`${indent}${prefix}#${task.id} (circular ref)`);
    return lines;
  }
  visited.add(task.id);
  const statusIcon = task.status === "resolved" ? "\u2713" : isBlocked(task, allTasks) ? "\u25CF" : "\u25CB";
  lines.push(`${indent}${prefix}[${statusIcon}] #${task.id}: ${task.subject.slice(0, 50)}`);
  const blockedTasks = allTasks.filter((t) => t.blockedBy.includes(task.id));
  for (const blocked of blockedTasks) {
    lines.push(...buildDependencyLine(blocked, allTasks, depth + 1, new Set(visited)));
  }
  return lines;
}
function formatTaskGraph(tasks, variant, team) {
  const lines = [];
  lines.push(`TASK DEPENDENCY GRAPH (${variant} / ${team})`);
  lines.push("\u2550".repeat(60));
  lines.push("");
  lines.push("Legend: [\u2713] resolved  [\u25CB] open  [\u25CF] blocked");
  lines.push("");
  const roots = tasks.filter((t) => t.blockedBy.length === 0);
  const visited = /* @__PURE__ */ new Set();
  for (const root of roots) {
    if (!visited.has(root.id)) {
      const treeLines = buildDependencyLine(root, tasks, 0, /* @__PURE__ */ new Set());
      lines.push(...treeLines);
      lines.push("");
      for (const line of treeLines) {
        const match = line.match(/#(\d+)/);
        if (match) visited.add(match[1]);
      }
    }
  }
  const orphans = tasks.filter((t) => !visited.has(t.id) && t.blockedBy.length > 0);
  if (orphans.length > 0) {
    lines.push("\u2500".repeat(40));
    lines.push("Orphan tasks (blockedBy non-existent tasks):");
    for (const task of orphans) {
      const statusIcon = task.status === "resolved" ? "\u2713" : "\u25CB";
      lines.push(`  [${statusIcon}] #${task.id}: ${task.subject.slice(0, 50)}`);
      lines.push(`      blockedBy: ${task.blockedBy.join(", ")}`);
    }
  }
  lines.push("");
  lines.push("\u2500".repeat(60));
  const open = tasks.filter((t) => t.status === "open");
  const blocked = open.filter((t) => isBlocked(t, tasks));
  const ready = open.filter((t) => !isBlocked(t, tasks));
  lines.push(`Total: ${tasks.length} | Open: ${open.length} | Ready: ${ready.length} | Blocked: ${blocked.length}`);
  return lines.join("\n");
}
function formatTaskGraphJson(tasks, variant, team) {
  const taskMap = new Map(tasks.map((t) => [t.id, t]));
  const nodes = tasks.map((task) => ({
    id: task.id,
    subject: task.subject,
    status: task.status,
    blocked: isBlocked(task, tasks),
    blockedBy: task.blockedBy.map((id) => ({
      id,
      status: taskMap.get(id)?.status ?? "unknown"
    })),
    openBlockers: getOpenBlockers(task, tasks),
    blocks: task.blocks,
    depth: calculateDepth(task, tasks, /* @__PURE__ */ new Set())
  }));
  const roots = tasks.filter((t) => t.blockedBy.length === 0).map((t) => t.id);
  const leaves = tasks.filter((t) => t.blocks.length === 0).map((t) => t.id);
  const orphans = tasks.filter((t) => t.blockedBy.length > 0 && t.blockedBy.some((id) => !taskMap.has(id))).map((t) => t.id);
  const summary = getTaskSummary(tasks);
  return JSON.stringify(
    {
      variant,
      team,
      nodes,
      roots,
      leaves,
      orphans,
      summary
    },
    null,
    2
  );
}
function calculateDepth(task, allTasks, visited) {
  if (task.blockedBy.length === 0) return 0;
  if (visited.has(task.id)) return 0;
  visited.add(task.id);
  const taskMap = new Map(allTasks.map((t) => [t.id, t]));
  let maxDepth = 0;
  for (const blockerId of task.blockedBy) {
    const blocker = taskMap.get(blockerId);
    if (blocker) {
      const depth = calculateDepth(blocker, allTasks, new Set(visited));
      maxDepth = Math.max(maxDepth, depth + 1);
    }
  }
  return maxDepth;
}
function runTasksGraph(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team
  });
  if (context.locations.length === 0) {
    console.log("No task locations found. Check variant and team settings.");
    return;
  }
  const location = context.locations[0];
  const tasks = loadAllTasks(location.tasksDir);
  if (tasks.length === 0) {
    if (opts.json) {
      console.log(
        JSON.stringify(
          {
            variant: location.variant,
            team: location.team,
            nodes: [],
            summary: { total: 0, open: 0, resolved: 0, ready: 0, blocked: 0 }
          },
          null,
          2
        )
      );
    } else {
      console.log(`No tasks found in ${location.variant} / ${location.team}`);
    }
    return;
  }
  if (opts.json) {
    console.log(formatTaskGraphJson(tasks, location.variant, location.team));
  } else {
    console.log(formatTaskGraph(tasks, location.variant, location.team));
  }
}

// src/cli/commands/tasks/archive.ts
import fs21 from "node:fs";
import path29 from "node:path";
function getArchiveDir(tasksDir) {
  return path29.join(path29.dirname(tasksDir), "archive", path29.basename(tasksDir));
}
function archiveTask(tasksDir, task) {
  const archiveDir = getArchiveDir(tasksDir);
  fs21.mkdirSync(archiveDir, { recursive: true });
  const archivedTask = {
    ...task,
    archivedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  const archivePath = path29.join(archiveDir, `${task.id}.json`);
  writeJson(archivePath, archivedTask);
  return deleteTask(tasksDir, task.id);
}
async function runTasksArchive(opts) {
  const context = resolveContext({
    rootDir: opts.rootDir,
    variant: opts.variant,
    team: opts.team
  });
  if (context.locations.length === 0) {
    console.error("No task locations found. Check variant and team settings.");
    process.exitCode = 1;
    return;
  }
  const location = context.locations[0];
  if (opts.taskId) {
    const task = loadTask(location.tasksDir, opts.taskId);
    if (!task) {
      console.error(`Task #${opts.taskId} not found.`);
      process.exitCode = 1;
      return;
    }
    if (opts.dryRun) {
      console.log(`Would archive task #${task.id}: ${task.subject}`);
      return;
    }
    if (archiveTask(location.tasksDir, task)) {
      if (opts.json) {
        console.log(JSON.stringify({ archived: [task.id] }));
      } else {
        console.log(`Archived task #${task.id}: ${task.subject}`);
      }
    }
    return;
  }
  if (opts.resolved) {
    const tasks = loadAllTasks(location.tasksDir);
    const resolvedTasks = tasks.filter((t) => t.status === "resolved");
    if (resolvedTasks.length === 0) {
      console.log("No resolved tasks to archive.");
      return;
    }
    if (opts.dryRun) {
      console.log(`Would archive ${resolvedTasks.length} resolved tasks:`);
      for (const task of resolvedTasks.slice(0, 10)) {
        console.log(`  #${task.id}: ${task.subject.slice(0, 50)}`);
      }
      if (resolvedTasks.length > 10) {
        console.log(`  ... and ${resolvedTasks.length - 10} more`);
      }
      return;
    }
    const archived = [];
    for (const task of resolvedTasks) {
      if (archiveTask(location.tasksDir, task)) {
        archived.push(task.id);
      }
    }
    if (opts.json) {
      console.log(JSON.stringify({ archived }));
    } else {
      console.log(`Archived ${archived.length} tasks to:`);
      console.log(`  ${getArchiveDir(location.tasksDir)}`);
    }
    return;
  }
  console.error("Specify --resolved to archive all resolved tasks, or provide a task ID.");
  process.exitCode = 1;
}

// src/cli/commands/tasks.ts
function parseIds(value) {
  if (!value) return void 0;
  return value.split(",").map((s) => s.trim());
}
function showTasksHelp() {
  console.log(`
npx claude-sneakpeek tasks - Manage legacy team tasks (claude-sneakpeek 1.6.3 only)

USAGE:
  npx claude-sneakpeek tasks [operation] [id] [options]

OPERATIONS:
  list              List tasks (default if no operation specified)
  show <id>         Show detailed task info
  create            Create a new task
  update <id>       Update an existing task
  delete <id>       Delete a task (permanent)
  archive [id]      Move task(s) to archive (preserves history)
  clean             Bulk delete tasks (permanent)
  graph             Show task dependency graph

GLOBAL OPTIONS:
  --variant <name>  Target variant (auto-detects if omitted)
  --all-variants    Show tasks across all variants
  --team <name>     Target team name
  --all             Show all teams in variant(s)
  --json            Output as JSON
  --help            Show this help

LIST OPTIONS:
  --status <s>      Filter: open, resolved, all (default: open)
  --blocked         Show only blocked tasks
  --blocking        Show only tasks blocking others
  --ready           Show only ready tasks (open + not blocked)
  --owner <id>      Filter by owner
  --limit <n>       Limit results (default: 50)

CREATE OPTIONS:
  --subject <text>  Task subject (required)
  --description <t> Task description
  --owner <id>      Assign owner
  --blocks <ids>    Comma-separated task IDs this task blocks
  --blocked-by <ids> Comma-separated task IDs that block this task

UPDATE OPTIONS:
  --subject <text>  Update subject
  --description <t> Update description
  --status <s>      Set status: open or resolved
  --owner <id>      Set owner (empty string to unassign)
  --add-blocks <ids>        Add blocking relationships
  --remove-blocks <ids>     Remove blocking relationships
  --add-blocked-by <ids>    Add blocked-by relationships
  --remove-blocked-by <ids> Remove blocked-by relationships
  --add-comment <text>      Add a comment
  --comment-author <id>     Comment author (default: cli)

CLEAN OPTIONS:
  --resolved        Delete all resolved tasks
  --older-than <n>  Delete tasks older than N days
  --dry-run         Preview without deleting
  --force           Skip confirmation

EXAMPLES:
  npx claude-sneakpeek tasks                           # List open tasks
  npx claude-sneakpeek tasks --status all              # List all tasks
  npx claude-sneakpeek tasks show 5                    # Show task #5
  npx claude-sneakpeek tasks create --subject "Fix bug" --description "..."
  npx claude-sneakpeek tasks update 5 --status resolved
  npx claude-sneakpeek tasks delete 5 --force
  npx claude-sneakpeek tasks clean --resolved --dry-run
`);
}
async function runTasksCommand({ opts }) {
  const rootDir = opts.root || DEFAULT_ROOT;
  const positional = opts._ || [];
  if (!TEAM_MODE_SUPPORTED) {
    console.log(
      "Note: Team mode is disabled in this release. Tasks are legacy and only supported in claude-sneakpeek 1.6.3."
    );
  }
  if (opts.help || opts.h) {
    showTasksHelp();
    return;
  }
  const operation = positional[0];
  const taskId = positional[1];
  const variant = opts.variant;
  const team = opts.team;
  const allVariants = Boolean(opts["all-variants"]);
  const allTeams = Boolean(opts.all);
  const json = Boolean(opts.json);
  switch (operation) {
    case "show": {
      if (!taskId) {
        console.error("Error: Task ID required. Usage: npx claude-sneakpeek tasks show <id>");
        process.exitCode = 1;
        return;
      }
      runTasksShow({ rootDir, taskId, variant, team, json });
      break;
    }
    case "create": {
      const subject = opts.subject;
      if (!subject) {
        console.error("Error: --subject required for create.");
        process.exitCode = 1;
        return;
      }
      runTasksCreate({
        rootDir,
        subject,
        description: opts.description,
        variant,
        team,
        owner: opts.owner,
        blocks: parseIds(opts.blocks),
        blockedBy: parseIds(opts["blocked-by"]),
        json
      });
      break;
    }
    case "update": {
      if (!taskId) {
        console.error("Error: Task ID required. Usage: npx claude-sneakpeek tasks update <id>");
        process.exitCode = 1;
        return;
      }
      runTasksUpdate({
        rootDir,
        taskId,
        variant,
        team,
        subject: opts.subject,
        description: opts.description,
        status: opts.status,
        owner: opts.owner,
        addBlocks: parseIds(opts["add-blocks"]),
        removeBlocks: parseIds(opts["remove-blocks"]),
        addBlockedBy: parseIds(opts["add-blocked-by"]),
        removeBlockedBy: parseIds(opts["remove-blocked-by"]),
        addComment: opts["add-comment"],
        commentAuthor: opts["comment-author"],
        json
      });
      break;
    }
    case "delete": {
      if (!taskId) {
        console.error("Error: Task ID required. Usage: npx claude-sneakpeek tasks delete <id>");
        process.exitCode = 1;
        return;
      }
      await runTasksDelete({
        rootDir,
        taskId,
        variant,
        team,
        force: Boolean(opts.force),
        json
      });
      break;
    }
    case "clean": {
      await runTasksClean({
        rootDir,
        variant,
        team,
        allVariants,
        allTeams,
        resolved: Boolean(opts.resolved),
        olderThan: opts["older-than"] !== void 0 ? Number(opts["older-than"]) : void 0,
        dryRun: Boolean(opts["dry-run"]),
        force: Boolean(opts.force),
        json
      });
      break;
    }
    case "graph": {
      runTasksGraph({ rootDir, variant, team, json });
      break;
    }
    case "archive": {
      await runTasksArchive({
        rootDir,
        variant,
        team,
        taskId,
        resolved: Boolean(opts.resolved),
        dryRun: Boolean(opts["dry-run"]),
        force: Boolean(opts.force),
        json
      });
      break;
    }
    case "list":
    case void 0: {
      runTasksList({
        rootDir,
        variant,
        team,
        allVariants,
        allTeams,
        status: opts.status || "open",
        blocked: opts.blocked !== void 0 ? Boolean(opts.blocked) : void 0,
        blocking: opts.blocking !== void 0 ? Boolean(opts.blocking) : void 0,
        ready: opts.ready !== void 0 ? Boolean(opts.ready) : void 0,
        owner: opts.owner,
        limit: opts.limit !== void 0 ? Number(opts.limit) : 50,
        json
      });
      break;
    }
    default:
      console.error(`Unknown operation: ${operation}`);
      console.error('Run "npx claude-sneakpeek tasks --help" for usage.');
      process.exitCode = 1;
  }
}

// src/cli/index.ts
var main = async () => {
  const argv = process.argv.slice(2);
  if (argv.length === 0 && process.stdout.isTTY) {
    await runTui();
    return;
  }
  let cmd = argv.length > 0 && !argv[0].startsWith("-") ? argv.shift() : "create";
  const opts = parseArgs(argv);
  const quickMode = cmd === "quick" || Boolean(opts.quick || opts.simple);
  if (cmd === "quick") cmd = "create";
  const commandsWithOwnHelp = ["tasks"];
  if (cmd === "help" || cmd === "--help" || opts.help && !commandsWithOwnHelp.includes(cmd)) {
    printHelp();
    return;
  }
  if (opts.haiku) {
    printHaiku();
    return;
  }
  if (shouldLaunchTui(cmd, opts)) {
    await runTui();
    return;
  }
  switch (cmd) {
    case "list":
      runListCommand({ opts });
      break;
    case "doctor":
      runDoctorCommand({ opts });
      break;
    case "update":
      runUpdateCommand({ opts });
      break;
    case "remove":
      runRemoveCommand({ opts });
      break;
    case "tweak":
      runTweakCommand({ opts });
      break;
    case "create":
      await runCreateCommand({ opts, quickMode });
      break;
    case "tasks":
      await runTasksCommand({ opts });
      break;
    default:
      printHelp();
  }
};
main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
