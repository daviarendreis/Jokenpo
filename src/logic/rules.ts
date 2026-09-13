import type { Choices } from "../types/choices"

export const choices: Choices[] = ['Rock', 'Paper', 'Scissors']

export const beats: Record<Choices, Choices> = {
  Rock: 'Scissors',
  Paper: 'Rock',
  Scissors: 'Paper'
}