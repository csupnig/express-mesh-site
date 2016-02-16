var supportedLocales = [
    'vendorfiles/angular-i18n/angular-locale_de.js'
];

module.exports = {

    dir: {
        backend:'build',
        build: 'build/public',
        compile: 'bin',
        assets: '.',
        fonts: 'fonts',
        vendor: 'vendorfiles',
        app: 'app',
        lib: 'lib',
        src: 'src',
        langs: 'languages',
        styleguide: 'styleguide',
        views:'views'
    },

    src: {
        fonts: ['bower_components/font-awesome/fonts/*','frontend/assets/fonts/*','/fonts/*'],
        langs: 'src/frontend/languages/**/*.json',
        locales: supportedLocales,
        assets: 'src/frontend/assets/**/*',
        less: 'src/frontend/assets/main.less',
        allless: 'src/**/*.less',
        styleguide: 'src/less/modules/**/*.less',
        tpl: ['src/frontend/**/*.tpl.html'],
        ts: ['src/frontend/**/*.ts'],
        js: ['src/frontend/**/*.js'],
        views:['src/views/**/*.html'],
        backend:['src/backend/**/*.ts'],
        backendlang:['src/backend/**/*.json'],
        commonts: 'src/common/**/*.ts',
        test: ['test/unit/**/*.ts'],
        tslibs: 'libs/**/*.ts',
        backendlibs: ['backendlibs/**/*.ts']
    }
};
