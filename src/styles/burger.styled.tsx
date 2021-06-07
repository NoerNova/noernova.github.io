import styled from "styled-components";

export const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  display: none;
  @media (max-width: 960px) {
    display: flex;
  }
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(8px)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
