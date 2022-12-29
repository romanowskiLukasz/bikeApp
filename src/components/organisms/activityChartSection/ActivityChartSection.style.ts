import styled from "styled-components";

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 50%;
  background-color: grey;
`;

export const PowerZonesContainer = styled.div`
  display: FLEX;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
