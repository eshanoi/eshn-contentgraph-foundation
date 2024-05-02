import { FOOTER_SECTIONS } from '@/components/Footer/constants';
import FooterSection from '@/components/Footer/FooterSection';

const Footer = () => {
  return (
    <>
      <hr className="bottom-line" />
      <footer className="footer">
        <div className="container">
          <h5 className="footer__introduction">
            Mosey is a fictional brand of Episerver created for demo purposes.
            Products and images copyright FilippaK
          </h5>
          <div className="row">
            {FOOTER_SECTIONS.map((section) => (
              <FooterSection key={section.header} section={section} />
            ))}
          </div>
          <div className="footer__subtext row no-gutters">
            <span className="col-auto">© {new Date().getFullYear()}</span>
            <span className="col">Episerver. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
