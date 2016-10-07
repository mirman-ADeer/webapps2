// Your Code Here:
function fizzBuzz(n,elements) {
  // Implement FizzBuzz
  var text = ''
  for (var i = 0; i < elements.length; i++) {
    if (n % elements[i][1] == 0) {
      text += elements[i][0];
    }
  }
  if (text == '') {
    text += n;
  } else {
    text += '!';
  }
  return text;
}

// Any other functions your app requires
function main() {
  var elements = [['Fizz',3],['Buzz',5]]
  document.getElementById("singleButton").addEventListener("click", function() {
    var input = parseInt(document.getElementById("singleInput").value);
    if (Number.isInteger(input)) {
      document.getElementById("singleOutput").innerHTML = fizzBuzz(input, elements);
    } else {
      var warning = document.createElement('div');
      warning.className = 'alert alert-dismissible alert-warning';
      warning.id = 'singleWarning'
      warning.innerHTML = '<button type="button" class="close" data-dismiss="alert" id="singleClose">&times;</button><h4>Warning!</h4><p>You entered an invalid input!</p>'
      document.getElementById('single').appendChild(warning);
    }
  });
  document.getElementById("upToButton").addEventListener("click", function() {
    var input = parseInt(document.getElementById("upToInput").value);
    if (Number.isInteger(input)) {
      var text = "";
      for (var i = 1; i <= parseInt(document.getElementById("upToInput").value); i++) {
        text += fizzBuzz(i,elements);
        text += '<br/>'
      }
      document.getElementById("upToOutput").innerHTML = text;
    } else {
      var warning = document.createElement('div');
      warning.className = 'alert alert-dismissible alert-warning';
      warning.id = 'singleWarning'
      warning.innerHTML = '<button type="button" class="close" data-dismiss="alert" id="singleClose">&times;</button><h4>Warning!</h4><p>You entered an invalid input!</p>'
      document.getElementById('upTo').appendChild(warning);
    }
  });
  document.getElementById("addValueButton").addEventListener("click", function() {
    if (Number.isInteger(parseInt(document.getElementById('addValueNumber').value))) {
      var name = document.getElementById('addValueName').value;
      var number = parseInt(document.getElementById('addValueNumber').value);
      elements.push([name,number]);
      var warning = document.createElement('div');
      warning.className = 'alert alert-dismissible alert-success';
      warning.id = 'addValueSucess'
      warning.innerHTML = ' <button type="button" class="close" data-dismiss="alert">&times;</button><strong>You have added</strong> ' + name + ' with a value of ' + number + '.';
      document.getElementById('addValue').appendChild(warning);
      document.getElementById('values').innerHTML += '<br/>' + name + ': ' + number;
    } else {
      var warning = document.createElement('div');
      warning.className = 'alert alert-dismissible alert-warning';
      warning.id = 'singleWarning'
      warning.innerHTML = '<button type="button" class="close" data-dismiss="alert" id="singleClose">&times;</button><h4>Warning!</h4><p>You entered an invalid input!</p>'
      document.getElementById('addValue').appendChild(warning);
    }
  });
}

main()
