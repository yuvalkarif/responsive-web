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
  min-width: 70%;

  background-repeat: no-repeat;
  background-size: 130vw;
  aspect-ratio: 1/1;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
  flex-basis: 100%;
  margin: 0.35rem;

  span {
    font-size: 0.65em;
    margin-bottom: 0.5em;
    font-weight: 400;
  }
  p {
    font-size: 1.15em;
    font-weight: 500;
  }
`;
