function doTheThing(){
    document.getElementById('some-text')
    .innerText = 'from body onload'
}

function variableExamples(){

    var oldWay = 134;
    oldWay = 'a string';

    console.log('oldway: ', oldWay)

    let newWay = 123;
    newWay = 'something else'

    console.log('newway: ', newWay)

    const anotherWay = 456;
    anotherWay = 'reset this'
    
    console.log('anotherway: ', anotherWay)

    const numberVar = 2
    const stringVar = "2"

    if (numberVar == stringVar) {
        console.log('yep')
    }
    else {
        console.log('nope')
    }
    
    const associativeArraty = {
        "game" : "double dragon",
        "system "
    }
}