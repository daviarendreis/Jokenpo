import type { Round } from "../hooks/useJokenpo"
import ChoiceIcon from "./ChoiceIcon"

const SHOWN = 8

const label = { player: 'You won', ai: 'AI won', draw: 'Draw' } as const

interface RoundHistoryProps {
    history: Round[]
}

export default function RoundHistory ({ history }: RoundHistoryProps) {
    if (history.length === 0) {
        return <p className="empty">Your rounds will show up here.</p>
    }

    return (
        <ol className="history">
            {history.slice(0, SHOWN).map((r, i) => (
                <li key={history.length - i} className={`history-row history-${r.result}`}>
                    <span className="history-number">{history.length - i}</span>
                    <span className="history-hands" aria-label={`AI threw ${r.ai.toLowerCase()}, you threw ${r.player.toLowerCase()}`}>
                        <ChoiceIcon choice={r.ai} className="history-glyph history-glyph-ai" />
                        <ChoiceIcon choice={r.player} className="history-glyph" />
                    </span>
                    <span className="history-result">
                        {label[r.result]}
                        {r.counteredFrom && <span className="history-tag">AI countered</span>}
                    </span>
                </li>
            ))}
        </ol>
    )
}
