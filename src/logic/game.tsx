import type { Choices } from "../types/choices"
import type { Result } from "../types/results"
import { beats, choices, winners } from "./rules"


export function getAiChoice (lastPlayerChoice: Choices, lastWinner: Result) {

    if (lastWinner === 'player') return winners[lastPlayerChoice]

    const index = Math.floor(Math.random() * 3)
    return choices[index]
}

export function decideResult (playerChoice: Choices, aiChoise: Choices) {
        if (playerChoice === aiChoise) return 'draw'
        if (beats[playerChoice] === aiChoise) return 'player'
        return 'ai'
} 