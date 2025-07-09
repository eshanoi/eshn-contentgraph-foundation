import ContentArea from '@/components/ContentArea';
import type { LandingPageFragment } from './LandingPageFragment.gql.g';

export default function LandingPage({ page }: { page: LandingPageFragment }) {
  const { MainBody, MainContentArea, TopContentArea, Margin, Padding } = page;

  return (
    <div
      className={`landing-page row no-gutters ${Margin || ''} ${Padding || ''}`}
    >
      {/* Top Content Area */}
      <div className="col-12">
        {TopContentArea && (
          <div className="col-12">
            <ContentArea contentArea={TopContentArea} />
          </div>
        )}
      </div>

      {/* Main Body Content */}
      {MainBody && (
        <div className="col-12">
          <div
            className="main-body-content"
            dangerouslySetInnerHTML={{ __html: MainBody }}
          />
        </div>
      )}

      {/* Main Content Area */}
      {MainContentArea && (
        <div className="col-12">
          <ContentArea contentArea={MainContentArea} />
        </div>
      )}
    </div>
  );
}
