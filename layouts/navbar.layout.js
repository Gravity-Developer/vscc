import { styled } from "@nextui-org/react"

export const Box = styled("div", {
  boxSizing: "border-box",
});

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    
  </Box>
);
