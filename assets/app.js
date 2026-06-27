function searchDocuments(){
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const documents = document.querySelectorAll('.document');
  documents.forEach((doc)=>{
    const text = (doc.innerText + ' ' + (doc.dataset.search || '')).toLowerCase();
    doc.style.display = text.includes(query) ? 'flex' : 'none';
  });
}
