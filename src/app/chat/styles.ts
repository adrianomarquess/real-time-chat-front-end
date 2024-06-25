import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #584cd7;
`;

export const MessagesContainer = styled.div`
  margin: 10px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div<{ isMyMessage: boolean }>`
  background-color: ${({ isMyMessage }) =>
    isMyMessage ? "#ffffff" : "#7B70EE"};
  align-self: ${({ isMyMessage }) => (isMyMessage ? "flex-end" : "flex-start")};
  margin-bottom: ${({ isMyMessage }) => (isMyMessage ? "10px" : "20px")};
  color: ${({ isMyMessage }) => (isMyMessage ? "#4D487D" : "#FFFFFF")};
  border-radius: 18px;
  padding: 10px 20px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 4px;
`;
export const MessageText = styled.span`
  display: block;
  font-size: 16px;
`;

export const Form = styled.form`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
`;

export const MessageContainer = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  height: 34px;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  font-size: 16px;
  margin-right: 10px;
`;

export const Button = styled.button`
  border: none;
  background-color: #ffffff;
  color: #584cd7;
  font-size: 16px;
  font-weight: 600;
  height: 34px;
  border-radius: 20px;
  padding: 0 20px;
`;
