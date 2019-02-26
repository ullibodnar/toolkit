import React, { useState } from 'react'
import { StyledHeader } from './components/layout'
import Border from './components/Border'

const DefaultTool = () => {
  return <p>Please select a tool</p>
}

export default () => {
  const [tool, setTool] = useState('border')

  return (
    <>
      <StyledHeader>
        <h1>Toolkit</h1>
        <p>Select a tool:</p>
        <button onClick={() => setTool('border')}>Border</button>
        <button onClick={() => setTool('shadow')}>Box Shadow</button>
      </StyledHeader>
      {getTool(tool)}
    </>
  )
}

function getTool (tool) {
  switch (tool) {
    case 'border':
      return <Border />

    case 'shadow':
      return <p>Box Shadow</p>

    default:
      return <DefaultTool />
  }
}
