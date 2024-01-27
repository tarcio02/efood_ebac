import styled from 'styled-components'

import bannerImg from '../../assets/images/Vector.png'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  background-image: url(${bannerImg});
  background-size: cotain;

  .container {
    height: 186px;
    display: flex;
    text-align: center;
    padding: 40px 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;

  button {
    border: none;
    background: transparent;
    color: ${cores.coral};
    cursor: pointer;
  }
`
