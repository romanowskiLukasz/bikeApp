import React, { useEffect, useState } from "react";
import SideMenu from "../../../components/organisms/sideMenu/SideMenu";
import * as S from "./MyBikesPage.style";
import RoundedButton from "../../../components/atoms/buttons/roundedButton/RoundedButton";
import PartCard from "../../../components/molecules/cards/partCard/PartCard";
import Modal from "../../../components/molecules/modal/Modal";
import AddBikeModal from "../../../components/organisms/modals/addBikeModal/AddBikeModal";
import EditBikeModal from "../../../components/organisms/modals/editBikeModal/EditBikeModal";

const axios = require("axios").default;

interface bikePart {
  category: string;
  distance: string;
  date: string;
  model: string;
}
interface bikeInfo {
  id: string;
  brand: string;
  dateOfPurchase: string;
  img: string;
  model: string;
  size: string;
  weight: string;
  year: string;
  bikeParts: [bikePart];
}

const MyBikesPage = () => {
  const [bikesInfo, setBikesInfo] = useState<bikeInfo[]>([
    {
      id: "",
      brand: "",
      dateOfPurchase: "",
      img: "",
      model: "",
      size: "",
      weight: "",
      year: "",
      bikeParts: [
        {
          category: "string",
          distance: "",
          date: "",
          model: "",
        },
      ],
    },
  ]);
  const [currentBike, setCurrentBike] = useState(0);
  const [showModal, setShowModal] = useState({
    addNewBike: false,
    editBike: false,
  });
  const userId = 1;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getAllBikes/${userId}`)
      .then((resp: any) => {
        setBikesInfo(resp.data);
      });
  }, []);
  const handleBikeChange = (index: number) => {
    setCurrentBike(index);
    // console.log(index);
  };

  const deleteBike = () => {
    axios.delete(
      `http://localhost:8080/deleteBike/${bikesInfo[currentBike].id}`
    );
    setTimeout(() => {
      axios
        .get(`http://localhost:8080/getAllBikes/${userId}`)
        .then((resp: any) => {
          setBikesInfo(resp.data);
        });
    }, 1000);
  };
  const findPart = (categoryName: string) => {
    return bikesInfo[currentBike].bikeParts.find((bike) => {
      return bike.category === categoryName;
    });
  };

  return (
    <>
      <SideMenu />
      <S.Container>
        <h1 style={{ fontSize: "55px" }}> My Bikes</h1>

        <>
          <S.ButtonContainer>
            {bikesInfo.map((bike: any, index) => {
              return (
                <RoundedButton
                  value={`${bike.brand} ${bike.model}`}
                  // @ts-ignore
                  onClick={() => handleBikeChange(index)}
                />
              );
            })}
            <RoundedButton
              value={"Add Bike +"}
              // @ts-ignore
              onClick={() => setShowModal({ ...showModal, addNewBike: true })}
            />
          </S.ButtonContainer>
          <S.Divider />
          <div style={{ display: "flex", gap: "20px" }}>
            <S.BikeInfoContainer>
              <S.BikeImg src={`${bikesInfo[currentBike].img}`} />

              <h2 style={{ margin: "20px 0 10px 15px" }}>Bike Details</h2>
              <S.SingleInfo>
                Brand: {`${bikesInfo[currentBike].brand}`}
              </S.SingleInfo>
              <S.SingleInfo>
                Model: {`${bikesInfo[currentBike].model}`}
              </S.SingleInfo>
              <S.SingleInfo>
                Year: {`${bikesInfo[currentBike].year}`}
              </S.SingleInfo>
              <S.SingleInfo>
                Weight: {`${bikesInfo[currentBike].weight}`}
              </S.SingleInfo>
              <S.SingleInfo>
                Size: {`${bikesInfo[currentBike].size}`}
              </S.SingleInfo>
              <S.SingleInfo>
                Date of purchase: {`${bikesInfo[currentBike].dateOfPurchase}`}
              </S.SingleInfo>
              <div
                style={{
                  display: "flex",
                  margin: "20px 0 0 20px",
                  gap: "20px",
                }}
              >
                <RoundedButton
                  value={"Edit Bike"}
                  // @ts-ignore
                  onClick={() => setShowModal({ ...showModal, editBike: true })}
                />
                <RoundedButton
                  value={"Delete Bike"}
                  // @ts-ignore
                  onClick={deleteBike}
                />
              </div>
            </S.BikeInfoContainer>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                height: "calc(100vh - 250px)",
                overflow: "scroll",
              }}
            >
              <PartCard
                src={"https://cdn-icons-png.flaticon.com/512/2380/2380278.png"}
                title={"Chain"}
                distance={findPart("chain")?.distance || "-"}
                model={findPart("chain")?.model || "-"}
                date={findPart("chain")?.date || "-"}
                changeRecommended={false}
              />
              <PartCard
                src={"https://cdn-icons-png.flaticon.com/512/8746/8746725.png"}
                title={"Brake pads"}
                distance={findPart("brakePads")?.distance || "-"}
                model={findPart("brakePads")?.model || "-"}
                date={findPart("brakePads")?.date || "-"}
                changeRecommended={true}
              />
              <PartCard
                src={"https://cdn-icons-png.flaticon.com/512/1575/1575950.png"}
                title={"Tires"}
                distance={findPart("tires")?.distance || "-"}
                model={findPart("tires")?.model || "-"}
                date={findPart("tires")?.date || "-"}
                changeRecommended={false}
              />
              <PartCard
                src={"https://cdn-icons-png.flaticon.com/512/3180/3180250.png"}
                title={"Cassette"}
                distance={findPart("cassette")?.distance || "-"}
                model={findPart("cassette")?.model || "-"}
                date={findPart("cassette")?.date || "-"}
                changeRecommended={false}
              />
              <PartCard
                src={"https://cdn-icons-png.flaticon.com/512/670/670758.png"}
                title={"Tire pressure"}
                distance={"400km"}
                model={"Shimano XT"}
                date={"04/10/2022"}
                changeRecommended={false}
              />
              <PartCard
                src={"https://cdn-icons-png.flaticon.com/512/2380/2380278.png"}
                title={"Lube chain"}
                distance={"400km"}
                model={"Shimano XT"}
                date={"04/10/2022"}
                changeRecommended={false}
              />
            </div>
          </div>
        </>
        {showModal.addNewBike && (
          <AddBikeModal
            onClick={() => setShowModal({ ...showModal, addNewBike: false })}
            title={"Add bike"}
          />
        )}
        {showModal.editBike && (
          <EditBikeModal
            onClose={() => setShowModal({ ...showModal, editBike: false })}
            initialValues={{
              brand: bikesInfo[currentBike].brand,
              model: bikesInfo[currentBike].model,
              year: bikesInfo[currentBike].year,
              size: bikesInfo[currentBike].size,
              weight: bikesInfo[currentBike].weight,
              dateOfPurchase: bikesInfo[currentBike].dateOfPurchase,
            }}
          />
        )}
      </S.Container>
    </>
  );
};
export default MyBikesPage;
