<template>
    <div>
        <div class="columns">
            <div class="column"></div>
            <div class="field column is-one-third">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Search" v-model="searchConfig.keyword" @input="callHttpRequest">
                    <p v-if="hasError" class="help is-danger">{{ errorMessage }}</p>
                </div>
            </div>
            <div class="column"></div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    data () {
        return {
            searchConfig: {
                keyword: "",
                token: "c0cea8087b2a637fc1139ba2b50c860134e60a78b72c0f7c",
                url: "https://fonoapi.freshpixl.com/v1/getdevice",
            },
            hasError: false,
            errorMessage: ""
        }
    },
    methods: {
        callHttpRequest: _.debounce(function () {
            this.hasError = false;
            this.errorMessage = "";
            let keyword = this.searchConfig.keyword;
            let config = {
                params: {
                    token: this.searchConfig.token,
                    device: this.searchConfig.keyword
                }
            };

            if (keyword != "") {
                this.$http.get(this.searchConfig.url, config).then(response => {
                    if (response.body.status) {
                        this.hasError = true;
                        this.errorMessage = response.body.message;
                    }
                }, response => {
                    console.log(response);
                });
            }
        }, 500)
    },
    watch: {
        searchConfig (val) {
            this.hasError = false;
            this.errorMessage = "";
        }
    }
}
</script>

<style>

</style>
