import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flag, Calendar, TrendingUp } from 'lucide-react';
import { drivers } from '../data/mockData';

const Drivers: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'position' | 'points' | 'wins'>('position');

  const sortedDrivers = [...drivers].sort((a, b) => {
    switch (sortBy) {
      case 'points':
        return b.points - a.points;
      case 'wins':
        return b.wins - a.wins;
      default:
        return a.position - b.position;
    }
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
            2024 DRIVERS
          </h1>
          <p className="text-xl text-f1-gray-600 max-w-3xl mx-auto">
            Meet the elite drivers competing in the 2024 Formula 1 World Championship. 
            Discover their stats, achievements, and racing journey.
          </p>
        </motion.div>

        {/* Sort Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setSortBy('position')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              sortBy === 'position'
                ? 'bg-f1-red text-white'
                : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
            }`}
          >
            Championship Order
          </button>
          <button
            onClick={() => setSortBy('points')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              sortBy === 'points'
                ? 'bg-f1-red text-white'
                : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
            }`}
          >
            By Points
          </button>
          <button
            onClick={() => setSortBy('wins')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              sortBy === 'wins'
                ? 'bg-f1-red text-white'
                : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
            }`}
          >
            By Wins
          </button>
        </motion.div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedDrivers.map((driver, index) => (
            <motion.div
              key={driver.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedDriver(selectedDriver === driver.id ? null : driver.id)}
            >
              {/* Driver Image */}
              <div className="relative">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-f1-red text-white px-3 py-1 rounded-full font-bold">
                  P{driver.position}
                </div>
                <div className="absolute top-4 right-4 bg-f1-black text-white px-3 py-1 rounded-full font-bold">
                  #{driver.number}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{driver.name}</h3>
                  <p className="text-f1-gray-200">{driver.team}</p>
                </div>
              </div>

              {/* Driver Stats */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-f1-red">{driver.points}</div>
                    <div className="text-sm text-f1-gray-500">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-f1-black">{driver.wins}</div>
                    <div className="text-sm text-f1-gray-500">Wins</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-f1-gray-600 mb-4">
                  <div className="flex items-center">
                    <Flag className="h-4 w-4 mr-1" />
                    {driver.nationality}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Age {driver.age}
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedDriver === driver.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-f1-gray-200 pt-4 mt-4"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-f1-black">Championships</div>
                        <div className="text-f1-gray-600">{driver.championships}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-f1-black">Podiums</div>
                        <div className="text-f1-gray-600">{driver.podiums}</div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-f1-black">Season Progress</span>
                        <span className="text-sm text-f1-gray-600">
                          {Math.round((driver.points / 575) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-f1-gray-200 rounded-full h-2">
                        <div
                          className="bg-f1-red h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((driver.points / 575) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <button
                  className="w-full mt-4 bg-f1-gray-100 hover:bg-f1-gray-200 text-f1-black py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDriver(selectedDriver === driver.id ? null : driver.id);
                  }}
                >
                  {selectedDriver === driver.id ? 'Show Less' : 'View Details'}
                  <TrendingUp className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Championship Battle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-f1-black mb-6 text-center">
            Championship Battle
          </h2>
          <div className="space-y-4">
            {drivers.slice(0, 5).map((driver, index) => (
              <div key={driver.id} className="flex items-center">
                <div className="w-8 h-8 bg-f1-red text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  {driver.position}
                </div>
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-f1-black">{driver.name}</span>
                    <span className="font-bold text-f1-red">{driver.points} pts</span>
                  </div>
                  <div className="w-full bg-f1-gray-200 rounded-full h-2">
                    <div
                      className="bg-f1-red h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(driver.points / drivers[0].points) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Drivers;
