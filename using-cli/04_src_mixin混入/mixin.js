export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted () {
        console.log('mixin - hello vue');
    }
}

export const shareData = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
    mounted(){
        console.log("shareData");
    }
}