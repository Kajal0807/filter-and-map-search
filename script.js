const studentData = [
    { name: "Kajal", marks: 85, class: "10th", address: "123 colony Greater Noida" },
    { name: "Rohit", marks: 90, class: "10th", address: "456 street Delhi" },
    { name: "Amit", marks: 75, class: "10th", address: "789 avenue Mumbai" },
    { name: "Priya", marks: 95, class: "10th", address: "321 road Chennai" },
    { name: "Sneha", marks: 80, class: "10th", address: "654 lane Kolkata" },
    { name: "Rahul", marks: 88, class: "10th", address: "987 boulevard Pune" },
    { name: "Anjali", marks: 92, class: "10th", address: "246 drive Jaipur" },
    { name: "Vikram", marks: 78, class: "10th", address: "135 path Hyderabad" },
    { name: "Neha", marks: 83, class: "10th", address: "864 street Lucknow" },
    { name: "Arjun", marks: 89, class: "10th", address: "579 avenue Chandigarh" },
    { name: "Riya", marks: 91, class: "10th", address: "246 road Bhopal" },
    { name: "Aditya", marks: 87, class: "10th", address: "135 lane Patna" },
    { name: "Isha", marks: 94, class: "10th", address: "864 boulevard Ranchi" },
    { name: "Kabir", marks: 82, class: "10th", address: "579 drive Guwahati" },
    { name: "Zara", marks: 86, class: "10th", address: "321 lane Indore" },
];

const createStudentCard = studentData.map((student)=>{
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.studentName = student.name.toLowerCase();
    card.innerHTML = `
        <h2>${student.name}</h2>
        <p>Marks: ${student.marks}</p>
        <p>Class: ${student.class}</p>
        <p>Address: ${student.address}</p>
    `;
    return card;
   });


const cardContainer = document.querySelector(".card-container");
createStudentCard.forEach((card) => {
    cardContainer.appendChild(card);
});

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#search-btn");

function searchStudents() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    createStudentCard.forEach((card) => {
        card.hidden = !card.dataset.studentName.includes(searchTerm);
    });
}

searchInput.addEventListener("input", searchStudents);
searchButton.addEventListener("click", searchStudents);
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchStudents();
    }
});
