const multiple_select = document.querySelector(".multiple_select_input"),
      items = document.querySelectorAll(".item");


multiple_select.addEventListener("click", () => {
    multiple_select.classList.toggle("open")
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".multiple_select_text");

        if(checked && checked.length > 0){
            btnText.innerHTML = `${checked.length} Items Selected`
            btnText.style.cssText += 'color: rgb(21, 156, 209)'
        }else{
            btnText.innerHTML = "Select Language"
        }
    })
})