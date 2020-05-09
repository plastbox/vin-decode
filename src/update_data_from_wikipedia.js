const request = require('request');
const path = require('path');
const fs = require('fs');

request('https://en.wikipedia.org/wiki/Vehicle_identification_number', (error, response, body) => {
	if(error) { throw error; }
	var raw = body.split('<span class="mw-headline" id="List_of_common_WMI">')[1].split('<tbody>')[1].split('</tbody>')[0];
	var data = raw.split(/<tr[^>]*>\s<td>(.*)?\s<\/td>\s<td>(.*)?\s<\/td>\s<td.*?">([^<]*)/g).filter(l=>l.substr(0, 1) !== '<');
	var entries = [];
	for(var i = 0, l = data.length; i < l; i+=3) {
		data[i+1] = data[i+1].split('<')[0];
		entries.push(data.slice(i, i + 3));
	}
	entries = entries.reduce((carry, item) => {
		if(item[0].indexOf('-') > -1) {
			let [start, end] = item[0].split('-');
			start = start.substr(2);
			end = end.substr(2);
			let root = item[0].substr(0, 2);
			for(let i = start; i <= end; i++) {
				let wmi = root + i;
				if(!carry[wmi]) {
					carry[wmi] = {
						wmi: wmi,
						countries: new Set(),
						manufacturers: new Set()
					};
				}
				carry[wmi].countries.add(item[1]);
				carry[wmi].manufacturers.add(item[2]);
			}
			return carry;
		}
		item[0].split(',').map(i => i.trim()).forEach(wmi=>{
			if(!carry[wmi]) {
				carry[wmi] = {
					wmi: wmi,
					countries: new Set(),
					manufacturers: new Set()
				};
			}
			carry[wmi].countries.add(item[1]);
			carry[wmi].manufacturers.add(item[2]);
		});
		
		return carry;
	}, {});
	console.log(entries);
	var manufacturers = Object.values(entries).reduce((carry, item) => {
		item.manufacturers.forEach(manufacturer => {
			carry.set(item.wmi, manufacturer);
		});
		return carry;
	}, new Map());
	let output = [];
	manufacturers.forEach(function(value, key) {
		output.push({
			code: key,
			name: value
		});
	});
	fs.writeFileSync(__dirname + path.sep + 'data' + path.sep + 'manufacturers.js', 'export default ' + JSON.stringify(output, null, '\t'));

	var countries = Object.values(entries).reduce((carry, item) => {
		item.countries.forEach(country => {
			carry.set(item.wmi.substr(0, 2), country);
		});
		return carry;
	}, new Map());
	output = [];
	countries.forEach(function(value, key) {
		output.push({
			code: key,
			name: value
		});
	});
	fs.writeFileSync(__dirname + path.sep + 'data' + path.sep + 'countries.js', 'export default ' + JSON.stringify(output, null, '\t'));
});