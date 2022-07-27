import { FunctionalComponent } from "vue";
import styleInjct from "style-inject";
import { BlockPropsI } from "../../types";
import s from "./Block.scss";

styleInjct(s);

const Block: FunctionalComponent<BlockPropsI> = ({
  color,
  width,
  height,
  borderRadius,
  animate,
}) => {
  return (
    <div
      class={["block", animate ? "block--animate" : ""].join(" ")}
      style={{ background: color, width, height, borderRadius }}
    ></div>
  );
};

export default Block;
