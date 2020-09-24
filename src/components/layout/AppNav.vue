<template>
    <header class="navbar animate__animated animate__slideInDown animate__delay-3s">
        <div v-scroll-spy-active="{selector: '.scrollspy-find', class: 'scrollspy-active'}" class="navbar-container">
            <router-link to="/"><img class="navbar-brand-logo" v-bind:src="navLogoPath" alt="ga" width="50" height="50"></router-link>
            <nav class="navbar-links" role="navigation">
                <ul>
                    <li v-for="navbarLink in navbarLinks" v-bind:key="navbarLink.title">
                        <router-link v-bind:to="navbarLink.link" class="scrollspy-find">{{ navbarLink.title }}</router-link>
                    </li>
                </ul>
            </nav>
            <div>
                <button v-on:click="showMenu = !showMenu" id="navbarModalBtn" class="navbar-menu-btn" role="button" aria-haspopup="true">{{ showMenu ? 'Close' : 'Menu' }}</button>
                <transition enter-active-class="animate__animated animate__fadeInRightBig" leave-active-class="animate__animated animate__fadeOutRightBig">
                    <nav v-show="showMenu" class="navbar-modal" id="navbarModal" role="menu" aria-modal="true">
                        <ul v-scroll-spy-active="{selector: '.scrollspy-find', class: 'scrollspy-active'}" class="nav-link">
                            <li v-for="navbarLink in navbarLinks" v-bind:key="navbarLink.title">
                                <router-link v-bind:to="navbarLink.link" v-on:click.native="showMenu = !showMenu" class="scrollspy-find">{{ navbarLink.title }}</router-link>
                            </li>
                        </ul>
                        <ul class="media-profiles-ul" style="color:#000;">
                            <li><a href="https://github.com/devgranty" target="_blank"><i class="fab fa-github"></i></a></li>
                            <li><a href="https://ng.linkedin.com/in/grant-adiele-6533741b3" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="https://twitter.com/devgranty" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/devgranty/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <!-- <li><a href="https://facebook.com/grant.adiele.12.0.0.1" target="_blank"><i class="fab fa-facebook-square"></i></a></li> -->
                            <!-- <li><i class="fab fa-snapchat-square"></i></li> -->
                        </ul>
                    </nav>
                </transition>
            </div>
        </div>
    </header>
</template>

<style>

</style>

<script>
export default {
    data: function () {
        return {
            navLogoPath: './assets/logos/ga-logo-600x600.png',
            navbarLinks: [
                {link: '/#me', title: 'Me'},
                {link: '/#showcase', title: 'Showcase'},
                {link: '/#whyme', title: 'Why Me'},
                {link: '/#contact', title: 'Contact'}
            ],
            showMenu: false,
        }
    },

    methods: {
        hideNav () {
            var prevScrollPos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                var navbar = document.querySelector('.navbar')
                if(prevScrollPos > currentScrollPos){
                    navbar.style.top = "0";
                }else{
                    navbar.style.top = "-100px";
                }
                prevScrollPos = currentScrollPos;
            }
        }
    },

    created: function () {
        this.hideNav()
    },
}
</script>