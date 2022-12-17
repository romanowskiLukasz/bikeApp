import React, { useState } from "react";
import * as S from "./../addBikeModal/AddBikeModal.style";
import Modal from "../../../molecules/modal/Modal";
import MyField from "../../../atoms/field/Field";
import RoundedButton from "../../../atoms/buttons/roundedButton/RoundedButton";
import MySelect from "../../../atoms/field/select/MySelect";

const axios = require("axios").default;

interface Props {
  onClose: () => void;
  title: string;
}

const AddPartModal: React.FC<Props> = ({ onClose, title }) => {
  const [values, setValues] = useState({
    model: "",
    bikeType: "",
    category: "",
  });

  const onSubmit = () => {
    axios.post("http://localhost:8080/addPart", values);
    onClose();
  };

  return (
    <Modal onClick={onClose} title={title}>
      <>
        <S.FlexRow>
          <MyField
            value={values.model}
            handleChange={(e) =>
              setValues({ ...values, model: e.target.value })
            }
            label={"Model"}
          />
          <MySelect
            value={values.bikeType}
            handleChange={(e) =>
              setValues({ ...values, bikeType: e.target.value })
            }
            label={"Bike type"}
          >
            <>
              <option value={"Road"}>Road Bike</option>
              <option value={"MTB"}>Mountain Bike</option>
            </>
          </MySelect>
        </S.FlexRow>
        <S.FlexRow>
          <MySelect
            value={values.category}
            handleChange={(e) =>
              setValues({ ...values, category: e.target.value })
            }
            label={"Part type"}
          >
            <>
              <option>chain</option>
              <option>tires</option>
              <option value={"brakePads"}>brake pads</option>
              <option>cassette</option>
            </>
          </MySelect>
        </S.FlexRow>

        <RoundedButton
          value={"Add new part"}
          style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
          // @ts-ignore
          onClick={onSubmit}
        />
      </>
    </Modal>
  );
};
export default AddPartModal;
