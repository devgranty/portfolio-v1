<template>
    <div>
        <div style="position:absolute; left:50%; top:10%; width:100%; margin:0; padding:0; margin-left:-50%;">
            <h1 style="color:#ddd; text-align:center; font-size:calc(10em + 2vw);">4<span style="color:rgba(255, 0, 0, 0.42);">0</span>4</h1>
            <p style="text-align:center; font-weight:900;">NOT FOUND</p>
            <p style="padding:20px; color:#999; text-align:center; line-height:1.6;">You seem lost, that happens! Hold my hands let me take you right <router-link to="/" style="color:green;">home</router-link></p>
        </div>
    </div>
</template>

<style>

</style>

<script>
export default {
    data: function () {
        return {
            params: {
                title: '404',
            }
        }
    },

    head: {
        title: function () {
            return {
                inner: this.params.title,
                seperator: '',
                complement: 'Not Found',
            }
        },

        meta: function () {
            return [
                {name: 'robots', content: 'noindex'},
            ]
        },
    }
}
</script>