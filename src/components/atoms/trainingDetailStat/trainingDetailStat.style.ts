import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: solid 2px #f0eeee;
  padding-left: 10px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Values = styled.span`
  color: #656565;
  font-weight: bold;
  font-size: 11px;
`;
