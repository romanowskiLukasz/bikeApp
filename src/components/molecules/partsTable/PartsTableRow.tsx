import React, { useEffect, useState } from "react";
import * as S from "./PartsTable.style";
import MySelect from "../../atoms/field/select/MySelect";
import RoundedButton from "../../atoms/buttons/roundedButton/RoundedButton";

const axios = require("axios").default;

interface Props {
  part: any;
}
const PartsTable: React.FC<Props> = ({ part }) => {
  const [bikeInfos, setBikeInfos] = useState([]);
  const [choosenBikeId, setChoosenBikeId] = useState(0);
  const [hideRow, setHideRow] = useState(false);
  const userId = 1;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getAllBikes/${userId}`)
      .then((resp: any) => {
        setBikeInfos(resp.data);
      });
  }, []);

  const handleBikeChange = () => {
    axios
      .put(
        `http://localhost:8080/updateBikePart/${part.id}/${choosenBikeId}/${part.category}`
      )
      .then(() => {
        setHideRow(true);
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/deletePart/${part.id}`).then(() => {
      setHideRow(true);
    });
  };

  return (
    <li
      className="table-row"
      style={{ display: `${hideRow ? "none" : "flex"}` }}
    >
      <div className="col col-1" data-label="Part Id">
        {part.id}
      </div>
      <div className="col col-2" data-label="Model">
        {part.model}
      </div>
      <div className="col col-3" data-label="Purchase date">
        {part.purchaseDate}
      </div>
      <div className="col col-4" data-label="Bike type">
        {part.bikeType}
      </div>
      <div
        className="col col-6"
        data-label="delete"
        style={{ display: "flex" }}
      >
        <MySelect
          value={choosenBikeId}
          handleChange={(e) => setChoosenBikeId(e.target.value)}
          label={""}
        >
          <>
            {bikeInfos.map((bikeInfo: any) => {
              return (
                <option value={bikeInfo.id}>
                  {bikeInfo.brand} {bikeInfo.model}
                </option>
              );
            })}
          </>
        </MySelect>
        <RoundedButton
          value={"Change"}
          // @ts-ignore
          onClick={() => handleBikeChange()}
          style={{
            padding: "5px",
            borderRadius: "5px",
            height: "29px",
          }}
        />
      </div>
      <div className="col col-6" data-label="delete">
        <S.DeleteButton
          src={"https://cdn-icons-png.flaticon.com/512/5676/5676047.png"}
          onClick={() => handleDelete()}
        />
      </div>
    </li>
  );
};
export default PartsTable;
