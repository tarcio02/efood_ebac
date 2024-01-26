import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

import fechar from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.coral};
  z-index: 1;
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.coral};
  margin-bottom: 24px;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.bege};
  margin: 32px 0 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.coral};
    font-weight: bold;
    font-size: 16px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
