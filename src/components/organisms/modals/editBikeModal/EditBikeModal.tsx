import React, { useState } from "react";
import Modal from "../../../molecules/modal/Modal";
import MyField from "../../../atoms/field/Field";
import { FlexRow } from "../addBikeModal/AddBikeModal.style";
import RoundedButton from "../../../atoms/buttons/roundedButton/RoundedButton";
import axios from "axios";

type initialValues = {
  id: string;
  brand: string;
  model: string;
  year: string;
  size: string;
  weight: string;
  img: string;
  dateOfPurchase: string;
};
interface Props {
  onClose: () => void;
  initialValues: initialValues;
}

const EditBikeModal: React.FC<Props> = ({ onClose, initialValues }) => {
  const [values, setValues] = useState(initialValues);
  console.log(values);

  const handleSubmit = () => {
    axios.put("http://localhost:8080/updateBike", values).then(() => onClose());
  };

  return (
    <Modal onClick={onClose} title={"Edit bike"}>
      <>
        <FlexRow>
          <MyField
            handleChange={(e) =>
              setValues({ ...values, brand: e.target.value })
            }
            value={values.brand}
            label={"Brand"}
          />
          <MyField
            handleChange={(e) =>
              setValues({ ...values, model: e.target.value })
            }
            value={values.model}
            label={"Model"}
          />
        </FlexRow>
        <FlexRow>
          <MyField
            handleChange={(e) => setValues({ ...values, year: e.target.value })}
            label={"Year"}
            value={values.year}
          />
          <MyField
            handleChange={(e) =>
              setValues({ ...values, weight: e.target.value })
            }
            label={"Weight"}
            value={values.weight}
          />
        </FlexRow>
        <FlexRow>
          <MyField
            handleChange={(e) => setValues({ ...values, size: e.target.value })}
            label={"Size"}
            value={values.size}
          />
          <MyField
            handleChange={(e) =>
              setValues({ ...values, dateOfPurchase: e.target.value })
            }
            label={"Date of purchase"}
            value={values.dateOfPurchase}
          />
        </FlexRow>
        <FlexRow>
          <MyField
            handleChange={(e) => setValues({ ...values, img: e.target.value })}
            label={"Img src"}
            value={values.img}
          />
        </FlexRow>
        <RoundedButton
          value={"Update bike"}
          style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
          //@ts-ignore
          onClick={() => handleSubmit()}
        />
      </>
    </Modal>
  );
};
export default EditBikeModal;
