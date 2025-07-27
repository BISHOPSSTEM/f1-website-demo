import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, TrendingUp, Clock, MapPin } from 'lucide-react';
import { drivers, races, news } from '../data/mockData';

const Home: React.FC = () => {
  const upcomingRace = races.find(race => race.status === 'upcoming');
  const latestNews = news.slice(0, 3);
  const topDrivers = drivers.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-f1-black via-f1-gray-900 to-f1-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Formula 1 Racing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-f1-black/80 via-transparent to-f1-black/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              FORMULA 1
              <span className="block text-f1-red">HUB</span>
            </h1>
            <p className="text-xl md:text-2xl text-f1-gray-300 mb-8 leading-relaxed">
              Your ultimate destination for F1 news, live race updates, driver standings, 
              and everything Formula 1. Experience the thrill of motorsport like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/races"
                className="bg-f1-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                View Race Calendar
              </Link>
              <Link
                to="/standings"
                className="border-2 border-white text-white hover:bg-white hover:text-f1-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Championship Standings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Race Section */}
      {upcomingRace && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-f1-red to-red-700 rounded-2xl p-8 text-white"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-3xl font-bold mb-2">Next Race</h2>
                <h3 className="text-4xl font-black mb-4">{upcomingRace.name}</h3>
                <div className="flex flex-col sm:flex-row gap-4 text-lg">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    {upcomingRace.circuit}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    {new Date(upcomingRace.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">Round {upcomingRace.round}</div>
                  <Link
                    to="/races"
                    className="bg-white text-f1-red px-6 py-2 rounded-lg font-semibold hover:bg-f1-gray-100 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Championship Leaders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-f1-black">Championship Leaders</h2>
            <Link
              to="/standings"
              className="text-f1-red hover:text-red-700 font-semibold flex items-center"
            >
              View Full Standings
              <TrendingUp className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topDrivers.map((driver, index) => (
              <motion.div
                key={driver.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={driver.image}
                    alt={driver.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-f1-red text-white px-3 py-1 rounded-full font-bold">
                    #{driver.position}
                  </div>
                  <div className="absolute top-4 right-4 bg-f1-black text-white px-3 py-1 rounded-full font-bold">
                    #{driver.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-f1-black mb-2">{driver.name}</h3>
                  <p className="text-f1-gray-600 mb-4">{driver.team}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-f1-red">{driver.points}</div>
                      <div className="text-sm text-f1-gray-500">Points</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">{driver.wins}</div>
                      <div className="text-sm text-f1-gray-500">Wins</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest News */}
      <section className="bg-f1-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-f1-black">Latest News</h2>
              <Link
                to="/news"
                className="text-f1-red hover:text-red-700 font-semibold flex items-center"
              >
                View All News
                <TrendingUp className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {latestNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-f1-red text-white px-2 py-1 rounded text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="text-f1-gray-500 text-sm ml-3">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-f1-black mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-f1-gray-600 mb-4 line-clamp-3">
                      {article.summary}
                    </p>
                    <Link
                      to={`/news/${article.id}`}
                      className="text-f1-red hover:text-red-700 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">24</div>
            <div className="text-f1-gray-600">Races</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">20</div>
            <div className="text-f1-gray-600">Drivers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">10</div>
            <div className="text-f1-gray-600">Teams</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">75</div>
            <div className="text-f1-gray-600">Years</div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
