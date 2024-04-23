'use client';

import type { LanguageType } from '@/components/TopHeader/types';
import type { FC } from 'react';
import useGetLocalePathname from '@/components/TopHeader/hooks/useGetLocalePathname';

type Props = {
  currentLanguage?: LanguageType;
  languages?: LanguageType[];
};

const LanguageList: FC<Props> = ({ currentLanguage, languages }) => {
  const { getLocalePathname } = useGetLocalePathname();

  return (
    <div className="language-list">
      <div className="language-list__label">
        <span>Language: </span>
        <span>{currentLanguage?.code}</span>
      </div>
      <div className="language-list__list">
        {languages?.map((language) => (
          <a
            href={getLocalePathname(language.code)}
            key={language.code}
            className="language-list__language-text"
          >
            <span>{language.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LanguageList;
