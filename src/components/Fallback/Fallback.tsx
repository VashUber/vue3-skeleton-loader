import { FunctionalComponent } from "vue";
import type { SkeletonPropsT, FallbackPropsT } from "../../types";
import Block from "../Block/Block";
import Text from "../Text/Text";

const Fallback: FunctionalComponent<SkeletonPropsT> = (props) => {
  let fallBackProps: FallbackPropsT = {
    color: "#f5f5f5",
    animate: false,
    width: "200px",
    height: "200px",
    borderRadius: "0",
  };

  switch (props.variant) {
    case "block":
      fallBackProps = { ...fallBackProps, ...props };
      return <Block {...fallBackProps} />;
    case "text":
      fallBackProps = {
        ...fallBackProps,
        ...props,
        lines: props.lines || 1,
      };
      return <Text {...fallBackProps} />;
  }
};

export default Fallback;
