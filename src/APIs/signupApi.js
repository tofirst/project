const signupAPI = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          status: "success",
        });
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};

export { signupAPI };
