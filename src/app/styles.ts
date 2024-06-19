"use client";

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 20%;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  height: 34px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: solid 1px #d4d3cf;
  padding: 0 8px;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #007aff;
  font-size: 1rem;
  font-weight: 600;
`;
