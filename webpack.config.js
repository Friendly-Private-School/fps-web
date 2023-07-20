module.exports = {
    // ...rest of your webpack config
    resolve: {
        // ...rest of the resolve object
        fallback: { 
            "path": require.resolve("path-browserify"), 
            "crypto": require.resolve("crypto-browserify") 
        },
    },
};
