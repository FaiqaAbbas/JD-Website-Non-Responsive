window.addEventListener('DOMContentLoaded',function(){
    let circle=this.document.querySelector('.circle');
    let white_strip=this.document.querySelector('.white-strip .strip-content');
    
    /////////////Cursor Follower Circle ////////////////// 
    setTimeout(() => {
       this.window.addEventListener('mousemove', function(details){
           circle.style.top=  `${details.clientY}px`
           circle.style.left=  `${details.clientX}px`
        })
    }, 3000);

    ///////////////////  Follower Circle color change for white-strip/////
    white_strip.addEventListener('mouseover',()=>{
        circle.style.border='1px solid black';
    })
    white_strip.addEventListener('mouseout',()=>{
        circle.style.border='1px solid white';
    })


    //////// Using GSAP(Green Sock Animation Platform to animate)
    //when you want to set the sequence of animating elements we
    //need to create a timeline 
    //tl. from will be executed first then cascades in the sequence 
    var tl=gsap.timeline();
    tl
    .from(".mask-image",{
        duration:2,
        scale:.8,
        ease:'Expo.easeInOut',
        opacity:0
    })
    .from(".white-strip",{
        duration: 2,
        width:0,
        height:0,
        ease: "Expo.easeInOut" 
    },'-=1')
    .from(".black-card",{
        duration: 2,
        height:0,
        x:50,
        opacity:0,
        ease: "Expo.easeInOut" 
    },'-=1.5')
    .from(".black-card-content",{
        duration:2,
        opacity:0,
        ease:'Expo.easeInOut'
    },'-=1.5')
    .from(".strip-content",{
        duration:1.5,
        opacity:0,
        ease:"Expo.easeInOut"
    },'-=1.7')
    .from(".strip-content .line",{
        duration:1.5,
        width:0,
        opacity:0,
        ease:"Expo.easeInOut"
    },'-=1.6')
    
    .from(".left-text",{
        duration:2,
        rotate:0,
        height:0,
        opacity:0,
        ease:"Expo.easeInOut"
    },'-=2')
    
})