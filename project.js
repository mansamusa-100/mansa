let projectData = [
    {
        image: 'img/project-1.png',
        name: 'project one',
        detail: 'hello',
        github: '#',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
]
const createProjectCards = (data) => {
    let projectComtainer = document.querySelector('.project-container');

    projectComtainer.innerHTML += `
        <div class="project-card" data-tags="${data.tags}">
            <div class="project-wrapper">
                <div class="project-thumbnail">
                    <img src="img/close.png" class="close-btn" alt="">
                    <img src="${data.image}" class="project-img" alt="">
                    <span class="tags">${data.tags}</span>
                </div>

                <div class="project-body">
                    <h1 class="project-name">project 1</h1>
                    <p class="project-detail">This is my first project</p>
                    <a href="#" class="btn">github</a>
                    <a href="#" class="btn">see live</a>
                </div>
            </div>
        </div>
    `;
}
projectData.forEach(data => createProjectCards(data))