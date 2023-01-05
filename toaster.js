const button = document.getElementById("btn-toast"),
      button2 = document.getElementById("btn-toast-warning"),    
      button3 = document.getElementById("btn-toast-info"),  
      button4 = document.getElementById("btn-toast-danger"),  
      toast = document.querySelector(".toast_success"),
      toast2 = document.querySelector(".toast_warning"),
      toast3 = document.querySelector(".toast_info"),
      toast4 = document.querySelector(".toast_danger"),
      closeIcon = document.querySelector(".close"),
      closeIcon2 = document.querySelector(".close_warning"),
      closeIcon3 = document.querySelector(".close_info"),
      closeIcon4 = document.querySelector(".close_danger"),
      progress = document.querySelector(".progress"),
      progress2 = document.querySelector(".progress_warning"),
      progress3 = document.querySelector(".progress_info"),
      progress4 = document.querySelector(".progress_danger");
      

button.addEventListener("click", () => {
    toast2.classList.remove("active");
    progress2.classList.remove("active");
    toast3.classList.remove("active");
    progress3.classList.remove("active");
    toast4.classList.remove("active");
    progress4.classList.remove("active");

    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(()=> {
        toast.classList.remove("active");
    }, 5000)

    setTimeout(()=> {
        progress.classList.remove("active");
    }, 5300)
});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(()=> {
        progress.classList.remove("active");
    }, 300);

});

button2.addEventListener("click", () => {
    toast.classList.remove("active");
    progress.classList.remove("active");
    toast3.classList.remove("active");
    progress3.classList.remove("active");
    toast4.classList.remove("active");
    progress4.classList.remove("active");

    toast2.classList.add("active");
    progress2.classList.add("active");


    setTimeout(()=> {
        toast2.classList.remove("active");
    }, 5000)

    setTimeout(()=> {
        progress2.classList.remove("active");
    }, 5300)
});

closeIcon2.addEventListener("click", () => {
    toast2.classList.remove("active");
    setTimeout(()=> {
        progress2.classList.remove("active");
    }, 300);
});

button3.addEventListener("click", () => {
    toast.classList.remove("active");
    progress.classList.remove("active");
    toast2.classList.remove("active");
    progress2.classList.remove("active");
    toast4.classList.remove("active");
    progress4.classList.remove("active");

    toast3.classList.add("active");
    progress3.classList.add("active");


    setTimeout(()=> {
        toast3.classList.remove("active");
    }, 5000)

    setTimeout(()=> {
        progress3.classList.remove("active");
    }, 5300)
});

closeIcon3.addEventListener("click", () => {
    toast3.classList.remove("active");
    setTimeout(()=> {
        progress3.classList.remove("active");
    }, 300);
});

button4.addEventListener("click", () => {
    toast.classList.remove("active");
    progress.classList.remove("active");
    toast2.classList.remove("active");
    progress2.classList.remove("active");
    toast3.classList.remove("active");
    progress3.classList.remove("active");

    toast4.classList.add("active");
    progress4.classList.add("active");


    setTimeout(()=> {
        toast4.classList.remove("active");
    }, 5000)

    setTimeout(()=> {
        progress4.classList.remove("active");
    }, 5300)
});

closeIcon4.addEventListener("click", () => {
    toast4.classList.remove("active");
    setTimeout(()=> {
        progress4.classList.remove("active");
    }, 300);
});