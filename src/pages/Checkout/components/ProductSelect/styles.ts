import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;

  tbody {
    font-size: 0.875rem;
  }

  tr {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }
`
export const ButtonConfirm = styled.button`
  width: 100%;
  font-weight: 700;
  border-radius: 6px;
  border: 0;
  outline: none;
  padding: 12px 8px;
  margin-top: 1.5rem;
  cursor: pointer;

  font-size: 0.875rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
`
