export const PhotoService = {
    getData() {
        return [
            {
                id: '1',
                title: 'Basic Template',
                src: './src/assets/templates/1.png',
            },
            {
                id: '2',
                title: 'Link Template',
                src: './src/assets/templates/2.png',
            },
            {
                id: '3',
                title: 'Image Template',
                src: './src/assets/templates/3.png',
            }
        ]
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
}