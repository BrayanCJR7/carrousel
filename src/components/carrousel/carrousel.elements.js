import styled from "styled-components";

export const CardArticulo = styled.div`
  position: relative;
  background-color: white;
  max-width: 270px;
  height: 408px;
  margin: 0 auto;
  padding: 3rem 1rem 1rem;
`

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 1rem;
  left: 1rem;
  gap: 4px;
`

export const CardHeaderState = styled.div`
  height: 20px;
  font-size: 12px;
  border: solid 2px ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 0.5rem;
  padding: 0 0.25rem;
`

export const CardArticuloBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  img {
    max-height: 15rem;
    object-fit: contain;
  }
`
export const BodyText = styled.div`
  color: var(--firt-color);
  text-align: center;
  max-height: 170px;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h1 {
    font-size: 16px;
    margin: 0;
    span {
      font-size: 12px;
      color: #9c9c9c;
    }
  }
  .price {
    font-size: 20px;
    font-weight: 500;
  }
`

export const TextUnidades = styled.span`
  font-size: 10px;
  color: ${(props) => props.color};
`
