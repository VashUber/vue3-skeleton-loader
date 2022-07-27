import { FunctionalComponent } from "vue";
import { FallbackPropsI } from "../../types";
import Block from "../Block/Block";

const Fallback: FunctionalComponent<FallbackPropsI> = ({
  variant,
  ...props
}) => {
  switch (variant) {
    case "block":
      return <Block {...props}></Block>;
  }
};

export default Fallback;
