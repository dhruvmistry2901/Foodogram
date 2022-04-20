//Sidebar
const menuItems=document.querySelectorAll('.menu-item');

const changeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    });
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
      
    });
})

//messages
const message=document.querySelector('.messages');
const messageNotification=document.querySelector('#message-notification');

messageNotification.addEventListener('click',()=>{
    message.style.boxShadow='0 0 1rem var(--color-primary)';
    setTimeout(()=>{
        message.style.boxShadow='none';
    },2000);
});

