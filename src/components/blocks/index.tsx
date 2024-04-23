import HeroBlock from "./HeroBlock";
import TextBlock from "./TextBlock";
import CallToActionBlock from "./CallToActionBlock";
import ContainerBlock from "./ContainerBlock";

type Block = Parameters<(typeof registry)[keyof typeof registry]>["0"]["block"];

const registry = {
  HeroBlock,
  TextBlock,
  CallToActionBlock,
  ContainerBlock,
} satisfies Record<string, any>;

export function hasBlockComponent(document: {
  __typename?: string;
}): document is Block {
  return (
    !!document?.__typename &&
    Object.keys(registry).includes(document.__typename)
  );
}

export function getBlockComponent(block: Block) {
  return registry[block.__typename];
}
