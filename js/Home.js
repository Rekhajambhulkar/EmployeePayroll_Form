window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/* Template Literal ES6 feature */
const createInnerHtml = () => {   
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
const innerHtml = `${headerHtml}
   
<tr>
    <td><img class="profile" alt="" 
        src="../assets/e2.jpg">
    </td>
    <td>Mark Keates</td>
    <td>Male</td>
    <td><div class='dept-label'>HR</div>
        <div class='dept-label'>Finance</div></td>
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
            <img class="1"  onclick="remove(this)" src="../assets/dlt.jpg" alt="delete">
            <img class="1"  onclick="update(this)" src="../assets/update1.jpg" alt="edit">  
        </td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}