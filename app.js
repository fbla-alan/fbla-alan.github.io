let docsDown = true;
let libDown = true;
let copyright = true;
$(document).ready(()=>{

    const $docs = $('.docsDown');
    const $library = $('.libraryDown');
    const $copyRight = $('.copyRight');

    $('.docsDown').addClass("fa-caret-square-down");
    $('.library').addClass("fa-caret-square-down");
    $('.copyRight').addClass("fa-caret-square-down");
    
    $docs.on('click', ()=>{
        $('.docsContainer').slideToggle();
        docsDown = !docsDown;
        if(docsDown){ // first
            $(".docsDown").removeClass('fa-caret-square-up');
            $('.docsDown').addClass("fa-caret-square-down");
            
        }
        else{
            $(".docsDown").removeClass('fa-caret-square-down');
            $('.docsDown').addClass("fa-caret-square-up");
            
        }
    })


    $library.on('click', ()=>{
        $('.libContainer').slideToggle();
        libDown = !libDown;
        if(libDown){ // first
            $(".library").removeClass('fa-caret-square-up');
            $('.library').addClass("fa-caret-square-down");
            
        }
        else{
            $(".library").removeClass('fa-caret-square-down');
            $('.library').addClass("fa-caret-square-up");
            
        }
    })

    
    $copyRight.on('click', ()=>{
        $('.copyrightContainer').slideToggle();
        copyright = !copyright;
        if(copyright){ // first
            $(".copyRight").removeClass('fa-caret-square-up');
            $('.copyRight').addClass("fa-caret-square-down");
            
        }
        else{
            $(".copyRight").removeClass('fa-caret-square-down');
            $('.copyRight').addClass("fa-caret-square-up");
            
        }
    })
}) 