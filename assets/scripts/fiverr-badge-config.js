$(() => {
  setTimeout(() => {
    $('#skeletonLoader').addClass('hidden')

    const myPic = "/assets/image/profile-pic-nz.jpg"
    $('.fiverr-profile-img').attr('src', myPic)
        .css({ border: 0, objectFit: 'contain', width: '100%', height: 'auto' })


    $('.fiverr-seller-widget .fiverr-seller-content').css({
        width: '225px',
    })

    $('.fiverr-seller-widget .fiverr-seller-content .crop').css({
        width: '100%',
    })
    
    $('.fiverr-seller-content')
        .css({
            'position': 'relative',
            overflow: 'hidden',
            height: 'auto',
            paddingBottom: '20px',
            borderRadius: '20px'
        })

    $('.fiverr-seller-widget').removeClass('hidden')

    $('.fiverr-seller-text').css({ 'margin-top': '30px' }).addClass('!font-nunito font-semibold')
    $('.fiverr-seller-category').addClass('!font-nunito')

    $('.fiverr-icon')
        .css({
            'width': '50px',
            'height': '50px',
            'position': 'absolute',
            'z-index': 50, 'left': '50%',
            'top': '50%',
            'transform': 'translateX(-50%) translateY(-20%)',
            'margin': 0
        })

    $('.fiverr-seller-content .crop .overlay').remove()
    $('.fiverr-seller-content .crop').css({
        height: 'auto'
    })

    $('.check-gigs-btn').addClass('!font-nunito !font-semibold !border-none')
  }, 3000);
})