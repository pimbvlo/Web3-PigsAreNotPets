$("nav ul li").on("click",burgerClicked);var burgerSpeed=.25,canYouSeeNav=!1;gsap.set("#nav-bg",{scaleX:0,alpha:.5}),gsap.set("nav ul li",{alpha:0}),gsap.set("#burger-outline",{alpha:0,transformOrigin:"50% 50%"}),gsap.set(".burger-lines",{transformOrigin:"50% 50%"}),gsap.set("#burger-container",{transformOrigin:"50% 50%"}),gsap.set("#burger",{transformOrigin:"50% 50%"}),gsap.set("#burger-lines",{transformOrigin:"50% 50%"});var linesToLine=gsap.timeline({paused:!0});linesToLine.to("#top-line",{duration:burgerSpeed,y:8},"move-lines").to("#bottom-line",{duration:burgerSpeed,y:-8},"move-lines"),$("#burger-container").on("mouseenter",(function(){!1===canYouSeeNav?(console.log("is open false mouseEnter"),linesToLine.invalidate().restart(),linesToLine.play()):(console.log("is open true"),linesToLine.invalidate().restart(),linesToLine.play())})),$("#burger-container").on("mouseleave",(function(){!1===canYouSeeNav?(console.log("is open false mouseLeave"),linesToLine.invalidate().restart(),linesToLine.reverse()):(console.log("is open true mouseLeave"),linesToLine.reverse())}));var lineToX=gsap.timeline({paused:!0});lineToX.to("#burger-container",{duration:burgerSpeed,rotate:-90},"create-x").to("#top-line",{duration:burgerSpeed,y:7.75,rotate:45},"create-x").to("#middle-line",{duration:burgerSpeed,alpha:0},"create-x").to("#bottom-line",{duration:burgerSpeed,y:-7.75,rotate:-45},"create-x");var lineToLines=gsap.timeline({paused:!0});lineToLines.to("#top-line",{duration:burgerSpeed,y:0},"move-lines").to("#middle-line",{duration:burgerSpeed,alpha:1},"move-lines").to("#bottom-line",{duration:burgerSpeed,y:0},"move-lines");var staggerNav=gsap.timeline({paused:!0});function burgerClicked(){console.log("click"),!1===canYouSeeNav?(gsap.set("#burger-outline",{duration:burgerSpeed,alpha:1}),lineToX.invalidate().restart(),staggerNav.invalidate().restart(),linesToLine.invalidate().restart(),lineToX.play(),staggerNav.play(),linesToLine.reverse(),canYouSeeNav=!0):(gsap.to("#burger-outline",{duration:burgerSpeed,alpha:0}),lineToLines.invalidate().restart(),lineToX.reverse(),staggerNav.reverse(),lineToLines.play(),canYouSeeNav=!1)}staggerNav.to("#nav-bg",{duration:burgerSpeed+burgerSpeed/8,scale:40,alpha:.95}).to("#nav-bg svg circle",{duration:burgerSpeed,alpha:.95},"-=burgerSpeed").to("nav ul li",{duration:burgerSpeed/4,stagger:.1,alpha:1,y:10,display:"initial"},"-=0.15"),$("#burger-container").on("click",burgerClicked),$(document).ready((function(){gsap.registerPlugin(ScrollToPlugin),console.log("ready!")}));