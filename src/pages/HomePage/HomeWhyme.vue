<template>
    <section class="page-section">
        <div class="inner-container">
            <h1 class="section-heading" id="whyme">Why Me <router-link to="#whyme"><i class="fas fa-link section-anchor-id icon-gradient" aria-hidden="true"></i></router-link></h1>
            <p class="section-headline">Still not convinced? Here are some "WHY ME" reasons.</p>

            <div class="whyme-carousel">
                <div class="carousel-cell" v-for="reason in reasons" v-bind:key="reason.title">
                    <ul>
                        <li><i v-bind:class="reason.iconClass" class="icon-gradient" aria-hidden="true"></i></li>
                        <li><h2>{{ reason.title }}</h2></li>
                        <li>{{ reason.comment }}</li>
                    </ul>
                </div>
            </div>

            <div class="whyme-reason">
                <div class="row">
                    <div v-bind:class="reason.columnClass" v-for="reason in reasons" v-bind:key="reason.title">
                        <div class="reason-cell" data-aos="fade-up">
                            <ul>
                                <li><i v-bind:class="reason.iconClass" class="icon-gradient" aria-hidden="true"></i></li>
                                <li><h2>{{ reason.title }}</h2></li>
                                <li>{{ reason.comment }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>

<script>
export default {
    data: function () {
        return {
            reasons: [
                {columnClass: 'col-lg-4 offset-lg-4 mb-5', iconClass: 'fas fa-smile', title: 'Best Quality', comment: 'Nothing but the BEST.'},
                {columnClass: 'col-lg-6 mb-5', iconClass: 'fas fa-gem', title: 'Fully Customized', comment: 'Like nothing you\'ve seen before, build it from the ground up.'},
                {columnClass: 'col-lg-4 offset-lg-1 mb-5', iconClass: 'fas fa-money-bill-wave', title: 'Affordable', comment: 'Not to be mistaken for CHEAP.'},
                {columnClass: 'col-lg-4 offset-lg-1 mb-5', iconClass: 'fas fa-shipping-fast', title: 'Fast Delivery', comment: 'Wouldn\'t have to rush it, just be there on time.'},
                {columnClass: 'col-lg-6 mb-5', iconClass: 'fas fa-envelope', title: 'Support', comment: 'Provide all required assistance till you are up and running with your project.'}
            ]
        }
    },   
}
</script>