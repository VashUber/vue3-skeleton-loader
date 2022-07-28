import { FunctionalComponent, Suspense } from "vue";
import type { SkeletonPropsT } from "../../types";
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
      {import.meta.env.MODE !== "dev" ? (
        <> {slots.default?.()} </>
      ) : (
        <Fallback {...props} />
      )}
    </Suspense>
  );
};

export default SkeletonLoader;
