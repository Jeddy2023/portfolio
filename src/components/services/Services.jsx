import React from "react";
import "./services.css";
import Profile from "../../assets/profilesvg.avif";

function Services() {
  const data = [
    {
      id: 1,
      title: "Website Design",
      description:
        "I specialize in crafting exceptional web designs that harmonize aesthetics and functionality.",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "I excel in the realm of web development, where I bring concepts to life through meticulously coded solutions.",
    },
    {
      id: 3,
      title: "Product Design",
      description:
        "My passion lies in product design, where I combine innovation and aesthetics to craft user-centric experiences. ",
    },
    {
      id: 4,
      title: "Application Design",
      description:
        "Application design is my forte, where I blend creativity with functionality to design intuitive and user-friendly interfaces. ",
    },
    {
      id: 5,
      title: "Graphics Design",
      description:
        "Graphics design is where I channel my creativity, transforming ideas into captivating visuals. ",
    },
  ];
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
