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
              srcSet="./static/circuit-rush-cover-min.webp 768w,
											./static/circuit-rush-cover.webp 1024w"
              sizes="(max-width: 768px) 768px, 1024px"
              src="./static/circuit-rush-cover.webp"
              alt="Circuit Rush Cover"
            />
          </Link>
          <Link to="/work/movera" className="card">
            <img
              srcSet="./static/movera-cover-min.webp 768w,
											./static/movera-cover.webp 1024w"
              sizes="(max-width: 768px) 768px, 1024px"
              src="./static/movera-cover.webp"
              alt="Movera Cover"
            />
          </Link>
          <Link to="/work/expns" className="card">
            <img
              srcSet="./static/expns-cover-min.webp 768w,
											./static/expns-cover.webp 1024w"
              sizes="(max-width: 768px) 768px, 1024px"
              src="./static/expns-cover.webp"
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
