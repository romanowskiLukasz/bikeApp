import styled from "styled-components";

export const Container = styled.div`
  .container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  .responsive-table {
    li {
      border-radius: 3px;
      padding: 25px 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .table-header {
      background-color: #f3b299;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .table-row {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }
    //.col-1 {
    //  flex-basis: 5%;
    //}
    .col-2 {
      flex-basis: 25%;
    }
    //.col-3 {
    //  flex-basis: 15%;
    //}
    //.col-4 {
    //  flex-basis: 15%;
    //}
    //.col-5 {
    //  flex-basis: 30%;
    //}
    //.col-6 {
    //  flex-basis: 10%;
    //}
    @media all and (max-width: 767px) {
      .table-header {
        display: block;
      }
      .table-row {
      }
      li {
        display: block;
      }
      .col {
        flex-basis: 100%;
      }
      .col {
        display: flex;

        padding: 10px 0;
        &:before {
          color: #6c7a89;
          padding-right: 10px;
          content: attr(data-label);
          flex-basis: 50%;
          text-align: right;
        }
      }
    }
  }
`;

export const DeleteButton = styled.img`
  width: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;
