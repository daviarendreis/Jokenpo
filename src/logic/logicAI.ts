import type { Choices } from "../types/choices"
import { beats, choices } from "./rules"

export function getAIChoice () {
    const index = Math.floor(Math.random() * 3)
    return choices[index]
}

export function decideWinner (playerChoice: Choices, aiChoise: Choices) {
        if (playerChoice === aiChoise) return 'draw'
        if (beats[playerChoice] === aiChoise) return 'player'
        return 'ai'
} 