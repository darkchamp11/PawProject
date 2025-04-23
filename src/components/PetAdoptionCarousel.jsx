import { useState, useEffect } from 'react';

const PetAdoptionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pets] = useState([
    {
      id: 1,
      name: 'Buddy',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '2 years',
      description: 'Friendly and energetic, loves to play fetch and go for long walks.',
      image: 'https://placehold.co/600x400/4CAF50/FFFFFF?text=Buddy'
    },
    {
      id: 2,
      name: 'Whiskers',
      type: 'Cat',
      breed: 'Siamese',
      age: '3 years',
      description: 'Calm and affectionate, enjoys lounging in sunny spots and gentle petting.',
      image: 'https://placehold.co/600x400/FFA000/FFFFFF?text=Whiskers'
    },
    {
      id: 3,
      name: 'Max',
      type: 'Dog',
      breed: 'Beagle',
      age: '1 year',
      description: 'Curious and playful, has a great nose and loves to explore outdoors.',
      image: 'https://placehold.co/600x400/FF5722/FFFFFF?text=Max'
    }
  ]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === pets.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pets.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div id="adoption" className="carousel-container">
      <h2 className="section-title">Find Your Perfect Companion</h2>
      <div 
        className={`carousel-track ${isTransitioning ? 'transitioning' : ''}`} 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pets.map(pet => (
          <div key={pet.id} className="carousel-slide">
            <div className="pet-card">
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <div className="pet-content">
                <h3>{pet.name}</h3>
                <div className="pet-details">
                  <p><strong>Type:</strong> {pet.type}</p>
                  <p><strong>Breed:</strong> {pet.breed}</p>
                  <p><strong>Age:</strong> {pet.age}</p>
                  <p>{pet.description}</p>
                </div>
                <button className="btn">Adopt Me</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carousel-buttons">
        <button className="carousel-btn" onClick={prevSlide} aria-label="Previous pet">←</button>
        <div className="carousel-indicators">
          {pets.map((_, index) => (
            <span 
              key={index} 
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
        <button className="carousel-btn" onClick={nextSlide} aria-label="Next pet">→</button>
      </div>
    </div>
  );
};

export default PetAdoptionCarousel;