import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Share2, Heart, Eye } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const galleryImages = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'racing',
      title: 'Monaco Grand Prix Action',
      description: 'Intense wheel-to-wheel racing through the streets of Monaco',
      likes: 1247,
      views: 15632
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'cars',
      title: 'Red Bull RB19 Detail',
      description: 'Close-up of the championship-winning Red Bull Racing car',
      likes: 892,
      views: 12450
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'drivers',
      title: 'Victory Celebration',
      description: 'Max Verstappen celebrates another race victory',
      likes: 2156,
      views: 28934
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'circuits',
      title: 'Silverstone Aerial View',
      description: 'Stunning aerial shot of the legendary British circuit',
      likes: 756,
      views: 9876
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'racing',
      title: 'Start Line Drama',
      description: 'The intense moment as lights go out at the Hungarian GP',
      likes: 1834,
      views: 22145
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'cars',
      title: 'Ferrari SF-23 Profile',
      description: 'The sleek lines of Ferrari\'s 2023 challenger',
      likes: 1123,
      views: 16789
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'drivers',
      title: 'Pit Lane Focus',
      description: 'Lewis Hamilton preparing for qualifying',
      likes: 1567,
      views: 19234
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'circuits',
      title: 'Spa-Francorchamps Sunset',
      description: 'Golden hour at the legendary Belgian circuit',
      likes: 2234,
      views: 31567
    },
    {
      id: '9',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'racing',
      title: 'Overtaking Maneuver',
      description: 'Spectacular overtake at the Brazilian Grand Prix',
      likes: 1789,
      views: 24567
    }
  ];

  const categories = ['all', 'racing', 'cars', 'drivers', 'circuits'];

  const filteredImages = galleryImages.filter(image => 
    filter === 'all' || image.category === filter
  );

  return (
    <div className="min-h-screen bg-f1-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-f1-black mb-4">
            F1 GALLERY
          </h1>
          <p className="text-xl text-f1-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the world of Formula 1 through stunning photography. 
            From high-speed action to behind-the-scenes moments, experience the sport like never before.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors capitalize ${
                filter === category
                  ? 'bg-f1-red text-white'
                  : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{image.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {image.likes.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {image.views.toLocaleString()}
                      </div>
                    </div>
                    <span className="bg-f1-red px-2 py-1 rounded text-xs font-semibold capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Image */}
                <img
                  src={galleryImages.find(img => img.id === selectedImage)?.src}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <h3 className="text-2xl font-bold mb-2">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-4">
                    {galleryImages.find(img => img.id === selectedImage)?.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-2" />
                        {galleryImages.find(img => img.id === selectedImage)?.likes.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-5 w-5 mr-2" />
                        {galleryImages.find(img => img.id === selectedImage)?.views.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                      <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-f1-black mb-6 text-center">
            Gallery Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-f1-red mb-2">{galleryImages.length}</div>
              <div className="text-f1-gray-600">Total Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-f1-red mb-2">
                {galleryImages.reduce((sum, img) => sum + img.likes, 0).toLocaleString()}
              </div>
              <div className="text-f1-gray-600">Total Likes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-f1-red mb-2">
                {galleryImages.reduce((sum, img) => sum + img.views, 0).toLocaleString()}
              </div>
              <div className="text-f1-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-f1-red mb-2">{categories.length - 1}</div>
              <div className="text-f1-gray-600">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
