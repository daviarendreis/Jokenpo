import { CrumpledPaperIcon, FileIcon, ScissorsIcon } from "@radix-ui/react-icons"

interface ChoiceIconProps {
    playerChoice: string
}

export default function ChoiceIcon ({playerChoice}: ChoiceIconProps) {
    return (
        playerChoice === 'Rock' ? <CrumpledPaperIcon width={'4rem'} height={'4rem'}/> 
        : playerChoice === 'Paper' ? <FileIcon width={'4rem'} height={'4rem'}/> 
        : <ScissorsIcon width={'4rem'} height={'4rem'}/>
    )
}