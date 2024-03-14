const Footer = () => {
  return (
    <footer className="bg-[#181837] text-white py-5">
      <div className="flex flex-col md:flex-row mx-10 md:mx-32">
        <div className="md:w-[30%] mb-5 md:mb-0">
          <h2 className="text-3xl font-bold sm:text-4xl text-center md:text-left ">Shortly</h2>
        </div>
        <div className="md:w-[70%] grid md:grid-cols-4 text-center gap-2 md:text-left">
          <div>
            <h2 className="mb-8 font-bold"> Features</h2>
            <ul className="opacity-80">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-8 font-bold">Resources</h2>
            <ul className="opacity-80">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-8 font-bold">Company</h2>
            <ul className="opacity-80">
              <li>About</li>
              <li>Our Team</li>
              <li>Contact</li>
              <li></li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
