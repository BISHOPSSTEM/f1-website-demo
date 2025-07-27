import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, TrendingUp, Award } from 'lucide-react';
import { teams } from '../data/mockData';

const Teams: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

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
            2024 CONSTRUCTORS
          </h1>
          <p className="text-xl text-f1-gray-600 max-w-3xl mx-auto">
            Discover the teams behind the drivers. From legendary constructors to rising challengers, 
            explore the engineering excellence that defines Formula 1.
          </p>
        </motion.div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Team Header */}
              <div 
                className="h-32 relative"
                style={{ backgroundColor: team.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="absolute top-4 left-6 text-white">
                  <div className="text-3xl font-black mb-1">P{team.position}</div>
                  <div className="text-sm opacity-90">Championship Position</div>
                </div>
                <div className="absolute top-4 right-6 text-white text-right">
                  <div className="text-2xl font-bold">{team.points}</div>
                  <div className="text-sm opacity-90">Points</div>
                </div>
              </div>

              {/* Team Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-f1-black mb-2">{team.name}</h3>
                    <div className="flex items-center text-f1-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Founded {team.founded}
                    </div>
                  </div>
                  <img
                    src={team.logo}
                    alt={`${team.name} logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>

                {/* Drivers */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 mr-2 text-f1-gray-600" />
                    <span className="font-semibold text-f1-black">Drivers</span>
                  </div>
                  <div className="space-y-2">
                    {team.drivers.map((driver, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-f1-gray-50 rounded-lg p-3">
                        <span className="font-medium text-f1-black">{driver}</span>
                        <span className="text-sm text-f1-gray-600">#{idx === 0 ? '1' : '11'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-f1-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-f1-red mb-1">{team.championships}</div>
                    <div className="text-sm text-f1-gray-600">Championships</div>
                  </div>
                  <div className="text-center bg-f1-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-f1-black mb-1">
                      {team.position === 1 ? '1st' : team.position === 2 ? '2nd' : team.position === 3 ? '3rd' : `${team.position}th`}
                    </div>
                    <div className="text-sm text-f1-gray-600">Current Position</div>
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
                  className="w-full bg-f1-gray-100 hover:bg-f1-gray-200 text-f1-black py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {selectedTeam === team.id ? 'Show Less' : 'View Details'}
                  <TrendingUp className="ml-2 h-4 w-4" />
                </button>

                {/* Expanded Details */}
                {selectedTeam === team.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-f1-gray-200 pt-6 mt-6"
                  >
                    <div className="space-y-6">
                      {/* Team History */}
                      <div>
                        <h4 className="font-semibold text-f1-black mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          Team History
                        </h4>
                        <div className="bg-f1-gray-50 rounded-lg p-4">
                          <p className="text-f1-gray-700 text-sm leading-relaxed">
                            {team.name} has been a cornerstone of Formula 1 since {team.founded}, 
                            securing {team.championships} constructor championships and establishing 
                            themselves as one of the sport's most successful teams.
                          </p>
                        </div>
                      </div>

                      {/* Recent Performance */}
                      <div>
                        <h4 className="font-semibold text-f1-black mb-3">2024 Season Performance</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-f1-gray-600">Points Progress</span>
                            <span className="font-semibold text-f1-black">{team.points} / 860</span>
                          </div>
                          <div className="w-full bg-f1-gray-200 rounded-full h-3">
                            <div
                              className="h-3 rounded-full transition-all duration-1000"
                              style={{ 
                                width: `${(team.points / 860) * 100}%`,
                                backgroundColor: team.color 
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Technical Specs */}
                      <div>
                        <h4 className="font-semibold text-f1-black mb-3">Technical Information</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-f1-gray-50 rounded-lg p-3">
                            <div className="font-medium text-f1-black">Power Unit</div>
                            <div className="text-f1-gray-600">
                              {team.name.includes('Red Bull') ? 'Honda RBPT' : 
                               team.name.includes('Mercedes') ? 'Mercedes' :
                               team.name.includes('Ferrari') ? 'Ferrari' : 'Mercedes'}
                            </div>
                          </div>
                          <div className="bg-f1-gray-50 rounded-lg p-3">
                            <div className="font-medium text-f1-black">Chassis</div>
                            <div className="text-f1-gray-600">{team.name.substring(0, 8)}-01</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Constructor Championship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-f1-black mb-6 text-center flex items-center justify-center">
            <Trophy className="mr-3 h-8 w-8 text-f1-red" />
            Constructor Championship Standings
          </h2>
          
          <div className="space-y-4">
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-center p-4 bg-f1-gray-50 rounded-lg hover:bg-f1-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white mr-4"
                     style={{ backgroundColor: team.color }}>
                  {team.position}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-f1-black text-lg">{team.name}</h3>
                    <span className="font-bold text-f1-red text-xl">{team.points} pts</span>
                  </div>
                  
                  <div className="w-full bg-f1-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${(team.points / teams[0].points) * 100}%`,
                        backgroundColor: team.color 
                      }}
                    />
                  </div>
                </div>
                
                <div className="ml-4 text-right">
                  <div className="text-sm text-f1-gray-600">Gap to leader</div>
                  <div className="font-semibold text-f1-black">
                    {index === 0 ? '-' : `-${teams[0].points - team.points}`}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;
