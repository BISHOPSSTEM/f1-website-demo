import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Trophy, Zap, Flag } from 'lucide-react';
import { races } from '../data/mockData';

const Races: React.FC = () => {
  const [selectedRace, setSelectedRace] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  const filteredRaces = races.filter(race => {
    if (filter === 'all') return true;
    return race.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'live':
        return 'bg-f1-red animate-pulse';
      case 'upcoming':
        return 'bg-blue-500';
      default:
        return 'bg-f1-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'live':
        return 'Live';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'TBD';
    }
  };

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
            2024 RACE CALENDAR
          </h1>
          <p className="text-xl text-f1-gray-600 max-w-3xl mx-auto">
            Follow the complete 2024 Formula 1 season with 24 thrilling races across the globe. 
            From street circuits to legendary tracks, experience the ultimate motorsport championship.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'all'
                ? 'bg-f1-red text-white'
                : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
            }`}
          >
            All Races
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'upcoming'
                ? 'bg-f1-red text-white'
                : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'completed'
                ? 'bg-f1-red text-white'
                : 'bg-white text-f1-gray-700 hover:bg-f1-gray-100'
            }`}
          >
            Completed
          </button>
        </motion.div>

        {/* Race Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRaces.map((race, index) => (
            <motion.div
              key={race.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedRace(selectedRace === race.id ? null : race.id)}
            >
              {/* Race Image */}
              <div className="relative">
                <img
                  src={race.image}
                  alt={race.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${getStatusColor(race.status)}`}>
                    {getStatusText(race.status)}
                  </div>
                  <div className="bg-f1-black text-white px-3 py-1 rounded-full font-bold text-sm">
                    Round {race.round}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{race.name}</h3>
                  <p className="text-f1-gray-200 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {race.country}
                  </p>
                </div>
              </div>

              {/* Race Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-f1-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {new Date(race.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-f1-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    {race.status === 'upcoming' ? 'TBD' : '14:00 UTC'}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-f1-black mb-1">Circuit</h4>
                  <p className="text-f1-gray-600">{race.circuit}</p>
                </div>

                {/* Race Results (for completed races) */}
                {race.status === 'completed' && race.winner && (
                  <div className="bg-f1-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                          <span className="font-semibold text-f1-black">Winner</span>
                        </div>
                        <p className="text-f1-gray-700">{race.winner}</p>
                      </div>
                      {race.fastestLap && (
                        <div>
                          <div className="flex items-center mb-2">
                            <Zap className="h-4 w-4 mr-2 text-purple-500" />
                            <span className="font-semibold text-f1-black">Fastest Lap</span>
                          </div>
                          <p className="text-f1-gray-700">{race.fastestLap}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Expanded Details */}
                {selectedRace === race.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-f1-gray-200 pt-4 mt-4"
                  >
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-f1-black mb-2">Circuit Information</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-f1-gray-500">Length:</span>
                            <span className="ml-2 text-f1-black">5.412 km</span>
                          </div>
                          <div>
                            <span className="text-f1-gray-500">Laps:</span>
                            <span className="ml-2 text-f1-black">57</span>
                          </div>
                          <div>
                            <span className="text-f1-gray-500">DRS Zones:</span>
                            <span className="ml-2 text-f1-black">3</span>
                          </div>
                          <div>
                            <span className="text-f1-gray-500">First GP:</span>
                            <span className="ml-2 text-f1-black">2004</span>
                          </div>
                        </div>
                      </div>

                      {race.status === 'upcoming' && (
                        <div>
                          <h5 className="font-semibold text-f1-black mb-2">Weekend Schedule</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-f1-gray-600">Practice 1</span>
                              <span className="text-f1-black">Friday 13:30</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-f1-gray-600">Practice 2</span>
                              <span className="text-f1-black">Friday 17:00</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-f1-gray-600">Practice 3</span>
                              <span className="text-f1-black">Saturday 13:30</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-f1-gray-600">Qualifying</span>
                              <span className="text-f1-black">Saturday 17:00</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                              <span className="text-f1-red">Race</span>
                              <span className="text-f1-red">Sunday 15:00</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                <button
                  className="w-full mt-4 bg-f1-gray-100 hover:bg-f1-gray-200 text-f1-black py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRace(selectedRace === race.id ? null : race.id);
                  }}
                >
                  {selectedRace === race.id ? 'Show Less' : 'View Details'}
                  <Flag className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Season Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-f1-black mb-6 text-center">
            2024 Season Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-f1-red mb-2">24</div>
              <div className="text-f1-gray-600">Total Races</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">
                {races.filter(r => r.status === 'completed').length}
              </div>
              <div className="text-f1-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {races.filter(r => r.status === 'upcoming').length}
              </div>
              <div className="text-f1-gray-600">Upcoming</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-f1-black mb-2">5</div>
              <div className="text-f1-gray-600">Continents</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Races;
