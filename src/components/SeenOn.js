import React from 'react'
import { Box, VStack, Image, Heading, SimpleGrid, Center, Link } from '@chakra-ui/react'


import a from '../images/nft-calendar.png'

function Here({ src, name, url }) {
    return (
        <>
            <Link w='100%' h='100%' p={4} pb={6} bg='transparent' rounded={16} _hover={{ bgColor: 'rgb(44,44,44, 0.5)' }} _focus={{ outline: 0 }} href={url} target="_blank" rel="noopener noreferrer">
                <Box>
                    <VStack spacing={5}>
                        <Image maxW={64} src={src} />
                        <Box align="center">
                            <Heading size='md' color="accent" weight='bold' >{name}</Heading>
                        </Box>
                    </VStack>
                </Box>
            </Link>
        </>
    )
}


function SeenOn() {
    return (
        <>
            <Box mt={32}>
                <Heading color="accent" align="center" pb={12} size="4xl">As Seen On</Heading>
            </Box>
            <Box mx={[32, 32, 16, 16, 32]} id="Team">
                <Center>
                    <SimpleGrid spacing="6vw" columns={["1", "1", "2", "2"]} rowGap={8}>
                        <Here name="NFTCalendar.io" src={a} url='https://nftcalendar.io/event/trippy-turtles-club/' />
                        <Here name="NFTPilot.io" src={'https://www.nftpilot.io/wp-content/uploads/2022/01/Nftpilot_logo_300x300_w_text.png'} url='https://www.nftpilot.io/nft-project/trippy-turtles-club/' />
                    </SimpleGrid>
                </Center>
            </Box>
        </>
    )
}

export default SeenOn