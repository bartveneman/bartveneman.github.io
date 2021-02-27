---
title: VS Code 'do not disturb' settings
url: https://twitter.com/HugoGiraudel/status/1365237163105939457
tags:
  - vscode
  - settings
---

> Latest version of my “leave me alone, VSC” configuration. Quick thread about each setting to explain what it does (when I even know) and why I don’t use it. As usual, YMMV.

[Hugo shares](https://kittygiraudel.com/snippets/vsc-lite/) some of his leave-me-alone settings for VS Code. I've tried them on my own device and _man_ what a relief!

```json
{
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.codeLens": false,
  "editor.copyWithSyntaxHighlighting": false,
  "editor.dragAndDrop": false,
  "editor.hover.delay": 1200,
  "editor.lightbulb.enabled": false,
  "editor.minimap.enabled": false,
  "editor.parameterHints.enabled": false,
  "editor.quickSuggestions": {
    "other": false,
    "comments": false,
    "strings": false
  },
  "editor.suggestOnTriggerCharacters": false,
  "explorer.openEditors.visible": 0,
  "extensions.ignoreRecommendations": true,
  "git.enabled": false,
  "keyboard.touchbar.enabled": false,
  "update.showReleaseNotes": false,
  "workbench.enableExperiments": false,
  "workbench.startupEditor": "none",
  "workbench.tips.enabled": false
}
```
