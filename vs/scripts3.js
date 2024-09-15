// const devices = [
//     { name: 'AR Billboard 1', id: 'AR001', location: 'Mumbai', status: 'Active', date: '2023-01-15', ads: '5 Ads' },
//     { name: 'AR Display 2', id: 'AR002', location: 'Delhi', status: 'Active', date: '2022-10-05', ads: '7 Ads' },
//     { name: 'AR Kiosk 3', id: 'AR003', location: 'Bangalore', status: 'Inactive', date: '2021-12-20', ads: '0 Ads' },
//     { name: 'AR Glasses 4', id: 'AR004', location: 'Chennai', status: 'Active', date: '2022-05-30', ads: '3 Ads' },
//     { name: 'AR Screen 5', id: 'AR005', location: 'Hyderabad', status: 'Maintenance', date: '2023-03-18', ads: '2 Ads' },
//     { name: 'AR Panel 6', id: 'AR006', location: 'Kolkata', status: 'Active', date: '2021-08-22', ads: '8 Ads' },
//     { name: 'AR Poster 7', id: 'AR007', location: 'Pune', status: 'Active', date: '2023-06-10', ads: '6 Ads' },
//     { name: 'AR Stand 8', id: 'AR008', location: 'Ahmedabad', status: 'Inactive', date: '2022-01-19', ads: '0 Ads' },
//     { name: 'AR Board 9', id: 'AR009', location: 'Jaipur', status: 'Active', date: '2023-02-12', ads: '4 Ads' },
//     { name: 'AR Display 10', id: 'AR010', location: 'Chandigarh', status: 'Active', date: '2021-11-05', ads: '10 Ads' },
// ];

// const rowsPerPage = 5;
// let currentPage = 1;

// function displayTable(page) {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     const paginatedDevices = devices.slice(start, end);

//     const tableBody = document.getElementById('deviceTable');
//     tableBody.innerHTML = '';

//     paginatedDevices.forEach(device => {
//         const row = `<tr>
//             <td><input type="checkbox"></td>
//             <td>${device.name}</td>
//             <td>${device.id}</td>
//             <td>${device.location}</td>
//             <td>${device.status}</td>
//             <td>${device.date}</td>
//             <td>${device.ads}</td>
//             <td><a href="#">View</a></td>
//         </tr>`;
//         tableBody.innerHTML += row;
//     });

//     updatePagination(page);
// }

// function updatePagination(page) {
//     const pageNumbers = document.getElementById('pageNumbers');
//     pageNumbers.innerHTML = '';

//     const totalPages = Math.ceil(devices.length / rowsPerPage);

//     for (let i = 1; i <= totalPages; i++) {
//         const pageSpan = document.createElement('div');
//         pageSpan.innerText = i;
//         pageSpan.className = page === i ? 'active' : '';
//         pageSpan.addEventListener('click', () => displayTable(i));
//         pageNumbers.appendChild(pageSpan);
//     }

//     document.getElementById('previous').style.display = page === 1 ? 'none' : 'inline';
//     document.getElementById('next').style.display = page === totalPages ? 'none' : 'inline';
// }

// document.getElementById('previous').addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         displayTable(currentPage);
//     }
// });

// document.getElementById('next').addEventListener('click', () => {
//     const totalPages = Math.ceil(devices.length / rowsPerPage);
//     if (currentPage < totalPages) {
//         currentPage++;
//         displayTable(currentPage);
//     }
// });

// window.onload = function() {
//     displayTable(currentPage);
// };
// delete button //


document.querySelectorAll('.edit-btn').forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const row = this.closest('tr');
      const name = row.querySelector('.name').innerText;
      const age = row.querySelector('.age').innerText;
  
      // Display the form with the current row values
      document.getElementById('editForm').style.display = 'block';
      document.getElementById('editName').value = name;
      document.getElementById('editAge').value = age;
  
      // On Save, update the table row with new values
      document.getElementById('saveChanges').onclick = function() {
        row.querySelector('.name').innerText = document.getElementById('editName').value;
        row.querySelector('.age').innerText = document.getElementById('editAge').value;
  
        // Hide the form after saving
        document.getElementById('editForm').style.display = 'none';
      };
    });
  });
  
