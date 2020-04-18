<template>
    <div>
        <div class="h-2 w-full bg-gray-600"></div>
        <div class="w-full h-12 border border-red-400 flex items-center justify-between px-6">
            <router-link to="/" class="no-underline text-purple-600">Full stack</router-link>

            <div>
                <router-link class="no-underline text-orange-600" to="/auth/login">Sign in</router-link>
                <router-link class="
                no-underline 
                text-orange-600 
                border border-2
                border-red-500
                px-3 py-2 
                rounded-full ml-3
                hover:text-red-900" to="/auth/register">Join Now</router-link>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>