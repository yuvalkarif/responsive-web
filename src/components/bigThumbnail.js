import { Wrapper } from "./bigThumbnail.styles";
export default function BigThumbnail() {
  return (
    <Wrapper
      imgSrc={
        "https://img-cdn.tnwcdn.com/image?fit=600%2C300&url=https%3A%2F%2Fs3.amazonaws.com%2Fevents.tnw%2Fhardfork-2018%2Fuploads%2Fcompanies%2Fhome-header_advert-tnw2021-02.jpg&signature=b329e697ef45b4d8a9a40a62e03f2a48"
      }
    >
      <span>
        TNW Conference goes hybrid <br />
        It’ll be an experience you’ll never forget
      </span>
      <button>GET TICKETS</button>
    </Wrapper>
  );
}
