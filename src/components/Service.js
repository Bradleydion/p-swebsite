import React from "react";

export default function Service() {
  return (
    <div className="service">
      <h1>Service</h1>
      <p>
        Palmer and Sicard provides service support for our commercial HVAC and
        plumbing customers. You can rely on Palmer and Sicard to quickly and
        efficiently replace or repair your HVAC or plumbing needs. With a steady
        on call rotation of qualified professionals, Palmer and Sicard is
        available 24/7 for all your service needs.
      </p>
      {/* should break the 3 different service tabs into sections, cards for each */}
      <h2>Air Conditioning</h2>
      <ul>
        <li>AC Repair</li>
        <li>AC Maintenance & Service</li>
        <li>AC Installations</li>
      </ul>
      <h2>Heating</h2>
      <ul>
        <li>Heating Repair</li>
        <li>Heating Maintenance</li>
        <li>Heating Installation & Replacement</li>
        <li>Furnace/Boiler Installation & Repair</li>
      </ul>
      <h2>Preventative Maintenance</h2>
      <ul>
        <li>Contracts Available</li>
        <li>Yearly Inspections</li>
        <li>Filter Changes</li>
        <li>Coil Cleaning</li>
      </ul>
      <h2>Service Agreements Available</h2>
      <p>Service Agreement Options include:</p>
      <ul>
        <li>
          Complete coverage (Preventative Maintenance, repair, replace) for all
          equipment
        </li>
        <li>
          Complete coverage (Preventative Maintenance, repair, replace) for all
          maintainable equipment
        </li>
        <li>
          Quarterly test, inspect and Preventative Maintenance for (all)
          equipment
        </li>
        <li>Customized plans that suit customers equipment needs</li>
      </ul>
      <p>
        For further information on Service Agreements, or to get a quote for
        preventative maintenance, click here. For more information about our
        Service Department, please click here. The Service Department can be
        reached directly by calling (603) 929-0910. Non-emergent service
        requests or queries can also be emailed to:
        ServiceDept@PalmerandSicard.com
      </p>
      <h1>Call for your services quote today</h1>
      <p>
        At Palmer and Sicard we can help you avoid pricey breakdowns and repairs
        by providing regular maintenance of your heating and cooling systems. If
        you need to make modifications, improvements or replace your existing
        systems, we are here to assist you. Contact our Small Projects Division
        for your quote today.
      </p>
      <h1>Why call Palmer and Sicard Service Team?</h1>
      {/* put in icons for each */}
      <h3>Answer Calls / Service Requests 24/7</h3>
      <h3>Background Checked & Drug Tested Technicians</h3>
      <h3>Discounts for Maintenance Conrtact Agreements</h3>
    </div>
  );
}
