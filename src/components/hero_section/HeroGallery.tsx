import { useState, useEffect } from "react";
import "./HeroGallery.css";

type Slide = {
  id: number;
  imageUrl: string;
  alt: string;
  headline: string;
  subheadline?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: "./pic_1.jpg",
    alt: "Delicious Food 1",
    headline: "Eat Well. Do Good.",
    subheadline: "Food with a purpose.",
  },
  {
    id: 2,
    imageUrl: "./pic_2.jpg",
    alt: "Delicious Food 2",
    headline: "Crafted by migrant chefs.",
    subheadline: "Bold flavors. Big hearts.",
  },
  {
    id: 3,
    imageUrl: "./pic_3.jpg",
    alt: "Delicious Food 3",
    headline: "From our kitchen to your city.",
    subheadline: "Arab–Latin inspired dishes.",
  },
  {
    id: 4,
    imageUrl: "./pic_4.jpg",
    alt: "Delicious Food 4",
    headline: "Every meal gives back.",
    subheadline: "Buy a meal, give a meal.",
  },
];

export default function HeroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentSlide = slides[currentIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= slides.length ? 0 : nextIndex;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="hero-gallery">
      <div className="hero-gallery__slide">
        {/* Background image */}
        <img
          src={currentSlide.imageUrl}
          alt={currentSlide.alt}
          className="hero-gallery__image"
        />

        {/* Dark gradient overlay */}
        <div className="hero-gallery__overlay" />

        {/* Text + controls on top */}
        <div className="hero-gallery__content">
          <h1 className="hero-gallery__headline">
            {currentSlide.headline}
          </h1>

          {currentSlide.subheadline && (
            <p className="hero-gallery__subheadline">
              {currentSlide.subheadline}
            </p>
          )}

          <button
            type="button"
            onClick={handleTogglePlay}
            className="hero-gallery__play-toggle"
          >
            {isPlaying ? "Pause slideshow" : "Play slideshow"}
          </button>
        </div>
      </div>
    </section>
  );
}
