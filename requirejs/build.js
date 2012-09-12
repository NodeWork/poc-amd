({
    appDir: "./",
    baseUrl: "./public/js/",
    dir: "./_dist",

    optimize: "none",
    //optimize: "uglify",
    //uglify: {
    //    toplevel: true,
    //    ascii_only: true,
    //    beautify: true,
    //    max_line_length: 1000,
    //
    //    //Custom value supported by r.js but done differently
    //    //in uglifyjs directly:
    //    //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
    //    no_mangle: true
    //},

    paths: {
       "jquery": "empty:",
    },

    modules: [
       //Optimize the application files. jQuery is not
       //included since it is already in require-jquery.js
       {
          name: "main"
       },
       {
          name: "features/page.main"
       },
       {
          name: "features/page.b"
       }
    ]
})
