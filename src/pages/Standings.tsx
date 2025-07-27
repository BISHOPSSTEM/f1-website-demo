import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Award } from 'lucide-react';
import { drivers, teams } from '../data/mockData';

const Standings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'drivers' | 'constructors'>('drivers');

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
            2024 CHAMPIONSHIP
          </h1>
          <p className="text-xl text-f1-gray-600 max-w-3xl mx-auto">
            Follow the intense battle for the 2024 Formula 1 World Championship. 
            Track driver and constructor standings throughout the season.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('drivers')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                activeTab === 'drivers'
                  ? 'bg-f1-red text-white'
                  : 'text-f1-gray-700 hover:bg-f1-gray-100'
              }`}
            >
              <Users className="mr-2 h-5 w-5" />
              Drivers Championship
            </button>
            <button
              onClick={() => setActiveTab('constructors')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                activeTab === 'constructors'
                  ? 'bg-f1-red text-white'
                  : 'text-f1-gray-700 hover:bg-f1-gray-100'
              }`}
            >
              <Award className="mr-2 h-5 w-5" />
              Constructors Championship
            </button>
          </div>
        </motion.div>

        {/* Drivers Championship */}
        {activeTab === 'drivers' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Championship Leader Highlight */}
            <div className="bg-gradient-to-r from-f1-red to-red-700 rounded-2xl p-8 text-white mb-8">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                  <h2 className="text-3xl font-bold mb-2">Championship Leader</h2>
                  <h3 className="text-5xl font-black mb-4">{drivers[0].name}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-lg">
                    <div className="flex items-center justify-center lg:justify-start">
                      <Trophy className="mr-2 h-6 w-6" />
                      {drivers[0].points} Points
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <TrendingUp className="mr-2 h-6 w-6" />
                      {drivers[0].wins} Wins
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src={drivers[0].image}
                    alt={drivers[0].name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white/20 mb-4"
                  />
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{drivers[0].team}</div>
                    <div className="text-lg opacity-90">#{drivers[0].number}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drivers Standings Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-f1-black text-white p-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Trophy className="mr-3 h-6 w-6" />
                  Drivers Championship Standings
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-f1-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-f1-gray-700">Position</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-f1-gray-700">Driver</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-f1-gray-700">Team</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-f1-gray-700">Points</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-f1-gray-700">Wins</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-f1-gray-700">Podiums</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-f1-gray-200">
                    {drivers.map((driver, index) => (
                      <motion.tr
                        key={driver.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                        className="hover:bg-f1-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                              driver.position === 1 ? 'bg-yellow-500' :
                              driver.position === 2 ? 'bg-gray-400' :
                              driver.position === 3 ? 'bg-amber-600' :
                              'bg-f1-gray-600'
                            }`}>
                              {driver.position}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img
                              src={driver.image}
                              alt={driver.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <div className="font-semibold text-f1-black">{driver.name}</div>
                              <div className="text-sm text-f1-gray-600">#{driver.number}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-f1-gray-700">{driver.team}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="font-bold text-f1-red text-lg">{driver.points}</span>
                        </td>
                        <td className="px-6 py-4 text-center font-semibold">{driver.wins}</td>
                        <td className="px-6 py-4 text-center font-semibold">{driver.podiums}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Constructors Championship */}
        {activeTab === 'constructors' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Constructor Leader Highlight */}
            <div 
              className="rounded-2xl p-8 text-white mb-8"
              style={{ background: `linear-gradient(135deg, ${teams[0].color}, ${teams[0].color}dd)` }}
            >
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                  <h2 className="text-3xl font-bold mb-2">Constructor Champion Leader</h2>
                  <h3 className="text-5xl font-black mb-4">{teams[0].name}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-lg">
                    <div className="flex items-center justify-center lg:justify-start">
                      <Trophy className="mr-2 h-6 w-6" />
                      {teams[0].points} Points
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <Award className="mr-2 h-6 w-6" />
                      {teams[0].championships} Championships
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src={teams[0].logo}
                    alt={`${teams[0].name} logo`}
                    className="w-32 h-32 rounded-lg object-cover border-4 border-white/20 mb-4"
                  />
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-lg font-bold">Founded {teams[0].founded}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Constructors Standings */}
            <div className="space-y-4">
              {teams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-xl mr-6"
                        style={{ backgroundColor: team.color }}
                      >
                        {team.position}
                      </div>
                      
                      <div className="flex items-center">
                        <img
                          src={team.logo}
                          alt={`${team.name} logo`}
                          className="w-16 h-16 rounded-lg object-cover mr-6"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-f1-black mb-1">{team.name}</h3>
                          <div className="flex items-center text-f1-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {team.drivers.join(' • ')}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-3xl font-bold text-f1-red mb-1">{team.points}</div>
                      <div className="text-f1-gray-600">Points</div>
                      {index > 0 && (
                        <div className="text-sm text-f1-gray-500 mt-1">
                          -{teams[0].points - team.points} behind leader
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-f1-gray-700">Season Progress</span>
                      <span className="text-sm text-f1-gray-600">
                        {Math.round((team.points / teams[0].points) * 100)}% of leader
                      </span>
                    </div>
                    <div className="w-full bg-f1-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(team.points / teams[0].points) * 100}%`,
                          backgroundColor: team.color 
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Championship Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">24</div>
            <div className="text-f1-gray-600">Races</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">
              {Math.max(...drivers.map(d => d.points))}
            </div>
            <div className="text-f1-gray-600">Highest Points</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">
              {drivers.reduce((sum, d) => sum + d.wins, 0)}
            </div>
            <div className="text-f1-gray-600">Total Wins</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-f1-red mb-2">10</div>
            <div className="text-f1-gray-600">Teams</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Standings;
