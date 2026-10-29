/*
  নতুন ছবি যোগ করার নিয়ম:
  1) ছবিটি GitHub repository-র মূল ফোল্ডারে Upload করুন।
  2) নিচের photos তালিকায় ছবির নাম ও ক্যাপশন যোগ করুন।
  3) ছবির নাম হুবহু মিলতে হবে।
*/
const photos = [
  { src: "logo.jpg", caption: "আশুই ত্রিনেত্র সেবা সংঘ" },
  { src: "bookmark.png", caption: "কমিটির প্রতীক" },
  // নতুন ছবির লাইন এখানে যোগ করুন, যেমন:
  // { src: "ganesh-puja-2026.jpg", caption: "গণেশ পুজো ২০২৬" },
];

const grid = document.getElementById("galleryGrid");
if (grid) {
  grid.innerHTML = "";
  photos.forEach(photo => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption || "Ashui Trinetra Seva Sangha অনুষ্ঠানের ছবি";
    img.loading = "lazy";
    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption || "Ashui Trinetra Seva Sangha";
    figure.append(img, caption);
    grid.appendChild(figure);
  });
}
