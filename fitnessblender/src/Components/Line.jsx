import { Box, Link, Text } from "@chakra-ui/layout";

function Line(){
    return(
        <div>
        {/* <Box>
        <Text bg={gray}>NEW: <Link> FB Strong Runner:</Link> 2-Week Strength-Focused Challenge</Text>
        </Box> */}
        <Box bg='gray.200' p={4} mt={-9} fontSize="0.8em" >
        NEW: <Link color='teal.500' href='#'> FB Strong Runner:</Link> 2-Week Strength-Focused Challenge
</Box>
        </div>
    )
}
export default Line;