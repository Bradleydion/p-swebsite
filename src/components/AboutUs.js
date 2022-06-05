import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

export default function AboutUs() {
  return (
    <section className="AboutUs">
      <Typography variant="h5" component="div">
        About Us
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Palmer and Sicard is a comprehensive mechanical contracting company with
        the skills, knowledge and commitment to do the job right; from project
        conception to providing care long after the project is complete. Palmer
        and Sicard provide expertise in plumbing, pipefitting, HVAC, sheet
        metal, fabrication of piping and sheet metal systems, mechanical design
        and service. Palmer and Sicard have been Employee Owned since 2002 and
        in 2017 celebrated their 15th anniversary as an ESOP. The company was
        founded in 1954 by Bud Palmer and Leon Sicard. Since then, we have grown
        from a two-person organization into one of the largest full-service
        mechanical contracting firms in New England. For more than half a
        century, we haven’t only been building excellent mechanical
        systems—we’ve been building relationships of trust with our clients.
        Trust earned through our commitment to quality workmanship and
        dependable customer service. It’s the reason more than 90% of Palmer and
        Sicard’s business comes from referrals and repeat clients. And because
        we are an employee-owned business, that commitment to quality is shared
        by every employee. Palmer and Sicard is headquartered in Exeter, NH,
        where our 18,000 square foot design and manufacturing facility is
        located. As a full-service Mechanical Contractor, Palmer and Sicard can
        handle all of the plumbing and pipefitting, sheet metal, HVAC, design,
        and service needs for your facility. Our diverse portfolio of completed
        projects includes office buildings, hospitals, schools and universities,
        manufacturing plants, and retail stores to name a few.
      </Typography>
      <Typography variant="h5" component="div">
        Company Profiles
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mark J. Hodsdon
          </Typography>{" "}
          <Typography gutterBottom variant="h6" component="div">
            President
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Mark has been in the construction industry for more than 25 years;
            his expertise is Construction Management. He earned his Master’s
            Degree in Business Management at Southern NH University, after
            receiving his Bachelor’s Degree in Business Management from Daniel
            Webster College. He currently holds a Commonwealth of Massachusetts
            Construction Supervisor’s License and is a member of the Board of
            Directors of the Associated Builders and Contractors New
            Hampshire/Vermont Chapter and served as Chairman of the Board in
            2016. Mark currently serves as a member of the National Board of
            Directors for the Associated Builders and Contractors (ABC).
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Philip (Skip) Lynch
          </Typography>{" "}
          {""}
          <Typography gutterBottom variant="h6" component="div">
            General Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Skip has been in the industry for more than 30 years. His expertise
            is in HVAC and Sheet Metal Installation and he is a graduate of the
            Associated Builders and Contractors Project Management Institute at
            Purdue University.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Melanie Mosher
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Human Resources Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Melanie has been in the human resources and accounting industry for
            20 years; She has a BA in Accounting/Finance as well as Human
            Resource Management. She holds her certifications and Bachelor's in
            Human Resource Management from Franklin Pierce University. She is a
            current member of SHRM.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bob Pollini
          </Typography>{" "}
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            Controller
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Bob has extensive senior-level experience in Finance &
            Administration in the Construction and Retail industries both
            domestically and internationally.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ken Radford
          </Typography>{" "}
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            Construction Operations Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Ken has more than 25 years in the industry. His expertise is in
            Safety and Sheet Metal. He is a graduate of the Associated Builders
            and Contractors Project Management Institute at Purdue University
            and the Associated Builders and Contractors Future Leaders in
            Construction program.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Marc Dion
          </Typography>{" "}
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            HVAC / Service Manager - Small Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Marc has over 30 years’ experience in the construction industry. His
            expertise includes HVAC Service, Refrigeration, Sheet Metal duct
            system installation and carpentry. He holds certifications in
            Heating and Cooling from New Hampshire Vocational Technical College
            as well as numerous certifications in the operation, repair, and
            service of multiple HVAC manufacturers systems.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mike Powers
          </Typography>
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            Chief Estimator
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Mike has over 35 years’ experience in the mechanical industry
            starting as an apprentice right out of trade school. His expertise
            is in Plumbing and Pipe Fitting. He currently holds numerous
            industry licenses and a Commonwealth of Massachusetts Construction
            Supervisor’s License.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Derek Ham
          </Typography>
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            CAD Design / Estimator
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Derek has more than 20 years’ experience in the sheet metal field
            with jobs ranging from installer to foreman. Nine of those years
            were spent doing CAD design. He has added CAD design of mechanical
            piping and plumbing systems since joining Palmer and Sicard and
            employs a GPS total station layout tool, shooting hanger points,
            laying out underground piping and rooftop units.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dave Macomber
          </Typography>
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            Mechanical CAD Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Dave has 20 years' experience in the CAD industry with a wide range
            of experience in Civil, Oil, Gas, Architectural and HVAC Design.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bob Begin
          </Typography>{" "}
          {""}
          <Typography gutterBottom variant="h6" component="div">
            Project Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Bob has over 35 years’ experience in Commercial, Residential, and
            Industrial Plumbing, Heating and Construction and holds numerous
            Licenses and certification including OSHA 30 and NH Master's
            Plumbing License.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keith Gillespie
          </Typography>
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            Small Projects Division Project Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            Keith has been in the trade for a little over 16 years. He started
            with a small company doing residential sheet metal with a little
            commercial work. He started with Palmer as an installer and worked
            his way up to a Foreman. Moving forward with his career at Palmer
            and Sicard he then became a Small Projects Foreman/Supervisor and is
            now a Project Manager. Keith has numerous certifications, ABC site
            super training an OSHA 30 certification as well as NH gas fitter and
            installers licenses.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Scott Graziano
          </Typography>
          {""}{" "}
          <Typography gutterBottom variant="h6" component="div">
            Project Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Scott has more than 20 years’ experience in the sheet metal field
            with jobs ranging from installer to foreman. He currently holds an
            OSHA 30 certification and Gas Installation License.
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
}
