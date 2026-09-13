import { useState } from "react"
import { decideWinner, getAIChoice } from "../logic/logicAI"
import type { Result } from "../types/results"
import type { Choices } from "../types/choices"

export default function useJokenpo () {
    const [AI, setAI] = useState('Rock')
    const [PLAYER, setPLAYER] = useState('Paper')
    const [winner, setWinner] = useState<Result>('player')

    function handleClick (playerChoice: Choices) {
        const AIChoise = getAIChoice()

        setAI(AIChoise)
        setPLAYER(playerChoice)
        setWinner(decideWinner(playerChoice, AIChoise))
    }

    
    return { AI, PLAYER, winner, handleClick}
}