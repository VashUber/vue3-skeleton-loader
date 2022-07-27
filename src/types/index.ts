export type variantT = "block" | "text";

export interface SkeletonPropsI {
  variant: variantT;
  color?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  animate?: boolean;
}

export interface FallbackPropsI {
  variant: variantT;
  color: string;
  borderRadius: string;
  width: string;
  height: string;
  animate: boolean;
}

export interface BlockPropsI {
  color: string;
  borderRadius: string;
  width: string;
  height: string;
  animate: boolean;
}
