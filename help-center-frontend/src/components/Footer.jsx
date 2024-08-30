import React from 'react'

function Footer() {
    const FooterColumn = ({ title, items }) => (
        <div>
          <h3 className="font-semibold text-lg mb-4">{title}</h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-gray-400 hover:text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
      
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterColumn title="Abstract" items={["Branches"]} />
          <FooterColumn title="Resources" items={["Blog", "Help Center", "Release Notes", "Status"]} />
          <FooterColumn title="Community" items={["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"]} />
          <FooterColumn title="Company" items={["About Us", "Careers", "Legal", "Contact Us"]} />
        </div>
        <div className="text-center mt-4">© 2022 Abstract Studio Design, Inc. All rights reserved.</div>
      </footer>
  )
}

export default Footer