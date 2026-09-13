import { CrumpledPaperIcon, FileIcon, ScissorsIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Heading } from "@radix-ui/themes";
import useJokenpo from "./hooks/useJokenpo";
import type { Result } from "./types/results";
import ChoiceIcon from "./components/ChoiceIcon";

const resultMessages: Record<Result, string> = {
  draw: 'Draw',
  player: 'Player Win!',
  ai: 'AI Win!',
}

export default function Jokenpo() {
    const { aiChoice, playerChoice, winner, handleClick} = useJokenpo()

  return(
    
      <Box>
        <Flex align={'center'} justify={'center'} direction={'column'} gap={'4'} m={'4'}>
          <Heading size={'9'}>Jokenpo</Heading>
          <Heading size={'8'}>AI -x- Player</Heading>
          <Card>
            <Flex m={'7'}>
              <Heading as="h2"><ChoiceIcon choice={aiChoice}/></Heading>
              <Heading as="h2" size={'8'}>- x -</Heading>
              <Heading as="h2"><ChoiceIcon choice={playerChoice}/></Heading>
            </Flex>
          </Card>
          <Card size={'2'}>
            <Flex minWidth={'11.9rem'} justify={'center'}>
              <Heading color="green" size={'8'} >{resultMessages[winner]}</Heading>
            </Flex>
          </Card>
          <Flex gap={'4'}>
            <Button color="gray" variant="outline" size={'4'} onClick={() => handleClick('Rock')}> <CrumpledPaperIcon/> </Button>
            <Button color="gray" variant="outline" size={'4'} onClick={() => handleClick('Paper')}> <FileIcon/> </Button>
            <Button color="gray" variant="outline" size={'4'} onClick={() => handleClick('Scissors')}> <ScissorsIcon/> </Button>
          </Flex>
        </Flex>
      </Box>
      
)}

