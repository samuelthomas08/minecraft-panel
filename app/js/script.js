// Initialize all HTML Elements

const onlinePlayer = document.querySelector('.on-players span');
const serverState = document.querySelector('.server-state span');
const memberList = document.querySelector('.member-list');
const backupListEl = document.querySelector('.backup-list');


// Create a list with all members

const playerList = [
    {playerName: 'JuniorCoder', name: 'Sam', uuid: 'e44f919d-9ee9-43c5-832d-ed81a856baf0', admin: true},
    {playerName: 'Ajdin1412', name: 'Ajdin', uuid: '8483c55d-d65c-4f5d-8337-23debe6e0cd5', admin: true},
    {playerName: 'KPM_NONO', name: 'Noah', uuid: 'ce047b36-8ea3-4761-aa7e-d73241ecfb65', admin: false},
    {playerName: 'Zorro_14', name: 'Marcel', uuid: 'd2fa327c-a21b-48a5-8574-455b16f2b6dd', admin: false},
    {playerName: 'MasterJojo2107', name: 'Jona', uuid: 'a36333c3-dde3-4104-8c9b-986f23568d62', admin: false},
    {playerName: 'Bolzenschneiderr', name: 'Jano', uuid: '9819fc02-6cfc-48c9-a92f-ef609de5fcbc', admin: false},
    {playerName: 'Pandicorn07', name: 'Lara', uuid: '5baf6696-1ec4-46ec-b1a3-8989e771db50', admin: false},
    {playerName: 'Dzenan212', name: 'Dzenan', uuid: '18632fb6-2507-443e-8d0e-34d8c30b8d19', admin: false},
]


// Create a list with all the backups

const backupList = [
    // {count: 1, date: '01.01.2000', size: 1.2, file: 'backup_0001'},
]

// Reverse the list of backups, so the current one is always shown at first

backupList.reverse();


// Looping through the list of players and create cards with their names and player heads

playerList.forEach(element => {
    const container = document.createElement('div');
    container.classList.add('member-item');

    const img = document.createElement('img');
    img.src = `https://crafatar.com/avatars/${element.uuid}`;

    const playerTitle = document.createElement('div');
    playerTitle.classList.add('player-title');

    const name = document.createElement('p');
    name.innerHTML = `${element.playerName} | ${element.name}`;
    name.classList.add('name');

    let adminTag;

    playerTitle.appendChild(name);

    if (element.admin) {
        adminTag = document.createElement('p');
        adminTag.innerText = 'ADMIN';
        adminTag.classList.add('admin');

        playerTitle.appendChild(adminTag)
    }

    container.appendChild(img);
    container.appendChild(playerTitle);

    memberList.appendChild(container);
});


// !#############################################################
// !https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
// !Zu World Map weiterleiten auf Mobile
// !#############################################################


// Looping through the backups and create cards with their information and a download link

backupList.forEach(element => {
    const backupItem = document.createElement('div');
    backupItem.classList.add('item');

    console.log(backupItem);

    const heading = document.createElement('h2');

    if(element.count < 10) {
        heading.innerText = `Backup #000${element.count}`;
    } else if (element.count < 100) {
        heading.innerText = `Backup #00${element.count}`;
    }

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infos');

    const dateEl = document.createElement('p');
    dateEl.innerText = element.date;
    dateEl.classList.add('date');

    const sizeEl = document.createElement('p');
    sizeEl.innerText = `${element.size}GB`;
    sizeEl.classList.add('size');

    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');

    infoContainer.appendChild(dateEl);
    infoContainer.appendChild(sizeEl);

    infoBox.appendChild(heading);
    infoBox.appendChild(infoContainer);

    const downloadLink = document.createElement('a');
    downloadLink.classList.add('download');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Download'));
    downloadLink.setAttribute('download', `./assets/${element.file}`);
    downloadLink.innerHTML = '<i class="fa-solid fa-download"></i>';

    backupItem.appendChild(infoBox);
    backupItem.appendChild(downloadLink);
    

    backupListEl.appendChild(backupItem);
});


// Create an interval, in which all the server specific information gets updated

// MinecraftAPI.getServerStatus('buzz.blossomcraft.org', function (err, status) {
//     onlinePlayer.innerHTML = status.players.now > 0 ? status.players.now : "Niemand"
//     serverState.innerHTML = status.online ? 'Online' : 'Offline';
// });
