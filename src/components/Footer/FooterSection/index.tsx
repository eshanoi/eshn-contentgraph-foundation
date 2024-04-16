import type { FooterSectionType } from '@/components/Footer/types';
import { type FC } from 'react';

type Props = {
  section: FooterSectionType;
};

const FooterSection: FC<Props> = ({ section }) => {
  return (
    <div className={section.className}>
      <h3 className="footer__heading">{section.header}</h3>
      <div>
        {section.items.map((item) => (
          <div key={item.text}>
            {item.label && <span>{item.label}: </span>}
            {item.href ? (
              <a href={item.href} className={item.className}>
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
