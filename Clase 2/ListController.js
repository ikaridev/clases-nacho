const List = {

    // se espera una Array de objetos con la propiedades: id, nickname, notificaciones, views
    Draw : (list) => 
    {
        document.getElementById('subsList').innerHTML = '';
        database.forEach(item => {
            List.DrawItem(item);
        });
    },    

    // se espera un objeto con la propiedades: id, nickname, notificaciones, views
    DrawItem : (item) =>
    {
        let element = document.createElement('li');
        element.innerText = '#' + item.id;
        element.innerText += ' - ' + item.nickname;
        element.innerText += ' - ' + item.views;

        document.getElementById('subsList').appendChild(element);
    }
} 

List.Draw(database)