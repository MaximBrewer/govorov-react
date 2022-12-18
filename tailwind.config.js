const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.jsx',
        './public/index.html',
        './public/quiz.html',
    ],

    theme: {
        screens: {
            'xl': '1920px',
        },
        container: {
            padding: {
                DEFAULT: '0',
                xl: '5rem'
            },
        },
        extend: {
            backgroundImage: (theme) => ({
                "image-base": "url('./images/bg.png')",
                "image-all": "url('./images/all.jpg')",
                "body": "url('./images/bgmain.jpg')",
                "dot": "url('../images/dot.svg')",
                "close-dot": "url('../images/close-dot.svg')",
            }),
            keyframes: {
                fadeInLeft: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateX(0%)'
                    },
                },
                fadeOutLeft: {
                    '0%': {
                        opacity: 100,
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    },
                },
                fadeInRight: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(100%)'
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateX(0%)'
                    },
                },
                fadeOutRight: {
                    '0%': {
                        opacity: 100,
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'translateX(100%)'
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 100,
                    },
                },
                fadeOut: {
                    '0%': {
                        opacity: 100,
                    },
                    '100%': {
                        opacity: 0,
                    },
                },
                slideInRight: {
                    '0%': {
                        transform: 'translateX(100%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
                slideInLeft: {
                    '0%': {
                        transform: 'translateX(-100%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
                'screensaver-govorov': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(-30%)'
                    },
                    '33.33%': {
                        opacity: 100,
                        transform: 'translateX(-30%)'
                    },
                    '50%': {
                        opacity: 100,
                        transform: 'translateX(-30%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
                slideInLeft: {
                    '0%': {
                        transform: 'translateX(-100%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
                skyIn: {
                    '0%': {
                        transform: 'translateX(-100%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
                nevaIn: {
                    '0%': {
                        transform: 'translateY(38px)',
                        'background-color': '#304D58'
                    },
                    '33.33%': {
                        transform: 'translateY(38px)',
                        'background-color': '#304D58'
                    },
                    '50%': {
                        transform: 'translateY(38px)',
                        'background-color': '#304D58'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        'background-color': '#597179'
                    },
                },
                cityIn: {
                    '0%': {
                        width: '2014px',
                        top: '-214px'
                    },
                    '33.33%': {
                        width: '2014px',
                        top: '-214px'
                    },
                    '50%': {
                        width: '2014px',
                        top: '-214px'
                    },
                    '100%': {
                        width: '1114px',
                        top: '-120px'
                    },
                },
                lpIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(74px)',
                    },
                    '33.33%': {
                        opacity: 0,
                        transform: 'translateX(74px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateX(74px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateX(0)',
                    },
                },
                lp2In: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(35px)',
                    },
                    '33.33%': {
                        opacity: 0,
                        transform: 'translateX(35px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateX(35px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateX(0)',
                    },
                },
                postIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-35px)',
                    },
                    '33.33%': {
                        opacity: 0,
                        transform: 'translateY(-35px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateY(-35px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                ioIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(13px)',
                    },
                    '33.33%': {
                        opacity: 0,
                        transform: 'translateY(13px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateY(13px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                fIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(48px)',
                    },
                    '33.33%': {
                        opacity: 0,
                        transform: 'translateY(48px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateY(48px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                btnIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-40px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                menuIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(40px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                starRIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(166px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                txtFLIn: {
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-100%)',
                    },
                },
                txtSLIn: {
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(100%)',
                    },
                },



                'screensaver-govorov-out': {
                    '0%': {
                        opacity: 100,
                        transform: 'translateX(0%)',
                    },
                    '100%': {
                        transform: 'translateX(-30%)',
                        opacity: 0,
                    },
                },
                skyOut: {
                    '0%': {
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        transform: 'translateX(-100%)'
                    },
                },
                nevaOut: {
                    '0': {
                        transform: 'translateY(0)',
                        'background-color': '#597179'
                    },
                    '50%': {
                        transform: 'translateY(38px)',
                        'background-color': '#304D58'
                    },
                    '66.66%': {
                        transform: 'translateY(38px)',
                        'background-color': '#304D58'
                    },
                    '100%': {
                        transform: 'translateY(38px)',
                        'background-color': '#304D58'
                    },
                },
                cityOut: {
                    '100%': {
                        width: '2014px',
                        top: '-214px'
                    },
                    '66.66%': {
                        width: '2014px',
                        top: '-214px'
                    },
                    '50%': {
                        width: '2014px',
                        top: '-214px'
                    },
                    '0': {
                        width: '1114px',
                        top: '-120px'
                    },
                },
                lpOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateX(74px)',
                    },
                    '66.66%': {
                        opacity: 0,
                        transform: 'translateX(74px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateX(74px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateX(0)',
                    },
                },
                lp2Out: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateX(35px)',
                    },
                    '66.66%': {
                        opacity: 0,
                        transform: 'translateX(35px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateX(35px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateX(0)',
                    },
                },
                postOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(-35px)',
                    },
                    '66.66%': {
                        opacity: 0,
                        transform: 'translateY(-35px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateY(-35px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                ioOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(13px)',
                    },
                    '66.66%': {
                        opacity: 0,
                        transform: 'translateY(13px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateY(13px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                fOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(48px)',
                    },
                    '66.66%': {
                        opacity: 0,
                        transform: 'translateY(48px)',
                    },
                    '50%': {
                        opacity: 0,
                        transform: 'translateY(48px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                btnOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(-40px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                menuOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(40px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                starROut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateX(166px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
                txtFLOut: {
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(-100%)',
                    },
                },
                txtSLOut: {
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(100%)',
                    },
                },
                slideDown: {
                    '0%': {
                        'max-height': '0',
                    },
                    '100%': {
                        'max-height': '100vh',
                    },
                },
                slideUp: {
                    '100%': {
                        'max-height': '0',
                    },
                    '0%': {
                        'max-height': '100vh',
                    },
                },

                videobgIn: {
                    '0%': {
                        opacity: 1,
                    },
                    '100%': {
                        opacity: .525,
                    },
                },
                videobgOut: {
                    '100%': {
                        opacity: 1,
                    },
                    '0%': {
                        opacity: .525,
                    },
                },

                testNumberIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(-66px)',
                    },
                    '100%': {
                        opacity: 100,
                        transform: 'translateX(0)',
                    },
                },
                testNumberOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateX(-66px)',
                    },
                    '0%': {
                        opacity: 100,
                        transform: 'translateX(0)',
                    },
                },

                widthIn: {
                    '0%': {
                        width: 0,
                    },
                    '100%': {
                        width: `100%`,
                    },
                },
                widthOut: {
                    '100%': {
                        width: 0,
                    },
                    '0%': {
                        width: `100%`,
                    },
                },

                sectionGovorovIn: {
                    '0%': {
                        transform: `scale(1.25)`,
                        opacity: 0,
                    },
                    '100%': {
                        scale: 1,
                        opacity: 100,
                    },
                },
                sectionGovorovOut: {
                    '100%': {
                        transform: `scale(1.25)`,
                        opacity: 0,
                    },
                    '0%': {
                        scale: 1,
                        opacity: 100,
                    },
                },

                sectionSignIn: {
                    '0%': {
                        transform: `scale(.75)`,
                        opacity: 0,
                    },
                    '100%': {
                        scale: 1,
                        opacity: 100,
                    },
                },
                sectionSignOut: {
                    '100%': {
                        transform: `scale(.75)`,
                        opacity: 0,
                    },
                    '0%': {
                        scale: 1,
                        opacity: 100,
                    },
                },

                leftIn: {
                    '0%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateX(0)`,
                        opacity: 100,
                    },
                },
                leftOut: {
                    '100%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateX(0)`,
                        opacity: 100,
                    },
                },

                cannonIn: {
                    '0%': {
                        transform: `translateX(100%)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateX(0)`,
                        opacity: 100,
                    },
                },
                cannonOut: {
                    '100%': {
                        transform: `translateX(100%)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateX(0)`,
                        opacity: 100,
                    },
                },
                shipIn: {
                    '0%': {
                        transform: `translateY(-100%)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                shipOut: {
                    '100%': {
                        transform: `translateY(-100%)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },
                city2In: {
                    '0%': {
                        transform: `translateY(-70px)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                city2Out: {
                    '100%': {
                        transform: `translateY(-70px)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },


                carouseltextOut: {
                    '100%': {
                        transform: `translateY(70px)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                carouseltextIn: {
                    '0%': {
                        transform: `translateY(70px)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                dociconOut: {
                    '100%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '50%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                wikiiconOut: {
                    '100%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '50%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                wikiiconIn: {
                    '0%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '80%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                dociconIn: {
                    '0%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '80%': {
                        transform: `translateX(-100%)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                swiperIn: {
                    '0%': {
                        transform: `translateY(100%)`,
                        opacity: 0,
                    },
                    '50%': {
                        transform: `translateY(100%)`,
                        opacity: 0,
                    },
                    '100%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },

                swiperOut: {
                    '100%': {
                        transform: `translateY(100%)`,
                        opacity: 0,
                    },
                    '50%': {
                        transform: `translateY(100%)`,
                        opacity: 0,
                    },
                    '0%': {
                        transform: `translateY(0)`,
                        opacity: 100,
                    },
                },
                soar: {
                    '0%': {
                        transform: `scale(1)`
                    },
                    '50%': {
                        transform: 'scale(1.2)'
                    },
                    '100%': {
                        transform: 'scale(1)'
                    },
                },



                menuItemOut: {
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(100px)',
                    },
                    // '33.33%': {
                    //     opacity: 0,
                    //     transform: 'translateY(-35px)',
                    // },
                    // '50%': {
                    //     opacity: 0,
                    //     transform: 'translateY(-35px)',
                    // },
                    '0%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },


                menuItemIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(100px)',
                    },
                    // '33.33%': {
                    //     opacity: 0,
                    //     transform: 'translateY(-35px)',
                    // },
                    // '50%': {
                    //     opacity: 0,
                    //     transform: 'translateY(-35px)',
                    // },
                    '100%': {
                        opacity: 100,
                        transform: 'translateY(0)',
                    },
                },
            },


            animation: {

                'menuItemOut': 'menuItemOut 1s ease-in-out 0s forwards',
                'menuItemIn': 'menuItemIn 1s ease-in-out 0s forwards',


                'soar': 'soar 30s ease-in-out infinite',

                'carouseltextOut': 'carouseltextOut 1s ease-in-out 0s forwards',
                'dociconOut': 'dociconOut 2s ease-in-out 0s forwards',
                'wikiiconOut': 'wikiiconOut 2s ease-in-out 0s forwards',
                'swiperOut': 'swiperOut 2s ease-in-out 0s forwards',

                'carouseltextIn': 'carouseltextIn 1s ease-in-out 0s forwards',
                'dociconIn': 'dociconIn 4s ease-in-out 0s forwards',
                'wikiiconIn': 'wikiiconIn 4s ease-in-out 0s forwards',
                'swiperIn': 'swiperIn 2s ease-in-out 0s forwards',

                'slideDown': 'slideDown 1s ease-in-out 0s forwards',
                'slideUp': 'slideUp 1s ease-in-out 0s forwards',

                'city2In': 'city2In 1s ease-in-out 0s forwards',
                'city2Out': 'city2Out 1s ease-in-out 0s forwards',

                'cannonIn': 'cannonIn 1s ease-in-out 0s forwards',
                'leftIn': 'leftIn 1s ease-in-out 0s forwards',
                'shipIn': 'shipIn 1s ease-in-out 0s forwards',

                'cannonOut': 'cannonOut 1s ease-in-out 0s forwards',
                'leftOut': 'leftOut 1s ease-in-out 0s forwards',
                'shipOut': 'shipOut 1s ease-in-out 0s forwards',

                // fadeInLeft: 'fadeInLeft 1s ease-in-out forwards',
                // fadeOutLeft: 'fadeOutLeft 1s ease-in-out forwards',
                // fadeInRight: 'fadeInRight 1s ease-in-out forwards',
                // fadeOutRight: 'fadeOutRight 1s ease-in-out forwards',
                fadeIn: 'fadeIn .5s ease-in-out forwards',
                fadeOut: 'fadeOut .5s ease-in-out forwards',
                // slideInRight: 'slideInRight 1s ease-in-out forwards',
                // slideInLeft: 'slideInLeft 1s ease-in-out forwards',
                'sidebarIn': 'slideInRight .5s ease-in-out 1.5s forwards',
                'screensaverGovorovIn': 'screensaver-govorov 1.5s ease-in-out 0s forwards',
                'skyIn': 'fadeIn .5s ease-in-out 0s forwards',
                'starIn': 'fadeInRight .5s ease-in-out .75s forwards',
                'starRIn': 'starRIn .5s ease-in-out 0s forwards',
                'nevaIn': 'nevaIn 1.5s ease-in-out 0s forwards',
                'cityIn': 'cityIn 1.5s ease-in-out 0s forwards',
                'lpIn': 'lpIn 1.5s ease-in-out 0s forwards',
                'lp2In': 'lp2In 1.5s ease-in-out 0s forwards',
                'postIn': 'postIn 1.5s ease-in-out 0s forwards',
                'ioIn': 'ioIn 1.5s ease-in-out 0s forwards',
                'fIn': 'fIn 1.5s ease-in-out 0s forwards',
                'btnIn': 'btnIn .5s ease-in-out 2s forwards',
                'menuIn': 'menuIn .5s ease-in-out 0s forwards',
                'txtFLIn': 'txtFLIn 1.5s ease-in-out 0s forwards',
                'txtSLIn': 'txtSLIn 1.5s ease-in-out 0s forwards',
                'videobgIn': 'videobgIn 1.5s ease-in-out 0s forwards',
                'testNumberIn': 'testNumberIn 1.5s ease-in-out 0s forwards',
                'widthIn': 'widthIn 1s ease-in-out 0s forwards',
                'sectionGovorovIn': 'sectionGovorovIn 1s ease-in-out 0s forwards',
                'sectionSignIn': 'sectionSignIn 1s ease-in-out 0s forwards',


                'sidebarOut': 'slideOutRight .5s ease-in-out 1.5s forwards',
                'screensaverGovorovOut': 'screensaver-govorov-out 1s ease-in-out 0s forwards',
                'skyOut': 'fadeOut .5s ease-in-out 0s forwards',
                'starOut': 'fadeOutRight .5s ease-in-out 0s forwards ',
                'starROut': 'starROut .5s ease-in-out 0s forwards ',
                'nevaOut': 'nevaOut 1.5s ease-in-out 0s forwards ',
                'cityOut': 'cityOut 1.5s ease-in-out 0s forwards ',
                'lpOut': 'lpOut 1.5s ease-in-out 0s forwards ',
                'lp2Out': 'lp2Out 1.5s ease-in-out 0s forwards ',
                'postOut': 'postOut 1.5s ease-in-out 0s forwards ',
                'ioOut': 'ioOut 1.5s ease-in-out 0s forwards ',
                'fOut': 'fOut 1.5s ease-in-out 0s forwards ',
                'btnOut': 'btnOut .5s ease-in-out 0s forwards ',
                'menuOut': 'menuOut .5s ease-in-out 0s forwards',
                'txtFLOut': 'txtFLOut .5s ease-in-out 0s forwards',
                'txtSLOut': 'txtSLOut .5s ease-in-out 0s forwards',
                'videobgOut': 'videobgOut .5s ease-in-out 0s forwards',
                'testNumberOut': 'testNumberOut 1.5s ease-in-out 0s forwards',
                'widthOut': 'widthOut 1s ease-in-out 0s forwards',
                'sectionGovorovOut': 'sectionGovorovOut 1s ease-in-out 0s forwards',
                'sectionSignOut': 'sectionSignOut 1s ease-in-out 0s forwards',
            },



            zIndex: {
                100: 100,
            },
            fontFamily: {
                manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
                sans: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
                raleway: ['Raleway', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                gray: {
                    100: '#E3E6E8'
                },
                bronze: {
                    100: "#C5A277",
                    120: '#9E825F',
                    300: '#A59E8A',
                    500: '#C5A277'
                },
                navy: {
                    10: "#E3E6E8",
                    20: "#D6DBDE",
                    40: '#ACB8BC',
                    60: '#92A3A8',
                    80: '#597179',
                    '85%': 'rgba(34, 41, 44, 0.8)',
                    95: '#415D67',
                    100: '#304D58',
                    140: '#1D2E35',
                    160: "#131F23"
                },
                teal: {
                    50: '#D6DBDE',
                    75: '#ACB8BC',
                    100: '#83949B',
                    300: '#597179',
                    500: '#304D58',
                },
                red: {
                    500: '#E24C4C'
                }
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
