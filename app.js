window.onload = () => 
{
    const BtnClick1 = document.getElementById("ButtonClick1");
    const PClick1 = document.getElementById("idPP");


    BtnClick1.addEventListener("click", function ()
    {
        this.innerHTML =
        (this.innerHTML === 'Люблю Владу') ? this.innerHTML = 'Влада самая лучшая' : this.innerHTML = 'Люблю Владу';
    });
}

function ButtonClick1()
{
    alert('Я тебя люблю');
}