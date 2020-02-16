import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      this.store.createRecord('task', {
        id: 1,
        name: 'Solve all github issues',
        description: 'Solve the world\'s Github issues.',
        isComplete: false,
        isPinned: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 2,
        name: 'A task',
        description: 'This is a task.',
        isComplete: false,
        isPinned: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 3,
        name: 'Clean the kitchen',
        description: 'It\'s filthy!',
        isComplete: false,
        isPinned: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 4,
        name: 'Complete frontend challenge',
        description: 'Easy as ABC',
        isComplete: false,
        isPinned: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 5,
        name: 'Join an awesome team',
        description: 'Friends, coffee and building stuff',
        isComplete: false,
        isPinned: false,
        creator: 2
      })
    ];
  }
}
