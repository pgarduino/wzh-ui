import axios from 'axios'

// const baseUrl = "https://wzh-api.herokuapp.com"
// const baseUrl = "http://127.0.0.1:8080"

class ServiceBase {

    get(path, params) {
        // const url = `${baseUrl}${path}`;
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