import axios from 'axios'

class ServiceBase {

    get(path, params) {
        const url = path;
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params,
                })
                .then(({ data }) => {
                    resolve(data)
                })
        })
    }
}
export default ServiceBase