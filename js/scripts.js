// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
var textSkillArray = [];
textSkillArray[0] = "<span class = 'tech-text over-text'><ul class = 'skill-items'><li>Używam znaczników HTML5</li><li>Staram się dostarczać semantyczny kod</li><li>Próbuję również dostarczać dostępne strony</li><li>Optymalizuję kod dla lepszego indeksowania</li></ul></span><button class = 'buttonCloseSkill resize'><span class='fa fa-times' aria-hidden='true'></span><span class = 'sr-only'>Close</span></button>";
textSkillArray[1] = "<span class = 'tech-text over-text'><ul class = 'skill-items'><li>Korzystam z nowych selektorów (attribute)</li><li>Tworzę własnę animację za pomocą key-frames</li><li>Wykorzystuję pseudoelementy i pseudoselektory</li><li>W projektach stosuję nowe metody takie jak np. flexbox</li></ul></span> <button class = 'buttonCloseSkill resize'><span class='fa fa-times' aria-hidden='true'></span><span class = 'sr-only'>Close</span></button>";
textSkillArray[2] = "<span class = 'tech-text over-text'><ul class = 'skill-items'><li>Stosuję trzy paradygmaty (imperatywny, funkcyjny, obiektowy)</li><li>Rozumiem czym jest: hoisting, IIFE, closures, global/local scope, rekurencja, typowanie dynamiczne i wiele więcej</li><li>Staram się wdrażać zasady D.R.Y</li><li>Swój kod próbuję pisać tak aby był czytelny dla osoby postronnej</li></ul></span> <button class = 'buttonCloseSkill resize'><span class='fa fa-times' aria-hidden='true'></span><span class = 'sr-only'>Close</span></button>";
textSkillArray[3] = "<span class = 'tech-text over-text'><ul class = 'skill-items'><li>Stosuję meta tagi skalujące</li><li>Korzystam również z media-queries dla responsywności na różnych urządzeniach</li><li>Czasami stosuję twarde breakpointy</li></ul></span> <button class = 'buttonCloseSkill resize'><span class='fa fa-times' aria-hidden='true'></span><span class = 'sr-only'>Close</span></button>";
textSkillArray[4] = "<span class = 'tech-text over-text'><ul class = 'skill-items'><li>Wykorzystuję preprocesor w stopniu podstawowym: tworzenie zmiennych, pętli, warunków, mixinów/extendów</li><li>Korzystam z nestingu</li><li>Potrafię zaimportować inne pliki do Saas</li></ul></span> <button class = 'buttonCloseSkill resize'><span class='fa fa-times' aria-hidden='true'></span><span class = 'sr-only'>Close</span></button>";
textSkillArray[5] = "<span class = 'tech-text over-text'><ul class = 'skill-items'><li>Gimpa wykorzystuję przede wszystkim do grafiki wektorowej (SVG), tworzę w nim ścieżki które potem importuje do swoich projektów</li></ul></span> <button class = 'buttonCloseSkill resize'><span class='fa fa-times' aria-hidden='true'></span><span class = 'sr-only'>Close</span></button>";

function pageLoadTop() {
    $(window).on('unload', function() {
        $('html, body').scrollTop(0);
    });
}
pageLoadTop();

function preLoad() {
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 100);
});
}
preLoad();

function removeStickOnMobile() {
    $(window).on('load', function() {
        var width = $(window).width();
        if (width <= 480) {
            $(".row").removeClass("release-container");
            $(".about, .about2").removeClass("stuck release");
        }
    });
}
removeStickOnMobile();

/* $(window).load(function(){
    $('#google-map').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312776.98049582145!2d20.781005351498603!3d52.233026756721635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1478744247909');    
});
*/

var Resized = function (xxPercent, yyPercent, sscale, eease, fforce3D, classGsap, textSkill) {
	
this.xxPercent = xxPercent,
this.yyPercent = yyPercent,
this.sscale = sscale,
this.eease = eease,
this.fforce3D = fforce3D,
this.classGsap = classGsap,
this.textSkill = textSkill;

document.querySelector(classGsap).addEventListener('click', function clickA() {
	$(".skills").not(classGsap).animate({
    opacity: 0
	});
		
       $(".work3 img").css("pointer-events", "none");
       $('html, body').animate({
			scrollTop: $(".work3").offset().top - 48
        }, 2400);
		
        TweenMax.to(this, 0.4, {
            xPercent: xxPercent,
			yPercent: yyPercent,
            scale: sscale,
            ease: eease,
            force3D: fforce3D
        });
        $(".about-skill").hide().html(textSkill).fadeIn(600);

        document.querySelector('.resize').addEventListener('click', function clickB() {
            $(".skills").not(classGsap).animate({
                opacity: 1
            });
			
            $(".work3 img").css("pointer-events", "all");
            $('.resize').fadeOut();
            $('.tech-text').fadeOut();
			
            $(".about-skill").hide().html("<p class = 'over-text text-left about-skill'>Technologie które wykorzystywałem w swoich projektach, niektóre znam lepiej, niektórze gorzej. Jeżeli chcesz się dowiedzieć czegoś więcej <strong>kliknij</strong> poszczególną ikonę reprezentującą daną technologie.</p>").fadeIn(600);
            TweenMax.to(classGsap, 0.4, {
                xPercent: 0,
                yPercent: 0,
                scale: 1,
                ease: Power1.easeInOut,
                force3D: true
            });
        }, false);
    }, false);
}
var html5Resize = new Resized(165,20,2.0,Power1.easeInOut,true,'.html5', textSkillArray[0]);
var css3Resize = new Resized(70,20,2.0,Power1.easeInOut,true,'.css3', textSkillArray[1]);
var jsResize = new Resized(-25,20,2.0,Power1.easeInOut,true,'.js', textSkillArray[2]);
var rwdResize = new Resized(-145,20,2.0,Power1.easeInOut,true,'.rwd', textSkillArray[3]);
var sassResize = new Resized(165,-60,2.0,Power1.easeInOut,true,'.sass', textSkillArray[4]);
var gimpResize = new Resized(70,-60,2.0,Power1.easeInOut,true,'.gimp', textSkillArray[5]);


function heart() {
    var $heart = $('#heart');
    TweenMax.to($heart, 1, {
        autoAlpha: 1
    });
    heartBeat($heart, 0.05, 0.35, 1);

    function heartBeat(variable, time1, time2, time3) {
        var heartTimeline = new TimelineMax({
            repeat: -1
        });
        heartTimeline
            .to(variable, time1, {
                scale: 1.3
            })
            .to(variable, time2, {
                scale: 1
            })
            .to(variable, time1, {
                scale: 1.3
            })
            .to(variable, time3, {
                scale: 1
            });
    }
}
heart();

/*
function randomBtn() {
    buttons = new Array();
    buttons[0] = ('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters"><defs><filter id="filter-goo-2"><feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" /><feComposite in="SourceGraphic" in2="goo" /></filter></defs></svg><button id="component-2" class="button button--2 img-click" style="filter: url("#filter-goo-2")">Szczegoly<span class="button__bg"></span></button>');
    buttons[1] = ('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters"><defs><filter id="filter-glitch-1"><feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" result="warp" /><feOffset dx="-90" dy="-90" result="warpOffset" /><feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" /></filter></defs></svg><button id="component-5" class="button button--5">Click me</button>');

    var randomButton = Math.floor(Math.random() * buttons.length);
    var $button = $(".mask, .mask2 .mask3").append(buttons[randomButton]);
}
randomBtn();
*/

function sizeHeartnLogo() {
    $(document).ready(function() {
        if (navigator.userAgent.match(/msie|trident/i)) {
            $('#logo, #logo2, #logo3').css({
                height: "300px"
            });
            $('#heart').css({
                height: "50px"
            });
        }
    });
}
sizeHeartnLogo();

/*

	$(document).ready(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 767) {
			$(".about").removeClass("stuck");
    }
});

	$(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth > 767) {
            $(".about").addClass("stuck");
        }
    });

	*/
function portfolioPageButton() {
$('.portfolio-click').click(function() {
    $('.expand').fadeOut(500, function() {
        $('.page-info, .page-technology-used, .page-info-content, .page-info-share').empty();
        $('#left-div-handler').fadeOut();
        $('.expand').delay(400).fadeIn();
        $('.page-info').html('<p>Wykorzystane technologie:</p>');
        $('.page-technology-used').html('<img class="html5 skills" src="img/html5.svg" alt="html5 logo" /> <img class="css3 skills" src="img/css3.svg" alt="css3 logo" /> <img class="js skills" src="img/js.svg" alt="javascript logo" /> <img class="rwd skills" src="img/rwd.svg" alt="resposive web design logo" /> <img class="php skills" src="img/php.svg" alt="php logo" /> <img class="gimp skills" src="img/gimp.svg" alt="gimp logo" /> ');
        $('.page-info-content').html('<p>Portfolio poświęcone mojej osobie, stack technologiczny głównie taki jak wyżej + zewnętrzne biblioteki. Strona typu SPA.</p>');
        $('.page-info-share').html('<p>A</p> <p>B</p>');
    });
});
};
portfolioPageButton();

function fitnessPageButton() {
$('.fitness-click').click(function() {
    $('.expand').fadeOut(500, function() {
        $('.page-info, .page-technology-used, .page-info-content, .page-info-share').empty();
        $('#left-div-handler').fadeOut();
        $('.expand').delay(400).fadeIn();
        $('.page-info').html('<p>Wykorzystane technologie:</p>');
        $('.page-technology-used').html('<img class="html5 skills" src="img/html5.svg" alt="html5 logo" /> <img class="css3 skills" src="img/css3.svg" alt="css3 logo" /> <img class="js skills" src="img/js.svg" alt="javascript logo" /> <img class="rwd skills" src="img/rwd.svg" alt="resposive web design logo" /> <img class="php skills" src="img/php.svg" alt="php logo" /> <img class="gimp skills" src="img/gimp.svg" alt="gimp logo" /> ');
        $('.page-info-content').html('<p>Portfolio poświęcone mojej osobie, stack technologiczny głównie taki jak wyżej + zewnętrzne biblioteki. Strona typu SPA.</p>');
        $('.page-info-share').html('<p>C</p> <p>D</p>');
    });
});
};
fitnessPageButton();

function removeSign() {
$('.fa-times').click(function() {
    $('.expand').fadeOut(500, function() {
        $('.page-info, .page-technology-used, .page-info-content, .page-info-share').empty();
    });
    $('#left-div-handler').delay(400).fadeIn();
});
}
removeSign();

function copyContent() {
$(document).ready(function() {
    $('.mobile-480px').html($('.work').html());
});
}
copyContent();

function typeWord() {
    $(function() {
        $(".typing").typed({
            strings: ["Developer^2000", "Designer^2000", "Enthusiast^2000"],
            showCursor: false,
            stringsElement: null,
            typeSpeed: 50,
            backDelay: 500,
            shuffle: true,
            loop: true

        });
    });
}
typeWord();

function animateAvatar() {
    $(function() {
        var hasBeenTrigged = false;
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 300 && !hasBeenTrigged) {
                TweenMax.to(".roundedCenter", 2, {
                    opacity: 1,
                    scale: 1,
                    ease: Bounce.easeOut
                });
                hasBeenTrigged = true;
            }
        });

    });
}
animateAvatar();

function onScrollAnimate() {
    window.sr = ScrollReveal({
        duration: 1300,
        reset: true,
    });

    var mq = window.matchMedia("(max-width: 480px)");
    var nq = window.matchMedia("(min-width: 481px)");
    var sr = new ScrollReveal();
    var isMobile = sr.tools.isMobile();

    if (isMobile && mq.matches) {
        sr.reveal('.skills', {
            reset: false
        });

    } else if (!isMobile && mq.matches) {
        sr.reveal('.skills', {
            reset: false
        });

    } else if (isMobile && nq.matches) {
        sr.reveal('.skills', {
            reset: false
        }, 250);

    } else {
        sr.reveal('.skills', {
            scale: 0.8,
            reset: false
        }, 250);
    }

    /*	sr.reveal('.roundedCenter', {
    		origin: 'bottom',
    		easing: 'ease-in-out',
    		viewOffset: { top: 10},
    		distance: '220px',
    		reset: false,
    		mobile: true
    		});
    		*/

    sr.reveal('.work', {
        origin: 'bottom',
        viewOffset: {
            top: 50
        },
        easing: 'ease-in-out',
        viewFactor: 0.1,
        mobile: true
    });

    sr.reveal('.tab-fade-0', {
        origin: 'left',
        easing: 'ease-in-out',
        distance: '220px',
        reset: false,
        viewFactor: 0.1,
        mobile: true
    });

    sr.reveal('.tab-fade-1', {
        origin: 'right',
        easing: 'ease-in-out',
        distance: '220px',
        reset: false,
        viewFactor: 0.1,
        mobile: true
    });

    sr.reveal('.tab-fade-2', {
        origin: 'bottom',
        easing: 'ease-in-out',
        distance: '220px',
        reset: false,
        viewFactor: 0.1,
        mobile: true
    });

    sr.reveal('.mobile-480px', {
        origin: 'right',
        easing: 'ease-in-out',
        viewFactor: 0.1,
        mobile: true
    });
}
onScrollAnimate();
	
function svgDraw() {
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		
    new Vivus('logo', {
        type: 'delayed',
        duration: 60
    }, function() {
		TweenLite.to($("#Zaznaczenie, #Zaznaczenie1, #Zaznaczenie2, #Zaznaczenie3, #Zaznaczenie4"), 1.3, {fill:"white", strokeWidth:"0.9", delay:0.01});
		TweenLite.to($('#Zaznaczenie5'), 1.3, {fill:"#DC3522", strokeWidth:"0.6", delay:0.01})
    });
	
	new Vivus('logo2', {
        type: 'oneByOne',
        duration: 60
    }, function() {
        TweenLite.to($("#Zaznaczenie6, #Zaznaczenie7, #Zaznaczenie8, #Zaznaczenie9, #Zaznaczenie10"), 1.3, {fill:"white", strokeWidth:"0.9", delay:0.01});
		TweenLite.to($('#Zaznaczenie11'), 1.3, {fill:"#DC3522", strokeWidth:"0.6", delay:0.01})
    });
	
	new Vivus('logo3', {
        type: 'oneByOne',
        duration: 60
    }, function() {
        TweenLite.to($("#Zaznaczenie12, #Zaznaczenie13, #Zaznaczenie14, #Zaznaczenie15, #Zaznaczenie16"), 1.3, {fill:"white", strokeWidth:"0.9", delay:0.01});
		TweenLite.to($('#Zaznaczenie17'), 1.3, {fill:"#DC3522", strokeWidth:"0.6", delay:0.01})
    });
	
	} else {
		new Vivus('logo', {
        type: 'delayed',
        duration: 60
    }, function() {
        $('#Zaznaczenie, #Zaznaczenie1, #Zaznaczenie2, #Zaznaczenie3, #Zaznaczenie4').attr('style', 'fill: rgba(255, 255, 255, 0.8); stroke-width: 0.9px;');
        $('#Zaznaczenie5').attr('style', 'fill: #DC3522; stroke-width: 0.6px;');
		});

    new Vivus('logo2', {
        type: 'oneByOne',
        duration: 60
    }, function() {
        $('#Zaznaczenie6, #Zaznaczenie7, #Zaznaczenie8, #Zaznaczenie9, #Zaznaczenie10').attr('style', 'fill: rgba(255, 255, 255, 0.8); stroke-width: 0.9px;');
        $('#Zaznaczenie11').attr('style', 'fill: #DC3522; stroke-width: 0.6px;');
    });

    new Vivus('logo3', {
        type: 'oneByOne',
        duration: 60
    }, function() {
        $('#Zaznaczenie12, #Zaznaczenie13, #Zaznaczenie14, #Zaznaczenie15, #Zaznaczenie16').attr('style', 'fill: rgba(255, 255, 255, 0.8); stroke-width: 0.9px;');
        $('#Zaznaczenie17').attr('style', 'fill: #DC3522; stroke-width: 0.6px;');
    });
	}

	new Vivus('hexagon', {
        type: 'delayed',
        duration: 160
    }, function() {
        $('#ironman').attr('style', '-webkit-animation:fillthis 0.6s forwards; animation:fillthis 0.6s forwards;');
    });
    
}
svgDraw();

function stuckDivOnSize() {
    if (screen.width > 480) {
        $(document).ready(function() {
            $(window).stuck();
        });
    }
}
stuckDivOnSize();

function stickyNavbar() {
    $(document).ready(function() {

        var myNavBar = {

            flagAdd: true,

            elements: [],

            init: function(elements) {
                this.elements = elements;
            },

            add: function() {
                if (this.flagAdd) {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className += " fixed-theme";
                    }
                    this.flagAdd = false;
                }
            },

            remove: function() {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                }
                this.flagAdd = true;
            }

        };

        myNavBar.init([
            "header",
            "header-container",
            "brand"
        ]);

        function offSetManager() {

            var yOffset = 0;
            var currYOffSet = window.pageYOffset;

            if (yOffset < currYOffSet) {
                myNavBar.add();
            } else if (currYOffSet == yOffset) {
                myNavBar.remove();
            }

        }

        window.onscroll = function(e) {
            offSetManager();
        };

        offSetManager();
    });
}
stickyNavbar();

function scrollToSection() {
    $("#header ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 45
        }, 1500, function() {});

    });
}
scrollToSection();

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
    document.getElementsByTagName('html')[0].classList.add('safari');
}

var buttonWorks = function (bt, filter) {
	this.bt = bt;
	this.filter = filter;
    var particleCount = 16;
    var colors = ['#DE8AA0', '#8AAEDE', '#FFB300', '#60C7DA'];

    document.querySelector(bt).addEventListener('click', function() {
        var particles = [];
        var tl = new TimelineLite({
            onUpdate: function() {
                document.querySelector(filter).setAttribute('x', 0);
            }
        });

        tl.to(document.querySelector(bt).querySelectorAll('.button__bg'), 0.6, {
            scaleX: 1.07
        });
        tl.to(document.querySelector(bt).querySelectorAll('.button__bg'), 0.9, {
            scale: 1.01,
            ease: Elastic.easeOut.config(1.2, 0.4)
        }, 0.6);

        for (var i = 0; i < particleCount; i++) {
            particles.push(document.createElement('span'));
            document.querySelector(bt).appendChild(particles[i]);

            particles[i].classList.add(i % 2 ? 'left' : 'right');

            var dir = i % 2 ? '-' : '+';
            var r = i % 2 ? getRandom(-1, 1) * i / 2 : getRandom(-1, 1) * i;
            var size = i < 2 ? 1 : getRandom(0.8, 0.8);
            var tl = new TimelineLite({
                onComplete: function(i) {
                    particles[i].parentNode.removeChild(particles[i]);
                    this.kill();
                },
                onCompleteParams: [i]
            });

            tl.set(particles[i], {
                scale: size
            });
            tl.to(particles[i], 0.6, {
                x: dir + 20,
                scaleX: 3,
                ease: SlowMo.ease.config(0.1, 0.7, false)
            });
            tl.to(particles[i], 0.1, {
                scale: size,
                x: dir + '=25'
            }, '-=0.1');
            if (i >= 2) tl.set(particles[i], {
                backgroundColor: colors[Math.round(getRandom(0, 3))]
            });
            tl.to(particles[i], 0.6, {
                x: dir + getRandom(60, 100),
                y: r * 10,
                scale: 0.1,
                ease: Power3.easeOut
            });
            tl.to(particles[i], 0.2, {
                opacity: 0,
                ease: Power3.easeOut
            }, '-=0.2');
        }
    });
}

var buttonPortfolio = new buttonWorks('#btn-1','#filter-goo');
var buttonFitness = new buttonWorks('#btn-2','#filter-goo-1');
var buttonComing = new buttonWorks('#btn-3','#filter-goo-2');

$(function() {

    var red = '#CC6666';
    var white = 'rgb(255,255,255)';
    var gray = '#1E1E20';
    var hoverOrange = '#CC4949';
    $buttonShapes = $('rect.btn-shape');
    $buttonColorShape = $('rect.btn-shape.btn-color');
    $buttonText = $('text.textNode');
    $buttonCheck = $('text.checkNode');

    var buttonProps = {
        buttonWidth: $buttonShapes.attr('width'),
        buttonX: $buttonShapes.attr('x'),
        buttonY: $buttonShapes.attr('y'),
        textScale: 1,
        textX: $buttonText.attr('x'),
        textY: $buttonText.attr('y')
    };

    function onUpdateHandler() {
        $buttonShapes.attr('width', buttonProps.buttonWidth);
        $buttonShapes.attr('x', buttonProps.buttonX);
        $buttonShapes.attr('y', buttonProps.buttonY);
        $buttonText.attr('transform', "scale(" + buttonProps.textScale + ")");
        $buttonText.attr('x', buttonProps.textX);
        $buttonText.attr('y', buttonProps.textY);
    }

    var hover_tl = new TimelineMax({
        tweens: [
            TweenMax.to($buttonText, 0.15, {
                fill: white
            }),
            TweenMax.to($buttonShapes, 0.35, {
                fill: hoverOrange
            })
        ]
    });
    hover_tl.stop();

    var tl = new TimelineMax({
        onComplete: bind_mouseenter
    });

    tl.append(new TimelineMax({
        align: "start",
        tweens: [
            TweenMax.to($buttonText, 0.15, {
                fillOpacity: 0
            }),
            TweenMax.to(buttonProps, 0.25, {
                buttonX: (330 - 64) / 2,
                buttonWidth: 54,
                onUpdate: onUpdateHandler
            }),
            TweenMax.to($buttonShapes, 0.25, {
                fill: gray
            })
        ],
        onComplete: function() {
            $buttonColorShape.css({
                'strokeDasharray': 256,
                'strokeDashoffset': 256
            });
        }
    }));

    tl.append(TweenMax.to($buttonColorShape, 1.2, {
        strokeDashoffset: 0,
        ease: Quad.easeIn,
        onComplete: function() {

            $buttonColorShape.css({
                'strokeDasharray': 763,
                'strokeDashoffset': 0
            });
        }
    }));

    tl.append(new TimelineMax({
        align: "start",
        tweens: [
            TweenMax.to($buttonShapes, 0.3, {
                fill: gray
            }),
            TweenMax.to($buttonCheck, 0.15, {
                fillOpacity: 1
            }),
            TweenMax.to(buttonProps, 0.25, {
                buttonX: 3,
                buttonWidth: 330,
                onUpdate: onUpdateHandler
            })
        ]
    }));

    tl.append(TweenMax.to($buttonCheck, 0.1, {
        delay: 1,
        fillOpacity: 0
    }));

    tl.append(new TimelineMax({
        align: "start",
        tweens: [
            TweenMax.to($buttonShapes, 0.3, {
                fill: red
            }),
            TweenMax.to($buttonText, 0.3, {
                fill: white,
                fillOpacity: 1
            })
        ],
        onComplete: function() {
            $('.colins-submit').removeClass('is-active');
        }
    }));
    tl.stop();

    $('.colins-submit').on('click', function(e) {
        $(e.currentTarget).addClass('is-active');
        setTimeout(
            function() {
                $('.colins-submit').prop('disabled', true);
            }, 100);
        tl.restart();
        $('.colins-submit').off('mouseenter');
        $('.colins-submit').off('mouseleave');
        setTimeout(
            function() {
                $('.colins-submit').prop('disabled', false);
            }, 3400);
    });

    bind_mouseenter();

    function bind_mouseenter() {
        $('.colins-submit').on('mouseenter', function(e) {
            hover_tl.restart();
            $('.colins-submit').off('mouseenter');
            bind_mouseleave();
        });
    }

    function bind_mouseleave() {
        $('.colins-submit').on('mouseleave', function(e) {
            hover_tl.reverse();
            $('.colins-submit').off('mouseleave');
            bind_mouseenter();
        });
    }

});

$(function() {

    var form = $('.form-horizontal');

    var formMessages = $('#form-messages');

    $(form).submit(function(e) {
        e.preventDefault();
        var formData = $(form).serialize();

        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success').fadeOut(0).fadeIn(3000).fadeOut(400);

                $(formMessages).text(response);

                $('#name, #email, #message').val('');
            })
            .fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error').fadeOut(0).fadeIn(3000).fadeOut(400);

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! Twoja wiadomość nie może zostać wysłana');
                }
            });

    });
});

function hideEmail() {
    var user = 'kontakt';
    var domain = 'pemiz.com';
    var element = document.querySelector('.email-hide');

    element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">kontakt@pemiz.com</a>';
}
hideEmail();

function hidePhone() {
    $(document).ready(
        function() {
            $('.protectedNumber').each(
                function() {
                    $(this).text($(this).attr('title'));
                });
        });
}
hidePhone();

(function(window) {

    'use strict';

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function createDOMEl(type, className, content) {
        var el = document.createElement(type);
        el.className = className || '';
        el.innerHTML = content || '';
        return el;
    }

    function RevealFx(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
    }

    RevealFx.prototype.options = {
        isContentHidden: true,
        revealSettings: {
            direction: 'lr',
            bgcolor: '#f0f0f0',
            duration: 500,
            easing: 'easeInOutQuint',
            coverArea: 0,
            onCover: function(contentEl, revealerEl) {
                return false;
            },
            onStart: function(contentEl, revealerEl) {
                return false;
            },
            onComplete: function(contentEl, revealerEl) {
                return false;
            }
        }
    };

    RevealFx.prototype._init = function() {
        this._layout();
    };

    RevealFx.prototype._layout = function() {
        var position = getComputedStyle(this.el).position;
        if (position !== 'fixed' && position !== 'absolute' && position !== 'relative') {
            this.el.style.position = 'relative';
        }

        this.content = createDOMEl('div', 'block-revealer__content', this.el.innerHTML);
        if (this.options.isContentHidden) {
            this.content.style.opacity = 0;
        }

        this.revealer = createDOMEl('div', 'block-revealer__element');
        this.el.classList.add('block-revealer');
        this.el.innerHTML = '';
        this.el.appendChild(this.content);
        this.el.appendChild(this.revealer);
    };

    RevealFx.prototype._getTransformSettings = function(direction) {
        var val, origin, origin_2;

        switch (direction) {
            case 'lr':
                val = 'scale3d(0,1,1)';
                origin = '0 50%';
                origin_2 = '100% 50%';
                break;
            case 'rl':
                val = 'scale3d(0,1,1)';
                origin = '100% 50%';
                origin_2 = '0 50%';
                break;
            case 'tb':
                val = 'scale3d(1,0,1)';
                origin = '50% 0';
                origin_2 = '50% 100%';
                break;
            case 'bt':
                val = 'scale3d(1,0,1)';
                origin = '50% 100%';
                origin_2 = '50% 0';
                break;
            default:
                val = 'scale3d(0,1,1)';
                origin = '0 50%';
                origin_2 = '100% 50%';
                break;
        };

        return {

            val: val,

            origin: {
                initial: origin,
                halfway: origin_2
            },
        };
    };


    RevealFx.prototype.reveal = function(revealSettings) {

        if (this.isAnimating) {
            return false;
        }
        this.isAnimating = true;

        var defaults = {
                duration: 500,
                easing: 'easeInOutQuint',
                delay: 0,
                bgcolor: '#f0f0f0',
                direction: 'lr',
                coverArea: 0
            },
            revealSettings = revealSettings || this.options.revealSettings,
            direction = revealSettings.direction || defaults.direction,
            transformSettings = this._getTransformSettings(direction);

        this.revealer.style.WebkitTransform = this.revealer.style.transform = transformSettings.val;
        this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin = transformSettings.origin.initial;

        this.revealer.style.backgroundColor = revealSettings.bgcolor || defaults.bgcolor;

        this.revealer.style.opacity = 1;

        var self = this,

            animationSettings_2 = {
                complete: function() {
                    self.isAnimating = false;
                    if (typeof revealSettings.onComplete === 'function') {
                        revealSettings.onComplete(self.content, self.revealer);
                    }
                }
            },

            animationSettings = {
                delay: revealSettings.delay || defaults.delay,
                complete: function() {
                    self.revealer.style.WebkitTransformOrigin = self.revealer.style.transformOrigin = transformSettings.origin.halfway;
                    if (typeof revealSettings.onCover === 'function') {
                        revealSettings.onCover(self.content, self.revealer);
                    }
                    anime(animationSettings_2);
                }
            };

        animationSettings.targets = animationSettings_2.targets = this.revealer;
        animationSettings.duration = animationSettings_2.duration = revealSettings.duration || defaults.duration;
        animationSettings.easing = animationSettings_2.easing = revealSettings.easing || defaults.easing;

        var coverArea = revealSettings.coverArea || defaults.coverArea;
        if (direction === 'lr' || direction === 'rl') {
            animationSettings.scaleX = [0, 1];
            animationSettings_2.scaleX = [1, coverArea / 100];
        } else {
            animationSettings.scaleY = [0, 1];
            animationSettings_2.scaleY = [1, coverArea / 100];
        }

        if (typeof revealSettings.onStart === 'function') {
            revealSettings.onStart(self.content, self.revealer);
        }
        anime(animationSettings);
    };

    window.RevealFx = RevealFx;

})(window);

function revealText() {
    setTimeout(init, 0);

    function init() {
        var scrollElemToWatch_1 = document.querySelector('.rev-3'),
            watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -250),
            rev3 = new RevealFx(scrollElemToWatch_1, {
                revealSettings: {
                    bgcolor: '#DC3522',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            })

        watcher_1.enterViewport(function() {
            rev3.reveal();
            watcher_1.destroy();
        });

        var scrollElemToWatch_2 = document.querySelector('.rev-4'),
            watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -250),
            rev4 = new RevealFx(scrollElemToWatch_2, {
                revealSettings: {
                    bgcolor: '#DC3522',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            })

        watcher_2.enterViewport(function() {
            rev4.reveal();
            watcher_2.destroy();
        });

        var scrollElemToWatch_3 = document.querySelector('.rev-5'),
            watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -250),
            rev5 = new RevealFx(scrollElemToWatch_3, {
                revealSettings: {
                    bgcolor: '#DC3522',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            })

        watcher_3.enterViewport(function() {
            rev5.reveal();
            watcher_3.destroy();
        });

        var scrollElemToWatch_4 = document.querySelector('.location-contact'),
            watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -200),
            rev6 = new RevealFx(scrollElemToWatch_4, {
                revealSettings: {
                    bgcolor: '#DC3522',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            rev7 = new RevealFx(document.querySelector('.phone-contact'), {
                revealSettings: {
                    bgcolor: '#D9CB9E',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev8 = new RevealFx(document.querySelector('.email-contact'), {
                revealSettings: {
                    bgcolor: '#DC3522',
                    delay: 500,
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            rev9 = new RevealFx(document.querySelector('.github-contact'), {
                revealSettings: {
                    bgcolor: '#D9CB9E',
                    delay: 750,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            rev10 = new RevealFx(document.querySelector('.footer-center-text'), {
                revealSettings: {
                    bgcolor: '#DC3522',
                    delay: 1000,
                    direction: 'bt',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            rev11 = new RevealFx(document.querySelector('.twitter-container'), {
                revealSettings: {
                    bgcolor: '#D9CB9E',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            rev12 = new RevealFx(document.querySelector('.contactFull'), {
                revealSettings: {
                    bgcolor: '#D9CB9E',
                    delay: 1250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            rev13 = new RevealFx(document.querySelectorAll('.form-text')[0], {
                revealSettings: {
                    bgcolor: '#D9CB9E',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            })

        watcher_4.enterViewport(function() {
            rev6.reveal();
            rev7.reveal();
            rev8.reveal();
            rev9.reveal();
            rev10.reveal();
            rev11.reveal();
            rev12.reveal();
            rev13.reveal();
            watcher_4.destroy();
        });

    }
};

function heightToReveal() {
var desktopHeight = $(window).height();
if (desktopHeight > 560) {
    revealText();
} else if (desktopHeight <= 560) {

	}
}
heightToReveal();

function currentYear(){
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
}
currentYear();

console.log("%cdesign and developed by : %ccebula ( pemiz.com )", "color:gray; font-family:tahoma,arial;", "color:#ff002b; font-family:tahoma,arial; font-weight:bold");