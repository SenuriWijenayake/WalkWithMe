function tableDataOnClick(el)
{
	el.style.color  = 'red';
	var Date = el.textContent;
	sessionStorage.setItem('Date',Date);
	
}

function storeWalk()
{
	var Date = sessionStorage.getItem('Date');
	var Month = sessionStorage.getItem('Month');
	var Year = sessionStorage.getItem('Year');
	var time = document.getElementById('timePicker').value;
	alert(time);

}