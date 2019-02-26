import styled from 'styled-components'

export const StyledToolWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 10px;
  border-color: black;
  border-style: solid;
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-radius: ${({ borderRadius }) => borderRadius};
`

export const StyledHeader = styled.div`
  text-align: center;
`
