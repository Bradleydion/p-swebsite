import React from "react";
import Card from "@mui/material/Card";

export default function Safety() {
  return (
    <div className="Safety">
      <h1>Safety</h1>
      <h2>Safety Commitment</h2>
      <p>
        All our Palmer and Sicard team members are background checked and drug
        screened.{" "}
      </p>
      {""}
      <p>
        At Palmer and Sicard, safety is a priority. It is the responsibility of
        every employee to ensure a safe working environment. The Safety Manager
        and the Joint Loss Committee are responsible for leadership of the
        overall safety effort providing all resources necessary to meet and
        maintain our safety goals.
      </p>
      {/* we will make this a profile card  */}
      <Card>
        <h2>Rick Stockbridge</h2>
        <h3>Safety Manager</h3>
        {/* need icon assets */}
      </Card>
    </div>
  );
}
