export const getUrl = (): string => window.location.href;
export const urlPattern =
  /^https:\/\/www\.ticketmaster\.[a-zA-Z]+\.[a-zA-Z]+\/[a-zA-Z0-9-]+\/event\/[a-zA-Z0-9]+$/;

export const isMatched = (): boolean => {
  if (urlPattern.test(getUrl())) return true;
  return false;
};

export const clickNextSibling = (clickedElement: any, max: number) => {
  console.log("from fn: current element: ", clickedElement)

  let nextElement = clickedElement.nextElementSibling; // clickelement ar porer ta
  if (nextElement) {
    console.log(nextElement);
    const eleID = nextElement.attributes[0]?.value;
    const ele = document.querySelector(`#${eleID}`);
    if (ele) {
      console.dir(ele)
      // ele.click();
    } else {
      console.log("ele not found!");
    }
    console.log("clicked sib!");
  }
  // let index = max; // it will click 3 element
  // if(clickedElement){
  //   const sib = clickedElement.nextElementSibling;
  //   console.log("next sib: ", sib);
  //   setTimeout(()=>{
  //     if(sib){
  //       sib.click();
  //       console.log("clicked.....");
  //     }
  //   }, 4000)

  // }
  // clickedElement.nextElementSibling?.click(); // clickelement ar porer ta

  // while (index >= 0 && nextElement) {
  //   if (index === 0) break;
  //   console.log("nextSibling...: ", nextElement);

  //   nextElement && nextElement.click();
  //   nextElement = nextElement.nextElementSibling;
  //   index--;
  // }
  // ///////////////////
  // console.log("done");
  // const btn = document.querySelector("#eraseBtn");
  // btn.click();
};
