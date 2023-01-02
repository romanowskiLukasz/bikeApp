import React, { useState } from "react";
import * as S from "./AddBikeModal.style";
import Modal from "../../../molecules/modal/Modal";
import MyField from "../../../atoms/field/Field";
import { FlexRow } from "./AddBikeModal.style";
import RoundedButton from "../../../atoms/buttons/roundedButton/RoundedButton";

const axios = require("axios").default;

interface Props {
  onClick: () => void;
  title: string;
}

const AddBikeModal: React.FC<Props> = ({ onClick, title }) => {
  const [values, setValues] = useState({
    brand: "",
    model: "",
    year: "",
    size: "",
    weight: "",
    dateOfPurchase: "",
    img: "",
  });

  const userId = 1;
  const onSubmit = () => {
    axios
      .post("http://localhost:8080/addBike", {
        userId: userId,
        brand: values.brand,
        model: values.model,
        year: values.year,
        weight: values.weight,
        size: values.size,
        dateOfPurchase: values.dateOfPurchase,
        img: values.img,
      })
      .then(() => onClick());
  };

  return (
    <Modal onClick={onClick} title={title}>
      <>
        <S.FlexRow>
          <MyField
            value={values.brand}
            handleChange={(e) =>
              setValues({ ...values, brand: e.target.value })
            }
            label={"Brand"}
          />
          <MyField
            value={values.model}
            handleChange={(e) =>
              setValues({ ...values, model: e.target.value })
            }
            label={"Model"}
          />
        </S.FlexRow>
        <S.FlexRow>
          <MyField
            value={values.year}
            handleChange={(e) => setValues({ ...values, year: e.target.value })}
            label={"Year"}
          />
          <MyField
            value={values.weight}
            handleChange={(e) =>
              setValues({ ...values, weight: e.target.value })
            }
            label={"Weight"}
          />
        </S.FlexRow>
        <S.FlexRow>
          <MyField
            value={values.size}
            handleChange={(e) => setValues({ ...values, size: e.target.value })}
            label={"Size"}
          />
          <MyField
            value={values.dateOfPurchase}
            handleChange={(e) =>
              setValues({ ...values, dateOfPurchase: e.target.value })
            }
            label={"Date of purchase"}
          />
        </S.FlexRow>
        <S.FlexRow>
          <MyField
            value={values.img}
            handleChange={(e) => setValues({ ...values, img: e.target.value })}
            label={"Img src"}
          />
        </S.FlexRow>
        <RoundedButton
          value={"Add new bike"}
          style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
          // @ts-ignore
          onClick={onSubmit}
        />
      </>
    </Modal>
  );
};
export default AddBikeModal;
