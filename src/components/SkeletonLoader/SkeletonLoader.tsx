import { FunctionalComponent, Suspense } from "vue";
import { SkeletonPropsI } from "../../types";
import Fallback from "../Fallback/Fallback";

const SkeletonLoader: FunctionalComponent<SkeletonPropsI> = (
  {
    variant,
    height = "200px",
    width = "200px",
    borderRadius = "0",
    color = "#f5f5f5",
    animate = false,
  },
  { slots }
) => {
  console.log(borderRadius);

  return (
    <Suspense
      v-slots={{
        fallback: (
          <Fallback
            variant={variant}
            width={width}
            height={height}
            borderRadius={borderRadius}
            color={color}
            animate={animate}
          />
        ),
      }}
    >
      <Fallback
        variant={variant}
        width={width}
        height={height}
        borderRadius={borderRadius}
        color={color}
        animate={animate}
      />
    </Suspense>
  );
};

export default SkeletonLoader;
