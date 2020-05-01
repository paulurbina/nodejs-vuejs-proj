<template>
    <button
        :disabled="disabled"
        class="w-full text-sm mt-3 py-4 bg-green-400 text-white rounded-sm focus:outline-none hover:bg-green-600"
        :class="{ 'bg-emerald': !loading, 'bg-emerald-light cursor-not-allowed': loading }"
        @click="$emit('click')"
    >
        <loader v-if="loading" />
        <span v-else>{{ label }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            label: {
                type: String,
                required: true
            },
            loading: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }

</script>