var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/tui/index.tsx
import { render } from "ink";

// src/tui/app.tsx
import { useCallback, useEffect as useEffect8, useMemo as useMemo3, useState as useState13 } from "react";
import { Box as Box26, Text as Text24, useApp, useInput as useInput13 } from "ink";
import SelectInput from "ink-select-input";

// src/core/paths.ts
import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
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
  if (input === "~") return os.homedir();
  if (input.startsWith("~/")) return path.join(os.homedir(), input.slice(2));
  return input;
};
var normalizeWrapperBaseName = (name) => {
  if (!isWindows) return name;
  return name.toLowerCase().endsWith(".cmd") ? name.slice(0, -4) : name;
};
var getWrapperFilename = (name) => isWindows ? `${normalizeWrapperBaseName(name)}.cmd` : name;
var getWrapperScriptFilename = (name) => `${normalizeWrapperBaseName(name)}.mjs`;
var getWrapperPath = (binDir, name) => path.join(binDir, getWrapperFilename(name));
var getWrapperScriptPath = (binDir, name) => path.join(binDir, getWrapperScriptFilename(name));
var commandExists = (cmd) => {
  const result = spawnSync(process.platform === "win32" ? "where" : "which", [cmd], {
    encoding: "utf8"
  });
  return result.status === 0 && result.stdout.trim().length > 0;
};

// src/brands/index.ts
var brands_exports = {};
__export(brands_exports, {
  buildBrandConfig: () => buildBrandConfig,
  getBrandPreset: () => getBrandPreset,
  getBrandThemeId: () => getBrandThemeId,
  listBrandPresets: () => listBrandPresets,
  resolveBrandKey: () => resolveBrandKey
});

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
import os2 from "node:os";
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
    const info = os2.userInfo();
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
var getBrandPreset = (key) => key ? BRAND_PRESETS[key] : void 0;
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

// src/core/index.ts
var core_exports = {};
__export(core_exports, {
  DEFAULT_BIN_DIR: () => DEFAULT_BIN_DIR,
  DEFAULT_NPM_PACKAGE: () => DEFAULT_NPM_PACKAGE,
  DEFAULT_NPM_VERSION: () => DEFAULT_NPM_VERSION,
  DEFAULT_ROOT: () => DEFAULT_ROOT,
  NATIVE_MULTIAGENT_SUPPORTED: () => NATIVE_MULTIAGENT_SUPPORTED,
  TEAM_MODE_SUPPORTED: () => TEAM_MODE_SUPPORTED,
  createVariant: () => createVariant,
  createVariantAsync: () => createVariantAsync,
  doctor: () => doctor,
  expandTilde: () => expandTilde,
  listVariants: () => listVariants2,
  removeVariant: () => removeVariant,
  tweakVariant: () => tweakVariant,
  updateVariant: () => updateVariant,
  updateVariantAsync: () => updateVariantAsync
});
import fs16 from "node:fs";
import path24 from "node:path";

// src/core/constants.ts
import os3 from "node:os";
import path2 from "node:path";
var DEFAULT_ROOT = path2.join(os3.homedir(), ".claude-sneakpeek");
var DEFAULT_BIN_DIR = process.platform === "win32" ? path2.join(DEFAULT_ROOT, "bin") : path2.join(os3.homedir(), ".local", "bin");
var TWEAKCC_VERSION = "3.2.2";
var DEFAULT_NPM_PACKAGE = "@anthropic-ai/claude-code";
var DEFAULT_NPM_VERSION = "2.1.22";
var NATIVE_MULTIAGENT_SUPPORTED = true;
var TEAM_MODE_SUPPORTED = false;

// src/core/fs.ts
import fs from "node:fs";
var ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};
var writeJson = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
var readJson = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
};

// src/core/tweakcc.ts
import fs2 from "node:fs";
import { spawn, spawnSync as spawnSync2 } from "node:child_process";
import path3 from "node:path";
import { createRequire } from "node:module";
var require2 = createRequire(import.meta.url);
var ensureTweakccConfig = (tweakDir, brandKey) => {
  if (!brandKey) return false;
  const configPath = path3.join(tweakDir, "config.json");
  const brandConfig = buildBrandConfig(brandKey);
  const desiredDisplay = brandConfig.settings.userMessageDisplay;
  const normalizeFormat = (format) => (format || "").replace(/\s+/g, "").toLowerCase();
  const legacyFormats = /* @__PURE__ */ new Set(["[z.ai]{}", "[minimax]{}"]);
  const themeMatches = (a, b) => !!a?.id && !!b?.id && a.id === b.id || !!a?.name && !!b?.name && a.name === b.name;
  if (fs2.existsSync(configPath)) {
    try {
      const existing = JSON.parse(fs2.readFileSync(configPath, "utf8"));
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
        fs2.writeFileSync(configPath, JSON.stringify(existing, null, 2));
        return true;
      }
    } catch {
    }
    return false;
  }
  fs2.writeFileSync(configPath, JSON.stringify(brandConfig, null, 2));
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
import fs3 from "node:fs";
import path4 from "node:path";
var loadVariantMeta = (variantDir) => {
  const metaPath = path4.join(variantDir, "variant.json");
  if (!fs3.existsSync(metaPath)) return null;
  return readJson(metaPath);
};
var listVariants = (rootDir) => {
  if (!fs3.existsSync(rootDir)) return [];
  return fs3.readdirSync(rootDir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name).filter((name) => fs3.existsSync(path4.join(rootDir, name, "variant.json"))).map((name) => ({ name, meta: loadVariantMeta(path4.join(rootDir, name)) }));
};

// src/core/variant-builder/VariantBuilder.ts
import path17 from "node:path";

// src/providers/index.ts
var providers_exports = {};
__export(providers_exports, {
  DEFAULT_TIMEOUT_MS: () => DEFAULT_TIMEOUT_MS,
  PROVIDER_TEMPLATES: () => PROVIDER_TEMPLATES,
  buildEnv: () => buildEnv,
  getProvider: () => getProvider,
  listProviders: () => listProviders
});
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
var PROVIDER_TEMPLATES = PROVIDERS;

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
import fs4 from "node:fs";
import path5 from "node:path";
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
  return path5.join(npmDir, "node_modules", ...packageParts, "cli.js");
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
  if (!fs4.existsSync(cliPath)) {
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
      if (!fs4.existsSync(cliPath)) {
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
import fs7 from "node:fs";
import path8 from "node:path";

// src/core/skills.ts
import fs5 from "node:fs";
import os4 from "node:os";
import path6 from "node:path";
import { spawn as spawn3, spawnSync as spawnSync4 } from "node:child_process";
import { fileURLToPath } from "node:url";
var DEV_BROWSER_REPO = "https://github.com/SawyerHood/dev-browser.git";
var DEV_BROWSER_ARCHIVE = "https://github.com/SawyerHood/dev-browser/archive/refs/heads/main.tar.gz";
var SKILL_SUBDIR = path6.join("skills", "dev-browser");
var MANAGED_MARKER = ".claude-sneakpeek-managed";
var ensureDir2 = (dir) => {
  fs5.mkdirSync(dir, { recursive: true });
};
var copyDir = (source, target) => {
  fs5.cpSync(source, target, { recursive: true });
};
var resolveSkillSourceDir = (repoDir) => {
  const direct = path6.join(repoDir, SKILL_SUBDIR);
  if (fs5.existsSync(direct)) return direct;
  const nested = fs5.readdirSync(repoDir).find((entry) => entry.startsWith("dev-browser-"));
  if (nested) {
    const candidate = path6.join(repoDir, nested, SKILL_SUBDIR);
    if (fs5.existsSync(candidate)) return candidate;
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
  const archivePath = path6.join(targetDir, "dev-browser.tar.gz");
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
  const skillRoot = opts.targetDir || path6.join(os4.homedir(), ".claude", "skills");
  const targetDir = path6.join(skillRoot, "dev-browser");
  const markerPath = path6.join(targetDir, MANAGED_MARKER);
  const exists = fs5.existsSync(targetDir);
  const managed = exists && fs5.existsSync(markerPath);
  if (exists && !managed && !opts.update) {
    return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
  }
  ensureDir2(skillRoot);
  const tmpDir = fs5.mkdtempSync(path6.join(os4.tmpdir(), "claude-sneakpeek-skill-"));
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
      fs5.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs5.writeFileSync(
      markerPath,
      JSON.stringify({ managedBy: "claude-sneakpeek", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, null, 2)
    );
    return { status: exists ? "updated" : "installed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  } finally {
    fs5.rmSync(tmpDir, { recursive: true, force: true });
  }
};
var ORCHESTRATOR_SKILL_NAME = "orchestration";
var findBundledSkillDir = () => {
  const thisFile = fileURLToPath(import.meta.url);
  const thisDir = path6.dirname(thisFile);
  const devPath = path6.join(thisDir, "..", "skills", ORCHESTRATOR_SKILL_NAME);
  if (fs5.existsSync(devPath)) return devPath;
  const distPath = path6.join(thisDir, "skills", ORCHESTRATOR_SKILL_NAME);
  if (fs5.existsSync(distPath)) return distPath;
  const distPath2 = path6.join(thisDir, "..", "skills", ORCHESTRATOR_SKILL_NAME);
  if (fs5.existsSync(distPath2)) return distPath2;
  return null;
};
var installOrchestratorSkill = (configDir) => {
  const sourceDir = findBundledSkillDir();
  if (!sourceDir) {
    return { status: "failed", message: "bundled orchestrator skill not found" };
  }
  const skillsDir = path6.join(configDir, "skills");
  const targetDir = path6.join(skillsDir, ORCHESTRATOR_SKILL_NAME);
  const markerPath = path6.join(targetDir, MANAGED_MARKER);
  try {
    ensureDir2(skillsDir);
    if (fs5.existsSync(targetDir) && !fs5.existsSync(markerPath)) {
      return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
    }
    if (fs5.existsSync(targetDir)) {
      fs5.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs5.writeFileSync(
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
  const skillsDir = path6.join(configDir, "skills");
  const targetDir = path6.join(skillsDir, ORCHESTRATOR_SKILL_NAME);
  const markerPath = path6.join(targetDir, MANAGED_MARKER);
  if (!fs5.existsSync(targetDir)) {
    return { status: "skipped", message: "skill not installed" };
  }
  if (!fs5.existsSync(markerPath)) {
    return { status: "skipped", message: "skill is user-managed, not removing" };
  }
  try {
    fs5.rmSync(targetDir, { recursive: true, force: true });
    return { status: "removed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  }
};
var TASK_MANAGER_SKILL_NAME = "task-manager";
var findBundledTaskManagerSkillDir = () => {
  const thisFile = fileURLToPath(import.meta.url);
  const thisDir = path6.dirname(thisFile);
  const devPath = path6.join(thisDir, "..", "skills", TASK_MANAGER_SKILL_NAME);
  if (fs5.existsSync(devPath)) return devPath;
  const distPath = path6.join(thisDir, "skills", TASK_MANAGER_SKILL_NAME);
  if (fs5.existsSync(distPath)) return distPath;
  const distPath2 = path6.join(thisDir, "..", "skills", TASK_MANAGER_SKILL_NAME);
  if (fs5.existsSync(distPath2)) return distPath2;
  return null;
};
var installTaskManagerSkill = (configDir) => {
  const sourceDir = findBundledTaskManagerSkillDir();
  if (!sourceDir) {
    return { status: "failed", message: "bundled task-manager skill not found" };
  }
  const skillsDir = path6.join(configDir, "skills");
  const targetDir = path6.join(skillsDir, TASK_MANAGER_SKILL_NAME);
  const markerPath = path6.join(targetDir, MANAGED_MARKER);
  try {
    ensureDir2(skillsDir);
    if (fs5.existsSync(targetDir) && !fs5.existsSync(markerPath)) {
      return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
    }
    if (fs5.existsSync(targetDir)) {
      fs5.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs5.writeFileSync(
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
  const skillsDir = path6.join(configDir, "skills");
  const targetDir = path6.join(skillsDir, TASK_MANAGER_SKILL_NAME);
  const markerPath = path6.join(targetDir, MANAGED_MARKER);
  if (!fs5.existsSync(targetDir)) {
    return { status: "skipped", message: "skill not installed" };
  }
  if (!fs5.existsSync(markerPath)) {
    return { status: "skipped", message: "skill is user-managed, not removing" };
  }
  try {
    fs5.rmSync(targetDir, { recursive: true, force: true });
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
  const archivePath = path6.join(targetDir, "dev-browser.tar.gz");
  const curlResult = await spawnAsync("curl", ["-L", "-o", archivePath, DEV_BROWSER_ARCHIVE]);
  if (!curlResult.ok) return curlResult;
  return spawnAsync("tar", ["-xzf", archivePath, "-C", targetDir]);
};
var ensureDevBrowserSkillAsync = async (opts) => {
  if (!opts.install) {
    return { status: "skipped", message: "skill install disabled" };
  }
  const skillRoot = opts.targetDir || path6.join(os4.homedir(), ".claude", "skills");
  const targetDir = path6.join(skillRoot, "dev-browser");
  const markerPath = path6.join(targetDir, MANAGED_MARKER);
  const exists = fs5.existsSync(targetDir);
  const managed = exists && fs5.existsSync(markerPath);
  if (exists && !managed && !opts.update) {
    return { status: "skipped", message: "existing skill is user-managed", path: targetDir };
  }
  ensureDir2(skillRoot);
  const tmpDir = fs5.mkdtempSync(path6.join(os4.tmpdir(), "claude-sneakpeek-skill-"));
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
      fs5.rmSync(targetDir, { recursive: true, force: true });
    }
    copyDir(sourceDir, targetDir);
    fs5.writeFileSync(
      markerPath,
      JSON.stringify({ managedBy: "claude-sneakpeek", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, null, 2)
    );
    return { status: exists ? "updated" : "installed", path: targetDir };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "failed", message };
  } finally {
    fs5.rmSync(tmpDir, { recursive: true, force: true });
  }
};

// src/team-pack/index.ts
import fs6 from "node:fs";
import path7 from "node:path";
import { fileURLToPath as fileURLToPath2 } from "node:url";
var __dirname = path7.dirname(fileURLToPath2(import.meta.url));
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
  if (!fs6.existsSync(systemPromptsDir)) {
    fs6.mkdirSync(systemPromptsDir, { recursive: true });
  }
  for (const file of TEAM_PACK_FILES) {
    const sourcePath = path7.join(__dirname, file.source);
    const targetPath = path7.join(systemPromptsDir, file.target);
    if (fs6.existsSync(sourcePath)) {
      fs6.copyFileSync(sourcePath, targetPath);
      copied.push(file.target);
    }
  }
  return copied;
};
var removeTeamPackPrompts = (systemPromptsDir) => {
  const removed = [];
  if (!fs6.existsSync(systemPromptsDir)) {
    return removed;
  }
  for (const file of TEAM_PACK_FILES) {
    const targetPath = path7.join(systemPromptsDir, file.target);
    if (fs6.existsSync(targetPath)) {
      fs6.unlinkSync(targetPath);
      removed.push(file.target);
    }
  }
  return removed;
};
var configureTeamToolset = (configPath) => {
  if (!fs6.existsSync(configPath)) {
    return false;
  }
  try {
    const config = JSON.parse(fs6.readFileSync(configPath, "utf8"));
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
    fs6.writeFileSync(configPath, JSON.stringify(config, null, 2));
    return true;
  } catch {
    return false;
  }
};
var removeTeamToolset = (configPath) => {
  if (!fs6.existsSync(configPath)) {
    return false;
  }
  try {
    const config = JSON.parse(fs6.readFileSync(configPath, "utf8"));
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
    fs6.writeFileSync(configPath, JSON.stringify(config, null, 2));
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
    const cliPath = path8.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs7.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping team mode patch");
      return;
    }
    if (!fs7.existsSync(backupPath)) {
      fs7.copyFileSync(cliPath, backupPath);
    }
    const content = fs7.readFileSync(cliPath, "utf8");
    const patchResult = setTeamModeEnabled(content, true);
    if (patchResult.state === "unknown") {
      state.notes.push("Warning: Team mode marker not found in cli.js, patch may not work");
      return;
    }
    if (!patchResult.changed && patchResult.state === "enabled") {
      state.notes.push("Team mode already enabled");
      return;
    }
    fs7.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs7.readFileSync(cliPath, "utf8");
    if (detectTeamModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Team mode patch verification failed");
      return;
    }
    const settingsPath = path8.join(paths.configDir, "settings.json");
    if (fs7.existsSync(settingsPath)) {
      try {
        const settings = JSON.parse(fs7.readFileSync(settingsPath, "utf8"));
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
        fs7.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
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
    const systemPromptsDir = path8.join(paths.tweakDir, "system-prompts");
    const copiedFiles = copyTeamPackPrompts(systemPromptsDir);
    if (copiedFiles.length > 0) {
      state.notes.push(`Team pack prompts installed (${copiedFiles.join(", ")})`);
    }
    const tweakccConfigPath = path8.join(paths.tweakDir, "config.json");
    if (configureTeamToolset(tweakccConfigPath)) {
      state.notes.push("Team toolset configured (TodoWrite blocked)");
    }
  }
};

// src/core/variant-builder/steps/SwarmModeStep.ts
import fs8 from "node:fs";
import path9 from "node:path";

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
    const cliPath = path9.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs8.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping swarm mode patch");
      return;
    }
    if (!fs8.existsSync(backupPath)) {
      fs8.copyFileSync(cliPath, backupPath);
    }
    const content = fs8.readFileSync(cliPath, "utf8");
    const patchResult = setSwarmModeEnabled(content, true);
    if (patchResult.state === "unknown") {
      state.notes.push("Warning: Swarm mode gate not found in cli.js, patch may not work");
      return;
    }
    if (!patchResult.changed && patchResult.state === "enabled") {
      state.notes.push("Swarm mode already enabled");
      return;
    }
    fs8.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs8.readFileSync(cliPath, "utf8");
    if (detectSwarmModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Swarm mode patch verification failed");
      return;
    }
    state.notes.push("Swarm mode enabled successfully");
    state.swarmModeEnabled = true;
  }
};

// src/core/variant-builder/steps/WriteConfigStep.ts
import path11 from "node:path";

// src/core/claude-config.ts
import fs9 from "node:fs";
import path10 from "node:path";
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
  const settingsPath = path10.join(configDir, SETTINGS_FILE);
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
  const settingsPath = path10.join(configDir, SETTINGS_FILE);
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
  const settingsPath = path10.join(configDir, SETTINGS_FILE);
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
  const settingsPath = path10.join(configDir, SETTINGS_FILE);
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
  const settingsPath = path10.join(configDir, SETTINGS_FILE);
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
  const configPath = path10.join(configDir, CLAUDE_CONFIG_FILE);
  const exists = fs9.existsSync(configPath);
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
  const configPath = path10.join(configDir, CLAUDE_CONFIG_FILE);
  const exists = fs9.existsSync(configPath);
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
  const configPath = path10.join(configDir, CLAUDE_CONFIG_FILE);
  const exists = fs9.existsSync(configPath);
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
    writeJson(path11.join(paths.configDir, "settings.json"), config);
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
import fs10 from "node:fs";
import path12 from "node:path";

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
  if (!fs10.existsSync(filePath)) return false;
  const content = fs10.readFileSync(filePath, "utf8");
  const updated = insertOverlay(content, overlay);
  if (updated === content) return false;
  fs10.writeFileSync(filePath, updated);
  return true;
};
var applyOverlays = (systemPromptsDir, overlays) => {
  const updated = [];
  for (const target of PROMPT_PACK_TARGETS) {
    const filePath = path12.join(systemPromptsDir, target.filename);
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
  const systemPromptsDir = path12.join(tweakDir, "system-prompts");
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
import fs11 from "node:fs";
import path13 from "node:path";
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
  const parsed = path13.parse(opts.wrapperPath);
  const basePath = parsed.ext ? path13.join(parsed.dir, parsed.name) : opts.wrapperPath;
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
  fs11.writeFileSync(scriptPath, scriptContent, { encoding: "utf8" });
  fs11.writeFileSync(cmdPath, cmdLines.join("\r\n"), { encoding: "utf8" });
};
var writeWrapper = (wrapperPath, configDir, binaryPath, runtime = "node") => {
  const tweakDir = path13.join(path13.dirname(configDir), "tweakcc");
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
  fs11.writeFileSync(wrapperPath, content, { mode: 493 });
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
import fs12 from "node:fs";
import os5 from "node:os";
import path14 from "node:path";
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
  const name = path14.basename(shell);
  if (name === "zsh") {
    return path14.join(home, ".zshrc");
  }
  if (name === "bash") {
    const bashrc = path14.join(home, ".bashrc");
    if (fs12.existsSync(bashrc)) return bashrc;
    return path14.join(home, ".bash_profile");
  }
  return null;
};
var readSettingsApiKey2 = (configDir) => {
  const settingsPath = path14.join(configDir, SETTINGS_FILE2);
  if (!fs12.existsSync(settingsPath)) return null;
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
  const existing = fs12.existsSync(profile) ? fs12.readFileSync(profile, "utf8") : "";
  if (hasZaiKeyInProfile(existing)) {
    return { status: "skipped", message: "Z_AI_API_KEY already set in shell profile", path: profile };
  }
  const next = upsertBlock(existing, renderBlock(apiKey));
  if (next === existing) {
    return { status: "skipped", message: "Shell profile already up to date", path: profile };
  }
  fs12.writeFileSync(profile, next);
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
import path15 from "node:path";
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
      targetDir: path15.join(paths.configDir, "skills")
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
      targetDir: path15.join(paths.configDir, "skills")
    });
    if (skillResult.status === "failed") {
      state.notes.push(`dev-browser skill install failed: ${skillResult.message || "unknown error"}`);
    } else if (skillResult.status !== "skipped") {
      state.notes.push(`dev-browser skill ${skillResult.status}`);
    }
  }
};

// src/core/variant-builder/steps/FinalizeStep.ts
import path16 from "node:path";
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
    writeJson(path16.join(paths.variantDir, "variant.json"), meta);
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
    const variantDir = path17.join(resolvedRoot, params.name);
    const configDir = path17.join(variantDir, "config");
    const tweakDir = path17.join(variantDir, "tweakcc");
    const wrapperPath = getWrapperPath(resolvedBin, params.name);
    const npmDir = path17.join(variantDir, "npm");
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
import path23 from "node:path";

// src/core/variant-builder/update-steps/RebuildUpdateStep.ts
import fs13 from "node:fs";
import path18 from "node:path";
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
      const tweakConfigPath = path18.join(meta.tweakDir, "config.json");
      if (fs13.existsSync(tweakConfigPath)) {
        state.savedTweakccConfig = fs13.readFileSync(tweakConfigPath, "utf8");
      }
    }
    if (fs13.existsSync(paths.npmDir)) {
      fs13.rmSync(paths.npmDir, { recursive: true, force: true });
    }
    if (shouldResetTweakcc && fs13.existsSync(meta.tweakDir)) {
      fs13.rmSync(meta.tweakDir, { recursive: true, force: true });
    }
    const resolvedBin = opts.binDir ? expandTilde(opts.binDir) ?? opts.binDir : meta.binDir;
    if (resolvedBin) {
      const wrapperPath = getWrapperPath(resolvedBin, ctx.name);
      fs13.rmSync(wrapperPath, { force: true });
      if (isWindows) {
        const scriptPath = getWrapperScriptPath(resolvedBin, ctx.name);
        fs13.rmSync(scriptPath, { force: true });
      }
    }
    if (shouldResetTweakcc && state.savedTweakccConfig) {
      ensureDir(meta.tweakDir);
      fs13.writeFileSync(path18.join(meta.tweakDir, "config.json"), state.savedTweakccConfig);
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
import fs14 from "node:fs";
import path19 from "node:path";
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
    const cliPath = path19.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs14.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping swarm mode patch");
      return;
    }
    if (!fs14.existsSync(backupPath)) {
      fs14.copyFileSync(cliPath, backupPath);
    }
    const content = fs14.readFileSync(cliPath, "utf8");
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
    fs14.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs14.readFileSync(cliPath, "utf8");
    if (detectSwarmModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Swarm mode patch verification failed");
      return;
    }
    meta.swarmModeEnabled = true;
    state.notes.push("Swarm mode enabled successfully");
  }
};

// src/core/variant-builder/update-steps/TeamModeUpdateStep.ts
import fs15 from "node:fs";
import path20 from "node:path";
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
    const cliPath = path20.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    if (!fs15.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping team mode unpatch");
      this.removeSkill(ctx);
      return;
    }
    const content = fs15.readFileSync(cliPath, "utf8");
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
    fs15.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs15.readFileSync(cliPath, "utf8");
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
    const cliPath = path20.join(paths.npmDir, "node_modules", "@anthropic-ai", "claude-code", "cli.js");
    const backupPath = `${cliPath}.backup`;
    if (!fs15.existsSync(cliPath)) {
      state.notes.push("Warning: cli.js not found, skipping team mode patch");
      return;
    }
    if (!fs15.existsSync(backupPath)) {
      fs15.copyFileSync(cliPath, backupPath);
    }
    const content = fs15.readFileSync(cliPath, "utf8");
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
    fs15.writeFileSync(cliPath, patchResult.content);
    const verifyContent = fs15.readFileSync(cliPath, "utf8");
    if (detectTeamModeState(verifyContent) !== "enabled") {
      state.notes.push("Warning: Team mode patch verification failed");
      return;
    }
    const settingsPath = path20.join(meta.configDir, "settings.json");
    if (fs15.existsSync(settingsPath)) {
      try {
        const settings = JSON.parse(fs15.readFileSync(settingsPath, "utf8"));
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
        fs15.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
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
    const systemPromptsDir = path20.join(meta.tweakDir, "system-prompts");
    const copiedFiles = copyTeamPackPrompts(systemPromptsDir);
    if (copiedFiles.length > 0) {
      state.notes.push(`Team pack prompts installed (${copiedFiles.join(", ")})`);
    }
    const tweakccConfigPath = path20.join(meta.tweakDir, "config.json");
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
    const systemPromptsDir = path20.join(meta.tweakDir, "system-prompts");
    const removedPrompts = removeTeamPackPrompts(systemPromptsDir);
    if (removedPrompts.length > 0) {
      state.notes.push(`Team pack prompts removed (${removedPrompts.join(", ")})`);
    }
    const tweakccConfigPath = path20.join(paths.variantDir, "tweakcc", "config.json");
    if (removeTeamToolset(tweakccConfigPath)) {
      state.notes.push("Team toolset removed");
    }
  }
  removeTeamSettings(ctx) {
    const { meta, state } = ctx;
    const settingsPath = path20.join(meta.configDir, "settings.json");
    if (!fs15.existsSync(settingsPath)) {
      return;
    }
    try {
      const settings = JSON.parse(fs15.readFileSync(settingsPath, "utf8"));
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
        fs15.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
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
import path21 from "node:path";
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
      targetDir: path21.join(meta.configDir, "skills")
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
import path22 from "node:path";
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
    writeJson(path22.join(paths.variantDir, "variant.json"), meta);
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
    const variantDir = path23.join(resolvedRoot, name);
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
      npmDir: meta.npmDir || path23.join(variantDir, "npm")
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
var createVariantAsync = async (params) => {
  return new VariantBuilder(true).buildAsync(params);
};
var updateVariantAsync = async (rootDir, name, opts = {}) => {
  return new VariantUpdater(true).updateAsync(rootDir, name, opts);
};
var updateVariant = (rootDir, name, opts = {}) => {
  return new VariantUpdater(false).update(rootDir, name, opts);
};
var removeVariant = (rootDir, name) => {
  const resolvedRoot = expandTilde(rootDir || DEFAULT_ROOT) ?? rootDir;
  const variantDir = path24.join(resolvedRoot, name);
  if (!fs16.existsSync(variantDir)) throw new Error(`Variant not found: ${name}`);
  fs16.rmSync(variantDir, { recursive: true, force: true });
};
var doctor = (rootDir, binDir) => {
  const resolvedRoot = expandTilde(rootDir || DEFAULT_ROOT) ?? rootDir;
  const resolvedBin = expandTilde(binDir || DEFAULT_BIN_DIR) ?? binDir;
  const variants = listVariants(resolvedRoot);
  return variants.map(({ name, meta }) => {
    const wrapperPath = getWrapperPath(resolvedBin, name);
    const wrapperOk = fs16.existsSync(wrapperPath);
    const scriptOk = !isWindows || fs16.existsSync(getWrapperScriptPath(resolvedBin, name));
    const ok = Boolean(meta && fs16.existsSync(meta.binaryPath) && wrapperOk && scriptOk);
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
  const variantDir = path24.join(resolvedRoot, name);
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

// src/tui/hooks/useVariantCreate.ts
import { useEffect, useRef } from "react";
import path25 from "node:path";
function buildCreateSummary(params) {
  const {
    providerLabel,
    npmPackage,
    npmVersion,
    usePromptPack,
    installSkill,
    enableTeamMode,
    teamModeSupported,
    modelOverrides,
    providerKey,
    shellEnv,
    notes
  } = params;
  const getPromptPackDescription = () => {
    if (!usePromptPack) return "off";
    if (providerKey === "zai") return "on (zai-cli routing)";
    if (providerKey === "minimax") return "on (MCP routing)";
    return "on";
  };
  const getTeamModeDescription = () => {
    if (!enableTeamMode) return "off";
    return "on (orchestrator skill, TodoWrite blocked)";
  };
  return [
    `Provider: ${providerLabel}`,
    `Install: npm ${npmPackage}@${npmVersion}`,
    `Prompt pack: ${getPromptPackDescription()}`,
    `dev-browser skill: ${installSkill ? "on" : "off"}`,
    ...teamModeSupported ? [`Team mode: ${getTeamModeDescription()}`] : [],
    ...modelOverrides.sonnet || modelOverrides.opus || modelOverrides.haiku ? [
      `Models: sonnet=${modelOverrides.sonnet || "-"}, opus=${modelOverrides.opus || "-"}, haiku=${modelOverrides.haiku || "-"}`
    ] : [],
    ...providerKey === "zai" ? [`Shell env: ${shellEnv ? "write Z_AI_API_KEY" : "manual"}`] : [],
    ...notes || []
  ];
}
function buildCreateNextSteps(name, rootDir) {
  return [
    `Run: ${name}`,
    `Update: claude-sneakpeek update ${name}`,
    `Tweak: claude-sneakpeek tweak ${name}`,
    `Config: ${path25.join(rootDir, name, "config", "settings.json")}`
  ];
}
function buildHelpLines() {
  return ["Help: claude-sneakpeek help", "List: claude-sneakpeek list", "Doctor: claude-sneakpeek doctor"];
}
function useVariantCreate(options) {
  const { screen, params, core, setProgressLines, setScreen, onComplete } = options;
  const isRunningRef = useRef(false);
  useEffect(() => {
    if (screen !== "create-running") return;
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    let cancelled = false;
    const runCreate = async () => {
      try {
        setProgressLines(() => []);
        const createParams = {
          name: params.name,
          providerKey: params.providerKey || "zai",
          baseUrl: params.baseUrl,
          apiKey: params.apiKey,
          extraEnv: params.extraEnv,
          modelOverrides: params.modelOverrides,
          brand: params.brandKey,
          rootDir: params.rootDir,
          binDir: params.binDir,
          npmPackage: params.npmPackage,
          noTweak: false,
          // Always apply tweakcc patches
          promptPack: params.usePromptPack,
          skillInstall: params.installSkill,
          shellEnv: params.shellEnv,
          skillUpdate: params.skillUpdate,
          enableTeamMode: params.enableTeamMode,
          tweakccStdio: "pipe",
          onProgress: (step) => setProgressLines((prev) => [...prev, step])
        };
        const result = core.createVariantAsync ? await core.createVariantAsync(createParams) : core.createVariant(createParams);
        if (cancelled) return;
        const providerLabel = params.provider?.label || params.providerKey || "Provider";
        const summary = buildCreateSummary({
          providerLabel,
          npmPackage: params.npmPackage,
          npmVersion: params.npmVersion,
          usePromptPack: params.usePromptPack,
          installSkill: params.installSkill,
          enableTeamMode: params.enableTeamMode,
          teamModeSupported: core.TEAM_MODE_SUPPORTED,
          modelOverrides: params.modelOverrides,
          providerKey: params.providerKey,
          shellEnv: params.shellEnv,
          notes: result.notes
        });
        const completion = {
          doneLines: [
            `Variant created: ${params.name}`,
            `Wrapper: ${result.wrapperPath}`,
            `Config: ${path25.join(params.rootDir, params.name, "config")}`
          ],
          summary,
          nextSteps: buildCreateNextSteps(params.name, params.rootDir),
          help: buildHelpLines()
        };
        onComplete(completion);
      } catch (error) {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : String(error);
        onComplete({
          doneLines: [`Failed: ${message}`],
          summary: [],
          nextSteps: [],
          help: []
        });
      }
      if (!cancelled) {
        isRunningRef.current = false;
        setScreen("create-done");
      }
    };
    runCreate();
    return () => {
      cancelled = true;
      isRunningRef.current = false;
    };
  }, [screen, params, core, setProgressLines, setScreen, onComplete]);
}

// src/tui/hooks/useVariantUpdate.ts
import { useEffect as useEffect2, useRef as useRef2 } from "react";
import path26 from "node:path";
function buildUpdateSummary(meta, notes, teamModeSupported) {
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
  return [
    `Provider: ${meta.provider}`,
    `Prompt pack: ${getPromptPackDescription()}`,
    `dev-browser skill: ${meta.skillInstall ? "on" : "off"}`,
    ...teamModeSupported ? [`Team mode: ${getTeamModeDescription()}`] : [],
    ...meta.provider === "zai" ? [`Shell env: ${meta.shellEnv ? "write Z_AI_API_KEY" : "manual"}`] : [],
    ...notes || []
  ];
}
function buildUpdateNextSteps(name, rootDir) {
  return [
    `Run: ${name}`,
    `Tweak: claude-sneakpeek tweak ${name}`,
    `Config: ${path26.join(rootDir, name, "config", "settings.json")}`
  ];
}
function useVariantUpdate(options) {
  const { screen, selectedVariant, rootDir, binDir, core, setProgressLines, setScreen, onComplete } = options;
  const isRunningRef = useRef2(false);
  useEffect2(() => {
    if (screen !== "manage-update") return;
    if (!selectedVariant) return;
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    let cancelled = false;
    const runUpdate = async () => {
      try {
        setProgressLines(() => []);
        const opts = {
          tweakccStdio: "pipe",
          binDir,
          onProgress: (step) => setProgressLines((prev) => [...prev, step])
        };
        const result = core.updateVariantAsync ? await core.updateVariantAsync(rootDir, selectedVariant.name, opts) : core.updateVariant(rootDir, selectedVariant.name, opts);
        if (cancelled) return;
        const completion = {
          doneLines: [`Updated ${selectedVariant.name}`],
          summary: buildUpdateSummary(result.meta, result.notes, core.TEAM_MODE_SUPPORTED),
          nextSteps: buildUpdateNextSteps(selectedVariant.name, rootDir),
          help: buildHelpLines()
        };
        onComplete(completion);
      } catch (error) {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : String(error);
        onComplete({
          doneLines: [`Failed: ${message}`],
          summary: [],
          nextSteps: [],
          help: []
        });
      }
      if (!cancelled) {
        isRunningRef.current = false;
        setScreen("manage-update-done");
      }
    };
    runUpdate();
    return () => {
      cancelled = true;
      isRunningRef.current = false;
    };
  }, [screen, selectedVariant, rootDir, binDir, core, setProgressLines, setScreen, onComplete]);
}

// src/tui/hooks/useUpdateAll.ts
import { useEffect as useEffect3, useRef as useRef3 } from "react";
function useUpdateAll(options) {
  const { screen, rootDir, binDir, core, setProgressLines, setScreen, onComplete } = options;
  const isRunningRef = useRef3(false);
  useEffect3(() => {
    if (screen !== "updateAll") return;
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    let cancelled = false;
    const runUpdateAll = async () => {
      const entries = core.listVariants(rootDir);
      if (entries.length === 0) {
        onComplete({
          doneLines: ["No variants found."],
          summary: [],
          nextSteps: [],
          help: []
        });
        setScreen("updateAll-done");
        return;
      }
      setProgressLines(() => []);
      try {
        for (const entry of entries) {
          if (cancelled) return;
          setProgressLines((prev) => [...prev, `\u2501\u2501 ${entry.name} \u2501\u2501`]);
          const opts = {
            tweakccStdio: "pipe",
            binDir,
            onProgress: (step) => setProgressLines((prev) => [...prev, `  ${step}`])
          };
          if (core.updateVariantAsync) {
            await core.updateVariantAsync(rootDir, entry.name, opts);
          } else {
            core.updateVariant(rootDir, entry.name, opts);
          }
        }
        if (cancelled) return;
        const completion = {
          doneLines: ["All variants updated."],
          summary: [`Updated ${entries.length} variants.`],
          nextSteps: ["Run any variant by name", "Use Manage Variants to inspect details"],
          help: buildHelpLines()
        };
        onComplete(completion);
      } catch (error) {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : String(error);
        onComplete({
          doneLines: [`Failed: ${message}`],
          summary: [],
          nextSteps: [],
          help: []
        });
      }
      if (!cancelled) {
        isRunningRef.current = false;
        setScreen("updateAll-done");
      }
    };
    runUpdateAll();
    return () => {
      cancelled = true;
      isRunningRef.current = false;
    };
  }, [screen, rootDir, binDir, core, setProgressLines, setScreen, onComplete]);
}

// src/tui/hooks/useModelConfig.ts
import { useEffect as useEffect4, useRef as useRef4 } from "react";
function useModelConfig(options) {
  const {
    screen,
    selectedVariant,
    rootDir,
    binDir,
    modelOpus,
    modelSonnet,
    modelHaiku,
    core,
    setProgressLines,
    setScreen,
    onComplete
  } = options;
  const isRunningRef = useRef4(false);
  useEffect4(() => {
    if (screen !== "manage-models-saving") return;
    if (!selectedVariant) return;
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    let cancelled = false;
    const saveModels = async () => {
      try {
        setProgressLines(() => ["Saving model configuration..."]);
        const opts = {
          tweakccStdio: "pipe",
          binDir,
          settingsOnly: true,
          // Skip npm reinstall, just update settings.json
          noTweak: true,
          // Don't re-run tweakcc patches
          modelOverrides: {
            opus: modelOpus.trim() || void 0,
            sonnet: modelSonnet.trim() || void 0,
            haiku: modelHaiku.trim() || void 0
          },
          onProgress: (step) => setProgressLines((prev) => [...prev, step])
        };
        if (core.updateVariantAsync) {
          await core.updateVariantAsync(rootDir, selectedVariant.name, opts);
        } else {
          core.updateVariant(rootDir, selectedVariant.name, opts);
        }
        if (cancelled) return;
        const completion = {
          doneLines: [`Updated model mapping for ${selectedVariant.name}`],
          summary: [
            `Opus: ${modelOpus.trim() || "(not set)"}`,
            `Sonnet: ${modelSonnet.trim() || "(not set)"}`,
            `Haiku: ${modelHaiku.trim() || "(not set)"}`
          ],
          nextSteps: [`Run: ${selectedVariant.name}`, "Models are saved in settings.json"],
          help: ['Use "Update" to refresh binary while keeping models']
        };
        onComplete(completion);
      } catch (error) {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : String(error);
        onComplete({
          doneLines: [`Failed: ${message}`],
          summary: [],
          nextSteps: [],
          help: []
        });
      }
      if (!cancelled) {
        isRunningRef.current = false;
        setScreen("manage-models-done");
      }
    };
    saveModels();
    return () => {
      cancelled = true;
      isRunningRef.current = false;
    };
  }, [
    screen,
    selectedVariant,
    rootDir,
    binDir,
    modelOpus,
    modelSonnet,
    modelHaiku,
    core,
    setProgressLines,
    setScreen,
    onComplete
  ]);
}

// src/tui/hooks/useTeamModeToggle.ts
import { useEffect as useEffect5, useRef as useRef5 } from "react";
function useTeamModeToggle(options) {
  const { screen, selectedVariant, rootDir, binDir, core, setProgressLines, setScreen, onComplete, refreshVariants } = options;
  const isRunningRef = useRef5(false);
  useEffect5(() => {
    if (screen !== "manage-team-mode") return;
    if (!selectedVariant) return;
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    let cancelled = false;
    const runToggle = async () => {
      try {
        setProgressLines(() => []);
        const isCurrentlyEnabled = selectedVariant.teamModeEnabled;
        const action = isCurrentlyEnabled ? "Disabling" : "Enabling";
        setProgressLines((prev) => [...prev, `${action} team mode...`]);
        const opts = {
          tweakccStdio: "pipe",
          binDir,
          settingsOnly: true,
          // Don't reinstall npm package
          enableTeamMode: !isCurrentlyEnabled,
          disableTeamMode: isCurrentlyEnabled,
          onProgress: (step) => setProgressLines((prev) => [...prev, step])
        };
        const result = core.updateVariantAsync ? await core.updateVariantAsync(rootDir, selectedVariant.name, opts) : core.updateVariant(rootDir, selectedVariant.name, opts);
        if (cancelled) return;
        const newStatus = result.meta.teamModeEnabled ? "enabled" : "disabled";
        const completion = {
          doneLines: [`Team mode ${newStatus} for ${selectedVariant.name}`],
          summary: [...result.notes || []],
          nextSteps: [`Run: ${selectedVariant.name}`],
          help: ["Team mode adds TaskCreate, TaskGet, TaskUpdate, TaskList tools for multi-agent coordination"]
        };
        onComplete(completion);
        refreshVariants();
      } catch (error) {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : String(error);
        onComplete({
          doneLines: [`Failed: ${message}`],
          summary: [],
          nextSteps: [],
          help: []
        });
      }
      if (!cancelled) {
        isRunningRef.current = false;
        setScreen("manage-team-mode-done");
      }
    };
    runToggle();
    return () => {
      cancelled = true;
      isRunningRef.current = false;
    };
  }, [screen, selectedVariant, rootDir, binDir, core, setProgressLines, setScreen, onComplete]);
}

// src/tui/screens/HomeScreen.tsx
import { useState, useRef as useRef6 } from "react";
import { Box as Box5, Text as Text5, useInput as useInput2 } from "ink";

// src/tui/components/ui/Layout.tsx
import { Box, Text } from "ink";

// src/tui/components/ui/theme.ts
var colors = {
  // Brand colors - professional and inviting
  primary: "blue",
  primaryBright: "blueBright",
  secondary: "yellow",
  secondaryBright: "yellowBright",
  accent: "blueBright",
  gold: "yellow",
  goldBright: "yellowBright",
  // Status colors
  success: "greenBright",
  warning: "yellowBright",
  error: "redBright",
  info: "blueBright",
  // Text colors
  text: "white",
  textBright: "whiteBright",
  textMuted: "gray",
  textDim: "blackBright",
  textGold: "yellow",
  // Border colors
  border: "blue",
  borderFocus: "blueBright",
  borderAccent: "yellow",
  borderGold: "yellow",
  // Logo colors - deep blue to gold gradient feel
  logo1: "blueBright",
  logo2: "yellow",
  logo3: "yellowBright",
  logoAccent: "white"
};
var icons = {
  // Navigation
  pointer: "\u25B8",
  pointerEmpty: " ",
  // Status
  check: "\u2713",
  cross: "\u2717",
  warning: "!",
  bullet: "\u2022",
  star: "\u2605",
  // Progress
  progressFull: "\u2588",
  progressEmpty: "\u2591",
  // Arrows
  arrowRight: "\u2192",
  arrowLeft: "\u2190",
  arrowUp: "\u2191",
  arrowDown: "\u2193"
};
var spinnerFrames = ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"];
var keyHints = {
  navigate: "\u2191\u2193 Navigate",
  select: "\u21B5 Select",
  back: "Esc Back",
  continue: "\u21B5 Continue"
};

// src/tui/components/ui/Layout.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var FRAME_WIDTH = 76;
var FRAME_HEIGHT = 32;
var Frame = ({ children, title, borderColor = colors.border, showFooter = true }) => {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor,
      paddingX: 2,
      paddingY: 1,
      width: FRAME_WIDTH,
      minHeight: FRAME_HEIGHT,
      children: [
        title && /* @__PURE__ */ jsx(Box, { marginBottom: 1, children: /* @__PURE__ */ jsx(Text, { color: colors.primary, bold: true, children: title }) }),
        children,
        showFooter && /* @__PURE__ */ jsx(CreatorFooter, {})
      ]
    }
  );
};
var CreatorFooter = () => /* @__PURE__ */ jsxs(Box, { flexDirection: "column", marginTop: 1, children: [
  /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Text, { color: colors.border, children: "\u2500".repeat(FRAME_WIDTH - 8) }) }),
  /* @__PURE__ */ jsxs(Box, { flexDirection: "row", justifyContent: "space-between", marginTop: 1, children: [
    /* @__PURE__ */ jsxs(Box, { flexDirection: "column", children: [
      /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsx(Text, { color: colors.textDim, children: "Created by " }),
        /* @__PURE__ */ jsx(Text, { color: colors.gold, bold: true, children: "Numman Ali" })
      ] }),
      /* @__PURE__ */ jsx(Text, { color: colors.textDim, children: "Want features? Get in touch!" })
    ] }),
    /* @__PURE__ */ jsxs(Box, { flexDirection: "column", alignItems: "flex-end", children: [
      /* @__PURE__ */ jsx(Text, { color: colors.primaryBright, children: "https://x.com/nummanali" }),
      /* @__PURE__ */ jsx(Text, { color: colors.primaryBright, children: "https://github.com/numman-ali" })
    ] })
  ] })
] });
var Section = ({ children, title, marginY = 1 }) => /* @__PURE__ */ jsxs(Box, { flexDirection: "column", marginY, children: [
  title && /* @__PURE__ */ jsx(Box, { marginBottom: 1, children: /* @__PURE__ */ jsx(Text, { color: colors.textMuted, bold: true, children: title }) }),
  children
] });
var Divider = ({ color = colors.border, compact = false }) => {
  const width = FRAME_WIDTH - 8;
  return /* @__PURE__ */ jsx(Box, { marginY: compact ? 0 : 1, children: /* @__PURE__ */ jsx(Text, { color, children: "\u2500".repeat(width) }) });
};
var HintBar = ({ hints = [keyHints.navigate, keyHints.select, keyHints.back] }) => /* @__PURE__ */ jsx(Box, { marginTop: 1, children: /* @__PURE__ */ jsx(Text, { color: colors.textMuted, children: hints.join("  \u2022  ") }) });

// src/tui/components/ui/Menu.tsx
import React from "react";
import { Box as Box2, Text as Text2, useInput } from "ink";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var MenuItemDisplay = ({ item, selected }) => {
  const pointer = selected ? icons.pointer : icons.pointerEmpty;
  let iconSuffix = "";
  let iconColor = colors.gold;
  if (item.icon === "star") iconSuffix = ` ${icons.star}`;
  else if (item.icon === "exit") {
    iconSuffix = ` ${icons.cross}`;
    iconColor = colors.error;
  } else if (item.icon === "back") iconSuffix = ` ${icons.arrowLeft}`;
  else if (item.icon === "check") iconSuffix = ` ${icons.check}`;
  else if (item.icon === "warning") {
    iconSuffix = ` ${icons.warning}`;
    iconColor = colors.warning;
  }
  return /* @__PURE__ */ jsxs2(Box2, { children: [
    /* @__PURE__ */ jsxs2(Text2, { color: selected ? colors.gold : colors.textMuted, children: [
      pointer,
      " "
    ] }),
    /* @__PURE__ */ jsx2(Text2, { color: selected ? colors.text : colors.textMuted, bold: selected, dimColor: item.disabled, children: item.label }),
    iconSuffix && /* @__PURE__ */ jsx2(Text2, { color: iconColor, children: iconSuffix }),
    item.description && /* @__PURE__ */ jsxs2(Text2, { color: colors.textMuted, children: [
      " \u2014 ",
      item.description
    ] })
  ] });
};
var SelectMenu = ({ items, selectedIndex, onIndexChange, onSelect }) => {
  useInput((input, key) => {
    if (key.upArrow) {
      const newIndex = selectedIndex > 0 ? selectedIndex - 1 : items.length - 1;
      onIndexChange(newIndex);
    }
    if (key.downArrow) {
      const newIndex = selectedIndex < items.length - 1 ? selectedIndex + 1 : 0;
      onIndexChange(newIndex);
    }
    if (key.return) {
      const item = items[selectedIndex];
      if (item && !item.disabled) {
        onSelect(item.value);
      }
    }
  });
  return /* @__PURE__ */ jsx2(Box2, { flexDirection: "column", children: items.map((item, idx) => /* @__PURE__ */ jsx2(MenuItemDisplay, { item, selected: idx === selectedIndex }, item.value)) });
};
var ProviderCard = ({ provider, selected, disabled = false, docsUrl }) => /* @__PURE__ */ jsxs2(Box2, { flexDirection: "column", marginBottom: 1, children: [
  /* @__PURE__ */ jsxs2(Box2, { children: [
    /* @__PURE__ */ jsxs2(Text2, { color: selected ? colors.gold : colors.textMuted, children: [
      selected ? icons.pointer : icons.pointerEmpty,
      " "
    ] }),
    /* @__PURE__ */ jsx2(
      Text2,
      {
        color: disabled ? colors.textDim : selected ? colors.text : colors.textMuted,
        bold: selected,
        dimColor: disabled,
        children: provider.label
      }
    ),
    disabled && /* @__PURE__ */ jsx2(Text2, { color: colors.warning, children: " [Coming Soon]" })
  ] }),
  /* @__PURE__ */ jsx2(Box2, { marginLeft: 3, children: /* @__PURE__ */ jsx2(Text2, { color: disabled ? colors.textDim : colors.textMuted, dimColor: disabled, children: provider.description }) }),
  provider.baseUrl && !disabled && /* @__PURE__ */ jsx2(Box2, { marginLeft: 3, children: /* @__PURE__ */ jsx2(Text2, { color: colors.primaryBright, dimColor: true, children: provider.baseUrl }) }),
  !provider.baseUrl && docsUrl && !disabled && /* @__PURE__ */ jsx2(Box2, { marginLeft: 3, children: /* @__PURE__ */ jsx2(Text2, { color: colors.primaryBright, dimColor: true, children: docsUrl }) })
] });
var VariantCard = ({ name, provider, path: path28, selected }) => /* @__PURE__ */ jsxs2(Box2, { flexDirection: "column", marginBottom: 1, children: [
  /* @__PURE__ */ jsxs2(Box2, { children: [
    /* @__PURE__ */ jsxs2(Text2, { color: selected ? colors.gold : colors.textMuted, children: [
      selected ? icons.pointer : icons.pointerEmpty,
      " "
    ] }),
    /* @__PURE__ */ jsx2(Text2, { color: selected ? colors.text : colors.textMuted, bold: selected, children: name }),
    provider && /* @__PURE__ */ jsxs2(Text2, { color: colors.textMuted, children: [
      " (",
      provider,
      ")"
    ] })
  ] }),
  /* @__PURE__ */ jsx2(Box2, { marginLeft: 3, children: /* @__PURE__ */ jsx2(Text2, { color: colors.primaryBright, dimColor: true, children: path28 || getWrapperPath(DEFAULT_BIN_DIR, name) }) })
] });

// src/tui/components/ui/Logo.tsx
import { Box as Box3, Text as Text3 } from "ink";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var LogoBanner = () => /* @__PURE__ */ jsxs3(Box3, { flexDirection: "column", children: [
  /* @__PURE__ */ jsxs3(Text3, { children: [
    /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "   \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557" }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.gold, children: "  \u2501\u2501  " }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.logo2, bold: true, children: "M I R R O R" })
  ] }),
  /* @__PURE__ */ jsx3(Text3, { children: /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "  \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D" }) }),
  /* @__PURE__ */ jsxs3(Text3, { children: [
    /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "  \u2588\u2588\u2551     \u2588\u2588\u2551     " }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.textMuted, children: "Claude Code, Unshackled" })
  ] }),
  /* @__PURE__ */ jsxs3(Text3, { children: [
    /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "  \u2588\u2588\u2551     \u2588\u2588\u2551     " }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.gold, children: "Multi-agent orchestration. One command." })
  ] }),
  /* @__PURE__ */ jsx3(Text3, { children: /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "  \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557" }) }),
  /* @__PURE__ */ jsx3(Text3, { children: /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "   \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D" }) })
] });
var GoldDivider = ({ width = 60 }) => {
  const third = Math.floor(width / 3);
  return /* @__PURE__ */ jsxs3(Box3, { children: [
    /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "\u2501".repeat(third) }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.gold, children: "\u25C6" }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.logo2, children: "\u2501".repeat(third) }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.gold, children: "\u25C6" }),
    /* @__PURE__ */ jsx3(Text3, { color: colors.logo1, children: "\u2501".repeat(third) })
  ] });
};

// src/tui/components/ui/AsciiArt.tsx
import { Box as Box4, Text as Text4 } from "ink";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var HaikuDisplay = ({ lines }) => /* @__PURE__ */ jsxs4(Box4, { flexDirection: "column", alignItems: "center", marginY: 1, children: [
  /* @__PURE__ */ jsx4(Text4, { color: colors.textDim, children: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500" }),
  lines.map((line, i) => /* @__PURE__ */ jsx4(Text4, { color: colors.textMuted, children: line }, i)),
  /* @__PURE__ */ jsx4(Text4, { color: colors.textDim, children: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500" })
] });
var EmptyVariantsArt = () => /* @__PURE__ */ jsxs4(Box4, { flexDirection: "column", alignItems: "center", marginY: 2, children: [
  /* @__PURE__ */ jsx4(Text4, { color: colors.textDim, children: "    \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510" }),
  /* @__PURE__ */ jsx4(Text4, { color: colors.textDim, children: "    \u2502           \u2502" }),
  /* @__PURE__ */ jsx4(Text4, { color: colors.textDim, children: "    \u2502     \u2205     \u2502" }),
  /* @__PURE__ */ jsx4(Text4, { color: colors.textDim, children: "    \u2502           \u2502" }),
  /* @__PURE__ */ jsx4(Text4, { color: colors.textDim, children: "    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518" }),
  /* @__PURE__ */ jsx4(Box4, { marginTop: 1, children: /* @__PURE__ */ jsx4(Text4, { color: colors.textMuted, children: "Your mirror is empty." }) }),
  /* @__PURE__ */ jsx4(Text4, { color: colors.textMuted, children: "Create your first variant!" })
] });
var PoemDisplay = ({ lines }) => /* @__PURE__ */ jsxs4(Box4, { flexDirection: "column", alignItems: "center", marginY: 1, children: [
  /* @__PURE__ */ jsx4(Text4, { color: colors.gold, children: "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501" }),
  /* @__PURE__ */ jsx4(Box4, { flexDirection: "column", marginY: 1, children: lines.map((line, i) => /* @__PURE__ */ jsx4(Text4, { color: line === "" ? colors.textDim : colors.textMuted, children: line === "" ? " " : `   ${line}` }, i)) }),
  /* @__PURE__ */ jsx4(Text4, { color: colors.gold, children: "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501" })
] });
var FancyHeader = ({ title }) => /* @__PURE__ */ jsx4(Box4, { flexDirection: "column", marginY: 1, children: /* @__PURE__ */ jsxs4(Box4, { children: [
  /* @__PURE__ */ jsx4(Text4, { color: colors.gold, children: "\u2605 " }),
  /* @__PURE__ */ jsx4(Text4, { color: colors.textBright, bold: true, children: title })
] }) });
var RAINBOW_COLORS = ["red", "yellow", "green", "cyan", "blue", "magenta"];
var RainbowText = ({ children }) => /* @__PURE__ */ jsx4(Text4, { children: children.split("").map((char, i) => /* @__PURE__ */ jsx4(Text4, { color: RAINBOW_COLORS[i % RAINBOW_COLORS.length], children: char }, i)) });

// src/tui/content/messages.ts
var TIME_GREETINGS = {
  morning: "Good morning! Ready to create?",
  afternoon: "Good afternoon. Let's build.",
  evening: "Good evening. Time to code.",
  night: "Late night coding? Let's go."
};
var getTimeBasedGreeting = () => {
  const hour = (/* @__PURE__ */ new Date()).getHours();
  if (hour >= 2 && hour < 5) return TIME_GREETINGS.night;
  if (hour < 12) return TIME_GREETINGS.morning;
  if (hour < 18) return TIME_GREETINGS.afternoon;
  return TIME_GREETINGS.evening;
};

// src/tui/content/easter-eggs.ts
var KONAMI_CODE = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];
var MILESTONE_MESSAGES = {
  5: "5 variants! You're building an empire.",
  10: "10 variants! You must really like mirrors.",
  25: "25 variants! Are you okay? (We're impressed.)",
  50: "50 variants! This is dedication.",
  100: "100 variants! You are the mirror master."
};
var getMilestoneMessage = (variantCount) => {
  return MILESTONE_MESSAGES[variantCount] || null;
};
var isLateNight = () => {
  const hour = (/* @__PURE__ */ new Date()).getHours();
  return hour >= 2 && hour < 5;
};
var LATE_NIGHT_MESSAGE = "Late night coding? Respect. Here's your variant.";

// src/tui/screens/HomeScreen.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var HomeScreen = ({ onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const greetingRef = useRef6(getTimeBasedGreeting());
  useInput2((input, key) => {
    if (showEasterEgg) return;
    let keyName = null;
    if (key.upArrow) keyName = "up";
    else if (key.downArrow) keyName = "down";
    else if (key.leftArrow) keyName = "left";
    else if (key.rightArrow) keyName = "right";
    else if (input === "b") keyName = "b";
    else if (input === "a") keyName = "a";
    if (keyName) {
      if (KONAMI_CODE[konamiProgress] === keyName) {
        const newProgress = konamiProgress + 1;
        if (newProgress === KONAMI_CODE.length) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 3e3);
        } else {
          setKonamiProgress(newProgress);
        }
      } else if (KONAMI_CODE[0] === keyName) {
        setKonamiProgress(1);
      } else {
        setKonamiProgress(0);
      }
    }
  });
  const items = [
    { value: "quick", label: "Quick Setup", description: "Provider + API key \u2192 Ready in 30s", icon: "star" },
    { value: "create", label: "New Variant", description: "Full configuration wizard" },
    { value: "manage", label: "Manage Variants", description: "Update, remove, or inspect" },
    { value: "updateAll", label: "Update All", description: "Sync all variants to latest" },
    { value: "doctor", label: "Diagnostics", description: "Health check all variants" },
    { value: "about", label: "About", description: "Learn how CLAUDE-SNEAKPEEK works" },
    { value: "feedback", label: "Feedback", description: "Links, issues, and contributions" },
    { value: "exit", label: "Until next time", icon: "exit" }
  ];
  return /* @__PURE__ */ jsxs5(Frame, { borderColor: colors.borderFocus, children: [
    showEasterEgg ? /* @__PURE__ */ jsxs5(Box5, { flexDirection: "column", alignItems: "center", marginBottom: 1, children: [
      /* @__PURE__ */ jsx5(RainbowText, { children: "CLAUDE-SNEAKPEEK" }),
      /* @__PURE__ */ jsx5(Text5, { color: colors.gold, children: "You found the secret! \u{1F3AE}" })
    ] }) : /* @__PURE__ */ jsx5(LogoBanner, {}),
    /* @__PURE__ */ jsx5(Box5, { marginY: 1, children: /* @__PURE__ */ jsx5(GoldDivider, { width: 66 }) }),
    /* @__PURE__ */ jsxs5(Box5, { marginBottom: 1, children: [
      /* @__PURE__ */ jsxs5(Text5, { color: colors.gold, children: [
        icons.star,
        " "
      ] }),
      /* @__PURE__ */ jsx5(Text5, { color: colors.textMuted, children: greetingRef.current })
    ] }),
    /* @__PURE__ */ jsx5(Box5, { marginY: 1, children: /* @__PURE__ */ jsx5(SelectMenu, { items, selectedIndex, onIndexChange: setSelectedIndex, onSelect }) }),
    /* @__PURE__ */ jsx5(Divider, {}),
    /* @__PURE__ */ jsx5(HintBar, {})
  ] });
};

// src/tui/screens/ProviderSelectScreen.tsx
import { useState as useState2 } from "react";
import { Box as Box7, Text as Text7, useInput as useInput3 } from "ink";

// src/tui/components/ui/ScreenLayout.tsx
import { Box as Box6, Text as Text6 } from "ink";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var ScreenLayout = ({
  title,
  subtitle,
  children,
  hints,
  borderColor = colors.borderFocus,
  icon = "bullet"
}) => {
  return /* @__PURE__ */ jsxs6(Frame, { borderColor, children: [
    /* @__PURE__ */ jsxs6(Box6, { marginBottom: 1, children: [
      icon && /* @__PURE__ */ jsxs6(Text6, { color: colors.gold, bold: true, children: [
        icons[icon],
        " "
      ] }),
      /* @__PURE__ */ jsx6(Text6, { color: colors.textBright, bold: true, children: title })
    ] }),
    subtitle && /* @__PURE__ */ jsx6(Text6, { color: colors.textMuted, children: subtitle }),
    /* @__PURE__ */ jsx6(Divider, { color: colors.border }),
    /* @__PURE__ */ jsx6(Box6, { flexDirection: "column", flexGrow: 1, children }),
    /* @__PURE__ */ jsx6(Divider, {}),
    /* @__PURE__ */ jsx6(HintBar, { hints })
  ] });
};

// src/tui/content/providers.ts
var PROVIDER_EDUCATION = {
  zai: {
    headline: "GLM Coding Plan via Z.ai",
    tagline: "Gold streams, powerful reasoning",
    features: [
      "GLM-4.7 for Sonnet/Opus tasks",
      "GLM-4.5-Air for Haiku (fast) tasks",
      "Prompt pack with zai-cli routing",
      "Gold-themed interface"
    ],
    bestFor: "Heavy coding with GLM's reasoning capabilities",
    models: {
      opus: "glm-4.7",
      sonnet: "glm-4.7",
      haiku: "glm-4.5-air"
    },
    requiresMapping: false,
    hasPromptPack: true,
    setupLinks: {
      subscribe: "https://z.ai/subscribe",
      apiKey: "https://z.ai/manage-apikey/apikey-list",
      docs: "https://z.ai/docs"
    },
    setupNote: "Subscribe to the Z.ai Coding Plan, then copy your API key from the dashboard."
  },
  minimax: {
    headline: "MiniMax-M2.1 \u2014 AGI for All",
    tagline: "Coral pulses, unified model",
    features: [
      "Single model for all tiers",
      "Prompt pack with MCP tool routing",
      "MCP tools for web search & vision",
      "Coral-themed interface"
    ],
    bestFor: "Streamlined experience with one powerful model",
    models: {
      opus: "MiniMax-M2.1",
      sonnet: "MiniMax-M2.1",
      haiku: "MiniMax-M2.1"
    },
    requiresMapping: false,
    hasPromptPack: true,
    setupLinks: {
      subscribe: "https://platform.minimax.io/subscribe/coding-plan",
      apiKey: "https://platform.minimax.io/user-center/payment/coding-plan",
      docs: "https://platform.minimax.io/docs"
    },
    setupNote: "Subscribe to MiniMax Coding Plan, then get your API key from the payment page."
  },
  kimi: {
    headline: "Kimi K2.5 \u2014 Prism Vision",
    tagline: "Deep space black, refracting royal blue",
    features: [
      "Kimi K2.5 Multimodal model",
      "Instant and Thinking modes support",
      "Advanced 256K context window",
      "Prism-themed interface"
    ],
    bestFor: "Multimodal coding and complex reasoning with Moonshot AI",
    models: {
      sonnet: "kimi-k2.5",
      haiku: "kimi-k2-turbo-preview",
      opus: "kimi-k2-thinking"
    },
    requiresMapping: false,
    hasPromptPack: false,
    setupLinks: {
      subscribe: "http://kimi.com/code",
      apiKey: "https://kimi.com/code/console",
      docs: "https://www.kimi.com/code/docs/en/more/third-party-agents.html#claude-code"
    },
    setupNote: "Create Kimi (Moonshot AI) account and generate an API key from the platform console."
  },
  openrouter: {
    headline: "OpenRouter \u2014 One API, Any Model",
    tagline: "Many paths, one door",
    features: ["Access to 100+ models", "Pay-per-use pricing", "Model flexibility", "Teal-themed interface"],
    bestFor: "Trying different models without multiple accounts",
    requiresMapping: true,
    hasPromptPack: false,
    setupLinks: {
      subscribe: "https://openrouter.ai/account",
      apiKey: "https://openrouter.ai/keys",
      docs: "https://openrouter.ai/docs"
    },
    setupNote: "Create an account, add credits, then generate an API key. You must set model aliases."
  },
  ccrouter: {
    headline: "Claude Code Router \u2014 Local Model Gateway",
    tagline: "Your models, your rules",
    features: [
      "Route to local LLMs (Ollama, LM Studio) or cloud APIs",
      "Supports DeepSeek, Gemini, OpenRouter, and more",
      "Automatic routing: background tasks, reasoning, long context",
      "Models configured in ~/.claude-code-router/config.json"
    ],
    bestFor: "Local-first development with custom model routing",
    requiresMapping: false,
    hasPromptPack: false,
    setupLinks: {
      subscribe: "https://github.com/musistudio/claude-code-router#installation",
      apiKey: "https://github.com/musistudio/claude-code-router#2-configuration",
      github: "https://github.com/musistudio/claude-code-router",
      docs: "https://github.com/musistudio/claude-code-router#2-configuration"
    },
    setupNote: 'Install: npm i -g @musistudio/claude-code-router, run "ccr start". Configure models in ~/.claude-code-router/config.json'
  },
  mirror: {
    headline: "The Fastest Path to Claude Code",
    tagline: "Claude Code, Unshackled",
    features: [
      "Pure Claude \u2014 no proxy, no model changes",
      "Isolated config for experimentation",
      "Premium silver/chrome theme"
    ],
    bestFor: "Power users who want a clean, isolated Claude Code setup",
    requiresMapping: false,
    hasPromptPack: false,
    setupLinks: {
      subscribe: "https://console.anthropic.com/settings/plans",
      apiKey: "https://console.anthropic.com/settings/keys",
      docs: "https://github.com/mikekelly/claude-sneakpeek/blob/main/docs/features/mirror-claude.md"
    },
    setupNote: "Uses normal Claude authentication. Sign in via OAuth or set ANTHROPIC_API_KEY."
  }
};
var getProviderEducation = (providerKey) => {
  return PROVIDER_EDUCATION[providerKey] || null;
};

// src/tui/screens/ProviderSelectScreen.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var ProviderSelectScreen = ({ providers, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState2(0);
  const [showDetails, setShowDetails] = useState2(false);
  const currentProvider = providers[selectedIndex];
  const education = currentProvider ? getProviderEducation(currentProvider.key) : null;
  const findNextSelectable = (current, direction) => {
    let next = current;
    for (let i = 0; i < providers.length; i++) {
      next = direction === 1 ? next < providers.length - 1 ? next + 1 : 0 : next > 0 ? next - 1 : providers.length - 1;
      if (!providers[next]?.experimental) return next;
    }
    return current;
  };
  useInput3((input, key) => {
    if (key.upArrow) {
      setSelectedIndex((prev) => findNextSelectable(prev, -1));
    }
    if (key.downArrow) {
      setSelectedIndex((prev) => findNextSelectable(prev, 1));
    }
    if (key.return) {
      const provider = providers[selectedIndex];
      if (provider && !provider.experimental) {
        onSelect(provider.key);
      }
    }
    if (input === "?") {
      setShowDetails((prev) => !prev);
    }
  });
  return /* @__PURE__ */ jsxs7(
    ScreenLayout,
    {
      title: "Select Provider",
      subtitle: "Pick a provider preset for Claude Code",
      hints: [keyHints.continue, showDetails ? "? Hide details" : "? Show details"],
      children: [
        /* @__PURE__ */ jsxs7(Box7, { marginBottom: 1, flexDirection: "column", children: [
          /* @__PURE__ */ jsxs7(Text7, { color: colors.textMuted, children: [
            icons.star,
            " ",
            /* @__PURE__ */ jsx7(Text7, { color: colors.gold, children: "Mirror Claude" }),
            " is the fastest path to vanilla Claude Code"
          ] }),
          /* @__PURE__ */ jsxs7(Text7, { color: colors.textMuted, children: [
            icons.bullet,
            " Alternative providers for different models (GLM, MiniMax, etc.)"
          ] })
        ] }),
        /* @__PURE__ */ jsx7(Box7, { flexDirection: "column", marginY: 1, children: providers.map((provider, idx) => {
          const providerEducation = getProviderEducation(provider.key);
          const docsUrl = providerEducation?.setupLinks?.docs;
          return /* @__PURE__ */ jsx7(
            ProviderCard,
            {
              provider,
              selected: idx === selectedIndex && !provider.experimental,
              disabled: provider.experimental,
              docsUrl
            },
            provider.key
          );
        }) }),
        showDetails && education && /* @__PURE__ */ jsxs7(Box7, { flexDirection: "column", marginTop: 1, paddingX: 1, children: [
          /* @__PURE__ */ jsxs7(Box7, { marginBottom: 1, children: [
            /* @__PURE__ */ jsxs7(Text7, { color: colors.gold, children: [
              icons.star,
              " "
            ] }),
            /* @__PURE__ */ jsx7(Text7, { color: colors.text, bold: true, children: education.headline })
          ] }),
          /* @__PURE__ */ jsx7(Box7, { flexDirection: "column", marginLeft: 2, children: education.features.map((feature, i) => /* @__PURE__ */ jsxs7(Text7, { color: colors.textMuted, children: [
            icons.bullet,
            " ",
            feature
          ] }, i)) }),
          education.setupNote && /* @__PURE__ */ jsx7(Box7, { marginTop: 1, marginLeft: 2, children: /* @__PURE__ */ jsxs7(Text7, { color: colors.textDim, children: [
            icons.pointer,
            " ",
            /* @__PURE__ */ jsx7(Text7, { italic: true, children: education.setupNote })
          ] }) }),
          education.setupLinks && /* @__PURE__ */ jsxs7(Box7, { flexDirection: "column", marginTop: 1, marginLeft: 2, children: [
            /* @__PURE__ */ jsxs7(Text7, { color: colors.textMuted, children: [
              "Subscribe: ",
              /* @__PURE__ */ jsx7(Text7, { color: colors.primaryBright, children: education.setupLinks.subscribe })
            ] }),
            education.setupLinks.docs && /* @__PURE__ */ jsxs7(Text7, { color: colors.textMuted, children: [
              "Docs: ",
              /* @__PURE__ */ jsx7(Text7, { color: colors.primaryBright, children: education.setupLinks.docs })
            ] }),
            education.setupLinks.github && /* @__PURE__ */ jsxs7(Text7, { color: colors.textMuted, children: [
              "GitHub: ",
              /* @__PURE__ */ jsx7(Text7, { color: colors.primaryBright, children: education.setupLinks.github })
            ] })
          ] }),
          /* @__PURE__ */ jsx7(Box7, { marginTop: 1, marginLeft: 2, children: /* @__PURE__ */ jsxs7(Text7, { color: colors.textDim, children: [
            "Best for: ",
            /* @__PURE__ */ jsx7(Text7, { color: colors.text, children: education.bestFor })
          ] }) })
        ] })
      ]
    }
  );
};

// src/tui/screens/ProviderIntroScreen.tsx
import { Box as Box8, Text as Text8, useInput as useInput4 } from "ink";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var ProviderIntroScreen = ({
  providerKey,
  providerLabel,
  isQuickSetup = false,
  onContinue,
  onBack
}) => {
  const education = getProviderEducation(providerKey);
  useInput4((input, key) => {
    if (key.escape) {
      onBack();
    } else if (key.return || input === " ") {
      onContinue();
    }
  });
  const buildSteps = () => {
    const steps2 = [];
    if (providerKey === "ccrouter") {
      steps2.push("Configure router URL (default: localhost:3456)");
      if (!isQuickSetup) {
        steps2.push("Choose a visual theme");
        steps2.push("Optional: dev-browser skill");
      }
      steps2.push("Name your variant");
      steps2.push("Create!");
      return steps2;
    }
    if (providerKey === "mirror") {
      if (!isQuickSetup) {
        steps2.push("Choose a visual theme");
        steps2.push("Optional: dev-browser skill");
      }
      steps2.push("Name your variant");
      steps2.push("Create your variant");
      steps2.push("Authenticate via Claude Code (OAuth or API key)");
      return steps2;
    }
    steps2.push("Enter your API key");
    if (education?.requiresMapping) {
      steps2.push("Configure model aliases");
    }
    if (!isQuickSetup) {
      steps2.push("Choose a visual theme");
      if (education?.hasPromptPack) {
        steps2.push("Enable/disable prompt pack");
      }
      steps2.push("Optional: dev-browser skill");
      steps2.push("Optional: custom env vars");
    }
    steps2.push("Create your variant");
    return steps2;
  };
  const steps = buildSteps();
  return /* @__PURE__ */ jsxs8(
    ScreenLayout,
    {
      title: `Setting up ${providerLabel}`,
      subtitle: education?.tagline || "Configure your variant",
      hints: [keyHints.back, "Enter Continue"],
      children: [
        education?.headline && /* @__PURE__ */ jsx8(Box8, { marginBottom: 1, children: /* @__PURE__ */ jsx8(Text8, { color: colors.primaryBright, bold: true, children: education.headline }) }),
        /* @__PURE__ */ jsxs8(Box8, { flexDirection: "column", marginBottom: 1, children: [
          /* @__PURE__ */ jsx8(Text8, { color: colors.textMuted, bold: true, children: isQuickSetup ? "Quick setup \u2014 here's what we'll do:" : "Full wizard \u2014 here's what's coming:" }),
          /* @__PURE__ */ jsx8(Box8, { flexDirection: "column", marginLeft: 2, marginTop: 1, children: steps.map((step, index) => /* @__PURE__ */ jsxs8(Text8, { color: colors.text, children: [
            /* @__PURE__ */ jsxs8(Text8, { color: colors.textDim, children: [
              index + 1,
              "."
            ] }),
            " ",
            step
          ] }, index)) })
        ] }),
        education?.features && education.features.length > 0 && /* @__PURE__ */ jsxs8(Box8, { flexDirection: "column", marginTop: 1, children: [
          /* @__PURE__ */ jsx8(Text8, { color: colors.textMuted, bold: true, children: "What you get:" }),
          /* @__PURE__ */ jsx8(Box8, { flexDirection: "column", marginLeft: 2, marginTop: 1, children: education.features.slice(0, 4).map((feature, index) => /* @__PURE__ */ jsxs8(Text8, { color: colors.text, children: [
            /* @__PURE__ */ jsx8(Text8, { color: colors.success, children: "+" }),
            " ",
            feature
          ] }, index)) })
        ] }),
        education?.setupNote && /* @__PURE__ */ jsx8(Box8, { marginTop: 1, children: /* @__PURE__ */ jsx8(Text8, { color: colors.textDim, italic: true, children: education.setupNote }) }),
        education?.setupLinks?.github && /* @__PURE__ */ jsx8(Box8, { marginTop: 1, children: /* @__PURE__ */ jsxs8(Text8, { color: colors.primaryBright, children: [
          "GitHub: ",
          education.setupLinks.github
        ] }) }),
        education?.setupLinks?.docs && !education?.setupLinks?.github && /* @__PURE__ */ jsx8(Box8, { marginTop: 1, children: /* @__PURE__ */ jsxs8(Text8, { color: colors.primaryBright, children: [
          "Docs: ",
          education.setupLinks.docs
        ] }) }),
        /* @__PURE__ */ jsx8(Box8, { marginTop: 2, children: /* @__PURE__ */ jsx8(Text8, { color: colors.primaryBright, children: "Press Enter to continue \u2192" }) })
      ]
    }
  );
};

// src/tui/screens/ApiKeyScreen.tsx
import { Box as Box10, Text as Text10 } from "ink";

// src/tui/components/ui/Input.tsx
import { Box as Box9, Text as Text9 } from "ink";
import TextInput from "ink-text-input";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var TextField = ({ label, value, onChange, onSubmit, placeholder, mask, hint }) => /* @__PURE__ */ jsxs9(Box9, { flexDirection: "column", children: [
  /* @__PURE__ */ jsx9(Text9, { color: colors.textMuted, children: label }),
  /* @__PURE__ */ jsxs9(Box9, { marginTop: 1, children: [
    /* @__PURE__ */ jsxs9(Text9, { color: colors.primary, children: [
      icons.pointer,
      " "
    ] }),
    /* @__PURE__ */ jsx9(TextInput, { value, onChange, onSubmit, placeholder, mask })
  ] }),
  hint && /* @__PURE__ */ jsx9(Box9, { marginTop: 1, children: /* @__PURE__ */ jsx9(Text9, { color: colors.textMuted, dimColor: true, children: hint }) })
] });
var MaskedInput = ({ label, envVarName, value, onChange, onSubmit }) => /* @__PURE__ */ jsxs9(Box9, { flexDirection: "column", children: [
  /* @__PURE__ */ jsx9(Text9, { color: colors.textMuted, children: label }),
  /* @__PURE__ */ jsx9(Box9, { marginTop: 1, children: /* @__PURE__ */ jsxs9(Text9, { color: colors.textMuted, children: [
    envVarName,
    ": "
  ] }) }),
  /* @__PURE__ */ jsxs9(Box9, { marginTop: 1, children: [
    /* @__PURE__ */ jsxs9(Text9, { color: colors.primary, children: [
      icons.pointer,
      " "
    ] }),
    /* @__PURE__ */ jsx9(TextInput, { value, onChange, onSubmit, mask: "\u2022", placeholder: "Enter key..." })
  ] }),
  /* @__PURE__ */ jsxs9(Box9, { flexDirection: "column", marginTop: 2, children: [
    /* @__PURE__ */ jsxs9(Text9, { color: colors.textMuted, dimColor: true, children: [
      icons.bullet,
      " Stored locally in variant config"
    ] }),
    /* @__PURE__ */ jsxs9(Text9, { color: colors.textMuted, dimColor: true, children: [
      icons.bullet,
      " Never sent to external servers"
    ] })
  ] })
] });

// src/tui/screens/ApiKeyScreen.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
var PROVIDER_LINKS = {
  zai: {
    apiKey: "https://z.ai/manage-apikey/apikey-list",
    subscribe: "https://z.ai/subscribe",
    note: "Your Zai API key will be stored as ANTHROPIC_API_KEY for Claude Code compatibility."
  },
  minimax: {
    apiKey: "https://platform.minimax.io/user-center/payment/coding-plan",
    subscribe: "https://platform.minimax.io/subscribe/coding-plan",
    note: "Your MiniMax API key will be stored as ANTHROPIC_API_KEY for Claude Code compatibility."
  },
  openrouter: {
    apiKey: "https://openrouter.ai/keys",
    subscribe: "https://openrouter.ai/account",
    note: "Your OpenRouter key will be stored as ANTHROPIC_AUTH_TOKEN."
  },
  ccrouter: {
    apiKey: "https://github.com/musistudio/claude-code-router",
    subscribe: "https://github.com/musistudio/claude-code-router#installation",
    note: "No API key needed. Models are configured in ~/.claude-code-router/config.json"
  }
};
var ApiKeyScreen = ({
  providerLabel,
  providerKey,
  envVarName,
  value,
  detectedFrom,
  onChange,
  onSubmit
}) => {
  const links = providerKey ? PROVIDER_LINKS[providerKey.toLowerCase()] : null;
  return /* @__PURE__ */ jsxs10(
    ScreenLayout,
    {
      title: "API Key",
      subtitle: `Enter your ${providerLabel} API key`,
      borderColor: colors.borderGold,
      icon: "star",
      hints: [keyHints.continue, keyHints.back],
      children: [
        links && /* @__PURE__ */ jsxs10(Box10, { flexDirection: "column", marginBottom: 1, children: [
          /* @__PURE__ */ jsxs10(Box10, { marginBottom: 1, children: [
            /* @__PURE__ */ jsxs10(Text10, { color: colors.gold, children: [
              icons.star,
              " "
            ] }),
            /* @__PURE__ */ jsxs10(Text10, { color: colors.text, bold: true, children: [
              "Get Started with ",
              providerLabel
            ] })
          ] }),
          /* @__PURE__ */ jsxs10(Box10, { marginLeft: 2, flexDirection: "column", children: [
            /* @__PURE__ */ jsxs10(Text10, { color: colors.textMuted, children: [
              "1. Subscribe: ",
              /* @__PURE__ */ jsx10(Text10, { color: colors.primaryBright, children: links.subscribe })
            ] }),
            /* @__PURE__ */ jsxs10(Text10, { color: colors.textMuted, children: [
              "2. Get key: ",
              /* @__PURE__ */ jsx10(Text10, { color: colors.primaryBright, children: links.apiKey })
            ] }),
            links.setup && /* @__PURE__ */ jsxs10(Text10, { color: colors.textMuted, children: [
              "3. Setup guide: ",
              /* @__PURE__ */ jsx10(Text10, { color: colors.primaryBright, children: links.setup })
            ] })
          ] }),
          links.note && /* @__PURE__ */ jsx10(Box10, { marginTop: 1, marginLeft: 2, children: /* @__PURE__ */ jsxs10(Text10, { color: colors.textDim, dimColor: true, children: [
            icons.bullet,
            " ",
            links.note
          ] }) })
        ] }),
        !links && /* @__PURE__ */ jsx10(Box10, { marginBottom: 1, children: /* @__PURE__ */ jsxs10(Text10, { color: colors.textMuted, children: [
          icons.bullet,
          " Get your API key from your provider's dashboard"
        ] }) }),
        detectedFrom && /* @__PURE__ */ jsx10(Box10, { marginBottom: 1, children: /* @__PURE__ */ jsxs10(Text10, { color: colors.success, children: [
          icons.check,
          " Detected in environment: ",
          /* @__PURE__ */ jsx10(Text10, { bold: true, children: detectedFrom })
        ] }) }),
        /* @__PURE__ */ jsx10(Box10, { marginY: 1, children: /* @__PURE__ */ jsx10(
          MaskedInput,
          {
            label: "Authentication",
            envVarName,
            value,
            onChange,
            onSubmit
          }
        ) })
      ]
    }
  );
};

// src/tui/screens/RouterUrlScreen.tsx
import { Box as Box11, Text as Text11, useInput as useInput5 } from "ink";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
var RouterUrlScreen = ({ value, onChange, onSubmit, onBack }) => {
  useInput5((input, key) => {
    if (key.escape) {
      onBack();
    }
  });
  return /* @__PURE__ */ jsxs11(
    ScreenLayout,
    {
      title: "Router URL",
      subtitle: "Where is Claude Code Router running?",
      borderColor: colors.borderGold,
      icon: "star",
      hints: [keyHints.continue, keyHints.back],
      children: [
        /* @__PURE__ */ jsxs11(Box11, { flexDirection: "column", marginBottom: 1, children: [
          /* @__PURE__ */ jsxs11(Box11, { marginBottom: 1, children: [
            /* @__PURE__ */ jsxs11(Text11, { color: colors.gold, children: [
              icons.star,
              " "
            ] }),
            /* @__PURE__ */ jsx11(Text11, { color: colors.text, bold: true, children: "Claude Code Router" })
          ] }),
          /* @__PURE__ */ jsxs11(Box11, { marginLeft: 2, flexDirection: "column", children: [
            /* @__PURE__ */ jsx11(Text11, { color: colors.textMuted, children: "CCRouter runs locally and routes requests to your configured models." }),
            /* @__PURE__ */ jsx11(Text11, { color: colors.textMuted, children: "Default port is 3456. Change if you use a different port." })
          ] })
        ] }),
        /* @__PURE__ */ jsx11(Box11, { marginY: 1, children: /* @__PURE__ */ jsx11(
          TextField,
          {
            label: "ANTHROPIC_BASE_URL",
            value,
            onChange,
            onSubmit,
            placeholder: "http://127.0.0.1:3456",
            hint: "Press Enter to continue"
          }
        ) }),
        /* @__PURE__ */ jsx11(Box11, { marginTop: 1, children: /* @__PURE__ */ jsxs11(Text11, { color: colors.textDim, dimColor: true, children: [
          icons.bullet,
          " Models are configured in ~/.claude-code-router/config.json"
        ] }) })
      ]
    }
  );
};

// src/tui/screens/SummaryScreen.tsx
import { useState as useState3 } from "react";
import { Box as Box13 } from "ink";

// src/tui/components/ui/Typography.tsx
import { Box as Box12, Text as Text12 } from "ink";
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
var Header = ({ title, subtitle }) => /* @__PURE__ */ jsxs12(Box12, { flexDirection: "column", marginBottom: 1, children: [
  /* @__PURE__ */ jsx12(Text12, { color: colors.primary, bold: true, children: title }),
  subtitle && /* @__PURE__ */ jsx12(Text12, { color: colors.textMuted, children: subtitle })
] });
var SummaryRow = ({ label, value, labelWidth = 16 }) => /* @__PURE__ */ jsxs12(Box12, { children: [
  /* @__PURE__ */ jsx12(Box12, { width: labelWidth, children: /* @__PURE__ */ jsx12(Text12, { color: colors.textMuted, children: label }) }),
  /* @__PURE__ */ jsx12(Text12, { color: colors.text, children: value })
] });
var Code = ({ children }) => /* @__PURE__ */ jsxs12(Text12, { color: colors.primary, bold: true, children: [
  "$ ",
  children
] });

// src/tui/screens/SummaryScreen.tsx
import { Fragment, jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
var SummaryScreen = ({ data, onConfirm, onBack, onCancel }) => {
  const [selectedIndex, setSelectedIndex] = useState3(0);
  const actions = [
    { value: "confirm", label: "Create Variant", icon: "star" },
    { value: "back", label: "Back", description: "Modify settings" },
    { value: "cancel", label: "Cancel", icon: "exit" }
  ];
  const handleSelect = (value) => {
    if (value === "confirm") onConfirm();
    if (value === "back") onBack();
    if (value === "cancel") onCancel();
  };
  return /* @__PURE__ */ jsxs13(ScreenLayout, { title: "Review Configuration", subtitle: "Confirm settings before creating variant", children: [
    /* @__PURE__ */ jsxs13(Section, { title: "Identity", children: [
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Name", value: data.name }),
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Command", value: `$ ${data.name}` }),
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Provider", value: data.providerLabel })
    ] }),
    /* @__PURE__ */ jsxs13(Section, { title: "Connection", children: [
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Base URL", value: data.baseUrl || "(default)" }),
      /* @__PURE__ */ jsx13(SummaryRow, { label: "API Key", value: data.apiKey ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "(not set)" }),
      data.apiKeySource && /* @__PURE__ */ jsx13(SummaryRow, { label: "API key source", value: data.apiKeySource }),
      (data.modelSonnet || data.modelOpus || data.modelHaiku) && /* @__PURE__ */ jsxs13(Fragment, { children: [
        /* @__PURE__ */ jsx13(SummaryRow, { label: "Model (Sonnet)", value: data.modelSonnet || "(unset)" }),
        /* @__PURE__ */ jsx13(SummaryRow, { label: "Model (Opus)", value: data.modelOpus || "(unset)" }),
        /* @__PURE__ */ jsx13(SummaryRow, { label: "Model (Haiku)", value: data.modelHaiku || "(unset)" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs13(Section, { title: "Installation", children: [
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Package", value: data.npmPackage }),
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Version", value: data.npmVersion }),
      /* @__PURE__ */ jsx13(
        SummaryRow,
        {
          label: "Prompt pack",
          value: data.usePromptPack ? data.providerKey === "zai" ? "on (zai-cli routing)" : data.providerKey === "minimax" ? "on (MCP routing)" : "on" : "off"
        }
      ),
      /* @__PURE__ */ jsx13(SummaryRow, { label: "dev-browser skill", value: data.installSkill ? "on" : "off" }),
      data.teamModeSupported && /* @__PURE__ */ jsx13(
        SummaryRow,
        {
          label: "Team mode",
          value: data.enableTeamMode ? "on (orchestrator skill, TodoWrite blocked)" : "off"
        }
      ),
      data.providerKey === "zai" && /* @__PURE__ */ jsx13(SummaryRow, { label: "Shell env", value: data.shellEnv ? "write Z_AI_API_KEY" : "manual" })
    ] }),
    /* @__PURE__ */ jsxs13(Section, { title: "Paths", children: [
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Root", value: data.rootDir }),
      /* @__PURE__ */ jsx13(SummaryRow, { label: "Wrapper", value: getWrapperPath(data.binDir, data.name) })
    ] }),
    /* @__PURE__ */ jsx13(Box13, { marginY: 1, children: /* @__PURE__ */ jsx13(
      SelectMenu,
      {
        items: actions,
        selectedIndex,
        onIndexChange: setSelectedIndex,
        onSelect: handleSelect
      }
    ) })
  ] });
};

// src/tui/screens/ProgressScreen.tsx
import { useEffect as useEffect7, useMemo, useState as useState5 } from "react";
import { Box as Box15, Text as Text14 } from "ink";

// src/tui/components/ui/Progress.tsx
import { useState as useState4, useEffect as useEffect6 } from "react";
import { Box as Box14, Text as Text13, useStdout } from "ink";
import { jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
var useSpinner = (interval = 80) => {
  const [frame, setFrame] = useState4(0);
  useEffect6(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % spinnerFrames.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);
  return spinnerFrames[frame];
};
var ProgressBar = ({ percent, width: customWidth, showPercent = true }) => {
  const { stdout } = useStdout();
  const maxWidth = customWidth || (stdout?.columns ? Math.min(stdout.columns - 20, 50) : 40);
  const clampedPercent = Math.max(0, Math.min(100, percent));
  const filled = Math.floor(clampedPercent / 100 * maxWidth);
  const empty = maxWidth - filled;
  return /* @__PURE__ */ jsxs14(Box14, { children: [
    /* @__PURE__ */ jsx14(Text13, { color: colors.primary, children: icons.progressFull.repeat(filled) }),
    /* @__PURE__ */ jsx14(Text13, { color: colors.textMuted, children: icons.progressEmpty.repeat(empty) }),
    showPercent && /* @__PURE__ */ jsxs14(Text13, { color: colors.text, children: [
      " ",
      Math.round(clampedPercent),
      "%"
    ] })
  ] });
};
var Spinner = ({ label }) => {
  const frame = useSpinner();
  return /* @__PURE__ */ jsxs14(Box14, { children: [
    /* @__PURE__ */ jsxs14(Text13, { color: colors.primary, children: [
      frame,
      " "
    ] }),
    label && /* @__PURE__ */ jsx14(Text13, { color: colors.text, children: label })
  ] });
};
var StepList = ({ steps }) => {
  const spinner = useSpinner();
  return /* @__PURE__ */ jsx14(Box14, { flexDirection: "column", children: steps.map((step, idx) => {
    let icon;
    let color;
    switch (step.status) {
      case "complete":
        icon = icons.check;
        color = colors.success;
        break;
      case "active":
        icon = spinner;
        color = colors.primary;
        break;
      case "error":
        icon = icons.cross;
        color = colors.error;
        break;
      default:
        icon = icons.bullet;
        color = colors.textMuted;
    }
    return /* @__PURE__ */ jsxs14(Box14, { children: [
      /* @__PURE__ */ jsxs14(Text13, { color, children: [
        icon,
        " "
      ] }),
      /* @__PURE__ */ jsx14(Text13, { color: step.status === "pending" ? colors.textMuted : colors.text, children: step.label })
    ] }, idx);
  }) });
};
var HealthCheck = ({ name, ok, details }) => /* @__PURE__ */ jsxs14(Box14, { flexDirection: "column", marginBottom: 1, children: [
  /* @__PURE__ */ jsxs14(Box14, { children: [
    /* @__PURE__ */ jsxs14(Text13, { color: ok ? colors.success : colors.warning, children: [
      ok ? icons.check : icons.warning,
      " "
    ] }),
    /* @__PURE__ */ jsx14(Text13, { color: colors.text, bold: true, children: name }),
    /* @__PURE__ */ jsxs14(Text13, { color: ok ? colors.success : colors.warning, children: [
      " ",
      ok ? "OK" : "Issues"
    ] })
  ] }),
  details && /* @__PURE__ */ jsx14(Box14, { marginLeft: 3, children: /* @__PURE__ */ jsxs14(Text13, { color: colors.textMuted, dimColor: true, children: [
    "Binary: ",
    details.binary ? icons.check : icons.cross,
    "  ",
    "Wrapper: ",
    details.wrapper ? icons.check : icons.cross,
    "  ",
    "Config: ",
    details.config ? icons.check : icons.cross
  ] }) })
] });

// src/tui/screens/ProgressScreen.tsx
import { jsx as jsx15, jsxs as jsxs15 } from "react/jsx-runtime";
var ProgressScreen = ({ title, lines, variantName }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState5(0);
  useEffect7(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - start) / 1e3));
    }, 250);
    return () => clearInterval(timer);
  }, []);
  const steps = useMemo(
    () => lines.map((line, idx) => ({
      label: line,
      status: idx === lines.length - 1 ? "active" : "complete"
    })),
    [lines]
  );
  const estimatedTotalSteps = 10;
  const progress = lines.length === 0 ? Math.min(15, elapsedSeconds * 3) : Math.min(95, Math.round(steps.length / estimatedTotalSteps * 90) + 5);
  const elapsedLabel = elapsedSeconds < 60 ? `${elapsedSeconds}s` : `${Math.floor(elapsedSeconds / 60)}m ${elapsedSeconds % 60}s`;
  return /* @__PURE__ */ jsx15(
    ScreenLayout,
    {
      title: variantName ? `Creating: ${variantName}` : title,
      subtitle: "Please wait...",
      hints: ["Please keep this window open"],
      children: /* @__PURE__ */ jsxs15(Box15, { flexDirection: "column", marginY: 1, children: [
        /* @__PURE__ */ jsx15(Box15, { marginBottom: 1, children: /* @__PURE__ */ jsx15(ProgressBar, { percent: progress }) }),
        /* @__PURE__ */ jsxs15(Text14, { color: colors.textMuted, dimColor: true, children: [
          lines.length > 0 ? `Steps: ${lines.length}` : "Initializing...",
          " \xB7 Elapsed: ",
          elapsedLabel
        ] }),
        steps.length > 0 ? /* @__PURE__ */ jsx15(StepList, { steps }) : /* @__PURE__ */ jsx15(Spinner, { label: "Initializing..." })
      ] })
    }
  );
};

// src/tui/screens/CompletionScreen.tsx
import { useMemo as useMemo2, useState as useState6, useRef as useRef7 } from "react";
import { Box as Box16, Text as Text15, useStdout as useStdout2 } from "ink";

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

// src/tui/screens/CompletionScreen.tsx
import { jsx as jsx16, jsxs as jsxs16 } from "react/jsx-runtime";
var CompletionScreen = ({
  title,
  lines,
  summary,
  nextSteps: _nextSteps,
  help: _help,
  variantName,
  wrapperPath,
  configPath,
  variantPath: _variantPath,
  providerKey,
  variantCount,
  onDone
}) => {
  const [selectedIndex, setSelectedIndex] = useState6(0);
  const { stdout } = useStdout2();
  const haikuRef = useRef7(getRandomHaiku(providerKey));
  const milestoneMessage = variantCount ? getMilestoneMessage(variantCount) : null;
  const lateNightActive = isLateNight();
  const wrapText = (text, width) => {
    if (text.length <= width) return [text];
    const words = text.split(" ");
    const lines2 = [];
    let current = "";
    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (next.length > width) {
        if (current) {
          lines2.push(current);
          current = word;
        } else {
          lines2.push(word.slice(0, width));
          current = word.slice(width);
        }
      } else {
        current = next;
      }
    }
    if (current) lines2.push(current);
    return lines2;
  };
  const maxWidth = useMemo2(() => {
    const columns = stdout?.columns ?? 80;
    return Math.min(columns - 10, 72);
  }, [stdout?.columns]);
  const actions = [
    { value: "home", label: "Back to Home" },
    { value: "exit", label: "Exit", icon: "exit" }
  ];
  const subtitleText = variantName ? `Variant "${variantName}" created` : title;
  return /* @__PURE__ */ jsxs16(ScreenLayout, { title: `${icons.check} Success!`, subtitle: subtitleText, borderColor: colors.success, icon: null, children: [
    milestoneMessage && /* @__PURE__ */ jsx16(Box16, { justifyContent: "center", marginY: 1, children: /* @__PURE__ */ jsx16(Text15, { color: colors.gold, children: milestoneMessage }) }),
    lateNightActive && !milestoneMessage && /* @__PURE__ */ jsx16(Box16, { justifyContent: "center", marginY: 1, children: /* @__PURE__ */ jsx16(Text15, { color: colors.textMuted, children: LATE_NIGHT_MESSAGE }) }),
    /* @__PURE__ */ jsxs16(Box16, { flexDirection: "column", marginY: 1, children: [
      variantName && /* @__PURE__ */ jsxs16(Box16, { flexDirection: "column", marginBottom: 1, children: [
        /* @__PURE__ */ jsx16(Text15, { color: colors.text, children: "Run your new variant:" }),
        /* @__PURE__ */ jsx16(Box16, { marginTop: 1, marginLeft: 2, children: /* @__PURE__ */ jsx16(Code, { children: variantName }) })
      ] }),
      (wrapperPath || configPath) && /* @__PURE__ */ jsxs16(Box16, { flexDirection: "column", marginTop: 1, children: [
        /* @__PURE__ */ jsx16(Text15, { color: colors.textMuted, bold: true, children: "Paths:" }),
        /* @__PURE__ */ jsxs16(Box16, { flexDirection: "column", marginLeft: 2, children: [
          wrapperPath && /* @__PURE__ */ jsx16(SummaryRow, { label: "Wrapper", value: wrapperPath }),
          configPath && /* @__PURE__ */ jsx16(SummaryRow, { label: "Config", value: configPath })
        ] })
      ] }),
      summary && summary.length > 0 && /* @__PURE__ */ jsxs16(Box16, { flexDirection: "column", marginTop: 1, children: [
        /* @__PURE__ */ jsxs16(Text15, { color: colors.gold, bold: true, children: [
          icons.star,
          " What we built together"
        ] }),
        /* @__PURE__ */ jsx16(Box16, { flexDirection: "column", marginLeft: 2, children: summary.slice(0, 5).flatMap((line, idx) => {
          const wrapped = wrapText(line, maxWidth - 4);
          return wrapped.map((part, partIdx) => /* @__PURE__ */ jsx16(Text15, { color: colors.textMuted, children: partIdx === 0 ? `\u2022 ${part}` : `  ${part}` }, `${idx}-${partIdx}`));
        }) })
      ] }),
      lines.length > 0 && !lines[0]?.includes("Variant created") && !summary && /* @__PURE__ */ jsx16(Box16, { flexDirection: "column", marginTop: 1, children: lines.flatMap((line, idx) => {
        const wrapped = wrapText(line, maxWidth);
        return wrapped.map((part, partIdx) => /* @__PURE__ */ jsx16(Text15, { color: colors.textMuted, children: part }, `${idx}-${partIdx}`));
      }) })
    ] }),
    variantName && /* @__PURE__ */ jsx16(HaikuDisplay, { lines: haikuRef.current }),
    /* @__PURE__ */ jsx16(Box16, { marginY: 1, children: /* @__PURE__ */ jsx16(SelectMenu, { items: actions, selectedIndex, onIndexChange: setSelectedIndex, onSelect: onDone }) })
  ] });
};

// src/tui/screens/VariantListScreen.tsx
import { useState as useState7 } from "react";
import { Box as Box17, Text as Text16, useInput as useInput6 } from "ink";
import { jsx as jsx17, jsxs as jsxs17 } from "react/jsx-runtime";
var VariantListScreen = ({ variants, onSelect, onBack }) => {
  const [selectedIndex, setSelectedIndex] = useState7(0);
  const totalItems = variants.length + 1;
  useInput6((input, key) => {
    if (key.upArrow) {
      setSelectedIndex((prev) => prev > 0 ? prev - 1 : totalItems - 1);
    }
    if (key.downArrow) {
      setSelectedIndex((prev) => prev < totalItems - 1 ? prev + 1 : 0);
    }
    if (key.return) {
      if (selectedIndex === variants.length) {
        onBack();
      } else if (variants[selectedIndex]) {
        onSelect(variants[selectedIndex].name);
      }
    }
    if (key.escape) {
      onBack();
    }
  });
  const isBackSelected = selectedIndex === variants.length;
  return /* @__PURE__ */ jsx17(ScreenLayout, { title: "Manage Variants", subtitle: "Select a variant to manage", children: /* @__PURE__ */ jsxs17(Box17, { flexDirection: "column", marginY: 1, children: [
    variants.length === 0 ? /* @__PURE__ */ jsx17(EmptyVariantsArt, {}) : variants.map((variant, idx) => /* @__PURE__ */ jsx17(
      VariantCard,
      {
        name: variant.name,
        provider: variant.provider,
        path: variant.wrapperPath,
        selected: idx === selectedIndex
      },
      variant.name
    )),
    /* @__PURE__ */ jsxs17(Box17, { marginTop: 1, children: [
      /* @__PURE__ */ jsxs17(Text16, { color: isBackSelected ? colors.primary : colors.textMuted, children: [
        isBackSelected ? icons.pointer : icons.pointerEmpty,
        " "
      ] }),
      /* @__PURE__ */ jsxs17(Text16, { color: isBackSelected ? colors.text : colors.textMuted, bold: isBackSelected, children: [
        "Back ",
        icons.arrowLeft
      ] })
    ] })
  ] }) });
};

// src/tui/screens/VariantActionsScreen.tsx
import { useState as useState8 } from "react";
import { Box as Box18 } from "ink";
import { jsx as jsx18, jsxs as jsxs18 } from "react/jsx-runtime";
var MODEL_MAPPING_PROVIDERS = ["openrouter", "ccrouter"];
var VariantActionsScreen = ({
  meta,
  onUpdate,
  onTweak,
  onRemove,
  onConfigureModels,
  onToggleTeamMode,
  teamModeSupported = true,
  onBack
}) => {
  const [selectedIndex, setSelectedIndex] = useState8(0);
  const requiresModelMapping = meta.provider && MODEL_MAPPING_PROVIDERS.includes(meta.provider);
  const teamModeAction = teamModeSupported && onToggleTeamMode ? meta.teamModeEnabled ? { value: "team-mode", label: "Disable Team Mode", description: "Remove multi-agent task tools" } : {
    value: "team-mode",
    label: "Enable Team Mode",
    description: "Add multi-agent task tools",
    icon: "star"
  } : null;
  const actions = [
    { value: "update", label: "Update", description: "Re-sync binary + patches" },
    ...requiresModelMapping && onConfigureModels ? [{ value: "models", label: "Configure Models", description: "Edit Opus/Sonnet/Haiku mapping" }] : [],
    ...teamModeAction ? [teamModeAction] : [],
    { value: "tweak", label: "Customize", description: "Open tweakcc" },
    { value: "remove", label: "Remove", description: "Delete variant", icon: "exit" },
    { value: "back", label: "Back", icon: "back" }
  ];
  const handleSelect = (value) => {
    if (value === "update") onUpdate();
    if (value === "models" && onConfigureModels) onConfigureModels();
    if (value === "team-mode" && onToggleTeamMode) onToggleTeamMode();
    if (value === "tweak") onTweak();
    if (value === "remove") onRemove();
    if (value === "back") onBack();
  };
  const subtitle = meta.provider ? `Provider: ${meta.provider}` : void 0;
  return /* @__PURE__ */ jsxs18(ScreenLayout, { title: meta.name, subtitle, icon: null, children: [
    /* @__PURE__ */ jsxs18(Section, { title: "Details", children: [
      /* @__PURE__ */ jsx18(SummaryRow, { label: "Install", value: "NPM (cli.js)" }),
      /* @__PURE__ */ jsx18(SummaryRow, { label: "Binary", value: meta.binaryPath }),
      /* @__PURE__ */ jsx18(SummaryRow, { label: "Config", value: meta.configDir }),
      /* @__PURE__ */ jsx18(SummaryRow, { label: "Wrapper", value: meta.wrapperPath }),
      teamModeSupported && /* @__PURE__ */ jsx18(SummaryRow, { label: "Team Mode", value: meta.teamModeEnabled ? "Enabled" : "Disabled" })
    ] }),
    /* @__PURE__ */ jsx18(Box18, { marginY: 1, children: /* @__PURE__ */ jsx18(
      SelectMenu,
      {
        items: actions,
        selectedIndex,
        onIndexChange: setSelectedIndex,
        onSelect: handleSelect
      }
    ) })
  ] });
};

// src/tui/screens/DiagnosticsScreen.tsx
import { Box as Box19, Text as Text17, useInput as useInput7 } from "ink";
import { jsx as jsx19, jsxs as jsxs19 } from "react/jsx-runtime";
var DiagnosticsScreen = ({ report, onDone }) => {
  useInput7((input, key) => {
    if (key.return || key.escape) {
      onDone();
    }
  });
  const healthyCount = report.filter((r) => r.ok).length;
  const issueCount = report.length - healthyCount;
  const borderColor = issueCount > 0 ? colors.warning : colors.success;
  return /* @__PURE__ */ jsxs19(
    ScreenLayout,
    {
      title: "Diagnostics",
      subtitle: "Health check results",
      borderColor,
      hints: [keyHints.select + " Back to Home"],
      children: [
        /* @__PURE__ */ jsx19(Box19, { flexDirection: "column", marginY: 1, children: report.length === 0 ? /* @__PURE__ */ jsx19(EmptyVariantsArt, {}) : report.map((item) => /* @__PURE__ */ jsx19(HealthCheck, { name: item.name, ok: item.ok, details: item.details }, item.name)) }),
        /* @__PURE__ */ jsxs19(Box19, { marginTop: 1, children: [
          /* @__PURE__ */ jsxs19(Text17, { color: colors.textMuted, children: [
            "Total: ",
            report.length
          ] }),
          /* @__PURE__ */ jsx19(Text17, { color: colors.textMuted, children: " | " }),
          /* @__PURE__ */ jsxs19(Text17, { color: colors.success, children: [
            "Healthy: ",
            healthyCount
          ] }),
          /* @__PURE__ */ jsx19(Text17, { color: colors.textMuted, children: " | " }),
          /* @__PURE__ */ jsxs19(Text17, { color: issueCount > 0 ? colors.warning : colors.textMuted, children: [
            "Issues: ",
            issueCount
          ] })
        ] })
      ]
    }
  );
};

// src/tui/screens/ModelConfigScreen.tsx
import React10, { useState as useState9 } from "react";
import { Box as Box20, Text as Text18, useInput as useInput8 } from "ink";
import { jsx as jsx20, jsxs as jsxs20 } from "react/jsx-runtime";
var MODEL_FIELDS = [
  {
    key: "opus",
    label: "Opus (most capable)",
    description: "Used for complex reasoning tasks"
  },
  {
    key: "sonnet",
    label: "Sonnet (balanced)",
    description: "Default model for most tasks"
  },
  {
    key: "haiku",
    label: "Haiku (fastest)",
    description: "Used for quick tasks and subagents"
  }
];
function getPlaceholder(providerKey, model) {
  const placeholders = {
    openrouter: {
      opus: "anthropic/claude-3-opus",
      sonnet: "anthropic/claude-3.5-sonnet",
      haiku: "anthropic/claude-3-haiku"
    },
    ccrouter: {
      opus: "deepseek,deepseek-reasoner",
      sonnet: "deepseek,deepseek-chat",
      haiku: "ollama,qwen2.5-coder:latest"
    }
  };
  const providerPlaceholders = placeholders[providerKey || ""] || placeholders.ccrouter;
  return providerPlaceholders[model] || "model-name";
}
var ModelConfigScreen = ({
  title = "Model Configuration",
  subtitle = "Map Claude Code model aliases to your provider models",
  providerKey,
  opusValue,
  sonnetValue,
  haikuValue,
  onOpusChange,
  onSonnetChange,
  onHaikuChange,
  onComplete,
  onBack
}) => {
  const [activeField, setActiveField] = useState9(0);
  const [inputBuffer, setInputBuffer] = useState9("");
  const values = [opusValue, sonnetValue, haikuValue];
  const setters = [onOpusChange, onSonnetChange, onHaikuChange];
  React10.useEffect(() => {
    setInputBuffer(values[activeField] || "");
  }, [activeField, opusValue, sonnetValue, haikuValue]);
  useInput8((input, key) => {
    if (key.tab) {
      setters[activeField](inputBuffer);
      setActiveField((prev) => (prev + 1) % 3);
      return;
    }
    if (key.shift && key.tab) {
      setters[activeField](inputBuffer);
      setActiveField((prev) => (prev - 1 + 3) % 3);
      return;
    }
    if (key.upArrow) {
      setters[activeField](inputBuffer);
      setActiveField((prev) => (prev - 1 + 3) % 3);
      return;
    }
    if (key.downArrow) {
      setters[activeField](inputBuffer);
      setActiveField((prev) => (prev + 1) % 3);
      return;
    }
    if (key.return) {
      setters[activeField](inputBuffer);
      const finalValues = [...values];
      finalValues[activeField] = inputBuffer;
      if (finalValues.every((v) => v.trim())) {
        onComplete();
      }
      return;
    }
    if (key.escape) {
      onBack?.();
      return;
    }
    if (key.backspace || key.delete) {
      setInputBuffer((prev) => prev.slice(0, -1));
      return;
    }
    if (input && !key.ctrl && !key.meta) {
      setInputBuffer((prev) => prev + input);
    }
  });
  const allFilled = values.every((v) => v.trim());
  return /* @__PURE__ */ jsxs20(
    ScreenLayout,
    {
      title,
      subtitle,
      hints: [keyHints.navigate, "Tab Next field", "Enter Submit", keyHints.back],
      children: [
        /* @__PURE__ */ jsx20(Box20, { flexDirection: "column", marginBottom: 1, children: /* @__PURE__ */ jsx20(Text18, { color: colors.textMuted, children: "Claude Code uses model aliases. Map these to your provider's actual model names." }) }),
        providerKey === "openrouter" && /* @__PURE__ */ jsxs20(Box20, { flexDirection: "column", marginBottom: 1, children: [
          /* @__PURE__ */ jsx20(Text18, { color: colors.textMuted, children: "Browse OpenRouter models:" }),
          /* @__PURE__ */ jsxs20(Box20, { marginLeft: 2, flexDirection: "column", children: [
            /* @__PURE__ */ jsx20(Text18, { color: colors.primaryBright, children: "Free: https://openrouter.ai/models?max_price=0&order=top-weekly" }),
            /* @__PURE__ */ jsx20(Text18, { color: colors.primaryBright, children: "Paid: https://openrouter.ai/models?order=top-weekly" })
          ] }),
          /* @__PURE__ */ jsx20(Box20, { marginTop: 1, children: /* @__PURE__ */ jsx20(Text18, { color: colors.warning, children: '\u26A0 Not all models work with Claude Code. If issues occur, use "claude-sneakpeek update" to switch models.' }) })
        ] }),
        /* @__PURE__ */ jsx20(Box20, { flexDirection: "column", marginY: 1, children: MODEL_FIELDS.map((field, idx) => {
          const isActive = idx === activeField;
          const value = idx === activeField ? inputBuffer : values[idx];
          const placeholder = getPlaceholder(providerKey, field.key);
          return /* @__PURE__ */ jsxs20(Box20, { flexDirection: "column", marginBottom: 1, children: [
            /* @__PURE__ */ jsx20(Box20, { children: /* @__PURE__ */ jsxs20(Text18, { color: isActive ? colors.gold : colors.textMuted, bold: isActive, children: [
              isActive ? "\u25B6 " : "  ",
              field.label
            ] }) }),
            /* @__PURE__ */ jsx20(Box20, { marginLeft: 2, children: /* @__PURE__ */ jsx20(Text18, { color: colors.textDim, children: field.description }) }),
            /* @__PURE__ */ jsxs20(Box20, { marginLeft: 2, marginTop: 0, children: [
              /* @__PURE__ */ jsx20(Text18, { color: colors.border, children: "[" }),
              /* @__PURE__ */ jsx20(Text18, { color: isActive ? colors.text : colors.textMuted, children: value || (isActive ? "" : placeholder) }),
              isActive && /* @__PURE__ */ jsx20(Text18, { color: colors.primary, children: "\u2502" }),
              /* @__PURE__ */ jsx20(Text18, { color: colors.border, children: "]" }),
              !value && !isActive && /* @__PURE__ */ jsx20(Text18, { color: colors.textDim, children: " (placeholder)" })
            ] })
          ] }, field.key);
        }) }),
        /* @__PURE__ */ jsx20(Box20, { marginTop: 1, children: allFilled ? /* @__PURE__ */ jsx20(Text18, { color: colors.success, children: "All models configured. Press Enter to continue." }) : /* @__PURE__ */ jsx20(Text18, { color: colors.textMuted, children: "Fill all fields, then press Enter to continue." }) })
      ]
    }
  );
};

// src/tui/screens/EnvEditorScreen.tsx
import { useState as useState10 } from "react";
import { Box as Box21, Text as Text19, useInput as useInput9 } from "ink";
import { jsx as jsx21, jsxs as jsxs21 } from "react/jsx-runtime";
var EnvEditorScreen = ({ envEntries, onAdd, onDone }) => {
  const [inputBuffer, setInputBuffer] = useState10("");
  useInput9((input, key) => {
    if (key.return) {
      const trimmed = inputBuffer.trim();
      if (!trimmed) {
        onDone();
        return;
      }
      onAdd(trimmed);
      setInputBuffer("");
      return;
    }
    if (key.escape) {
      onDone();
      return;
    }
    if (key.backspace || key.delete) {
      setInputBuffer((prev) => prev.slice(0, -1));
      return;
    }
    if (input && !key.ctrl && !key.meta) {
      setInputBuffer((prev) => prev + input);
    }
  });
  return /* @__PURE__ */ jsxs21(
    ScreenLayout,
    {
      title: "Custom Environment",
      subtitle: "Auto-injected when running your variant",
      hints: [keyHints.continue, "Empty line to finish", keyHints.back],
      children: [
        /* @__PURE__ */ jsxs21(Box21, { flexDirection: "column", marginBottom: 1, children: [
          /* @__PURE__ */ jsx21(Text19, { color: colors.textMuted, children: "These environment variables will be auto-injected when running your variant." }),
          /* @__PURE__ */ jsx21(Text19, { color: colors.textDim, children: "Docs: https://code.claude.com/docs/en/settings#environment-variables" })
        ] }),
        /* @__PURE__ */ jsx21(Box21, { marginBottom: 1, children: /* @__PURE__ */ jsxs21(Text19, { color: colors.textMuted, children: [
          icons.bullet,
          " Format: KEY=VALUE (e.g., MY_VAR=my_value)"
        ] }) }),
        /* @__PURE__ */ jsxs21(Box21, { flexDirection: "column", marginY: 1, children: [
          /* @__PURE__ */ jsx21(Text19, { color: colors.textMuted, bold: true, children: "Current entries:" }),
          /* @__PURE__ */ jsx21(Box21, { flexDirection: "column", marginTop: 1, marginLeft: 2, children: envEntries.length === 0 ? /* @__PURE__ */ jsx21(Text19, { color: colors.textDim, children: "(none)" }) : envEntries.map((entry) => /* @__PURE__ */ jsxs21(Text19, { color: colors.text, children: [
            icons.check,
            " ",
            entry
          ] }, entry)) })
        ] }),
        /* @__PURE__ */ jsxs21(Box21, { flexDirection: "column", marginY: 1, children: [
          /* @__PURE__ */ jsx21(Text19, { color: colors.textMuted, bold: true, children: "Add entry:" }),
          /* @__PURE__ */ jsxs21(Box21, { marginTop: 1, children: [
            /* @__PURE__ */ jsxs21(Text19, { color: colors.primary, children: [
              icons.pointer,
              " "
            ] }),
            /* @__PURE__ */ jsx21(Text19, { color: colors.text, children: inputBuffer }),
            /* @__PURE__ */ jsx21(Text19, { color: colors.primary, children: "\u2502" })
          ] })
        ] }),
        /* @__PURE__ */ jsx21(Box21, { marginTop: 1, children: /* @__PURE__ */ jsx21(Text19, { color: colors.textDim, children: "Press Enter on empty line to finish adding entries." }) })
      ]
    }
  );
};

// src/tui/screens/AboutScreen.tsx
import { useState as useState11 } from "react";
import { Box as Box22, Text as Text20, useInput as useInput10 } from "ink";

// src/tui/content/poems.ts
var MIRROR_POEM = {
  title: "The Mirror",
  lines: [
    "In the mirror's edge,",
    "reflections multiply\u2014",
    "each one its own world,",
    "its own sky.",
    "",
    "One command, one key,",
    "a door opens wide.",
    "Choose your provider,",
    "let the models guide.",
    "",
    "Zai glows golden,",
    "MiniMax burns bright,",
    "OpenRouter waits\u2014",
    "paths in the night.",
    "",
    "Your code, your choice,",
    "your variants to keep.",
    "The mirror awakens",
    "what was once asleep."
  ]
};

// src/tui/content/education.ts
import path27 from "node:path";
var ROOT_HINT = path27.join(DEFAULT_ROOT, "<name>");
var WRAPPER_HINT = getWrapperPath(DEFAULT_BIN_DIR, "<name>");
var EDUCATION = {
  whatIsCcMirror: {
    title: "What is CLAUDE-SNEAKPEEK?",
    brief: "Create isolated Claude Code variants with custom providers.",
    detailed: [
      "CLAUDE-SNEAKPEEK creates isolated Claude Code installations that connect to",
      "different AI providers. Each variant has its own configuration, theme,",
      "and settings\u2014completely independent from your main Claude Code.",
      "",
      'Think of it as having multiple Claude Code "accounts", each pointing',
      "to a different AI backend: Z.ai, MiniMax, OpenRouter, or your own."
    ]
  },
  whyVariants: {
    title: "Why Variants?",
    brief: "Keep different AI providers separate and organized.",
    points: [
      "Run Z.ai GLM-4.7 and MiniMax-M2.1 side-by-side",
      "Experiment with OpenRouter without affecting your main setup",
      "Keep work projects separate from personal experimentation",
      "Try new models without risk\u2014just create a new variant",
      "Each variant has isolated config, history, and MCP servers"
    ]
  },
  whatHappens: {
    title: "What Happens During Setup?",
    brief: "Four steps to a working variant.",
    steps: [
      {
        step: 1,
        title: "Creates isolated directory",
        detail: `${ROOT_HINT} with its own config and data`
      },
      {
        step: 2,
        title: "Installs Claude Code",
        detail: "Fresh npm install in the variant directory"
      },
      {
        step: 3,
        title: "Generates wrapper script",
        detail: `${WRAPPER_HINT} pointing to your provider`
      },
      {
        step: 4,
        title: "Applies theming (optional)",
        detail: "tweakcc patches for provider-specific look & feel"
      }
    ]
  },
  modelAliases: {
    title: "What are Model Aliases?",
    brief: "Claude Code uses 3 internal model tiers.",
    explanation: [
      "Claude Code internally uses three model aliases:",
      "",
      "  Opus   \u2192 Complex reasoning, architecture, long tasks",
      "  Sonnet \u2192 Default for most coding tasks",
      "  Haiku  \u2192 Quick tasks, subagents, fast iteration",
      "",
      "When using providers like OpenRouter or LiteLLM, you map",
      "these aliases to actual model names (e.g., claude-3-opus)."
    ]
  },
  isolation: {
    title: "How Isolation Works",
    brief: "Each variant is completely separate.",
    details: [
      "Every variant gets its own:",
      "",
      "  \u2022 CLAUDE_CONFIG_DIR  \u2192 settings, MCP servers, OAuth",
      "  \u2022 TWEAKCC_CONFIG_DIR \u2192 theme customizations",
      "  \u2022 npm installation   \u2192 Claude Code binary",
      "  \u2022 API credentials    \u2192 stored in settings.json",
      "",
      "Running `zai` vs `minimax` uses completely different",
      "configurations\u2014they never interfere with each other."
    ]
  }
};

// src/tui/screens/AboutScreen.tsx
import { Fragment as Fragment2, jsx as jsx22, jsxs as jsxs22 } from "react/jsx-runtime";
var AboutScreen = ({ onBack }) => {
  const [view, setView] = useState11("guide");
  useInput10((input, key) => {
    if (key.escape || key.return) {
      onBack();
    }
    if (input === "?" || key.tab) {
      setView((v) => v === "poem" ? "guide" : "poem");
    }
  });
  const toggleHint = view === "poem" ? "? Show guide" : "? Show poem";
  return /* @__PURE__ */ jsx22(
    ScreenLayout,
    {
      title: "About CLAUDE-SNEAKPEEK",
      subtitle: view === "poem" ? "A poem for the mirror" : "How it works",
      hints: [keyHints.back, toggleHint],
      children: view === "poem" ? (
        // Poem view
        /* @__PURE__ */ jsx22(PoemDisplay, { lines: MIRROR_POEM.lines })
      ) : (
        // Guide view - educational content
        /* @__PURE__ */ jsxs22(Fragment2, { children: [
          /* @__PURE__ */ jsxs22(Box22, { flexDirection: "column", marginY: 1, children: [
            /* @__PURE__ */ jsx22(FancyHeader, { title: EDUCATION.whatIsCcMirror.title }),
            /* @__PURE__ */ jsx22(Box22, { marginLeft: 2, flexDirection: "column", children: EDUCATION.whatIsCcMirror.detailed.map((line, i) => /* @__PURE__ */ jsx22(Text20, { color: line === "" ? colors.textDim : colors.textMuted, children: line }, i)) })
          ] }),
          /* @__PURE__ */ jsxs22(Box22, { flexDirection: "column", marginY: 1, children: [
            /* @__PURE__ */ jsx22(FancyHeader, { title: EDUCATION.whyVariants.title }),
            /* @__PURE__ */ jsx22(Box22, { marginLeft: 2, flexDirection: "column", children: EDUCATION.whyVariants.points.map((point, i) => /* @__PURE__ */ jsxs22(Text20, { color: colors.textMuted, children: [
              icons.bullet,
              " ",
              point
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs22(Box22, { flexDirection: "column", marginY: 1, children: [
            /* @__PURE__ */ jsx22(FancyHeader, { title: EDUCATION.whatHappens.title }),
            /* @__PURE__ */ jsx22(Box22, { marginLeft: 2, flexDirection: "column", children: EDUCATION.whatHappens.steps.map((step, i) => /* @__PURE__ */ jsxs22(Box22, { marginBottom: 0, children: [
              /* @__PURE__ */ jsxs22(Text20, { color: colors.gold, children: [
                step.step,
                ". "
              ] }),
              /* @__PURE__ */ jsx22(Text20, { color: colors.text, bold: true, children: step.title }),
              /* @__PURE__ */ jsxs22(Text20, { color: colors.textMuted, children: [
                " \u2014 ",
                step.detail
              ] })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs22(Box22, { flexDirection: "column", marginY: 1, children: [
            /* @__PURE__ */ jsx22(FancyHeader, { title: EDUCATION.isolation.title }),
            /* @__PURE__ */ jsx22(Box22, { marginLeft: 2, flexDirection: "column", children: EDUCATION.isolation.details.map((line, i) => /* @__PURE__ */ jsx22(Text20, { color: line === "" ? colors.textDim : colors.textMuted, children: line }, i)) })
          ] })
        ] })
      )
    }
  );
};

// src/tui/screens/FeedbackScreen.tsx
import { Box as Box23, Text as Text21, useInput as useInput11 } from "ink";
import { jsx as jsx23, jsxs as jsxs23 } from "react/jsx-runtime";
var FeedbackScreen = ({ onBack }) => {
  useInput11((input, key) => {
    if (key.escape || key.return) {
      onBack();
    }
  });
  return /* @__PURE__ */ jsxs23(ScreenLayout, { title: "Feedback & Contributions", subtitle: "Help make CLAUDE-SNEAKPEEK better", hints: [keyHints.back], children: [
    /* @__PURE__ */ jsx23(Box23, { flexDirection: "column", marginBottom: 1, children: /* @__PURE__ */ jsx23(Text21, { color: colors.textMuted, children: "CLAUDE-SNEAKPEEK is open source and welcomes contributions, bug reports, and feature requests." }) }),
    /* @__PURE__ */ jsxs23(Box23, { flexDirection: "column", marginY: 1, children: [
      /* @__PURE__ */ jsx23(Text21, { color: colors.text, bold: true, children: "Links:" }),
      /* @__PURE__ */ jsxs23(Box23, { flexDirection: "column", marginLeft: 2, marginTop: 1, children: [
        /* @__PURE__ */ jsxs23(Text21, { color: colors.textMuted, children: [
          "GitHub: ",
          /* @__PURE__ */ jsx23(Text21, { color: colors.primaryBright, children: "https://github.com/mikekelly/claude-sneakpeek" })
        ] }),
        /* @__PURE__ */ jsxs23(Text21, { color: colors.textMuted, children: [
          "Issues: ",
          /* @__PURE__ */ jsx23(Text21, { color: colors.primaryBright, children: "https://github.com/mikekelly/claude-sneakpeek/issues" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23(Box23, { flexDirection: "column", marginY: 1, children: [
      /* @__PURE__ */ jsx23(Text21, { color: colors.text, bold: true, children: "Provider PRs Welcome:" }),
      /* @__PURE__ */ jsxs23(Box23, { flexDirection: "column", marginLeft: 2, marginTop: 1, children: [
        /* @__PURE__ */ jsx23(Text21, { color: colors.textDim, children: "Want to improve OpenRouter or Claude Code Router support?" }),
        /* @__PURE__ */ jsx23(Text21, { color: colors.textDim, children: "PRs for better model mappings, transformers, and docs are appreciated." })
      ] })
    ] })
  ] });
};

// src/tui/screens/TeamModeScreen.tsx
import { Box as Box25, Text as Text23 } from "ink";

// src/tui/components/ui/YesNoSelect.tsx
import { useState as useState12 } from "react";
import { Box as Box24, Text as Text22, useInput as useInput12 } from "ink";
import { jsx as jsx24, jsxs as jsxs24 } from "react/jsx-runtime";
var YesNoSelect = ({
  title,
  onSelect,
  yesLabel = "Yes",
  noLabel = "No",
  defaultNo = false
}) => {
  const [selectedIndex, setSelectedIndex] = useState12(defaultNo ? 1 : 0);
  useInput12((input, key) => {
    if (key.upArrow || key.downArrow) {
      setSelectedIndex((prev) => prev === 0 ? 1 : 0);
    }
    if (key.return) {
      onSelect(selectedIndex === 0);
    }
  });
  const items = [
    { label: yesLabel, value: true },
    { label: noLabel, value: false }
  ];
  return /* @__PURE__ */ jsxs24(Box24, { flexDirection: "column", marginY: 1, children: [
    /* @__PURE__ */ jsx24(Text22, { color: colors.textMuted, bold: true, children: title }),
    /* @__PURE__ */ jsx24(Box24, { flexDirection: "column", marginTop: 1, children: items.map((item, idx) => {
      const selected = idx === selectedIndex;
      return /* @__PURE__ */ jsxs24(Box24, { children: [
        /* @__PURE__ */ jsxs24(Text22, { color: selected ? colors.gold : colors.textMuted, children: [
          selected ? icons.pointer : icons.pointerEmpty,
          " "
        ] }),
        /* @__PURE__ */ jsx24(Text22, { color: selected ? colors.text : colors.textMuted, bold: selected, children: item.label })
      ] }, item.label);
    }) })
  ] });
};

// src/tui/screens/TeamModeScreen.tsx
import { jsx as jsx25, jsxs as jsxs25 } from "react/jsx-runtime";
var TeamModeScreen = ({ onSelect }) => {
  return /* @__PURE__ */ jsxs25(
    ScreenLayout,
    {
      title: "Team Mode",
      subtitle: "Multi-agent coordination tools",
      hints: ["\u2191\u2193 Navigate", "Enter Select", "Esc Back"],
      children: [
        /* @__PURE__ */ jsxs25(Box25, { flexDirection: "column", marginBottom: 1, children: [
          /* @__PURE__ */ jsx25(Text23, { color: colors.textMuted, children: "Team mode adds TaskCreate, TaskGet, TaskUpdate, TaskList tools" }),
          /* @__PURE__ */ jsx25(Text23, { color: colors.textMuted, children: "for multi-agent coordination and task management." })
        ] }),
        /* @__PURE__ */ jsx25(Box25, { flexDirection: "column", marginBottom: 1, children: /* @__PURE__ */ jsx25(Text23, { color: colors.primaryBright, children: "Installs: orchestration skill" }) }),
        /* @__PURE__ */ jsx25(YesNoSelect, { title: "Enable team mode?", onSelect })
      ]
    }
  );
};

// src/tui/app.tsx
import { jsx as jsx26, jsxs as jsxs26 } from "react/jsx-runtime";
var App = ({
  core = core_exports,
  providers = providers_exports,
  brands = brands_exports,
  initialRootDir,
  initialBinDir
} = {}) => {
  const { exit } = useApp();
  const [screen, setScreen] = useState13("home");
  const [providerKey, setProviderKey] = useState13(null);
  const [brandKey, setBrandKey] = useState13("auto");
  const [name, setName] = useState13("");
  const [baseUrl, setBaseUrl] = useState13("");
  const [apiKey, setApiKey] = useState13("");
  const [modelSonnet, setModelSonnet] = useState13("");
  const [modelOpus, setModelOpus] = useState13("");
  const [modelHaiku, setModelHaiku] = useState13("");
  const [rootDir, _setRootDir] = useState13(initialRootDir || core.DEFAULT_ROOT);
  const [binDir, _setBinDir] = useState13(initialBinDir || core.DEFAULT_BIN_DIR);
  const [npmPackage, setNpmPackage] = useState13(core.DEFAULT_NPM_PACKAGE || "@anthropic-ai/claude-code");
  const npmVersion = core.DEFAULT_NPM_VERSION || "2.1.12";
  const [usePromptPack, setUsePromptPack] = useState13(true);
  const promptPackMode = "minimal";
  const [installSkill, setInstallSkill] = useState13(true);
  const [shellEnv, setShellEnv] = useState13(true);
  const [skillUpdate, setSkillUpdate] = useState13(false);
  const [enableTeamMode, setEnableTeamMode] = useState13(TEAM_MODE_SUPPORTED);
  const [extraEnv, setExtraEnv] = useState13([]);
  const [progressLines, setProgressLines] = useState13([]);
  const [doneLines, setDoneLines] = useState13([]);
  const [completionSummary, setCompletionSummary] = useState13([]);
  const [completionNextSteps, setCompletionNextSteps] = useState13([]);
  const [completionHelp, setCompletionHelp] = useState13([]);
  const [variants, setVariants] = useState13([]);
  const [selectedVariant, setSelectedVariant] = useState13(null);
  const [doctorReport, setDoctorReport] = useState13([]);
  const [apiKeyDetectedFrom, setApiKeyDetectedFrom] = useState13(null);
  const providerList = useMemo3(() => providers.listProviders(true), [providers]);
  const brandList = useMemo3(() => brands.listBrandPresets(), [brands]);
  const provider = useMemo3(() => providerKey ? providers.getProvider(providerKey) : null, [providerKey, providers]);
  const effectiveBaseUrl = useMemo3(() => baseUrl || provider?.baseUrl || "", [baseUrl, provider]);
  const modelOverrides = useMemo3(
    () => ({
      sonnet: modelSonnet.trim() || void 0,
      opus: modelOpus.trim() || void 0,
      haiku: modelHaiku.trim() || void 0
    }),
    [modelSonnet, modelOpus, modelHaiku]
  );
  const providerDefaults = (key) => ({
    promptPack: key === "zai" || key === "minimax",
    skillInstall: key === "zai" || key === "minimax",
    shellEnv: key === "zai"
  });
  const resolveZaiApiKey = () => {
    const zaiKey = process.env.Z_AI_API_KEY?.trim();
    if (zaiKey) {
      return { value: zaiKey, detectedFrom: "Z_AI_API_KEY", skipPrompt: true };
    }
    const anthropicKey = process.env.ANTHROPIC_API_KEY?.trim();
    if (anthropicKey) {
      return { value: anthropicKey, detectedFrom: "ANTHROPIC_API_KEY", skipPrompt: false };
    }
    return { value: "", detectedFrom: null, skipPrompt: false };
  };
  useInput13((input, key) => {
    if (key.escape) {
      switch (screen) {
        case "home":
          setScreen("exit");
          break;
        // Quick setup flow - back steps
        case "quick-intro":
          setScreen("quick-provider");
          break;
        case "quick-ccrouter-url":
          setScreen("quick-intro");
          break;
        case "quick-api-key":
          setScreen("quick-intro");
          break;
        case "quick-models":
          setScreen("quick-api-key");
          break;
        case "quick-name":
          if (providerKey === "ccrouter") {
            setScreen("quick-ccrouter-url");
          } else {
            setScreen(provider?.requiresModelMapping ? "quick-models" : "quick-api-key");
          }
          break;
        case "quick-provider":
          setScreen("home");
          break;
        // Create flow - back steps
        case "create-intro":
          setScreen("create-provider");
          break;
        case "create-brand":
          setScreen("create-intro");
          break;
        case "create-ccrouter-url":
          setScreen("create-name");
          break;
        case "create-models":
          setScreen("create-api-key");
          break;
        case "create-team-mode":
          setScreen("create-skill-install");
          break;
        // Model configuration screens - back through flow
        case "manage-models":
          setScreen("manage-actions");
          break;
        case "manage-models-done":
          setScreen("manage-actions");
          break;
        // Completion/done screens - back to home
        case "create-done":
        case "manage-update-done":
        case "manage-tweak-done":
        case "manage-remove-done":
        case "updateAll-done":
          setScreen("home");
          break;
        // Doctor screen - home
        case "doctor":
          setScreen("home");
          break;
        // Feedback screen - home
        case "feedback":
          setScreen("home");
          break;
        // Default: any screen starting with create, manage, or updateAll goes home
        default:
          if (screen.startsWith("create") || screen.startsWith("manage") || screen.startsWith("updateAll")) {
            setScreen("home");
          }
          break;
      }
    }
  });
  useEffect8(() => {
    if (screen === "manage") {
      setVariants(core.listVariants(rootDir));
    }
  }, [screen, rootDir, core]);
  useEffect8(() => {
    if (screen !== "doctor") return;
    setDoctorReport(core.doctor(rootDir, binDir));
  }, [screen, rootDir, binDir, core]);
  const handleOperationComplete = useCallback((result) => {
    setDoneLines(result.doneLines);
    setCompletionSummary(result.summary);
    setCompletionNextSteps(result.nextSteps);
    setCompletionHelp(result.help);
  }, []);
  const refreshVariants = useCallback(() => {
    setVariants(core.listVariants(rootDir));
  }, [core, rootDir]);
  const createParams = useMemo3(
    () => ({
      name,
      providerKey: providerKey || "zai",
      provider: provider ?? null,
      baseUrl: effectiveBaseUrl,
      apiKey,
      extraEnv,
      modelOverrides,
      brandKey,
      rootDir,
      binDir,
      npmPackage,
      npmVersion,
      usePromptPack,
      promptPackMode,
      installSkill,
      shellEnv,
      skillUpdate,
      enableTeamMode: TEAM_MODE_SUPPORTED ? enableTeamMode : false
    }),
    [
      name,
      providerKey,
      provider,
      effectiveBaseUrl,
      apiKey,
      extraEnv,
      modelOverrides,
      brandKey,
      rootDir,
      binDir,
      npmPackage,
      npmVersion,
      usePromptPack,
      promptPackMode,
      installSkill,
      shellEnv,
      skillUpdate,
      enableTeamMode
    ]
  );
  useVariantCreate({
    screen,
    params: createParams,
    core,
    setProgressLines,
    setScreen,
    onComplete: handleOperationComplete
  });
  useVariantUpdate({
    screen,
    selectedVariant,
    rootDir,
    binDir,
    core,
    setProgressLines,
    setScreen,
    onComplete: handleOperationComplete
  });
  useEffect8(() => {
    if (screen !== "manage-tweak") return;
    if (!selectedVariant) return;
    setDoneLines([`To customize ${selectedVariant.name}, run:`]);
    setCompletionSummary([`claude-sneakpeek tweak ${selectedVariant.name}`]);
    setCompletionNextSteps(["Exit this TUI first (press ESC or q)", "Then run the command above in your terminal"]);
    setCompletionHelp(["tweakcc lets you customize themes, overlays, and more"]);
    setScreen("manage-tweak-done");
  }, [screen, selectedVariant]);
  useModelConfig({
    screen,
    selectedVariant,
    rootDir,
    binDir,
    modelOpus,
    modelSonnet,
    modelHaiku,
    core,
    setProgressLines,
    setScreen,
    onComplete: handleOperationComplete
  });
  useTeamModeToggle({
    screen,
    selectedVariant,
    rootDir,
    binDir,
    core,
    setProgressLines,
    setScreen,
    onComplete: handleOperationComplete,
    refreshVariants
  });
  useUpdateAll({
    screen,
    rootDir,
    binDir,
    core,
    setProgressLines,
    setScreen,
    onComplete: handleOperationComplete
  });
  const resetWizard = () => {
    setProviderKey(null);
    setBrandKey("auto");
    setName("");
    setBaseUrl("");
    setApiKey("");
    setModelSonnet("");
    setModelOpus("");
    setModelHaiku("");
    setApiKeyDetectedFrom(null);
    setNpmPackage(core.DEFAULT_NPM_PACKAGE || "@anthropic-ai/claude-code");
    setExtraEnv([]);
    setUsePromptPack(true);
    setInstallSkill(true);
    setShellEnv(true);
    setSkillUpdate(false);
    setEnableTeamMode(TEAM_MODE_SUPPORTED);
    setCompletionSummary([]);
    setCompletionNextSteps([]);
    setCompletionHelp([]);
  };
  useEffect8(() => {
    if (screen === "exit") {
      const timer = setTimeout(() => exit(), 100);
      return () => clearTimeout(timer);
    }
  }, [screen, exit]);
  if (screen === "exit") {
    return /* @__PURE__ */ jsx26(Frame, { children: /* @__PURE__ */ jsx26(Header, { title: "CLAUDE-SNEAKPEEK", subtitle: "Goodbye. Happy coding!" }) });
  }
  if (screen === "home") {
    return /* @__PURE__ */ jsx26(
      HomeScreen,
      {
        onSelect: (value) => {
          if (value === "quick") {
            resetWizard();
            setScreen("quick-provider");
          }
          if (value === "create") {
            resetWizard();
            setScreen("create-provider");
          }
          if (value === "manage") setScreen("manage");
          if (value === "updateAll") setScreen("updateAll");
          if (value === "doctor") setScreen("doctor");
          if (value === "about") setScreen("about");
          if (value === "feedback") setScreen("feedback");
          if (value === "exit") setScreen("exit");
        }
      }
    );
  }
  if (screen === "quick-provider") {
    return /* @__PURE__ */ jsx26(
      ProviderSelectScreen,
      {
        providers: providerList,
        onSelect: (value) => {
          const selected = providers.getProvider(value);
          const defaults = providerDefaults(value);
          const keyDefaults = value === "zai" ? resolveZaiApiKey() : { value: "", detectedFrom: null, skipPrompt: false };
          setProviderKey(value);
          setName(value === "mirror" ? "mclaude" : value);
          setBaseUrl(selected?.baseUrl || "");
          setApiKey(keyDefaults.value);
          setApiKeyDetectedFrom(keyDefaults.detectedFrom);
          setModelSonnet("");
          setModelOpus("");
          setModelHaiku("");
          setExtraEnv([]);
          setBrandKey("auto");
          setUsePromptPack(defaults.promptPack);
          setInstallSkill(defaults.skillInstall);
          setShellEnv(keyDefaults.detectedFrom === "Z_AI_API_KEY" ? false : defaults.shellEnv);
          setScreen("quick-intro");
        }
      }
    );
  }
  if (screen === "quick-intro") {
    const keyDefaults = providerKey === "zai" ? resolveZaiApiKey() : { skipPrompt: false };
    const requiresModels = Boolean(provider?.requiresModelMapping);
    const skipApiKey = keyDefaults.skipPrompt || provider?.credentialOptional;
    return /* @__PURE__ */ jsx26(
      ProviderIntroScreen,
      {
        providerKey: providerKey || "zai",
        providerLabel: provider?.label || providerKey || "Provider",
        isQuickSetup: true,
        onContinue: () => {
          if (providerKey === "ccrouter") {
            setScreen("quick-ccrouter-url");
          } else if (skipApiKey) {
            setScreen(requiresModels ? "quick-models" : "quick-name");
          } else {
            setScreen("quick-api-key");
          }
        },
        onBack: () => setScreen("quick-provider")
      }
    );
  }
  if (screen === "quick-api-key") {
    return /* @__PURE__ */ jsx26(
      ApiKeyScreen,
      {
        providerLabel: provider?.label || "Provider",
        providerKey: providerKey || void 0,
        envVarName: provider?.authMode === "authToken" ? "ANTHROPIC_AUTH_TOKEN" : "ANTHROPIC_API_KEY",
        value: apiKey,
        onChange: setApiKey,
        onSubmit: () => setScreen(provider?.requiresModelMapping ? "quick-models" : "quick-name"),
        detectedFrom: apiKeyDetectedFrom || void 0
      }
    );
  }
  if (screen === "quick-models") {
    return /* @__PURE__ */ jsx26(
      ModelConfigScreen,
      {
        title: "Model Configuration",
        subtitle: "Map Claude Code model aliases to your provider",
        providerKey: providerKey || void 0,
        opusValue: modelOpus,
        sonnetValue: modelSonnet,
        haikuValue: modelHaiku,
        onOpusChange: setModelOpus,
        onSonnetChange: setModelSonnet,
        onHaikuChange: setModelHaiku,
        onComplete: () => setScreen("quick-name"),
        onBack: () => setScreen("quick-api-key")
      }
    );
  }
  if (screen === "quick-ccrouter-url") {
    return /* @__PURE__ */ jsx26(
      RouterUrlScreen,
      {
        value: baseUrl || provider?.baseUrl || "http://127.0.0.1:3456",
        onChange: setBaseUrl,
        onSubmit: () => setScreen("quick-name"),
        onBack: () => setScreen("quick-intro")
      }
    );
  }
  if (screen === "quick-name") {
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Variant Name", subtitle: "This becomes the CLI command name" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      apiKeyDetectedFrom && /* @__PURE__ */ jsx26(Box26, { marginTop: 1, children: /* @__PURE__ */ jsxs26(Text24, { color: colors.success, children: [
        "Detected API key from ",
        apiKeyDetectedFrom,
        "."
      ] }) }),
      /* @__PURE__ */ jsx26(Box26, { marginY: 1, children: /* @__PURE__ */ jsx26(
        TextField,
        {
          label: "Command name",
          value: name,
          onChange: setName,
          onSubmit: () => {
            setProgressLines([]);
            setScreen("create-running");
          },
          placeholder: providerKey || "my-variant",
          hint: "Press Enter to continue"
        }
      ) }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, {})
    ] });
  }
  if (screen === "create-provider") {
    return /* @__PURE__ */ jsx26(
      ProviderSelectScreen,
      {
        providers: providerList,
        onSelect: (value) => {
          const selected = providers.getProvider(value);
          const defaults = providerDefaults(value);
          const keyDefaults = value === "zai" ? resolveZaiApiKey() : { value: "", detectedFrom: null, skipPrompt: false };
          setProviderKey(value);
          setName(value === "mirror" ? "mclaude" : value);
          setBaseUrl(selected?.baseUrl || "");
          setApiKey(keyDefaults.value);
          setApiKeyDetectedFrom(keyDefaults.detectedFrom);
          setModelSonnet("");
          setModelOpus("");
          setModelHaiku("");
          setExtraEnv([]);
          setBrandKey("auto");
          setUsePromptPack(defaults.promptPack);
          setInstallSkill(defaults.skillInstall);
          setShellEnv(keyDefaults.detectedFrom === "Z_AI_API_KEY" ? false : defaults.shellEnv);
          setScreen("create-intro");
        }
      }
    );
  }
  if (screen === "create-intro") {
    return /* @__PURE__ */ jsx26(
      ProviderIntroScreen,
      {
        providerKey: providerKey || "zai",
        providerLabel: provider?.label || providerKey || "Provider",
        isQuickSetup: false,
        onContinue: () => setScreen("create-brand"),
        onBack: () => setScreen("create-provider")
      }
    );
  }
  if (screen === "create-brand") {
    const items = [
      { label: "Auto (match provider)", value: "auto" },
      { label: "None (keep default Claude Code look)", value: "none" },
      ...brandList.map((brand) => ({
        label: `${brand.label} - ${brand.description}`,
        value: brand.key
      }))
    ];
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Choose Theme", subtitle: "Optional: re-skin the UI with tweakcc presets" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(Box26, { flexDirection: "column", marginY: 1, children: /* @__PURE__ */ jsx26(
        SelectInput,
        {
          items,
          onSelect: (item) => {
            setBrandKey(item.value);
            setScreen("create-name");
          }
        }
      ) }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, { hints: ["Pick a style preset or press Esc to go back"] })
    ] });
  }
  if (screen === "create-name") {
    const getNextScreen = () => {
      if (providerKey === "ccrouter") return "create-ccrouter-url";
      if (providerKey === "mirror") return "create-skill-install";
      return "create-base-url";
    };
    const nextScreen = getNextScreen();
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Variant Name", subtitle: "This becomes the CLI command name" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(Box26, { marginY: 1, children: /* @__PURE__ */ jsx26(
        TextField,
        {
          label: "Command name",
          value: name,
          onChange: setName,
          onSubmit: () => setScreen(nextScreen),
          placeholder: providerKey || "my-variant",
          hint: "Press Enter to continue"
        }
      ) }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, {})
    ] });
  }
  if (screen === "create-ccrouter-url") {
    return /* @__PURE__ */ jsx26(
      RouterUrlScreen,
      {
        value: baseUrl || provider?.baseUrl || "http://127.0.0.1:3456",
        onChange: setBaseUrl,
        onSubmit: () => setScreen("create-skill-install"),
        onBack: () => setScreen("create-name")
      }
    );
  }
  if (screen === "create-base-url") {
    const skipApiKey = providerKey === "zai" && apiKeyDetectedFrom === "Z_AI_API_KEY" || provider?.credentialOptional;
    const nextScreen = "create-skill-install";
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Base URL", subtitle: "Custom API endpoint (optional)" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(Box26, { marginY: 1, children: /* @__PURE__ */ jsx26(
        TextField,
        {
          label: "ANTHROPIC_BASE_URL",
          value: baseUrl,
          onChange: setBaseUrl,
          onSubmit: () => setScreen(skipApiKey ? provider?.requiresModelMapping ? "create-models" : nextScreen : "create-api-key"),
          placeholder: provider?.baseUrl || "Leave blank for defaults",
          hint: "Leave blank to keep provider defaults"
        }
      ) }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, {})
    ] });
  }
  if (screen === "create-api-key") {
    const nextScreen = "create-skill-install";
    return /* @__PURE__ */ jsx26(
      ApiKeyScreen,
      {
        providerLabel: provider?.label || "Provider",
        providerKey: providerKey || void 0,
        envVarName: provider?.authMode === "authToken" ? "ANTHROPIC_AUTH_TOKEN" : "ANTHROPIC_API_KEY",
        value: apiKey,
        onChange: setApiKey,
        onSubmit: () => setScreen(provider?.requiresModelMapping ? "create-models" : nextScreen),
        detectedFrom: apiKeyDetectedFrom || void 0
      }
    );
  }
  if (screen === "create-models") {
    const nextScreen = "create-skill-install";
    return /* @__PURE__ */ jsx26(
      ModelConfigScreen,
      {
        title: "Model Configuration",
        subtitle: "Map Claude Code model aliases to your provider",
        providerKey: providerKey || void 0,
        opusValue: modelOpus,
        sonnetValue: modelSonnet,
        haikuValue: modelHaiku,
        onOpusChange: setModelOpus,
        onSonnetChange: setModelSonnet,
        onHaikuChange: setModelHaiku,
        onComplete: () => setScreen(nextScreen),
        onBack: () => setScreen("create-api-key")
      }
    );
  }
  if (screen === "create-prompt-pack") {
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Prompt Pack", subtitle: "Provider hints for tools and behavior" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(
        YesNoSelect,
        {
          title: "Apply provider prompt pack?",
          onSelect: (value) => {
            setUsePromptPack(value);
            setScreen("create-skill-install");
          }
        }
      ),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, {})
    ] });
  }
  if (screen === "create-skill-install") {
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Browser Automation", subtitle: "Navigate, fill forms, screenshot, scrape" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsxs26(Box26, { marginY: 1, flexDirection: "column", children: [
        /* @__PURE__ */ jsx26(Text24, { color: colors.textMuted, children: "The dev-browser skill adds browser automation to your variant." }),
        /* @__PURE__ */ jsx26(Text24, { color: colors.primaryBright, children: "https://github.com/SawyerHood/dev-browser" })
      ] }),
      /* @__PURE__ */ jsx26(
        YesNoSelect,
        {
          title: "Install dev-browser skill?",
          onSelect: (value) => {
            setInstallSkill(value);
            if (TEAM_MODE_SUPPORTED) {
              setScreen("create-team-mode");
              return;
            }
            setEnableTeamMode(false);
            if (providerKey === "zai") {
              if (apiKeyDetectedFrom === "Z_AI_API_KEY") {
                setShellEnv(false);
                setScreen("create-env-confirm");
              } else {
                setScreen("create-shell-env");
              }
            } else {
              setScreen("create-env-confirm");
            }
          }
        }
      ),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, {})
    ] });
  }
  if (screen === "create-team-mode") {
    return /* @__PURE__ */ jsx26(
      TeamModeScreen,
      {
        onSelect: (value) => {
          setEnableTeamMode(value);
          if (providerKey === "zai") {
            if (apiKeyDetectedFrom === "Z_AI_API_KEY") {
              setShellEnv(false);
              setScreen("create-env-confirm");
            } else {
              setScreen("create-shell-env");
            }
          } else {
            setScreen("create-env-confirm");
          }
        },
        onBack: () => setScreen("create-skill-install")
      }
    );
  }
  if (screen === "create-shell-env") {
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Shell Environment", subtitle: "Write API key to your shell profile" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(
        YesNoSelect,
        {
          title: "Write Z_AI_API_KEY to your shell profile?",
          onSelect: (value) => {
            setShellEnv(value);
            setScreen("create-env-confirm");
          }
        }
      ),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, {})
    ] });
  }
  if (screen === "create-env-confirm") {
    return /* @__PURE__ */ jsxs26(Frame, { children: [
      /* @__PURE__ */ jsx26(Header, { title: "Custom Environment", subtitle: "Optional extras beyond the template" }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(
        YesNoSelect,
        {
          title: "Add custom env entries?",
          defaultNo: true,
          onSelect: (value) => {
            if (value) {
              setScreen("create-env-add");
            } else {
              setScreen("create-summary");
            }
          }
        }
      ),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, {})
    ] });
  }
  if (screen === "create-env-add") {
    return /* @__PURE__ */ jsx26(
      EnvEditorScreen,
      {
        envEntries: extraEnv,
        onAdd: (entry) => setExtraEnv((prev) => [...prev, entry]),
        onDone: () => setScreen("create-summary")
      }
    );
  }
  if (screen === "create-summary") {
    const providerLabel = provider?.label || providerKey || "";
    const brandPreset = brandList.find((item) => item.key === brandKey);
    const brandLabel = brandKey === "auto" ? "Auto (match provider)" : brandKey === "none" ? "None" : brandPreset?.label || brandKey;
    return /* @__PURE__ */ jsx26(
      SummaryScreen,
      {
        data: {
          name,
          providerLabel,
          providerKey: providerKey || void 0,
          brandLabel,
          baseUrl: effectiveBaseUrl,
          apiKey,
          apiKeySource: apiKeyDetectedFrom || void 0,
          modelSonnet: modelOverrides.sonnet,
          modelOpus: modelOverrides.opus,
          modelHaiku: modelOverrides.haiku,
          rootDir,
          binDir,
          npmPackage,
          npmVersion,
          usePromptPack,
          promptPackMode,
          installSkill,
          enableTeamMode,
          teamModeSupported: TEAM_MODE_SUPPORTED,
          shellEnv
        },
        onConfirm: () => {
          setProgressLines([]);
          setScreen("create-running");
        },
        onBack: () => setScreen("create-env-confirm"),
        onCancel: () => setScreen("home")
      }
    );
  }
  if (screen === "create-running") {
    return /* @__PURE__ */ jsx26(ProgressScreen, { title: "Creating variant", lines: progressLines, variantName: name });
  }
  if (screen === "create-done") {
    return /* @__PURE__ */ jsx26(
      CompletionScreen,
      {
        title: "Create variant",
        lines: doneLines,
        variantName: name,
        wrapperPath: getWrapperPath(binDir, name),
        configPath: `${rootDir}/${name}/config`,
        variantPath: `${rootDir}/${name}`,
        summary: completionSummary,
        nextSteps: completionNextSteps,
        help: completionHelp,
        onDone: (value) => {
          if (value === "home") setScreen("home");
          else setScreen("exit");
        }
      }
    );
  }
  if (screen === "manage") {
    return /* @__PURE__ */ jsx26(
      VariantListScreen,
      {
        variants: variants.map((v) => ({
          name: v.name,
          provider: v.meta?.provider,
          wrapperPath: getWrapperPath(binDir, v.name)
        })),
        onSelect: (variantName) => {
          const entry = variants.find((item) => item.name === variantName);
          if (!entry || !entry.meta) return;
          setSelectedVariant({ ...entry.meta, wrapperPath: getWrapperPath(binDir, entry.name) });
          setScreen("manage-actions");
        },
        onBack: () => setScreen("home")
      }
    );
  }
  if (screen === "manage-actions" && selectedVariant) {
    return /* @__PURE__ */ jsx26(
      VariantActionsScreen,
      {
        meta: selectedVariant,
        onUpdate: () => setScreen("manage-update"),
        onConfigureModels: () => {
          setModelOpus("");
          setModelSonnet("");
          setModelHaiku("");
          setScreen("manage-models");
        },
        onToggleTeamMode: TEAM_MODE_SUPPORTED ? () => setScreen("manage-team-mode") : void 0,
        teamModeSupported: TEAM_MODE_SUPPORTED,
        onTweak: () => setScreen("manage-tweak"),
        onRemove: () => setScreen("manage-remove"),
        onBack: () => setScreen("manage")
      }
    );
  }
  if (screen === "manage-update" && selectedVariant) {
    return /* @__PURE__ */ jsx26(ProgressScreen, { title: "Updating variant", lines: progressLines });
  }
  if (screen === "manage-update-done") {
    return /* @__PURE__ */ jsx26(
      CompletionScreen,
      {
        title: "Update variant",
        lines: doneLines,
        summary: completionSummary,
        nextSteps: completionNextSteps,
        help: completionHelp,
        onDone: (value) => {
          if (value === "home") setScreen("home");
          else setScreen("exit");
        }
      }
    );
  }
  if (screen === "manage-team-mode" && selectedVariant) {
    const action = selectedVariant.teamModeEnabled ? "Disabling" : "Enabling";
    return /* @__PURE__ */ jsx26(ProgressScreen, { title: `${action} team mode`, lines: progressLines });
  }
  if (screen === "manage-team-mode-done") {
    return /* @__PURE__ */ jsx26(
      CompletionScreen,
      {
        title: "Team Mode",
        lines: doneLines,
        summary: completionSummary,
        nextSteps: completionNextSteps,
        help: completionHelp,
        onDone: (value) => {
          if (value === "home") setScreen("home");
          else setScreen("exit");
        }
      }
    );
  }
  if (screen === "manage-tweak" && selectedVariant) {
    return /* @__PURE__ */ jsx26(ProgressScreen, { title: "Launching tweakcc", lines: progressLines });
  }
  if (screen === "manage-tweak-done") {
    return /* @__PURE__ */ jsx26(
      CompletionScreen,
      {
        title: "tweakcc session",
        lines: doneLines,
        summary: completionSummary,
        nextSteps: completionNextSteps,
        help: completionHelp,
        onDone: (value) => {
          if (value === "home") setScreen("home");
          else setScreen("exit");
        }
      }
    );
  }
  if (screen === "manage-models" && selectedVariant) {
    return /* @__PURE__ */ jsx26(
      ModelConfigScreen,
      {
        title: "Configure Models",
        subtitle: `Update model mapping for ${selectedVariant.name}`,
        providerKey: selectedVariant.provider,
        opusValue: modelOpus,
        sonnetValue: modelSonnet,
        haikuValue: modelHaiku,
        onOpusChange: setModelOpus,
        onSonnetChange: setModelSonnet,
        onHaikuChange: setModelHaiku,
        onComplete: () => setScreen("manage-models-saving"),
        onBack: () => setScreen("manage-actions")
      }
    );
  }
  if (screen === "manage-models-saving" && selectedVariant) {
    return /* @__PURE__ */ jsx26(ProgressScreen, { title: "Saving model configuration", lines: progressLines });
  }
  if (screen === "manage-models-done") {
    return /* @__PURE__ */ jsx26(
      CompletionScreen,
      {
        title: "Models Updated",
        lines: doneLines,
        summary: completionSummary,
        nextSteps: completionNextSteps,
        help: completionHelp,
        onDone: (value) => {
          if (value === "home") setScreen("home");
          else setScreen("manage-actions");
        }
      }
    );
  }
  if (screen === "manage-remove" && selectedVariant) {
    return /* @__PURE__ */ jsxs26(Frame, { borderColor: colors.warning, children: [
      /* @__PURE__ */ jsx26(Header, { title: "Remove Variant", subtitle: `This will delete ${selectedVariant.name} from ${rootDir}` }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(Box26, { flexDirection: "column", marginY: 1, children: /* @__PURE__ */ jsx26(
        SelectInput,
        {
          items: [
            { label: "Remove", value: "remove" },
            { label: "Cancel", value: "cancel" }
          ],
          onSelect: (item) => {
            if (item.value === "remove") {
              try {
                core.removeVariant(rootDir, selectedVariant.name);
                setCompletionSummary([`Removed ${selectedVariant.name}`]);
                setCompletionNextSteps([
                  'Use "Create" to make a new variant',
                  'Run "List" to see remaining variants'
                ]);
                setCompletionHelp(["Help: claude-sneakpeek help", "List: claude-sneakpeek list"]);
                setDoneLines([`Removed ${selectedVariant.name}`]);
              } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                setDoneLines([`Failed: ${message}`]);
                setCompletionSummary([]);
                setCompletionNextSteps([]);
                setCompletionHelp([]);
              }
              setScreen("manage-remove-done");
            } else {
              setScreen("manage-actions");
            }
          }
        }
      ) }),
      /* @__PURE__ */ jsx26(Divider, {}),
      /* @__PURE__ */ jsx26(HintBar, { hints: ["Confirm removal or press Cancel"] })
    ] });
  }
  if (screen === "manage-remove-done") {
    return /* @__PURE__ */ jsx26(
      CompletionScreen,
      {
        title: "Remove variant",
        lines: doneLines,
        summary: completionSummary,
        nextSteps: completionNextSteps,
        help: completionHelp,
        onDone: (value) => {
          if (value === "home") setScreen("home");
          else setScreen("exit");
        }
      }
    );
  }
  if (screen === "updateAll") {
    return /* @__PURE__ */ jsx26(ProgressScreen, { title: "Updating all variants", lines: progressLines });
  }
  if (screen === "updateAll-done") {
    return /* @__PURE__ */ jsx26(
      CompletionScreen,
      {
        title: "Update all",
        lines: doneLines,
        summary: completionSummary,
        nextSteps: completionNextSteps,
        help: completionHelp,
        onDone: (value) => {
          if (value === "home") setScreen("home");
          else setScreen("exit");
        }
      }
    );
  }
  if (screen === "doctor") {
    return /* @__PURE__ */ jsx26(DiagnosticsScreen, { report: doctorReport, onDone: () => setScreen("home") });
  }
  if (screen === "about") {
    return /* @__PURE__ */ jsx26(AboutScreen, { onBack: () => setScreen("home") });
  }
  if (screen === "feedback") {
    return /* @__PURE__ */ jsx26(FeedbackScreen, { onBack: () => setScreen("home") });
  }
  return /* @__PURE__ */ jsx26(Frame, { children: /* @__PURE__ */ jsx26(Header, { title: "CLAUDE-SNEAKPEEK", subtitle: "Unknown state" }) });
};

// src/tui/index.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
render(/* @__PURE__ */ jsx27(App, {}));
