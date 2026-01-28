import React, { MouseEvent } from "react";

interface Link {
  name: string;
  url: string;
}

const ImportantWebsites: React.FC = () => {
  const links: Link[] = [
    { name: "Central Pollution Control Board", url: "https://www.cpcb.nic.in/" },
    { name: "National Mission for Clean Ganga", url: "https://nmcg.nic.in/" },
    { name: "Central Ground Water Board", url: "https://cgwb.gov.in/" },
    { name: "National Institute of Hydrology", url: "https://nihroorkee.gov.in/" },
    { name: "India-WRIS", url: "https://indiawris.gov.in/wris/#/" },
    { name: "Ministry of Jal Shakti", url: "https://jalshakti.gov.in/" },
  ];

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    if (confirm("You are being redirected to an external site. Do you want to continue?")) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="bg-white text-blue-900 py-10 border-t border-blue-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Important Websites</h2>
        <ul className="space-y-3 text-lg text-center">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                onClick={(e) => handleClick(e, link.url)}
                className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ImportantWebsites;
