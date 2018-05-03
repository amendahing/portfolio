var sect0 = document.getElementById('port-section-0')
var sect1 = document.getElementById('port-section-1')
var sect2 = document.getElementById('port-section-2')

sect0.addEventListener('click', setPortSection(0))
sect1.addEventListener('click', setPortSection(1))
sect2.addEventListener('click', setPortSection(2))


function setPortSection(num){
    var modal = document.getElementsByClassName('modal')[num]
    var displayImg = document.getElementsByClassName('port-img')[num]
    var title = document.getElementsByClassName('port-title')[num]
    var exitBtn = document.getElementsByClassName('exit-btn')[num]

    displayImg.addEventListener('mouseover', displayTitle)
    displayImg.addEventListener('mouseout', removeTitle)
    displayImg.addEventListener('click', displayModal)
    exitBtn.addEventListener('click', exitModal)
    window.addEventListener('click', clickOutsideModal)


    function displayTitle(){
        title.style.display = "block"
    }

    function removeTitle(){
        console.log("ABC")
        title.style.display = "none"
    }

    function displayModal(){
        modal.style.display = "block"
    }

    function exitModal(){
        modal.style.display = "none"
    }

    function clickOutsideModal(e){
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
}












// function clickOutside(e){
//     if(e.target == modal){
//         modal.style.display = 'none'
//     }
// }

// var modal = document.getElementsByClassName('modal')[0];
// var modalImg = document.getElementsByClassName('modal-img')[0]
// var portImg = document.getElementsByClassName('port-img')[0]
// var exitBtn = document.getElementsByClassName('exit-btn')[0]
// var portTitle = document.getElementsByClassName('port-title')[0]
//
// //Listen for click
//
// modalImg.addEventListener('click', openModal);
// modalImg.addEventListener('mouseover', fadeIn);
// modalImg.addEventListener('mouseout', fadeOut);
// exitBtn.addEventListener('click', closeModal);
// window.addEventListener('click', clickOutside);
// portImg.addEventListener('mouseover', test)
//
// function test(){
//     portTitle.style.display = 'block'
// }
//
// function openModal(){
//     modal.style.display = 'block'
// }
//
// function closeModal(){
//     modal.style.display = 'none'
// }
//
// function clickOutside(e){
//     if(e.target == modal){
//         modal.style.display = 'none'
//     }
// }
//
// function fadeIn(e){
//     portTitle.style.display = 'block'
// }
//
// function fadeOut(e){
//     portTitle.style.display = 'none'
// }
