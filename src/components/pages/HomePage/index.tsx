import ContentArea from '@/components/ContentArea'
import type { HomePageFragment } from './HomePageFragment.gql.g'

export default function HomePage({ page }: { page: HomePageFragment }) {
  const { MainBody, MainContentArea } = page

  return (
    <div className="home-page row no-gutters">
      <div className="col-12">{/* TopContentArea */}</div>
      {MainBody && <div className="col-12">{/* MainBody */}</div>}
      {MainContentArea && (
        <div className="col-12">
          <ContentArea contentArea={MainContentArea} />
        </div>
      )}
    </div>
  )
}
