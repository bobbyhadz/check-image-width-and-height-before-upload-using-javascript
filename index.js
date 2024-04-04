console.log('bobbyhadz.com');

const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', event => {
  if (fileInput.files.length > 0) {
    const img = document.createElement('img');

    const selectedImage = fileInput.files[0];

    const objectURL = URL.createObjectURL(selectedImage);

    img.onload = function handleLoad() {
      console.log(`Width: ${img.width}, Height: ${img.height}`);

      if (img.width < 100 || img.height < 100) {
        console.log(
          "The image's width or height is less than 100px",
        );
      }

      URL.revokeObjectURL(objectURL);
    };

    img.src = objectURL;

    document.body.appendChild(img);
  }

  fileInput.value = null;
});
