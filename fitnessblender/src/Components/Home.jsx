import { Box, Button, Flex, Image, Square, Stack, Text, VStack } from "@chakra-ui/react";

function Home(){
    return(
        <>
            <Box bg={'blue.300'} >
            <Flex>
            <VStack>
            <Stack spacing={1} mt={40} ml={20} color="white"> 
                <Text fontSize='5xl'>Feel Great.</Text>
                <Text fontSize='4xl'>Body and Mind.</Text>
                <Text fontSize='2xl'>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</Text>
                
            </Stack>
            <Stack mt={10} ml={25}>
                <Button size='lg' w={150} bg={'blue.800'} color="white">JOIN NOW</Button>
            </Stack>
            </VStack>
                <Image ml={50} height={650} src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-1440.webp"/>
        
            </Flex>
            </Box>
            <br/>
            <Box bg={'gray.300'}>
            <VStack>
            <Stack spacing={1} mt={40} ml={20} color="black"> 
                <Text fontSize='5xl'>Feel Great.</Text>
                <Text fontSize='4xl'>Body and Mind.</Text>
                <Text fontSize='2xl'>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</Text>
                
            </Stack>
            <Stack mt={10} ml={25}>
                <Button size='lg' w={150} bg={'blue.800'} color="white">JOIN NOW</Button>
            </Stack>
            </VStack>

            </Box>
        <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-1440.webp" ></Image>
        </>
    )
}
export default Home;