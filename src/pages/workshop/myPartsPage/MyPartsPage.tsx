import React, { useEffect, useState } from "react";
import SideMenu from "../../../components/organisms/sideMenu/SideMenu";
import * as S from "./MyPartsPage.style";
import CategoryHeader from "../../../components/molecules/categoryHeader/CategoryHeader";
import RoundedButton from "../../../components/atoms/buttons/roundedButton/RoundedButton";
import PartsTable from "../../../components/molecules/partsTable/PartsTable";
import AddPartModal from "../../../components/organisms/modals/addPartModal/AddPartModal";

const axios = require("axios").default;

const MyPartsPage: React.FC = () => {
  const [allUnusedParts, setAllUnusedParts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hiddenCategories, setHiddenCategories] = useState({
    chains: true,
    tires: true,
    brakePads: true,
    cassettes: true,
  });

  useEffect(() => {
    setTimeout(() => {
      axios.get(`http://localhost:8080/getUnusedParts`).then((resp: any) => {
        setAllUnusedParts(resp.data);
      });
    }, 1000);
  }, [showModal]);

  const handleClick = (category: string) => {
    switch (category) {
      case "Chains":
        setHiddenCategories({
          ...hiddenCategories,
          chains: !hiddenCategories.chains,
        });
        break;
      case "Tires":
        setHiddenCategories({
          ...hiddenCategories,
          tires: !hiddenCategories.tires,
        });
        break;
      case "Brake pads":
        setHiddenCategories({
          ...hiddenCategories,
          brakePads: !hiddenCategories.brakePads,
        });
        break;
      case "Cassettes":
        setHiddenCategories({
          ...hiddenCategories,
          cassettes: !hiddenCategories.cassettes,
        });
        break;
    }
  };

  return (
    <>
      <SideMenu />
      <S.Container>
        <h1 style={{ fontSize: "55px" }}> My Parts</h1>
        <RoundedButton
          value={"Add Part +"}
          // @ts-ignore
          onClick={() => setShowModal(true)}
        />
        <CategoryHeader
          title={"Chains"}
          src={"https://cdn-icons-png.flaticon.com/512/2380/2380278.png"}
          handleClick={handleClick}
        />
        {!hiddenCategories.chains && (
          <PartsTable
            // @ts-ignore
            parts={allUnusedParts.filter((part) => part.category === "chain")}
          />
        )}

        <CategoryHeader
          title={"Tires"}
          src={"https://cdn-icons-png.flaticon.com/512/1575/1575950.png"}
          handleClick={handleClick}
        />
        {!hiddenCategories.tires && (
          <PartsTable
            // @ts-ignore
            parts={allUnusedParts.filter((part) => part.category === "tires")}
          />
        )}
        <CategoryHeader
          title={"Brake pads"}
          src={"https://cdn-icons-png.flaticon.com/512/8746/8746725.png"}
          handleClick={handleClick}
        />
        {!hiddenCategories.brakePads && (
          <PartsTable
            parts={allUnusedParts.filter(
              // @ts-ignore
              (part) => part.category === "brakePads"
            )}
          />
        )}
        <CategoryHeader
          title={"Cassettes"}
          src={"https://cdn-icons-png.flaticon.com/512/3180/3180250.png"}
          handleClick={handleClick}
        />
        {!hiddenCategories.cassettes && (
          <PartsTable
            parts={allUnusedParts.filter(
              // @ts-ignore
              (part) => part.category === "cassette"
            )}
          />
        )}
      </S.Container>
      {showModal && (
        <AddPartModal
          // @ts-ignore
          onClose={() => setShowModal(false)}
          title={"Add new part"}
        />
      )}
    </>
  );
};
export default MyPartsPage;
