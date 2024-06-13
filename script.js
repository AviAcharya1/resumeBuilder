// Taking elements from HTML
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");

function validateForm() {
    const inputs = document.querySelectorAll('input, textarea');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });
    return isValid;
}

let isHidden = true;

// Function to toggle between input form and resume preview
function toggleResume() {
    if (!validateForm()) {
        alert("Please fill out all fields.");
        return;
    }
    if (isHidden) {
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${inputField["name"].value}</h1>
                    <h4>${inputField["title"].value}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${inputField["objective"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${inputField["skills"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${inputField["academic_details"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${inputField["contact"].value}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${inputField["work_experience"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${inputField["achievements"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${inputField["projects"].value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}

function saveResume() {
    const resumeData = {
        name: inputField["name"].value,
        title: inputField["title"].value,
        work_experience: inputField["work_experience"].value,
        academic_details: inputField["academic_details"].value,
        objective: inputField["objective"].value,
        skills: inputField["skills"].value,
        projects: inputField["projects"].value,
        achievements: inputField["achievements"].value,
        contact: inputField["contact"].value
    };
    localStorage.setItem('resume', JSON.stringify(resumeData));
}

function loadResume() {
    const resumeData = JSON.parse(localStorage.getItem('resume'));
    if (resumeData) {
        inputField["name"].value = resumeData.name;
        inputField["title"].value = resumeData.title;
        inputField["work_experience"].value = resumeData.work_experience;
        inputField["academic_details"].value = resumeData.academic_details;
        inputField["objective"].value = resumeData.objective;
        inputField["skills"].value = resumeData.skills;
        inputField["projects"].value = resumeData.projects;
        inputField["achievements"].value = resumeData.achievements;
        inputField["contact"].value = resumeData.contact;
    } else {
        alert('No saved resume found');
    }
}
