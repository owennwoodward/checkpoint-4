import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"



const imageApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})


class ImagesService {
    async getImage() {
        const res = await imageApi.get('')
        ProxyState.image = new Image(res.data)
        console.log(ProxyState.image);
    }
}


export const imagesService = new ImagesService()