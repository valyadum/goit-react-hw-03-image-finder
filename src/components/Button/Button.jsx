import { ButtonStyle } from "./Button.styled";

export default function Button({onClick}) {
  return( <ButtonStyle type='button' onClick={onClick}>Load more</ButtonStyle>);
}

