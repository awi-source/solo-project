//hide menu in xs
function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('active');
  }
  document.querySelector('.fa-bars').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

 //create chart from Chart.js
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

// Open modal
const modalBtn = document.querySelectorAll('.btn-link');

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
 
//Add link
const addLink = document.forms['add-link'];

addLink.addEventListener('submit', function(e){
  e.preventDefault();
  const inputValue = addLink.querySelector('input[type="text"]').value;
  const linkUrl = addLink.querySelector('input[type="url"]').value;

  const linkElement = document.createElement('div');
  const linkNameWrapper = document.createElement('div')
  const linkName = document.createElement('span');

  const linkAddress = document.createElement('div');
  const linkWrapper = document.createElement('span');
  const link = document.createElement('a');

  const linkButtonWrapper = document.createElement('div');
  const linkButton = document.createElement('button');

  const trashButtonWrapper = document.createElement('div');
  const trashButton = document.createElement('button');

  const allLinksWrapper = document.querySelector('.links .container');

  linkName.textContent = inputValue;
  link.textContent = linkUrl;

  linkElement.classList.add('row', 'border-bottom');
  linkNameWrapper.classList.add('col', 'col-md-5');
  linkName.classList.add('link-name');

  linkAddress.classList.add('col', 'col-md-5');
  linkWrapper.classList.add('link-address');

  linkButtonWrapper.classList.add('col', 'col-md-1');
  linkButton.classList.add('btn-links', 'link');

  trashButtonWrapper.classList.add('col-md-1');
  trashButton.classList.add('btn-links', 'trash');

  linkNameWrapper.appendChild(linkName);

  linkWrapper.appendChild(link);
  linkAddress.appendChild(linkWrapper);
  

  linkButtonWrapper.appendChild(linkButton);
  trashButtonWrapper.appendChild(trashButton);

  linkElement.appendChild(linkNameWrapper);
  linkElement.appendChild(linkAddress);
  linkElement.appendChild(linkButtonWrapper);
  linkElement.appendChild(trashButtonWrapper);

  allLinksWrapper.appendChild(linkElement);

  overlay.classList.remove('show');
  modal.classList.remove('show');
})