
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];

  const dropMenu= document.getElementById('selectMovie')

  moviesList.forEach((movie,index)=>{
    const opt= document.createElement('option');
    opt.value=index;
    opt.textContent=movie.movieName;
    dropMenu.appendChild(opt);
  });
   
  const movName= document.getElementById('movieName');
  const prcName= document.getElementById('moviePrice');
  dropMenu.addEventListener('change',()=>{
    console.log(dropMenu.value);
     movName.textContent=moviesList[dropMenu.value].movieName;
     prcName.textContent=`$ ${moviesList[dropMenu.value].price}`;
  });

  const seats = document.querySelectorAll('.seatCont .seat');
  const display =document.querySelector('.selectedSeatsHolder');
  const counSeat= document.querySelector('#numberOfSeat');
  const totalPrice= document.querySelector('#totalPrice');
  
  seats.forEach((seat,index)=>{
    seat.setAttribute("Seat-Number", index+1);

    if(!seat.classList.contains("occupied")){
      seat.addEventListener('click', ()=>{

        seat.classList.toggle('selected');

    const selectedSeats = document.querySelectorAll('.seat.selected');
    const seatNumbers = Array.from(selectedSeats).map(seat => seat.getAttribute('Seat-Number')).filter(number => number !== null);

    
    display.innerHTML = '';

    if (seatNumbers.length === 0) {
      const noSeatMsg = document.createElement('span');
      noSeatMsg.className = 'noSelected';
      noSeatMsg.textContent = 'No Seat Selected';
      display.appendChild(noSeatMsg);
    } else {
      seatNumbers.forEach(num => {
        const seatSpan = document.createElement('span');
        seatSpan.className = 'selectedSeat';
        seatSpan.textContent = `Seat ${num}`;
        display.appendChild(seatSpan);
      });

    }
        
     counSeat.textContent=seatNumbers.length;
     totalPrice.textContent=seatNumbers.length*moviesList[dropMenu.value].price;


  }
    )
    }

  })

  const save = document.getElementById('proceedBtn');

  save.addEventListener('click', ()=>{
        const selectedSeats = document.querySelectorAll('.seat.selected');
      if(selectedSeats.length==0){
        alert("Oops no seat Selected");
      }else{
      alert("Yayy! Your Seats have been booked")
      selectedSeats.forEach(seat => {
        seat.classList.remove('selected');  // remove highlight
        seat.classList.add('occupied');     // mark as booked
      });
    
    display.innerHTML = '';

      const noSeatMsg = document.createElement('span');
      noSeatMsg.className = 'noSelected';
      noSeatMsg.textContent = 'No Seat Selected';
      display.appendChild(noSeatMsg);

      counSeat.textContent=0;
     totalPrice.textContent='$ 0';
}

  })

  const cancl = document.getElementById('cancelBtn');
  
  cancl.addEventListener('click', ()=>{
        const selectedSeats = document.querySelectorAll('.seat.selected');
      
      selectedSeats.forEach(seat => {
        seat.classList.remove('selected'); 
      });
    
    display.innerHTML = '';

      const noSeatMsg = document.createElement('span');
      noSeatMsg.className = 'noSelected';
      noSeatMsg.textContent = 'No Seat Selected';
      display.appendChild(noSeatMsg);

      counSeat.textContent=0;
     totalPrice.textContent='$ 0';


  })

