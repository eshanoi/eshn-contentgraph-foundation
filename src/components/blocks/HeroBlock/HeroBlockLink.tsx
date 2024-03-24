'use client'

import { useRouter } from 'next/navigation'

type Props = {
  Link: string
}

export default function HeroBlockLink({ Link }: Props) {
  const router = useRouter()

  const blockClicked = () => {
    router.push(Link)
  }

  return <div className="hero-block-link" onClick={blockClicked}></div>
}
