const accList = [
  {
    email: "test1@gmail.com",
    imgUrl:
      "https://sites.google.com/site/listofcatbreeds/_/rsrc/1552920625215/british-shorthair/brithshothaircat.jpg",
  },

  {
    email: "test2@gmail.com",
    imgUrl:
      "https://c8.alamy.com/comp/BXTFXK/british-shorthair-silver-spotted-kitten-3-months-old-BXTFXK.jpg",
  },
];

const ImageApi = (email, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        accList.map((acc) => {
          return resolve({
            imgUrl: acc.email === email ? acc.imgUrl : "",
          });
        });
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};

export { ImageApi };
