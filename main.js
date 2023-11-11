
let MadiVProjets = document.getElementById('Projects')
fetch('./projets.json')
.then(response => response.json())
.then(data => {
    data.Projects.map((item, index) => {
        console.log(item.name);
        let divProjet = document.createElement('div')

        divProjet.setAttribute('class', 'card col-lg-4 p-2')

        let CardBody = document.createElement('div')

        CardBody.setAttribute('class', 'card-body')

        let ProjectImage = document.createElement('img')
        ProjectImage.setAttribute('src', item.image)
        ProjectImage.setAttribute('class', 'card-img-top projetimg')                   

        let ProjectName = document.createElement('h2')
        ProjectName.setAttribute('class', 'card-title')                             
        ProjectName.innerHTML = item.name
        // <a href="#" class="btn btn-primary">Go somewhere</a>
        let ProjetLink = document.createElement('a')
        ProjetLink.setAttribute('href', item.lien)                             
        ProjetLink.setAttribute('class', 'btn btn-primary')                             
        ProjetLink.setAttribute('target', '_blank')                             
        ProjetLink.innerHTML = 'Show Project'
        divProjet.appendChild(ProjectImage)
        CardBody.appendChild(ProjectName)
        CardBody.appendChild(ProjetLink)
        divProjet.appendChild(CardBody)
        MadiVProjets.appendChild(divProjet)
    })
})
.catch(error => console.error('Erreur de chargement JSON:', error));
