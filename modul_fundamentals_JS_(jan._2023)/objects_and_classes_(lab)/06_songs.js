function songs(arr) {

    const numberOfsongs = arr.shift();
    const typeList = arr.pop();
    let songList = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;

        }
    }

    for (let i = 0; i < numberOfsongs; i++) {
        let currentTypeListNameTime = arr.shift().split('_');
        let type = currentTypeListNameTime[0];
        let name = currentTypeListNameTime[1];
        let time = currentTypeListNameTime[2];

        let song = new Song(type, name, time);
        songList.push(song);
    }

    for (let i = 0; i < numberOfsongs; i++) {
        let currentSong = songList[i];
        let currentType = currentSong.type;
        if (typeList === 'all') {
            console.log(currentSong.name);
        } else {
            if (typeList === currentType) {
                console.log(currentSong.name);
            }
        }
    }
}

// songs([
//     3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite',
// ]);

// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
//     );

    songs([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        );