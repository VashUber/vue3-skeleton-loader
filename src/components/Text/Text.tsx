import { FunctionalComponent } from "vue";
import styleInjct from "style-inject";
import type { TextPropsT } from "../../types";
import s from "./Text.scss";

styleInjct(s);

const Text: FunctionalComponent<TextPropsT> = ({
  color,
  width,
  height,
  borderRadius,
  animate,
  lines,
}) => {
  return (
    <div
      class={["text", animate ? "text--animate" : ""].join(" ")}
      style={{ width, height, borderRadius }}
    >
      {Array.from(new Array(lines)).map(() => (
        <div class="text__line" style={{ background: color }}></div>
      ))}
    </div>
  );
};

export default Text;
