function gramophone(bandName, albumName, songName) {

    let plateLength = 0;
    plateLength = (((albumName.length * bandName.length) * songName.length) / 2) / 2.5;

    console.log(`The plate was rotated ${Math.ceil(plateLength)} times.`);
}

gramophone('Rammstein', 'Sehnsucht', 'Engel');