<template>
    <div class="container my-16 w-full h-12 mx-auto">
        <div class="max-w-xs mx-auto h-12">
            <h1 class="text-center text-lg text-orange-600">Register</h1>
            <div class="w-full rounded-sm bg-white shadow mt-5 p-8">
                <text-input
                    name="name"
                    :value="model.name"
                    v-model="model.name"
                    v-validate="'required'"
                    placeholder="Enter your name"
                    :error="errors.first('name')"
                />
                <text-input
                    name="email"
                    :value="model.email"
                    v-model="model.email"
                    v-validate="'required|email'"
                    placeholder="Enter your email"
                    :error="errors.first('email')"
                />
                <text-input
                    type="password"
                    name="password"
                    :value="model.password"
                    v-model="model.password"
                    v-validate="'required|min:6'"
                    :error="errors.first('password')"
                    placeholder="Enter your password"
                />

                <btn
                    label="Sign Up"
                    :disabled="loading"
                    :loading="loading"
                    @click="register"
                 />
            </div>
        </div>
    </div>
</template>

<script>

import { POST_REGISTER } from '@store/auth/actions'

export default {
    data: () => ({
        loading: false,
        model: {
            name: '',
            email: '',
            password: '',
        }
    }),
    methods:{
        register() {
            this.$validator.validate().then(isValid => {
                if (! isValid) {
                    return
                }

                this.toggleLoading()

                this.$store.dispatch(POST_REGISTER, this.model)
                    .then(() => {
                        this.toggleLoading()

                        this.$router.push('/')
                    })
            })
        },
        toggleLoading() {
            this.loading = ! this.loading
        }
    }
}
</script>