import { useState } from "react"
import { decideResult, getAiChoice } from "../logic/game"
import type { Result } from "../types/results"
import type { Choices } from "../types/choices"

export default function useJokenpo () {
    const [aiChoice, setAiChoice] = useState<Choices>('Rock')
    const [playerChoice, setPlayerChoice] = useState<Choices>('Rock')
    const [winner, setWinner] = useState<Result>('draw')

    function handleClick (newPlayerChoice: Choices) {
        const newAiChoice = getAiChoice(playerChoice, winner)

        setAiChoice(newAiChoice)
        setPlayerChoice(newPlayerChoice)
        setWinner(decideResult(newPlayerChoice, newAiChoice))
    }

    return { aiChoice, playerChoice, winner, handleClick}
}
