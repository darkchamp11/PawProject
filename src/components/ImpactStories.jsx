import React, { useState, useEffect } from 'react';

const ImpactStories = () => {
  const [visibleStories, setVisibleStories] = useState([]);
  
  const stories = [
    {
      id: 1,
      title: 'Park Transformation',
      location: 'Central Park',
      image: 'https://placehold.co/600x400/4CAF50/FFFFFF?text=Park+Story',
      content: 'What was once a regular park is now a pet paradise with dedicated play areas, water stations, and waste disposal facilities.',
      icon: '🌳'
    },
    {
      id: 2,
      title: 'Cafe Culture Change',
      location: 'Downtown',
      image: 'https://placehold.co/600x400/FFA000/FFFFFF?text=Cafe+Story',
      content: 'Local cafes have embraced our pet-friendly initiative, creating special spaces and menus for pets accompanying their owners.',
      icon: '☕'
    },
    {
      id: 3,
      title: 'Housing Policy Victory',
      location: 'Citywide',
      image: 'https://placehold.co/600x400/FF5722/FFFFFF?text=Housing+Story',
      content: 'After our campaign, the city council passed new regulations making it easier for pet owners to find rental housing without restrictions.',
      icon: '🏠'
    }
  ];

  useEffect(() => {
    // Animate stories appearing one by one
    const timer = setTimeout(() => {
      setVisibleStories(stories);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="stories-container">
      {stories.map((story, index) => (
        <div 
          key={story.id} 
          className={`story-card ${visibleStories.includes(story) ? 'story-visible' : ''}`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="story-icon">{story.icon}</div>
          <img src={story.image} alt={story.title} className="story-image" />
          <div className="story-content">
            <h3>{story.title}</h3>
            <p className="story-location"><strong>Location:</strong> {story.location}</p>
            <p>{story.content}</p>
            <button className="btn btn-sm">Read Full Story</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactStories;