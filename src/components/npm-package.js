/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { FiPackage } from "react-icons/fi"

const NPMPackage = ({ name }) => {
  return (
    <Flex
      m={-2}
      p={3}
      sx={{
        alignItems: `baseline`,
        fontSize: 3,
        borderRadius: 2,
        border: theme => `1px solid ${theme.colors.gray[2]}`,
        boxShadow: theme => theme.shadows.default,
        backgroundColor: theme => theme.colors.gray[1],
      }}
    >
      <FiPackage size={36} sx={{ alignSelf: `center`, mr: 2 }} /> The NPM
      Package:{" "}
      <code
        sx={{
          backgroundColor: theme => theme.colors.blue[2],
          borderRadius: 4,
          py: 1,
          px: 2,
          mx: 2,
        }}
      >
        {name}
      </code>{" "}
      will be installed
    </Flex>
  )
}

export default NPMPackage
