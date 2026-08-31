import PageMeta from '../components/PageMeta';

const ReturnAndRefundPolicyPage = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-6 py-20 pt-32 font-body text-gray-700">
      <PageMeta 
        title="Return & Refund Policy"
        description="Our return and refund policy for bespoke and wholesale furniture orders."
        canonical="/return-and-refund-policy"
      />
      <h1 className="text-4xl font-chillax mb-10 text-gray-900">Return & Refund Policy</h1>
      
      <div className="space-y-10 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-chillax mb-4 text-gray-900">WHAT TO EXPECT FROM NATURAL WOOD PRODUCT</h2>
          <p className="mb-4">Wood is a beautiful natural material. It is important to understand its unique properties; which should not be mistaken for flaws:</p>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Wood Shading and Grain:</strong> Each piece will have a slightly different grain pattern. Variation in colour, shading and grain between different products and within the same product can occur; this is a normal feature of all natural wood furniture.</li>
            <li><strong>Knots:</strong> Knots are a natural property of all real wood furniture; they do not affect performance, and add interest to each piece.</li>
            <li><strong>Medullary Rays:</strong> These markings are created where wood is cut across the grain producing interesting features such as growth rings and flecks.</li>
            <li>Natural wood products may expand slightly during the summer months because of which some drawers may get stuck. This is normal, and nothing to be worried about. Reach out to our customer care team with your request, and our after-sales service team will come by and minimise the expansion by sanding the sides of the product.</li>
            <li>Currently we make sure that the internal areas/base of Furniture products are finished to not have any loose pieces / splinters to hurt your arms; however the extent of polish of Internal areas/Base may not match with the extent of polish on usable areas.</li>
            <li>For all products kept on the floor, ensure that the product stands steady and straight. In case there is an uneven leg (less than 5 mm difference), then our after sales team will arrange a technician to install bushes at the foot of that leg to balance the product better; in case the uneven leg is more than 5 mm, then we will take the item back to provide a replacement (or a repair) based on extent of changes needed.</li>
            <li>In case there is some dust or a lack of shine, our after sales team will arrange a technician to fix it by applying a coat of wood polish or by rubbing the surface with a cloth; this is an accepted industry-standard method for cleaning the surface / polishing it.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-chillax mb-4 text-gray-900">WARRANTY</h2>
          <p className="mb-4">Goods shipped to and for use in the India warrants to Client that the Goods are free of material Defects in material and workmanship for one (1) Year from delivery if properly stored, handled, assembled, maintained, and used under normal conditions in a non-commercial setting. “Defects” are defined as imperfection in material or wooden frame that will impair the use of the Goods. During this period, Woodbeam Atelier will in its sole discretion, repair or replace the defective component onsite, or replace the entire product if found to be defective in material or workmanship.</p>
          <p className="mb-4">The product warranty does not cover:</p>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Defects caused by improper product storage, handling, assembly, maintenance, or use.</li>
            <li>Defects occurring to the Goods after purchase due to product modification, intentional damage, accident, misuse, abuse, or negligence.</li>
            <li>Normal product wear and tear due to age including wearing or staining or loosening of fabric or leather or any such material. Normal wear and tear or damage from daily use is not warranted—for example, fabrics and leathers may naturally fade or deteriorate over time, and cushion cores may soften and lose shape. These are normal conditions are not considered manufacturers’ defects and are not covered under our warranty.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-chillax mb-4 text-gray-900">EXPANSION AND TIMBER MOVEMENT</h2>
          <p>All woods will display movement from season to season because of changes in atmospheric temperature and humidity. This may occasionally make moving parts a little stiffer to operate. On drawers, to ease movement simply rub a little candle wax on the drawer runners attached to the carcass of the furniture drawer. Woodbeam Atelier does not recommend locating products in excessively high or low temperatures, or where the environment is often damp as this may cause product issues.</p>
        </section>

        <section>
          <h2 className="text-2xl font-chillax mb-4 text-gray-900">SUNLIGHT AND HEAT</h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Avoid exposing your furniture to excessive heat e.g. by placing it in front of a radiator, as this can cause cracking. A minimum 30cm clearance from heat sources is advised. Direct sunlight will cause the colour of real wood to change, even if it is painted or lacquered, this will be more readily apparent if the furniture is placed under a window.</li>
            <li>Leaving items such as vases or ornaments in one place on a piece of furniture in sunlight may leave a mark when it is removed. Such marks should blend in with time. Never place hot dishes directly onto wooden or painted surfaces, we recommend you use table-mats and coasters.</li>
            <li>Prolonged use of hot electrical equipment, such as a laptop, on top of furniture may also cause scorching.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-chillax mb-4 text-gray-900">CARE</h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>We recommend that you protect delicate flooring from potential marking by feet or legs. Dropping furniture onto corners or feet will cause damage to the frame and/or legs.</li>
            <li>Leaning backwards on two legs of a chair will weaken joints. Take care to prevent sharp objects such as toys, buckles and heels from coming into contact with your furniture.</li>
            <li>Avoid contact with any chemicals such as hair & makeup products, perfume etc as these may affect the finish.</li>
            <li>If your furniture becomes stained, scratched or chipped or suffers other damage we recommend professional help is sought to restore it.</li>
            <li>Following the guidelines above will ensure product performance is maintained. Woodbeam Atelier is not responsible for defects caused by the misuse of your product.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ReturnAndRefundPolicyPage;
