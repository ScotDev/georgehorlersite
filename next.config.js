module.exports = {
    publicRuntimeConfig: {
        // Will only be available on the client side
        // Prod API
        FORM_ENDPOINT: process.env.NEXT_PUBLIC_FORM_ENDPOINT
        // Dev API
        // FORM_ENDPOINT: process.env.FORM_ENDPOINT
    }
}