let hasDownloadedResume = false; 
let downloadCount = 0;

function downloadResume() {
    if (!hasDownloadedResume) {
        alert("Your resume downloaded successfully!");
        hasDownloadedResume = true; 
    }
    downloadCount++;
    document.getElementById('downloadCount').textContent = `Resume downloaded ${downloadCount} time(s).`;
}
document.getElementById('addSkillButton').addEventListener('click', function() {
    const skillInput = document.getElementById('skillInput');
    const skillList = document.getElementById('skillsList');
    const newSkill = skillInput.value.trim();

    if (newSkill) {
        const skillItem = document.createElement('li');
        skillItem.classList.add('list-group-item');
        skillItem.textContent = newSkill;
        skillList.appendChild(skillItem);
        skillInput.value = '';
    }
});

const projects = [
    { title: "Portfolio Website", description: "Created a portfolio website using HTML, CSS, and JavaScript.", deadline: "2024-12-31" },
];

function displayProjects() {
    const projectList = document.getElementById('projectList');
    const currentDate = new Date();

    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.classList.add('list-group-item');

        const projectDeadline = new Date(project.deadline);
        let status = projectDeadline > currentDate ? 'Ongoing' : 'Completed';

        projectItem.innerHTML = `<strong>${project.title}</strong> - ${project.description} <br> <em>Status: ${status}</em>`;
        projectList.appendChild(projectItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    document.querySelector('.resume-btn').addEventListener('click', downloadResume);
});

const educationData = [
    { institution: "Northern Arizona University", degree: "Bachelor of Science in Computer Science", year: "2025 (Expected)" }
];

const experienceData = 
[
    { company: "Prodapt solutions(Future experience)", position: "Junior developer", duration: "may 2025- august 2025" }
];

function createEducationTable() {
    const educationTable = document.getElementById('educationTable');
    let tableContent = `<thead>
                            <tr>
                                <th>Institution</th>
                                <th>Degree</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>`;
    
    educationData.forEach(edu => {
        tableContent += `<tr>
                            <td>${edu.institution}</td>
                            <td>${edu.degree}</td>
                            <td>${edu.year}</td>
                         </tr>`;
    });

    tableContent += `</tbody>`;
    educationTable.innerHTML = tableContent;
}

function createExperienceTable() {
    const experienceTable = document.getElementById('experienceTable');
    let tableContent = `<thead>
                            <tr>
                                <th>Company</th>
                                <th>Position</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>`;
    
    experienceData.forEach(exp => {
        tableContent += `<tr>
                            <td>${exp.company}</td>
                            <td>${exp.position}</td>
                            <td>${exp.duration}</td>
                         </tr>`;
    });

    tableContent += `</tbody>`;
    experienceTable.innerHTML = tableContent;
}

createEducationTable();
createExperienceTable();
