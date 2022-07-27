export type variantT = "block" | "text";

export type BaseSkeletonPropsT = {
  color: string;
  borderRadius: string;
  width: string;
  height: string;
  animate: boolean;
};

export type BlockPropsT = {} & BaseSkeletonPropsT;
export type TextPropsT = {
  lines: number;
} & BaseSkeletonPropsT;

export type SkeletonPropsT =
  | ({ variant: "block" } & Partial<BlockPropsT>)
  | ({ variant: "text" } & Partial<TextPropsT>);

export type FallbackPropsT = BlockPropsT | TextPropsT;
