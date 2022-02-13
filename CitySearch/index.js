const data = [];
const search = document.querySelector('.search');


fetch("data.json")
.then(res => res.json())
.then(resp => data.push(...resp))

function sortData( userInput , data){
  return  data.filter((e)=>{

    const regex = new RegExp(userInput,'gi');

    return (e.city.match(regex) || e.state.match(regex));
  })
}

function searchData() {
  const contain = document.querySelector('.containAll');
  const matcheData = sortData( this.value , data );

  const searchHtml = matcheData.map((e) => {
    const regex = new RegExp( this.value , 'gi' );
    const cityName = e.city.replace(regex,`<span class="highLights">${this.value}</span>`);
    const stateName = e.state.replace(regex,`<span class="highLights">${this.value}</span>`);
    return `<div class="contain"> ${cityName} , ${stateName} </div>`
  
  }).join('');
  console.log(searchHtml);
  contain.innerHTML = searchHtml;
}
search.addEventListener('keyup', searchData)

