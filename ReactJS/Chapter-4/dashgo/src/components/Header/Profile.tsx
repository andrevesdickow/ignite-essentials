import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {
        showProfileData && (
          <Box
            mr="4"
            textAlign="right"
          >
            <Text>Andrêves Dickow</Text>
            <Text
              color="gray.300"
              fontSize="small"
            >
              andreves@dickow.me
            </Text>
          </Box>
        )
      }

      <Avatar
        size="md"
        name="Andrêves Dickow"
        src="https://github.com/andrevesdickow.png"
      />
    </Flex>
  )
}