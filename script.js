

function start() {

        const dateInput = document.getElementById('birthday');
        const result = document.getElementById('demo');

        function updateCountdown() {
            const targetDate = new Date(dateInput.value).getTime();
            const now = new Date();

            if (isNaN(targetDate)) {
                result.textContent = "Please select a valid date and time.";
                
                return;
            }

            const timeDifference = targetDate - now;

            if(timeDifference < -1) {
                // console.log(targetDate)
               alert("Date is Expired");
            }
            else{
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                var demiseconds = Math.floor(timeDifference % (1000) / 1000);

                result.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s ${demiseconds}d`;
            }

            
        }

       
        setInterval(updateCountdown, 100);

        
        dateInput.addEventListener('input', updateCountdown);

    }