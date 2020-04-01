/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import NPMPackage from "./npm-package"
import File from "./file"

const components = {
  NPMPackage,
  File,
}

const Layout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <Box p={3}>{children}</Box>
    </MDXProvider>
  )
}

export default Layout
