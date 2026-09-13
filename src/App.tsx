import { CrumpledPaperIcon, FileIcon, ScissorsIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Heading, Theme } from "@radix-ui/themes";
import { useState } from "react";

type Choises = 'Rock' | 'Paper' | 'Scissors'

const beats: Record<Choises, Choises> = {
  Rock: 'Scissors',
  Paper: 'Rock',
  Scissors: 'Paper'
}

export default function App() {
  const [AI, setAI] = useState('Rock')
  const [PLAYER, setPLAYER] = useState('Paper')
  const [winner, setWinner] = useState('')

  function getAIChoice () {
    const number = Math.floor(Math.random() * 3)

    if (number === 1) {
      return 'Rock'
    } else if (number === 2) {
      return 'Paper'
    } else return 'Scissors'
  }

  function handleClick (playerChoice: Choises) {
    const AIChoise = getAIChoice()

    setAI(AIChoise)
    setPLAYER(playerChoice)
    setWinner(decideWinner(playerChoice, AIChoise))
  }

  function decideWinner (playerChoice: Choises, AIChoise: Choises) {
    if (playerChoice === AIChoise) {
      return 'Draw'
    } else if (beats[playerChoice] === AIChoise) {
      return 'Player Win!'
    } else return 'AI Win!'
  }

  return(
    <Theme appearance="dark" grayColor="slate" >
      <Box>
        <Flex align={'center'} justify={'center'} direction={'column'} gap={'4'} m={'4'}>
          <Heading size={'9'}>Jokenpo</Heading>
          <Heading size={'8'}>AI x Player</Heading>
          <Card>
            <Flex m={'7'}>
              <Heading as="h2">{AI === 'Rock' ? <CrumpledPaperIcon width={'4rem'} height={'4rem'}/> 
                                          : AI === 'Paper' ? <FileIcon width={'4rem'} height={'4rem'}/> 
                                          : <ScissorsIcon width={'4rem'} height={'4rem'}/>}</Heading>
              <Heading as="h2" size={'8'}>- x -</Heading>
              <Heading as="h2">{PLAYER === 'Rock' ? <CrumpledPaperIcon width={'4rem'} height={'4rem'}/> 
                                          : PLAYER === 'Paper' ? <FileIcon width={'4rem'} height={'4rem'}/> 
                                          : <ScissorsIcon width={'4rem'} height={'4rem'}/>}</Heading>
            </Flex>
          </Card>
          <Card>
            <Heading color="green" size={'8'}>{winner}</Heading>
          </Card>
          <Flex gap={'4'}>
            <Button color="gray" variant="outline" size={'4'} onClick={() => handleClick('Rock')}> <CrumpledPaperIcon/> </Button>
            <Button color="gray" variant="outline" size={'4'} onClick={() => handleClick('Paper')}> <FileIcon/> </Button>
            <Button color="gray" variant="outline" size={'4'} onClick={() => handleClick('Scissors')}> <ScissorsIcon/> </Button>
          </Flex>
        </Flex>
      </Box>
    </Theme>  
)}

