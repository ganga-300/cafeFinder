import React, { useState } from 'react';

const ImageOptimizer = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600',
  loading = 'lazy',
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={handleImageLoad}
        {...props}
      />
    );
  }

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className={`image-placeholder ${className}`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        onError={handleImageError}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  );
};

export default ImageOptimizer;