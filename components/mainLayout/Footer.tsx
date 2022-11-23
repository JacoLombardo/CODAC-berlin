import React from 'react'
import { styled } from '@mui/material/styles'

function Footer() {
  const FooterDiv = styled("footer")`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: right;
    padding: 0.5em 1em;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.primary.dark};
  `
  return (
    <FooterDiv>By the students of Code Academy Berlin</FooterDiv>
  )
}

export default Footer