/** @format */

// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

//   // This is an abstract method that subclasses will implement
//   get author() {
//     throw new Error("getAuthor() method must be implemented.");
//   }

//   // This is a polymorphic method than can take any subclass of Testimonial
//   get testimonialHTML() {
//     return `
//
//         <div class="testimonial">
//         <img src="${this.image}" class="profile-testimonial" />
//         <p class="quote">
//         ${this.quote}
//         </p>
//         <p class="author">- ${this.author}</p>
//         </div>
//
//     `;
//   }
// }

// class AuthorTestimonial extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// class CompanyTestimonial extends Testimonial {
//   #company = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#company = author;
//   }

//   get author() {
//     return this.#company + " Company";
//   }
// }

// const testimonial1 = new AuthorTestimonial(
//   "anies baswedan",
//   "Jakartaaa",
//   "https://plus.unsplash.com/premium_photo-1691547067161-fc1600117827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
// );

// console.log(testimonial1.image);

// const testimonial2 = new AuthorTestimonial(
//   "handsome boy",
//   "Hitam manis",
//   "https://plus.unsplash.com/premium_photo-1687187499404-2ed3c77b3cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8Mjk2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
// );

// const testimonial3 = new AuthorTestimonial(
//   "Bad boys",
//   "",
//   "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2551&q=80"
// );

// const testimonial4 = new AuthorTestimonial(
//   "rudi",
//   "orang terkeren didunia",
//   "image/123.jpeg"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

// mebuat testimonials menggunakan function
// jika diklick rating all akan menunujukkan semua gambar testimonials
// jika diklick rating 1 atau 2 dll nya akan menunjukkan gambar yang memiliki rating yang sesuai

const testimonialsData = [
  {
    author: "PDI",
    quote: "Megachan",
    image: source="https://cdn.medcom.id/dynamic/content/2020/06/22/1156679/OVTpH8N5er.png?w=1024",
    rating: 5,
  },
  {
    author: "Gerindra",
    quote: "Prabroro",
    image:"data:image/jpeg;base64,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",
    rating: 4,
  },
  {
    author: "demokrat",
    quote: "Agus rider",
    image:"https://t-2.tstatic.net/jogja/foto/bank/images/agus-3_20160925_121957.jpg",
    rating: 3,
  },

  {
    author: "Golkar",
    quote: "Erlangga sutrisno",
    image:"https://poliklitik.com/wp-content/uploads/2021/09/muf-golkar-bersih-1-copy.jpg",
    rating: 2,
  },
];

function ratingAll() {
  let ratingAllHtml = "";

  testimonialsData.forEach(function (rating) {
    ratingAllHtml += `
    <div class="testimonial">
         <img src="${rating.image}" class="profile-testimonial" />
         <p class="quote">
         ${rating.quote}
         </p>
         <p class="author">- ${rating.author}</p>
         </p>
         <p class="rating"> ${rating.rating}
         <i class="fa-solid fa-star"></i>
         </p>
     </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = ratingAllHtml;
}
ratingAll();

function selectRating(rating) {
  let selectRatingHtml = "";

  const ratingFiltered = testimonialsData.filter(function (item) {
    return item.rating === rating;
  });

  if (ratingFiltered.length === 0) {
    const notFound = document.getElementById("not-found");
    notFound.style.display = "block";
    notFound.style.textAlign = "center";
    notFound.innerHTML = `<h2>Not Found</h2>`;
  } else if (ratingFiltered.length > 0) {
    const messageEmptyData = document.getElementById("not-found");
    messageEmptyData.style.display = "none";
    ratingFiltered.forEach(function (rating) {
      selectRatingHtml += `
       <div class="testimonial">
           <img src="${rating.image}" class="profile-testimonial" />
           <p class="quote">
           ${rating.quote}
           </p>
           <p class="author">- ${rating.author}</p>
           <p class="rating"> ${rating.rating}
           <i class="fa-solid fa-star"></i>
           </p>
       </div>`;
    });
  }
  document.getElementById("testimonials").innerHTML = selectRatingHtml;
}
