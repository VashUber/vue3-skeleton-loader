import { FunctionalComponent } from "vue";
import styleInjct from "style-inject";
import type { BlockPropsT } from "../../types";
import s from "./Block.scss";

styleInjct(s);

const Block: FunctionalComponent<BlockPropsT> = ({
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
