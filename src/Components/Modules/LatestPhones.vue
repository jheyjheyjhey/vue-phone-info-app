<template>
    <div style="padding-bottom: 15px;">
        <div class="box">
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <span>
                            <strong class="has-text-info">{{ phone.DeviceName }}</strong> | <small>{{ phone.announced }}</small>
                            <hr>
                            <p>Features</p>
                            <p style="white-space: pre;">  {{ phone.features_c }}</p>
                            <a class="has-text-info">Read more...</a>
                        </span>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    props: ['phone'],
    data () {
        return {
            newPhone: this.phone
        }
    }
}
</script>

<style>

</style>
