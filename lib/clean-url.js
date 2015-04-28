module.exports = function(url) {
	var chars = ['-',',','.','_','~',':','/','?','#','[',']','@','!','$','&','(',')','*','+',';','='];
	chars.forEach(function(elem, index, array){
	  url = url.split(chars[index]).join('-');
	});

	return url;
};