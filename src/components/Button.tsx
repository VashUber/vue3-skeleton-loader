import { FunctionalComponent } from "vue";
import { ButtonPropsI } from "../types";

const Button: FunctionalComponent<ButtonPropsI> = ({ variant }, { slots }) => {
  return <div>{slots.default?.()}</div>;
};

export default Button;
