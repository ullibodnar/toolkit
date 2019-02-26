import React, { useState } from 'react'
import styled from 'styled-components'

import { StyledToolWrapper } from '../layout/index'

const ExampleDiv = styled.div`
  width: 90%;
  height: 100px;
  background: #222222;
`

export default () => {
  const [radius, setRadius] = useState({
    tl: 0,
    tr: 0,
    br: 0,
    bl: 0,
    all: 0
  })
  const { tl, tr, br, bl, all } = radius

  const [width, setWidth] = useState(0)

  return (
    <StyledToolWrapper
      borderWidth={width}
      borderRadius={`${tl}px ${tr}px ${br}px ${bl}px`}
    >
      <h1>Border</h1>
      <h2>Width: </h2>

      <input
        type='range'
        min='0'
        max='20'
        value={width}
        onChange={e => setWidth(e.target.value)}
      />
      <code>{width}px</code>

      <h2>Radius:</h2>
      <p>Top Left:</p>
      <input
        type='range'
        min='0'
        max='20'
        value={tl}
        onChange={e => setRadius({ ...radius, tl: e.target.value })}
      />
      <code>{tl}px</code>
      <p>Top Right:</p>
      <input
        type='range'
        min='0'
        max='20'
        value={tr}
        onChange={e => setRadius({ ...radius, tr: e.target.value })}
      />
      <code>{tr}px</code>

      <p>Bottom Right:</p>
      <input
        type='range'
        min='0'
        max='20'
        value={br}
        onChange={e => setRadius({ ...radius, br: e.target.value })}
      />
      <code>{br}px</code>

      <p>Bottom Left:</p>
      <input
        type='range'
        min='0'
        max='20'
        value={bl}
        onChange={e => setRadius({ ...radius, bl: e.target.value })}
      />
      <code>{bl}px</code>

      <p>All:</p>
      <input
        type='range'
        min='0'
        max='20'
        value={all}
        onChange={e =>
          setRadius({
            ...radius,
            tl: e.target.value,
            tr: e.target.value,
            br: e.target.value,
            bl: e.target.value,
            all: e.target.value
          })
        }
      />
      <code>{all}px</code>
    </StyledToolWrapper>
  )
}
