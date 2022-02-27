import React from "react";
// import photo from "../../images/AntoniS-Singer.jpeg";
import Card from "./card";
import CardDetail from "./cardDetail";

const Highlights = () => {
  // console.log("LOOKING FOR ARTIIST", photo);
  const DUMMY_DATA = [
    {
      id: 1,
      title: " Artists",
      subtitle: "2015 music choice recording artist",
      description: "Meet artist and producers, and listen to the latest music.",
    },
    {
      id: 2,
      title: "Gratitude",
      subtitle: "gratitude project concert",
      description: "everythursday and sometimes sundays",
    },
    {
      id: 3,
      title: "Giving",
      subtitle: "Kickstarter",
      description: "giving is the ultimate feeling",
    },
    {
      id: 4,
      title: "Sharing",
      subtitle: "Join the TIBC community",
      description: "giving is the ultimate feeling",
    },
  ];
  return (
    <div className="highlights">
      {DUMMY_DATA.map((cardItem, index) => {
        return (
          <Card key={index} className="higlight_card">
            <CardDetail items={cardItem} />
          </Card>
        );
      })}
    </div>
  );
};

export default Highlights;
