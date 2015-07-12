function setWeek()
{
	var today = new Date();
	settingDate(today);
}

function settingDate(today)
	{
		document.getElementById('nextWeek').style.visibility = "visible";
		document.getElementById('lastWeek').style.visibility = "hidden";
		var today = new Date(today);
		
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
		var date = today.getDate();
		var dayNum = today.getDay();
		var day = dayNames[dayNum];
		var month = monthNames[today.getMonth()];
		var year = today.getYear() + 1900;
		
		//Setting the calendar caption
		document.getElementById('calTitle').innerHTML = month + " " + year; 
		var saveMonth = month + "," + year;
		sessionStorage.setItem("Month", month);
		sessionStorage.setItem("Year", year);		
		
		//Setting today's date
		var tableObj = document.getElementById('tableTitle');
		var selectedRow = tableObj.rows[1];
		var selectedCell = selectedRow.cells[dayNum];
		selectedCell.innerHTML = date;
		selectedCell.className = 'today';
	
		var i=dayNum+1; 
		var j=dayNum-1; //1
		var todayCopy = today;
		
		//Setting previous days
		for(;j>=0;j--)
		{
			var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
			var date = yesterday.getDate(); //22
			var day = dayNames[yesterday.getDay()]; //Mon
			var month = monthNames[yesterday.getMonth()];
			var year = yesterday.getYear() + 1900;
			
			//Same month situation
			if(today.getMonth() == yesterday.getMonth())
			{
				var selectedRow = tableObj.rows[1];
				var selectedCell = selectedRow.cells[j];
				selectedCell.innerHTML = date;
				selectedCell.className = 'disabledCells';
			}
						
			today = yesterday;
			
		}
		for(;i<=6;i++)
		{
			var tomorrow = new Date(todayCopy.getTime() + 24 * 60 * 60 * 1000);
			var tomorrowDate = tomorrow.getDate();
			var day = dayNames[tomorrow.getDay()];
			var month = monthNames[tomorrow.getMonth()];
			var year = tomorrow.getYear() + 1900;
			
			//Same month situation
			if(todayCopy.getMonth() == tomorrow.getMonth())
			{
				var selectedRow = tableObj.rows[1];
				var selectedCell = selectedRow.cells[i];
				selectedCell.innerHTML = tomorrowDate;
				
			}
			todayCopy = tomorrow;
		}
		var nextWeek = new Date(todayCopy.getTime() + 24 * 60 * 60 * 1000);		
		sessionStorage.setItem("NextWeek",nextWeek);
};

function loadNextWeek()
	{
		today = Date.parse(sessionStorage.getItem("NextWeek"));
		settingDate(today);
		document.getElementById('nextWeek').style.visibility = "hidden";
		document.getElementById('lastWeek').style.visibility = "visible";
};


	