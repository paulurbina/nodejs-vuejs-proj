<template>
    <input
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="w-full text-xs bg-gray-200 py-3 mb-3 focus:outline text-brown-300 p-3"
        :placeholder="placeholder"
    />
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        }
        ,
        value: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>