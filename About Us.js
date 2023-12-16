document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.getElementById("team-container");

    const teamMembers = [
        "1.jpg",
        "team-member-2.jpg",
        "team-member-3.jpg",
        // Add more team members as needed
    ];

    teamMembers.forEach((member, index) => {
        const teamMember = document.createElement("div");
        teamMember.classList.add("team-member");
        teamMember.style.transform = `rotate(${(index * (360 / teamMembers.length))}deg) translateX(150px) rotate(${-index * (360 / teamMembers.length)}deg)`;
        
        const image = document.createElement("img");
        image.src = member;
        image.alt = `Team Member ${index + 1}`;
        
        teamMember.appendChild(image);
        teamContainer.appendChild(teamMember);
    });
});
