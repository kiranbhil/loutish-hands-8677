import { Box, Button, ButtonGroup, Flex, Heading, Link, Spacer } from "@chakra-ui/react";

function Navbar(){
  return (
    <Flex minWidth='max-content' w="100%" alignItems='center' gap='3'>
      <Box p='5'>
        <Heading size='md'>Chakra App</Heading>
      </Box>
      <Box>
        <Heading size="s">WORKOUTS</Heading>
      </Box>

      <Box>
        <Heading size="s">WORKOUTS</Heading>
      </Box>
      <Box>
        <Link size="s">WORKOUTS</Link>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='teal'>Sign Up</Button>
        <Button colorScheme='teal'>Log in</Button>
      </ButtonGroup>

    </Flex>

  )
}
export default Navbar;