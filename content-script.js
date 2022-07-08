window.onload = () => {
    console.log('viijay');
    // IDEExecute_submit__btn__1-QBY
    // const clickEvent = document.getElementsByClassName('');
    // clickEvent.addEventListener('click', () => { printSomething(); });
    var problem=document.getElementsByClassName("value")
    var problemCode = problem[0]?.innerText;
    var contestCode = problem[1]?.innerText;
    console.log(problemCode, contestCode);

    document.getElementsByClassName("ns-button")?.[1]?.addEventListener("click",function() {console.log('bijay');});
}

chrome.runtime.onMessage.addListener((message) => {
    /*
    * query DOM to get problem name and code
    * user sendResponse method to send info back to the sender
    * as a JSON object.
    */
    var problem=document.getElementsByClassName("value")
    var problemCode = problem[0]?.innerText;
    var contestCode = problem[1]?.innerText;
    console.log(problemCode, contestCode);

    });