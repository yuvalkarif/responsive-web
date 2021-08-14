import styled from "styled-components";
export const ThumbnailSections = styled.section`
  display: flex;
`;
export const Swipe = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0;
    margin: 0rem 15rem;
    height: 30rem;

    div {
      margin: 0.35rem;
    }

    div:nth-child(1) {
      grid-column: 1 / span 4;
      grid-row: 1 / span 1;
      aspect-ratio: unset;
    }
    div:nth-child(2) {
      grid-column: 1 / span 2;
      grid-row: 2 / span 2;
      aspect-ratio: unset;
    }
    div:nth-child(3) {
      grid-column: 3 / span 2;
      grid-row: 2 / span 2;
      aspect-ratio: unset;
    }
  }
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

export const ArticlesWrapper = styled.div`
  min-width: 90%;
  padding: 3rem 5vw;
  background-color: var(--lightGrey);
  h2 {
    text-align: center;
    font-size: 1.45rem;
    font-weight: 500;
    color: var(--darkGrey);
    font-family: "Changa", sans-serif;
    margin-bottom: 0.5em;
  }

  ol > li {
    display: flex;

    line-height: 1.5;
    h3 {
      font-size: 1.65rem;
      font-weight: 500;
      color: var(--brightPink);
    }
    span {
      padding: 1rem;
      padding-top: 0.4rem;
      font-weight: 500;
    }
  }
  @media (min-width: 1024px) {
    padding: 3rem 5rem;
    ol {
      display: flex;
    }
  }
`;
