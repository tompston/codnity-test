<script setup lang="ts"></script>

<template>

    <div class="px-4 md:py-10 flex-center authentication_grid--left text-white md:text-center">
        <div class="flex-center max-w-[600px]">
            <div class="w-full ">

                <div class="flex-center">
                    <img src="/_img/priority_logo.svg" alt="priority company logo"
                        class="md:max-w-[300px] sm:max-w-[140px]">
                </div>

                <div class="mt-4 fw-700 leading-9 md:leading-7">
                    <h5>Your Product Our Priority,</h5>
                    <h5>Shipping made simple.</h5>
                </div>

                <div class="mt-7 sm:mt-4">
                    <div class="fw-600">Not a member yet?</div>
                    <div class="fs-9 max-w-[320px]--">Please use your personal and company information to Create
                        Account!
                    </div>
                    <button class="border border-white fs-9 border-rad-5 px-3 py-1 mt-2">Create Account</button>
                </div>

            </div>
        </div>
    </div>

</template>

<style>
.authentication_grid--left {
    background-image: url("/_img/MSC_BACKGROUND.jpeg"), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-blend-mode: overlay;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.4);
}
</style>