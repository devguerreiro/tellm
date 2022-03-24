import axios from 'axios';
import { defineStore } from 'pinia';

export interface StateTask {
  activity?: string,
  type?: string,
  participants?: number,
  price?: number,
  link?: string,
  key?: string,
  accessibility?: number
}

interface State {
  task: StateTask
}

const baseURL = 'https://www.boredapi.com/api';

export default defineStore('task', {
  state: (): State => ({
    task: { },
  }),
  actions: {
    async getTask(): Promise<void> {
      try {
        const { data } = await axios.get(`${baseURL}/activity/`);
        this.task = data;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
