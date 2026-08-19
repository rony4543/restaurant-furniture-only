

const AnnouncementBar = () => {
  const items = [
    "Exclusive B2B Trade Discounts & Custom Design Solutions Available",
    "Trusted by 500+ Hotels & Restaurants",
    "Custom Finishes Ready in 15 Days",
    "Talk to a Bulk Order Specialist Today"
  ];

  // Duplicate the items 4 times to ensure it covers ultrawide screens and loops seamlessly
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-black text-white py-2 overflow-hidden text-[13px] font-medium tracking-wide uppercase font-comfortaa">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-8">{item}</span>
            <span className="text-white/50 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
