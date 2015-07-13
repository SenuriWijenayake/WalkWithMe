function tableDataOnClick(el)
{
	el.style.color  = 'red';
	var Date = el.textContent;
	sessionStorage.setItem('Date',Date);
	
}

