<script setup lang="ts">
import { ref } from 'vue'

const password_is_shown = ref(false);

</script>

<template>
    <div class="px-4 md:py-10 flex-center">
        <div class="flex-center w-[540px]">
            <div class="text-left w-full">
                <h4 class="fw-700">Welcome Back!</h4>
                <div>Please login to your account</div>
                <!-- Form Grid -->
                <form action="">
                    <div class="grid gap-3">
                        <div class="">
                            <!-- 2 text input elements for login -->
                            <div class="row">
                                <div class="">
                                    <div class="form-group">
                                        <input type="text" id="name" class="form-control" required>
                                        <label class="form-control-placeholder" for="name">EMAIL</label>
                                    </div>
                                    <div class="form-group">
                                        <input :type="password_is_shown ? 'text' : 'password' " id="password"
                                            class="form-control" required>
                                        <label class="form-control-placeholder" for="password">PASSWORD</label>
                                        <div class="absolute top-0 right-0 h-full flex-center">
                                            <img src="/_img/eye-svg.svg" alt="" srcset=""
                                                @click="password_is_shown = !password_is_shown"
                                                class="w-6 h-6 mr-2 p-1 round bg-yellow-100 hover:bg-yellow-200 transition hover-pointer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Keep me logged in checkbox -->
                        <div class="grid grid-cols-[auto_1fr_auto]">
                            <div class="flex items-center mb-3">
                                <input id="keep-me-logged-in" type="checkbox" value=""
                                    class="w-4 h-4 text-yellow-600 bg-gray-100 rounded border-gray-300 focus:ring-yellow-500">
                                <label for="keep-me-logged-in" class="ml-1 fs-10 disable-text-select">Keep
                                    me logged in</label>
                            </div>

                            <div></div>

                            <a href="#" class="fs-10 fw-500 forgot-password-link text-col-1">Forgot Password?</a>
                        </div>

                        <!-- Submit button -->
                        <div class="grid grid-cols-[1fr_auto]">
                            <div></div>
                            <button class="bg-yellow-400 px-7 py-1 border-rad-5 fs-9 text-col-1 fw-500">Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>