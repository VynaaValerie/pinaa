const scriptURL = 'https://script.google.com/macros/s/AKfycbw4w5CNGwkej9UxeaZlY9v4AbO6w5YktbaHT9h_nleVogUXtj8Yg4f5wu6azPjm0vi_tQ/exec'
const form = document.forms['submit-to-google-sheet']
const btnSend = document.querySelector('.submit');
const load = document.querySelector('.loading');
const buttons = document.querySelector('.btnSection');
const button = document.querySelectorAll('.btnS');
let article = document.querySelectorAll(".article");
button[0].classList.add('bg-pink-400');
form.addEventListener('submit', e => {
  e.preventDefault();
  load.classList.toggle('hidden');
  btnSend.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      load.classList.toggle('hidden');
      btnSend.classList.toggle('hidden');
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been successfully sent.',
        icon: 'Success',
        confirmButtonText: 'Ok'
      });
    })
    .catch(error => console.error('Error!', error.message));
});
let bar = document.getElementsByClassName('fa-bars')[0];
let close = document.getElementsByClassName('close')[0];
let navbar = document.getElementsByClassName('navbar')[0];

function toggle() {
  navbar.classList.toggle('hidden');
  close.classList.toggle('hidden');
}

function toggle2() {
  navbar.classList.toggle('hidden');
  close.classList.toggle('hidden');
}

close.addEventListener('click', toggle);
bar.addEventListener('click', toggle);
document.getElementById('btn').addEventListener('click', function() {
  window.location.href = '#about';
});
buttons.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  
  if (id) {
    button.forEach(function (bt) {
      bt.classList.remove("bg-pink-400");
      e.target.classList.add("bg-pink-400");
    });
    article.forEach(function (art) {
      art.classList.add("hidden");
    });
    const element = document.getElementById(id);
    console.log(element);
    element.classList.remove("hidden");
    console.log(element);
  }
});

const cardItems = [
  {
    img1:"img/portofolio1.png" ,
    img2:"img/portofolio2.png",
    title1: "Portofolio",
    miniTitle: "Web Development",
    desc1:"I've created this portfolio to showcase my projects, highlighting expertise in web development and UI/UX design. It provides a glimpse into my skills and serves as an avenue for exploring potential opportunities.",
    desc2: "Through this project, I honed my design skills using Tailwind CSS and JavaScript. I customized the visuals to match my preferred theme of black and pink, leading to improved clarity in expressing my ideas.",
    btn1:"HTML",
    btn2:"Tailwind",
    btn3:"Javascript",
    link:"https://vynaavalerie.github.io/pinaa/",
    link2:"gh repo clone VynaaValerie/pinaa "
  }
];

window.addEventListener("DOMContentLoaded", function () {
  displayCards(cardItems); // Memanggil fungsi untuk menampilkan semua kartu
});

function displayCards(cardItems) {
  let display = cardItems.map(function (item) {
    return `
    <div class="mx-auto grid pb-9 rounded-md 2md:grid-cols-2 bg-zinc-900 border border-zinc-700 w-[90%] sm:px-9 px-0 2md:px-7 py-5 my-5">
      <div class="w-[100%] ">
        <img class="rounded-lg mx-auto 2md:hidden w-[85%]  sm:w-[90%]" src="${item.img2}" alt="">
        <img class="hidden 2md:grid rounded-lg xl:w-[80%] lg:w-[85%]" src="${item.img1}" alt="">
        <div class="mx-auto  md:mx-9 sm:mx-10 pt-3 w-5/6 ">
          <div class="flex flex-row text-white sm:ml-[-16px] font-custom  ">
            <button class="bg-[#FE1A7E] bg-opacity-65 px-2 py-1 rounded-lg sm:px-4">${item.btn1}</button>
            <button class="ml-5 bg-[#FE1A7E] px-2 sm:px-4 bg-opacity-65 py-1 rounded-lg">${item.btn2}</button>
            ${item.btn3 ? `<button class="ml-5 bg-[#FE1A7E] px-2 sm:px-4 bg-opacity-65 py-1 sm-px-4 rounded-lg">${item.btn3}</button>` : ''}
          </div>
        </div>
      </div>
      <div>
        <div class="mx-auto  w-[85%] md:w-[90%] lg:w-[110%]  text-white py-3 xl:ml-[-14%]  lg:ml-[-10%] 2md:ml-[5%] 2md:w-[90%] sm:ml-[24px]  font-custom text-lg ">
          <h1 class="font-medium text-2xl text-pink-500" >${item.title1}</h1>
          <p class="text-pink-200 text-lg">${item.miniTitle}</p>
          <p class="font-custom ">${item.desc1}</p>
          <h1 class="pt-2 font-medium text-2xl text-pink-500 ">Lesson Learned</h1>
          <p class="">${item.desc2}</p>
        </div>
        <div class="lg:ml-[-80px] 2md:ml-[-10px] xl:ml-[-105px] text-white 2md:px-9 md:px-5 px-7">
          <button class=" hover:bg-transparent hover:border hover:border-white bg-pink-700 px-5 py-2 font-custom rounded-lg"><a href="${item.link}">See Demo</a></button>
          ${item.link2 ? `<button class="border hover:bg-pink-700 hover:border-0 border-pink-200 px-5 py-2 ml-2 font-custom rounded-lg"><a href="${item.link2}">See Source</a></button>` : ''}
        </div>
      </div>
    </div>
    `;
  });

  let container = document.querySelector(".containerCard");
  display = display.join("");
  container.innerHTML = display;
}
