({
    appDir: "./",
    baseUrl: "../public/js/",
    dir: "../_dist",
    //out: "main.built.js",

    //Comment out the optimize line if you want
    //the code minified by UglifyJS

    optimize: "uglify",

    //If using UglifyJS for script optimization, these config options can be
    //used to pass configuration values to UglifyJS.
    //See https://github.com/mishoo/UglifyJS for the possible values.
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000,

        //Custom value supported by r.js but done differently
        //in uglifyjs directly:
        //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
        no_mangle: true
    },

    //cssIn: "../public/css/style.css",
    //cssOut: "../public/css/style.min.css",

    paths: {
        "jquery": "empty:"
    },

    modules: [
        //Optimize the application files. jQuery is not
        //included since it is already in require-jquery.js
        {
            name: "main"
        }
    ]
})

