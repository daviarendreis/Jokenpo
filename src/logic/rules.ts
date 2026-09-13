import type { Choices } from "../types/choices"

export const choices: Choices[] = ['Rock', 'Paper', 'Scissors']

export const beats: Record<Choices, Choices> = {
  Rock: 'Scissors',
  Paper: 'Rock',
  Scissors: 'Paper'
}

export const winners: Record<Choices, Choices> = {
  Rock: 'Paper',
  Paper: 'Scissors',
  Scissors: 'Rock'
}