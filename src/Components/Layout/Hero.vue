<template>
  <div>
    <section class="hero is-dark is-fullheight">
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title">
                    Looking for Phone Specifications?
                </h1>
                <br>
                <h1 class="subtitle">
                    Search for Phones! Brands, models, etc.
                </h1>
                <app-search-phone></app-search-phone>
                <br>
                <h1 class="title">
                    Or check these new phones!
                </h1>
                <br>
                <div v-for="(latestPhone, index) in latestPhones" :key="index" class="columns">
                    <div class="column"></div>
                    <div class="column is-half">
                        <app-latest-phones :phone="latestPhone" ></app-latest-phones>
                    </div>
                    <div class="column"></div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import SearchPhone from '../Modules/SearchPhone.vue';
import LatestPhones from '../Modules/LatestPhones.vue';

export default {
    data () {
        return {
            url: 'https://fonoapi.freshpixl.com/v1/getlatest',
            latestPhones: {},
        }
    },
    components: {
        appSearchPhone: SearchPhone,
        appLatestPhones: LatestPhones
    },
    created () {
        let config = {
            params: {
                token: "c0cea8087b2a637fc1139ba2b50c860134e60a78b72c0f7c",
                limit: 5
            }
        };

        this.$http.get(this.url, config).then(response => {
            if (!response.body.status) {
                this.latestPhones = response.body;
            }
            else {
                alert(response.body.message);
            }
        }, response => {
            console.log(response);
        });
    }
}
</script>

<style>

</style>
