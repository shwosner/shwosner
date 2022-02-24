import styled from "styled-components";

const SectionCS = styled.section`
  background: #efefef;
  width: 100vw;
  margin-top: 50px;
  margin-bottom: 50px;
  h1 {
    background: #cfdfdf;
    text-align: center;
    color: teal;
    padding: 20px;
    margin: 0;
  }
`;
// const Box = styled.div`
//   height: 300px;
//   width: 300px;
//   background: white;
//   border-radius: 3px;
//   padding: 20px;
//   h3 {
//     text-align: center;
//     text-transform: uppercase;
//   }
// `;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 30px 30px 30px;
  img {
    width: 200px;
  }
  #nutritt {
    margin-top: -10px;
    width: 180px;
  }
  @media only screen and (max-width: 750px) {
    img {
      width: 100px;
    }
    #nutritt {
      width: 100px;
      margin-top: -6px;
    }
  }
`;

export default function HelpedBuilding() {
  return (
    <SectionCS>
      {/* <h1>{"<Helped building/>"}</h1> */}
      <h1>{"<Was a major contributor to/>"}</h1>
      <BoxContainer>
        {/* <Box>
          <h3>Compky</h3>
          <a href="https://compky.com" target="_blank">
            <img src="compky.png" alt="compky" width="100%" />
          </a>
        </Box>
        <Box>
          <h3>Nutritt</h3>
          <a href="https://www.nutritt.com" target="_blank">
            <img src="nutritt.png" alt="nutritt" width="100%" />
          </a>
        </Box>
        <Box>
          <h3>File-Evictions</h3>
          <a href="https://fileevictions.com/" target="_blank">
            <img src="fileEviction.svg" alt="fileEvictions" width="100%" />
          </a>
        </Box> */}
        <a href="https://compky.com" target="_blank">
          <img src="compky.png" alt="compky" />
        </a>
        <a href="https://nutritt.com" target="_blank">
          <img src="nutritt.png" alt="nutritt" id="nutritt" />
        </a>
        <a href="https://fileevictions.com/" target="_blank">
          <img src="fileEviction.svg" alt="fileEvictions" />
        </a>
      </BoxContainer>
    </SectionCS>
  );
}
