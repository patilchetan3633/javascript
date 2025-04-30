
let toastBox = document.getElementById("toastBox");
let successMsg = "Successfully submitted";
let errorMsg = "Please fix the error";
let invalidMsg = "Invalid input, check again";


function showtoast(msg)
{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error'))
    {
        toast.classList.ass('error');
    }
    if(msg.includes('invalid'))
    {
        toast.classList.ass('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },4500);
}
