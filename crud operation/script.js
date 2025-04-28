let items = [];

function additem(){
    const input = document.getElementById('input');
    const newitem = input.value.trim();
    if(newitem){
    items.push(newitem);
    input.value='';
    rendemitems();
}
}
function rendemitems(){
    const list=document.getElementById('itemlist');
    list.innerHTML ='';
    items.forEach((items , index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = item;

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const editbutton = document.createElement('button');
        editbutton.textContent = 'Edit';
        editbutton.onclick = () => edititems(index);

        const deletbutton =document.createElement('button');
        deletbutton.textContent='delet';
        deletbutton.onclick = () => deletitem(index);

        actions.appendChild(editbutton);
        actions.appendChild(deletbutton);

        li.appendChild(span);
        li.appendChild(actions);

        list.appendChild(li)


        });
    }

    function edititem(index){
        const newite=prompt('edit items',items[index]);
        if (newitem !==null&&newitem.trim() !==''){
            items[index]= newitem.trim();
            rendemitems();
        }
    }

    function deletitem(index){
        if( confirm('are you sure you want to delet this items ')){
            items.splice(index,1);
            rendemitems();
        }
    }