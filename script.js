// Projects data
const projects = [
    {
        title: "Anemia Detection System",
        description: "Developed a machine learning model that analyzes blood test parameters to detect anemia with 92% accuracy, helping in early diagnosis.",
        githubUrl: "https://github.com/Indusankya/anemia-detection"
    },
    {
        title: "Exploratory Data Analysis Toolkit",
        description: "Comprehensive EDA package with automated data cleaning, visualization, and statistical analysis capabilities for faster insights.",
        githubUrl: "https://github.com/Indusankya/eda-project"
    },
    {
        title: "Facial Recognition Attendance",
        description: "Automated attendance system using computer vision and facial recognition, reducing manual work by 80% in educational institutions.",
        githubUrl: "https://github.com/Indusankya/Attendance-manager"
    },
    {
        title: "MDA Analysis Chatbot",
        description: "Interactive chatbot for multi-dimensional analysis of datasets with natural language query capabilities.",
        githubUrl: "https://github.com/Indusankya/Mda-analysis-belle-bot"
    },
    {
        title: "AI Chat Companion",
        description: "Context-aware conversational AI with emotional intelligence capabilities for personalized interactions.",
        githubUrl: "https://github.com/Indusankya/Chat-friend"
    },
    {
        title: "Diet Analysis Framework",
        description: "Machine learning framework for analyzing nutritional data and improving diet tracking accuracy by 35%.",
        githubUrl: "https://github.com/Indusankya/Diet-analysis-accuracy"
    }
];

// Skills data
const skills = [
    {
        category: "Programming",
        items: [
            { name: "Python", icon: "fab fa-python", color: "#3776AB" },
            { name: "SQL", icon: "fas fa-database", color: "#00758F" },
            { name: "R", icon: "fab fa-r-project", color: "#276DC3" }
        ]
    },
    {
        category: "Machine Learning",
        items: [
            { name: "Scikit-learn", icon: "fas fa-brain", color: "#FF6F00" },
            { name: "TensorFlow", icon: "fas fa-project-diagram", color: "#EE4C2C" },
            { name: "PyTorch", icon: "fas fa-network-wired", color: "#EE4C2C" }
        ]
    },
    {
        category: "Data Processing",
        items: [
            { name: "Pandas", icon: "fas fa-table", color: "#150458" },
            { name: "NumPy", icon: "fas fa-calculator", color: "#0177B6" },
            { name: "Spark", icon: "fas fa-fire", color: "#FF6F00" }
        ]
    },
    {
        category: "Visualization",
        items: [
            { name: "Matplotlib", icon: "fas fa-chart-bar", color: "#1797C0" },
            { name: "Seaborn", icon: "fas fa-chart-line", color: "#3EAAAF" },
            { name: "Plotly", icon: "fas fa-chart-pie", color: "#5F4690" }
        ]
    },
    {
        category: "Specializations",
        items: [
            { name: "NLP", icon: "fas fa-comment-dots", color: "#3D9970" },
            { name: "Computer Vision", icon: "fas fa-eye", color: "#0074D9" },
            { name: "Predictive Modeling", icon: "fas fa-chart-bar", color: "#FF851B" }
        ]
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Load projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubUrl}" target="_blank" class="github-link">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        `;
        projectsGrid.appendChild(projectElement);
    });

    // Load skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skillCategory => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        
        let itemsHTML = '';
        skillCategory.items.forEach(item => {
            itemsHTML += `
                <div class="skill-item">
                    <i class="${item.icon}" style="color: ${item.color}; font-size: 1.5rem;"></i>
                    <span class="skill-name">${item.name}</span>
                </div>
            `;
        });
        
        categoryElement.innerHTML = `
            <h3>${skillCategory.category}</h3>
            ${itemsHTML}
        `;
        skillsContainer.appendChild(categoryElement);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Form handling
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
});