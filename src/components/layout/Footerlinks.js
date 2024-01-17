const FooterLinks = ({ links }) => {
  return (
    <div>
      <ul>
        {links.map((item) => {
          return (
            <div key={item} className="mb-4">
              {item}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
