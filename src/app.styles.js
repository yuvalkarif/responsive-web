import styled from "styled-components";
export const ThumbnailSections = styled.section`
  display: flex;
`;
export const Swipe = styled.div`
  display: flex;
  flex-direction: row;

  overflow-x: auto;
  overflow-y: hidden;
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--lightGrey);
  padding: 1.5rem 0;

  header {
    font-family: "Changa", sans-serif;
    font-weight: 700;
    font-size: 20vw;
    text-align: center;
    width: fit-content;
    height: fit-content;
  }
  span {
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    color: var(--darkerGrey);
  }
`;
