import { Wrapper } from "./thumbnail.styles";
export default function Thumbnail({ info }) {
  const { imgSrc, category, title } = info;

  return (
    <Wrapper imgSrc={imgSrc}>
      <span>{category}</span>
      <p>{title}</p>
    </Wrapper>
  );
}
