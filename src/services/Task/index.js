import ServiceBase from './../Base'

import { queryString } from './../../helpers/url'

class TaskService extends ServiceBase {

    getAll() {
        return this.get('/api/tasks', {})
    }

    findAllBy(params) {
        const query = queryString(params)
        return this.get(`/api/tasks?${query}`, { });
    }
}
const taskService = new TaskService()
export default taskService