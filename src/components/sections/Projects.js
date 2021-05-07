import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "Laravel",
  },
  {
    id: 3,
    text: "Java",
  },
  {
    id: 4,
    text: "JavaScript",
  }
];

const allData = [
  {
    id: 1,
    title: "Delta Hand Pies Internal Web & Driver App",
    category: "Laravel",
    image: "images/projects/pies.jpg",
    link: ["https://hungmtruong.github.io/aboutdhpproject/"],
  },
  {
    id: 2,
    title: "Desert Falls: A co-op rougelike game that can be played over the network.",
    category: "Java",
    image: "images/projects/desertFalls.PNG",
    link: [
      "https://github.com/hungmtruong/desertfalls",
      
    ],
  },
  {
    id: 3,
    title: "Dolphin Delivery Contest: A local co-op game that allows players to compete with each other.",
    category: "Java",
    image: "images/projects/dolphin.PNG",
    link: ["https://github.com/hungmtruong/dolphincontest"],
  },
  {
    id: 4,
    title: "Classic(ish) Pong - Play a quick game?",
    category: "JavaScript",
    image: "images/projects/pong.PNG",
    link: [
      "https://hungmtruong.github.io/pong/"
    ],
  }
];

function Projects() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Projects" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "More coming soon!"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
