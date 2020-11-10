function takeANumber (katzDeliLine, newName) {
  katzDeliLine.push(newName);
 
//  I found interpolation easier here so I interpolated the message that will welcome the new person
 var welcomeMessage = 'Welcome, ' + newName + '. You are number ' + katzDeliLine.length + ' in line.';
 return welcomeMessage;
 //
}

function nowServing (katzDeliLine) {
 var nobodyInLine = 'There is nobody waiting to be served!';
 if (katzDeliLine.length === 0) {
  return nobodyInLine
 
  } else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving ' + firstPerson + '.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
  
   
    var array = "";
    for(var i = 0; i < katzDeliLine.length; i++);
    array = array + (i + 1) + ' . ' + katzDeliLine[1];
      if (i < (katzDeliLine.length - 1))  {
        line = line + `, `;
}
}
return 'The line is currently: ' + array + ' ';
}
