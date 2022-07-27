import { FunctionalComponent, Suspense } from "vue";
import type { SkeletonPropsT, FallbackPropsT } from "../../types";
import Fallback from "../Fallback/Fallback";

const SkeletonLoader: FunctionalComponent<SkeletonPropsT> = (
  props,
  { slots }
) => {
  return (
    <Suspense
      v-slots={{
        fallback: <Fallback {...props} />,
      }}
    >
      <Fallback {...props} />
    </Suspense>
  );
};

export default SkeletonLoader;
