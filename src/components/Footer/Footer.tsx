import './footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <h2 className='footer-header'>The ZOO</h2>
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="bx bx-up-arrow-alt"></i>
      </button>
    </footer>
  );
};
