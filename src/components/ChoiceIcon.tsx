import { CrumpledPaperIcon, FileIcon, ScissorsIcon } from "@radix-ui/react-icons"
import type { Choices } from "../types/choices"

interface ChoiceIconProps {
    choice: Choices
}

export default function ChoiceIcon ({choice}: ChoiceIconProps) {
    return (
        choice === 'Rock' ? <CrumpledPaperIcon width={'4rem'} height={'4rem'}/> 
        : choice === 'Paper' ? <FileIcon width={'4rem'} height={'4rem'}/> 
        : <ScissorsIcon width={'4rem'} height={'4rem'}/>
    )
}