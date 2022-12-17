import React from "react";
import * as S from "./PartsTable.style";
import PartsTableRow from "./PartsTableRow";

interface Props {
  parts: any;
}
const PartsTable: React.FC<Props> = ({ parts }) => {
  return (
    <S.Container className="container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Part id</div>
          <div className="col col-2">Model</div>
          <div className="col col-3">Purchase date</div>
          <div className="col col-4">Bike type</div>
          <div className="col col-5">Add to bike</div>
          <div className="col col-6">Delete</div>
        </li>
        {parts.map((part: any) => {
          return <PartsTableRow part={part} />;
        })}
      </ul>
    </S.Container>
  );
};
export default PartsTable;
