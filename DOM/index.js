//  static method displays an interactive list of the properties of the specified JavaScript object. 
console.dir(document)

console.log(document)

console.dir(document.body)

console.log(document.body.firstElementChild)

console.log(document.body.lastElementChild)

// HTML collection (collection of document elements) accessed by the their name ,id or class
console.log(document.body.children)

// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes) accessed by the their index
console.log(document.body.childNodes)
console.log(document.body.childNodes[1].textContent)