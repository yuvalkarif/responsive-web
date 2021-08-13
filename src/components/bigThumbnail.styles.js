import styled from "styled-components";
export const Wrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  max-width: 85%;
  aspect-ratio: 16/9;
  margin: 3.5%;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
  white-space: pre;
  span {
    text-align: center;
    color: white;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
  button {
    text-align: center;
    color: white;
    font-weight: 600;
    background: none;
    border: 2px solid white;
    padding: 1em 2em;
    border-radius: 2em;
    cursor: pointer;
  }
`;
