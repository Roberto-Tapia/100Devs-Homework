document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    // const choice = document.querySelector('input').value
    const url = `https://wizard-world-api.herokuapp.com/Spells`
    
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        randomSpellData = data[Math.floor(Math.random() * (data.length + 1))]
        console.log(randomSpellData)
        document.querySelector('.name').innerHTML = randomSpellData.name
        document.querySelector('.effect').innerHTML = randomSpellData.effect
        document.querySelector('.incantation').innerHTML = (randomSpellData.incantation ? randomSpellData.incantation : 'n/a')
        document.querySelector('.verbal').innerHTML = (randomSpellData.canBeVerbal ? randomSpellData.canBeVerbal : 'n/a')
        document.querySelector('.type').innerHTML = randomSpellData.type
        })
        
      .catch(err => {
          console.log(`error ${err}`)
      });
}
