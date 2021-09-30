import axios from 'axios';

const KEY = 'AIzaSyDL4RmbHigbUAi1a_yl2Gx7wG69ROd_z4E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});    