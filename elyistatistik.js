/*-----------------------------------------------------------------------------------
Template Name: Appy HTML5 Template,
Template URI: http://www.themectg.com
Description: This is html5 template
Author: Ashekur Rahman Hridoy
Author URI: http://www.facebook.com/ashekur.rahman.hridoy
Version: 1.0
-----------------------------------------------------------------------------------
CSS INDEX
===================
1. Google font
2. Theme Default CSS
3. Button-Style
4. Helper-Classes
5. MainMenu-Area
6. Page-Title
7. Home-Area
8. Progress-Area
9. Video-Area
10. Feature-Area
11. Service-Box
12. Testimonial-Area
13. Gallery-Area
14. Download-Area
15. Price-Area
16. Questions-area
17. Subscribe-Form
18. Footer-Area
19. ScrollUp-Button
20. Blog-Post
21. Pagination
22. Comment-Respond
23. Form-Stype
-----------------------------------------------------------------------------------*/

/*-----------------
1. Google font
------------------*/

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800');

/*-------------------
2. Theme Default CSS
--------------------*/

* {
    outline: none;
}

a {
    text-decoration: none;
    outline: none;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    color: #333333;
}

input:focus,
button:focus,
a:focus,
a:hover {
    text-decoration: none;
    outline: none;
    color: #768ede;
}

img {
    max-width: 100%;
    height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 15px;
    font-weight: 400;
    line-height: 1.4em;
}

h1 {
    font-size: 60px;
}

h2 {
    font-size: 50px;
}

h3 {
    font-size: 32px;
}

html,
body {
    height: 100%
}

body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #8790af;
}


/* Remove Chrome Input Field's Unwanted Yellow Background Color */

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
}

/*-- 3. Button-Style --*/

.bttn-white {
    position: relative;
    background: rgb(72, 44, 191);
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    overflow: hidden;
    z-index: 1;
    margin-right: 10px;
    border: none;
}

.bttn-white img {
    height: 20px;
    margin-right: 5px;
    margin-top: -5px;
    display: inline-block;
}



.bttn-white:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    opacity: 1;
}

.bttn-white.active,
.bttn-white:hover {
    color: #ffffff;
}

.bttn-white.active:before,
.bttn-white:hover:before {
    opacity: 0;
}

.bttn-default,
.bttn-white {
    padding: 12px 30px;
    background-color: #ffffff;
    display: inline-block;
    color: #768ede;
    text-transform: uppercase;
    border-radius: 50px;
    letter-spacing: 1.5px;
    font-weight: 700;
    font-size: 14px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    border: none;
}

.bttn-default .lnr,
.bttn-white .lnr {
    margin-right: 10px;
}


.bttn-default {
    padding: 12px 40px;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#482cbf+0,6ac6f0+100 */
    background: rgb(72, 44, 191);
    /* Old browsers */
    /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    color: #ffffff;
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
}

.bttn-default:hover {
    color: #ffffff;
    -webkit-box-shadow: 0 25px 50px -20px rgba(0, 0, 0, 0.6);
    box-shadow: 0 25px 50px -20px rgba(0, 0, 0, 0.6);
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
}

.sq {
    border-radius: 3px !important;
}


/*-- 4. Helper-Classes --*/

.section-padding-top {
    padding-top: 120px;
}

.section-padding {
    padding-top: 120px;
    padding-bottom: 120px;
}

.upper {
    text-transform: uppercase;
}

.angle,
.overlay {
    position: relative;
    z-index: 1;
}

.overlay:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#482cbf+0,6ac6f0+100 */
    background: rgb(72, 44, 191);
    /* Old browsers */
    /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    opacity: 0.8;
    /* IE6-9 fallback on horizontal gradient */
    z-index: -2;
}

.angle:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: rgba(0, 0, 0, 0) -webkit-linear-gradient(left bottom, #ffffff 50%, transparent 50%) repeat scroll 0 0;
    background: rgba(0, 0, 0, 0) -webkit-gradient(linear, left bottom, right top, color-stop(50%, #ffffff), color-stop(50%, transparent)) repeat scroll 0 0;
    background: rgba(0, 0, 0, 0) -o-linear-gradient(left bottom, #ffffff 50%, transparent 50%) repeat scroll 0 0;
    background: rgba(0, 0, 0, 0) linear-gradient(to right top, #ffffff 50%, transparent 50%) repeat scroll 0 0;
    z-index: -1;
}

.dark-color {
    color: #434345
}

.blue-color {
    color: #5e88fc;
}

.white-color {
    color: #ffffff !important;
}

.gray-bg {
    background-color: #f5f6ff;
}

/*-- 5. MainMenu-Area --*/

.mainmenu-area {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
    padding: 20px 140px 15px 0;
    background: transparent;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.mainmenu-area:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(72, 44, 191);
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    z-index: -1;
    opacity: 0;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.mainmenu-area.affix {
    position: fixed;
    top: 0;
}

.mainmenu-area.affix:before {
    opacity: 1;
}

.mainmenu-area .right-button {
    position: absolute;
    right: 15px;
    top: 12px;
}

.mainmenu-area .right-button a {
    color: #ffffff;
    padding: 10px 40px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.3);
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
    font-size: 14px;
}

.mainmenu-area .right-button a:hover {
    background-color: rgba(255, 255, 255, 1);
    color: #768ede;
}

.mainmenu-area ul.mainmenu {
    text-align: center;
    float: none;
    display: block;
}

.mainmenu-area ul.mainmenu li {
    float: none;
    display: inline-block;
    text-align: center;
}

.mainmenu-area ul.nav.navbar-nav li a {
    color: #ffffff;
    padding: 10px 2px;
    text-transform: capitalize;
    background: transparent;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    margin: 0 15px;
}

.mainmenu-area ul.nav.navbar-nav li a:hover,
.mainmenu-area ul.nav.navbar-nav li.active a {
    border-bottom-color: #ffffff;
}

.mainmenu-area .navbar-brand {
    height: auto;
    padding: 0 15px;
}

.mainmenu-area .navbar-brand img {
    height: 40px;
}

/*-- 6. Page-Title --*/

.page-title .title {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #8790af;
    font-weight: 600;
}

.text-center.page-title .title:before,
.page-title .title:after {
    content: '';
    width: 50px;
    height: 1px;
    display: inline-block;
    background-color: #e1e1e1;
    margin: 0 15px;
    -webkit-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    transform: translateY(-4px);
}

/*-- 7. Home-Area --*/

.home-area {
    width: 100%;
    background: url('images/header-bg.jpg') no-repeat scroll center bottom / cover;
    padding-top: 26vh;
    color: #ffffff;
    margin-bottom: 100px;
}

.home-area .mobile-image {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: -158px;
}

/*-- 8. Progress-Area --*/

.progress-area {
    background-image: url('images/progress-bg.jpg');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
    margin-top: 90px;
    margin-bottom: 220px;
}

.progress-area .mobile-image {
    margin-top: -90px;
    margin-bottom: -153px;
}

/*-- 9. Video-Area --*/

.video-area {
    background-image: url('images/video-bg.jpg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 100%;
    margin-bottom: 120px;
}

.video-photo {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
}

.video-photo > img {
    width: 100%;
}

.video-area a.video-button {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
}

/*-- 10. Feature-Area --*/

.feature-area {
    color: #ffffff;
    background-color: #5e88fc;
    background-image: url('images/feature-bg.png');
    background-position: bottom -120px center;
    background-repeat: no-repeat;
    background-size: auto 94%;
    margin-bottom: 142px;
}

.feature-area .page-title .title {
    color: #ffffff;
}

.feature-area .mobile-image {
    margin-bottom: -142px;
}

/*-- 11. Service-Box --*/

.service-box {
    position: relative;
    padding-left: 100px;
}

.team-slide .owl-controls .owl-nav > div,
.service-box .box-icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 72px;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#482cbf+0,6ac6f0+100 */
    background: rgb(72, 44, 191);
    /* Old browsers */
    /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    overflow: hidden;
    z-index: 1;
    color: #5e88fc;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    -webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
}

.team-slide .owl-controls .owl-nav > div:hover,
.service-box:hover .box-icon {
    color: #ffffff;
}

.team-slide .owl-controls .owl-nav > div:before,
.service-box .box-icon:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    opacity: 1;
}

.team-slide .owl-controls .owl-nav > div:hover:before,
.service-box:hover .box-icon:before {
    opacity: 0;
}

.service-box h4 {
    margin-bottom: 10px;
}

/*-- 12. Testimonial-Area --*/

.testimonial-area {
    padding-top: 60px;
    padding-bottom: 120px;
}

.team-box {
    position: relative;
    padding: 55px 30px 30px 30px;
    -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 40px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
}

.team-box:hover {
    -webkit-box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
}

.team-box .team-image {
    position: absolute;
    top: -40px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #ffffff;
    text-align: center;
    overflow: hidden;
    border: 5px solid #ffffff;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1)
}

.team-box h4 {
    color: #5e88fc;
    font-weight: 600;
    font-size: 20px;
}

.team-box h6.position {
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
}

.team-slide .owl-controls .owl-nav > div {
    position: absolute;
    top: 50%;
    left: auto;
    right: 100%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.team-slide .owl-controls .owl-nav > div.owl-next {
    right: auto;
    left: 100%;
}

/*-- 13. Gallery-Area --*/

.gallery-area {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#482cbf+0,6ac6f0+100 */
    background: rgb(72, 44, 191);
    /* Old browsers */
    /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    /* IE6-9 fallback on horizontal gradient */
    color: #ffffff;
}

.gallery-slide .owl-stage-outer {
    background: url('images/mobile-screen.png') no-repeat center right / auto 100%;

}

.gallery-slide .item {
    margin: 58px 17px 70px 15px;
    overflow: hidden;
    border-radius: 2px;
}

.gallery-slide .owl-controls {
    position: static;
    text-align: right;
    padding-right: 80px;
}

.gallery-slide .owl-controls .owl-nav > div {
    display: inline-block;
    background-color: #ffffff;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
    color: rgba(72, 44, 191, 1);
    margin: 5px;
}

.gallery-slide .owl-controls .owl-dots .owl-dot {
    display: inline-block;
    margin: 3px;
}

.gallery-slide .owl-controls .owl-dots .owl-dot span {
    display: inline-block;
    width: 5px;
    height: 5px;
    margin: 5px;
    border-radius: 50%;
    background-color: #ffffff;
    opacity: 0.5;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.gallery-slide .owl-controls .owl-dots .owl-dot.active span {
    opacity: 1;
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
}

/*-- 14. Download-Area --*/

.download-area {
    background-image: url('images/download-bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin-top: 70px;
    margin-bottom: 100px;
    color: #ffffff;
}

.download-area .mobile-image {
    margin-top: -106px;
    margin-bottom: -200px;
}

/*-- 15. Price-Area --*/

.price-box {
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
    color: #8790af;
    -webkit-box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.1);
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.price-box:hover {
    -webkit-box-shadow: 0 0 50px -15px #4d43c6;
    box-shadow: 0 0 50px -15px #4d43c6;
}

.price-box .price-header {
    background-color: #f2f3fc;
    padding: 40px;
    color: #768ede;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#482cbf+0,6ac6f0+100 */
    background: rgb(72, 44, 191);
    /* Old browsers */
    /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    position: relative;
    overflow: hidden;
    z-index: 2;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.price-box .price-header:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f2f3fc;
    z-index: -1;
    opacity: 1;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.price-box:hover .price-header {
    color: #ffffff;
}

.price-box:hover .price-header:before {
    opacity: 0;
}


.price-box .price-header .price-icon {
    font-size: 60px;
    margin-bottom: 10px;
}

.price-box .price-header h4 {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 3px;
}

.price-box .price-body {
    padding: 40px;
}

.price-box .price-body ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.price-box .price-rate {
    color: #768ede;
    margin-bottom: 40px;
    font-size: 20px;
}

.price-box .price-rate sup {
    top: -20px;
    font-size: 26px;
}

.price-box .price-rate .rate {
    font-size: 56px;
}

.price-box .price-footer {
    margin-bottom: 40px;
}

.price-box .price-footer .bttn-white {
    padding: 13px 50px;
}

.price-box .price-footer .bttn-white:before {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 100px;
    left: 2px;
    top: 2px;
}

/*-- 16. Questions-area --*/

.questions-area {
    background-color: #f5f6ff;
}

.toggole-boxs {
    margin-top: -20px;
}

.toggole-boxs h3 {
    font-size: 18px;
    background-color: #ffffff;
    margin-bottom: 0;
    margin-top: 20px;
    outline: none;
    padding: 20px 30px 20px 60px;
    color: #434345;
    border-left: 5px solid #5e88fc;
    cursor: pointer;
    position: relative;
}

.toggole-boxs h3:before,
.toggole-boxs h3:after {
    content: '';
    position: absolute;
    left: 30px;
    top: 30px;
    width: 10px;
    height: 2px;
    background-color: #434345;
}

.toggole-boxs h3:before {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.toggole-boxs h3.ui-state-active:before {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg)
}

.toggole-boxs div {
    background-color: #ffffff;
    padding: 0 30px 20px 60px;
    border-left: 5px solid #5e88fc;
}

/*-- 17. Subscribe-Form --*/

.subscribe-area {
    background: url('images/subscribe-bg.jpg') no-repeat scroll center center / cover;
}

.subscribe-form {
    background-color: #ffffff;
    padding: 60px;
    border-radius: 5px;
}

.subscribe-form form {
    position: relative;
}

.subscribe-form form .control {
    width: 100%;
    height: auto;
    padding: 15px 180px 15px 30px;
    border-radius: 100px;
    border: 1px solid #5e88fc;
}

.subscribe-form form .bttn-white {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 0;
}

/*-- 18. Footer-Area --*/

.footer-box {
    text-align: center;

}

.footer-box .box-icon {
    width: 75px;
    height: 75px;
    margin: auto auto 30px auto;
    text-align: center;
    line-height: 75px;
    color: #ffffff;
    font-size: 20px;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#482cbf+0,6ac6f0+100 */
    background: rgb(72, 44, 191);
    /* Old browsers */
    /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    border-radius: 100%;
    position: relative;
    z-index: 1;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.footer-box .box-icon:before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 2px solid #ffffff;
    border-radius: 100%;
    z-index: -1;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s
}

.footer-box:hover .box-icon {
    color: #5e88fc;
}

.footer-box:hover .box-icon:before {
    background-color: #ffffff;
}

.footer-bottom {
    padding: 20px 0;
    background-color: #f5f6ff;
    border-top: 1px solid #5e88fc;
}

.footer-bottom .footer-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: right;
}

.footer-bottom .footer-menu ul li {
    display: inline-block;
}

.footer-bottom .footer-menu ul li a {
    padding: 10px;
    color: #8790af
}

.footer-bottom .footer-menu ul li a:hover {
    color: #5e88fc;
}

/*-- 19. ScrollUp-Button --*/

#scrollUp {
    right: 0;
    bottom: 0;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    color: #5e88fc;
}

.preloader {
    background-color: #ffffff;
    bottom: 0;
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999999;
}

.preloader span {
    background: rgb(72, 44, 191);
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    border-radius: 100%;
    height: 60px;
    width: 60px;
    line-height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    color: #ffffff;
    font-size: 24px;
    margin: auto;
    -webkit-animation: mymove 1.5s infinite linear;
    animation: mymove 1.5s infinite linear;
}

@-webkit-keyframes mymove {
    0 {
        -webkit-box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
    }
    25% {
        -webkit-box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
    }
    50% {
        -webkit-box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 20px rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 20px rgba(94, 136, 252, 0.6);
    }
    75% {
        -webkit-box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
    }
}

@keyframes mymove {
    0 {
        -webkit-box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
    }
    25% {
        -webkit-box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
    }
    50% {
        -webkit-box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 20px rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 20px rgba(94, 136, 252, 0.6);
    }
    75% {
        -webkit-box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 10px rgba(94, 136, 252, 0.6), 0 0 0 10px rgba(94, 136, 252, 0.6);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
        box-shadow: 0 0 0 0 rgba(94, 136, 252, 0.6), 0 0 0 0 rgba(94, 136, 252, 0.6);
    }
}

/*-- 20. Blog-Post --*/

.site-header {
    background: rgb(72, 44, 191);
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    color: #ffffff;
    padding: 180px 0 120px;
}

.site-header a {
    color: #ffffff;
}

.breadcrumb {
    background: none;
    display: inline-block;
    margin-top: 10px;
    padding: 0;
}


.post-single:after {
    content: "";
    clear: both;
    display: table;
}

.post-single {
    padding: 30px;
    border-radius: 3px;
    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.single-post .post-single {
    -webkit-box-shadow: none;
    box-shadow: none;
}

.single-post .post-single .post-media {
    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 30px;
}

.post-single.sticky .post-media {
    width: 55%;
    float: left;
    margin-right: 60px;
}

.post-single .post-media {
    overflow: hidden;
    border-radius: 3px;
}

.post-single .post-media img {
    width: 100%;
}

.post-single .post-meta {
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;
}

.post-single .post-body .post-meta .post-tags {
    float: left;
}

.post-single .post-body .post-meta .post-date {
    float: right;
}

.post-single .post-body h4 {
    font-size: 22px;
    margin-bottom: 20px;
}

.post-single .post-body .read-more {
    margin-top: 10px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 14px;
    color: #768ede;
}

.post-single .post-body .read-more:after {
    content: '\e87a';
    font-family: 'Linearicons-Free';
    margin-left: 5px;
}

/*-- 21. Pagination --*/

.pagination .nav-links {
    padding: 20px;
    -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    display: inline-block;
}

.pagination {
    text-align: center;
    margin-top: 80px;
    width: 100%;
}

.pagination .nav-links .page-numbers {
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    border-radius: 50%;
}

.pagination .nav-links .page-numbers:hover {
    color: rgb(72, 44, 191);
    background-color: #f5f6ff;

}

.pagination .nav-links .page-numbers.current {
    background: rgb(72, 44, 191);
    background: -webkit-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: -o-linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    background: linear-gradient(45deg, rgba(72, 44, 191, 1) 0%, rgba(106, 198, 240, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#482cbf', endColorstr='#6ac6f0', GradientType=1);
    color: #ffffff;
}

.post-single blockquote {
    padding: 50px 160px;
    text-align: center;
    -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    font-size: 26px;
    line-height: 1.6em;
    border: none;
    color: #626264;
    background-color: #f4f4f4;
    border: 30px solid #ffffff;
    font-style: italic;
}

/*-- 22. Comment-Respond --*/

.comment-respond h4,
.comments-area .comment-heading {
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: 600;
    color: #434345;
}

.comments-list,
.comments-list ul {
    list-style: none;
}

.comments-list .comment {
    position: relative;
    padding-left: 130px;
}

.comments-list .comment .comment-pic {
    width: 100px;
    height: 100px;
    border-radius: 3px;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
}

.comments-list .comment .comment-content .comment-header {
    color: #434345
}

.comments-list .comment .comment-content .comment-header h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}

.comments-list li li .comment .comment-pic {
    width: 80px;
    height: 80px;
}

.comments-list li {
    margin-bottom: 30px;
}

/*-- 23. Form-Stype --*/

.form-control {
    border-radius: 2px;
    padding: 15px 20px;
    height: auto;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
}

.form-double .box {
    width: calc(50% - 15px);
    float: left;
}

.form-double .box.last {
    float: right;
}