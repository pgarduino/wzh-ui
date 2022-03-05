import ServiceBase from './../Base'

class UserService extends ServiceBase {

    getAll() {
        return this.get('/api/users', {})
    }

    getById(id) {
        return this.get(`/api/users/${id}`, { });
    }

    getTasksById(id) {
        return this.get(`/api/users/${id}/tasks`, { });
    }
}
const userService = new UserService()
export default userService