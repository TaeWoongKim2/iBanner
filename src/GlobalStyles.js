import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

import GlobalFonts from './GlobalFonts';

const GlobalStyles = createGlobalStyle`
    ${reset};
    ${GlobalFonts}
    * {
        box-sizing: boerder-box;
    }

    :root {
        --mobile-duration: .45s;
        --mobile-cubic: cubic-bezier(0.4, 0, 0.2, 1);
        --mobile-background: #b9b9b9;
        --mobile-tab-color-active: #51d5c2;
    }

    body {
        font-family: BMDOHYEON, Roboto, sans-serif, -apple-system;
        font-size: 14px;
        margin: 0;
        background-color: #F9F9F9;
    }

    #app { 
        height: 100vh;
    }

    /*
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
    ##Device = 데스크탑
    ##Screen = 1281px 이상 해상도 데스크탑
    */
    @media (min-width: 768px) {
        #mobile--app {
            display: none;
        }

        h1 { font-weight: 600; font-size: 2em; }
        h2 { font-weight: 500; font-size: 1.8em; }
        h3 { font-weight: 500; font-size: 1.6em; }
        h4 { font-weight: 400; font-size: 1.4em; }
        h5 { font-weight: 400; font-size: 1.2em; }
        
        a { text-decoration: none; color: inherit; }
    
        hr { margin: 1.5em 0; }
    
        header, footer, article { padding: 1.2em; }
    
        #web__app {
            display: grid;
            grid-template-areas:
                "header header"
                "article nav";
            grid-template-rows: 60px 1fr;
            grid-template-columns: 1fr 80px;
            height: inherit;
        }
        #web__app > header { grid-area: header; }
        #web__app > article { grid-area: article; overflow-x: auto; margin-right: 340px; }
        #web__app > nav { grid-area: nav; }
    
        #mainHeader {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
        }
    
        #mainArticle {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
        }
    
        #mainNav {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
        }
        #mainNav section:first-child {
            padding: 1.2em;
        }
        #mainNav section:last-child {
            position: sticky;
            bottom: 0;
            z-index: 9;
        }
        #mainNav button[name="download"] {
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 1em;
            font-size: 1.2em;
            border: 0;
            cursor: pointer;
        }
    
        // Preview Canvas Color
        .canvas-container {
            background-color: #FFFFFF;
        }
    
        #sponsor {
            width: 15em;
        }
    
        #sponsorText {
            padding-left: 1em;
        }
    
        #iBanner_logo {
            width: 64px;
        }
    
        #github-logo {
            width: 1.5em;
        }
    
        #contributors_info {
            padding: 0 1em 0 1em;
        }
        a:first-child {
            padding: 0 3em 0 1em;
        }
    }

    /*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
    ##Device = 저해상도 태블릿, 모바일(가로)
    ##Screen = 481px에서 767px 사이
    */
    @media (min-width: 320px) and (max-width: 767px) {
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');

        #web__app {
            display: none;
        }

        #mobile__app {
            height: inherit;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            overflow: hidden;
            background-color: #f0f1f1;
            font-family: 'Nunito', 
        }

        .menu {
            margin: 0;
            padding: 0 1.8em 2.4em;
            width: 100vw;
            height: 10em;
            font-size: .55em;
            background-color: #fefefe;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }
        .menu::after {
            position: absolute;
            height: 5%;
            width: 35%;
            bottom: 10%;
            content: " ";
            border-radius: 1em;
            background-color: #e7e7e7;
        }
        
        .menu__item {
            all: unset;
            flex-grow: 1;
            display: flex;
            cursor: pointer;
            overflow: hidden;
            padding-top: 0.5em;
            position: relative;
            align-items: center;
            color: var(--mobile-background);
            justify-content: center;
            transition: flex-grow var(--mobile-duration) var(--mobile-cubic);
        }
        .menu__item::before {
            top: 12%;
            left: 16%;
            width: 1.6em;
            height: 1.6em;
            content: " ";
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            transform-origin: center;
            background-color: #fdecef;
            transition: transform var(--mobile-duration) var(--mobile-cubic);
        }
        .menu__item::after {
            left: 0;
            bottom: 0;
            content: " ";
            height: 0.25em;
            position: absolute;
            border-radius: 2em;
            transform-origin: left center;
            background-color: currentColor;
            width: calc( var(--lineWidth) + 5px );
            transform: translate3d(3em , 0, 0) scaleX(0);
            transition: transform calc( var(--mobile-duration) + .2s) var(--mobile-cubic);
        }
        
        .menu__icon {
            font-size: 1.05em;
            stroke: currentColor;
            transition: transform var(--mobile-duration) var(--mobile-cubic);
        }
        
        .menu__text {
            top: 1.2em;
            left: 5em;
            font-size: 1.6em;
            position: absolute;
            text-transform: capitalize;
            letter-spacing: .01em;
            transform: translate3d(0, 109%, 0);
            transition: transform calc( var(--mobile-duration) / 3.7 );
        }
        
        .menu__item.active {
            flex-grow: 2.7;
            color: var(--mobile-tab-color-active);
        }
        
        .menu__item.active .menu__icon {
            transform: translate3d(-95% , 0, 0);
        }
        
        .menu__item.active::before {
            transform: scale(1);
        }
        
        .menu__item.active::after {
            transform: translate3d(6.3em , 0, 0) scaleX(1);
            transition: transform var(--mobile-duration) var(--mobile-cubic);
        }
        
        .menu__text.active {
            left: 4em;
            transform: translate3d(0 , 0, 0);
            transition: transform calc(var(--mobile-duration) / 1.5);
        }
        
        .icon {
            --mobile-duration-icon: 1s;
            fill: none; 
            width: 3.5em;
            height: 3.5em;
            display: block;
            stroke-width: 14;
            stroke-miterlimit: 10;
        }
        
        .active #home-anm {
            animation: home var(--mobile-duration-icon);
        }
        
        @keyframes home {
            25% {
                transform: translate3d(0, -.8em , 0);
            }
            50% {
                transform: translate3d(0, .5em , 0);
            }
        }
        
        #strategy-anm {
            transform: scaleX(.85);
            transform-origin: center;
        }
        
        .active #strategy-anm {
            animation: strategy var(--mobile-duration-icon);
        }
        
        @keyframes strategy {
            50% {
                transform: scaleX(1);
            }
            100%{
                transform: scaleX(.85);
            }
        }
        
        .active #strategy-cir1 {
            animation: strategy-cir1 var(--mobile-duration-icon);
        }
        
        .active #strategy-cir2 {
            animation: strategy-cir2 var(--mobile-duration-icon) .1s;
        }
        
        .active #strategy-cir3 {
            animation: strategy-cir3 var(--mobile-duration-icon) .2s;
        }
        
        @keyframes strategy-cir1 {
            50% {
                transform: translate3d(-.7em,-0.7em,0);
            }
            100%{
                transform: translate3d(0,0,0);
            }
        }
        
        @keyframes strategy-cir2 {
            35% {
                transform: translate3d(0,-0.7em,0);
            }
            100%{
                transform: translate3d(0,0,0);
            }
        }
        
        @keyframes strategy-cir3 {
            35% {
                transform: translate3d(.7em,-0.7em,0);
            }
            100%{
                transform: translate3d(0,0,0);
            }
        }
        
        .active #period-anm {
            transform-origin: center 100%;
            animation: period var(--mobile-duration-icon);
        }
        
        .active #period-cir {
            transform-origin: center;
            animation: period-cir var(--mobile-duration-icon);
        }
        
        .active #period-line {
            stroke-dasharray: 66;
            animation: period-line calc( var(--mobile-duration-icon) / 2.5 ) reverse;
        }
        
        
        @keyframes period {
            35% {
                transform: scaleY(.85);
            }
            60% , 70% {
                transform: scaleY(1.2);
            }
            100% {
                transform: scaleY(1);
            }
        }
        
        @keyframes period-cir {
            0%{
               opacity: 0;
            }
            35% {
                opacity: 1;
                transform: translate3d(15%, -55%, 0);
            }
            60%{
                opacity: 0;
                transform: translate3d(-8%, -50%, 0);
            }
        }
        
        @keyframes period-line {
            100% {
                stroke-dashoffset: 66;
            }
        }

        .active #security-cir {
            transform-box: fill-box;
            transform-origin: center;
            animation: security-cir calc( var(--mobile-duration-icon) / 1.5 );
        }
        
        @keyframes security-cir {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .active #security-strok {
            stroke-dasharray: 96;
            animation: security-strok calc( var(--mobile-duration-icon) / 1.2 );
        }
        
        @keyframes security-strok {
            0% {
                stroke-dashoffset: 60;
            }
            100% {
                stroke-dashoffset: 230;
            }
        }
        
        .active #settings-anm {
            transform-box: fill-box;
            transform-origin: center;
            animation: settings-anm calc( var(--mobile-duration-icon) / 1.5 );
        }
        
        @keyframes settings-anm {
            0% {
                transform: rotate(-60deg);
            }
            50% {
                transform: rotate(60deg);
            }
        }
    }
`;

export default GlobalStyles;
