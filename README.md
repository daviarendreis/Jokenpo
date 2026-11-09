# Jokenpo

A small rock-paper-scissors game built in React + TypeScript, with a simple rule-based AI opponent. I built it as a quick project to practice keeping clean architecture even in a tiny, self-contained app.

**Play:** https://daviarendreis.github.io/Jokenpo/

## The AI opponent

The computer's logic is deliberately simple and fully rule-based (no machine learning), but it's built around a real human habit: after winning a round, people tend to repeat the move that just worked. The AI exploits exactly that: whenever you win, it assumes you might repeat your choice and plays the counter to it. So if you lean on what just won, it punishes you; to keep winning, you have to break your own pattern.

A natural next step would be a smarter opponent that detects longer patterns in the player's choices, still rule-based, just less predictable.

## What I focused on

Even though it's a tiny game, I kept the structure separated and clean:
- **Game logic** as pure functions (`logic/game`, `logic/rules`), isolated from the UI
- **State** handled in a custom hook (`useJokenpo`)
- **Presentational components** (`ChoiceIcon`) kept simple and reusable
- **Types** (`Choices`, `Result`) centralized

## Tech

- React
- TypeScript
- Vite
- Plain CSS with custom SVG glyphs (no UI library)

## Status

Deployed on GitHub Pages: https://daviarendreis.github.io/Jokenpo/
