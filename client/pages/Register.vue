<template>
    <div class="container my-16 w-full h-12 mx-auto">
        <div class="max-w-xs mx-auto h-12">
            <h1 class="text-center text-lg text-orange-600">Register</h1>
            <div class="w-full rounded-sm bg-white shadow mt-5 p-8">
                <text-input v-model="model.name" placeholder="Enter your name" />
                <text-input v-model="model.email" placeholder="Enter your email" />
                <text-input type="password" v-model="model.password" placeholder="Enter your password" />

                <button
                    class="w-full text-sm mt-3 py-4 bg-green-400 text-white rounded-sm focus:outline-none hover:bg-green-600"
                >Sign Up</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        model: {
            name: '',
            email: '',
            password: '',
        }
    })
}
</script>