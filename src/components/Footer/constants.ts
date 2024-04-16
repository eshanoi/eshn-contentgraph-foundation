import type { FooterSectionType } from '@/components/Footer/types';

const contact: FooterSectionType = {
  items: [
    {
      label: 'Phone',
      href: 'tel:+1 603 594 0249',
      text: '+1 603 594 0249',
      className: '',
    },
    {
      label: 'Email',
      href: 'mailto:info@episerver.com',
      text: 'info@episerver.com',
      className: '',
    },
    {
      text: '+542 Amherst Street, Nashua, NH 03063, USA',
      className: '',
    },
  ],
  header: 'CONTACT EPISERVER',
  className: 'col-md-6 col-lg-4',
};

const epiSites: FooterSectionType = {
  items: [
    {
      text: 'episerver.com',
      href: 'https://episerver.com/',
      className: 'footer__link',
    },
    {
      text: 'Developer Community',
      href: 'https://world.episerver.com/',
      className: 'footer__link',
    },
    {
      text: 'User Guides',
      href: 'https://world.episerver.com/',
      className: 'footer__link',
    },
  ],
  header: 'EPISERVER SITES',
  className: 'col-md-6 col-lg-2',
};

const epiSocials: FooterSectionType = {
  items: [
    {
      text: 'Facebook',
      href: 'https://www.facebook.com/Episerver/',
      className: 'footer__link',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/episerver/',
      className: 'footer__link',
    },
    {
      text: 'Linkedin',
      href: 'http://www.linkedin.com/company/episerver-ab/',
      className: 'footer__link',
    },
  ],
  header: 'FOLLOW US',
  className: 'col-md-6 col-lg-2',
};

const placeholder: FooterSectionType = {
  header: '',
  items: [],
  className: 'col-md-6 col-lg-4',
};

export const FOOTER_SECTIONS: FooterSectionType[] = [
  contact,
  epiSites,
  epiSocials,
  placeholder,
];
