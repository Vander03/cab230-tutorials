import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

// hero content
const Hero = () => (
  <section className="hero">
    {/* content for the hero */}
    <div className="hero_content">
      <h1 className="hero_title">Minty Yard</h1>
      <p className="hero_subtitle">A fine dining experience</p>

      <a href="/menu">Menu</a>
      <a href="/book">Book</a>
    </div>
  </section>
);

// features section
function Features() {
  /* The information for our features in JSON
  so we can reduce the amount of repetitive JSX and reuse one component instead */
  const featuresData = [
    {
      heading: "Organic & Ethical",
      text:
        "All of our ingredients are organically sourced from local producers.",
      img: { src: "img/like.png", alt: "Thumbs up icon" }
    },
    {
      heading: "Live Entertainment",
      text:
        "On the first Saturday of every month, enjoy free live jazz entertainment from local bands.",
      img: { src: "img/faces.png", alt: "Entertainment icon" }
    },
    {
      heading: "Satisfaction guaranteed",
      text:
        "Not happy with your meal? A full refund will be provided, no questions asked!",
      img: { src: "img/heart.png", alt: "Heart icon" }
    }
  ];

  return (
    <article className="features">
      <div className="features_header">
        <h2>Our Promise</h2>
      </div>

      <div className="features_box-wrapper">
        {
          // display the information for each of our features in their own Box
          featuresData.map((feature) => (
            <FeatureBox feature={feature} />
          ))
        }
      </div>
    </article>
  );
}

// Display a Feature box when passed in the information for the feature
const FeatureBox = ({ feature }) => (
  <div className="features_box">
    <img src={feature.img.src} alt={feature.img.alt} />
    <h5>{feature.heading}</h5>
    <p>{feature.text}</p>
  </div>
);
