document.getElementById("search-btn").addEventListener("click", function () {
  const query = document.getElementById("search").value.toLowerCase()
  const photos = document.querySelectorAll(".photo")

  photos.forEach((photo) => {
    const title = photo.getAttribute("data-title").toLowerCase()
    if (title.includes(query)) {
      photo.style.display = "block"
    } else {
      photo.style.display = "none"
    }
  })
})
