import React, { useState } from "react";
import Modal from "../../../molecules/modal/Modal";
import MyField from "../../../atoms/field/Field";
import { FlexRow } from "../addBikeModal/AddBikeModal.style";
import RoundedButton from "../../../atoms/buttons/roundedButton/RoundedButton";

type initialValues = {
  brand: string;
  model: string;
  year: string;
  size: string;
  weight: string;
  dateOfPurchase: string;
};
interface Props {
  onClose: () => void;
  initialValues: initialValues;
}

const EditBikeModal: React.FC<Props> = ({ onClose, initialValues }) => {
  const [values, setValues] = useState(initialValues);
  console.log(values);

  return (
    <Modal onClick={onClose} title={"Edit bike"}>
      <>
        <FlexRow>
          <MyField
            handleChange={(e) =>
              setValues({ ...values, brand: e.target.value })
            }
            value={initialValues.brand}
            label={"Brand"}
          />
          <MyField
            handleChange={(e) =>
              setValues({ ...values, model: e.target.value })
            }
            value={initialValues.model}
            label={"Model"}
          />
        </FlexRow>
        <FlexRow>
          <MyField
            handleChange={(e) => setValues({ ...values, year: e.target.value })}
            label={"Year"}
            value={initialValues.year}
          />
          <MyField
            handleChange={(e) =>
              setValues({ ...values, weight: e.target.value })
            }
            label={"Weight"}
            value={initialValues.weight}
          />
        </FlexRow>
        <FlexRow>
          <MyField
            handleChange={(e) => setValues({ ...values, size: e.target.value })}
            label={"Size"}
            value={initialValues.size}
          />
          <MyField
            handleChange={(e) =>
              setValues({ ...values, dateOfPurchase: e.target.value })
            }
            label={"Date of purchase"}
            value={initialValues.dateOfPurchase}
          />
        </FlexRow>
        <RoundedButton
          value={"Update bike"}
          style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
        />
      </>
    </Modal>
  );
};
export default EditBikeModal;
