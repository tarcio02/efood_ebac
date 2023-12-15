import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardContainer = styled.div`
  background-color: ${cores.branco};
  padding: 8px;
  margin-bottom: 45px;
  border-left: 1px solid ${cores.coral};
  border-right: 1px solid ${cores.coral};
  border-bottom: 1px solid ${cores.coral};
  margin-top: -4px;
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nota = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
