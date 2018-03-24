<template>
    <div>
        <div class="columns">
            <div class="column"></div>
            <div class="field column is-one-third">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Search" v-model="keyword" @input="callHttpRequest">
                </div>
            </div>
            <div class="column"></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            keyword: "",
            token: "c0cea8087b2a637fc1139ba2b50c860134e60a78b72c0f7c",
            url: "https://fonoapi.freshpixl.com/v1/getdevice"
        }
    },
    methods: {
        callHttpRequest () {
            let config = {
                params: {
                    token: this.token,
                    device: event.target.value
                }
            };

            this.$http.get(this.url, config).then(response => {
                console.log(response.body);
            }, response => {
                console.log(response);
            });
        }
    }
}
</script>

<style>

</style>
