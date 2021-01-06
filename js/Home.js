window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/* Template Literal ES6 feature */
const createInnerHtml = () => {   
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
     let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
     innerHtml = `${innerHtml}
   
    <tr>
    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td> 
    <td>${empPayrollData._salary}</td>
    <td>${stringfyDate(empPayrollData._startDate)}</td>
    <td>
       <img name="${empPayrollData._id}"  onclick="remove(this)" src="../assets/dlt.jpg" alt="delete">
       <img name="${empPayrollData._id}"  onclick="update(this)" src="../assets/update1.jpg" alt="edit">  
    </td>
    </tr>
    `;
    }
document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}