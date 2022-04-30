<template>
    <div class="header">
        <nav class="container mx-auto px-6 py-3 relative bg-white">
            <div class="flex items-center justify-between">
                <div class="pt-2">
                    <a href="#" class="text-xl font-semibold hover:text-cherry">Samuel Wood</a>
                </div>
                <div class="hidden md:flex space-x-6">
                    <a href="#" class="hover:text-gray-500">About Me</a>
                    <a href="#" class="hover:text-gray-500">Experience</a>
                    <a href="#" class="hover:text-gray-500">Projects</a>
                    <a href="#" class="hover:text-gray-500">Contact</a>
                </div>
                <button :class="{ open: isOpen }" @click="toggleMenu()" class="block hamburger md:hidden focus:outline-none" id="menu-btn">
                    <span class="hamburger-top"></span>
                    <span class="hamburger-mid"></span>
                    <span class="hamburger-low"></span>
                </button>
            </div>
            <div class="md:hidden">
                <div :class="{ hidden: !isOpen }" id="menu" class="absolute w-full flex flex-col items-center self-end py-4 mt-5 space-y-4 bg-white drop-shadow-md right-1 left-1 self-center">
                    <a href="#" class="hover:text-gray-500">About Me</a>
                    <a href="#" class="hover:text-gray-500">Experience</a>
                    <a href="#" class="hover:text-gray-500">Projects</a>
                    <a href="#" class="hover:text-gray-500">Contact</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        //height: 100px;
    }
    .hamburger {
        cursor: pointer;
        width: 24px;
        height: 24px;
        transition: all 0.25s;
        position: relative;
    }
    .hamburger-top,
    .hamburger-mid,
    .hamburger-low {
        position: absolute;
        top: 6px;
        left: 0;
        width: 24px;
        height: 2px;
        background: black;
        transform: rotate(0);
        transition: all 0.5s;

    }
    .hamburger-mid {
        transform: translateY(7px);
    }
    .hamburger-low {
        transform: translateY(14px);
    }
    .open {
        transform: rotate(90deg);
        transform: translateY(0px);
    }
    .open .hamburger-top {
        transform: rotate(45deg) translateY(6px) translate(6px);
    }
    .open .hamburger-mid {
        display: none;
    }
    .open .hamburger-low {
        transform: rotate(-45deg) translateY(6px) translate(-6px);
    }
</style>