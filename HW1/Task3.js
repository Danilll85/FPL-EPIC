const getDays = (date, delimiter) => {
    let days = ""
    
    for (let i = 2, j = 1; i <= 31, j < 32; i++, j++){        
        days += `\t${date.getDate()} `;

        date.setDate(i);
        
        if (j % 7 == 0) {
            days += `\t|\n${delimiter}\n|`;
        } 
        
        if(date.getDate() == 1) {
            if (j == 28) break;
            
            i = 1;
            for (let k = 2; k < 35 - j + 2; k++){
                days += `\t${date.getDate()} `;
                date.setDate(k);
            }

            break;
        }
    }

    return days;
}

const setWeek = (firstDay) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let right = firstDay;

    let outputStr = ``;

    do {
        outputStr += `${days[right]}\t`;

        right + 1 == days.length ? right = 0: right++;

    } while (right !== firstDay)

    return outputStr;
}

const drawCalendar = (year, month) => {
    if(typeof month == 'number' && 
        (
            month < 1 || 
            month > 12
        )) {
        
        console.log('Incorrect month');
        return;
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];    
    
    if(typeof month == "string") { 
        month = months.findIndex((value) => value.toLowerCase() == month.toLowerCase()); 
        
        if (month == -1) {
            console.log("Incorrect month");
            
            return;
        }
        
        month++;  
    } 
    
    const date = new Date(`${year}-${month}-1`);
    
    let monthStr = ""; 
    
    const delimiter = String.fromCodePoint(0x2E3B).repeat(65);
    
    const days = getDays(date, delimiter);

    monthStr += `\t\t\t${' '.repeat(7)}${months[--month]}\n`;

    monthStr += `${delimiter}\n`;
    
    monthStr += `|\t${setWeek(date.getDay())}|\n`;

    monthStr += `${delimiter}\n|`;

    monthStr += days;

    if (monthStr.endsWith('|')){
        
        monthStr = monthStr.substring(0, monthStr.length - 1);

        console.log(monthStr); 
        
        return;
    }

    monthStr += `\t|\n${delimiter}\n`;
    
    console.log(monthStr); 
       
}

// drawCalendar(2000, "February")
// drawCalendar(2001, "February")
// drawCalendar(2001, 2)

//drawCalendar(2025, 3)
drawCalendar(2024, 0)
