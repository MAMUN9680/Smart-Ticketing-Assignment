

const allBtn = document.getElementsByClassName('btn-seat');
    // console.log(allBtn);

    let count = 0;
    for(const btn of allBtn){
        btn.addEventListener('click', function(){
        count = count + 1;
        document.getElementById('seat-count').innerText = count; 
            console.log(count);
        })
        
    }

