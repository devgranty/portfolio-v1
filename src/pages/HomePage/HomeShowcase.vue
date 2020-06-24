<template>
    <section class="page-section">
        <div class="inner-container">
            <h1 class="section-heading" id="showcase">Showcase <router-link to="#showcase" class="section-anchor-id icon-gradient"><i class="fas fa-link" aria-hidden="true"></i></router-link></h1>
            <p class="section-headline">Some projects I've worked on independently.</p>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-6 mb-4" v-for="project in projects" v-bind:key="project.title">
                        <div class="project-card" data-aos="fade-up">
                            <router-link v-bind:to="project.link" class="project-link">
                                <img class="project-thumbnail" v-bind:src="project.imagePath">
                                <div class="project-details">
                                    <h3 v-bind:style="project.details">{{ project.title }}</h3>
                                    <h2 v-bind:style="project.details">{{ project.type }}</h2>
                                </div>
                            </router-link>
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
            projects:[
                {link: 'case/project-nx', details: {color: '#000'}, title: 'project nx', type: 'Web design, development', imagePath: 'https://res.cloudinary.com/dzw3gozjl/image/upload/v1592878535/uploads/project_nx/project-nx-cover-600x600_h9ir2g.png'},

                {link: 'case/willow-investment', details: {color: '#fff'}, title: 'willow investment', type: 'Web design, development', imagePath: 'https://res.cloudinary.com/dzw3gozjl/image/upload/v1592878585/uploads/willow_investment/willow-investment-cover-600x600_fipxwh.png'},

                {link: 'case/movynet', details: {color: '#dd0404'}, title: 'movynet', type: 'Web design, development', imagePath: 'https://res.cloudinary.com/dzw3gozjl/image/upload/v1592878483/uploads/movynet/movynet-cover-600x600_o2djmh.png'},

                {link: 'case/jovianbiz', details: {color: '#fff'}, title: 'jovianbiz', type: 'Web design, development', imagePath: 'https://res.cloudinary.com/dzw3gozjl/image/upload/v1592878433/uploads/jovianbiz/jovianbiz-cover-600x600_lxz6me.png'},

                {link: 'case/advbitcoinearns', details: {color: '#aaa'}, title: 'advbitcoinearns', type: 'Web design, development', imagePath: 'https://res.cloudinary.com/dzw3gozjl/image/upload/v1592878355/uploads/advbitcoinearns/advbitcoinearns-cover-600x600_tpxioj.png'},

                {link: 'case/myafriconnect', details: {color: '#fff'}, title: 'myafriconnect', type: 'Web design, development', imagePath: 'https://res.cloudinary.com/dzw3gozjl/image/upload/v1592878481/uploads/myafriconnect/logos%2Cicons/logo-1080x1080_d25dtw.jpg'}
            ]
        }
    }
}
</script>