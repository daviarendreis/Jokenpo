import { useState } from "react"
import { decideResult, getAiChoice } from "../logic/game"
import type { Result } from "../types/results"
import type { Choices } from "../types/choices"

export interface Round {
    player: Choices
    ai: Choices
    result: Result
    // Set when the AI played the counter to the player's previous winning move
    counteredFrom: Choices | null
}

export default function useJokenpo () {
    // Newest round first
    const [history, setHistory] = useState<Round[]>([])
    const round = history[0] ?? null

    function play (playerChoice: Choices) {
        const aiChoice = round ? getAiChoice(round.player, round.result) : getAiChoice(playerChoice, 'draw')
        const result = decideResult(playerChoice, aiChoice)
        const counteredFrom = round?.result === 'player' ? round.player : null

        setHistory(h => [{ player: playerChoice, ai: aiChoice, result, counteredFrom }, ...h])
    }

    function reset () {
        setHistory([])
    }

    const score = {
        player: history.filter(r => r.result === 'player').length,
        ai: history.filter(r => r.result === 'ai').length,
        draws: history.filter(r => r.result === 'draw').length,
    }

    let streak = 0
    while (history[streak]?.result === 'player') streak++

    return { round, history, score, streak, play, reset }
}
