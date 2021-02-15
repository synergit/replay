import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer foGiyDotkUTyYEedpM0T5lvCkZKOvM2F1yXqkaz_xRkiKs1Xe63QFC_i_H2pyLj5wdCSHWZU1azCwhv25EDW03s2RanEE1v780J-yfdIvVhJvstsrBWUoTvYU0QgYHYx'
    }
});

