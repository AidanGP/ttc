import React from 'react'
import { Heading, VStack, Text, Box, HStack, Button, Image, Link, Stack } from '@chakra-ui/react'
import L from '../images/samples/15.png'
import R from '../images/samples/2.png'


import charity_1 from '../images/charity1.png'
import charity_2 from '../images/charity2.png'

function Welcome() {
    return (
        <>
            <Box mx={[4, 4, 16, 32]} my={64}>
                <HStack spacing={0}>
                    <Image src={L} w={[0, 0, 0, 48, 80]} display={["none", "none", "none", "block"]} rounded="100%" />
                    <VStack spacing={16}>
                        <Box>
                            <Heading align="center">Welcome to the</Heading><Heading color="accent" align="center" size="4xl">Trippy Turtles Club</Heading>
                        </Box>
                        <Text align="center" w={["80%", "75%", "70%", "70%"]} fontSize={24}>Join  the  Trippiest  Turtles  in  the  NFT  space! We’re  a close-knit  community  of  10,000 tripped-out turtles stored  as  ERC-721  tokens  on the Ethereum compatible  Polygon  network.</Text>

                        <Link target="_blank" rel="noopener noreferrer" href="https://mint.trippyturtlesclub.com/" _hover={{ textDecoration: 'none' }}>
                            <Button
                                variant='solid'
                                p={10}
                                // rightIcon={<FaArrowRight />}
                                borderRadius={80}
                                bgColor="accent"
                                fontSize='32'
                                color="black"
                                borderColor="accent"
                                borderWidth="2px"
                                _focus={{ outline: 0 }}
                                _hover={{ bgColor: "transparent", color: "white", transform: "rotate(-3deg)" }}
                            >
                                Mint Now
                            </Button>
                        </Link>
                    </VStack>

                    <Image src={R} w={[0, 0, 0, 48, 80]} display={["none", "none", "none", "block"]} rounded="100%" />
                </HStack>

                <VStack align='center'>
                    <Heading color="accent" size="lg" pt={32} pb={8}>Official Charity Partners</Heading>
                    <Stack align='center' direction={['column', 'row', 'row', 'row']} spacing={8}>
                        <Image src={charity_1} maxW={32} />
                        <Image src={charity_2} maxH={32} />
                    </Stack>
                </VStack>
            </Box>
        </>
    )
}

export default Welcome