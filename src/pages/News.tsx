import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, TrendingUp, Search } from 'lucide-react';
import { news } from '../data/mockData';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Array.from(new Set(news.map(article => article.category)))];

  const filteredNews = news.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            F1 NEWS CENTER
          </h1>
          <p className="text-xl text-f1-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest Formula 1 news, race reports, technical analysis, 
            and exclusive insights from the world of motorsport.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-f1-gray-300 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-f1-red focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-f1-gray-400" />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-f1-red text-white'
                    : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow"
          >
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={filteredNews[0].image}
                  alt={filteredNews[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-f1-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="bg-f1-gray-100 text-f1-gray-700 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                    {filteredNews[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-f1-black mb-4 leading-tight">
                  {filteredNews[0].title}
                </h2>
                <p className="text-f1-gray-600 mb-6 text-lg leading-relaxed">
                  {filteredNews[0].summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-f1-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{filteredNews[0].author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(filteredNews[0].publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <button className="bg-f1-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-f1-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-f1-black mb-3 line-clamp-2 group-hover:text-f1-red transition-colors">
                  {article.title}
                </h3>
                <p className="text-f1-gray-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between text-sm text-f1-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-f1-gray-100 text-f1-gray-600 px-2 py-1 rounded text-xs flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-f1-gray-100 hover:bg-f1-red hover:text-white text-f1-black py-2 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Read Article
                  <TrendingUp className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-2xl font-bold text-f1-black mb-2">No articles found</h3>
            <p className="text-f1-gray-600">
              Try adjusting your search terms or category filter.
            </p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-f1-red to-red-700 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6 opacity-90">
            Get the latest F1 news delivered straight to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-f1-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-f1-red px-6 py-3 rounded-lg font-semibold hover:bg-f1-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
