
const videos = [{
    name: 'video 1', path: './video/preview/docuweb.mp4'
}]


const app = Vue.createApp({
    data(){
        return{
            videos
        }
    }
 })
app.mount('#app')