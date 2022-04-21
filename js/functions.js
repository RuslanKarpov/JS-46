const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag ->this', this);
    },
};
user.showTag();