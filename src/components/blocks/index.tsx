import HeroBlock from './HeroBlock'

type Block = Parameters<(typeof registry)[keyof typeof registry]>['0']['block']

const registry = {
  HeroBlock,
}

export function hasBlockComponent(document: { __typename?: string }): document is Block {
  return !!document?.__typename && Object.keys(registry).includes(document.__typename)
}

export function getBlockComponent(block: Block) {
  return registry[block.__typename]
}
