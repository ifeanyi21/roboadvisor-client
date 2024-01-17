import FooterLinks from "./Footerlinks";

const Footer = () => {
  const footerlinks = [
    {
      aboutus: [
        "Our Company",
        "Careers",
        "Wealthsimple Foundation",
        "Giveback program",
      ],
    },
    {
      legal: ["Accessibility", "Privacy policy", "Terms of use"],
    },
    {
      accounts: ["RRSP", "TFSA", "FHSA", "RESP", "LIRA"],
    },
    {
      products: ["Private credit", "Private Equity", "Cash", "Crypto"],
    },
  ];
  return (
    <div className="border border-t md:px-20 mt-20 py-16">
      <div className="grid lg:grid-cols-6 md:grid-cols-4">
        <div className="mb-8">
          <div className="mb-4">
            <h5 className="text-xl font-semibold">About us</h5>
          </div>
          <FooterLinks links={footerlinks[0].aboutus} />
        </div>
        <div className="mb-8">
          <div className="mb-4">
            <h5 className="text-xl font-semibold">Legal</h5>
          </div>
          <FooterLinks links={footerlinks[1].legal} />
        </div>
        <div className="mb-8">
          <div className="mb-4">
            <h5 className="text-xl font-semibold">Accounts</h5>
          </div>
          <FooterLinks links={footerlinks[2].accounts} />
        </div>
        <div className="mb-8">
          <div className="mb-4">
            <h5 className="text-xl font-semibold">Products</h5>
          </div>
          <FooterLinks links={footerlinks[3].products} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
