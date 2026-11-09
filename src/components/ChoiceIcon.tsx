import type { Choices } from "../types/choices"

interface ChoiceIconProps {
    choice: Choices
    className?: string
}

// Solid geometric glyphs, drawn in currentColor.
export default function ChoiceIcon ({ choice, className }: ChoiceIconProps) {
    return (
        <svg className={className} viewBox="0 0 120 120" fill="currentColor" aria-hidden="true">
            {choice === 'Rock' && (
                <path d="M16 82 C12 60 30 38 56 33 C82 28 106 46 106 70 C106 88 92 97 62 97 C34 97 18 94 16 82 Z" />
            )}
            {choice === 'Paper' && (
                <>
                    <path d="M28 16 H72 V46 H98 V104 H28 Z" />
                    <path d="M80 16 L98 34 V38 H80 Z" />
                </>
            )}
            {choice === 'Scissors' && (
                <>
                    <path d="M45 80 L86 13 L95 19 L57 86 Z" />
                    <path d="M75 80 L34 13 L25 19 L63 86 Z" />
                    <circle cx="37" cy="93" r="13" fill="none" stroke="currentColor" strokeWidth="9" />
                    <circle cx="83" cy="93" r="13" fill="none" stroke="currentColor" strokeWidth="9" />
                </>
            )}
        </svg>
    )
}
