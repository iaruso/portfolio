import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section id="work">
      <h2>Selected work →</h2>
      <ScrollContainer className="works">
        <div className="works-content">
          <Link to="/work/circuit-rush" className="card">
            <img
              srcset="./static/circuit-rush-cover-min.png 768w,
											./static/circuit-rush.png 1024w"
              sizes="(max-width: 768px) 768px, 1024px"
              src="./static/circuit-rush-cover.png"
              alt="Circuit Rush Cover"
            />
          </Link>
          <Link to="/work/movera" className="card">
            <img
              srcset="./static/movera-cover-min.png 768w,
											./static/movera-cover.png 1024w"
              sizes="(max-width: 768px) 768px, 1024px"
              src="./static/movera-cover.png"
              alt="Movera Cover"
            />
          </Link>
          <Link to="/work/expns" className="card">
            <img
              srcset="./static/expns-cover-min.png 768w,
											./static/expns-cover.png 1024w"
              sizes="(max-width: 768px) 768px, 1024px"
              src="./static/expns-cover.png"
              alt="Expns Cover"
            />
          </Link>
          <div className="card">
            <p>More to come ...</p>
          </div>
        </div>
      </ScrollContainer>
    </section>
  );
};

export default Work;
