import { useEffect, useRef, useState } from "react"
import useJokenpo, { type Round } from "./hooks/useJokenpo"
import useTheme from "./hooks/useTheme"
import ChoiceIcon from "./components/ChoiceIcon"
import RoundHistory from "./components/RoundHistory"
import ThemeToggle from "./components/ThemeToggle"
import { choices } from "./logic/rules"
import type { Choices } from "./types/choices"

const THROW_MS = 660

const keys: Record<string, Choices> = { r: 'Rock', p: 'Paper', s: 'Scissors' }

const outcomes: Record<Choices, string> = {
  Rock: 'rock crushes scissors',
  Paper: 'paper covers rock',
  Scissors: 'scissors cut paper',
}

const name = (c: Choices) => c.toLowerCase()

function resultText (round: Round) {
  if (round.result === 'draw') return `Draw: you both threw ${name(round.player)}.`
  if (round.result === 'player') return `You win: ${outcomes[round.player]}.`
  return `AI wins: ${outcomes[round.ai]}.`
}

export default function Jokenpo() {
  const { round, history, score, streak, play, reset } = useJokenpo()
  const { theme, toggle } = useTheme()
  const [throwing, setThrowing] = useState(false)
  const throwingRef = useRef(false)
  const throwRef = useRef<(choice: Choices) => void>(() => {})

  function throwHand (choice: Choices) {
    if (throwingRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      play(choice)
      return
    }
    throwingRef.current = true
    setThrowing(true)
    setTimeout(() => {
      play(choice)
      throwingRef.current = false
      setThrowing(false)
    }, THROW_MS)
  }

  useEffect(() => { throwRef.current = throwHand })

  useEffect(() => {
    function onKey (e: KeyboardEvent) {
      if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return
      const choice = keys[e.key.toLowerCase()]
      if (choice) throwRef.current(choice)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const rounds = history.length
  const winRate = rounds ? Math.round((score.player / rounds) * 100) : 0
  const revealed = round && !throwing ? round : null
  const aiHand: Choices = revealed ? revealed.ai : 'Rock'
  const playerHand: Choices = revealed ? revealed.player : 'Rock'
  const state = !round && !throwing ? 'idle' : throwing ? 'throwing' : `won-${revealed!.result}`

  return (
    <div className="app">
      <header className="top">
        <h1>Jokenpo</h1>
        <dl className="score">
          <div className="score-side score-player">
            <dt>You</dt>
            <dd>{score.player}</dd>
          </div>
          <div className="score-side score-ai">
            <dt>AI</dt>
            <dd>{score.ai}</dd>
          </div>
        </dl>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </header>

      <main className="play">
        <div className={`arena is-${state}`}>
          <figure className="side side-ai">
            <ChoiceIcon choice={aiHand} className="glyph glyph-ai" />
            <figcaption>AI</figcaption>
          </figure>
          <span className="vs" aria-hidden="true">vs</span>
          <figure className="side side-player">
            <ChoiceIcon choice={playerHand} className="glyph" />
            <figcaption>You</figcaption>
          </figure>
        </div>

        <div className="message" aria-live="polite">
          {throwing ? (
            <p className="chant" aria-hidden="true"><span>Jo…</span> <span>ken…</span> <span>pô!</span></p>
          ) : round ? (
            <>
              <p className={`result result-${round.result}`}>{resultText(round)}</p>
              {round.counteredFrom && (
                <p className="note">
                  You won last round with {name(round.counteredFrom)}, so it threw {name(round.ai)}.
                </p>
              )}
            </>
          ) : (
            <p className="note">Pick a hand below to start. The AI pays attention when you win.</p>
          )}
        </div>

        <div className="choices" role="group" aria-label="Throw a hand">
          {choices.map(choice => (
            <button
              key={choice}
              type="button"
              className="throw"
              onClick={() => throwHand(choice)}
              aria-disabled={throwing}
              aria-keyshortcuts={choice[0]}
            >
              <ChoiceIcon choice={choice} className="throw-glyph" />
              <span>{choice}</span>
              <kbd>{choice[0]}</kbd>
            </button>
          ))}
        </div>
      </main>

      <aside className="panel">
        <section className="panel-section" aria-labelledby="stats-title">
          <div className="panel-head">
            <h2 id="stats-title">This game</h2>
            <button type="button" className="text-button" onClick={reset} disabled={rounds === 0 || throwing}>
              New game
            </button>
          </div>
          <dl className="stats">
            <div><dt>Rounds</dt><dd>{rounds}</dd></div>
            <div><dt>Draws</dt><dd>{score.draws}</dd></div>
            <div><dt>Your win rate</dt><dd>{winRate}%</dd></div>
            <div><dt>Win streak</dt><dd>{streak}</dd></div>
          </dl>
        </section>

        <section className="panel-section" aria-labelledby="history-title">
          <h2 id="history-title">Last rounds</h2>
          <RoundHistory history={history} />
        </section>      </aside>
    </div>
  )
}
