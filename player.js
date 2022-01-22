let music = document.querySelector("audio");
let img = document.getElementById("imag");
let play = document.getElementById("play");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let artist = document.getElementById("artist");
let title = document.getElementById("title");

const songs = [
    {
        name: "Perfect Ed Sheeran",
        title: "Perfect",
        artist: "Ed Sheeran",
        pic: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Ed_Sheeran_Perfect_Single_cover.jpg/220px-Ed_Sheeran_Perfect_Single_cover.jpg",
    },
    {
        name: "Aise Kyun Mismatched",
        title: "Aise Kyun",
        artist: "Anurag saikia, Nikhita Gandhi",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIMe-OTLs4POcAQd6jXHpBf7IkiUPQ9E5wgBzsc6-jI3kTuJxkFbOx1ilkbngUE5oyMg&usqp=CAU",
    },
    {
        name: "Jaane Kyun",
        title: "Jaane Kyun",
        artist: "Vishal-Shekhar, Vishal Dadlani",
        pic: "https://images.news18.com/ibnlive/uploads/2016/08/priyanka-dostana.jpg",
    },
    {
        name: "Luka Chuppi - Duniya",
        title: "Duniya",
        artist: "Akhil, Dhvani Bhanushali",
        pic: "https://www.pinkvilla.com/imageresize/Kartik%20Aaryan%20Luka%20Chuppi%20main.jpg?width=752&format=webp&t=pvorg",
    }
];

let playing = false;

let playm = () => {
    playing = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

let pausem = () => {
    playing = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    playing ? pausem() : playm();
});

let loads = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    img.src = songs.pic;
};

i = 0;
let nexts = () => {
    i = (i + 1) % songs.length;
    loads(songs[i]);
    playm();
};

let prevs = () => {
    i = (i - 1 + songs.length) % songs.length;
    loads(songs[i]);
    playm();
};

next.addEventListener("click", nexts);
previous.addEventListener("click", prevs);
