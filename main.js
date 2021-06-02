// 1. You are to get all elements in your html by id using the selector method in JavaScript.


// 2.You are to change the header text which says "Let's modify the DOM" to "New DOM Layout" and also change the background color by adding this classList "bg-success"
let modify = document.getElementById("main-heading")
modify.innerHTML = "New DOM Layout";
document.getElementById("page-header").classList.add("bg-success");
document.getElementById("page-header").classList.remove("bg-dark")

// 3. You are to access each paragraph tag from your html and add the following text content to it:
document.getElementById('para1').textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."
document.getElementById('para2').textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

// 4. You are to add a click event function to the button which will create a new paragraph in the box layout when on clicks on it.
document.getElementById('btn').addEventListener("click", myScript)
function myScript() {
  document.getElementById('para4').textContent ="The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
}

// 5. You are to change each boxes to the proper colors mentioned in them.Note the new classLists you are to add for each boxes:

//   First box: bg - danger
document.getElementById("red").classList.add("bg-danger");
document.getElementById("red").classList.remove("bg-white");

// Second box: bg - primary
document.getElementById("blue").classList.add("bg-primary");
document.getElementById("blue").classList.remove("bg-white");
// Third box: bg - warning
document.getElementById("yellow").classList.add("bg-warning");
document.getElementById("yellow").classList.remove("bg-white");
// Fourth box: bg - success
document.getElementById("green").classList.add("bg-success");
document.getElementById("green").classList.remove("bg-white");
// Fifth box: bg - dark
document.getElementById("black").classList.add("bg-dark");
document.getElementById("black").classList.remove("bg-white");
document.getElementById("black").classList.remove("text-dark");
document.getElementById("black").classList.add("text-white");
