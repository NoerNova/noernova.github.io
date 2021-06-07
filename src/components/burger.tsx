import React from "react";
import { StyledBurger } from "../styles/burger.styled";
import { bool, func } from "prop-types";

type Props = {
  open: boolean;
  setOpen: (active: boolean) => void;
};

const Burger = ({ open, setOpen }: Props): JSX.Element => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
