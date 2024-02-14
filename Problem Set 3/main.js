let events = [];
let timeout = null;

getUMEventsWithImages ((eventsdata) => {
    events = eventsdata;
    const check = document.querySelector("#thumbnails");
    
    for (let i = 0; i < events.length; i++){
        // console.log("inside for loop" + events)
        const imgElem = document.createElement('img');
        imgElem.setAttribute("src",events[i].styled_images.event_thumb);
        console.log(events[i].image_url);

        // console.log(events[i]);
        imgElem.setAttribute("id",`thumbnail-${events[i].id}`); //thumbnail-0
        check.append(imgElem);

        imgElem.addEventListener("click", () =>{
            setImage(i);
            // console.log("selected image")
           
        });
    }
    setImage(0);
});

function setImage(i){
    console.log("inside setImage");
    if (timeout){
        clearTimeout(timeout);
        console.log("cleared timeout");
    }
    timeout = setTimeout(() => {
        setImage((i+1) % events.length) //once it reached last photo, it loops back up to top
    }, 10000);

    const focusEvent = events[i];

    const selectImg = document.querySelector("#selected-image");
    selectImg.setAttribute("src",focusEvent.image_url);
    console.log("selected image");

    const selectTitle = document.querySelector("#selected-title");
    selectTitle.innerText = focusEvent.event_title;
    selectTitle.setAttribute("href",focusEvent.permalink);

    const selectDate = document.querySelector("#selected-date");
    const date = getReadableTime(focusEvent.datetime_start);
    selectDate.innerText = date;

    const selectDescription = document.querySelector("#selected-description");
    selectDescription.innerText = focusEvent.description; // Use textContent to set text

    const selectClass = document.querySelectorAll(".selected");
    for (const thumbnail of selectClass){
        thumbnail.classList.remove("selected");
    }
    const thumbnailid = document.querySelector(`#thumbnail-${events[i].id}`);
    thumbnailid.classList.add("selected");


}








// (i+1) % events.length used to go to next image