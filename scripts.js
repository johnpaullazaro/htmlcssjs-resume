
 const fullname = "Jaypes Lazaro";
 const country = "New Zealand";
  
 setHTML("fullname",fullname);  
 setHTML("location",country);
 
 const positions = ["Project Manager","Frontend Dev",
 "Backend Dev", "Fullstack Dev"];
 
positions.forEach(i => {
    const span = "<span class='tags'>"+i+"</span>";
     getHTML("positions").innerHTML += span;
});


const educationData = [
    { 
      schoollogo: "images/ust-logo.png",
      schoolbanner: "images/ust-campus.jpg",
      course:"BSIT",
      schoolname:"UST",
      yeargraduated:"2022"
    },
    { 
        schoollogo: "images/harvard-logo.png",
        schoolbanner: "images/harvard-campus.jpg",
        course:"BSCS",
        schoolname:"Harvard",
        yeargraduated:"2024"
      } 
]; 
educationData.forEach(i => {

            const educHTML = `<tr>
                <td>
                    <img style="height:120px;"
                    src="${i.schoollogo}" class="school-banner" />
                 </td>  
                <td>
                    <img style="width:220px;"
                    src="${i.schoolbanner}" class="school-banner" /> 
                </td>   
                <td>${i.course}</td>  
                <td>${i.schoolname}</td>  
                <td>${i.yeargraduated}</td>  
            </tr> `;

            getHTML("educationRows").innerHTML += educHTML;
  
});
 
const myskills = [ { name : "HTML 5", proficiency : "expert"},
{ name : "CSS 3", proficiency : "newbie"},
{ name : "React", proficiency : "skilled"},
{ name : "C#", proficiency : "beginner"},
{ name : "Java", proficiency : "newbie"},
{ name : "Angular", proficiency :  "skilled"}
];
  
myskills.forEach(i=> { 
    const skillsHTML = ` <li>
        ${i.name} 
        <div title="${i.proficiency}" class="proficiency ${i.proficiency} 
        proficiency-${i.proficiency}">
        </div>
    </li>`; 
 
     getHTML("myskills").innerHTML += skillsHTML;
});

 

const Legends = ["newbie","beginner","skilled","expert","advance"];

Legends.forEach(i => {
  const  htmLegends = ` <span class="legend-title">
    ${i}</span>
    <div class="legend-color  ${i}"></div>`;
    getHTML("legends-item").innerHTML += htmLegends;
 
}); 
 


function getHTML(id) {
    const doc = document;
    return doc.getElementById(id);
}

function setHTML(id,str) { 
    document.getElementById(id).innerHTML=str;
}

