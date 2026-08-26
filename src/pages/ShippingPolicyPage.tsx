const ShippingPolicyPage = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-6 py-20 pt-32 font-body text-gray-700">
      <h1 className="text-4xl font-chillax mb-10 text-gray-900">Shipping Policy</h1>
      <div className="space-y-6 text-[15px] leading-relaxed">
        <ul className="list-disc pl-6 space-y-4">
          <li>After your order has been placed, processed and payment approved, your product will be dispatched within specified timelines of 4 to 8 weeks via our 3rd Party Logistics, unless otherwise specified.</li>
          <li>Shipping timeline provided for all the products on the website are estimation only; shipment timing may vary depending on the production schedule and logistics schedule. There may be some unforeseen circumstances that may lead to delays.</li>
          <li>All delivery dates, if scheduled, are estimates only. You will be notified when the products are dispatched from our warehouse.</li>
        </ul>
        <p>In case you are not able to track your order or it hasn't been delivered to you on the decided date, please write us on info@restaurantfurniture.in or call 9660225339</p>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
