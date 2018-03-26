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
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import SearchPhone from '../Modules/SearchPhone.vue';

export default {
    components: {
        appSearchPhone: SearchPhone
    }
}
</script>

<style>

</style>
