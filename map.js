function map(loclink, loc) {
	var url = "/screens/map.html?loc=" + encodeURIComponent(loc);	// add location code as url parameter
	var $nextTD = $(loclink).closest('td').next();			// get the TD that contains the call number which is the next TD after the one that contains the clicked link
	var call_num = $nextTD.text();							// get only the text of the call number TD (remove comments and html tags)
	call_num = call_num.trim();								// trim to remove any preceding or trailing spaces from the call number
	url += "&callnum=" + encodeURIComponent(call_num);		// add call number as url parameter

	window.open(url);										// load url in new window
}