import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
        {
          id: 'c3',
          firstName: 'Paulina',
          lastName: 'Strzyzewska',
          areas: ['frontend'],
          description:
            'My name is Pauli and I don`t have any frontend professional work experience, however I can offer a lot of ideas and high-level resources for e-learning! Let me join you on this developerToBe journey!',
          hourlyRate: 10,
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
