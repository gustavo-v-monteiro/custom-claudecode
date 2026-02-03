import type { TweakccConfig, Theme } from './types.js';
import { DEFAULT_THEMES } from './defaultThemes.js';
import { formatUserMessage, getUserLabel } from './userLabel.js';

const rgb = (r: number, g: number, b: number) => `rgb(${r},${g},${b})`;

// Kimi "Prism Blue" Palette
const palette = {
  base: '#05070a',         // Deep space black
  blue: '#1a56ff',         // Kimi Royal Blue
  electric: '#00d4ff',     // Prism Cyan
  violet: '#a855f7',       // Prism Violet
  surface: '#0f172a',      // Dark slate surface
  text: '#f8fafc',
};

const theme: Theme = {
  name: 'Kimi Prism',
  id: 'kimi-prism',
  colors: {
    autoAccept: rgb(74, 222, 128),
    bashBorder: palette.blue,
    claude: palette.blue,
    claudeShimmer: palette.electric,
    claudeBlue_FOR_SYSTEM_SPINNER: palette.blue,
    planMode: palette.violet,
    ide: palette.electric,
    promptBorder: '#1e293b',
    text: palette.text,
    background: palette.base,
    userMessageBackground: palette.surface,
    bashMessageBackgroundColor: '#020617',
    rainbow_blue: palette.blue,
    rainbow_violet: palette.violet,
    // Additional required colors from dark theme
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: '#60a5fa',
    permission: 'rgb(177,185,249)',
    permissionShimmer: 'rgb(207,215,255)',
    inverseText: 'rgb(0,0,0)',
    inactive: 'rgb(153,153,153)',
    subtle: 'rgb(80,80,80)',
    suggestion: 'rgb(177,185,249)',
    remember: 'rgb(177,185,249)',
    success: 'rgb(78,186,101)',
    error: 'rgb(255,107,128)',
    warning: 'rgb(255,193,7)',
    warningShimmer: 'rgb(255,223,57)',
    diffAdded: 'rgb(34,92,43)',
    diffRemoved: 'rgb(122,41,54)',
    diffAddedDimmed: 'rgb(71,88,74)',
    diffRemovedDimmed: 'rgb(105,72,77)',
    diffAddedWord: 'rgb(56,166,96)',
    diffRemovedWord: 'rgb(179,89,107)',
    diffAddedWordDimmed: 'rgb(46,107,58)',
    diffRemovedWordDimmed: 'rgb(139,57,69)',
    red_FOR_SUBAGENTS_ONLY: 'rgb(220,38,38)',
    blue_FOR_SUBAGENTS_ONLY: 'rgb(37,99,235)',
    green_FOR_SUBAGENTS_ONLY: 'rgb(22,163,74)',
    yellow_FOR_SUBAGENTS_ONLY: 'rgb(202,138,4)',
    purple_FOR_SUBAGENTS_ONLY: 'rgb(147,51,234)',
    orange_FOR_SUBAGENTS_ONLY: 'rgb(234,88,12)',
    pink_FOR_SUBAGENTS_ONLY: 'rgb(219,39,119)',
    cyan_FOR_SUBAGENTS_ONLY: 'rgb(8,145,178)',
    professionalBlue: 'rgb(106,155,204)',
    rainbow_red: 'rgb(235,95,87)',
    rainbow_orange: 'rgb(245,139,87)',
    rainbow_yellow: 'rgb(250,195,95)',
    rainbow_green: 'rgb(145,200,130)',
    rainbow_indigo: 'rgb(155,130,200)',
    rainbow_red_shimmer: 'rgb(250,155,147)',
    rainbow_orange_shimmer: 'rgb(255,185,137)',
    rainbow_yellow_shimmer: 'rgb(255,225,155)',
    rainbow_green_shimmer: 'rgb(185,230,180)',
    rainbow_blue_shimmer: 'rgb(180,205,240)',
    rainbow_indigo_shimmer: 'rgb(195,180,230)',
    rainbow_violet_shimmer: 'rgb(230,180,210)',
    clawd_body: 'rgb(215,119,87)',
    clawd_background: 'rgb(0,0,0)',
    memoryBackgroundColor: 'rgb(55, 65, 70)',
    rate_limit_fill: 'rgb(177,185,249)',
    rate_limit_empty: 'rgb(80,83,112)',
    promptBorderShimmer: 'rgb(66,66,66)',
  },
};

export const buildKimiTweakccConfig = (): TweakccConfig => ({
  ccVersion: '',
  ccInstallationPath: null,
  lastModified: new Date().toISOString(),
  changesApplied: false,
  settings: {
    themes: [theme, ...DEFAULT_THEMES],
    thinkingVerbs: {
      format: '{}... ',
      verbs: ['Refracting', 'Analyzing', 'Synthesizing', 'Kimi is thinking'],
    },
    thinkingStyle: {
      reverseMirror: false,
      updateInterval: 80,
      phases: ['◢', '◣', '◤', '◥'], // Geometric prism-like animation
    },
    userMessageDisplay: {
      format: formatUserMessage('Kimi User'),
      styling: ['bold'],
      foregroundColor: 'default',
      backgroundColor: palette.surface,
      borderStyle: 'single',
      borderColor: palette.blue,
      paddingX: 1,
      paddingY: 0,
      fitBoxToContent: true,
    },
    inputBox: {
      removeBorder: false,
    },
    misc: {
      showTweakccVersion: false,
      showPatchesApplied: false,
      expandThinkingBlocks: false,
      enableConversationTitle: false,
      hideStartupBanner: true,
      hideCtrlGToEditPrompt: false,
      hideStartupClawd: false,
      increaseFileReadLimit: true,
    },
    toolsets: [{ name: 'kimi', allowedTools: '*' }],
    defaultToolset: 'kimi',
    planModeToolset: null,
  },
});
