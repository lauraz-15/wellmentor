// TEMPORARY CODE FOR PUSHING SCORE STATE ONTO RESULTS PAGE

const stateObject = window.history.state;

const score = stateObject ? stateObject.score : null;

// document.addEventListener("DOMContentLoaded", () => {
//   const physicalElement = document.getElementById("physical");
//   const depressionElement = document.getElementById("depression");
//   const relationshipsElement = document.getElementById("relationships");
//   const mentalElement = document.getElementById("mental");
//   const anxietyElement = document.getElementById("anxiety");
//   const professionalElement = document.getElementById("professional");

//   physicalElement.innerText = score.physical;
//   depressionElement.innerText = score.depression;
//   relationshipsElement.innerText = score.relationships;
//   mentalElement.innerText = score.mental;
//   anxietyElement.innerText = score.anxiety;
//   professionalElement.innerText = score.professional;
// });




console.log('results!');


const DUMMY_DATA = [
  { section: 'Physical', value: score.physical, icon: 'fa-solid fa-dumbbell' },
  { section: 'Depression', value: score.depression, icon: 'fa-solid fa-cloud-rain' },
  { section: 'Relationships', value: score.relationships, icon: 'fa-solid fa-user-group' },
  { section: 'Mental', value: score.mental, icon: 'fa-solid fa-brain' },
  { section: 'Anxiety', value: score.anxiety, icon: 'fa-solid fa-bolt-lightning' },
  { section: 'Professional', value: score.professional, icon: 'fa-solid fa-user-tie' },
];

const height = 110;
const width = 100;
const barWidth = 100;
const barOffset = 10;
const barColor = '#CD2A51';
const barBackground = '#FAC041';

DUMMY_DATA.forEach((item) => {
  const col = document.createElement('div');
  col.classList.add('col-md-4', 'col-6');
  const resultCard = document.createElement('div');
  resultCard.classList.add('results-card');
  const sectionTitle = item.section.toUpperCase();
  resultCard.innerHTML = `<div class="bar ${item.section}"></div><div class="bar-title"><i style="color: #CD2A51;"class="${item.icon}" style="color: green"></i><span>${item.value}</span></div>`;
  col.appendChild(resultCard);
  const resultsContainer = document.querySelector('.row'); 
  resultsContainer.appendChild(col);

  const svg = d3
    .select(`.${item.section}`)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', barBackground)
    .style('border-radius', '7px');

  svg
    .selectAll('rect')
    .data([item.value])
    .enter()
    .append('rect')
    .style('fill', barColor)
    .attr('width', barWidth)
    .attr('rx', 3)
    .attr('height', (d) => d) 
    .attr('x', 0)
    .attr('y', (d) => height - d); 
});


