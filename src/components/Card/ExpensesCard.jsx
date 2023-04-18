import React from "react";
import styled from "styled-components";

const ExpensesCard = ({ el, onDelete }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });
  const dateYear = new Date(el.date).getFullYear().toString();
  const dateDay = new Date(el.date).getDate().toString();

  return (
    <DivItem className="itemDiv">
      <LeftSide className="left-side">
        <DateP className="p-date">
          <span>{dateMonth}</span>
          <span>{+dateYear}</span>
          <Num className="num">{+dateDay}</Num>
        </DateP>
        <Title className="title">{el.title}</Title>
      </LeftSide>
      <Price className="price">$ {el.price}</Price>
    </DivItem>
  );
};

export default ExpensesCard;

const DivItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  align-items: center;
  background-color: #4b4b4b;
  border-radius: 15px;
  width: 96%;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;

const Price = styled.p`
  width: 90px;
  background-color: #40005d;
  border: 2px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const DateP = styled.div`
  text-align: center;
  color: #ffffff;
  box-sizing: border-box;
  width: 82.11px;
  height: 80px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

const Num = styled.span`
    font-size: 23px;
  font-weight: 700;
`

