function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('active');
  }
  document.querySelector('.fa-bars').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

  
const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
            label: "Signups",
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        // {
        //     label: "Earned",
        //     backgroundColor: '#71B374',
        //     borderColor: '#71B374',
        //     data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // hidden: true,
        // }
      ]
    },
});

const modalBtn = document.querySelectorAll('.btn-link');
console.log(modalBtn);
const overlay = document.querySelector('.overlay');

const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.btn-close');

function showModal() {
  overlay.classList.add('show');
  modal.classList.add('show');
} 

modalBtn.forEach(function(item){
  item.addEventListener('click', showModal)
})

closeBtn.addEventListener('click', function(){
  overlay.classList.remove('show');
  modal.classList.remove('show');
})
 