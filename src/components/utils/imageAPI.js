export default function fetchApi(search,page) {
return    fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=39875248-e66a9da82da2239ad899e3cdb&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.json())
  
}