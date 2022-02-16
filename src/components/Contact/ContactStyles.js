import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;

  .form-row {
      width: 100%;
      display: flex;
      position: relative;
      justify-content: space-between;
      margin-bottom: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }
  &:not(:last-of-type) {
        margin-bottom: 3rem;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  color: #f9f9f9;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.input-group.focused {
    color: #ffffff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  textarea,
  [type="tel"],
  [type="text"],
  [type="email"],
  [type="search"],
  [type="password"] {
    border: 0;
    padding: 0.6em;
    padding-left: 0;
    position: relative;
    color: currentColor;
    background: transparent;
    border-bottom: solid currentColor;

    &:after {
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      width: 100%;
      position: absolute;
      height: 1rem;
    }
  }
`;

export const Input = styled.input`
  background: #f9f9f9;
  width: 80%;
  height: 3rem;
  padding: 0.6rem;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    // backdrop-filter: blur(12rem);
  }
  &::placeholder {
    color: #f9f9f9;
    font-weight: 100;
    font-size: 1.5rem;
  }
`;

export const TextArea = styled.textarea`
  background: #f9f9f9;
  width: 90%;
  height: 4.2em;
  padding: 0.6rem;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
  }
  &::placeholder {
    color: #f9f9f9;
    font-weight: 100;
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }
`;

export const Button = styled.button`
  width: 20%;
  border: none;
  border-radius: 10px;
  color: #03162c;
  letter-spacing: 0.1em;
  font-size: 1.5rem;
  user-select: none;
  margin-bottom: 3rem;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  font-weight: 600;
  cursor: pointer;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"};

  &:hover {
    background: ${({ alt }) =>
      alt
        ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
        : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;