import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.img`
  max-width: 100%;
  padding: 8px 8px 0 8px;
  background-color: ${cores.coral};
`

export const Card = styled.div`
  position: relative;
  overflow: auto;
`

export const CardContainer = styled.div`
  background-color: ${cores.coral};
  padding: 8px;
  margin-bottom: 32px;
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
  color: ${cores.bege};
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
  color: ${cores.bege};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const TagContainer = styled.div`
  background-color: ${cores.coral};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`

export const SaibaMais = styled.button`
  background-color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  display: inline-block;
  width: 100%;
  border: none;
  cursor: pointer;
`
