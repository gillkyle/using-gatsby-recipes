/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { FiFile } from "react-icons/fi"

const File = props => {
  console.log(props)
  return (
    <Flex
      m={-2}
      p={3}
      sx={{
        flexDirection: `column`,
        fontSize: 3,
        borderRadius: 2,
        border: theme => `1px solid ${theme.colors.gray[2]}`,
        boxShadow: theme => theme.shadows.default,
        backgroundColor: theme => theme.colors.gray[1],
      }}
    >
      <Flex
        sx={{
          alignItems: `baseline`,
        }}
      >
        <FiFile size={36} sx={{ alignSelf: `center`, mr: 2 }} /> File will be
        created at:{" "}
        <code
          sx={{
            backgroundColor: theme => theme.colors.blue[2],
            borderRadius: 4,
            py: 1,
            px: 2,
            ml: 2,
          }}
        >
          {props.path}
        </code>
      </Flex>
      <Flex px="36px" sx={{ flexDirection: `column` }}>
        <Flex sx={{ fontSize: 2 }}>With the contents:</Flex>{" "}
        <Flex>
          <code>{props.content}</code>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default File
