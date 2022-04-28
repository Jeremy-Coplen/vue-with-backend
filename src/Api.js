import axios from "axios"

const url = "/api"

class Api {
    // Get Posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}/get/posts`)
                const data = res.data
                resolve(data)
            }
            catch(err) {
                reject(err)
            }
        })
    }

    // Add Post
    static addPost(id, text) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(`${url}/add/post`, { id, text })
                const data = res.data
                resolve(data)
            }
            catch(err) {
                reject(err)
            }
        })
    } 

    // update Post
    static updatePost(id, text) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(`${url}/update/post`, { id, text })
                const data = res.data
                resolve(data)
            }
            catch(err) {
                reject(err)
            }
        })
    }

    // Delete Post
    static deletePost(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.delete(`${url}/delete/post/${id}`)
                const data = res.data
                resolve(data)
            }
            catch(err) {
                reject(err)
            }
        })
    }
}

export default Api