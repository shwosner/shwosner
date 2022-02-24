import styled from "styled-components";

export const ProjectCard = styled.div`
  /* background: #efefef; */
  box-shadow: 0px 0px 3px 3px #efefef;
  width: 420px;
  /* min-height: 350px; */
  height: 100%;
  position: relative;

  h3 {
    text-align: center;
    margin: 0;
    background: #cfdfdf;
    padding: 12px;
  }
`;

export const CardBody = styled.div`
  /* display: grid;
  align-items: center; */
  /* min-height: 302px; */
  padding: 15px;
  padding-bottom: 30px;
  line-height: 1.3;
  height: 100%;
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: teal;
  a {
    color: white;
  }
`;
